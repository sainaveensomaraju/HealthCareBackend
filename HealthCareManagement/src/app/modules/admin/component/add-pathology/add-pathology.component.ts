import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DiagnoticService } from 'src/app/services/diagnotic.service';
import { PathologyService } from 'src/app/services/pathology.service';

@Component({
  selector: 'app-add-pathology',
  templateUrl: './add-pathology.component.html',
  styleUrls: ['./add-pathology.component.css']
})
export class AddPathologyComponent implements OnInit {

  constructor(private pathologySer:PathologyService, private fb: FormBuilder) { }
  pathologyForm = this.fb.group({
      name: ['', Validators.required],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.email],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
get name(){
  return this.pathologyForm.get('name')
}
get num(){
  return this.pathologyForm.get('contactNo')
}
get addr(){
  return this.pathologyForm.get('address')
}
get user(){
  return this.pathologyForm.get('userName')
}
get pass(){
  return this.pathologyForm.get('password')
}
get mail(){
  return this.pathologyForm.get('email')
}

  ngOnInit(): void {
  }
  public chk:boolean=false;
public pathology:any;
submit(){
  this.chk=false;
  if(this.pathologyForm.valid){
    this.pathologySer.addPathologyFromDatabas(this.pathologyForm.value).subscribe(
      data=>{
        if(data !=null){
        this.pathology=data;
        this.chk=true;
        this.pathologyForm.reset();
        }
        else
        alert("add is not successfull")
      }
    )
  }

}
}
