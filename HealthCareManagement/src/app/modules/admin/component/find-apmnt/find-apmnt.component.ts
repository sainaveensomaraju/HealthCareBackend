import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-find-apmnt',
  templateUrl: './find-apmnt.component.html',
  styleUrls: ['./find-apmnt.component.css']
})
export class FindApmntComponent implements OnInit {

  constructor(private appServ:AppointmentService) { }
public appointment:any;
public chk:boolean=false;
  ngOnInit(): void {
  }
  findAppById(num:string){
    this.chk=false;
    let id:number=parseInt(num);
    this.appServ.getAppointmentFromDatabaseById(id).subscribe(
      data=>{
        this.appointment=data;
        if(this.appointment !=null)
        this.chk=true;
      }
    )

  }
  findAppByName(num:string){
    this.chk=false;
    this.appServ.getBySerchUserName(num).subscribe(
      data=>{
        this.appointment=data;
        if(this.appointment != null)
        this.chk=true;
      }
    )
  }
}
