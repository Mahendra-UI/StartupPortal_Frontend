import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import * as AOS from 'aos';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { TranslationService } from 'src/app/translation.service';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-swipertwo',
  templateUrl: './swipertwo.component.html',
  styleUrls: ['./swipertwo.component.css']
})
export class SwipertwoComponent implements OnInit {
  isTranslationTelugu: boolean = false

  constructor(private translationSer: TranslationService) { }

  ngOnInit(): void {
    this.translationSer.valBoolean.subscribe((key: boolean) => {
      this.isTranslationTelugu = key
    });
    AOS.init();
  }
  goToUrl(){
    // your logic here.... like set the url
    const url = 'https://msh.meity.gov.in/schemes/samridh';
    window.open(url, '_blank');
  }
  amaravathiDoneSummit(){
    // your logic here.... like set the url
    const url = 'https://amaravatidronesummit.com/hackathon.html';
    window.open(url, '_blank');
  }
  diitalTechnology() {
    const url = 'https://apdts.in/register/';
    window.open(url, '_blank');
  }
  swarnandraVision() {
    const url = 'assets/images/banners/swarnaandhra_2047.pdf';
    window.open(url, '_blank');
  //   const url = 'assets/images/banners/swarnaandhra_2047.pdf';
  // const link = document.createElement('a');
  // link.href = url;
  // link.download = 'swarnaandhra_2047.pdf';
  // link.click();
  }

  incubationSpace() {
    const url = 'https://forms.gle/cCEfoEMt1BrvimH96';
    window.open(url, '_blank');
  }
  meityClick() {
    const url = 'https://forms.gle/pmnpkjpcc5t3LAb19';
    window.open(url, '_blank');
  }
  config: SwiperOptions = {
    // breakpoints: {
    //    // when window width is >= 320px
    // 320: {
    //   navigation: false,
    // },
    // // when window width is >= 480px
    // 480: {
    //   navigation: false,
    // },
    // },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: false,
    // },
    autoHeight: true,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'disabled_swiper_button'
    },

    scrollbar: { draggable: true },
    speed: 1000,
    loop: true,
    // effect: 'slide',
    grabCursor: false,
    cubeEffect: {
      shadow: false,
      slideShadows: false,
      // shadowOffset: 40,
      // shadowScale: 0.94,
    },    
  };

}
