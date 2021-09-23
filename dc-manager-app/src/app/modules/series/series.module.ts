import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppTableModule } from '../../shared/app-table/table.module';
import { AppTitleModule } from '../../shared/app-title/app-title.module';
import { AppButtonCreateModule } from '../../shared/app-button-create/app-button-create.module';

import { SeriesListComponent } from './components/series-list.component';
import { SeriesEditComponent } from './components/series-edit.component';

import { SeriesReducer } from './store/series.reducer';
import { SeriesEffects } from './store/series.effects';
import { SeriesColumnsProvider } from './providers/series-columns.provider';

const routes = [
  { path: '', component: SeriesListComponent },
  { path: 'new', component: SeriesListComponent },
  { path: 'edit/:id', component: SeriesListComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

    AppTitleModule,
    AppButtonCreateModule,
    AppTableModule,

    StoreModule.forFeature('series', SeriesReducer),
    EffectsModule.forFeature([SeriesEffects]),
  ],
  declarations: [SeriesListComponent, SeriesEditComponent],
  exports: [SeriesListComponent, SeriesEditComponent],
  providers: [
    SeriesColumnsProvider
  ]
})
export class SeriesModule {}
