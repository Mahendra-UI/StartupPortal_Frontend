import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  dipp = 1300;
  women = 600;
  startupcenters = 550;
  schools = 450;
  amentors = 100;
  ips = 200;
  incubators = 25;
  innovationchallenges = 20;
  isTranslationTelugu: boolean = false;
  constructor(private translationSer: TranslationService) { }

  ngOnInit(): void {
    this.translationSer.valBoolean.subscribe((key: boolean) => {
      this.isTranslationTelugu = key
    });
  }
  
  customOptions: OwlOptions = {
    margin: 2,
    nav: true,
    rewind: true,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoWidth: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 900,
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
        items: 4
      },
      940: {
        items: 4
      }
    },
  }

  imageObject: Array<object> = [
    {
      image: 'assets/images/about/1.png',
      thumbImage: 'assets/images/about/1.png',
      title: 'Slider Image 1',
      alt: 'Image Alt 1',
    }, {
      image: 'assets/images/about/2.png',
      thumbImage: 'assets/images/about/2.png',
      title: 'Slider Image 2',
      alt: 'Image Alt 2'
    }, {
      image: 'assets/images/about/3.png',
      thumbImage: 'assets/images/about/3.png',
      title: 'Slider Image 3',
      alt: 'Image Alt 3'
    },
    {
      image: 'assets/images/about/4.png',
      thumbImage: 'assets/images/about/4.png',
      title: 'Slider Image 4',
      alt: 'Image Alt 4'
    },
    {
      image: 'assets/images/about/4.png',
      thumbImage: 'assets/images/about/4.png',
      title: 'Slider Image 4',
      alt: 'Image Alt 4'
    },
    {
      image: 'assets/images/about/4.png',
      thumbImage: 'assets/images/about/4.png',
      title: 'Slider Image 4',
      alt: 'Image Alt 4'
    }
  ];

}
