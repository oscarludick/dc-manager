export class SeriesModel {
  id: string;
  serie: string;
  periocity: string;
  startYear: string;
  endYear: string;

  constructor(model: any) {
    this.id = model.id || '';
    this.serie = model.serie || '';
    this.periocity = model.periocity || '';
    this.startYear = model.startYear || '';
    this.endYear = model.endYear || '';
  }
}
