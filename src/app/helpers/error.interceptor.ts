import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status == 401) {
        console.log("Unauthorized!")
        //this.authenticationService.logout();
        // would be ok if exceeding api request limit didn't cause 401 error as well, don't want to log out because of it
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
