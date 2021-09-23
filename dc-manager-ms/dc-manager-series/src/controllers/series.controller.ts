import { Response } from "express";
import {
  Res,
  Body,
  HttpCode,
  JsonController,
  Post,
  Put,
  UseBefore,
} from "routing-controllers";

import { ValidateSchemaMiddleware } from "../middlewares/validate-schema";
import { RequestLoggerMiddleware } from "../middlewares/request-logger";

import { SeriesRequestModel } from "../models/series-request.model";
import { SeriesService } from "../services/series.service";

@JsonController("/series")
@UseBefore(RequestLoggerMiddleware)
export class SeriesController {
  private seriesService: SeriesService;

  constructor() {
    this.seriesService = new SeriesService();
  }

  @Post()
  @UseBefore(ValidateSchemaMiddleware)
  async save(
    @Res() response: Response,
    @Body() body: SeriesRequestModel
  ): Promise<any> {
    const result = await this.seriesService.save(body);
    if (!result.errors) {
      return response.status(201).json({
        payload: result,
        message: "Serie creada con exito.",
        errors: null,
      });
    }
    return response.status(400).json({
      payload: null,
      messsage: "Error al crear serie.",
      errors: result.errors,
    });
  }

  @Put()
  @HttpCode(200)
  @UseBefore(ValidateSchemaMiddleware)
  async update(@Body() body: SeriesRequestModel): Promise<any> {
    return { msg: body };
  }
}
