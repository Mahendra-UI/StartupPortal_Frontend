import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';
import { SwiperOptions } from 'swiper';
import { RegisterService } from './website/register.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apis-website';
  loader = true;


  show: boolean = true;
  
  menuVisible: boolean = false;



  toggleMenu(){
    this.menuVisible = !this.menuVisible
  }

  constructor(private route: ActivatedRoute, private router: Router, private regService: RegisterService){

    router.events.subscribe(val => {
      // console.log('val',val.url)
      // if (location.path() != "/something") {
      //     // do something
      // } else {
      //    // do something else
      // }
    });

    // router.events.filter((event: any) => event instanceof NavigationEnd).subscribe(val => { 
    //   console.warn('new val', val)
    //  })

  }

   //Loader variable set false after page load
   ngOnInit(): void {
   setTimeout(()=>{                           
     this.loader = false;
 }, 1000);
 }
   getUserDetails(token: any) {
    console.warn('app comp')
    this.regService.ssoUserDetails(token).subscribe((data: any) => {
      console.warn('data', data)
    })
  }
}
