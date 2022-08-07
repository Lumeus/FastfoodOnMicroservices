import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(
    private router: Router
  ) { }

  from(component: string): void{
    let user = localStorage.getItem('user')
    if(user === null){
      this.router.navigate([''])
    } else {
      let role = JSON.parse(user).role
      switch (role) {
        case component:
        case 'ADMIN':
          break
        case 'USER':
        case 'CHEF':
        case 'SHIPPER':
          this.router.navigate([role.toLowerCase()])
          break
        default:
          this.router.navigate([''])
      }
    }

  }
}
