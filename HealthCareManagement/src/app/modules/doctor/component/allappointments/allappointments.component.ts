import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-allappointments',
  templateUrl: './allappointments.component.html',
  styleUrls: ['./allappointments.component.css']
})
export class AllappointmentsComponent implements OnInit {

  constructor(private appserv:AppointmentService,private logserv:LoginService) { }
  public allAppointments:any=[];
public chk:boolean=false;
  ngOnInit(): void {

    this.appserv.getAppoitntmentsByDoctorUserName().subscribe(
      data=>{
        this.allAppointments=data;
        if(data !=null){
          this.allAppointments=data;
          console.log(data)
        }
       
        else
        alert("data not found")
      }
    )
  }

}
