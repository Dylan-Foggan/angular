import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../../public-api';

@Injectable({

  providedIn: 'root'
})

export class AuthGuard implements CanLoad, CanActivate {

  constructor(public authService: AuthService, public router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isLoggedIn !== true) this.router.navigate(['/login']);

    return true;

  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (!this.authService.isLoggedIn !== true) this.router.navigate(['/login']);

    return true;

  }

}

