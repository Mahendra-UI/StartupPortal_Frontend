import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private roleSer: RoleService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    var data = route.data.roles[0]
    if (this.roleSer.isRoleSame(data)) {
      return true
    }
    else {
      this.router.navigateByUrl('home/login');
      return false;
    }
  }

}
