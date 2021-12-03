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

}
