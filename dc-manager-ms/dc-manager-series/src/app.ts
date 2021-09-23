import express, { Express } from "express";
import config from "config";
import morgan from "morgan";

import { useExpressServer } from "routing-controllers";

import { logger } from "./logger";
import { SeriesController } from "./series/series.controller";

export class App {
  private readonly app: Express;
  private readonly http: { port: number } = {} as any;

  constructor() {
    this.app = express();
    this.http = config.get("http");

    this.middlewares();
    this.setup();
    this.init();
  }

  private init() {
    const server = this.app.listen(this.http.port, () => {
      logger.info(`Server Started! Express: http://localhost:${this.http.port}`);
    });
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan("dev"));
  }

  private setup(): void {
    useExpressServer(this.app, {
      routePrefix: "api",
      controllers: [SeriesController],
      cors: false,
      validation: false,
    });
  }
}
