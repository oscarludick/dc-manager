import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-back',
  template: `
    <button
      [attr.title]="'Ir atrás'"
      pButton
      pRipple
      type="button"
      icon="pi pi-angle-left"
      class="p-button-sm p-button-secondary"
      (click)="onGoBack()"
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
export class AppButtonBackComponent {
  onGoBack(): void {
    window.history.back();
  }
}

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [AppButtonBackComponent],
  exports: [AppButtonBackComponent],
})
export class AppButtonBackModule {}
