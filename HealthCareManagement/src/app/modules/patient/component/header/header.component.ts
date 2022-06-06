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
 
  constructor(private router:Router,private logserv:LoginService) { }
  public un:String=this.logserv.userName

  ngOnInit(): void {
  }
signout(){
  this.logserv.userName="";
  this.router.navigate(['login'])

}
}
