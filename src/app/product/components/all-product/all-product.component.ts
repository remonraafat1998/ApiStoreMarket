import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../interface/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit,OnDestroy {
  AllProducts:Product[] = []
  AllCategories:any[] = []
  SetToCart:any[] = []
  Loading:boolean = false
  popUp:boolean = false
  UnSubAllCateg?:Subscription
  unSpisificCateg?:Subscription
  unAllProd?:Subscription

  constructor(private productServ:ProductService) { }

  ngOnInit(): void {
    this.getAllCategory()
    this.getAllProduct()

  }


  // get All Category
  getAllCategory()
  {
    this.Loading = true
    this.UnSubAllCateg = this.productServ.getAllCategory().subscribe((resCateg:any)=> {
     this.AllCategories = resCateg
     this.Loading = false
    })
  }
  // get Specific Category
  SpecificCategory(key:any)
  {
    this.Loading = true
 this.unSpisificCateg = this.productServ.getSpecificgategory(key).subscribe((resSp:any)=> {
    this.AllProducts = resSp
    this.Loading = false
  })
  }
  // filter Product
  changeFilter(event:any)
  {
   let CurrentValue = event.target.value;
   (CurrentValue == "all"? this.getAllProduct():this.SpecificCategory(CurrentValue))
  }
//  get All Product
getAllProduct()
{
  this.Loading = true
 this.unAllProd = this.productServ.getAllProduct().subscribe((res:any)=> {
    this.AllProducts = res
    this.Loading = false
  })
}
// add information to LocalStorage To get Cart from
addInfCart(event:any)
{
  if('__cart' in localStorage)
  {
   this.SetToCart = JSON.parse(localStorage.getItem('__cart')!)
   let exit = this.SetToCart.find(id=> id.item.id == event.item.id)
   if(exit){
    alert('already Selected')
   }else
   {
    this.SetToCart.push(event)
    localStorage.setItem('__cart', JSON.stringify(this.SetToCart))
    this.coundDown()
   }
  }else{
    this.SetToCart.push(event)
    localStorage.setItem('__cart', JSON.stringify(this.SetToCart))
    this.coundDown()
  }
}
coundDown() {
 this.popUp = true
}

ngOnDestroy(): void {
  this.UnSubAllCateg?.unsubscribe()
  this.unSpisificCateg?.unsubscribe()
  this.unAllProd?.unsubscribe()
}
}
