import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { appReducers } from './app.reducer';

import { HeaderModule, SideBarModule } from './layout';

const routes = [
  {
    path: 'series',
    loadChildren: () =>
      import('./modules/series/series.module').then((m) => m.SeriesModule),
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
    HttpClientModule,
    RouterModule.forRoot(routes),

    HeaderModule,
    SideBarModule,

    StoreModule.forRoot(appReducers, {}),
    EffectsModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
