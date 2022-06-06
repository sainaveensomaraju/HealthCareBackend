import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AppointmentServicesComponent } from './component/appointment-services/appointment-services.component';
import { ContactComponent } from './component/contact/contact.component';
import { DoctorservicesComponent } from './component/doctorservices/doctorservices.component';
import { HomeComponent } from './component/home/home.component';
import { AddPatientComponent } from './component/add-patient/add-patient.component';
import { GetallpatientsComponent } from './component/getallpatients/getallpatients.component';
import { AddDoctorComponent } from './component/add-doctor/add-doctor.component';
import { GetalldocotorsComponent } from './component/getalldocotors/getalldocotors.component';
import { FindDoctorByIdComponent } from './component/find-doctor-by-id/find-doctor-by-id.component';
import { FindPatientbyIdComponent } from './component/find-patientby-id/find-patientby-id.component';
import { DeletePatientComponent } from './component/delete-patient/delete-patient.component';
import { DeleteDoctorComponent } from './component/delete-doctor/delete-doctor.component';
import { AddAppointmentComponent } from './component/add-appointment/add-appointment.component';
import { DeleteAppComponent } from './component/delete-app/delete-app.component';
import { UpdateAptComponent } from './component/update-apt/update-apt.component';
import { FindApmntComponent } from './component/find-apmnt/find-apmnt.component';
import { AllAppointmentComponent } from './component/all-appointment/all-appointment.component';
import { UpdateDoctorComponent } from './component/update-doctor/update-doctor.component';
import { UpdatePatientComponent } from './component/update-patient/update-patient.component';
import { AddPathologyComponent } from './component/add-pathology/add-pathology.component';
import { DelPathologyComponent } from './component/del-pathology/del-pathology.component';
import { UpdatePathologyComponent } from './component/update-pathology/update-pathology.component';
import { GetAllPathologiesComponent } from './component/get-all-pathologies/get-all-pathologies.component';


const routes: Routes = [

  {path:'',component:AdminDashboardComponent,
    children:[
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'docserv',component:DoctorservicesComponent},
    {path:'pologyserv',component:AppointmentServicesComponent},
    {path:'',redirectTo:"/admin-dash/home",pathMatch:"full"},
    {path:'add-patient',component:AddPatientComponent},
    {path:'all-patient',component:GetallpatientsComponent},
    {path:'add-doctor',component:AddDoctorComponent},
    {path:'allD',component:GetalldocotorsComponent},
    {path:'idByDoctor',component:FindDoctorByIdComponent},
    {path:'idByPat',component:FindPatientbyIdComponent},
    {path:'deletePat',component:DeletePatientComponent},
    {path:'deleteDoctor',component:DeleteDoctorComponent},
    {path:'add-apmnt',component:AddAppointmentComponent},
    {path:'del-apmnt',component:DeleteAppComponent},
    {path:'update-apmnt',component:UpdateAptComponent},
    {path:'find-apmnt',component:FindApmntComponent},
    {path:'all-apps',component:AllAppointmentComponent},
    {path:'update-doctor',component:UpdateDoctorComponent},
    {path:'update-pat',component:UpdatePatientComponent},
    {path:'add-pathology',component:AddPathologyComponent},
    {path:'del-pahtology',component:DelPathologyComponent},
    {path:'update-pathology',component:UpdatePathologyComponent},
    {path:'get-all-pathologies',component:GetAllPathologiesComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
