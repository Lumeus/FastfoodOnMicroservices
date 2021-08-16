import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OrderDTO} from "../model/order-dto";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {root} from "rxjs/internal-compatibility";

@Injectable({
  providedIn: 'root'
})
export class UserClientService {

  rootURL: string = "http://localhost:8080"

  constructor(private http: HttpClient) {}

  public postOrder(order: OrderDTO): Observable<any>{
    return this.http.post(this.rootURL + "/order/new", order)
  }

  public getOrder(id: number, token: string): Observable<any>{
    return this.http.get(this.rootURL + "/order/" + id,
      {headers: new HttpHeaders({"Authorization": token})})
  }

  public getDishes(id: number, token: string): Observable<any>{
    return this.http.get(this.rootURL + "/order/" + id + "/dishes",
      {headers: new HttpHeaders({"Authorization": token})})
  }

  public putUser(user: User, token: string): Observable<any>{
    return this.http.put(this.rootURL + "user/edit", user,
      {headers: new HttpHeaders({"Authorization": token})})
  }

  public getUser(id: number, token: string): Observable<any>{
    return this.http.get(this.rootURL + "/user/" + id,
      {headers: new HttpHeaders({"Authorization": token})})
  }

  public getOrders(id: number, token: string): Observable<any>{
    return this.http.get(this.rootURL + "/user/" + id + "/orders",
      {headers: new HttpHeaders({"Authorization": token})})
  }

  public getMenu(): Observable<any>{
    return this.http.get(this.rootURL + "/menu")
  }
}
