import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  flag = false;
  message = ""
  toggleUser() {
    this.flag = !this.flag
  }
  constructor() {
    console.log('app constructor');


  }

}
