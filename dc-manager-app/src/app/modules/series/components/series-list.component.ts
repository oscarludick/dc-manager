import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import { headerActionTypes } from 'src/app/layout/header/store/header.actions';

import { getAllSeries } from '../store/series.selectors';
import { seriesActionTypes } from '../store/series.actions';

import { SERIES_COLUMN_PROVIDER } from '../providers/series-columns.provider';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-series-list',
  template: `
  {{selectedItems | json}}
    <ng-container *ngIf="series$ | async as series">
      <app-table
        [(selectedItems)]="selectedItems"
        [data]="series"
        [columns]="columns"
      >
        <app-button-action
          [routerLink]="['new']"
          label="Nuevo"
        ></app-button-action>
        <app-button-action
          [routerLink]="['edit']"
          label="Editar"
        ></app-button-action>
        <app-button-action label="Eliminar"></app-button-action>
      </app-table>
    </ng-container>
  `,
  providers: [SeriesService],
  styles: [``],
})
export class SeriesListComponent {
  series$ = this.store.select(getAllSeries);

  selectedItems: any[] = [];

  constructor(
    private store: Store<AppState>,
    @Inject(SERIES_COLUMN_PROVIDER) public readonly columns: any[]
  ) {
    this.store.dispatch(
      headerActionTypes.addItemHeader({ item: { label: 'Series' } })
    );
  }

  ngOnInit() {
    this.store.dispatch(seriesActionTypes.loadSeries());
  }

  ngOnDestroy() {
    this.store.dispatch(headerActionTypes.removeItemHeader({ index: 1 }));
  }
}
