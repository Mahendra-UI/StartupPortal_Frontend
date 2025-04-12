import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isAuthenticated(){
    if(sessionStorage.getItem('token')){
      return true;
    }
    return false;
  }
}
