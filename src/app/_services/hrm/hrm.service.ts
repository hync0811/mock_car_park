import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HrmService {

  constructor(private http: HttpClient) { }

  getAllEmployee(page: any, size: any): Observable<any[]> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<any[]>(`${environment.apiUrl}/api/employee/getAll`, { params });
  }

  addNewEmployee(
    account: string,
    department: string,
    employeeAddress: string,
    employeeBirthdate: Date,
    employeeEmail: string,
    employeeName: string,
    employeePhone: string,
    password: string,
    sex: string
  ): Observable<any[]> {
    const headers = { 'content-type': 'application/json' }
    const obj = {
      account: account,
      department: department,
      employeeAddress: employeeAddress,
      employeeBirthdate: employeeBirthdate,
      employeeEmail: employeeEmail,
      employeeName: employeeName,
      employeePhone: employeePhone,
      password: password,
      sex: sex
    };
    const body = JSON.stringify(obj);
    return this.http.post<any>(`${environment.apiUrl}/api/employee/add`, body, { 'headers': headers })
  }

}
