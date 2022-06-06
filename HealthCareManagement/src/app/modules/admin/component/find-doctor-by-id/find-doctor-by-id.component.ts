import { Component, OnInit } from '@angular/core';
import { Idoctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';


@Component({
  selector: 'app-find-doctor-by-id',
  templateUrl: './find-doctor-by-id.component.html',
  styleUrls: ['./find-doctor-by-id.component.css']
})
export class FindDoctorByIdComponent implements OnInit {

  constructor(private docServ: DoctorService) { }

  ngOnInit(): void {

  }
  public chk: boolean = false;
  public resDoc: any;
  findDoctorById(num: string) {
    this.chk=false;
    let id: number = parseInt(num);
    this.docServ.getDoctorFromDatabaseById(id).subscribe(
      data => {
        console.log(data)
        if (data != null){
          this.resDoc = data;
          this.chk = true;
        }   
        else {
          alert("No data found")
          this.chk = false
          
        }
      }
    )
  }
  findDoctorByName(name: string) {
    this.chk=false;
    this.docServ.getDoctorFromDatabaseByNmae(name).subscribe(
      data => {
        if (data != null){
          this.resDoc = data;
          this.chk = true;
        }   
        else {
          alert("No data found")
          this.chk = false
          
        }
      }
    )
  }
}
