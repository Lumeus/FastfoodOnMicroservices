import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {

  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<any>{
    return this.http.post("/authenticate", {username: username, password: password})
  }

  public register(user: User): Observable<any>{
    return this.http.post("/register", user)
  }
}
