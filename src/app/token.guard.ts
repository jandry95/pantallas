import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {

  constructor ( private router : Router) {

  }
  canActivate(
   ) {

    const auth = localStorage.getItem("guardarToken");
    if(auth == null){
      console.log("no estas logeado");

      this.router.navigate(['/']);
      return false;
   }
   return true;
  }


}
