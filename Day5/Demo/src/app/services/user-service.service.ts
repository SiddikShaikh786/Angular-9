import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  getData() {
    return [
      { name: "Shaikh", deve: "developer", id: 100 },
      { name: "Shaikh", deve: "developer", id: 101 },
      { name: "Shaikh", deve: "developer", id: 102 },
      { name: "Shaikh", deve: "developer", id: 103 },

    ]
  }
  constructor() { }
}
