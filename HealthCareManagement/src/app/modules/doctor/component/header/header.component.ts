import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private loginserv:LoginService) { }
  public un:String=this.loginserv.userName;

  ngOnInit(): void {
  }
  signout(){
    this.loginserv.userName="";
    this.router.navigate(['login'])
    }

}
