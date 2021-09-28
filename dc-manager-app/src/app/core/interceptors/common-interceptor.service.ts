import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { ResponseModel } from '../models/response.model';

@Injectable({ providedIn: 'any' })
export class CommonInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method === 'POST' || req.method === 'PUT') {
      req = req.clone({
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
      });
    }

    return next.handle(req).pipe(
      map((response) => {
        if (response instanceof HttpResponse) {
          response = response.clone({
            body: new ResponseModel(response.body),
          });
        }
        return response;
      }),
    );
  }
}
