import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  body = {
    userid: 1,
    title: 'ARMY',
    body: "TECHNO ELEVATE"
  }
  getData() {
    const product =
      [
        { name: 'shaikh', id: 100 },
        { name: 'JOhn', id: 100 }
      ]
    return product;
  }

  passData() {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', this.body)
  }

  isLoggedin() {

    return false
  }
}
