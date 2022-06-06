import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPathology } from '../models/Pathology';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PathologyService {

  constructor(private http:HttpClient,private logserv:LoginService) { }

  private MainUrl:string="http://localhost:9051/"

  private getAllUrl:string=this.MainUrl+"allpathologies";
  private deleteUrl:string=this.MainUrl+"delete/";//id
  private addPatUrl:string=this.MainUrl+"pathology";
  private getByIdUrl:string=this.MainUrl+"pathologybyid/";//id
  private updatePathologyUrl:string=this.MainUrl+"updatepathology/";
  

  public getAllPathologiesFromDatabase(): Observable<IPathology[]> {
    return this.http.get<IPathology[]>(this.getAllUrl);

  }
  public getPathologyFromDatabaseById(id: number): Observable<IPathology> {

    return this.http.get<IPathology>(this.getByIdUrl + id);
  }
  public addPathologyFromDatabas(pathology: IPathology): Observable<IPathology> {

    return this.http.post<IPathology>(this.addPatUrl,pathology);
  }
  public deletePathologyFromDatabaseById(id: number): Observable<boolean> {

    return this.http.delete<boolean>(this.deleteUrl + id);
  }

  public updatePathologyFromDatabas(id:number,pathology: IPathology): Observable<IPathology> {

    return this.http.put<IPathology>(this.updatePathologyUrl+id,pathology);
  }

}
