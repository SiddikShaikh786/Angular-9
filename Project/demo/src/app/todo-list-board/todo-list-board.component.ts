import { Component, OnInit } from '@angular/core';
import { MessageService } from '../UserSevice/message.service';

@Component({
  selector: 'app-todo-list-board',
  templateUrl: './todo-list-board.component.html',
  styleUrls: ['./todo-list-board.component.css']
})
export class TodoListBoardComponent implements OnInit {
  result: any = [];
  newValue: any = [];
  flag: boolean = false
  constructor(private service: MessageService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      this.result = data;
    })
  }
  allList() {
    this.flag = true
    this.service.getData().subscribe(da => {
      this.newValue = da;
    })
  }


  ToDolist() {
    this.flag = true;
    this.newValue = [];
    this.result.filter((val: any) => {
      if (val.completed === true) {
        this.newValue.push(val)
      }
    });
    console.log(this.newValue);

  }
  completed() {
    this.flag = true;
    this.newValue = [];
    this.result.filter((val: any) => {
      if (val.completed === false) {
        this.newValue.push(val)
      }
    })

  }


}
