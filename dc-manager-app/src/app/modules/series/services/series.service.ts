import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ResponseModel } from 'src/app/core/models/response.model';
import { SeriesModel } from '../models/series.model';

@Injectable({ providedIn: 'any' })
export class SeriesService {
  private readonly url: string = 'http://localhost:1337/api/series';
  constructor(private readonly httpClient: HttpClient) {}

  get(id: string): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(`${this.url}/${id}`);
  }

  getAll(): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.url);
  }

  save(model: SeriesModel): Observable<ResponseModel> {
    return model.id ? this.update(model) : this.create(model);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  private update(model: SeriesModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(`${this.url}/${model.id}`, model);
  }

  private create(model: SeriesModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.url, model);
  }
}
