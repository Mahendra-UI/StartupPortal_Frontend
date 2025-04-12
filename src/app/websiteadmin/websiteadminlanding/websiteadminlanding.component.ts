import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-websiteadminlanding',
  templateUrl: './websiteadminlanding.component.html',
  styleUrls: ['./websiteadminlanding.component.css']
})
export class WebsiteadminlandingComponent implements OnInit {

  constructor() { }
  show: boolean = true;
  
  menuVisible: boolean = false;



  toggleMenu(){
    this.menuVisible = !this.menuVisible
  }
  ngOnInit(): void {
  }
  onActivate(event:any) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
}

}
