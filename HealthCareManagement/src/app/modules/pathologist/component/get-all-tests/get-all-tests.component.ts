import { Component, OnInit } from '@angular/core';
import { DiagnoticService } from 'src/app/services/diagnotic.service';

@Component({
  selector: 'app-get-all-tests',
  templateUrl: './get-all-tests.component.html',
  styleUrls: ['./get-all-tests.component.css']
})
export class GetAllTestsComponent implements OnInit {

  constructor(private testserv:DiagnoticService) { }
public allTests:any=[];
  ngOnInit(): void {
    this.testserv.getAllTestsFromDatabase().subscribe(
      data=>{
        if(data !=null)
        this.allTests=data
        else
        alert("No data found")
      }
    )
  }

}
