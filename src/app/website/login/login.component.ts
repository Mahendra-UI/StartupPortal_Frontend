import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../register.service';
import { utilsService } from '../utils.service';
import *  as $ from 'jquery';
import * as CryptoJS from '../../../assets/js/sso.js'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  submitted: boolean = false;

  constructor(private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private regService: RegisterService, private utils: utilsService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
      captchacode: ['', [Validators.required]]
    })

    this.loadcaptcha();
  }
  goToRegister() {
    this.router.navigate(["/home/register"])
  }
  gotoHomepage() {
    this.router.navigate(["/user/home"])
  }
  gotoAdmin() {
    this.router.navigate(["/admin"])
  }
  gotoWebsiteAdmin() {
    this.router.navigate(['/websiteadmin']); // or '/websiteadmin/home' if you prefer
  }  
  goToStartup() {
    this.router.navigate(["/user/startup"])
  }
  goToMentor() {
    this.router.navigate(["/user/mentor"])
  }
  goToIncubator() {
    this.router.navigate(["/user/incubator"])
  }
  get loginFormCtrls() {
    return this.loginForm.controls;
  }
  submitLoginForm() {
    this.submitted = true;


    if (this.loginForm.invalid)
      return;
    // if (this.utils.decrypt(sessionStorage.getItem("Capchid")) == this.loginForm.value.captchacode) {
      let registerObj = {
        "pType": 2,
        "email": this.loginForm.value.email,
        "password": this.loginForm.value.password,
        "captchacode": this.loginForm.value.captchacode,
        "Capchid": this.utils.decrypt(sessionStorage.getItem("Capchid")),
        "isLogin":true
      }
      this.regService.login(registerObj).subscribe((res: any) => {
        let id = res?.login_id;
        let decryptValue:any = atob(res?.key)
        let orgKey = decryptValue/5588994422
       if (res['status'] == "Success" && id == orgKey) {
          sessionStorage.setItem("USER_DATA", JSON.stringify(res));
          sessionStorage.setItem("token", res['data']);
          sessionStorage.setItem("role", res['role']);
          sessionStorage.setItem('registerObj',JSON.stringify(registerObj));
          sessionStorage.setItem('is_sso', res['is_sso']);
          sessionStorage.setItem('view', 'login');

          this.toastr.success("Success");
          var response = JSON.parse(JSON.stringify(res));
          
          if (response.role == "ADMIN") {
            this.gotoAdmin();
          }
          else if (response.role == "WebsiteAdmin") {
            this.gotoWebsiteAdmin(); // 👈 Add this line
          }
          else {
            if(response?.application_status != 'not submitted')
            this.gotoHomepage();
            else if(response?.role =='STARTUP')
            this.goToStartup();
            else if(response?.role =='MENTOR')
            this.goToMentor();
            else if(response?.role =='INCUBATOR')
            this.goToIncubator()
          }
        }
        else if (res['status'] == "Failed") {
          this.toastr.error(res["message"], "Failed")
          this.loginForm.patchValue({
            captchacode: ''
          })
          this.loadcaptcha()
        }
       })
    // }
    // else {
    //   this.toastr.error("Invalid Captcha Code", "Failed")

    // }
  }

  imageBase64: string;

  loadcaptcha() {

    this.regService.getcaptcha().subscribe((res: any) => {

      this.imageBase64 = res.imgurl;
      sessionStorage.setItem("Capchid", this.utils.encrypt(res.Capchid));

    })

  }

  getUserDetails() {
    // var url = "https://www.startupindia.gov.in/etc/designs/invest-india/investindialibs/js/siauthlogin";
    // location.href = url;
    // this.router.navigate([''])
    // this.regService.ssoLogin().subscribe((data: any) => {
    // })
  }

  ssoLogin(){
    var scripts = document.getElementsByTagName("script");
var src = scripts[scripts.length-1].src;
var endpoint = "https://api.startupindia.gov.in/sih/";
var cssEndpoint = 'https://www.startupindia.gov.in/etc/designs/invest-india/investindialibs/css/outhlogin.css';
// var sih_auth_api_key = "ODxh334SpRagA";
// var sih_auth_callback_uri ="https://dev-apit.e-pragati.in"
// var sih_auth_api_key = "BRnUkuRPrAgAtI";
// var sih_auth_callback_uri ="https://dev-startup.e-pragati.in"
var sih_auth_api_key = "ODxJhR4SpRAga";
var sih_auth_callback_uri ="https://apis.ap.gov.in"
if(src.indexOf("startupindia.gov.in") > 0){
    endpoint = "https://api.startupindia.gov.in/sih/";
    cssEndpoint = 'https://www.startupindia.gov.in/etc/designs/invest-india/investindialibs/css/outhlogin.css';
}else if (src.indexOf("sih.qa.intelligrape.net") > 0){
    endpoint = "https://sih.qa.intelligrape.net/sihdev/";
    cssEndpoint = 'https://sih.qa.intelligrape.net/etc/designs/invest-india/investindialibs/css/outhlogin.css';
}
this.initiateLogin(endpoint, sih_auth_api_key,sih_auth_callback_uri);
// $(document).ready(function () {
//     //loadcss();
//     $('.oauth-login').on('click', function () {
//         initiateLogin(sih_auth_api_key,sih_auth_callback_uri);
//     });
// });



}
  
  initiateLogin(endpoint: any, clientId: any, callback: any){
    function login(endpoint, clientId,callback) {
      var request = $.ajax({
          url: endpoint+"api/noauth/sihLogin/authclient?clientid="+clientId+"&callback="+callback,
          type: "GET"
      });
  
      request.done(function (msg) {
          window.location = msg.loginURL;
        });
        
        request.fail(function (jqXHR, textStatus) {
        });
      }
      login(endpoint, clientId, callback)
}
}
