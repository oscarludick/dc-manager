import { Component, Inject, ViewEncapsulation } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { HEADER_ITEMS } from './header-items';

@Component({
  selector: 'app-header',
  template: `
    <p-breadcrumb [model]="items" ></p-breadcrumb>
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
  readonly items: MenuItem[];

  constructor(@Inject(HEADER_ITEMS) readonly headerItems: MenuItem[]) {
    this.items = headerItems;
  }
}
