import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {
public allPats:any=[]
  constructor(private patserv:PatientService) { }

  ngOnInit(): void {
   this.getAll();
  }
  deletePatient(num:string){
    this.chk=false;
    
    let id=parseInt(num);
    this.patserv.deleteDoctorFromDatabaseById(id).subscribe(
      data=>{
        this.chk=data;
        if(this.chk)
        this.getAll();
        if( !this.chk)
        alert("no data found")
      }
    )
  }
  public chk:boolean=false;
  getAll(){
    
    this.patserv.getAllDoctorsFromDatabase().subscribe(
      data=>{
        if(data !=null){
        this.allPats=data;     
      }
        else
        alert("no data found")
      }
    )
  }
}
