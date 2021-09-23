import { ActionReducerMap } from '@ngrx/store';

import { MenuItem } from 'primeng/api';

import { headerReducer } from './layout/header/store/header.reducer';

export interface AppState {
  headerItems: MenuItem[];
}

export const appReducers: ActionReducerMap<AppState> = {
  headerItems: headerReducer
};
