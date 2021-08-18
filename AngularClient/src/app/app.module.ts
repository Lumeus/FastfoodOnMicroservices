import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ChefComponent } from './chef/chef.component';
import { ShipperComponent } from './shipper/shipper.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AccountComponent } from './user/account/account.component';
import { MenuComponent } from './user/menu/menu.component';
import { OrdersComponent } from './user/orders/orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CartComponent } from './user/cart/cart.component';
import { UsersComponent } from './users/users.component';
import { OrdersAdminComponent } from './orders-admin/orders-admin.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BaseUrlInterceptor} from "./base-url.interceptor";
import { AccountEditComponent } from './user/account-edit/account-edit.component';
import { OrdersDetailComponent } from './user/orders-detail/orders-detail.component';

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
    IngredientsComponent,
    AccountEditComponent,
    OrdersDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
