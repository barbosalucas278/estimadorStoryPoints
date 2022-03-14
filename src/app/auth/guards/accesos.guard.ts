import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AccesosGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate() {
    setTimeout(() => {
      if (!this.authService.hasLogged) {
        this.router.navigate(['/auth/login']);
      }
    }, 2000);
    return true;
  }
}
