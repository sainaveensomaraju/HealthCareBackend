import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilogin } from './Login';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }


public validUser:boolean=false;



//url
private adminUrl1:string="http://localhost:9051/";

private loginUrl:string=this.adminUrl1+"role/";

LoginConfirmation(credentilas:Ilogin):Observable<boolean>{
  console.log(this.loginUrl +"/"+credentilas.roles+"/"+credentilas.username+"&"+credentilas.password);
  return this.http.get<boolean>(this.loginUrl+credentilas.roles+"/"+credentilas.username+"&"+credentilas.password);
}



}
