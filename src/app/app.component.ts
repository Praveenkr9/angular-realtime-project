import { Component } from '@angular/core';
import { AuthService } from './auth-service/auth-service';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  constructor(private Authservice:AuthService,private router:Router,){
  
    if(this.Authservice.isUserLoggedIn()){
      this.router.navigate([""]);

    }

  }

  submit(){
    alert("clicked");
  }
}
