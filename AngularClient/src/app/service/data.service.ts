import { Injectable } from '@angular/core';
import {flatMap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: { [x: string]: any; } = {}

  constructor() { }

  set(key: string, val: any): void{
    this.data[key] = val
  }

  get(key: string): any{
    return this.data[key]
  }
}
