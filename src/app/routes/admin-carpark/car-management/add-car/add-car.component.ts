import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CpmService } from 'src/app/_services/cpm/cpm.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  addCarInformation!: FormGroup;
  parkinglots: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private cpmService: CpmService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getParkingLot();
    this.addCarInformation = this.formBuilder.group({
      licensePlate: ["", [
        Validators.required
      ]],
      carType: ["", [

      ]],
      carColor: ["", [

      ]],
      company: ["", [
        Validators.required
      ]],
      parkingLot: ["", [
        Validators.required
      ]],
    })
  }

  get f() {
    return this.addCarInformation.controls;
  }

  getParkingLot() {
    this.cpmService.getAllParkingLot(0, 10).subscribe((res: any) => {
      this.parkinglots = res.data;
    })
  }

  clearForm() {
    this.addCarInformation.reset('');
  }

  addNewCar() {
    if (this.addCarInformation.invalid) {
      return;
    }
    else {
      this.cpmService.addCar(
        this.f.licensePlate.value,
        this.f.carColor.value,
        this.f.carType.value,
        this.f.company.value,
        this.f.parkingLot.value
      ).subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/cpa/car/list']);
      }, (error: any) => {
        console.log(error);
        this.router.navigate(['/cpa/car/list']);
      })
    }
  }

}
