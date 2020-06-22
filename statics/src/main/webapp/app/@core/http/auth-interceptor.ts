import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '@env/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    if (request.url.includes(environment.server.inquiryService)) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    if (!environment.production) {
      const accessToken =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJncmFudCI6IkFVVEhfQ09ERSIsImlzcyI6Imh0dHA6Ly9hcGkuYm1pLmlyL3NlY3VyaXR5IiwiYXVkIjoiZGNpLXVpLWNsaWVudCIsImV4cCI6MTU5MjMwODEwNTMwNywibmJmIjoxNTkyMjIxNzA1MzA3LCJyb2xlIjoiZGNpLXVpLWNsaWVudC1hZG1pbiIsInNlcmlhbCI6ImQ0NTM5OTU0LTE2ZjQtMzI5OS05ZjEzLTlmZWYwNGFjYmYxOCIsInNzbiI6IjAwNjk4NjkxODkiLCJjbGllbnRfaWQiOiIxNDM4Iiwic2NvcGVzIjpbImJhdGNoLXVzZXItaW5mbyJdfQ==.3Yq7yQgmoMqx4INsmCcGkrhq5t1wNnqO68IV-KVOBWI';
      request = request.clone({
        /* headers: request.headers.set('Authorization', 'Bearer ' + this.cookieService.get('access_token')),*/
        headers: request.headers.set('Authorization', 'Bearer ' + accessToken),
      });
    }
    request = request.clone({
      headers: request.headers.set('Access-Control-Allow-Origin', '*'),
    });

    request = request.clone({
      headers: request.headers.set(
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, ' +
          'Access-Control-Request-Method, Access-Control-Request-Headers, X-Access-Token, XKey, Authorization'
      ),
    });

    return next.handle(request).pipe(
      map(
        (event: HttpEvent<any>) => {
          return event;
        },
        catchError((error) => {
          let data = {};
          data = {
            reason: error && error.error.reason ? error.error.reason : '',
            status: error.status,
          };
          return throwError(error);
        })
      )
    );
  }
}
