import { AdminHRMModule } from './routes/admin-hrm/admin-hrm.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from './routes/authentication/authentication.module';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AdminCarparkModule } from './routes/admin-carpark/admin-carpark.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { AuthGuard } from './_helpers/auth.guard';
import { HrmLayoutComponent } from './layout/hrm-layout/hrm-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HrmLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    AdminHRMModule,
    AdminCarparkModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: AuthGuard}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
