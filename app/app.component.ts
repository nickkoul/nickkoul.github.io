import { Component } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';


@Component({
  directives: [MD_TOOLBAR_DIRECTIVES],
  selector: 'my-app',
  template: `
    <md-toolbar class ="ex-bar"   [color]="accent">
      <span>Nicholas Koulopoulos Website</span>
    </md-toolbar>
  `,
  styles: [`
    .ex-bar {
      background-color: #1C2B36;
      color: #209e91;
    }
  `]

})
export class AppComponent { }
