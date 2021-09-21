import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { HeaderModule, SideBarModule } from '../layout';

const routes = [
  {
    path: 'series',
    loadChildren: () =>
      import('../series/series.module').then((m) => m.SeriesModule),
  },
  {
    path: '',
    redirectTo: 'series',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    HeaderModule,
    SideBarModule,

    StoreModule.forRoot({}),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
