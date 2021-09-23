import { createAction, props } from '@ngrx/store';

import { SeriesModel } from '../../../core/series/series.model';

export const seriesLoaded = createAction(
  '[Series] Loaded Series List Successfully',
  props<{ series: SeriesModel[] }>()
);

export const createSeries = createAction(
  '[Series] Create Series',
  props<{ serie: SeriesModel }>()
);

export const updateSeries = createAction(
  '[Series] Update Series',
  props<{ serie: SeriesModel }>()
);

export const deleteSeries = createAction(
  '[Series] Delete Series',
  props<{ serieId: string }>()
);

export const loadSeries = createAction('[Series] Load Series List');

export const seriesActionTypes = {
  seriesLoaded,
  createSeries,
  updateSeries,
  deleteSeries,
  loadSeries,
};
