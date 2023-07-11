import { Component, OnDestroy, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig, appSettings } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: APP_CONFIG, useValue: appSettings }
  ]
})
export class AppComponent implements OnDestroy {
  title = 'my-app';

  constructor(@Inject(APP_CONFIG) config: AppConfig)  {}

  ngOnDestroy(): void {}
}
