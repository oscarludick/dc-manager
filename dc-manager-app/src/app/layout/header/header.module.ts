import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadcrumbModule } from 'primeng/breadcrumb';

import { HeaderComponent } from './components/header.component';

@NgModule({
  imports: [CommonModule, BreadcrumbModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
