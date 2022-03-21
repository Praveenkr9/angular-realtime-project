import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  title = 'demo';
  user={userName:'',password:''}
  submit(){
    alert("clicked"+this.user.userName+this.user.password);
  }
}