import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingOfficeListComponent } from './booking-office-list/booking-office-list.component';
import { AddBookingOfficeComponent } from './add-booking-office/add-booking-office.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: BookingOfficeListComponent },
  { path: 'add', component: AddBookingOfficeComponent }
];

@NgModule({
  declarations: [
    BookingOfficeListComponent,
    AddBookingOfficeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookingOfficeManagementModule { }
