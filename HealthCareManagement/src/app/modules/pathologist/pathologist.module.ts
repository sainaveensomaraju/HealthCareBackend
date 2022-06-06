import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathologistRoutingModule } from './pathologist-routing.module';
import { LabDashboardComponent } from './component/lab-dashboard/lab-dashboard.component';
import { PatientlistComponent } from './component/patientlist/patientlist.component';
import { AddtestComponent } from './component/addtest/addtest.component';
import { AppointmentstatusComponent } from './component/appointmentstatus/appointmentstatus.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { RemoveTestComponent } from './component/remove-test/remove-test.component';
import { GetAllTestsComponent } from './component/get-all-tests/get-all-tests.component';
import { GetTestByIdComponent } from './component/get-test-by-id/get-test-by-id.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LabDashboardComponent,
    PatientlistComponent,
    AddtestComponent,
    AppointmentstatusComponent,
    HeaderComponent,
    FooterComponent,
    RemoveTestComponent,
    GetAllTestsComponent,
    GetTestByIdComponent
  ],
  imports: [
    CommonModule,
    PathologistRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PathologistModule { }
