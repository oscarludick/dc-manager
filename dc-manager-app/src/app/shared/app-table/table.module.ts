import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  template: `
    <div style="margin-top: 1em">
      <p-table
        [value]="data"
        styleClass="p-datatable-sm"
        [columns]="columns"
        [paginator]="true"
        [rows]="10"
        [showCurrentPageReport]="true"
        currentPageReportTemplate="{first} - {last} de {totalRecords}"
        [rowsPerPageOptions]="[10, 25, 50]"
        responsiveLayout="scroll"
      >
        <ng-template pTemplate="header" let-columns>
          <tr>
            <th *ngFor="let col of columns" [pSortableColumn]="col.field">
              {{ col.header }}
              <p-sortIcon [field]="col.field"></p-sortIcon>
            </th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowData let-columns="columns">
          <tr>
            <td *ngFor="let col of columns">
              {{ rowData[col.field] }}
            </td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  `,
  styles: [``],
})
export class AppTableComponent {
  @Input()
  data: any[] = [];

  @Input()
  columns: { header: string; field: string }[] = [];
}

@NgModule({
  imports: [CommonModule, TableModule],
  declarations: [AppTableComponent],
  exports: [AppTableComponent],
})
export class AppTableModule {}
