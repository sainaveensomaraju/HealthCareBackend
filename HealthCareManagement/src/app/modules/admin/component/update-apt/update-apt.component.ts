import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PathologyService } from 'src/app/services/pathology.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-update-apt',
  templateUrl: './update-apt.component.html',
  styleUrls: ['./update-apt.component.css']
})
export class UpdateAptComponent implements OnInit {

  constructor(private apmntServ:AppointmentService,private fb:FormBuilder,private docserv:DoctorService,
    private patServ:PatientService,private pathoogyServ:PathologyService) { }
  apmntForm=this.fb.group({
    patId:[],
    docId:[],
    labId:[],
    reason:[]
  })
  allPatients:any=[];
  allLabs:any=[];
  allDoctors:any=[];
 
  get patId(){
    return this.apmntForm.get("patId");
  }
  get docId(){
    return this.apmntForm.get('docId')
  }
  get labId(){
    return this.apmntForm.get('labId')
  }
  get reason(){
    return this.apmntForm.get('reason')
  }
  ngOnInit(): void {
    this.docserv.getAllDoctorsFromDatabase().subscribe(
      d=>{
        this.allDoctors=d;
       
        if(this.allDoctors=null)
        alert("something went wrong")
      }
    )
    this.patServ.getAllDoctorsFromDatabase().subscribe(
      data=>{
        this.allPatients=data;
        
        if(this.allPatients=null)
        alert("something went wrong")
      }
    )
    this.pathoogyServ.getAllPathologiesFromDatabase().subscribe(
      d=>{
        this.allLabs=d;
      
        if(this.allLabs=null)
        alert("something went wrong")
      }
    )
  }
  submit(){}
signout(){

}

}
