import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageScrollConfig } from "ng2-page-scroll";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  constructor() {
    PageScrollConfig.defaultDuration = 0;
  }
}
