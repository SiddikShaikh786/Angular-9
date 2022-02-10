import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  router: any;
  constructor(private authService: AuthService) { }

  onRegister(form) {
    console.log(form)
    this.authService.register(form).subscribe(response => {
      console.log(response);

    })
  }

  ngOnInit(): void {

  }


}
