import { Component, OnInit } from '@angular/core';
import {RedirectService} from "../service/redirect.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private redirect: RedirectService
  ) { }

  ngOnInit(): void {
    this.redirect.from('ADMIN')
  }

}
