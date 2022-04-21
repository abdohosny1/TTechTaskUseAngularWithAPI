import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from 'src/app/models/employee';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL:string="https://localhost:7034/api/";


  constructor(private http:HttpClient) { }

  returnAllEmployee():Observable<IEmployee[]> {

    return  this.http.get<IEmployee[]>(environment.BASE_URL+"Employees").pipe(catchError((error)=>{
      return throwError(()=>error.message||"");
    }))
  }

  addEmployee(body :IEmployee){
    return this.http.post(environment.BASE_URL+"Employees",body);

  }
  updateEmployee(id:number,body :IEmployee){
   return this.http.put(environment.BASE_URL+'Employees/'+ id ,body);
  }

  
  delateEmployee(id :any):Observable<IEmployee> {

    return  this.http.delete<IEmployee>(environment.BASE_URL+"Employees/"+id).pipe(catchError((error)=>{
      return throwError(()=>error.message||"");
    }))
  }

  getEmployeeByiD(id:any):Observable<IEmployee>{
    return  this.http.get<IEmployee>(this.URL+"Employees/"+id).pipe(catchError((error)=>{
      return throwError(()=>error.message||"");
    }))
  }
}
