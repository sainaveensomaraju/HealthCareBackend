import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IPatient } from 'src/app/models/patient';
import { PathologyService } from 'src/app/services/pathology.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-update-pathology',
  templateUrl: './update-pathology.component.html',
  styleUrls: ['./update-pathology.component.css']
})
export class UpdatePathologyComponent implements OnInit {
  public allDoctors: any = [];
  constructor(private fb: FormBuilder, private pathologyserv:PathologyService) { }
  pathologyForm = this.fb.group({
    name: ['', Validators.required],
    contactNo: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', Validators.email],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    id:[]
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



  public response: any = null;
  public ack: boolean = false;
  public chk: boolean = false;
  submit() {
    this.patient.name?.setValue(this.name)
    this.patient.password?.setValue(this.pass)
    this.patient.email?.setValue(this.mail)
    this.patient.userName?.setValue(this.user)
    this.patient.address?.setValue(this.addr)
    this.patient.contactNo?.setValue(this.num)
    console.log(this.patient)
    this.pathologyserv.updatePathologyFromDatabas(this.patient.id,this.patient.value).subscribe(
      (data) => {
        this.response = data;
        console.log(data)
        if (this.response != null){
          this.ack = true;
          this.pathologyForm.reset();
        }
        
          else
          alert("data is not updated")
      })
  }
  public allPathologies:any=[]
  ngOnInit(): void {
    this.getAll();
  }
  public patient: any
  update(num: string) {

    this.ack=false;
    this.chk = true;
    let id: number = parseInt(num);
    
    this.pathologyserv.getPathologyFromDatabaseById(id).subscribe(
      data => {
        if (data != null) {

          this.patient = data;
          if(this.patient !=null){

            this.name?.setValue(this.patient.name),
            this.pass?.setValue(this.patient.password)
            this.num?.setValue(this.patient.contactNo)
            this.addr?.setValue(this.patient.address)
            this.user?.setValue(this.patient.userName)
            this.mail?.setValue(this.patient.email)
            this.addr?.setValue(this.patient.address)
          
   

          }
        }
      }
    )
  }

  getAll(){
    this.pathologyserv.getAllPathologiesFromDatabase().subscribe(
      data => {
        if (data != null) {
          this.allPathologies = data;
          console.log(this.allPathologies)
        }
        else
          alert("no data found");
      }
    )
  }

}
