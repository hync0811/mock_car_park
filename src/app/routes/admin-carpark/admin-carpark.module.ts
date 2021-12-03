import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BookingOfficeManagementModule } from './booking-office-management/booking-office-management.module';
import { CarManagementModule } from './car-management/car-management.module';
import { ParkingLotManagementModule } from './parking-lot-management/parking-lot-management.module';
import { TicketManagementModule } from './ticket-management/ticket-management.module';
import { TripManagementModule } from './trip-management/trip-management.module';
import { AuthGuard } from 'src/app/_helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'car', pathMatch: 'full' },
  {
    path: 'booking-office',
    canActivate: [AuthGuard],
    loadChildren: () => import('./booking-office-management/booking-office-management.module').then((m) => m.BookingOfficeManagementModule)
  },
  {
    path: 'car',
    canActivate: [AuthGuard],
    loadChildren: () => import('./car-management/car-management.module').then((m) => m.CarManagementModule)
  },
  {
    path: 'parking-lot',
    canActivate: [AuthGuard],
    loadChildren: () => import('./parking-lot-management/parking-lot-management.module').then((m) => m.ParkingLotManagementModule)
  },
  {
    path: 'ticket',
    canActivate: [AuthGuard],
    loadChildren: () => import('./ticket-management/ticket-management.module').then((m) => m.TicketManagementModule)
  },
  {
    path: 'trip',
    canActivate: [AuthGuard],
    loadChildren: () => import('./trip-management/trip-management.module').then((m) => m.TripManagementModule)
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class AdminCarparkModule { }
