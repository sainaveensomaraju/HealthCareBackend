import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ilogin } from 'src/app/models/Login';
import { AdminService } from 'src/app/services/admin.service';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private router: Router, private fb: FormBuilder,
     private rest: LoginService) { }
  loginForm = this.fb.group({
    role: ["",Validators.required],
    userName: ["", Validators.required, Validators.minLength(5)],
    password: ["", Validators.required]
  })
  public validUser:boolean = true;
  get name() {
    return this.loginForm.get('userName')
  }
  get password() {
    return this.loginForm.get('password')
  }
  get roles() {
    return this.loginForm.get('role')
  }
  ngOnInit(): void {
  }
  public chk:boolean=false;
  submit() {
    this.chk=false;
    console.log(this.loginForm.value)
    let login: Ilogin = {
      username: this.name?.value,
      password: this.password?.value,
      roles:this.roles?.value
    }
    this.rest.LoginConfirmation(login).subscribe(
      (data: boolean) => {
        this.validUser = data;
        console.log(this.validUser)
        if(this.validUser){
          console.log(this.validUser)
          this.rest.userName=login.username;
          if(this.roles?.value==1)
          this.router.navigate(['./admin-dash']);
          else if(this.roles?.value==2)
          this.router.navigate(['./doctor-dash'])
          else if(this.roles?.value==3)
          this.router.navigate(['lab-dash'])
          else if(this.roles?.value==4)
          this.router.navigate(['patient-dash'])
          else
          this.chk=true;
        }
        else
        this.chk=true;
      }
    )
  }

}
