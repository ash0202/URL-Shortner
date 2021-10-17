import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddurlComponent } from './addurl/addurl.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageRedirectComponent } from './page-redirect/page-redirect.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './signin/signin.component';
import { UrlListComponent } from './url-list/url-list.component';

const routes: Routes = [

  {
    path:"",
    component:SigninComponent
  },
  {
    path:"signup",
    component:SignUpComponent
  },
  {
    path:"signin",
    component:SigninComponent
  },
  {
    path:"add-url",
    component:AddurlComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"url-list",
    component:UrlListComponent
  },
  {
    path:"sidebar",
    component:SidebarComponent
  },
  {
    path:"short/:id",
    component:PageRedirectComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
