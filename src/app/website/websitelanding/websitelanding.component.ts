import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-websitelanding',
  templateUrl: './websitelanding.component.html',
  styleUrls: ['./websitelanding.component.css']
})
export class WebsitelandingComponent implements OnInit {
   constructor(private router:Router,public elementRef: ElementRef, private renderer: Renderer2) {
    this.router.events.subscribe((val:any)=>{
      if (val instanceof NavigationEnd) {
        let ele: any = document.querySelector('#navbarSupportedContent');
        this.renderer?.removeClass(ele,'show')
      }
    })
    
   }
   show: boolean = true;
  
  menuVisible: boolean = false;



  toggleMenu(){
    this.menuVisible = !this.menuVisible
  }
  ngOnInit(): void {
  }
  onActivate(event:any) {
    window.scroll(0,0);
  // document.body.scrollTop = 0;

    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
}



}
