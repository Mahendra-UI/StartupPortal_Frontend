import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLeftPanelComponent } from './admin-left-panel/admin-left-panel.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AdminStartupsComponent } from './admin-startups/admin-startups.component';
import { AdminmentorsComponent } from './adminmentors/adminmentors.component';
import { AdminincubatorsComponent } from './adminincubators/adminincubators.component';
import { AdminGrievanceformComponent } from './admin-grievanceform/admin-grievanceform.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AdminlandingComponent,
    AdminHomeComponent,
    AdminLeftPanelComponent,
    AdminHeaderComponent,
    AdminStartupsComponent,
    AdminmentorsComponent,
    AdminincubatorsComponent,
    AdminGrievanceformComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers:[ToastrService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdminModule { }
