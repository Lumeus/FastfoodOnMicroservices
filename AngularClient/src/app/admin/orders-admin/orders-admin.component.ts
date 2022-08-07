import { Component, OnInit } from '@angular/core';
import {interval, Subscription} from "rxjs";
import {AdminClientService} from "../../service/admin-client.service";
import {Order} from "../../model/order";
import {OrderDTO} from "../../model/order-dto";

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.css']
})
export class OrdersAdminComponent implements OnInit {
  orders: Order[] = []
  period: number = 10000
  subscription!: Subscription

  constructor(
    private adminClient: AdminClientService
  ) { }

  ngOnInit(): void {
    this.getOrders()
    this.subscription = interval(this.period)
      .subscribe(_ => this.getOrders())
  }

  getOrders(): void {
    this.adminClient.getOrders().subscribe(
      orders => this.orders = orders.map((dto: OrderDTO) => dto.order)
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
