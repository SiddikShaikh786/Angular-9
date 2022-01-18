import { Component } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  val = "shaikh"

  // style binding
  isboolean: boolean = true //flag
  c1 = "green"
  c2 = "blue"

  isSpecial: boolean = true

  // attribute binding
  colVal = 2
  colVal1 = 3

  //event handling
  display() {
    alert("  Shaikh")
  }

  displayResult: string = ""

  //1-parent 2-child relationship


}

