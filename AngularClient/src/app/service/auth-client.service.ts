import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {

  rootURL: string = "http://localhost:8080"

  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<any>{
    return this.http.post(this.rootURL + "/authenticate", {username: username, password: password})
  }

  public register(user: User): Observable<any>{
    return this.http.post(this.rootURL + "/register", user)
  }
}
