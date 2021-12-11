import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-booking-office',
  templateUrl: './add-booking-office.component.html',
  styleUrls: ['./add-booking-office.component.css']
})
export class AddBookingOfficeComponent implements OnInit {

  addBookingOfficeInformation!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addBookingOfficeInformation = this.formBuilder.group({
      bookingOfficeName: [],
      trip: [],
      phoneNumber: [],
      place: [],
      price: [],
      contractDeadline: [],
    })
  }

  addNewBookingOffice() {
    console.log(this.addBookingOfficeInformation.value);
  }

}
