import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {


  subscription!:Subscription;
  profilePic:any;
  // constructor(public router:Router,private authService:AuthService,public component:AppComponent) {
  //   this.subscription = this.authService.getProfilePic().subscribe(pic => {
  //     if(pic){
  //       this.profilePic = pic;
  //     }
       
  //   });
  // }
  constructor(){
    
  }
  @Input() expand!:boolean;
  userName!:string;
  email!:string;
  district!:string;
  Role:any;

  ngOnInit(): void {
    let data:any = sessionStorage.getItem('UserDetails');
    this.email = JSON.parse(data).emailid;
    this.district = JSON.parse(data).districtname;
    this.Role = JSON.parse(data).role_name;
    this.userName = JSON.parse(data).username;
    console.log(this.Role)

}

ngAfterViewInIt(){
  
}


}
