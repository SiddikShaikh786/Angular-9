import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './Guard/auth-guard.guard';
import { UnsavedGuard } from './Guard/unsaved.guard';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [
  { path: '', redirectTo: ' ', pathMatch: 'full' },//default routing if we dont type any value
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardGuard] },//users path
  { path: 'reg', component: RegComponent, canDeactivate: [UnsavedGuard] },
  { path: '**', component: RegComponent },
  // {path:'about',component:aboutComponent},s
  // {path:'home',component:homeComponent},
  // {path:'contactus',component:contactusComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//forRoot method is responsible for routing
  exports: [RouterModule]
})
export class AppRoutingModule { }
