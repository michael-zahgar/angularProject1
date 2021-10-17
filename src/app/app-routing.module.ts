
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { LoginComponent } from './login/login.component';
// kol object baymsl component
const routes: Routes = [
  {path : 'products' , component : ProductsComponent},
  {path : 'orders' , component : MyOrdersComponent},
  {path : 'admin/orders' , component : AdminOrdersComponent},
  {path : 'admin/products' , component : ProductsComponent},
  {path : 'shopping-cart' , component : ShoppingCarComponent},
  {path : 'login' , component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(router:Router) {}
}
