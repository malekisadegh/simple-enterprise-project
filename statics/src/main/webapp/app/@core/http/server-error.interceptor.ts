import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        const windowUri =
          window.location.protocol + '//' + window.location.host;
        if (error.status === 401) {
          window.location.href = windowUri + '/portal/logout';
        }
        if (
          error.status === 504 &&
          error.url.indexOf(environment.server.inquiryService) !== -1
        ) {
          window.location.href = windowUri + '/portal/logout';
        }
        return throwError(error);
      })
    );
  }
}
