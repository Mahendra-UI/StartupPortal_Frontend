import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/website/register.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  loginData:any;
  loggedUserRole: any;

  constructor(private router:Router, 
    private fb:FormBuilder,
    private toastr: ToastrService,
    private regService:RegisterService) { }

  ngOnInit(): void {
    this.loginData = JSON.parse(sessionStorage.getItem('USER_DATA'));
    if(this.loginData)
    this.reDirectToScreens();
    else
    this.reloadLoginData()
    
    
  }

  reloadLoginData()
  {
    let obj = JSON.parse(sessionStorage.getItem('registerObj'));
    let registerObj = {
      "pType": 2,
      "email": obj?.email,
      "password": obj?.password,
      "captchacode": obj?.captchacode,
      "capchid": obj?.Capchid,
      "isLogin":false
    }
    this.regService.login(registerObj).subscribe((res: any) => {
      let id = res?.login_id;
        let decryptValue:any = atob(res?.key)
        let orgKey = decryptValue/5588994422
      if (res['status'] == "Success" && id == orgKey) {
        this.loginData = res;
        sessionStorage.setItem("USER_DATA", JSON.stringify(res));
        this.reDirectToScreens();
      }
    })
  }

  reDirectToScreens()
  {
    if(this.loginData?.is_sso == true){
      this.goToInitEditPage(this.loginData?.user_type)
      this.loggedUserRole = this.loginData?.user_type
    }
    else{
      this.goToInitEditPage(this.loginData?.role)
      this.loggedUserRole = this.loginData?.role

    }
  }
  goToEditPage(role)
  {
    if(role == "INCUBATOR")
    this.router.navigate(["/user/incubator"])
    else if(role == "MENTOR")
    {
    this.router.navigate(["/user/mentor"])
    }
    else if(role == "STARTUP")
    this.router.navigate(["/user/startup"])
  }

  goToInitEditPage(role)
  {
    if(role == "INCUBATOR" && this.loginData?.application_status == 'not submitted')
    this.router.navigate(["/user/incubator"])
    else if(role == "MENTOR" && this.loginData?.application_status == 'not submitted')
    {
    this.router.navigate(["/user/mentor"])
    }
    else if(role == "STARTUP" && this.loginData?.application_status == 'not submitted')
    this.router.navigate(["/user/startup"])
  }

}
