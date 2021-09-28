import { createFeatureSelector, createSelector } from '@ngrx/store';

import { History } from './history.reducer';

export const historyFeatureSelector =
  createFeatureSelector<History[]>('history');

export const historySelector = createSelector(
  historyFeatureSelector,
  (state: History[]) => state
);
