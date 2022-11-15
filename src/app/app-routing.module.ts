import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './cart/components/carts/carts.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product/components/product-details/product-details.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cart',component: CartsComponent},
  {path:'product/:id',component: ProductDetailsComponent},
  {path:'**', redirectTo: '',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
