import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CpmService {

  constructor(private http: HttpClient) { }

  getAllCar(page: any, size: any): Observable<any[]> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<any[]>(`${environment.apiUrl}/api/car/getAll`, { params });
  }

  getAllBookingOffice(page: any, size: any): Observable<any[]> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<any[]>(`${environment.apiUrl}/api/bookingOffice/getAll`, { params });
  }

  getAllParkingLot(page: any, size: any): Observable<any[]> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<any[]>(`${environment.apiUrl}/api/parking-lot/getAll`, { params });
  }
}
