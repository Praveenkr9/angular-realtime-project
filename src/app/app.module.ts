import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { HeaderComponent } from './header/header';
import {FooterComponent } from './footer/footer';
import { DashboardComponent } from './dashboard/dashboard';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee';
import { AddEmployeeComponent } from './add-employee/add-employee';
import { AuthGuardService } from './auth-service/auth-guard-service';
import { AuthService } from './auth-service/auth-service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    EmployeeComponent,
    AddEmployeeComponent 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
