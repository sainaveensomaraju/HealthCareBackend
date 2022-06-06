import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Idoctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-editself',
  templateUrl: './editself.component.html',
  styleUrls: ['./editself.component.css']
})
export class EditselfComponent implements OnInit {

  

  ngOnInit(): void {
  }
  constructor(private fb:FormBuilder,private docServ:DoctorService) { }
  doctorForm=this.fb.group({
    firstName:["",Validators.required],
    lastName:["",Validators.required],
    password:["",Validators.required,],
    phoneNumber:["",Validators.minLength(10)],
    age:[""],
    gender:[""],
    email:["",Validators.email],
    address:[""],
    dob:[''],
    designation:["",Validators.required],
    salary:["",Validators.min(1000)]
    
  })
  get des(){
    return this.doctorForm.get("designation")
  }
  get sal(){
    return this.doctorForm.get("salary")
  }
  get fName(){
    return this.doctorForm.get("firstName")
  }
  get lName(){
    return this.doctorForm.get("lastName")
  }
  get mail(){
    return this.doctorForm.get("email")
  }
  get phone(){
    return this.doctorForm.get("phoneNumber")
  }
  get pass(){
    return this.doctorForm.get("password")
  }
  get gen(){
    return this.doctorForm.get("gender")
  }
  public response:any=null;
  public ack:boolean=false;
  public doctor:any;
  serchId(num:string){
    this.ack=false;
    let id=parseInt(num);
    this.docServ.getDoctorFromDatabaseById(id).subscribe(
      data=>{
        this.doctor=data;
        if(data !=null)
        this.ack=true
      }
    )
  }


  submit(){
  
    let pateint:Idoctor={
      userName:this.fName?.value,
      password:this.pass?.value,
      gender:this.gen?.value,
      phone:this.phone?.value,
      address:this.doctorForm.get("address")?.value,
      lastName:this.lName?.value,
      firstName:this.fName?.value,
      email:this.mail?.value,
      age:this.doctorForm.get("age")?.value,
      id:0,
      dob:this.doctorForm.get("dob")?.value,
      createdDate:this.doctorForm.get("dob")?.value,
      salary:this.sal?.value,
      designation:this.des?.value

    }
    
    this.docServ.addDoctorToDatabase(pateint).subscribe(
      (data)=>{
        this.response=data;
        console.log(data)
        if(this.response !=null)
        this.ack=true;
        
      }
    )
  }

}
