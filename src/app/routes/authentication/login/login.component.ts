import { AuthenticationService } from './../../../_services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  error!: string;
  submitted = false;
  returnUrl!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
      // if (this.authenticationService.currentUserValue) { 
      //   if (this.authenticationService.currentUserValue.mainRole === "HRM") {
      //     this.router.navigate(['/hrm/view-employee']);
      //   } else {
      //     this.router.navigate(['/auth/login']);
      //   }
      //   console.log(this.authenticationService.currentUserValue)
      // }
     }

  createForm() {
    this.loginForm = this.fb.group({
      email: ["", [
        Validators.required,
        // Validators.email,
        Validators.minLength(3)
      ]],
      password: ["", [
        Validators.required
      ]]
    })
  }

  ngOnInit(): void {
    this.createForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    // this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            (data: any) => {
              if (this.returnUrl) {
                this.router.navigate([this.returnUrl]);
              } 
              // else {
              //   if (this.f.email.value === "tuyen1") {
              //     this.router.navigate(['/hrm/view-employee']);
              //   } else {
              //     this.router.navigate(['/auth/login']);
              //   }
              // }
            },
            (error: any) => {
              this.error = error;
            });
    }

}
