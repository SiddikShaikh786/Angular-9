import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../userService/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: ServiceService) { }
  canActivate(): boolean {
    if (this.authservice.isLoggedin()) {
      return true;

    }
    else {
      alert('you need to login the page')
      return false;
    }
  }

}
