import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-delete-app',
  templateUrl: './delete-app.component.html',
  styleUrls: ['./delete-app.component.css']
})
export class DeleteAppComponent implements OnInit {

  constructor(private appServ:AppointmentService) { }
public allApps:any=[]
  ngOnInit(): void {
    this.appServ.getAllAppointmentsFromDatabase().subscribe(
      data=>{
        if(data !=null)
        this.allApps=data;
        else
        alert("no data found")
      }
    )
  }
  public chk:boolean=false;
  deleteApp(num:string){
    this.chk=false;
    let id:number=parseInt(num);
    this.appServ.deleteAppointmentFromDatabase(id).subscribe(
      d=>{
        this.chk=d;
      }
    )
  }
}
