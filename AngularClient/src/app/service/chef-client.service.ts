import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChefClientService {

  constructor(private http: HttpClient) { }

  public getOrders(time: Date): Observable<any>{
    return this.http.get(
      "/order/complete/before/" +
      time.toISOString().split('T').join(' ').slice(0, -5)
      // time.getFullYear() + "-" +
      // time.getUTCMonth() + "-" +
      // time.getUTCDay() + " " +
      // time.getHours() + ":" +
      // time.getMinutes()
    )
  }

  public putOrderStatus(id: number, status: string): Observable<any>{
    return this.http.put("/order/" + id, status)
  }
}
