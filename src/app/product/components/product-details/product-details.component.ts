import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import {faMinus,faPlus } from '@fortawesome/free-solid-svg-icons'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit,OnDestroy {
  faMinus = faMinus
  faPlus = faPlus
   id:any
   data:any = {
    item: {},
    quantity: 1
  }

   SamArr:any[] = []
   loading:boolean = false
   amount:number = 1

   popUp:boolean = false

   popDown:number = 3
   unProdDetail?:Subscription
  constructor(private routActive:ActivatedRoute,private prodS:ProductService) {
    this.id = this.routActive.snapshot.paramMap.get("id")

  }

  ngOnInit(): void {
    this.getProductDetail()

  }
 getProductDetail()
 {
  this.loading = true
 this.unProdDetail = this.prodS.getSingleProduct(this.id).subscribe((result)=> {
    this.data.quantity = this.amount
    this.data.item = result
   this.loading = false
  })
 }

 minus()
 {
  this.data.quantity--
 }
 plus()
 {
  this.data.quantity++
 }

 addToCart()
 {
if('__cart' in localStorage)
{
  this.SamArr = JSON.parse(localStorage.getItem('__cart')!)
  let exit = this.SamArr.find(prod=> prod.item.id == this.data.item.id)
  if(exit)
  {
    alert('Already Selected')
  }else
  {
    this.SamArr.push(this.data)
    localStorage.setItem('__cart',JSON.stringify(this.SamArr))
    this.popUpFun()
  }
}else
{
  this.SamArr.push(this.data)
  localStorage.setItem('__cart',JSON.stringify(this.SamArr))
  this.popUpFun()
}
}
popUpFun()
{
  setTimeout(()=> {
    this.popUp = true
    setTimeout(()=> {
      location.reload()
    }, 2000)
  },500)
}

ngOnDestroy(): void {
  this.unProdDetail?.unsubscribe()
}
}
