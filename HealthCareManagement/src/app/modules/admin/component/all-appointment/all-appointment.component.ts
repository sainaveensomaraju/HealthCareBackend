import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-all-appointment',
  templateUrl: './all-appointment.component.html',
  styleUrls: ['./all-appointment.component.css']
})
export class AllAppointmentComponent implements OnInit {

  constructor(private appServ:AppointmentService) { }
public allAppointments:any=[];
public chk:boolean=false;
  ngOnInit(): void {
    this.appServ.getAllAppointmentsFromDatabase().subscribe(
      data=>{
        if(data !=null){
        this.allAppointments=data;
        }
        else
        alert("no data found");
      }
    )
  }

}
