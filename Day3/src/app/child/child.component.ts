import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Output() message: EventEmitter<string> = new EventEmitter<string>()

  // passData() {
  //   this.message.emit("this data has come from child component")
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
