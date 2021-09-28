import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, tap } from 'rxjs/operators';

import { seriesActionTypes } from './series.actions';
import { SeriesService } from '../services/series.service';
import { historyActionTypes } from 'src/app/core/history/history.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

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
        tap(console.log),
        ofType(seriesActionTypes.createSeries),
        tap(console.log),
        concatMap((action) =>
          this.seriesService.save(action.serie).pipe(
            tap(console.log),
            tap(() => this.router.navigateByUrl('/series')),
            tap(() =>
              this.store.dispatch(
                historyActionTypes.saveState({
                  action: seriesActionTypes.createSeries.name,
                  payload: seriesActionTypes.createSeries,
                })
              )
            ),
            catchError((error) => {
              console.log(error);
              return error;
            })
          )
        ),
        tap(console.log)
      ),
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

  deleteSerie$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(seriesActionTypes.deleteSeries),
        concatMap((action) => this.seriesService.delete(action.serieId))
      ),
    { dispatch: false }
  );

  constructor(
    private seriesService: SeriesService,
    private actions$: Actions,
    private router: Router,
    private store: Store<AppState>
  ) {}
}
