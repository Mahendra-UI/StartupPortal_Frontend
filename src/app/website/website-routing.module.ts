import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrievanceComponent } from '../user/grievance/grievance.component';
import { IncubatorComponent } from '../user/incubator/incubator.component';
import { MentorComponent } from '../user/mentor/mentor.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WebsitelandingComponent } from './websitelanding/websitelanding.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeslidebannerComponent } from './homeslidebanner/homeslidebanner.component';
import { OwlpracticeComponent } from './owlpractice/owlpractice.component';
import { GallerylightboxComponent } from './gallerylightbox/gallerylightbox.component';
import { PracticeComponent } from './practice/practice.component';
import { NodalagencyComponent } from './nodalagency/nodalagency.component';
import { MentorshipprocessComponent } from './mentorshipprocess/mentorshipprocess.component';
import { MissionvisionComponent } from './missionvision/missionvision.component';
import { DedicatedteamComponent } from './dedicatedteam/dedicatedteam.component';
import { ExecutivecommitteComponent } from './executivecommitte/executivecommitte.component';
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
import { GrievanceformComponent } from './grievanceform/grievanceform.component';
import { GrievancestatusComponent } from './grievancestatus/grievancestatus.component';
import { WhyandhrapradeshComponent } from './whyandhrapradesh/whyandhrapradesh.component';
import { IncubationComponent } from './incubation/incubation.component';
import { IntellectualpropertyComponent } from './intellectualproperty/intellectualproperty.component';
import { PublicprocurementComponent } from './publicprocurement/publicprocurement.component';
import { WomenledstartupsComponent } from './womenledstartups/womenledstartups.component';
import { DisabilityComponent } from './disability/disability.component';
import { IncubatorsaccelaratorsComponent } from './incubatorsaccelarators/incubatorsaccelarators.component';
import { StartuppolicyComponent } from './startuppolicy/startuppolicy.component';
import { OutreachactivitiesComponent } from './outreachactivities/outreachactivities.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { OutreachdetailsComponent } from './outreachdetails/outreachdetails.component';
import { VideosComponent } from './videos/videos.component';
import { DepartmentinstitutionalsupportstartupsComponent } from './departmentinstitutionalsupportstartups/departmentinstitutionalsupportstartups.component';
import { IncubatorsaccelaratorstwoComponent } from './incubatorsaccelaratorstwo/incubatorsaccelaratorstwo.component';
import { FocussectorsComponent } from './focussectors/focussectors.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SpaceinformationComponent } from './spaceinformation/spaceinformation.component';
import { CareersComponent } from './careers/careers.component';
import { CareerdetailsComponent } from './careerdetails/careerdetails.component';
import { ApplycareersComponent } from './applycareers/applycareers.component';
import { ApplycareerstwoComponent } from './applycareerstwo/applycareerstwo.component';




const routes: Routes = [
    {
        path: "", component: WebsitelandingComponent,
        children: [
            {
                path: "",
                component: HomeComponent,
                title: "Startup AP - Andhra Pradesh Innovation Society"
            }
            ,
            {
                path: "home",
                component: HomeComponent,
                title: "Startup AP - Andhra Pradesh Innovation Society"
            }
            ,
            {
                path: "mentor",
                component: MentorComponent,
                title: "Startup AP - Andhra Pradesh Innovation Society"
            },
            {
                path: "incubators",
                component: IncubatorComponent,
                title: "Startup AP - Andhra Pradesh Innovation Society"
            },
            {
                path: "grievance",
                component: GrievanceComponent,
                title: "Startup AP - Andhra Pradesh Innovation Society"
            },
            {
                path: "profile",
                component: ProfileComponent,
                title: "Startup AP - Andhra Pradesh Innovation Society"
            },
            {
                path: "login",
                component: LoginComponent
            },
            {
                path: "register",
                component: RegisterComponent
            },
            {
                path: "homebanner",
                component: HomeslidebannerComponent
            },
            {
                path: "owlpractice",
                component: OwlpracticeComponent
            },
            {
                path: "gallery",
                component: GalleryComponent
            },
            {
                path: "galleryDetails/:id",
                component: GallerylightboxComponent
            },
            // {
            //     path: "videos",
            //     component: VideosComponent
            // },
            {
                path: "contactus",
                component: ContactusComponent
            },
            {
                path: "schoolsatls",
                component: SchoolsatlsComponent
            },
            {
                path: "policies",
                component: PoliciesComponent
            },
            {
                path: "gosnotifications",
                component: GosnotificationsComponent
            },
            {
                path: "pressreleases",
                component: PressreleaseComponent
            },
            {
                path: "submitgrievance",
                component: GrievanceformComponent
            },
            {
                path: "grievancestatus",
                component: GrievancestatusComponent
            },
            {
                path: "mine",
                component: PracticeComponent
            },
            {
                path: "nodalagency",
                component: NodalagencyComponent
            },
            {
                path: "visionandmission",
                component: MissionvisionComponent
            },
            {
                path: "whyandhrapradesh",
                component: WhyandhrapradeshComponent
            },
            {
                path: "incubation",
                component: IncubationComponent
            },
            {
                path: "intellectualproperty",
                component: IntellectualpropertyComponent
            },
            {
                path: "outrechactivities",
                component: OutreachactivitiesComponent
            },
            {
                path: "outreachdetails/:id",
                component: OutreachdetailsComponent
            },
            {
                path: "termsandconditions",
                component: TermsandconditionsComponent
            },
            {
                path: "faqs",
                component: FaqsComponent
            },
            
            {
                path: "incubatorandaccelaratorsold",
                component: IncubatorsaccelaratorsComponent
            },
            {
                path: "incubatorandaccelarators",
                component: IncubatorsaccelaratorstwoComponent
            },
            {
                path: "startuppolicy",
                component: StartuppolicyComponent
            },
            {
                path: "focussectors",
                component: FocussectorsComponent
            },
            {
                path: "screenreader",
                component: DisabilityComponent
            },
            {
                path: "publicprocurement",
                component: PublicprocurementComponent
            },
            {
                path: "womenledstartups",
                component: WomenledstartupsComponent
            },
            {
                path: "executivecommittee",
                component: ExecutivecommitteComponent
            },
            {
                path: "dedicatedteam",
                component: DedicatedteamComponent
            },
            {
                path: "mentorshipprocess",
                component: MentorshipprocessComponent
            },
            {
                path: "startupdefinition",
                component: StartupdefinitionComponent
            },
            {
                path: "listofmentors",
                component: ListofmentorsComponent
            },
            {
                path: "listofstartups",
                component: ListofstartupsComponent
            },
            {
                path: "socialimpactstartups",
                component: SocialimpactstartupsComponent
            },
            {
                path: "highereducation",
                component: HighereducationinsitutesComponent
            },
            {
                path: "departmentinstitutionalsupportstartups",
                component: DepartmentinstitutionalsupportstartupsComponent
            },
            {
                path: "incubationspaceavailable",
                component: SpaceinformationComponent
            },
            {
                path: "careers",
                component: CareersComponent
            },
            {
                path: "careerdetails",
                component: CareerdetailsComponent
            },
            {
                path: "applycareers",
                component: ApplycareerstwoComponent
            },
            {
                path: "applycareersnew",
                component: ApplycareersComponent

            },
        
        ]
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebsiteRoutingModule { }
