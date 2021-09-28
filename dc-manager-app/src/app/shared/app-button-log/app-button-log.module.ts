import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Store } from '@ngrx/store';

import { ButtonModule } from 'primeng/button';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-button-log',
  template: `
    <button
      [attr.title]="'Ver eventos'"
      pButton
      pRipple
      type="button"
      icon="pi pi-clock"
      class="p-button-sm p-button-secondary"
      (click)="onShowLog()"
    ></button>
  `,
  styles: [
    `
      :host ::ng-deep {
        .p-button.p-button-secondary {
          color: #495057;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
        }

        .p-button.p-button-secondary:enabled:hover {
          color: #495057;
          background: #e9ecef;
          border: 1px solid #e9ecef;
        }
      }
    `,
  ],
})
export class AppButtonLogComponent {
  constructor(private readonly store: Store<AppState>) {
    this.store.subscribe((result)=>{
      console.log(result);
    })
  }

  onShowLog(): void {}
}

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [AppButtonLogComponent],
  exports: [AppButtonLogComponent],
})
export class AppButtonLogModule {}
