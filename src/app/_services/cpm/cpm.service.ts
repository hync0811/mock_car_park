import { Time } from '@angular/common';
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

  getAllTicket(page: any, size: any): Observable<any[]> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<any[]>(`${environment.apiUrl}/api/ticket/getAll`, { params });
  }

  getAllTrip(page: any, size: any): Observable<any[]> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<any[]>(`${environment.apiUrl}/api/trip/getAll`, { params });
  }

  addCar(
    licensePlate: string,
    carColor: string,
    carType: string,
    company: string,
    parkId: string
  ): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const obj = {
      licensePlate: licensePlate,
      carColor: carColor,
      carType: carType,
      company: company,
      parkId: parkId,
    };
    const body = JSON.stringify(obj);
    return this.http.post<any>(`${environment.apiUrl}/api/car/add`, body, { 'headers': headers });
  }

  addParkinglot(
    parkArea: string,
    parkName: string,
    parkPlace: string,
    parkPrice: number
  ): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const obj = {
      parkArea: parkArea,
      parkName: parkName,
      parkPlace: parkPlace,
      parkPrice: parkPrice
    };
    const body = JSON.stringify(obj);
    return this.http.post<any>(`${environment.apiUrl}/api/parking-lot/add`, body, { 'headers': headers });
  }

  addBookingOffice(
    // enContractDeadline: Date,
    officeName: string,
    officePhone: string,
    officePlace: string,
    officePrice: number,
    // startContractDeadline: Date,
    tripId: number
  ): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const obj = {
      // enContractDeadline: enContractDeadline,
      officeName: officeName,
      officePhone: officePhone,
      officePlace: officePlace,
      officePrice: officePrice,
      // startContractDeadline: startContractDeadline,
      tripId: tripId
    };
    const body = JSON.stringify(obj);
    return this.http.post<any>(`${environment.apiUrl}/api/bookingOffice/add`, body, { 'headers': headers });
  }

  addTicket(
    tripId: number,
    licensePlate: string,
    customerName: string,
  ): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const obj = {
      tripId: tripId,
      licensePlate: licensePlate,
      customerName: customerName
    };
    const body = JSON.stringify(obj);
    return this.http.post<any>(`${environment.apiUrl}/api/ticket/add`, body, { 'headers': headers });
  }

  addTrip(
    destination: string,
    departureTime: Time,
    driven: string,
    carType: string,
    maximumOnlineTicketNumber: number,
    departureDate: Date
  ): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const obj = {
      destination: destination,
      departureTime: departureTime,
      driven: driven,
      carType: carType,
      maximumOnlineTicketNumber: maximumOnlineTicketNumber,
      departureDate: departureDate
    };
    const body = JSON.stringify(obj);
    return this.http.post<any>(`${environment.apiUrl}/api/trip/add`, body, { 'headers': headers });
  }

  deleteTicket(ticketId: string): Observable<any> {
    let params = new HttpParams()
      .set('ticketId', ticketId);
    return this.http.delete<any>(`${environment.apiUrl}/api/ticket/delete`, { params });
  }
}
