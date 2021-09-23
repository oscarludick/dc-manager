import { createSelector, createFeatureSelector } from '@ngrx/store';

import { selectAll } from './series.reducer';
import { SeriesStateModel } from '../models/series-state.model';

export const seriesFeatureSelector =
  createFeatureSelector<SeriesStateModel>('series');

export const getAllSeries = createSelector(seriesFeatureSelector, selectAll);
