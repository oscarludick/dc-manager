import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { appReducers } from './app.reducer';

import { CoreModule } from './core/core.module';
import { HeaderModule, SideBarModule } from './layout';

const routes = [
  {
    path: 'series',
    loadChildren: () =>
      import('./modules/series/series.module').then((m) => m.SeriesModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),

    ToastModule,

    CoreModule,
    HeaderModule,
    SideBarModule,

    StoreModule.forRoot(appReducers, {}),
    EffectsModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, MessageService],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
