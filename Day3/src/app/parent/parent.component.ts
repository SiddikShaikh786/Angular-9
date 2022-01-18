import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // result: string
  // passData(value) {
  //   this.result = value
  constructor() { }

  ngOnInit(): void {
  }

}
