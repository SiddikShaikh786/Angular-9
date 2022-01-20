import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  count = 0
  interval: any
  private mySub: Subscription
  @Input() userMsg = ""
  constructor() {
    console.log('user constructor');
  }


  ngOnInit(): void {
    //promises

    const promise = new Promise(resolve => {
      console.log("promises has been called")
      setTimeout(() => {
        resolve('data 1 from promise');
        resolve('data 2 from promise');
        resolve('data 3 from promise');
        resolve('data 4 from promise');


      }, 1000)

    })
    //listening to the promises
    promise.then(result => {
      console.log(result)
    });

    const observ = new Observable((sub) => {
      console.log("data inside observable");
      this.interval = setInterval(() => {
        sub.next('data obesrvable' + this.count++)
        // console.log('data observale', this.count);


      }, 1000)
    });
    this.mySub = observ.subscribe((result) => {
      console.log(result)
    })

  }
  ngOnDestroy(): void {
    console.log('subscribe destroyed')
    this.mySub.unsubscribe()

    // clearInterval(this.interval)
    console.log('clear destroyed');

  }

}
