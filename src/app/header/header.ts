import { Component } from '@angular/core';
import { AuthService } from '../auth-service/auth-service';
@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  title = 'demo';
  isUserLogin=false

  constructor(private authservice:AuthService){

    this.isUserLogin=this.authservice.isUserLoggedIn();

  }
  
  logout(){
    this.authservice.logoutUser();
  }
}