import { createSelector, createFeatureSelector } from '@ngrx/store';

import { selectAll } from './series.reducer';
import { SeriesState } from './series.reducer';

export const seriesFeatureSelector =
  createFeatureSelector<SeriesState>('series');

export const getAllSeries = createSelector(seriesFeatureSelector, selectAll);

export const areCoursesLoaded = createSelector(
  seriesFeatureSelector,
  (state) => state.seriesLoaded
);
