import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ParentComponent } from '../parent/parent.component';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanDeactivate<ParentComponent> {
  canDeactivate(component: ParentComponent) {

    return window.confirm('Are you sure you want to unauth ????')

  }
}


