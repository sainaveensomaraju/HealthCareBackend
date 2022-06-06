import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DiagnoticService } from 'src/app/services/diagnotic.service';

@Component({
  selector: 'app-remove-test',
  templateUrl: './remove-test.component.html',
  styleUrls: ['./remove-test.component.css']
})
export class RemoveTestComponent implements OnInit {

  constructor(private testserv: DiagnoticService) { }
  newForm = new FormGroup({
    inv: new FormControl('')
  })

  public chk: boolean = false;
  public allTests: any = [];
  ngOnInit(): void {
    this.getall();
  }
  public inp: number = 0;
  submit(num: string) {
    let id: number = parseInt(num);
    this.testserv.deleteTestFromDatabaseById(id).subscribe(
      data => {
        this.chk = data;
        if (this.chk) {
          this.getall()
        }
        else
          alert("no data found")
      }
    )
  }
  getall() {
    this.testserv.getAllTestsFromDatabase().subscribe(
      data => {
        if (data != null)
          this.allTests = data;
        else
          alert("no data found")
      }
    )
  }
}
