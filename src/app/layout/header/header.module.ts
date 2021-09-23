import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadcrumbModule } from 'primeng/breadcrumb';

import { HeaderItems, HEADER_ITEMS } from './header-items';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, BreadcrumbModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [
    {
      provide: HEADER_ITEMS,
      useValue: HeaderItems,
    },
  ],
})
export class HeaderModule {}
