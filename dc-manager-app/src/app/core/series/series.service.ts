import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';

import { SeriesModel } from './series.model';

@Injectable({ providedIn: 'any' })
export class SeriesService {
  constructor(private readonly httpClient: HttpClient) {}

  get(id: string) {
    return of({});
  }

  getAll() {
    return of([]);
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
    return of({});
  }
}
