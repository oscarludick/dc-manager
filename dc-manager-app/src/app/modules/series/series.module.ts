import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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

const routes = [
  { path: '', component: SeriesListComponent },
  { path: 'new', component: SeriesEditComponent },
  { path: 'edit/:id', component: SeriesEditComponent },
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
    ButtonModule,
    StoreModule.forFeature('series', SeriesReducer),
    EffectsModule.forFeature([SeriesEffects]),
  ],
  declarations: [SeriesListComponent, SeriesEditComponent],
  exports: [SeriesListComponent, SeriesEditComponent],
  providers: [SeriesColumnsProvider],
})
export class SeriesModule {}
