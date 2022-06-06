import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iappointment } from '../models/appointment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient,private loginser:LoginService) { }
  private username:string=this.loginser.userName;

  private Mainurl:string="http://localhost:9052/";

   private allApptUrl:string=this.Mainurl+"viewAll";
   private getByIdUrl:string=this.Mainurl+"view/";
  
   private deleteByIdUrl:string=this.Mainurl+"remove/";//id
   private getByDoctorUserNameUrl=this.Mainurl+"getByDoctorUserName/"+this.loginser.userName;//id
   private getByPatientUserNameUrl=this.Mainurl+"getByPatientUserName/"+this.loginser.userName;//id
   private getByPathologyUserNameUrl=this.Mainurl+"getByPathologyUserName/"+this.loginser.userName;//id
   private updateAppointmentUrl=this.Mainurl+"update";//admin/id
   private getByPatientUserNameUrl2=this.Mainurl+"getByPatientUserName/";//id





   public addDoctorToDatabase(appointment: Iappointment): Observable<Iappointment> {
    return this.http.post<Iappointment>(this.Mainurl+this.username+"/add", appointment);
  }

  public getAllAppointmentsFromDatabase(): Observable<Iappointment[]> {
    alert(this.loginser.userName)
    return this.http.get<Iappointment[]>(this.allApptUrl);

  }
  public getAppointmentFromDatabaseById(id: number): Observable<Iappointment> {

    return this.http.get<Iappointment>(this.getByIdUrl + id);
  }
  // public getAppointmentFromDatabaseByNmae(name: string): Observable<Iappointment> {

  //   return this.http.get<Iappointment>(this.getByNameUrl + name);
  // }
  public deleteAppointmentFromDatabase(id: number): Observable<boolean> {

    return this.http.delete<boolean>(this.deleteByIdUrl + id);
  }

  public getAppoitntmentsByDoctorUserName():Observable<Iappointment>{
    return this.http.get<Iappointment>(this.getByDoctorUserNameUrl)
  }
  public getAppoitntmentsByPatientUserName():Observable<Iappointment>{
    return this.http.get<Iappointment>(this.getByPatientUserNameUrl)
  }
  public getAppoitntmentsByPathologyUserName():Observable<Iappointment>{
    return this.http.get<Iappointment>(this.getByPathologyUserNameUrl)
  }
public updateAppointment(id:number,appointment:Iappointment):Observable<Iappointment>{
  return this.http.put<Iappointment>(this.updateAppointmentUrl+ this.username + "/" + id, appointment);
}

public getBySerchUserName(un:string):Observable<Iappointment>{
  return this.http.get<Iappointment>(this.getByPatientUserNameUrl2+un)
}
}
