
import { Component,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.html',
  styleUrls: ['./add-employee.css']
})
export class AddEmployeeComponent {
  title = 'demo';
  @Input() childdata : string ='';
  @Output() childdata2= new EventEmitter();
  message='this is child data'
  constructor(){

    console.log(this.childdata);
    
  }
  sendMessage(){
    this.childdata2.emit(this.message);

  }
  

}