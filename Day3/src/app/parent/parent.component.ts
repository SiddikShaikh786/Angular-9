import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges {
  message = ""
  flag: boolean = false
  toggle() {
    this.flag = !this.flag;
  }
  constructor() {
    console.log('parent constructor was called')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('child on changes was called');

  }

  ngOnInit(): void {
    console.log('parent iniit was called')


  }

}
