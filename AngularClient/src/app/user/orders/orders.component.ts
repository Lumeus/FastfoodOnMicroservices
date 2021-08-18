import { Component, OnInit } from '@angular/core';
import {Order} from "../../model/order";
import {UserClientService} from "../../service/user-client.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = []

  constructor(
    private userClient: UserClientService
  ) { }

  ngOnInit(): void {
    this.userClient.getOrders(
      JSON.parse(<string>localStorage.getItem('user')).id
    ).subscribe(orders => {
      this.orders = <Order[]>orders
      // this.orders[1].timeOfOrdering.
    })
  }

}
