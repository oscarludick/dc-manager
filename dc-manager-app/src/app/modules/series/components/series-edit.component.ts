import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducer';
import { headerActionTypes } from 'src/app/layout/header/store/header.actions';

import { SeriesService } from '../services/series.service';
import { seriesActionTypes } from '../store/series.actions';

@Component({
  selector: 'app-series-edit',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div class="flex flex-column">
        <div class="formgrid grid">
          <div class="field col-4">
            <label for="serie">Serie</label>
            <input
              id="serie"
              type="text"
              pInputText
              formControlName="serie"
              class="inputfield w-full p-inputtext-sm"
              placeholder="Nombre de la serie"
            />
          </div>
          <div class="field col-12"></div>
          <div class="field col-4">
            <label for="serie">Fecha inicio</label>
            <input
              id="serie"
              type="text"
              pInputText
              formControlName="startDate"
              class="inputfield w-full p-inputtext-sm"
              placeholder="Nombre de la serie"
            />
          </div>
          <div class="field col-4">
            <label for="serie">Fecha finaliza <small>(opcional)</small></label>
            <input
              id="serie"
              type="text"
              pInputText
              formControlName="endDate"
              class="inputfield w-full p-inputtext-sm"
              placeholder="Nombre de la serie"
            />
          </div>
          <div class="field col-12"></div>
          <div class="field col-4">
            <label for="serie">Periodicidad</label>
            <div class="field-radiobutton">
              <input
                formControlName="periocity"
                type="radio"
                id="monthly"
                value="MENSUAL"
              />
              <label for="monthly">Mensual</label>
            </div>
            <div class="field-radiobutton">
              <input
                formControlName="periocity"
                type="radio"
                id="quincenal"
                value="QUINCENAL"
              />
              <label for="quincenal">Quincenal</label>
            </div>
            <div class="field-radiobutton">
              <input
                formControlName="periocity"
                type="radio"
                id="weekly"
                value="SEMANAL"
              />
              <label for="weekly">Semanal</label>
            </div>
          </div>
        </div>
        <div class="mt-1">
          <button type="submit" pButton class="p-button-primary">
            Guardar
          </button>
        </div>
      </div>
    </form>
  `,
  providers: [
    SeriesService
  ]
})
export class SeriesEditComponent {
  public form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly store: Store<AppState>
  ) {
    this.store.dispatch(
      headerActionTypes.addItemHeader({ item: { label: 'Editar Serie' } })
    );
    this.form = this.formBuilder.group({
      serie: ['', Validators.required],
      periocity: ['', Validators.required],
      startDate: [null, Validators.required],
      endDate: [null],
    });
  }

  ngOnDestroy() {
    this.store.dispatch(headerActionTypes.removeItemHeader({ index: 1 }));
  }

  onSubmit(): void {
    const serie = Object.assign({}, this.form.value);
    this.store.dispatch(
      seriesActionTypes.createSeries({serie})
    );
  }
}
