import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../app.reducer';
import { headerActionTypes } from '../../../layout/header/store/header.actions';

import { SERIES_COLUMN_PROVIDER } from '../providers/series-columns.provider';

@Component({
  selector: 'app-series-list',
  template: `
    <app-title title="Series">
      <ng-template appTitleActions>
        <app-button-create label="Nueva serie"></app-button-create>
      </ng-template>
    </app-title>

    <app-table [columns]="columns"></app-table>
  `,
})
export class SeriesListComponent {
  constructor(
    private store: Store<AppState>,
    @Inject(SERIES_COLUMN_PROVIDER) public readonly columns: any[]
  ) {
    this.store.dispatch(
      headerActionTypes.addItemHeader({ item: { label: 'Series' } })
    );
  }

  ngOnDestroy() {
    this.store.dispatch(headerActionTypes.removeItemHeader({ index: 1 }));
  }
}
