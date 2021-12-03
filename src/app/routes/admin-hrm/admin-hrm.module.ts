import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'view-employee', pathMatch: 'full' },
  { path: 'view-employee', component: ViewEmployeeComponent },
  { path: 'add-employee', component: AddEmployeeComponent }
];

@NgModule({
  declarations: [
    ViewEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminHRMModule { }
