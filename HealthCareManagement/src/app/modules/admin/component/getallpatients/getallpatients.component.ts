import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-getallpatients',
  templateUrl: './getallpatients.component.html',
  styleUrls: ['./getallpatients.component.css']
})
export class GetallpatientsComponent implements OnInit {

  constructor(private patServ:PatientService) { }
public allPats:any=[];
  ngOnInit(): void {
    this.patServ.getAllDoctorsFromDatabase().subscribe(
      data=>{
        this.allPats=data;
      }
    )
  }

}
