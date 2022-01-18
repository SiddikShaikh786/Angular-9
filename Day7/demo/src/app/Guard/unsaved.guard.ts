import { Component, Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegComponent } from '../reg/reg.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<RegComponent> {
  canDeactivate(component: RegComponent) {
    if (component.fname.dirty) {
      return window.confirm('Are you sure you want to navigate ??')
    }
    else {
      return true
    }
  }

}
