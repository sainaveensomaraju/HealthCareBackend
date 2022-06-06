import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-getallappointment',
  templateUrl: './getallappointment.component.html',
  styleUrls: ['./getallappointment.component.css']
})
export class GetallappointmentComponent implements OnInit {

  constructor(private apmntserv:AppointmentService,private logserv:LoginService) { }

  ngOnInit(): void {
    this.apmntserv.getBySerchUserName(this.logserv.userName).subscribe(
      data=>{
        this.allAppointments=data;
      }
    )
  }
public allAppointments:any=[];
}
