import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'**',component:NotFoundComponent},

  {path:'', redirectTo:'login',pathMatch:'full'},
  {
    path:'admin',loadChildren:()=> import("./modules/admin/admin.module").then(
      (m)=>m.AdminModule
    ), 
  },
  {path:'ADMIN',component:AdminModuleComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
