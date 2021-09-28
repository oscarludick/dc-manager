export class SeriesModel {
  id: string;
  serie: string;
  periocity: string;
  startDate: string;
  endDate: string;

  constructor(model: any) {
    this.id = model.id || '';
    this.serie = model.serie || '';
    this.periocity = model.periocity || '';
    this.startDate = model.startDate || '';
    this.endDate = model.endDate || '';
  }
}
