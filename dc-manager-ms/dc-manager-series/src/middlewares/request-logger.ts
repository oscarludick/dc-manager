import { Request, Response } from "express";
import { ExpressMiddlewareInterface } from "routing-controllers";

import { logger } from "../logger";

export class RequestLoggerMiddleware implements ExpressMiddlewareInterface {
  constructor() {}
  use(request: Request, _: Response, next: (err?: any) => any): any {
    logger.info(
      `[${request.ip}] - ${request.method} ${request.path} -  ${JSON.stringify(
        request.body
      )}, ${JSON.stringify(request.params)}, ${JSON.stringify(request.query)}`
    );
    next();
  }
}
