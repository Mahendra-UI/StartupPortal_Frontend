import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  config: SwiperOptions = {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: { draggable: true },
    speed: 800,
    loop: true,
    effect: 'cube',
    grabCursor: false,
    cubeEffect: {
      shadow: false,
      slideShadows: false,
      // shadowOffset: 40,
      // shadowScale: 0.94,
    }
  };
}
