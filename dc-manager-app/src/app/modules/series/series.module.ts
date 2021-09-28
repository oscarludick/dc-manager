import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppTableModule } from '../../shared/app-table/table.module';
import { AppTitleModule } from '../../shared/app-title/app-title.module';
import { AppButtonActionModule } from '../../shared/app-button-action/app-button-action.module';

import { SeriesListComponent } from './components/series-list.component';
import { SeriesEditComponent } from './components/series-edit.component';

import { SeriesReducer } from './store/series.reducer';
import { SeriesEffects } from './store/series.effects';

import { SeriesColumnsProvider } from './providers/series-columns.provider';

import { SeriesResolver } from './services/series.resolver';

const routes: Route[] = [
  { path: '', component: SeriesListComponent },
  { path: 'new', component: SeriesEditComponent, data: { data: {} } },
  {
    path: 'edit/:id',
    component: SeriesEditComponent,
    resolve: { data: SeriesResolver },
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    AppTitleModule,
    AppButtonActionModule,
    AppTableModule,

    InputTextModule,
    CalendarModule,
    ButtonModule,

    StoreModule.forFeature('series', SeriesReducer),
    EffectsModule.forFeature([SeriesEffects]),
  ],
  declarations: [SeriesListComponent, SeriesEditComponent],
  exports: [SeriesListComponent, SeriesEditComponent],
  providers: [DatePipe, SeriesColumnsProvider],
})
export class SeriesModule {}
