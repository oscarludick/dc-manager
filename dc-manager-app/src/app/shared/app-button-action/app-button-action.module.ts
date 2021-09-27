import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-action',
  template: `
    <button
      [attr.title]="label"
      pButton
      pRipple
      type="button"
      [label]="label"
      class="p-button-sm p-button-secondary"
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
export class AppButtonActionComponent {
  @Input()
  label: string = '';
}

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [AppButtonActionComponent],
  exports: [AppButtonActionComponent],
})
export class AppButtonActionModule {}
