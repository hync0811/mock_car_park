import { HrmService } from './../../../_services/hrm/hrm.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  dataSource = new MatTableDataSource<Employee>(employees);
  nameColumn: string[] = [
    'ID',
    'Name',
    'Date of birth',
    'Address',
    'Phone number',
    'Department',
    'Action',
  ];
  employees: any = [];
  
  constructor(private hrmService: HrmService) { }

  getAllEmployee(){
    this.hrmService.getAllEmployee(0,6).subscribe((res: any) => {
      this.employees = res.data;
      console.log(this.employees);
      
    })
  }
  
  ngOnInit(): void {
    this.getAllEmployee();
  }
}

export interface Employee {
  id: number;
  name: string;
  dateOfBirth: string;
  address: string;
  phoneNumber: string;
  department: string;
}

const employees: Employee [] =[
  {id: 1, name:'Nguyen Van Linh', dateOfBirth:'1994-09-08', address:'Hai Chau, Da Nang', phoneNumber:'901292', department:'employee'},
  {id: 2, name:'Nguyen Thi Lan', dateOfBirth:'1994-02-08', address:'Tam Ky, Quang Nam', phoneNumber:'901292', department:'parking'},
  {id: 3, name:'Pham Van Thanh', dateOfBirth:'1994-01-08', address:'Phu Vang, Hue', phoneNumber:'901292', department:'services'},
]
