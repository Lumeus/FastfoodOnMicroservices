import { Component, OnInit } from '@angular/core';
import {OrderDTO} from "../../model/order-dto";
import {UserClientService} from "../../service/user-client.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.css']
})
export class OrdersDetailComponent implements OnInit {
  order!: OrderDTO

  constructor(
    private userClient: UserClientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.userClient.getOrder(params['id']).subscribe(order => {
        this.order = order
      })
    })
  }

}
