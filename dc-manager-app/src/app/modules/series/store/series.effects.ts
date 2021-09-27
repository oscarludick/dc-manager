import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';

import { seriesActionTypes } from './series.actions';
import { SeriesService } from '../services/series.service';


@Injectable({ providedIn: 'any' })
export class SeriesEffects {
  loadSeries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(seriesActionTypes.loadSeries),
      concatMap(() => this.seriesService.getAll()),
      map((response) =>
        seriesActionTypes.seriesLoaded({ series: response.payload })
      )
    )
  );

  createSerie$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(seriesActionTypes.createSeries),
        concatMap((action) => this.seriesService.save(action.serie)),
        tap(() => this.router.navigateByUrl('/series'))
      ),
    { dispatch: false }
  );

  deleteSerie$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(seriesActionTypes.deleteSeries),
        concatMap((action) => this.seriesService.delete(action.serieId))
      ),
    { dispatch: false }
  );

  updateSerie$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(seriesActionTypes.updateSeries),
        concatMap((action) => this.seriesService.save(action.serie)),
        tap(() => this.router.navigateByUrl('/series'))
      ),
    { dispatch: false }
  );

  constructor(
    private seriesService: SeriesService,
    private actions$: Actions,
    private router: Router
  ) {}
}
