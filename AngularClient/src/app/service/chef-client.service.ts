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
    )
  }

  public putOrderStatus(id: number, status: string): Observable<any>{
    return this.http.put("/order/" + id, status)
  }
}
