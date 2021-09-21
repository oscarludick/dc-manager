import { Component, Inject, Input, ViewEncapsulation } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { SIDEBAR_ITEMS } from './sidebar-items';

@Component({
  selector: 'app-sidebar',
  template: `
    <p-sidebar styleClass="layout-sidebar" [appendTo]="appendTo" [closeOnEscape]="false" [showCloseIcon]="false" [modal]="false" [(visible)]="display">
        <h2>DC Manager</h2>
        
        <p-menu styleClass="layout-sidebar__menu" [model]="items"></p-menu>
    </p-sidebar>
  `,
  styles: [
    `
    .layout-sidebar {
      width: var(--sidebar-size) !important;
      box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
        0px 2px 9px 0px rgb(0 0 0 / 14%), 0px 9px 4px 1px rgb(0 0 0 / 12%) !important;
      background: #ececec38;
      border-radius: 0px;
    }
    
    .layout-sidebar__menu {
      width: 100%;
      border: none;
      background: transparent;
    }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  display: boolean = true;

  items: MenuItem[];

  @Input()
  appendTo: any = 'body';

  constructor(@Inject(SIDEBAR_ITEMS) readonly sidebarItems: MenuItem[]) {
    this.items = sidebarItems;
  }
}
