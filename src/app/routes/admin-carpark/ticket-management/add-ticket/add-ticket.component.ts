import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CpmService } from 'src/app/_services/cpm/cpm.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  cars: any[] = [];
  trips: any[] = [];
  addTicketInformation!: FormGroup;
  constructor(private formBuilder: FormBuilder, private cpmService: CpmService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllTrip();
    this.getCarList();
    this.addTicketInformation = this.formBuilder.group({
      customer: ["",[
        Validators.required,
        Validators.minLength(3)
      ]],
      bookingTime: [],
      trip: ["",[
        Validators.required,
      ]],
      licnsePlate: ["",[
        Validators.required
      ]],
    })
  }

  get f() {
    return this.addTicketInformation.controls;
  }

  getAllTrip() {
    this.cpmService.getAllTrip(0, 10).subscribe((res: any) => {
      this.trips = res.data;
      console.log(this.trips);

    })
  }

  getCarList() {
    this.cpmService.getAllCar(0, 6).subscribe((res: any) => {
      this.cars = res.data;
      console.log(this.cars);

    })
  }

  addNewTicket() {
    if (this.addTicketInformation.invalid) {
      return;
    } else {
      this.cpmService.addTicket(
        this.f.trip.value,
        this.f.licnsePlate.value,
        this.f.customer.value
      ).subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/cpa/ticket/list']);
      }, (error: any) => {
        console.log(error);
        this.router.navigate(['/cpa/ticket/list']);
      })
    }
  }

}
