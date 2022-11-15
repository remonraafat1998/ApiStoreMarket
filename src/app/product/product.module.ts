import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductComponent } from './components/all-product/all-product.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AllProductComponent,
    SingleProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [
      AllProductComponent
  ]
})
export class ProductModule { }
