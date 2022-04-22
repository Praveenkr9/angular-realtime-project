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
import { AppProducts } from './products/products';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './service/myinterceptors';
import { UserComponent } from './users/user';
import { AddUserComponent } from './add-user/add-user';
import { CartComponent } from './cart/cart';
import { CartService } from './service/cart';
import { PipesComponent } from './pipescomponent/pipescomponent';
import { BootstrapFormsComponent } from './bootstrap-forms/bootstrap-form';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    EmployeeComponent,
    AddEmployeeComponent ,
    AppProducts,
    UserComponent,
    AddUserComponent,
    CartComponent,
    PipesComponent,
    BootstrapFormsComponent,


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardService,AuthService,CartService,{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }],
  bootstrap: [AppComponent]

})
export class AppModule { }
