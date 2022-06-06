import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPatient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  public allDoctors: any = [];
  constructor(private fb: FormBuilder, private patserv: PatientService,private router:Router) { }
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
  get addr(){
    return this.patientForm.get("address")
  }

  get dob(){
    return this.patientForm.get('dob')
  }

  public response: any = null;
  public ack: boolean = false;
  public chk: boolean = false;
  submit() {
    let pateint:IPatient={
      userName:this.fName?.value,
      password:this.pass?.value,
      gender:this.gen?.value,
      phone:this.phone?.value,
      address:this.patientForm.get("address")?.value,
      lastName:this.lName?.value,
      firstName:this.fName?.value,
      email:this.mail?.value,
      id:this.patient.id,
      dob:this.patientForm.get("dob")?.value,
      createdDate:this.patientForm.get("dob")?.value
    }
    this.patserv.updatePatientToDatabase(this.patient.id, pateint).subscribe(
      (data) => {
        this.response = data;
        console.log(data)
        if (data != null){
          this.ack = true;
         alert("updated")
         this.router.navigate(["all-patient"])

        }
      })
  }
  public allPatients:any=[]
  ngOnInit(): void {
    this.patserv.getAllDoctorsFromDatabase().subscribe(
      data => {
        if (data != null) {
          this.allPatients = data;
          this.patientForm.reset();
        }
        else
          alert("no data found");
      }
    )
  }
  public patient: any
  update(num: string) {
    this.ack=false;
    this.chk = true;
    let id: number = parseInt(num);
    this.patserv.getDoctorFromDatabaseById(id).subscribe(
      data => {
        if (data != null) {

          this.patient = data;
          console.log(this.patient)

          this.fName?.setValue(this.patient.firstName)
          this.lName?.setValue(this.patient.lastName)
          this.pass?.setValue(this.patient.password)
          this.phone?.setValue(this.patient.phone)
          this.mail?.setValue(this.patient.email)
          this.dob?.setValue(this.patient.dob)
          this.gen?.setValue(this.patient.gender)
          this.addr?.setValue(this.patient.address)


        }
      }
    )
  }
}
