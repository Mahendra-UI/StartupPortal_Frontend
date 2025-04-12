import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { RoleGuard } from '../role.guard';
import { IncubatorComponent } from './incubator/incubator.component';
import { MentorComponent } from './mentor/mentor.component';
import { StartupComponent } from './startup/startup.component';
import { UserGrievanceListComponent } from './user-grievance-list/user-grievance-list.component';
import { UserGrievanceformComponent } from './user-grievanceform/user-grievanceform.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserIncubationSpaceComponent } from './user-incubation-space/user-incubation-space.component';
import { UserInnovationChallengesComponent } from './user-innovation-challenges/user-innovation-challenges.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserStartupMentorConnectComponent } from './user-startup-mentor-connect/user-startup-mentor-connect.component';
import { UserlandingComponent } from './userlanding/userlanding.component';

const routes: Routes = [
  {
    path: "", component: UserlandingComponent,
    children: [
      {
        path: "",
        component: UserHomeComponent,
        title: "AP Innovation Society Innovation",
        canActivate: [AuthGuard]
      },
      {
        path: "home",
        component: UserHomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "user-profile",
        component: UserProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "innovation-challenges",
        component: UserInnovationChallengesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "incubation-space",
        component: UserIncubationSpaceComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "user-startupmentor",
        component: UserStartupMentorConnectComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "user-grievancelist",
        component: UserGrievanceListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "user-grievanceform",
        component: UserGrievanceformComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "mentor",
        component: MentorComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['Mentor'] }
      },
      {
        path: "startup",
        component: StartupComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['Startup'] }
      },
      {
        path: "incubator",
        component: IncubatorComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['Incubator'] }
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
