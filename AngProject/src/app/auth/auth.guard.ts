import { CryptService } from './../services/crypt.service';
// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }

// }

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private crypt:CryptService
    ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const token = localStorage.getItem('token');
    if (token != null){
      const role = this.crypt.Decrypt(localStorage.getItem('Role'));
      if (role != null){
        console.log(role);
        if(role === "Admin"){
          return true;
        }else if (role === 'User'){
          this.router.navigate(['userhome']);
          //window.alert("you're not authorized");
          console.log("You're Not Authorized");
          return true;
        }
      }
      return true;
    }

    else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
