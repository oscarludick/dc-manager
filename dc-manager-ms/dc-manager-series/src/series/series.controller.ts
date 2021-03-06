import { Response } from "express";
import {
  Res,
  Body,
  HttpCode,
  JsonController,
  Post,
  Put,
  UseBefore,
  Get,
  Param,
  Delete,
} from "routing-controllers";

import { ValidateSchemaMiddleware } from "../middlewares/validate-schema";
import { RequestLoggerMiddleware } from "../middlewares/request-logger";

import { SeriesRequestModel } from "./series-request.model";
import { SeriesResponseModel } from "./series-response.model";

import { SeriesService } from "./series.service";

@JsonController("/series")
@UseBefore(RequestLoggerMiddleware)
export class SeriesController {
  private seriesService: SeriesService;

  constructor() {
    this.seriesService = new SeriesService();
  }

  @Delete("/:id")
  async delete(@Param("id") id: string, @Res() response: Response): Promise<any> {
    const result = await this.seriesService.delete(id);
    if (!result.errors.length) {
      return response
        .status(200)
        .json(new SeriesResponseModel(result.data, result.errors, "Se eliminĂ³ serie con exito"));
    } else {
      return response
        .status(400)
        .json(
          new SeriesResponseModel(
            result.data,
            result.errors,
            `Error al eliminar serie con id ${id}.`
          )
        );
    }
  }

  @Get("/:id")
  async get(@Param("id") id: string, @Res() response: Response): Promise<any> {
    const result = await this.seriesService.get(id);
    if (!result.errors.length) {
      return response
        .status(200)
        .json(new SeriesResponseModel(result.data, result.errors, ""));
    } else {
      return response
        .status(400)
        .json(
          new SeriesResponseModel(
            result.data,
            result.errors,
            `Error al obtener serie con id ${id}.`
          )
        );
    }
  }

  @Get()
  async getAll(@Res() response: Response): Promise<any> {
    const result = await this.seriesService.getAll();
    if (!result.errors.length) {
      return response
        .status(200)
        .json(new SeriesResponseModel(result.data, result.errors, "Listado de series"));
    } else {
      return response
        .status(400)
        .json(
          new SeriesResponseModel(
            result.data,
            result.errors,
            "Error al obtener listado de series."
          )
        );
    }
  }

  @Post()
  @UseBefore(ValidateSchemaMiddleware)
  async save(
    @Res() response: Response,
    @Body() body: SeriesRequestModel
  ): Promise<any> {
    const result = await this.seriesService.save(body);
    if (!result.errors.length) {
      return response
        .status(201)
        .json(
          new SeriesResponseModel(
            result.data,
            result.errors,
            "Serie creada con exito"
          )
        );
    }
    return response
      .status(400)
      .json(
        new SeriesResponseModel(
          result.data,
          result.errors,
          "Error al crear la serie"
        )
      );
  }

  @Put("/:id")
  @HttpCode(203)
  @UseBefore(ValidateSchemaMiddleware)
  async update(
    @Param("id") id: string,
    @Res() response: Response,
    @Body() body: SeriesRequestModel
  ): Promise<any> {
    const result = await this.seriesService.update(id, body);
    if (!result.errors.length) {
      return response
        .status(201)
        .json(
          new SeriesResponseModel(
            result.data,
            result.errors,
            "Serie actualizada con exito"
          )
        );
    }
    return response
      .status(400)
      .json(
        new SeriesResponseModel(
          result.data,
          result.errors,
          `Error al actualizar/consultar serie con id ${id}.`
        )
      );
  }
}
