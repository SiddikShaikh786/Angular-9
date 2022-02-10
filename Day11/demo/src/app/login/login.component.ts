import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  onLogin(form) {
    console.log(form)
    this.authService.login(form).subscribe(response => {
      console.log(response)
      localStorage.setItem('userDetails', JSON.stringify(response));
      this.router.navigate(['product'])
    })
  }

}
