import { Schema } from "mongoose";

const SeriesSchema: Schema = new Schema({
  serie: {
    type: String,
    required: true,
    index: { unique: true, dropDups: true },
  },
  periocity: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: false,
  },
});

export { SeriesSchema };
