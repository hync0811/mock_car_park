import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  error!: string;

  constructor(private fb: FormBuilder) { }

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", [
        Validators.required,
        Validators.email,
        Validators.minLength(3)
      ]],
      password: ["", [
        Validators.required
      ]]
    })
  }

  ngOnInit(): void {
    this.createForm();
  }

}
