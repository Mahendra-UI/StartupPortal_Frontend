import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteadminlandingComponent } from './websiteadminlanding/websiteadminlanding.component';
import { WebsiteadminhomeComponent } from './websiteadminhome/websiteadminhome.component';
import { AuthGuard } from '../auth.guard';
import { RoleGuard } from '../role.guard';
import { WebsiteadmincareersComponent } from './websiteadmincareers/websiteadmincareers.component';
import { WebsiteadmincareersapplicationsComponent } from './websiteadmincareersapplications/websiteadmincareersapplications.component';

const routes: Routes = [
    {
      path: "", component: WebsiteadminlandingComponent,
      children: [
        // {
        //   path: "",
        //   component: WebsiteadminhomeComponent,
        //   canActivate: [AuthGuard, RoleGuard],
        //   data: { roles: ['WebsiteAdmin'] }
        // },
        // {
        //   path: "home",
        //   component: WebsiteadminhomeComponent,
        //   canActivate: [AuthGuard, RoleGuard],
        //   data: { roles: ['WebsiteAdmin'] }
        // },


        {
          path: "",
          component: WebsiteadmincareersapplicationsComponent,
          canActivate: [AuthGuard, RoleGuard],
          data: { roles: ['WebsiteAdmin'] }
        },
        {
          path: "home",
          component: WebsiteadmincareersapplicationsComponent,
          canActivate: [AuthGuard, RoleGuard],
          data: { roles: ['WebsiteAdmin'] }
        },

        {
          path: "careers",
          component: WebsiteadmincareersComponent,
          canActivate: [AuthGuard, RoleGuard],
          data: { roles: ['WebsiteAdmin'] }
        },
        {
          path: "totalcareersapplications",
          component: WebsiteadmincareersapplicationsComponent,
          canActivate: [AuthGuard, RoleGuard],
          data: { roles: ['WebsiteAdmin'] }
        },
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteadminRoutingModule { }
