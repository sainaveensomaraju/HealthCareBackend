import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-find-patientby-id',
  templateUrl: './find-patientby-id.component.html',
  styleUrls: ['./find-patientby-id.component.css']
})
export class FindPatientbyIdComponent implements OnInit {

  constructor(private patServ:PatientService) { }
  public chk:boolean=false;
public resPat:any;
  ngOnInit(): void {
  }
  findPatById(num:string){
    this.chk=false;
    let id=parseInt(num);
    this.patServ.getDoctorFromDatabaseById(id).subscribe(
      data=>{
        if(data !=null){
          this.resPat=data;
          this.chk=true;
        }
        else
        alert("no data found ");
      }
    )

  }
  findPatByName(num:string){
    this.chk=false;
    this.patServ.getDoctorFromDatabaseByNmae(num).subscribe(
      data=>{
        if(data !=null){
          this.resPat=data;
          this.chk=true;
        }
        else
        alert("no data found ");
      }
    )

  }
}
