import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  values
  constructor(private user: UserServiceService) {
    this.values = this.user.getData()
  }

  ngOnInit(): void {

  }

}
