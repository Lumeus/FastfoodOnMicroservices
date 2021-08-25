import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AdminClientService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any>{
    return this.http.get("/user/all")
  }

  public getOrders(): Observable<any>{
    return this.http.get("/order/all")
  }

  register(user: User) {
    return this.http.post("/user/register/admin", user)
  }
}
