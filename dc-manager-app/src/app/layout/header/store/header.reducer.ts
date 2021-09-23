import { createReducer, on } from '@ngrx/store';

import { MenuItem } from 'primeng/api';

import { headerActionTypes } from './header.actions';

export const initalState: MenuItem[] = [{ label: 'DC Manager' }];

export const headerReducer = createReducer(
  initalState,
  on(headerActionTypes.addItemHeader, (state, action) => {
    return [...state, { ...action.item }];
  }),
  on(headerActionTypes.removeItemHeader, (state, action) => {
    return [...state.splice(action.index, 1)];
  })
);
