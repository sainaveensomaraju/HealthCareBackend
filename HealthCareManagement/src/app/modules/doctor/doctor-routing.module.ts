import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../admin/component/home/home.component';

import { AboutComponent } from '../admin/component/about/about.component';
import { AllappointmentsComponent } from './component/allappointments/allappointments.component';
import { ContactComponent } from '../admin/component/contact/contact.component';
import { DoctorDashboardComponent } from './component/doctor-dashboard/doctor-dashboard.component';
import { EditselfComponent } from './component/editself/editself.component';
import { ViewallpatientComponent } from './component/viewallpatient/viewallpatient.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from '../admin/component/footer/footer.component';

const routes: Routes = [
  {
    path:'',component:DoctorDashboardComponent,children:[
      {path:'home',component:HomeComponent},
      {path:'contact',component:ContactComponent},
      {path:'about',component:AboutComponent},
      {path:'edit',component:EditselfComponent},
      {path:'allp',component:AllappointmentsComponent},
      {path:'viewall',component:ViewallpatientComponent},
      {path:'header',component:HeaderComponent},
      {path:'footer',component:FooterComponent},
      {path:'',redirectTo:'/doctor-dash/home',pathMatch:'full'},
      {path:'all-apps',component:AllappointmentsComponent},
      {path:'view-all-pat',component:ViewallpatientComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
