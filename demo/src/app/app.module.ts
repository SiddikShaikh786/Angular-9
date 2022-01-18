import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// two way binding
import { FormsModule } from '@angular/forms';
import { RegComponent } from './reg/reg.component';
import { ApplyComponent } from './apply/apply.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    ApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule              // *** two way binding ***
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
