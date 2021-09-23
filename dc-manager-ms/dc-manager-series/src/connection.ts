import Mongoose from "mongoose";
import config from "config";

import { logger } from "./logger";

Mongoose.Promise = global.Promise;

class MongooseInstance {
  static mongooseInstance: any;
  static mongooseConnection: Mongoose.Connection;

  constructor() {
    MongooseInstance.connect();
  }

  static connect(): Mongoose.Connection {
    if (this.mongooseInstance) {
      return this.mongooseInstance;
    }

    let connectionString: string = config.get("db.hostname");
    this.mongooseConnection = Mongoose.connection;

    this.mongooseConnection.once("open", () => {
      logger.info("Connect to an mongodb is opened.");
    });

    this.mongooseInstance = Mongoose.connect(connectionString);

    this.mongooseConnection.on("connected", () => {
      logger.info("Mongoose default connection open to " + connectionString);
    });

    // If the connection throws an error
    this.mongooseConnection.on("error", (msg) => {
      logger.info("Mongoose default connection message:", msg);
    });

    // When the connection is disconnected
    this.mongooseConnection.on("disconnected", () => {
      setTimeout(() => {
        this.mongooseInstance = Mongoose.connect(connectionString);
      }, 10000);
      logger.info("Mongoose default connection disconnected.");
    });

    // When the connection is reconnected
    this.mongooseConnection.on("reconnected", () => {
      logger.info("Mongoose default connection is reconnected.");
    });

    // If the Node process ends, close the Mongoose connection
    process.on("SIGINT", () => {
      this.mongooseConnection.close(() => {
        logger.info(
          "Mongoose default connection disconnected through app termination."
        );
        process.exit(0);
      });
    });

    return this.mongooseInstance;
  }
}

MongooseInstance.connect();
export { MongooseInstance };
