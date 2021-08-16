import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";
import {AdminComponent} from "./admin/admin.component";
import {ChefComponent} from "./chef/chef.component";
import {UserComponent} from "./user/user.component";
import {ShipperComponent} from "./shipper/shipper.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {MenuComponent} from "./menu/menu.component";
import {OrdersComponent} from "./orders/orders.component";
import {AccountComponent} from "./account/account.component";
import {CartComponent} from "./cart/cart.component";

const routs: Routes = [
  {path: "", redirectTo: "auth", pathMatch: "full" },
  {
    path: "auth",
    component: AuthComponent,
    children: [
      {path: "", redirectTo: "login", pathMatch: "full"},
      {path: "login", component: LoginComponent},
      {path: "register", component: RegisterComponent}
    ]
  },
  {
    path: "admin",
    component: AdminComponent
    // children: [
    //   {path: "", redirectTo: "login", pathMatch: "full"},
    //   {path: "login", component: LoginComponent},
    //   {path: "register", component: RegisterComponent}
    // ]
  },
  {
    path: "shipper", component: ShipperComponent
  },
  {
    path: "chef", component: ChefComponent
  },
  {
    path: "user",
    component: UserComponent,
    children: [
      {path: "", redirectTo: "menu", pathMatch: "full"},
      {path: "menu", component: MenuComponent},
      {path: "account", component: AccountComponent},
      {path: "cart", component: CartComponent},
      {path: "orders", component: OrdersComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }