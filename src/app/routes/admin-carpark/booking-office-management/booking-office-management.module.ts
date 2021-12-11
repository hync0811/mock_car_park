import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingOfficeListComponent } from './booking-office-list/booking-office-list.component';
import { AddBookingOfficeComponent } from './add-booking-office/add-booking-office.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

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
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookingOfficeManagementModule { }
