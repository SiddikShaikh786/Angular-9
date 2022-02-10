import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  seletedCountry = "Ind";
  title = "demo"

  message = ""



  ngOnInit(): void {
    const observ = new Observable(obs => {
      obs.next(Math.random())
    });
    observ.subscribe(d => {
      console.log(d)
    })
    observ.subscribe(e => {
      console.log(e)
    })

    const sub = new Subject()
    sub.subscribe(e => {
      console.log(e)
    })
    sub.subscribe(d => {
      console.log(d)
    })
    sub.next(Math.random())

  }


}




