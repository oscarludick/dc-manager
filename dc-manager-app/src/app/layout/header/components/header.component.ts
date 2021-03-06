import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { MenuItem } from 'primeng/api';

import { AppState } from 'src/app/app.reducer';
import { getAllHeaderItems } from '../store/header.selectors';

@Component({
  selector: 'app-header',
  template: `
    <div class="flex align-items-center pl-5 pr-5">
      <app-button-back></app-button-back>
      <span class="ml-2"></span>
      <ng-container *ngIf="items$ | async as items">
        <p-breadcrumb [model]="items"></p-breadcrumb>
      </ng-container>
      <span class="ml-auto"></span>
      <app-button-log></app-button-log>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep .p-breadcrumb {
        border-radius: 0px;
        border: none;
        background: white;
      }
    `,
  ],
})
export class HeaderComponent {
  items$: Observable<MenuItem[]>;

  constructor(private readonly store: Store<AppState>) {
    this.items$ = this.store.select(getAllHeaderItems);
  }
}
