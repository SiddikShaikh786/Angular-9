import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  isLoggedin() {
    //business Logic
    return true //false restrict the page 
  }

  constructor() { }
}
