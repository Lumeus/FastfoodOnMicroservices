import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token')
    let newReq
    if(token === null){
      newReq = request.clone({url: environment.apiUrl + request.url})
    } else {
      newReq = request.clone({
        url: environment.apiUrl + request.url,
        headers: new HttpHeaders({"Authorization": token})
      })
    }
    return next.handle(newReq);
  }
}
