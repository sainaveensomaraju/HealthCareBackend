import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../admin/component/about/about.component';
import { ContactComponent } from '../admin/component/contact/contact.component';
import { HomeComponent } from '../admin/component/home/home.component';
import { AddtestComponent } from './component/addtest/addtest.component';
import { AppointmentstatusComponent } from './component/appointmentstatus/appointmentstatus.component';
import { FooterComponent } from './component/footer/footer.component';
import { GetAllTestsComponent } from './component/get-all-tests/get-all-tests.component';
import { GetTestByIdComponent } from './component/get-test-by-id/get-test-by-id.component';
import { HeaderComponent } from './component/header/header.component';
import { LabDashboardComponent } from './component/lab-dashboard/lab-dashboard.component';
import { PatientlistComponent } from './component/patientlist/patientlist.component';
import { RemoveTestComponent } from './component/remove-test/remove-test.component';

const routes: Routes = [
 {path:'',component:LabDashboardComponent,children:[
   {path:'home',component:HomeComponent},
   {path:'contact',component:ContactComponent},
   {path:'about',component:AboutComponent},
   {path:'header',component:HeaderComponent},
   {path:'footer',component:FooterComponent},
   {path:'addtest',component:AddtestComponent},
   {path:'app-satus',component:AppointmentstatusComponent},
   {path:'pat-list',component:PatientlistComponent},
   {path:'',redirectTo:"/lab-dash/home",pathMatch:'full'},
   {path:'add-test',component:AddtestComponent},
   {path:'all-tests',component:GetAllTestsComponent},
   {path:'remove-test',component:RemoveTestComponent},
   {path:'get-test-byid',component:GetTestByIdComponent}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathologistRoutingModule { }
