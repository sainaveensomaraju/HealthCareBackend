import { Component, OnInit } from '@angular/core';
import { PathologyService } from 'src/app/services/pathology.service';

@Component({
  selector: 'app-get-all-pathologies',
  templateUrl: './get-all-pathologies.component.html',
  styleUrls: ['./get-all-pathologies.component.css']
})
export class GetAllPathologiesComponent implements OnInit {

  constructor(private pathologyserv:PathologyService) { }
  public allPathologies:any=[];
  ngOnInit(): void {
this.pathologyserv.getAllPathologiesFromDatabase().subscribe(
  data=>{
    this.allPathologies=data;
  }
)
  }




}
