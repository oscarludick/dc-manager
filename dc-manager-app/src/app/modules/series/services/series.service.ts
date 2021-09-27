import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResponseModel } from 'src/app/core/models/response.model';
import { SeriesModel } from '../models/series.model';

@Injectable({ providedIn: 'any' })
export class SeriesService {
  private readonly url: string = 'http://localhost:1337/api/series';
  constructor(private readonly httpClient: HttpClient) {}

  get(id: string) {
    return of({});
  }

  getAll(): Observable<ResponseModel> {
    return this.httpClient
      .get<SeriesModel[]>(this.url)
      .pipe(map((response) => new ResponseModel(response)));
  }

  save(model: SeriesModel) {
    return model.id ? this.update(model) : this.create(model);
  }

  delete(id: string) {
    return of({});
  }

  private update(model: SeriesModel) {
    return of({});
  }

  private create(model: SeriesModel) {
    return this.httpClient
      .post(this.url, model, {
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
      })
      .pipe(map((response) => new ResponseModel(response)));
  }
}
