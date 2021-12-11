import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking-lot-list',
  templateUrl: './parking-lot-list.component.html',
  styleUrls: ['./parking-lot-list.component.css']
})
export class ParkingLotListComponent implements OnInit {

  parks: any[]=[];
  nameColumn: string[] = [
    'ID',
    'Parking lot',
    'Place',
    'Area',
    'Price',
    'Status',
    'Action',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
