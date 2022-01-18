import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  salesPrdoucts = [
    { name: 'mobile', price: 251000 },
    { name: 'samsung', price: 251000 },
    { name: 'Apple', price: 251000 },
    { name: 'nokia', price: 22200 },
    { name: 'RedMI', price: 251000 }

  ]

  newsPrdoucts = [
    { name: 'mobile', price: 251000 },
    { name: 'samsung', price: 251000 },
    { name: 'siddik', price: 251000 },
    { name: 'Savant', price: 22200000 },
    { name: 'Sahana', price: 251000 }

  ]


}
