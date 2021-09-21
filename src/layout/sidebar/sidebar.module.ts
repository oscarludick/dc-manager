import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';

import { SidebarComponent } from './sidebar.component';
import { SidebarItems, SIDEBAR_ITEMS } from './sidebar-items';

@NgModule({
  imports: [CommonModule, SidebarModule, MenuModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  providers: [
    {
      provide: SIDEBAR_ITEMS,
      useValue: SidebarItems,
    },
  ],
})
export class SideBarModule {}
