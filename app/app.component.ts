import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Tour of Heroes';
  }
}
