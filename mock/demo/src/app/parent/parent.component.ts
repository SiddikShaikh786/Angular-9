import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input() child: any

  // name = "classFont classColor1 classStyles"
  // value: boolean = true
  // c1 = "green"
  // toggle() {
  //   this.value = !this.value;

  // }
  // name1 = ""
  // isTrue = true
  // person = [
  //   { name: "John", id: 100 },
  //   { name: "shaikh", id: 101 }
  // ]
  // toggle1() {
  //   this.isTrue = !this.isTrue;
  // }
  // //  parent to child
  // message = ""
  // isParent = true
  // messageFromParent() {
  //   this.isParent = !this.isParent;
  // }

  // //child to parent
  // receiveMessage = ""
  // passData(data: any) {
  //   this.receiveMessage = data
  // }

  submit(loginForm: NgForm) {
    console.log(loginForm.value)
  }

  constructor() { }


  ngOnInit(): void {
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
