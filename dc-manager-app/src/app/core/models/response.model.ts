export class ResponseModel {
  payload: any;
  message: string;
  errors: string[];
  constructor(response: any) {
    this.payload = response.payload || null;
    this.message = response.message || '';
    this.errors = response.errors || [];
  }
}
