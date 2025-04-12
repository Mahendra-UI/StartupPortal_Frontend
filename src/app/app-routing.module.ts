import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SsoComponent } from './sso/sso.component';

const routes: Routes = [


  {
    path: "",
    loadChildren: () => import("./website/website.module").then(m => m.WebsiteModule),
    title: "AP Innovation Society"
  },
  {
    path: "home",
    loadChildren: () => import("./website/website.module").then(m => m.WebsiteModule),
    title: "AP Innovation Society"
  },
  {
    path: "sso",
    component: SsoComponent
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule),
    title: "User | AP Innovation Society"
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule),
    title: "Admin | AP Innovation Society"
  },

  {
    path: "websiteadmin",
    loadChildren: () => import("./websiteadmin/websiteadmin.module").then(m => m.WebsiteadminModule),
    title: "Website Admin | AP Innovation Society"
  },

  {
    path: "**",
    redirectTo: '',
    loadChildren: () => import("./website/website.module").then(m => m.WebsiteModule),
    title: "AP Innovation Society"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
