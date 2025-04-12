import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statsslick',
  templateUrl: './statsslick.component.html',
  styleUrls: ['./statsslick.component.css']
})
export class StatsslickComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  slideConfig = {

    "centerMode": true,
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "arrows": true,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplaySpeed: 5000,
          arrows: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          infinite: true,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          infinite: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

}
