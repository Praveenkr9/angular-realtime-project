import {
    Component,
  } from '@angular/core';
  
  
  @Component({
    selector: 'pipescomponent',
    templateUrl: './pipescomponent.html',
    styleUrls: ['./pipescomponent.css']
  })
  export class PipesComponent {
   
  
    a = "Ravi Teja";
    money:Number = 10.112;
  
    todayDate= new Date();
  
    public now: Date = new Date();
  
    months=['jan', 'feb','mar', 'Apr', 'may', 'jun','jul']
  
  
    constructor() {
      setInterval(() => {
        this.now = new Date();
      }, 1);
    }
  
    
  }