import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlanding',
  templateUrl: './adminlanding.component.html',
  styleUrls: ['./adminlanding.component.css']
})
export class AdminlandingComponent implements OnInit {

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
