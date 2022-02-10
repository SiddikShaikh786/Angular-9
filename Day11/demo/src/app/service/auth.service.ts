import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  register(form) {
    return this.http.post(`$(environment.baseUrl)/users/register`, form)
  }
  login(form) {
    return this.http.post(`$(environment.baseUrl)/users/login`, form)
  }
  getToken() {
    return JSON.parse(localStorage.getItem('userDetails'))
  }

}
