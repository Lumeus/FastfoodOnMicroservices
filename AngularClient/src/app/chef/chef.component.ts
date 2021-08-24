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
    private chefClient: ChefClientService,
    private authClient: AuthClientService
  ) { }

  ngOnInit(): void {
    this.redirect.from('CHEF')
    console.log('ok3')
    this.chefClient
      .getOrders(new Date(Date.now() + this.time))
      .subscribe(orders => {
        console.log('ok4')
        this.orders = orders
      })
    console.log('ok1')
    this.subscription = interval(this.period).subscribe(_ => this.getOrders())

    console.log('ok2')
  }

  setStatus(id: number, status: string): void{
    this.chefClient.putOrderStatus(id, status).subscribe()
  }

  getOrders() {
    console.log('ok3')
    this.chefClient
      .getOrders(new Date(Date.now() + this.time))
      .subscribe(
        orders => {
          console.log('ok4')
          this.orders = orders
        }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
