import { logger } from "../logger";

import { SeriesRepository } from "../schemas/series.repository";
import { SeriesRequestModel } from "../models/series-request.model";

export class SeriesService {
  async save(model: SeriesRequestModel) {
    try {
      const serie = await SeriesRepository.create(model);
      return { ...serie, errors: null };
    } catch (error) {
      logger.error(`Error al crear serie ${error}`);
      return { errors: [`${error}`] };
    }
  }
}
