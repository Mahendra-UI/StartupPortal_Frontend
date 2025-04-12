import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @ViewChild('stickyMenu')
  menuElement!: ElementRef;
  isTranslationTelugu: boolean = false;

  sticky: boolean = false;
  elementPosition: any;
  toggle: any;
  public grayscaleShow: boolean = false;
  fontSize: number;
  DEFAULT_FONT_SIZE12: any = 12;
  DEFAULT_FONT_SIZE14: any = 14;
  DEFAULT_FONT_SIZE16: any = 16;
  DEFAULT_FONT_SIZE32: any = 32;
  DEFAULT_FONT_SIZE36: any = 36;
  DEFAULT_FONT_SIZE40: any = 40;
  DEFAULT_FONT_SIZE26: any = 26;
  DEFAULT_FONT_SIZE24: any = 24;

  constructor(public translate: TranslateService, private translationSer: TranslationService) {
    translate.addLangs(['English', 'Telugu']);
    translate.setDefaultLang('English');
    const browserLang: any = translate.getBrowserLang();
    if(browserLang == 'English' || browserLang == 'en'){
      translate.use('English');
    }
    else if(browserLang == 'Telugu'){
      translate.use('Telugu');
    }
    else{
      translate.use('English');
    }
  }

  

  menuToggle() {
    this.toggle.emit();
  }
  ngOnInit(): void {
    this.translationSer.valBoolean.subscribe((key: boolean) => {
      this.isTranslationTelugu = key
    });
    this.translate.addLangs(['English', 'Telugu'])
    this.translate.setDefaultLang('English');
    let browserLang = this.translate.getBrowserLang();
    sessionStorage.setItem('language', 'English');
  }
  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  langChange(lang) {
    this.translate.use(lang)
    sessionStorage.setItem('language', lang);
    if(lang == 'Telugu'){
      this.translateTelugu(true)
    }
   else{
      this.translateTelugu(false)
    }
  }
  translateTelugu(val: boolean){
    this.translationSer.changeBoolean(val);
  }

  private fontSizeOffset = 0;

  increaseFontSize() {
    var root = document.documentElement.style;
    this.DEFAULT_FONT_SIZE12 = this.DEFAULT_FONT_SIZE12 * 1.2
    this.DEFAULT_FONT_SIZE14 = this.DEFAULT_FONT_SIZE14 * 1.2
    this.DEFAULT_FONT_SIZE16 = this.DEFAULT_FONT_SIZE16 * 1.2;
    this.DEFAULT_FONT_SIZE32 = this.DEFAULT_FONT_SIZE32 * 1.2;
    this.DEFAULT_FONT_SIZE36 = this.DEFAULT_FONT_SIZE36 * 1.2
    this.DEFAULT_FONT_SIZE40 = this.DEFAULT_FONT_SIZE40 * 1.2
    this.DEFAULT_FONT_SIZE26 = this.DEFAULT_FONT_SIZE26 * 1.2
    this.DEFAULT_FONT_SIZE24 = this.DEFAULT_FONT_SIZE24 * 1.2

    // if(this.DEFAULT_FONT_SIZE12 <= 24){
    root.setProperty('--fontSize12', ((this.DEFAULT_FONT_SIZE12) + 'px'))
    // }
    // if(this.DEFAULT_FONT_SIZE14 <= 28){
    root.setProperty('--fontSize14', ((this.DEFAULT_FONT_SIZE14) + 'px'))
    // }
    // if(this.DEFAULT_FONT_SIZE16 <= 32){
    root.setProperty('--fontSize16', ((this.DEFAULT_FONT_SIZE16) + 'px'))
    // }
    // if(this.DEFAULT_FONT_SIZE32 <= 64){
    root.setProperty('--fontSize32', ((this.DEFAULT_FONT_SIZE32) + 'px'))
    // }
    // if(this.DEFAULT_FONT_SIZE36 <= 72){
    root.setProperty('--fontSize36', ((this.DEFAULT_FONT_SIZE36) + 'px'))
    // }
    // if(this.DEFAULT_FONT_SIZE40 <= 80){
    root.setProperty('--fontSize40', ((this.DEFAULT_FONT_SIZE40) + 'px'))
    // }
        // if(this.DEFAULT_FONT_SIZE12 <= 24){
          root.setProperty('--fontSize26', ((this.DEFAULT_FONT_SIZE26) + 'px'))
          // }
              // if(this.DEFAULT_FONT_SIZE12 <= 24){
    root.setProperty('--fontSize24', ((this.DEFAULT_FONT_SIZE24) + 'px'))
    // }
  }

  decreaseFontSize() {
    var root = document.documentElement.style;
    this.DEFAULT_FONT_SIZE12 = this.DEFAULT_FONT_SIZE12 * 0.8
    this.DEFAULT_FONT_SIZE14 = this.DEFAULT_FONT_SIZE14 * 0.8
    this.DEFAULT_FONT_SIZE16 = this.DEFAULT_FONT_SIZE16 * 0.8;
    this.DEFAULT_FONT_SIZE32 = this.DEFAULT_FONT_SIZE32 * 0.8;
    this.DEFAULT_FONT_SIZE36 = this.DEFAULT_FONT_SIZE36 * 0.8
    this.DEFAULT_FONT_SIZE40 = this.DEFAULT_FONT_SIZE40 * 0.8
    this.DEFAULT_FONT_SIZE26 = this.DEFAULT_FONT_SIZE26 * 0.8
    this.DEFAULT_FONT_SIZE24 = this.DEFAULT_FONT_SIZE24 * 0.8

    // if(this.DEFAULT_FONT_SIZE12 <= 6){
    root.setProperty('--fontSize12', ((this.DEFAULT_FONT_SIZE12) + 'px'))
    // }
    // if(this.DEFAULT_FONT_SIZE14 <= 28){
    root.setProperty('--fontSize14', ((this.DEFAULT_FONT_SIZE14) + 'px'))
    // }
    // if(this.DEFAULT_FONT_SIZE16 <= 32){
    root.setProperty('--fontSize16', ((this.DEFAULT_FONT_SIZE16) + 'px'))
    // }
    // if(this.DEFAULT_FONT_SIZE32 <= 64){
    root.setProperty('--fontSize32', ((this.DEFAULT_FONT_SIZE32) + 'px'))
    // }
    // if(this.DEFAULT_FONT_SIZE36 <= 72){
    root.setProperty('--fontSize36', ((this.DEFAULT_FONT_SIZE36) + 'px'))
    // }
    // if(this.DEFAULT_FONT_SIZE40 <= 80){
    root.setProperty('--fontSize40', ((this.DEFAULT_FONT_SIZE40) + 'px'))
    // }
        // if(this.DEFAULT_FONT_SIZE40 <= 80){
          root.setProperty('--fontSize26', ((this.DEFAULT_FONT_SIZE26) + 'px'))
          // }
              // if(this.DEFAULT_FONT_SIZE40 <= 80){
    root.setProperty('--fontSize24', ((this.DEFAULT_FONT_SIZE24) + 'px'))
    // }
  }

  resetFontSize() {
    var root = document.documentElement.style;
    root.setProperty('--fontSize12', '12px');
    root.setProperty('--fontSize14', '14px');
    root.setProperty('--fontSize16', '16px');
    root.setProperty('--fontSize32', '32px');
    root.setProperty('--fontSize36', '36px');
    root.setProperty('--fontSize40', '40px');
    root.setProperty('--fontSize26', '26px');
    root.setProperty('--fontSize24', '24px');

    this.DEFAULT_FONT_SIZE12 = 12;
    this.DEFAULT_FONT_SIZE14 = 14;
    this.DEFAULT_FONT_SIZE16 = 16;
    this.DEFAULT_FONT_SIZE32 = 32;
    this.DEFAULT_FONT_SIZE36 = 36;
    this.DEFAULT_FONT_SIZE40 = 40;
    this.DEFAULT_FONT_SIZE26 = 26;
    this.DEFAULT_FONT_SIZE24 = 24;

  }

  addGrayScale() {
    document.body.style.setProperty(
      'filter',
      `grayscale(100%)`
    );
  }
  removeGrayScale() {
    document.body.style.setProperty(
      'filter',
      `grayscale(0%)`
    );
  }

  highcontrast() {
    document.body.style.setProperty(
      'filter',
      `contrast(500%)`
    );
  }

  lightcontrast() {
    document.body.style.setProperty(
      'filter',
      `contrast(50%)`
    );
    document.body.style.setProperty(
      'color',
      `yellow`
    );
  }

  grayscaleClick() {
    this.grayscaleShow = !this.grayscaleShow;

    if (this.grayscaleShow)
      document.body.style.setProperty(
        'filter',
        `grayscale(100%)`
      );

    else
      document.body.style.removeProperty(
        'filter',
      );
  }
  removeFilter() {
    document.body.style.removeProperty(
      'filter',
    );
  }
}
