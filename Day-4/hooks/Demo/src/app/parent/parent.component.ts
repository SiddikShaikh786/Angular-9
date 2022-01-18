import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  flag: boolean = false
  result: any
  // @ViewChild("header")
  toggle() {
    this.flag = !this.flag
  }
  constructor() {
    console.log("parent constructor was callled");

  }

  ngOnInit(): void {
    console.log("parent oninit was callled");

  }


}
