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
import { OrderDetailComponent } from './admin/order-detail/order-detail.component';
import { CartComponent } from './user/cart/cart.component';
import { UsersComponent } from './admin/users/users.component';
import { OrdersAdminComponent } from './admin/orders-admin/orders-admin.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BaseUrlInterceptor } from "./base-url.interceptor";
import { AccountEditComponent } from './user/account-edit/account-edit.component';
import { OrdersDetailComponent } from './user/orders-detail/orders-detail.component';
import { CartOrderingComponent } from './user/cart-ordering/cart-ordering.component';
import { OrdersUserComponent } from './admin/orders-user/orders-user.component';
import { RegisterAdminComponent } from './admin/register-admin/register-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";

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
    AccountEditComponent,
    OrdersDetailComponent,
    CartOrderingComponent,
    OrdersUserComponent,
    RegisterAdminComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
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
