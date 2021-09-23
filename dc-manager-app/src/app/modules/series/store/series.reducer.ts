import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { seriesActionTypes } from './series.actions';
import { SeriesModel } from '../models/series.model';

export const adapter: EntityAdapter<SeriesModel> =
  createEntityAdapter<SeriesModel>();

export const initialState = adapter.getInitialState({
  seriesLoaded: false,
});

export const SeriesReducer = createReducer(
  initialState,

  on(seriesActionTypes.seriesLoaded, (state, action) => {
    return adapter.setAll(action.series, { ...state, seriesLoaded: true });
  }),

  on(seriesActionTypes.createSeries, (state, action) => {
    return adapter.addOne(action.serie, state);
  }),

  on(seriesActionTypes.updateSeries, (state, action) => {
    return adapter.updateOne(
      { id: action.serie.id, changes: action.serie },
      state
    );
  }),

  on(seriesActionTypes.deleteSeries, (state, action) => {
    return adapter.removeOne(action.serieId, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
