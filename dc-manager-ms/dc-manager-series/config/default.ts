import dotenv from "dotenv";

dotenv.config({ debug: true });

export default {
  http: {
    port: process.env.HTTP_PORT || 1337,
  },
  db: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "root",
    hostname: process.env.DB_HOST || "localhost",
  },
};
