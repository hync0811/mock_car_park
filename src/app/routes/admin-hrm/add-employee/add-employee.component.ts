import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addNewEmployeeInfomationForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addNewEmployeeInfomationForm = this.fb.group({
      fullName: [[''],(
        Validators.required,
        Validators.maxLength(50)
        )],
      phoneNumber: [[''],(
        Validators.required,
        Validators.maxLength(10)
      )],
      dateOfBirth: [],
      sex: [],
      address: [],
      email: [],
      account: [],
      password: [],
      department: [],
    });
  }

  clearForm(){
    this.addNewEmployeeInfomationForm.reset('');
  }

  get f(){
   return this.addNewEmployeeInfomationForm.controls;
  }

  addNewEMployee(){
    console.log(this.addNewEmployeeInfomationForm.value);
    
  }

}
