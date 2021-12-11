import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  addCarInformation!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addCarInformation = this.formBuilder.group({
      licensePlate: [],
      carType: [],
      carColor: [],
      company: [],
      parkingLot: [],
    })
  }

  addNewCar(){
    console.log(this.addCarInformation.value);
    
  }

}
