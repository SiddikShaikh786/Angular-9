import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { childComponent } from './child/child.component';
import { AuthGuard } from './guard/auth.guard';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
  { path: 'parent', component: ParentComponent, canDeactivate: [] },
  { path: 'child', component: childComponent, canActivate: [AuthGuard] },
  { path: 'gf', redirectTo: 'parent', pathMatch: 'full' },
  { path: 'reg', loadChildren: () => import('./reg/reg.module').then(m => m.RegModule) },
  { path: '**', component: childComponent },
  { path: 'login', loadChildren: () => import('./login/login.module').then(x => x.LoginModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
