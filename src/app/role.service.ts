import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  userRoles: string[] = [
    'Admin',
    'WebsiteAdmin',
    'Startup',
    'Mentor',
    'Incubator'
  ];

  constructor() { }


  getRoles(){
    return this.userRoles;
  }

  isRoleSame(role: any){
    var roleExisting = (sessionStorage.getItem('role')).toUpperCase()
    var eventRole = role.toUpperCase()
    if(roleExisting == eventRole){
      return true;
    }
    return false;
  }
}
