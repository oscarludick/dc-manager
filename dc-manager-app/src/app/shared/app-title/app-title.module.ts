import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Directive,
  Input,
  NgModule,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[appTitleActions]',
})
export class AppTitleActions {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Component({
  selector: 'app-title',
  template: `
    <div class="title">
      <ng-container *ngIf="titleActions">
        <div class="flex flex-row title__actions">
          <ng-container
            *ngTemplateOutlet="titleActions.templateRef"
          ></ng-container>
        </div>
      </ng-container>
      <div></div>
    </div>
  `,
  styles: [
    `
      .title {
        display: flex;
        box-sizing: content-box;
        height: 36px;
        align-items: center;
      }
      .title__space {
        margin-left: auto;
      }
      .title__label {
      }
      :host ::ng-deep button {
        margin-left: 1em;
      }
    `,
  ],
})
export class AppTitleComponent {
  @Input()
  title: string = '';

  @ContentChild(AppTitleActions)
  titleActions!: AppTitleActions;
}

@NgModule({
  imports: [CommonModule],
  declarations: [AppTitleComponent, AppTitleActions],
  exports: [AppTitleComponent, AppTitleActions],
})
export class AppTitleModule {}
