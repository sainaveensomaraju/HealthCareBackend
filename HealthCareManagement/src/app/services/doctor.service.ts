import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idoctor } from '../models/doctor';
import { IPatient } from '../models/patient';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient,private loginserv:LoginService) { }

  private MainUrl: string = "http://localhost:9051/";
  private addDocUrl: string = this.MainUrl +"add";
  private allDocUrl: string = this.MainUrl +"get"
  private getByIdUrl: string = this.MainUrl + "searchid/";
  private getByNameUrl: string = this.MainUrl + "searchname/";
  private deleteByIdUrl: string = this.MainUrl +"deletebyid/";
  private updateDoctorUrl:string=this.MainUrl+"searchbyid/";

  public addDoctorToDatabase(doctor: Idoctor): Observable<Idoctor> {
    
    return this.http.post<Idoctor>(this.addDocUrl, doctor);
   
  
  }

  public getAllDoctorsFromDatabase(): Observable<Idoctor[]> {
    return this.http.get<Idoctor[]>(this.allDocUrl);

  }
  public getDoctorFromDatabaseById(id: number): Observable<Idoctor> {

    return this.http.get<Idoctor>(this.getByIdUrl + id);
  }
  public getDoctorFromDatabaseByNmae(name: string): Observable<Idoctor> {

    return this.http.get<Idoctor>(this.getByNameUrl + name);
  }
  public deleteDoctorFromDatabaseById(id: number): Observable<boolean> {

    return this.http.delete<boolean>(this.deleteByIdUrl + id);
  }

  public updateDoctor(id:number,patient:IPatient):Observable<IPatient>{
    return this.http.put<IPatient>(this.updateDoctorUrl+id,patient);
  }


}
