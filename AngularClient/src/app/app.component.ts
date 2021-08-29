import { Component } from '@angular/core';
import {User} from "./model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Fastfood On Microservices';

  constructor(
    private router: Router
  ) {}

  logout(): void{
    localStorage.clear()
    this.router.navigate([''])
  }
}
