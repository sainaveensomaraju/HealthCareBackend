import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IPatient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(private fb:FormBuilder,private patServ:PatientService) { }
  patientForm=this.fb.group({
    firstName:["",Validators.required],
    lastName:["",Validators.required],
    password:["",Validators.required,],
    phoneNumber:["",Validators.minLength(10)],
  
    gender:[""],
    email:["",Validators.email],
    address:[""],
    dob:['']
    
  })
  get fName(){
    return this.patientForm.get("firstName")
  }
  get lName(){
    return this.patientForm.get("lastName")
  }
  get mail(){
    return this.patientForm.get("email")
  }
  get phone(){
    return this.patientForm.get("phoneNumber")
  }
  get pass(){
    return this.patientForm.get("password")
  }
  get gen(){
    return this.patientForm.get("gender")
  }
    ngOnInit(): void {
    }
    public ack:boolean=false;
    public chk:any;
  submit(){
    console.log(this.patientForm.value)
    let pateint:IPatient={
      userName:this.fName?.value,
      password:this.pass?.value,
      gender:this.gen?.value,
      phone:this.phone?.value,
      address:this.patientForm.get("address")?.value,
      lastName:this.lName?.value,
      firstName:this.fName?.value,
      email:this.mail?.value,
      id:0,
      dob:this.patientForm.get("dob")?.value,
      createdDate:this.patientForm.get("dob")?.value
    }

    this.patServ.addDoctorToDatabase(pateint).subscribe(
      data=>{
        this.chk=data;
        if(this.chk !=null){
          this.ack=true;
          this.patientForm.reset();
        }
    
        else
        this.ack=false

      }
    )
  }

  

}
