import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../admin-service.service';
import { Ilogin } from '../../Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private rest: AdminServiceService) { }
  loginForm = this.fb.group({
    role: ["", Validators.required],
    userName: ["", Validators.required, Validators.minLength(5)],
    password: ["", Validators.required]
  })
  public validUser:boolean = false;
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

  submit() {
    console.log(this.loginForm.value)
    let login: Ilogin = {
      username: this.loginForm.get("userName")?.value,
      password: this.loginForm.get("password")?.value,
      roles:this.loginForm.get("role")?.value
    }
    this.rest.LoginConfirmation(login).subscribe(
      (data) => {
        this.validUser = data;
        console.log(this.validUser)
        if(this.validUser)
        this.router.navigate(["admin-modules"])
      }
    )
  }
  goto() {
    this.router.navigate(["customer-signup"]);
  }
  goto1() {
    this.router.navigate(["admin-signup"]);
  }
  goto2() {
    this.router.navigate(["add-doctor"]);
  }
  goto4() {
    this.router.navigate(["customer-module"]);
  }
}
