import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { GrievanceComponent } from './user/grievance/grievance.component';
import { IncubatorComponent } from './user/incubator/incubator.component';
import { MentorComponent } from './user/mentor/mentor.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { CountUpModule } from 'ngx-countup';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { NgxTwitterWidgetsModule } from "ngx-twitter-widgets";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { HttpConfigInterceptor } from './httpconfig.interceptor';
import { DatePipe } from '@angular/common';
import { SsoComponent } from './sso/sso.component';
import { NgxPaginationModule } from 'ngx-pagination';


export function httpTranslateLoaderFactory(https: HttpClient) {
  return new TranslateHttpLoader(https, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    GrievanceComponent,
    IncubatorComponent,
    MentorComponent,
    LeftPanelComponent,
    SsoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    CountUpModule,
    OwlModule,
    CarouselModule,
    NgImageSliderModule,
    NgbModule,
    NgxPaginationModule,
    SlickCarouselModule,
    NgxTwitterTimelineModule,
    NgxTwitterWidgetsModule,
    HttpClientModule, 
    NgxGalleryModule,
        TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true},
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
