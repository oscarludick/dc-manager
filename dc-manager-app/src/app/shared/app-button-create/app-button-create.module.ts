import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-create',
  template: `
  <button [attr.title]="label" pButton pRipple type="button" [label]="label" class="p-button-sm p-button-secondary"></button>
  `,
  styles: [``],
})
export class AppButtonCreateComponent {
  @Input()
  label: string = "";
}

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [AppButtonCreateComponent],
  exports: [AppButtonCreateComponent],
})
export class AppButtonCreateModule {}
