import { Component, OnInit } from '@angular/core';
import { MessageService } from '../Service/message.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  result: any
  constructor(private users: MessageService) { }

  ngOnInit(): void {
    this.users.getData().subscribe(data => {
      this.result = data;
    });
  }

}
