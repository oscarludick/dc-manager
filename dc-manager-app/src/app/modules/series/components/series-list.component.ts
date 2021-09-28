import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import { headerActionTypes } from 'src/app/layout/header/store/header.actions';

import { getAllSeries } from '../store/series.selectors';
import { seriesActionTypes } from '../store/series.actions';

import { SERIES_COLUMN_PROVIDER } from '../providers/series-columns.provider';
import { SeriesService } from '../services/series.service';
import { SeriesModel } from '../models/series.model';

@Component({
  selector: 'app-series-list',
  template: `
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
          [disabled]="selectedItems.length == 0 || selectedItems.length > 1"
          [routerLink]="['edit', selectedItems[0]?.id]"
          label="Editar"
        ></app-button-action>
        <app-button-action
          [disabled]="selectedItems.length == 0 || selectedItems.length > 1"
          label="Eliminar"
          (click)="onDelete()"
        ></app-button-action>
      </app-table>
    </ng-container>
  `,
  providers: [SeriesService],
  styles: [``],
})
export class SeriesListComponent {
  series$ = this.store.select(getAllSeries);

  selectedItems: SeriesModel[] = [];

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

  onDelete(): void {
    this.store.dispatch(
      seriesActionTypes.deleteSeries({ serieId: this.selectedItems[0].id })
    );
    this.selectedItems = [];
  }
}
