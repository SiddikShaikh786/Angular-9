import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = [
    { name: 'siddik', id: 10, city: 'bengaluru', salary: 25000, dob: new Date('22 Jan 1989') },
    { name: 'Harsha', id: 11, city: 'tumkur', salary: 25000, dob: new Date('22 Jan 2000') },
    { name: 'savanth', id: 12, city: 'shivmogga', salary: 25000, dob: new Date('22 Jan 2009') },
    { name: 'Sunal', id: 13, city: 'Davangere', salary: 25000, dob: new Date('22 Jan 2020') },
    { name: 'navin', id: 14, city: 'Davangere', salary: 25200, dob: new Date('22 Jan 2024') },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
