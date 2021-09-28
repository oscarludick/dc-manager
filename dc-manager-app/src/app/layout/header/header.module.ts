import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadcrumbModule } from 'primeng/breadcrumb';

import { AppButtonBackModule } from 'src/app/shared/app-button-back/app-button-back.module';
import { AppButtonLogModule } from 'src/app/shared/app-button-log/app-button-log.module';

import { HeaderComponent } from './components/header.component';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbModule,
    AppButtonBackModule,
    AppButtonLogModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
