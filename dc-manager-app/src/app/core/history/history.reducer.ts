import { createReducer, on } from '@ngrx/store';

import { historyActionTypes } from './history.actions';

export interface History {
  action: string;
  payload: any;
}

export const initalState: History[] = [];

export const historyReducer = createReducer(
  initalState,
  on(historyActionTypes.saveState, (state, action) => {
    return [...state, { ...action }];
  })
);
