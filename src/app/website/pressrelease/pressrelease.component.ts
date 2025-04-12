import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-pressrelease',
  templateUrl: './pressrelease.component.html',
  styleUrls: ['./pressrelease.component.css']
})
export class PressreleaseComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        // width: '100%',
        // height: '650px',
        // width: '600px',
        // height: '650px',
        thumbnailsColumns: 5,
        imagePercent: 100,
        imageAutoPlay: true,
        imageAutoPlayInterval: 9000,
        imageInfinityMove: true,
        "previewZoom": true, "previewRotate": true,
        "imageArrows": true, "thumbnailsArrows": true,
        "arrowPrevIcon": "fa fa-arrow-circle-o-left", "arrowNextIcon": "fa fa-arrow-circle-o-right", "closeIcon": "fa fa-window-close", "fullscreenIcon": "fa fa-arrows", "spinnerIcon": "fa fa-refresh fa-spin fa-3x fa-fw", "previewFullscreen": true,

        // preview: false,
        // previewFullscreen: false,
        previewForceFullscreen: true,
        // imageAnimation: NgxGalleryAnimation.Zoom
        imageAnimation: NgxGalleryAnimation.Rotate
        // imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 1199,
        preview: false,
        previewFullscreen: false,
        width: '100%',
        height: '500px',
        imagePercent: 80,
        imageAutoPlay: true,
        imageAutoPlayInterval: 9000,
        imageInfinityMove: true,
        // imageAutoPlayPauseOnHover: true,
        previewAutoPlay: true,
        previewAutoPlayInterval: 10000,
        // previewAutoPlayPauseOnHover: true,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 500,
        height: '230px',
        thumbnails: false,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/resources/pressreleases/Picture1.png',
        medium: 'assets/images/resources/pressreleases/Picture1.png',
        big: 'assets/images/resources/pressreleases/Picture1.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture2.png',
        medium: 'assets/images/resources/pressreleases/Picture2.png',
        big: 'assets/images/resources/pressreleases/Picture2.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture3.png',
        medium: 'assets/images/resources/pressreleases/Picture3.png',
        big: 'assets/images/resources/pressreleases/Picture3.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture4.png',
        medium: 'assets/images/resources/pressreleases/Picture4.png',
        big: 'assets/images/resources/pressreleases/Picture4.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture5.png',
        medium: 'assets/images/resources/pressreleases/Picture5.png',
        big: 'assets/images/resources/pressreleases/Picture5.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture6.png',
        medium: 'assets/images/resources/pressreleases/Picture6.png',
        big: 'assets/images/resources/pressreleases/Picture6.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture7.png',
        medium: 'assets/images/resources/pressreleases/Picture7.png',
        big: 'assets/images/resources/pressreleases/Picture7.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture8.png',
        medium: 'assets/images/resources/pressreleases/Picture8.png',
        big: 'assets/images/resources/pressreleases/Picture8.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture9.png',
        medium: 'assets/images/resources/pressreleases/Picture9.png',
        big: 'assets/images/resources/pressreleases/Picture9.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture10.png',
        medium: 'assets/images/resources/pressreleases/Picture10.png',
        big: 'assets/images/resources/pressreleases/Picture10.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture11.png',
        medium: 'assets/images/resources/pressreleases/Picture11.png',
        big: 'assets/images/resources/pressreleases/Picture11.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture12.png',
        medium: 'assets/images/resources/pressreleases/Picture12.png',
        big: 'assets/images/resources/pressreleases/Picture12.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture14.png',
        medium: 'assets/images/resources/pressreleases/Picture14.png',
        big: 'assets/images/resources/pressreleases/Picture14.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture15.png',
        medium: 'assets/images/resources/pressreleases/Picture15.png',
        big: 'assets/images/resources/pressreleases/Picture15.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture16.png',
        medium: 'assets/images/resources/pressreleases/Picture16.png',
        big: 'assets/images/resources/pressreleases/Picture16.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture17.png',
        medium: 'assets/images/resources/pressreleases/Picture17.png',
        big: 'assets/images/resources/pressreleases/Picture17.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture18.png',
        medium: 'assets/images/resources/pressreleases/Picture18.png',
        big: 'assets/images/resources/pressreleases/Picture18.png'
      },
      {
        small: 'assets/images/resources/pressreleases/Picture19.png',
        medium: 'assets/images/resources/pressreleases/Picture19.png',
        big: 'assets/images/resources/pressreleases/Picture19.png'
      },
    ];
  }

}
