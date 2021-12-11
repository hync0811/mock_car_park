import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-office-list',
  templateUrl: './booking-office-list.component.html',
  styleUrls: ['./booking-office-list.component.css']
})
export class BookingOfficeListComponent implements OnInit {

  offices: any[]=[];
  nameColumn: string [] =[
    'ID',
    'Booking office',
    'Trip',
    'Action',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

