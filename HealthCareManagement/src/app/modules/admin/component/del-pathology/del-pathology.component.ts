import { Component, OnInit } from '@angular/core';
import { PathologyService } from 'src/app/services/pathology.service';

@Component({
  selector: 'app-del-pathology',
  templateUrl: './del-pathology.component.html',
  styleUrls: ['./del-pathology.component.css']
})
export class DelPathologyComponent implements OnInit {

  constructor(private pathoSer:PathologyService) { }
  public chk:boolean=false;

  ngOnInit(): void {
    this.getALl()
  }
  public allPathologies:any=[];
  
getALl(){
this.chk=false;
  this.pathoSer.getAllPathologiesFromDatabase().subscribe(
    data=>{

     if(data != null){
       if(data != null){
    this.allPathologies=data;   
       }
    }
    else
    alert("no data found");
    }
  )
}
deletePathology(num:string){
  let id=parseInt(num);
  this.chk=false;
  this.pathoSer.deletePathologyFromDatabaseById(id).subscribe(
    data=>{
      this.chk=data;
    }
  )
}
}
