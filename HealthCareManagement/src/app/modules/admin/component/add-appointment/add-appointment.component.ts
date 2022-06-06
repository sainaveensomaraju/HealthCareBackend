import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PathologyService } from 'src/app/services/pathology.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  constructor(private apmntServ: AppointmentService, private fb: FormBuilder, private docserv: DoctorService,
    private patServ: PatientService, private pathoogyServ: PathologyService) { }
  // apmntForm = this.fb.group({
  //   adminId:[],
  //   patId: [],
  //   docId: [],
  //   labId: [],
  //   reason: []
  // })

  public allPatients:any = [];
 public  allLabs: any = [];
  public allDoctors: any = [];

  // get patId() {
  //   return this.apmntForm.get("patId");
  // }
  // get docId() {
  //   return this.apmntForm.get('docId')
  // }
  // get labId() {
  //   return this.apmntForm.get('labId')
  // }
  // get reason() {
  //   return this.apmntForm.get('reason')
  // }
  ngOnInit(): void {
   this.getAllDoctors();
   this.getAllLabs();
   this.getAllPatients();
   
    
  }
  public chk:boolean=false;
  // submit() {
  //   console.log(this.allPatients)
  //   console.log(this.allDoctors)

  //   this.chk=false;
  //   this.apmntServ.addDoctorToDatabase(this.apmntForm.value).subscribe(
  //     data=>{
  //       if(data != null){
  //         this.chk=true;
  //         this.apmntForm.reset();
  //       }
  //       else{
  //         alert("data not saved. something went wrong")
  //       }
  //     }
  //   )
  // }
getAllLabs(){
  this.pathoogyServ.getAllPathologiesFromDatabase().subscribe(
    d => {
      this.allLabs = d;
     
      if (this.allLabs = null)
        alert("something went wrong")
    }
  )

}
getAllDoctors(){
  this.docserv.getAllDoctorsFromDatabase().subscribe(
    d => {
      this.allDoctors = d;
      if (this.allDoctors = null)
        alert("something went wrong")
    }
  )

}
getAllPatients(){
  this.patServ.getAllDoctorsFromDatabase().subscribe(
    data => {
      this.allPatients = data;
     
      if (this.allPatients = null)
        alert("something went wrong")
    }
  )

}
}
