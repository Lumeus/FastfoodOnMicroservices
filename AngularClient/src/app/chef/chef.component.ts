import {Component, OnDestroy, OnInit} from '@angular/core';
import {RedirectService} from "../service/redirect.service";
import {ChefClientService} from "../service/chef-client.service";
import {Order} from "../model/order";
import {OrderDTO} from "../model/order-dto";
import {interval, Subscription} from "rxjs";
import {AuthClientService} from "../service/auth-client.service";
import {User} from "../model/user";

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit, OnDestroy {
  orders: OrderDTO[] = []
  time: number = 1800000
  subscription!: Subscription
  show?: number
  period: number = 10000

  constructor(
    private redirect: RedirectService,
    private chefClient: ChefClientService
  ) { }

  ngOnInit(): void {
    this.redirect.from('CHEF')
    this.getOrders()
    this.subscription = interval(this.period)
      .subscribe(_ => this.getOrders())
  }

  setStatus(id: number, status: string): void{
    this.chefClient.putOrderStatus(id, status).subscribe()
  }

  getOrders() {
    this.chefClient
      .getOrders(new Date(Date.now() + this.time))
      .subscribe(orders => this.orders = orders)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
