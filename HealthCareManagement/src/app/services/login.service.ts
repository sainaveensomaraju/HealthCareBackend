import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilogin } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
private MainUrl="http://localhost:9051/";
private validateUrl=this.MainUrl+"admin/validate";
  constructor(private http:HttpClient) { }

public userName:string="";
  LoginConfirmation(login: Ilogin):Observable<boolean> {
    return this.http.get<boolean>(this.validateUrl+"/"+login.roles+"/"+login.username+"&"+login.password);
  }

}
