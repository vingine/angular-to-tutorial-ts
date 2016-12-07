import {Component} from "@angular/core";

// Import needed rxjs
import './rxjs-extensions';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Tour of Heroes';
  }
}
