import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";
import {AdminComponent} from "./admin/admin.component";
import {ChefComponent} from "./chef/chef.component";
import {UserComponent} from "./user/user.component";
import {ShipperComponent} from "./shipper/shipper.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {MenuComponent} from "./user/menu/menu.component";
import {OrdersComponent} from "./user/orders/orders.component";
import {AccountComponent} from "./user/account/account.component";
import {CartComponent} from "./user/cart/cart.component";
import {AccountEditComponent} from "./user/account-edit/account-edit.component";
import {OrderDetailComponent} from "./admin/order-detail/order-detail.component";
import {OrdersDetailComponent} from "./user/orders-detail/orders-detail.component";
import {CartOrderingComponent} from "./user/cart-ordering/cart-ordering.component";
import {OrdersAdminComponent} from "./admin/orders-admin/orders-admin.component";
import {UsersComponent} from "./admin/users/users.component";
import {OrdersUserComponent} from "./admin/orders-user/orders-user.component";
import {RegisterAdminComponent} from "./admin/register-admin/register-admin.component";

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
    component: AdminComponent,
    children: [
      {
        path: "user",
        component: UserComponent,
        children: [
          {path: "", redirectTo: "menu", pathMatch: "full"},
          {path: "menu", component: MenuComponent},
          {path: "account", component: AccountComponent},
          {path: "cart", component: CartComponent},
          {path: "cart/ordering", component: CartOrderingComponent},
          {path: "orders", component: OrdersComponent},
          {path: "account/edit", component: AccountEditComponent},
          {path: "orders/:id", component: OrdersDetailComponent}
        ]
      },
      {
        path: "auth",
        component: AuthComponent,
        children: [
          {path: "", redirectTo: "login", pathMatch: "full"},
          {path: "login", component: LoginComponent},
          {path: "register", component: RegisterComponent}
        ]
      },
      {path: "shipper", component: ShipperComponent},
      {path: "chef", component: ChefComponent},
      {path: "register", component: RegisterAdminComponent},
      {path: "orders", component: OrdersAdminComponent},
      {path: "users", component: UsersComponent},
      {path: "orders/:id", component: OrdersDetailComponent},
      {path: "users/:id", component: OrdersUserComponent},
      {path: "users/:user/:id", component: OrdersDetailComponent},
    ]
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
      {path: "cart/ordering", component: CartOrderingComponent},
      {path: "orders", component: OrdersComponent},
      {path: "account/edit", component: AccountEditComponent},
      {path: "orders/:id", component: OrdersDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
