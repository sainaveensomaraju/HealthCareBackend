import { Component, OnInit } from '@angular/core';
import { Idoctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-getalldocotors',
  templateUrl: './getalldocotors.component.html',
  styleUrls: ['./getalldocotors.component.css']
})
export class GetalldocotorsComponent implements OnInit {

constructor(private docServ:DoctorService) { }
public allDoctors:any=[] ;

  ngOnInit() {
    this.docServ.getAllDoctorsFromDatabase().subscribe(
     data=>{
       this.allDoctors=data;
     }
    )

  }

}
