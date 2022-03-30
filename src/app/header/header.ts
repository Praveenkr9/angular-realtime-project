import { Component } from '@angular/core';
import { AuthService } from '../auth-service/auth-service';
@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  title = 'demo';

  constructor(private authservice:AuthService){

  }
  
  logout(){
    this.authservice.logoutUser();
  }
}