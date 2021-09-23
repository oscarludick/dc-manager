import { createSelector, createFeatureSelector } from '@ngrx/store';

import { MenuItem } from 'primeng/api';

export const headerFeatureSelector =
  createFeatureSelector<MenuItem[]>('headerItems');

export const getAllHeaderItems = createSelector(
  headerFeatureSelector,
  (state: MenuItem[]) => state
);
