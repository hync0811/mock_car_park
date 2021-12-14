import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CpmService } from 'src/app/_services/cpm/cpm.service';

@Component({
  selector: 'app-add-booking-office',
  templateUrl: './add-booking-office.component.html',
  styleUrls: ['./add-booking-office.component.css']
})
export class AddBookingOfficeComponent implements OnInit {

  addBookingOfficeInformation!: FormGroup;
  trips: any[]=[];
  constructor(
    private formBuilder: FormBuilder,
    private cpmService: CpmService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllTrip();
    this.addBookingOfficeInformation = this.formBuilder.group({
      bookingOfficeName: ["", [
        Validators.required,
        Validators.maxLength(100)
      ]],
      trip: ["", [
        Validators.required
      ]],
      phoneNumber: ["", [
        Validators.required
      ]],
      place: ["", [
        Validators.required
      ]],
      price: ["", [
        Validators.required
      ]],
      contractDeadlineStart: ["", [
      ]],
      contractDeadlineEnd: ["", [
      ]]
    })
  }

  get f() {
    return this.addBookingOfficeInformation.controls;
  }

  getAllTrip() {
    this.cpmService.getAllTrip(0, 10).subscribe((res: any) => {
      this.trips = res.data;
      console.log(this.trips);
      
    })
  }

  addNewBookingOffice() {
    this.cpmService.addBookingOffice(
      this.f.contractDeadlineEnd.value,
      this.f.bookingOfficeName.value,
      this.f.phoneNumber.value,
      this.f.place.value,
      this.f.price.value,
      this.f.contractDeadlineStart.value,
      this.f.trip.value
    ).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/cpa/booking-office/list'])
    }, (error: any) => {
      console.log(error);
      console.log(this.addBookingOfficeInformation.value);

    })
  }

}
