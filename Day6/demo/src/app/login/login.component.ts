import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({

    fname: new FormControl("", [Validators.pattern("^[a-zA-Z]+$")]),
    lname: new FormControl("", [Validators.pattern("^[a-zA-Z]+$")]),
    uname: new FormControl("", [Validators.email]),
    password: new FormControl("", [Validators.pattern("^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$"
    )]),
    retypepass: new FormControl("", [Validators.pattern("^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$")]),
    inlineRadioOptions: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required])
  })

  get fname() {
    return this.loginForm.get('fname')
  }
  get lname() {
    return this.loginForm.get('lname')
  }
  get uname() {
    return this.loginForm.get('uname')
  }
  get password() {
    return this.loginForm.get('password')
  }
  get retypepass() {
    return this.loginForm.get('retypepass')
  }
  get inlineRadioOptions() {
    return this.loginForm.get('inlineRadioOptions')
  }
  get dob() {
    return this.loginForm.get('dob')
  }

  login() {
    console.log(this.loginForm.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
