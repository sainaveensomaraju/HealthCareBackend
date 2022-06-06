import { Component, OnInit } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { Router } from '@angular/router';
import { Idoctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  public allDoctors: any = [];
  constructor(private fb: FormBuilder, private docServ: DoctorService,private router:Router) { }
  doctorForm = this.fb.group({
    firstName: [""],
    lastName: [""],
    password: [""],
    phoneNumber: [""],
    age: [""],
    gender: [""],
    email: ["",],
    address: [""],
    dob: [''],
    designation: [""],
    salary: [""]

  })
  get des() {
    return this.doctorForm.get("designation")
  }
  get sal() {
    return this.doctorForm.get("salary")
  }
  get fName() {
    return this.doctorForm.get("firstName")
  }
  get lName() {
    return this.doctorForm.get("lastName")
  }
  get mail() {
    return this.doctorForm.get("email")
  }
  get phone() {
    return this.doctorForm.get("phoneNumber")
  }
  get pass() {
    return this.doctorForm.get("password")
  }
  get gen() {
    return this.doctorForm.get("gender")
  }
  get dob() {
    return this.doctorForm.get("dob")
  }
  get age() {
    return this.doctorForm.get("age")
  }
  get addr() {
    return this.doctorForm.get("address")
  }

  public response: any = null;
  public ack: boolean = false;
  public chk: boolean = false;
  submit() {
    let doctor: Idoctor = {
      userName: this.fName?.value,
      password: this.pass?.value,
      gender: this.gen?.value,
      phone: this.phone?.value,
      address: this.doctorForm.get("address")?.value,
      lastName: this.lName?.value,
      firstName: this.fName?.value,
      email: this.mail?.value,
      age: this.doctorForm.get("age")?.value,
      id: this.doctor.id,
      dob: this.doctorForm.get("dob")?.value,
      createdDate: this.doctorForm.get("dob")?.value,
      salary: this.sal?.value,
      designation: this.des?.value
    }
    this.docServ.updateDoctor(this.doctor.id, doctor).subscribe(
      (data) => {
        this.response = data;
        console.log(data)
        if (this.response != null){
          this.ack = true;
          alert("updated successfull")
          
        }
      })
  }
  ngOnInit(): void {
    this.docServ.getAllDoctorsFromDatabase().subscribe(
      data => {
        if (data != null) {
          this.allDoctors = data;
          this.doctorForm.reset();
        }
        else
          alert("no data found");
      }
    )
  }
  public doctor: any
  update(num: string) {
    this.chk = true;
    let id: number = parseInt(num);
    this.docServ.getDoctorFromDatabaseById(id).subscribe(
      data => {
        if (data != null) {

          this.doctor = data;
          console.log(this.doctor)

          this.fName?.setValue(this.doctor.firstName)
          this.lName?.setValue(this.doctor.lastName)
          this.des?.setValue(this.doctor.designation)
          this.pass?.setValue(this.doctor.password)
          this.phone?.setValue(this.doctor.phone)
          this.mail?.setValue(this.doctor.email)
          this.dob?.setValue(this.doctor.dob)
          this.age?.setValue(this.doctor.age)
          this.sal?.setValue(this.doctor.salary)
          this.gen?.setValue(this.doctor.gender)
          this.addr?.setValue(this.doctor.address)


        }
      }
    )
  }
}
