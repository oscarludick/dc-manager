import { createAction, props } from '@ngrx/store';

import { MenuItem } from 'primeng/api';

export const addItemHeader = createAction(
  '[Header] Add Header',
  props<{item: MenuItem}>()
);

export const removeItemHeader = createAction(
  '[Header] Remove Header',
  props<{index: number}>()
);


export const headerActionTypes = { addItemHeader, removeItemHeader };
