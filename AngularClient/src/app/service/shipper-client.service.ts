import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ingredient} from "../model/ingredient";

@Injectable({
  providedIn: 'root'
})
export class ShipperClientService {

  constructor(private http: HttpClient) { }

  public getIngredients(): Observable<any> {
    return this.http.get('/ingredient')
  }

  public putIngredients(ingredients: Ingredient[]): Observable<any> {
    return this.http.put('/ingredient', ingredients)
  }
}
