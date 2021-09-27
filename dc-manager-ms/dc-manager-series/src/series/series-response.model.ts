export class SeriesResponseModel {
  payload: any;
  errors: any[];
  message: string;
  constructor(payload: any, errors: any[], message: string) {
    this.payload = payload;
    this.errors = errors;
    this.message = message;
  }
}
