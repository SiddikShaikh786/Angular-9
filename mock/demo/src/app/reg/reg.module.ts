import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegRoutingModule } from './reg-routing.module';
import { RegComponent } from './reg.component';


@NgModule({
  declarations: [RegComponent],
  imports: [
    CommonModule,
    RegRoutingModule
  ]
})
export class RegModule { }
