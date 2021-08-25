import { Component, OnInit } from '@angular/core';
import {Order} from "../../model/order";
import {interval, Subscription} from "rxjs";
import {AdminClientService} from "../../service/admin-client.service";
import {OrderDTO} from "../../model/order-dto";
import {UserClientService} from "../../service/user-client.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders-user',
  templateUrl: './orders-user.component.html',
  styleUrls: ['./orders-user.component.css']
})
export class OrdersUserComponent implements OnInit {
  id!: number
  orders: Order[] = []
  period: number = 10000
  subscription!: Subscription

  constructor(
    private route: ActivatedRoute,
    private userClient: UserClientService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
    this.getOrders()
    this.subscription = interval(this.period)
      .subscribe(_ => this.getOrders())
  }

  getOrders(): void {
    this.userClient.getOrders(this.id).subscribe(
      orders => this.orders = orders//.map((dto: OrderDTO) => dto.order)
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
