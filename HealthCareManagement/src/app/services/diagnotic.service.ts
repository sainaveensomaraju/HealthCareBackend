import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdiagnoticTest } from '../models/DiagnoticTest';

@Injectable({
  providedIn: 'root'
})
export class DiagnoticService {

  constructor(private http:HttpClient) { }

  private MainUrl:string="http://localhost:9051/";
  private addUrl:string=this.MainUrl+"addtest";
  private delUrl:string=this.MainUrl+"deletetest/";
  private getByIdUrl:string=this.MainUrl+"";
  private getAllUrl:string=this.MainUrl+"getAlltest";
  private updateTestUrl:string=this.MainUrl+"updatetest/"

  public getAllTestsFromDatabase(): Observable<IdiagnoticTest[]> {
    return this.http.get<IdiagnoticTest[]>(this.getAllUrl);

  }
  public getTestFromDatabaseById(id: number): Observable<IdiagnoticTest> {

    return this.http.get<IdiagnoticTest>(this.getByIdUrl + id);
  }
  // public getTestFromDatabaseByNmae(name: string): Observable<IdiagnoticTest> {

  //   return this.http.get<IdiagnoticTest>(this.getByNameUrl + name);
  // }

  public addTestToDatabase(test:IdiagnoticTest):Observable<IdiagnoticTest>{
    return this.http.post<IdiagnoticTest>(this.addUrl,test);
  }
  public deleteTestFromDatabaseById(id: number): Observable<boolean> {

    return this.http.delete<boolean>(this.delUrl + id);
  }
  public updateTestFromDatabaseById(test: IdiagnoticTest,id:number): Observable<boolean> {

    return this.http.put<boolean>(this.updateTestUrl+id,test);
  }

  



}
