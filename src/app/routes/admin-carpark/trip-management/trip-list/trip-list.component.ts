import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CpmService } from 'src/app/_services/cpm/cpm.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips: any[]=[];
  nameColumn: string [] = [
    'No',
    'Destination',
    'Departure time',
    'Driver',
    'Car type',
    'Booked ticket number',
    'Action',
  ]
  constructor(
    private cpmService: CpmService,
    private router: Router
  ) { }

  getAllTrips(){
    this.cpmService.getAllTrip(0,10).subscribe((res:any) =>{
      this.trips = res.data;
      console.log(this.trips);
      
    })
  }

  ngOnInit(): void {
    this.getAllTrips();
  }

}

