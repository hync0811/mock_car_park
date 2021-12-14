import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
      destination: [],
      departureTime: [],
      driver: [],
      carType:[],
      maximumOnlineTicketNumber:[],
      departureDate: [],
    })
  }

  get f(){
    return this.addTripInformation.controls;
  }

  addNewTrip(){
    console.log(this.addTripInformation.value);
    
    this.cpmService.addTrip(
      this.f.destination.value,
      this.f.departureTime.value,
      this.f.driver.value,
      this.f.carType.value,
      this.f.maximumOnlineTicketNumber.value,
      this.f.departureDate.value
    ).subscribe((res:any) =>{
      console.log(res);
      this.router.navigate(['/cpa/trip/list']);
    }, (error:any) =>{
      console.log(error);
      
    })
  }

}
