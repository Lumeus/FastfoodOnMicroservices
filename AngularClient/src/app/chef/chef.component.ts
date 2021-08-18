import { Component, OnInit } from '@angular/core';
import {RedirectService} from "../service/redirect.service";

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  constructor(
    private redirect: RedirectService
  ) { }

  ngOnInit(): void {
    this.redirect.from('CHEF')
  }

}
