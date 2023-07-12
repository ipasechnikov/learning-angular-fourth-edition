import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app';

  constructor() {
    this.onComplete().then(this.setTitle);
  }

  private setTitle = () => {
    this.title = 'Learning Angular';
  };

  private onComplete(): Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

}
