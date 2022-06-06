import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-viewallpatient',
  templateUrl: './viewallpatient.component.html',
  styleUrls: ['./viewallpatient.component.css']
})
export class ViewallpatientComponent implements OnInit {

constructor(private apmntServ:AppointmentService,private loginserv:LoginService) { }
public username:string=this.loginserv.userName;
public allAppointments:any=[];
  ngOnInit(): void {
    this.apmntServ.getAllAppointmentsFromDatabase().subscribe(
      d=>{
        this.allAppointments=d;
        if(d==null)
        alert("no data found")
      }
    )
  }

}
