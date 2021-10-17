import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ShoppingCarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [NgbPaginationModule, NgbAlertModule , NgbModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
