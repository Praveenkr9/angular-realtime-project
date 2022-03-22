import { Component } from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class EmployeeComponent {
  title = 'demo';
  parentdata='this is employee parent data';
  parentdata2='';




  receiveMessage($event:any){
    this.parentdata2 = $event;

  }
}