import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component'
import { pipe } from 'rxjs';
// import { ProdcutsModule } from './prodcuts/prodcuts.module';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { SignupComponent } from './signup/signup.component';
// import { DashaboardComponent } from './prodcuts/dashaboard/dashaboard.component';
@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    LoginComponent,
    RegComponent,
    SignupComponent,
    // DashaboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ProdcutsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
