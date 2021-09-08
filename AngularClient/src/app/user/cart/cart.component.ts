import { Component, OnInit } from '@angular/core';
import {Dish} from "../../model/dish";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: Dish[]

  constructor(
    private router: Router,
    private rout: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cart = JSON.parse(<string>localStorage.getItem('cart'))
  }

  deleteFromCart(index: number): void{
    this.cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(this.cart))
    this.cart = JSON.parse(<string>localStorage.getItem('cart'))//bag fix
  }

  ordering(): void{
    this.router.navigate(['ordering'], {relativeTo: this.rout})
  }

}
