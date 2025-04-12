import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsitelandingComponent } from './websitelanding/websitelanding.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SwiperComponent } from './swiper/swiper.component';
import { ProfileComponent } from './profile/profile.component';
import { HeadertwoComponent } from './headertwo/headertwo.component';
import { LeftPanelComponent } from '../left-panel/left-panel.component';
import { LeftPanelTwoComponent } from './left-panel-two/left-panel-two.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SwipertwoComponent } from './swipertwo/swipertwo.component';
import { CountUpModule } from 'ngx-countup';
import { OfferingoneComponent } from './offeringone/offeringone.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeslidebannerComponent } from './homeslidebanner/homeslidebanner.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { StatsslickComponent } from './statsslick/statsslick.component';
import { ReasonsComponent } from './reasons/reasons.component';
import { EcosystemComponent } from './ecosystem/ecosystem.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideoComponent } from './video/video.component';
import { OwlpracticeComponent } from './owlpractice/owlpractice.component';
import { GallerylightboxComponent } from './gallerylightbox/gallerylightbox.component';

import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PracticeComponent } from './practice/practice.component';
import { NodalagencyComponent } from './nodalagency/nodalagency.component';
import { MentorshipprocessComponent } from './mentorshipprocess/mentorshipprocess.component';
import { MissionvisionComponent } from './missionvision/missionvision.component';
import { ExecutivecommitteComponent } from './executivecommitte/executivecommitte.component';
import { DedicatedteamComponent } from './dedicatedteam/dedicatedteam.component';
import { StartupdefinitionComponent } from './startupdefinition/startupdefinition.component';
import { ListofmentorsComponent } from './listofmentors/listofmentors.component';
import { SocialimpactstartupsComponent } from './socialimpactstartups/socialimpactstartups.component';
import { HighereducationinsitutesComponent } from './highereducationinsitutes/highereducationinsitutes.component';
import { ListofstartupsComponent } from './listofstartups/listofstartups.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SchoolsatlsComponent } from './schoolsatls/schoolsatls.component';
import { PoliciesComponent } from './policies/policies.component';
import { GosnotificationsComponent } from './gosnotifications/gosnotifications.component';
import { PressreleaseComponent } from './pressrelease/pressrelease.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { GrievanceformComponent } from './grievanceform/grievanceform.component';
import { GrievancestatusComponent } from './grievancestatus/grievancestatus.component';
import { WhyandhrapradeshComponent } from './whyandhrapradesh/whyandhrapradesh.component';
import { IncubationComponent } from './incubation/incubation.component';
import { IntellectualpropertyComponent } from './intellectualproperty/intellectualproperty.component';
import { PublicprocurementComponent } from './publicprocurement/publicprocurement.component';
import { WomenledstartupsComponent } from './womenledstartups/womenledstartups.component';
import { PartnershipandcollaborationsComponent } from './partnershipandcollaborations/partnershipandcollaborations.component';
import { DisabilityComponent } from './disability/disability.component';
import { IncubatorsaccelaratorsComponent } from './incubatorsaccelarators/incubatorsaccelarators.component';
import { StartuppolicyComponent } from './startuppolicy/startuppolicy.component';
import { OutreachactivitiesComponent } from './outreachactivities/outreachactivities.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { OutreachdetailsComponent } from './outreachdetails/outreachdetails.component';
import { VideosComponent } from './videos/videos.component';
import { DepartmentinstitutionalsupportstartupsComponent } from './departmentinstitutionalsupportstartups/departmentinstitutionalsupportstartups.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { IncubatorsaccelaratorstwoComponent } from './incubatorsaccelaratorstwo/incubatorsaccelaratorstwo.component';
import { FocussectorsComponent } from './focussectors/focussectors.component';
import { SpaceinformationComponent } from './spaceinformation/spaceinformation.component';
import { CareersComponent } from './careers/careers.component';
import { CareerdetailsComponent } from './careerdetails/careerdetails.component';
import { ApplycareersComponent } from './applycareers/applycareers.component';


export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    WebsitelandingComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SwiperComponent,
    ProfileComponent,
    HeadertwoComponent,
    LeftPanelTwoComponent,
    LoginComponent,
    RegisterComponent,
    SwipertwoComponent,
    OfferingoneComponent,
    AboutusComponent,
    HomeslidebannerComponent,
    StatsslickComponent,
    ReasonsComponent,
    EcosystemComponent,
    GalleryComponent,
    VideoComponent,
    OwlpracticeComponent,
    GallerylightboxComponent,
    PracticeComponent,
    NodalagencyComponent,
    MentorshipprocessComponent,
    MissionvisionComponent,
    ExecutivecommitteComponent,
    DedicatedteamComponent,
    StartupdefinitionComponent,
    ListofmentorsComponent,
    SocialimpactstartupsComponent,
    HighereducationinsitutesComponent,
    ListofstartupsComponent,
    ContactusComponent,
    SchoolsatlsComponent,
    PoliciesComponent,
    GosnotificationsComponent,
    PressreleaseComponent,
    GrievanceformComponent,
    GrievancestatusComponent,
    WhyandhrapradeshComponent,
    IncubationComponent,
    IntellectualpropertyComponent,
    PublicprocurementComponent,
    WomenledstartupsComponent,
    PartnershipandcollaborationsComponent,
    DisabilityComponent,
    IncubatorsaccelaratorsComponent,
    StartuppolicyComponent,
    OutreachactivitiesComponent,
    FaqsComponent,
    TermsandconditionsComponent,
    OutreachdetailsComponent,
    VideosComponent,
    DepartmentinstitutionalsupportstartupsComponent,
    IncubatorsaccelaratorstwoComponent,
    FocussectorsComponent,
    SpaceinformationComponent,
    CareersComponent,
    CareerdetailsComponent,
    ApplycareersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    WebsiteRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    NgxUsefulSwiperModule,
    ReactiveFormsModule,
    CountUpModule,
    OwlModule,
    CarouselModule,
    NgImageSliderModule,
    NgbModule,
    SlickCarouselModule,
    NgxGalleryModule,
    NgxPaginationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot()
  ],
  providers:[ToastrService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class WebsiteModule { }
