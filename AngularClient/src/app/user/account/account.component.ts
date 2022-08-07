import { Component, OnInit } from '@angular/core';
import {ActivationStart, Router} from "@angular/router";
import {User} from "../../model/user";
import {UserClientService} from "../../service/user-client.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user!: User;

  constructor(
    private userClient: UserClientService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(<string>localStorage.getItem('user'))
  }

}
