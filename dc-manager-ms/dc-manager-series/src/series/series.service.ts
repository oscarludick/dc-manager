import { logger } from "../logger";


import { ISeriesDocument, SeriesRepository } from "./series.repository";
import { SeriesRequestModel } from "./series-request.model";
import { SeriesModel } from "./series.model";

export class SeriesService {
  async delete(id: string) {
    try {
      const exists = await SeriesRepository.findById(id);
      if (exists) {
        const result = exists.delete()
        return {
          data: result,
          errors: [] as any[],
        };
      } else {
        throw Error(`Error no se puede consultar el id ${id}.`);
      }
    } catch (error) {
      logger.error(`Error al consultar serie: ${error}`);
      return { data: [] as any, errors: [`${error}`] };
    }
  }

  async get(id: string) {
    try {
      const exists = await SeriesRepository.findById(id);
      if (exists) {
        return {
          data: new SeriesModel(exists).get(),
          errors: [] as any[],
        };
      } else {
        throw Error(`Error no se puede consultar el id ${id}.`);
      }
    } catch (error) {
      logger.error(`Error al consultar serie: ${error}`);
      return { data: [] as any, errors: [`${error}`] };
    }
  }

  async getAll() {
    try {
      const series: ISeriesDocument[] = await SeriesRepository.find();
      return {
        data: series.map((value) => new SeriesModel(value).get()),
        errors: [] as any[],
      };
    } catch (error) {
      logger.error(`Error al consultar series: ${error}`);
      return { data: [] as any, errors: [`${error}`] };
    }
  }

  async save(model: SeriesRequestModel) {
    try {
      const serie = await SeriesRepository.create(model);
      return {
        data: new SeriesModel(serie).get(),
        errors: [] as any[],
      };
    } catch (error) {
      logger.error(`Error al crear serie: ${error}`);
      return { data: {} as any, errors: [`${error}`] };
    }
  }

  async update(id: string, model: SeriesRequestModel) {
    try {
      const exists = await SeriesRepository.findById(id);
      if (exists) {
        const update = Object.assign(exists, { ...model, id: id });
        const serie = await update.save();
        return {
          data: new SeriesModel(serie).get(),
          errors: [] as any[],
        };
      } else {
        throw Error(`Error no se puede consultar el id ${id}.`);
      }
    } catch (error) {
      logger.error(`Error al actualizar serie: ${error}`);
      return { data: {} as any, errors: [`${error}`] };
    }
  }
}
