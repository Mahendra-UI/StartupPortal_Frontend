
import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpEvent, HttpResponse,HttpRequest, HttpHandler, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }
  intercept(httpReq: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    const authToken = sessionStorage.getItem('authToken');
    var headers = new HttpHeaders()
    if(authToken == null || authToken == undefined){
      headers = new HttpHeaders().set("Authorization", "Bearer " + token)
    }
    else{
      headers = new HttpHeaders().set("Authorization", "Bearer " + token).set("x-auth-token", authToken)
    }
    const AuthRequest = httpReq.clone({ headers: headers });
    return next.handle(AuthRequest)
  }
}