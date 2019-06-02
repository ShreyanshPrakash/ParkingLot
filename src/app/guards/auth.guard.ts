import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad{
  count:number;

  constructor(){
    this.count = 5;
  }

  canLoad( route: Route ): boolean{
    if( this.count >5){

      return false;
    }

    return true;
  }
}
