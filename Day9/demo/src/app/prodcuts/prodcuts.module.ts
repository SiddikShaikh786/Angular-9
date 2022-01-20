import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashaboardComponent } from './dashaboard/dashaboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashaboardComponent }
]

@NgModule({
  declarations: [DashaboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
  // exports: [DashaboardComponent]
})
export class ProdcutsModule { } 
