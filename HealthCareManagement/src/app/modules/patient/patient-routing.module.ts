import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../admin/component/home/home.component';
import { ContactComponent } from '../admin/component/contact/contact.component';
import { AboutComponent } from '../admin/component/about/about.component'
import { PatientDashboardComponent } from './component/patient-dashboard/patient-dashboard.component';
import { DoctorserviceComponent } from './component/patient-service/doctorservice.component';
import { EditMyselfComponent } from './component/edit-myself/edit-myself.component';
import {GetallappointmentComponent } from './component/getallappointment/getallappointment.component';

const routes: Routes = [
  {
    path:'',component:PatientDashboardComponent,children:[
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'contact',component:ContactComponent},
      {path:'service',component:DoctorserviceComponent},
      {path:'',redirectTo:'/patient-dash/home',pathMatch:'full'},
      {path:'edit',component:EditMyselfComponent},
      {path:'allp',component:GetallappointmentComponent}
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
