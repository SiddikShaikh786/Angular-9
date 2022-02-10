import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../userService/service.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  hi = "changed"
  result: any
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.passData().subscribe(e => {
      this.result = e
      console.log(this.result)
    })
  }


}
