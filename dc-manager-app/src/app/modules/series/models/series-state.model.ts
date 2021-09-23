import { EntityState } from '@ngrx/entity';

import { SeriesModel } from './series.model';

export interface SeriesStateModel extends EntityState<SeriesModel> {
  seriesLoaded: boolean;
}
