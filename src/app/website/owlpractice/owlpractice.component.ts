import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owlpractice',
  templateUrl: './owlpractice.component.html',
  styleUrls: ['./owlpractice.component.css']
})
export class OwlpracticeComponent implements OnInit {


  dipp= 1300;
  women = 600;
  startupcenters = 550;
  schools = 450;
  amentors = 100;
  ips = 200;
  incubators = 25;
  innovationchallenges = 20;
  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    center:true,
    margin: 6,
    nav: true,
    rewind: true,
    loop:true,
    autoplay:false,
    autoplayTimeout:4000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText : ["←",'→'],
    // navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
  }

}
