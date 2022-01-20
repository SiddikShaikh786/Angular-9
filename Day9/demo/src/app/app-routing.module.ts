import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: RegComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'products', loadChildren: () => import("src/app/prodcuts/prodcuts.module").then(x => {
      return x.ProdcutsModule
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
