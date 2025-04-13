import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteadminRoutingModule } from './websiteadmin-routing.module';
import { WebsiteadminlandingComponent } from './websiteadminlanding/websiteadminlanding.component';
import { WebsiteadminhomeComponent } from './websiteadminhome/websiteadminhome.component';
import { WebsiteadminheaderComponent } from './websiteadminheader/websiteadminheader.component';
import { WebsiteadminfooterComponent } from './websiteadminfooter/websiteadminfooter.component';
import { RouterModule } from '@angular/router';
import { WebsiteadminleftpanelComponent } from './websiteadminleftpanel/websiteadminleftpanel.component';
import { WebsiteadmincareersComponent } from './websiteadmincareers/websiteadmincareers.component';
import { WebsiteadmincareersapplicationsComponent } from './websiteadmincareersapplications/websiteadmincareersapplications.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [
    WebsiteadminlandingComponent,
    WebsiteadminhomeComponent,
    WebsiteadminheaderComponent,
    WebsiteadminfooterComponent,
    WebsiteadminleftpanelComponent,
    WebsiteadmincareersComponent,
    WebsiteadmincareersapplicationsComponent
  ],
  imports: [
    CommonModule,
    WebsiteadminRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot()
    
  ],
    providers:[ToastrService],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class WebsiteadminModule { }
