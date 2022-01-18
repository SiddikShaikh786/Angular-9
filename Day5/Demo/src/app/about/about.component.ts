import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // constructor(private user: UserServiceService) {
  //   this.about = this.user.getData()
  // }

  result: any
  res: string
  val: string = 'TY'
  dept: string = 'DEV'
  rand: number = Math.random() * 1000
  full: number = Math.floor(this.rand)

  logic() {
    let abc
    for (let i = 0; i < 3; i++) {
      this.res = this.val += this.result[i]

    }
    abc = this.res + this.dept + this.full
    let nameDisp = document.getElementById('display')
    nameDisp.innerHTML = abc

  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
