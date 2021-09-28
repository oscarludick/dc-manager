import { ActionReducerMap } from '@ngrx/store';

import { MenuItem } from 'primeng/api';

import { History, historyReducer } from './core/history/history.reducer';
import { headerReducer } from './layout/header/store/header.reducer';

export interface AppState {
  headerItems: MenuItem[];
  history: History[];
}

export const appReducers: ActionReducerMap<AppState> = {
  headerItems: headerReducer,
  history: historyReducer,
};
