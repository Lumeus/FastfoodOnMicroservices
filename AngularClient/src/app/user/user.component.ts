import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RedirectService} from "../service/redirect.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private redirect: RedirectService
  ) { }

  ngOnInit(): void {
    this.redirect.from('USER')
  }

}
