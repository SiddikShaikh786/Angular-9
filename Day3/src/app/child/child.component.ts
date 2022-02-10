import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, OnDestroy, DoCheck } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  // @Output() message: EventEmitter<string> = new EventEmitter<string>()

  // passData() {
  //   this.message.emit("this data has come from child component")
  // }
  @Input() childMessage = ""
  count = 0;
  removeInt: any
  constructor() {
    console.log('child constructor was called')

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('chiild onchanges was called');

    console.log(changes)
  }

  ngOnInit(): void {
    console.log('child iniit was called')
    // this.removeInt = setInterval(() => {
    //   this.count++
    //   console.log(this.count);

    // }, 1000)


  }
  ngDoCheck(): void {
    console.log('chekced')
  }
  ngOnDestroy(): void {
    console.log(' parent destroy');
    // clearInterval(this.removeInt)

  }

}
