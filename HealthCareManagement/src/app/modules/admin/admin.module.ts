import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { DoctorservicesComponent } from './component/doctorservices/doctorservices.component';
import { AppointmentServicesComponent } from './component/appointment-services/appointment-services.component';
import { AddPatientComponent } from './component/add-patient/add-patient.component';
import { GetallpatientsComponent } from './component/getallpatients/getallpatients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeletePatientComponent } from './component/delete-patient/delete-patient.component';
import { FindPatientbyIdComponent } from './component/find-patientby-id/find-patientby-id.component';
import { AddDoctorComponent } from './component/add-doctor/add-doctor.component';
import { DeleteDoctorComponent } from './component/delete-doctor/delete-doctor.component';
import { FindDoctorByIdComponent } from './component/find-doctor-by-id/find-doctor-by-id.component';
import { GetalldocotorsComponent } from './component/getalldocotors/getalldocotors.component';
import { AllAppointmentComponent } from './component/all-appointment/all-appointment.component';
import { AddAppointmentComponent } from './component/add-appointment/add-appointment.component';
import { DeleteAppComponent } from './component/delete-app/delete-app.component';
import { UpdateAptComponent } from './component/update-apt/update-apt.component';
import { FindApmntComponent } from './component/find-apmnt/find-apmnt.component';
import { UpdatePatientComponent } from './component/update-patient/update-patient.component';
import { UpdateDoctorComponent } from './component/update-doctor/update-doctor.component';
import { UpdatePathologyComponent } from './component/update-pathology/update-pathology.component';
import { DelPathologyComponent } from './component/del-pathology/del-pathology.component';
import { AddPathologyComponent } from './component/add-pathology/add-pathology.component';
import { GetAllPathologiesComponent } from './component/get-all-pathologies/get-all-pathologies.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DoctorservicesComponent,
    AppointmentServicesComponent,
    AddPatientComponent,
    GetallpatientsComponent,
    DeletePatientComponent,
    FindPatientbyIdComponent,
    AddDoctorComponent,
    DeleteDoctorComponent,
    FindDoctorByIdComponent,
    GetalldocotorsComponent,
    AllAppointmentComponent,
    AddAppointmentComponent,
    DeleteAppComponent,
    UpdateAptComponent,
    FindApmntComponent,
    UpdatePatientComponent,
    UpdateDoctorComponent,
    UpdatePathologyComponent,
    DelPathologyComponent,
    AddPathologyComponent,
    GetAllPathologiesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
