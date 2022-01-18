import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../Service/user-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService: UserServiceService
  ) { }
  canActivate() {
    if (this.authService.isLoggedin()) {
      return true
    }
    else {
      window.alert('you need to login to visit page')
      return false
    }
  }

}
