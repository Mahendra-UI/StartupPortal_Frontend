import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RegisterService } from '../website/register.service';
import { NgxSpinnerService } from 'ngx-spinner';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.css'],
})
export class SsoComponent implements OnInit {
  loader = true;
  authToken: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private regService: RegisterService,
    private spinner: NgxSpinnerService,
    //private toastr: ToastrService
  ) {
    route.queryParams.subscribe((params) => {
      this.spinner.show();
      this.authToken = params['auth_token'];
      if(typeof(this.authToken) == 'object'){
        sessionStorage.setItem('authToken', this.authToken[0]);
        sessionStorage.setItem('token', this.authToken[0]);
      }
      else{
        sessionStorage.setItem('authToken', this.authToken);
        sessionStorage.setItem('token', this.authToken);  
      }
      sessionStorage.setItem('role', 'Startup');
      this.getUserDetails(this.authToken);
      if (
        this.authToken == '' ||
        this.authToken == 'undefined' ||
        this.authToken == undefined ||
        this.authToken == null
      ) {
        this.spinner.hide();
        return;
      } else {
        this.spinner.hide();
        // this.router.navigate(['/user/home']);
      }
    });
  }

  ngOnInit(): void {}

  getUserDetails(token: any) {
    if (
      this.authToken == '' ||
      this.authToken == 'undefined' ||
      this.authToken == undefined ||
      this.authToken == null
    ) {
      this.spinner.hide();

      return;
    } else {
      this.spinner.show();
      this.regService.ssoUserDetails(token).subscribe((data: any) => {
        if (data['status'] == 'Success') {
          console.warn('sso data in sso comp', data['ssoData'])
          sessionStorage.setItem('ssoData', data['ssoData']);
          var emailId= JSON.parse(data['ssoData'])
          this.getSSOLoggedUserData(emailId['email']);
          // this.getSSOLoggedUserData(data['data'][0]['v_email']);
        } else if (data['status'] == 'Failed') {
          this.spinner.hide();

          this.router.navigate(['/home/login']);
        //  this.toastr.error('Login is unsuccessful', 'Error');
        }
      });
    }
  }
  getSSOLoggedUserData(email: any) {
    this.regService.ssoLoginUserData(email).subscribe((data: any) => {
      console.warn('ssoLoginUserData data in sso comp', data);
      if (data['status'] == 'Success') {
        this.spinner.hide();
        sessionStorage.setItem('is_sso', data['data']['is_sso']);
        sessionStorage.setItem('USER_DATA', JSON.stringify(data['data']));
        sessionStorage.setItem('token', data['data']['token']);
        this.router.navigate(['/user/home']);
      } else {
        this.spinner.hide();

        this.router.navigate(['/home/login']);
      //  this.toastr.error('Login is unsuccessful', 'Error');
      }
    });
  }
}
