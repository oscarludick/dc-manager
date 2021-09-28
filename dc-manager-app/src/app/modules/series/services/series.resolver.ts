import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SeriesService } from './series.service';
import { SeriesModel } from '../models/series.model';

@Injectable({ providedIn: 'any' })
export class SeriesResolver implements Resolve<SeriesModel> {
  constructor(
    private readonly seriesService: SeriesService) {}

  resolve(route: ActivatedRouteSnapshot, ): Observable<SeriesModel> {
    const id = route.params.id;
    return this.seriesService.get(id).pipe(map((response) => response.payload));
  }
}
