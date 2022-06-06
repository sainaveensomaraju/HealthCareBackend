import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { HeaderComponent } from './component/header/header.component';

import { ViewallpatientComponent } from './component/viewallpatient/viewallpatient.component';
import { EditselfComponent } from './component/editself/editself.component';
import { AllappointmentsComponent } from './component/allappointments/allappointments.component';
import { DoctorDashboardComponent } from './component/doctor-dashboard/doctor-dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  
    HeaderComponent,
   
    
    ViewallpatientComponent,
    EditselfComponent,
    AllappointmentsComponent,
    DoctorDashboardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class DoctorModule { }
