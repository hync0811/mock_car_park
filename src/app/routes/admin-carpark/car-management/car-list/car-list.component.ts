import { CpmService } from './../../../../_services/cpm/cpm.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  nameColumn: string[] = [
    'License plate',
    'Car type',
    'Car color',
    'Company',
    'Parking lot',
    'Action',
  ]
  cars: any[] = [];

  constructor(private cpmService: CpmService) { }

  getCarList() {
    this.cpmService.getAllCar(0,6).subscribe((res: any) => {
      this.cars = res.data;
      console.log(this.cars);
      
    })
  }

  ngOnInit(): void {
    this.getCarList();
  }

}
