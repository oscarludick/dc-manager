import { InjectionToken, Provider } from '@angular/core';

export const SERIES_COLUMN_PROVIDER = new InjectionToken<
  { header: string; field: string }[]
>('The table columns provider');

export const SeriesColumnsProvider: Provider[] = [
  {
    provide: SERIES_COLUMN_PROVIDER,
    useValue: [
      {
        header: 'Serie',
        field: 'serie',
      },
      {
        header: 'Periocidad',
        field: 'periocity',
      },
      {
        header: 'Inicio',
        field: 'startDate',
      },
      {
        header: 'Finalizado',
        field: 'endDate',
      },
    ],
  },
];
