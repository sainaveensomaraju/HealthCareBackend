import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-services',
  templateUrl: './appointment-services.component.html',
  styleUrls: ['./appointment-services.component.css']
})
export class AppointmentServicesComponent implements OnInit {

  constructor(private appServ:AppointmentService) { }
public allAppointments:any=[];
  ngOnInit(): void {
    this.appServ.getAllAppointmentsFromDatabase().subscribe(
      d=>{
        this.allAppointments=d;
        if(d==null){
          alert("no data found");
        }
      }
    )}
  }


