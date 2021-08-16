import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ChefComponent } from './chef/chef.component';
import { ShipperComponent } from './shipper/shipper.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CartComponent } from './cart/cart.component';
import { UsersComponent } from './users/users.component';
import { OrdersAdminComponent } from './orders-admin/orders-admin.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ChefComponent,
    ShipperComponent,
    AdminComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    MenuComponent,
    OrdersComponent,
    OrderDetailComponent,
    CartComponent,
    UsersComponent,
    OrdersAdminComponent,
    IngredientsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
