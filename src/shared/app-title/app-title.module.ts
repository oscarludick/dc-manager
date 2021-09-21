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
      <h3 class="title__label">{{title}}</h3>
      <span class="title__space"></span>
      <ng-container *ngIf="titleActions">
        <ng-container *ngTemplateOutlet="titleActions.templateRef"></ng-container>
      </ng-container>
    <div>
  `,
  styles: [
    `.title {
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
    `,
  ],
})
export class AppTitleComponent {
  @Input()
  title: string;

  @ContentChild(AppTitleActions)
  titleActions!: AppTitleActions;
}

@NgModule({
  imports: [CommonModule],
  declarations: [AppTitleComponent, AppTitleActions],
  exports: [AppTitleComponent, AppTitleActions],
})
export class AppTitleModule {}
