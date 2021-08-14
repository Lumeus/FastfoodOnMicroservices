import {Order} from "./order";
import {Dish} from "./dish";

export interface OrderDTO{
  order: Order
  dishes: Dish[]
}
