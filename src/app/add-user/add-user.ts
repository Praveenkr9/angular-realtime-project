import { Component,Input } from '@angular/core';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.html',
  styleUrls: ['./add-user.css']
})
export class AddUserComponent {
  @Input() childdata : string ='';

  constructor(){

    
    
  }

  }
