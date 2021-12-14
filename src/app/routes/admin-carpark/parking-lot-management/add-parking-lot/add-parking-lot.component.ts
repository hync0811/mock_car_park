import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CpmService } from 'src/app/_services/cpm/cpm.service';

@Component({
  selector: 'app-add-parking-lot',
  templateUrl: './add-parking-lot.component.html',
  styleUrls: ['./add-parking-lot.component.css']
})
export class AddParkingLotComponent implements OnInit {

  addParkingLotInformation!: FormGroup
  constructor(
    private formBuider: FormBuilder,
    private cpmService: CpmService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.addParkingLotInformation = this.formBuider.group({
      parkingName: [],
      place:[],
      area: [],
      price:[],
    })
  }

  get f(){
    return this.addParkingLotInformation.controls;
  }

  addParking(){
    this.cpmService.addParkinglot(
      this.f.area.value,
      this.f.parkingName.value,
      this.f.place.value,
      this.f.price.value
    ).subscribe((res:any) =>{
      this.router.navigate(['/cpa/parking-lot/list']);
    },(error:any) => {
      console.log(error);
      
    })
  }

}
