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

  // private currentUserSubject: BehaviorSubject<User | null>;
  // public currentUser: Observable<User | null>;

  constructor(private http: HttpClient, private router: Router) {
    // this.currentUserSubject =  new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser') || 'null'));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): User | null {
  //   return this.currentUserSubject.value;
  // }

  public get loggedIn(): any {
    return localStorage.getItem('currentUser');
  }

  login(email: string, password: string) {
    const headers = { 'content-type': 'application/json' }
    const obj = { username: email, password: password };
    const body = JSON.stringify(obj);
    return this.http.post<any>(`${environment.apiUrl}/api/login`, body, { 'headers': headers })
      .pipe(tap(res => {
        const roles = res.roles_name
        if (roles.length > 1) {
          this.router.navigate(['/roles']);
        }
        else if (roles[0] === 'HRM') {
          this.router.navigate(['/hrm/view-employee']);
        } else if (roles[0] === 'CPM') {
          this.router.navigate(['/cpa/booking-office/list']);
        }

        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(res.token);
        // const userRole = decodedToken.sub;
        // if ( userRole === 'tuyen1') {
        //   this.router.navigate(['/hrm/view-employee']);
        // }
        // else {
        //   this.router.navigate(['/auth/login']);
        // }
        let user = JSON.stringify(res);
        localStorage.setItem('currentUser', user);
        // this.currentUserSubject.next(res);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login'])
    // this.currentUserSubject.next(null)
  }
}
