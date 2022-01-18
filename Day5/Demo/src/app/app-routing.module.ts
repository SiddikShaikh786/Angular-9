import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { RegComponent } from './reg/reg.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: "", redirectTo: "reg", pathMatch: "full" },
  { path: "user", component: UserComponent },
  { path: "reg", component: RegComponent },
  { path: "login", component: LoginComponent },
  { path: "contactus", component: ContactUsComponent },
  { path: "**", component: AboutComponent },
  { path: "contact-us", component: ContactUsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
