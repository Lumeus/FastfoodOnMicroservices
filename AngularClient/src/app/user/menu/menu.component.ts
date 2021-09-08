import { Component, OnInit } from '@angular/core';
import {DishDTO} from "../../model/dish-dto";
import {UserClientService} from "../../service/user-client.service";
import {Dish} from "../../model/dish";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: DishDTO[] = []

  constructor(
    private userClient: UserClientService
  ) { }

  ngOnInit(): void {
    this.userClient.getMenu().subscribe(menu => {
      this.menu = menu
    })
  }

  addToCart(dishDTO: DishDTO): void{
    let dish: Dish = {
      id: 0,
      order: 0,
      name: dishDTO.name,
      cost: dishDTO.cost,
      info: dishDTO.info,
      dishId: dishDTO.id
    }
    let cart = localStorage.getItem('cart')
    if (cart === null){
      cart = JSON.stringify([dish])
    } else {
      let dishes = <Dish[]>JSON.parse(cart)
      dishes.push(dish)
      cart = JSON.stringify(dishes)
    }
    localStorage.setItem('cart', cart)
  }

}
