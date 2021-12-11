import { HrmService } from './../../../_services/hrm/hrm.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addNewEmployeeInfomationForm!: FormGroup;
  employees: any = [];
  error = '';

  constructor(
    private fb: FormBuilder,
    private hrmService: HrmService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addNewEmployeeInfomationForm = this.fb.group({
      fullName: ["", [
        Validators.required,
        Validators.maxLength(50)
      ]],
      phoneNumber: ["", [
        Validators.required,
        Validators.maxLength(10)
      ]],
      dateOfBirth: [],
      sex: ["", [
        Validators.required
      ]],
      address: ["", [
        Validators.maxLength(100)
      ]],
      email: ["", [
        Validators.required,
        Validators.email
      ]],
      account: ["", [
        Validators.required,
        Validators.minLength(3)
      ]],
      password: ["", [
        Validators.required,
        Validators.minLength(6)
      ]],
      department: ["", [
        Validators.required
      ]],
    });
  }

  clearForm() {
    this.addNewEmployeeInfomationForm.reset('');
  }

  get f() {
    return this.addNewEmployeeInfomationForm.controls;
  }

  addNewEMployee() {

    // console.log(this.f.account.value, "accout");
    // console.log(this.f.department.value, "deprt")
    // console.log(this.f.address.value, "adders")
    // console.log(this.f.email.value, "email")
    // console.log(this.f.fullName.value, "name")
    // console.log(this.f.phoneNumber.value, "phone")
    // console.log(this.f.password.value, "pass")
    // console.log(this.f.sex.value, " ssex")

    if (this.addNewEmployeeInfomationForm.invalid) {
      return;
    } else {
      this.hrmService.addNewEmployee(
        this.f.account.value,
        this.f.department.value,
        this.f.address.value,
        this.f.email.value,
        this.f.fullName.value,
        this.f.phoneNumber.value,
        this.f.password.value,
        this.f.sex.value
      ).subscribe((res: any) => {
        this.employees = res.data;
        this.snackBar.open('Add successfully!!!', 'close', {
          horizontalPosition: 'center',
          verticalPosition: 'top'
        })
      },
        (error: any) => {
          this.error = error;
          console.log(error);
        });
    }
  }
}
