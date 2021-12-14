import { Component, OnInit } from '@angular/core';
import { CpmService } from 'src/app/_services/cpm/cpm.service';

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

  constructor(private cpmService: CpmService) { }

  getAllBookingOffice(){
    this.cpmService.getAllBookingOffice(0,10).subscribe((res:any) => {
      this.offices = res.data
      console.log(this.offices)
    })
  }

  ngOnInit(): void {
    this.getAllBookingOffice();
  }

}

