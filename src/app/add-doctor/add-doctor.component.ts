import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
doctorForm=this.fb.group({
  firstName:[""],
  lastName:[""],
  email:[""],
  password:[""],
  exp:[""],
  phoneNumber:[""],
  skills:[""],
  dob:[Date],
  age:[0],
  gender:[''],
  remark:[''],
  address:[""]
})
  ngOnInit(): void {
  }
submit(){
  console.log(this.doctorForm);
}
}
