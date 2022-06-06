import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  constructor(private apserv:AppointmentService) { }
  public allAppointments:any=[];
  public chk:boolean=false;
  ngOnInit(): void {


  }


}
