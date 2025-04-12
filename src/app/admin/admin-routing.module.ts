import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { RoleGuard } from '../role.guard';
import { AdminGrievanceformComponent } from './admin-grievanceform/admin-grievanceform.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminStartupsComponent } from './admin-startups/admin-startups.component';
import { AdminincubatorsComponent } from './adminincubators/adminincubators.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { AdminmentorsComponent } from './adminmentors/adminmentors.component';

const routes: Routes = [
  {
    path: "", component: AdminlandingComponent,
    children: [
      {
        path: "",
        component: AdminStartupsComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['Admin'] }
      },
      // {
      //   path: "",
      //   component: AdminHomeComponent,
      //   title: "Admin Home"
      // },
      // {
      //   path: "home",
      //   component: AdminHomeComponent
      // },
      {
        path: "startup",
        component: AdminStartupsComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['Admin'] }
      },
      {
        path: "mentor",
        component: AdminmentorsComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['Admin'] }
      },
      {
        path: "incubator",
        component: AdminincubatorsComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['Admin'] }
      },
      {
        path: "admin-grievanceform",
        component: AdminGrievanceformComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: ['Admin'] }
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
