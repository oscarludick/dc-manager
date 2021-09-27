import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  NgModule,
  Output,
  EventEmitter,
} from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-table',
  template: `
    <div style="margin-top: 1em">
      {{ selectedItems | json }}
      <p-table
        #datatable
        selectionMode="multiple"
        [(selection)]="selectedItems"
        dataKey="id"
        [value]="data"
        styleClass="p-datatable-sm"
        [columns]="columns"
        [paginator]="true"
        [rows]="10"
        [showCurrentPageReport]="true"
        currentPageReportTemplate="{first} - {last} de {totalRecords}"
        [rowsPerPageOptions]="[10, 25, 50]"
        responsiveLayout="scroll"
        (onRowSelect)="onSelectRow()"
        (onRowUnselect)="onSelectRow()"
      >
        <ng-template pTemplate="caption">
          <div class="flex">
            <span class="p-input-icon-left mr-auto">
              <i class="pi pi-search"></i>
              <input
                pInputText
                type="text"
                (input)="onSearch(datatable, $event)"
                placeholder="Buscar..."
              />
            </span>
            <ng-content select="app-button-action"></ng-content>
          </div>
        </ng-template>
        <ng-template pTemplate="header" let-columns>
          <tr>
            <th style="width: 3rem">
              <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
            </th>
            <th *ngFor="let col of columns" [pSortableColumn]="col.field">
              {{ col.header }}
              <p-sortIcon [field]="col.field"></p-sortIcon>
            </th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowData let-columns="columns">
          <tr>
            <td>
              <p-tableCheckbox [value]="rowData"></p-tableCheckbox>
            </td>
            <td *ngFor="let col of columns">
              {{ rowData[col.field] }}
            </td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep .p-datatable.p-datatable-sm .p-datatable-header {
        padding: 0.5rem 0rem;
      }
      :host ::ng-deep app-button-action button {
        margin-left: 0.5em;
      }
    `,
  ],
})
export class AppTableComponent {
  @Input()
  data: any[] = [];

  @Input()
  columns: { header: string; field: string }[] = [];

  @Input()
  selectedItems: any[] = [];

  @Output()
  selectedItemsChange = new EventEmitter<any[]>();

  onSelectRow() {
    this.selectedItemsChange.next(this.selectedItems);
  }

  onSearch(datatable: Table, $event: any): any {
    return datatable.filterGlobal($event.target.value, 'contains');
  }
}

@NgModule({
  imports: [CommonModule, TableModule, InputTextModule, ButtonModule],
  declarations: [AppTableComponent],
  exports: [AppTableComponent],
})
export class AppTableModule {}
