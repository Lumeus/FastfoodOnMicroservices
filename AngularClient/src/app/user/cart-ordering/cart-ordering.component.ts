import { Component, OnInit } from '@angular/core';
import {Order} from "../../model/order";
import {Dish} from "../../model/dish";
import {User} from "../../model/user";
import {OrderDTO} from "../../model/order-dto";
import {DatePipe} from "@angular/common";
import {UserClientService} from "../../service/user-client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-ordering',
  templateUrl: './cart-ordering.component.html',
  styleUrls: ['./cart-ordering.component.css']
})
export class CartOrderingComponent implements OnInit {
  order: OrderDTO = {
    order: {
      completionTime: new Date(),
      id: 0,
      price: 0,
      status: "",
      timeOfOrdering: new Date(),
      user: 0
    },
    dishes: []
  }

  now: boolean = true

  minTime: string = ''

  completionTime: string = ''

  constructor(
    private userClient: UserClientService,
    private router: Router
  ) {
    this.order.dishes = <Dish[]>JSON.parse(<string>localStorage.getItem('cart'))
    this.order.dishes.forEach(dish => {
      this.order.order.price += dish.cost
    })
    this.order.order.user = (<User>JSON.parse(<string>localStorage.getItem('user'))).id
    this.minTime = new Date(Date.now() - (new Date().getTimezoneOffset() - 30) * 60000).toISOString().slice(0, 16)
    this.completionTime = this.minTime
  }

  ngOnInit(): void {
  }

  ordering(): void {
    this.order.order.timeOfOrdering.setTime(Date.now())
    this.order.order.completionTime.setTime(Date.parse(this.completionTime))
    this.userClient.postOrder(this.order).subscribe(order => {
      this.router.navigate(["orders", order.order.id])
    })
  }

}
