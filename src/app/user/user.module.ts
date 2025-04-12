import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UserRoutingModule } from './user-routing.module';
import { StartupComponent } from './startup/startup.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLeftPanelComponent } from './user-left-panel/user-left-panel.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserInnovationChallengesComponent } from './user-innovation-challenges/user-innovation-challenges.component';
import { UserIncubationSpaceComponent } from './user-incubation-space/user-incubation-space.component';
import { UserStartupMentorConnectComponent } from './user-startup-mentor-connect/user-startup-mentor-connect.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserGrievanceListComponent } from './user-grievance-list/user-grievance-list.component';
import { UserGrievanceformComponent } from './user-grievanceform/user-grievanceform.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserStartupViewComponent } from './user-startup-view/user-startup-view.component';
import { UserIncubatorViewComponent } from './user-incubator-view/user-incubator-view.component';
import { UserMentorViewComponent } from './user-mentor-view/user-mentor-view.component';



@NgModule({
  declarations: [
    UserlandingComponent,
    StartupComponent,
    UserLeftPanelComponent,
    UserHeaderComponent,
    UserHomeComponent,
    UserProfileComponent,
    UserInnovationChallengesComponent,
    UserIncubationSpaceComponent,
    UserStartupMentorConnectComponent,
    UserFooterComponent,
    UserGrievanceListComponent,
    UserGrievanceformComponent,
    UserStartupViewComponent,
    UserIncubatorViewComponent,
    UserMentorViewComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers:[ToastrService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UserModule { }
