import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router,ParamMap  } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  @Output() logout:EventEmitter<any> = new EventEmitter<any>();
  @Output() toggle:EventEmitter<any> = new EventEmitter<any>();
  //@Input() headerLogin!:boolean;
  profilePic:any;
  subscription!: Subscription;
  registerInfo!:boolean;
  lastLoginTime: any = '';
  loginData: any;
  constructor(private router: Router) {
    // this.authService.profilePic.subscribe((pic)=>{
    //   this.profilePic = pic;
    // })
    

    

   }
  encrypted:any;
  ngOnInit(): void {
   // this.headerLogin = true;
   // console.log(this.subscription)
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
