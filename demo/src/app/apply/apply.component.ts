import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  @Input() value: any
  constructor() { }

  ngOnInit(): void {
  }

}
