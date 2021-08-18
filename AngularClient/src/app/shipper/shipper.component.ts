import { Component, OnInit } from '@angular/core';
import {RedirectService} from "../service/redirect.service";

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.component.html',
  styleUrls: ['./shipper.component.css']
})
export class ShipperComponent implements OnInit {

  constructor(
    private redirect: RedirectService
  ) { }

  ngOnInit(): void {
    this.redirect.from('SHIPPER')
  }

}
