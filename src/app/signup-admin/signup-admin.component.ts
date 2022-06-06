import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
adminForm=this.fb.group({
  firstName:["",Validators.required],
  lastName:["",Validators.required],
  password:["",Validators.required,],
  phoneNumber:["",Validators.minLength(10)],
  age:[""],
  gender:[""],
  email:["",Validators.email],
  address:[""],
  dob:[Date]
})
get fName(){
  return this.adminForm.get("firstName")
}
get lName(){
  return this.adminForm.get("lastName")
}
get mail(){
  return this.adminForm.get("email")
}
get phone(){
  return this.adminForm.get("phoneNumber")
}
get pass(){
  return this.adminForm.get("password")
}
  ngOnInit(): void {
  }
submit(){
  console.log(this.adminForm.value)
}
}
