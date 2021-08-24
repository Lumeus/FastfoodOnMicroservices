import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {noop, Observable} from 'rxjs';
import {environment} from "../environments/environment";
import {retry, tap, timeout} from "rxjs/operators";
import {AuthClientService} from "./service/auth-client.service";
import {User} from "./model/user";

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  static stop: boolean = false

  constructor(
    private authClient: AuthClientService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url != "/authenticate")
      while (BaseUrlInterceptor.stop)
        noop()
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
    return next.handle(newReq).pipe(tap(
      event => {},
      err => {
        if(err.status == 401){
          BaseUrlInterceptor.stop = true
          let user = <User>JSON.parse(<string>localStorage.getItem('user'))
          this.authClient.login(user.username, user.password).subscribe(response => {
            localStorage.setItem('token', 'Bearer ' + response.token)
            BaseUrlInterceptor.stop = false
          })
          retry(1)
        } else {
          console.log(err.toString())
        }
      }
    ));
  }
}
