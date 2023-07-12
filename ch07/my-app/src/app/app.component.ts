import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app';

  constructor() {
    this.changeTitle(this.setTitle);
  }

  private setTitle = () => {
    this.title = 'Learning Angular';
  };

  private changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

}
