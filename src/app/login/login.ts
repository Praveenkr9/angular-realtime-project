import { Component } from '@angular/core';
import {AuthService} from '../auth-service/auth-service';



@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  title = 'demo';
  user={userName:'',password:''}

  constructor(private authService:AuthService){

  }
  submit(){
    this.authService.login(this.user.userName,this.user.password)
  }
}