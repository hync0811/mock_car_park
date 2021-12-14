import { Component, OnInit } from '@angular/core';
import { CpmService } from 'src/app/_services/cpm/cpm.service';

@Component({
  selector: 'app-parking-lot-list',
  templateUrl: './parking-lot-list.component.html',
  styleUrls: ['./parking-lot-list.component.css']
})
export class ParkingLotListComponent implements OnInit {

  parks: any[] = [];
  nameColumn: string[] = [
    'ID',
    'Parking lot',
    'Place',
    'Area',
    'Price',
    'Status',
    'Action',
  ]
  constructor(private cpmService: CpmService) { }

  getParkingLot() {
    this.cpmService.getAllParkingLot(0, 10).subscribe((res: any) => {
      this.parks = res.data;
      console.log(this.parks);
      
    })
  }

  ngOnInit(): void {
    this.getParkingLot();
  }

}
