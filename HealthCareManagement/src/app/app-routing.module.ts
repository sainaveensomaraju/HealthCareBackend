import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import {HomeComponent} from './component/home/home.component'
import {ContactComponent} from './component/contact/contact.component'
import {AboutComponent} from './component/about/about.component'
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'blank',component:NotfoundComponent},
  {path:'forgot-password',component:ForgotpasswordComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {
    path:'admin-dash',loadChildren:()=>import("./modules/admin/admin.module").then(
      (m)=>m.AdminModule
    )
  },
  {
    path:'doctor-dash',loadChildren:()=>import("./modules/doctor/doctor.module").then(
      (m)=>m.DoctorModule
    )
  },
  {
    path:'patient-dash',loadChildren:()=>import("./modules/patient/patient.module").then(
      (m)=>m.PatientModule
    )
  }, 
  {
    path:'lab-dash',loadChildren:()=>import("./modules/pathologist/pathologist.module").then(
      (m)=>m.PathologistModule
    )
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
