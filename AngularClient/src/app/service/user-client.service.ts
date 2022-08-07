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

  constructor(private http: HttpClient) {}

  public postOrder(order: OrderDTO): Observable<any>{
    return this.http.post("/order/new", order)
  }

  public getOrder(id: number): Observable<any>{
    return this.http.get("/order/" + id)
  }

  public getDishes(id: number): Observable<any>{
    return this.http.get("/order/" + id + "/dishes")
  }

  public putUser(user: User): Observable<any>{
    return this.http.put("/user/edit", user)
  }

  public getUser(id: number): Observable<any>{
    return this.http.get("/user/" + id)
  }

  public getOrders(id: number): Observable<any>{
    return this.http.get("/user/" + id + "/orders")
  }

  public getMenu(): Observable<any>{
    return this.http.get("/menu")
  }
}
