import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { DoctorserviceComponent } from './component/patient-service/doctorservice.component';
import { PatientDashboardComponent } from './component/patient-dashboard/patient-dashboard.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetallappointmentComponent } from './component/getallappointment/getallappointment.component';
import { EditMyselfComponent } from './component/edit-myself/edit-myself.component';
import { FooterComponent } from './component/footer/footer.component';
import { UpdateAppointmentComponent } from './component/update-appointment/update-appointment.component';
import { GetAlltestsComponent } from './component/get-alltests/get-alltests.component'

@NgModule({
  declarations: [
    HeaderComponent,
    DoctorserviceComponent,
    PatientDashboardComponent,
    GetallappointmentComponent,
    EditMyselfComponent,
    FooterComponent,
    UpdateAppointmentComponent,
    GetAlltestsComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PatientModule { }
