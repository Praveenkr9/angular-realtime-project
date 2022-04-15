import { Component } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent {
 
    parentdata="welcome to user page" ;
    parentdata2="back to user";

    receiveMessage($event:any){
      this.parentdata2 = $event;
    }
  }
