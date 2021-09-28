import { createAction, props } from '@ngrx/store';

import { History } from './history.reducer';

export const saveState = createAction(
  '[History] Guardar acción',
  props<History>()
);

export const historyActionTypes = { saveState };
