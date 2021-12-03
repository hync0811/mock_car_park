import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: TripListComponent },
  { path: 'add', component: AddTripComponent }
];

@NgModule({
  declarations: [
    AddTripComponent,
    TripListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TripManagementModule { }
