import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPatient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  

  constructor(private http:HttpClient) {
   }

   private Mainurl:string="http://localhost:9051/";
   private addPatient:string=this.Mainurl+"admin/addPatient";
   private allPatUrl:string=this.Mainurl+"amdin/getAllPatients";
   private getByIdUrl:string=this.Mainurl+"admin/getbyid/";
   private getByNameUrl:string=this.Mainurl+"admin/getbyname/";
   private deleteByIdUrl:string=this.Mainurl+"admin/delete/";
   private updateUrl:string=this.Mainurl+"updatepatient/";




   public addDoctorToDatabase(doctor: IPatient): Observable<IPatient> {
    return this.http.post<IPatient>(this.addPatient, doctor);
  }

  public getAllDoctorsFromDatabase(): Observable<IPatient[]> {
    return this.http.get<IPatient[]>(this.allPatUrl);

  }
  public getDoctorFromDatabaseById(id: number): Observable<IPatient> {

    return this.http.get<IPatient>(this.getByIdUrl + id);
  }
  public getDoctorFromDatabaseByNmae(name: string): Observable<IPatient> {

    return this.http.get<IPatient>(this.getByNameUrl + name);
  }
  public deleteDoctorFromDatabaseById(id: number): Observable<boolean> {

    return this.http.delete<boolean>(this.deleteByIdUrl + id);
  }

  public updatePatientToDatabase(id:number,Pattient: IPatient): Observable<IPatient> {
    return this.http.put<IPatient>(this.updateUrl+id, Pattient);
  }

  
}
