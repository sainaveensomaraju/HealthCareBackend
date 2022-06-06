import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private loginSer:LoginService) { }
 public un:String=this.loginSer.userName
  ngOnInit(): void {
    
  }
signout(){
  this.loginSer.userName="";
this.router.navigate(['login'])
}
}
