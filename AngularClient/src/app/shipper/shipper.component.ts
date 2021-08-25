import { Component, OnInit } from '@angular/core';
import {RedirectService} from "../service/redirect.service";
import {ShipperClientService} from "../service/shipper-client.service";
import {Ingredient} from "../model/ingredient";
import {concat, interval, Subscription} from "rxjs";

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.component.html',
  styleUrls: ['./shipper.component.css']
})
export class ShipperComponent implements OnInit {
  ingredients: Ingredient[] = []
  addiction: number[] = []
  // new: Ingredient[] = []
  period: number = 10000
  subscription!: Subscription

  constructor(
    private redirect: RedirectService,
    private shipperClient: ShipperClientService
  ) { }

  ngOnInit(): void {
    this.redirect.from('SHIPPER')
    this.getIngredients()
    this.subscription = interval(this.period)
      .subscribe(_ => this.getIngredients())
  }

  getIngredients(): void {
    this.shipperClient.getIngredients().subscribe(
      ingredients => this.ingredients = ingredients
    )
  }

  putIngredients() {
    // let id = this.ingredients.map(ingredient => ingredient.id).reduce((prev, curr) => {
    //   return prev > curr ? prev : curr;
    // })
    // this.new.forEach(ingredient => {
    //   ingredient.id = ++id
    // })
    // this.ingredients.forEach((ingredient, index) => {
    //   ingredient.amount = this.addiction[index]
    // })
    this.shipperClient.putIngredients(
      this.ingredients.map((ingredient, index) => {
        let amount = this.addiction[index]
        let ingr: Ingredient = new class implements Ingredient {
          id: number = ingredient.id
          name: string = ingredient.name
          measure: string = ingredient.measure
          amount: number = amount
        }
        return ingr
      })/*.concat(this.new)*/)
      .subscribe(_ => {
        this.getIngredients()
        this.addiction = []
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
