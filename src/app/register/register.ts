import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  title = 'demo';
  form = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "lastName": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required),
    "MobileNumber": new FormControl(""),
    "Password": new FormControl("", Validators.required),
});

  submit(){
    alert(this.form.value);
  }
}