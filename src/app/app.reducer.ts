import { SeriesModel } from '../series/series.model';

export interface AppState {
  series: {
    current: SeriesModel;
    list: ReadonlyArray<SeriesModel[]>;
  };
  comics: {
    current: any;
    list: ReadonlyArray<any[]>;
  };
}

export const AppReducers = {
  series: null,
  comics: null,
};
