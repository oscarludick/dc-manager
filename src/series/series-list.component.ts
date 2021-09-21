import { Component } from '@angular/core';

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
  columns: { header: string; field: string }[] = [
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
      field: 'startYear',
    },
    {
      header: 'Finalizado',
      field: 'endYear',
    },
  ];
}
