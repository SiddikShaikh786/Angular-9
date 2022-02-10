import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private user: HttpClient) { }
  getData() {
    return this.user.get('https://jsonplaceholder.typicode.com/todos')
  }
}
