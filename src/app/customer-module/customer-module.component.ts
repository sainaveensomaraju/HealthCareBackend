import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-module',
  templateUrl: './customer-module.component.html',
  styleUrls: ['./customer-module.component.css']
})
export class CustomerModuleComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public checker:boolean=false;
  appointment(){
      this.checker=true;
     this.router.navigate(["create-appointment"])
  }
}
