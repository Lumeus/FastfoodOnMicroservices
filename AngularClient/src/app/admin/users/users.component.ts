import { Component, OnInit } from '@angular/core';
import {interval, Subscription} from "rxjs";
import {User} from "../../model/user";
import {AdminClientService} from "../../service/admin-client.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = []
  period: number = 10000
  subscription!: Subscription

  constructor(
    private adminClient: AdminClientService
  ) { }

  ngOnInit(): void {
    this.getUsers()
    this.subscription = interval(this.period)
      .subscribe(_ => this.getUsers())
  }

  getUsers(): void {
    this.adminClient.getUsers().subscribe(
      users => this.users = users
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  userSort(a: User, b: User): number {
    return a.id - b.id
  }
}
