import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import Popper from 'popper.js';


@Component({
  selector: 'app-homeslidebanner',
  templateUrl: './homeslidebanner.component.html',
  styleUrls: ['./homeslidebanner.component.css']
})
export class HomeslidebannerComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private el: ElementRef) { 
    config.interval = 3000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;    
    window.scrollTo(0, 0)
   }
  ngOnInit(): void {
  }
    scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}
  onSlide(slideEvent: NgbSlideEvent) {
  }

}
