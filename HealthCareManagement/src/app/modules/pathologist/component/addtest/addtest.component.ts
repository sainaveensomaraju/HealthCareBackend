import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DiagnoticService } from 'src/app/services/diagnotic.service';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {

  constructor(private fb:FormBuilder,private testSrv:DiagnoticService) { }
testForm=this.fb.group(
  {
    testName:['',Validators.required],
    testPrice:['',Validators.required],
    normalValue:['',Validators.required],
    unit:['',Validators.required],

  }
)
get name(){
  return this.testForm.get('testName')
}
get price(){
  return this.testForm.get('testPrice')
}
get value(){
  return this.testForm.get('normalValue')
}
get unit(){
  return this.testForm.get('unit')
}
public chk:boolean=false;

  ngOnInit(): void {
  }
  public test:any

  submit(){
    this.chk=false
    this.testSrv.addTestToDatabase(this.testForm.value).subscribe(
      data=>{
        this.test=data;
        if(data!=null)
        this.chk=true;

      }
    )
  }
}
