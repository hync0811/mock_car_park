import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CpmService } from 'src/app/_services/cpm/cpm.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  addTripInformation!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private cpmService: CpmService,
    private router: Router) { }

  ngOnInit(): void {
    this.addTripInformation = this.formBuilder.group({
      destination: ["", [
        Validators.required
      ]],
      departureTime: ["", [
        Validators.required
      ]],
      driver: ["", [
        Validators.required
      ]],
      carType: ["", [
        Validators.required
      ]],
      maximumOnlineTicketNumber: ["", [
        Validators.required
      ]],
      departureDate: ["", [
        Validators.required
      ]],
    })
  }

  get f() {
    return this.addTripInformation.controls;
  }

  addNewTrip() {
    if (this.addTripInformation.invalid) {
      return;
    } else {
      this.cpmService.addTrip(
        this.f.destination.value,
        this.f.departureTime.value,
        this.f.driver.value,
        this.f.carType.value,
        this.f.maximumOnlineTicketNumber.value,
        this.f.departureDate.value
      ).subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/cpa/trip/list']);
      }, (error: any) => {
        console.log(error);
      })
    }
  }

}
