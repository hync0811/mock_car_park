import { SelectRoleComponent } from './select-role/select-role.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: 'hrm',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('./admin-hrm/admin-hrm.module').then((m) => m.AdminHRMModule),
  },
  {
    path: 'cpa',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('./admin-carpark/admin-carpark.module').then((m) => m.AdminCarparkModule),
  },
  {
    path: 'roles',
    canActivate: [AuthGuard],
    component: SelectRoleComponent,
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
