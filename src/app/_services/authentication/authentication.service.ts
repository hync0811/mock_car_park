import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/_models/user';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router,) { }

  public get loggedIn(): any {
    return localStorage.getItem('currentUser');
  }

  login(email: string, password: string) {
    const headers = { 'content-type': 'application/json' }
    const obj = { username: email, password: password };
    const body = JSON.stringify(obj);
    return this.http.post<any>(`${environment.apiUrl}/api/login`, body, { 'headers': headers })
      .pipe(tap(res => {
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(res.token);
        const userRole = decodedToken.sub;
        if ( userRole === 'tuyen1') {
          this.router.navigate(['/hrm/view-employee']);
        }
        else {
          this.router.navigate(['/auth/login']);
        }
        localStorage.setItem('currentUser', res.token);
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
