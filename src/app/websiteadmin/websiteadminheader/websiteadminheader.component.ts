import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-websiteadminheader',
  templateUrl: './websiteadminheader.component.html',
  styleUrls: ['./websiteadminheader.component.css']
})
export class WebsiteadminheaderComponent implements OnInit {

  @Output() logout:EventEmitter<any> = new EventEmitter<any>();
  @Output() toggle:EventEmitter<any> = new EventEmitter<any>();
  //@Input() headerLogin!:boolean;
  profilePic:any;
  subscription!: Subscription;
  registerInfo!:boolean;
  lastLoginTime: any = '';
  loginData: any;
  constructor(private router: Router) {
   }
  encrypted:any;
  ngOnInit(): void {
   this.loginData =JSON.parse(sessionStorage.getItem('USER_DATA'));
    if(this.loginData?.['is_sso'] == true){
      this.lastLoginTime = this.loginData?.['last_login_on']
    }
    else{
      this.lastLoginTime = this.loginData?.['last_login']
    }
  }


   signOut(){
    this.router.navigate(['/home/login'])
    sessionStorage.clear();
   }

   menuToggle(){
     this.toggle.emit();
   }


}
