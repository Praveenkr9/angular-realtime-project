import { Component } from '@angular/core';

@Component({
  selector: 'bootstrap-forms',
  templateUrl: './bootstrap-forms.html',
  styleUrls: ['./bootstrap-forms.css']
})
export class BootstrapFormsComponent {
  title = 'demo';
  parentdata='this is employee parent data';
  parentdata2='';




  receiveMessage($event:any){
    this.parentdata2 = $event;

  }
}