import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';

import { SignupAdminComponent } from './signup-admin/signup-admin.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { CustomerModuleComponent } from './customer-module/customer-module.component';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './Components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    SignupAdminComponent,
    AddDoctorComponent,
    DeleteDoctorComponent,
    CreateAppointmentComponent,
    AdminModuleComponent,
    CustomerModuleComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
