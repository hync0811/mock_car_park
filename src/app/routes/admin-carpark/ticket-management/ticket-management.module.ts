import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

const routes: Routes = [
  { path: 'list', component: TicketListComponent },
  { path: 'add', component: AddTicketComponent }
];

@NgModule({
  declarations: [
    AddTicketComponent,
    TicketListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TicketManagementModule { }
