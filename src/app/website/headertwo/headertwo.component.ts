// import { Component, OnInit, Output,EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';

import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

import { ActivatedRoute, Router,ParamMap  } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-headertwo',
  templateUrl: './headertwo.component.html',
  styleUrls: ['./headertwo.component.css']
})
export class HeadertwoComponent implements OnInit {
  @ViewChild('stickyMenu')
  menuElement!: ElementRef;

  sticky: boolean = false;
  elementPosition: any;
  toggle: any;
 
  constructor() { }
  menuToggle(){
    this.toggle.emit();
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
}
