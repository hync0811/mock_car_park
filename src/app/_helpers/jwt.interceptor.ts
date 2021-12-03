import { AuthenticationService } from './../_services/authentication/authentication.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.loggedIn;
        if (currentUser) {
            request = request.clone({ headers: request.headers.append('Authorization', 'Bearer ' + currentUser + '') });
            // request = request.clone({
            //     setHeaders: {
            //         Authorization: `Bearer ${currentUser}`,
            //         'Access-Control-Allow-Origin': '*',
            //     }
            // });
        }

        return next.handle(request);
    }
}