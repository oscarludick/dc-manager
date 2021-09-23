import { ISeriesDocument } from "./series.repository";

export class SeriesModel {
  private _seriesModel: ISeriesDocument;

  constructor(readonly iseriesDocument: ISeriesDocument) {
    this._seriesModel = iseriesDocument;
  }

  get() {
    return Object.seal({
      id: this._seriesModel.id,
      serie: this._seriesModel.serie,
      periocity: this._seriesModel.periocity,
      startDate: this._seriesModel.startDate,
      endDate: this._seriesModel.endDate,
    });
  }
}
