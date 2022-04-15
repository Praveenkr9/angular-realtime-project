import { Component,Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.html',
  styleUrls: ['./add-user.css']
})
export class AddUserComponent {
  @Input() childdata : string ='';
  @Output() childdata2= new EventEmitter();
  message= 'back to user' 
  constructor(){

    console.log(this.childdata); 
    
  }
  sendMessage(){
    this.childdata2.emit(this.message);
    
  }

  }
