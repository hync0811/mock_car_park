import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingLotListComponent } from './parking-lot-list/parking-lot-list.component';
import { AddParkingLotComponent } from './add-parking-lot/add-parking-lot.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: ParkingLotListComponent },
  { path: 'add', component: AddParkingLotComponent }
];

@NgModule({
  declarations: [
    ParkingLotListComponent,
    AddParkingLotComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ParkingLotManagementModule { }
