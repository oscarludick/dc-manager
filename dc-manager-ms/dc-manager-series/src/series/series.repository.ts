import mongoose, { Model } from "mongoose";
import { MongooseInstance } from "../connection";

import { SeriesSchema } from "./series.schema";

export interface ISeriesDocument extends mongoose.Document {
  serie: string;
  periocity: string;
  startDate: Date;
  endDate: Date;
}

export const SeriesRepository: Model<ISeriesDocument> =
  MongooseInstance.mongooseConnection.model<ISeriesDocument>(
    "series",
    SeriesSchema
  );
