import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  @Input() result: any
  flag = false
  interval: any
  count: number = 0
  // toggleChild()
  // {
  //   this.flag=this.flag;
  // }

  constructor() { }

  ngOnInit(): void {
    console.log(' child constructor called')
    // this.interval = setInterval(() => {
    //   this.count++
    //   console.log(this.count)
    // }, 1000)
    // console.log("child oninit was called")

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes was made")
    console.log(changes)
  }

  ngDoCheck(): void {
    console.log("checked ")
  }
  ngOnDestroy(): void {
    {
      console.log("child componet was destroyed")
      // clearInterval(this.interval)
    }
  }
}
