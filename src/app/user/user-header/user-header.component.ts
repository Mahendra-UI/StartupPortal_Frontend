import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router,ParamMap  } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  @Output() logout:EventEmitter<any> = new EventEmitter<any>();
  @Output() toggle:EventEmitter<any> = new EventEmitter<any>();
  //@Input() headerLogin!:boolean;
  profilePic:any;
  subscription!: Subscription;
  registerInfo!:boolean
  loginData:any;
  lastLoginTime: any;
  userName: any;
  constructor(private router: Router) {
    // this.authService.profilePic.subscribe((pic)=>{
    //   this.profilePic = pic;
    // })
    

    

   }
  encrypted:any;
  ngOnInit(): void {
    this.loginData =JSON.parse(sessionStorage.getItem('USER_DATA'));
    if(this.loginData?.['is_sso'] == true){
      this.lastLoginTime = this.loginData?.['last_login_on']
      this.userName = this.loginData?.['username']
    }
    else{
      this.lastLoginTime = this.loginData?.['last_login']
      this.userName = this.loginData?.['name']
    }
   // this.headerLogin = true;
   // console.log(this.subscription)
  }


   signOut(){
    this.router.navigate(['/home/login'])
    sessionStorage.clear();
    // this.logout.emit();
   // this.headerLogin = false;
   }

   menuToggle(){
     this.toggle.emit();
   }


 


}
