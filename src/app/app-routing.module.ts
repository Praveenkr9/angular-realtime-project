import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { DashboardComponent } from './dashboard/dashboard';
import { EmployeeComponent } from './employee/employee';
import { AuthGuardService } from './auth-service/auth-guard-service';
import { AppProducts } from './products/products';


const routes: Routes = [
 
  {path:'',component:DashboardComponent,canActivate:[AuthGuardService]},
  {path:'employee',component:EmployeeComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:AppProducts},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
