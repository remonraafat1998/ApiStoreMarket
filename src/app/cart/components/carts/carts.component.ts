import { Component, OnDestroy, OnInit } from '@angular/core';
import {faMinus,faPlus } from '@fortawesome/free-solid-svg-icons'
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit,OnDestroy {
  faMinus =faMinus
  faPlus = faPlus
  cartProducts:any[] = []
  cartEmpty:string = ''
  disb:boolean = false
  Loading:boolean= false
  LoadingSec:boolean= false
  successSendCart:string = ''
  total = 0
  unSubScripCartServ?:Subscription

  constructor(private cartServ:CartService) { }

  ngOnInit(): void {
    this.getCart()
    this.totalPrice()
    console.log(this.cartProducts)
  }
  // get All Of Cart
  getCart()
  {
    this.Loading = true
    if('__cart' in localStorage)
    {
      this.totalPrice()
      this.cartProducts = JSON.parse(localStorage.getItem('__cart')!)
      this.Loading = false
    }else if (this.cartProducts = [])
    {
      this.cartEmpty = "You Shopping Cart is Empty"
      this.disb = true
    }else
    {
      this.cartEmpty = "You Shopping Cart is Empty"
      this.disb = true
    }
  }

  // quantity
  minus(index:any)
  {
    this.cartProducts[index].quantity--
    this.totalPrice()
    localStorage.setItem('__cart',JSON.stringify(this.cartProducts))
  }
  plus(index:any)
  {
    this.cartProducts[index].quantity++;
    this.totalPrice()
    localStorage.setItem('__cart',JSON.stringify(this.cartProducts))
  }
  detectnumber()
  {
    this.totalPrice()
    localStorage.setItem('__cart',JSON.stringify(this.cartProducts))
  }
  totalPrice()
  {
    this.Loading = true
    for(let x in this.cartProducts)
    {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
      localStorage.setItem('__cart',JSON.stringify(this.cartProducts))
      this.Loading = false
    }
  }
  // deleteSingleCart
  deleteSingleCart(index:any)
  {
    this.Loading = true
     this.cartProducts.splice(index,1)
     localStorage.setItem('__cart',JSON.stringify(this.cartProducts))
     this.Loading = false
     this.totalPrice()
  }
  // Order Now
  OrderNow()
  {
    let cartInfo = this.cartProducts.map((ele)=> {
      return {
        productId: ele.item.id,
        quantity: ele.quantity
      }
    })
    let Modal = {
      userId: 5 ,
      date: new Date(),
      product: cartInfo
    }
    this.LoadingSec = true
    this.cartServ.cartSend(Modal).subscribe((res)=> {
      console.log('Succed'+ JSON.stringify(res))
      this.successSendCart = "Done"
      this.LoadingSec= false
      console.log("Succed")
    })
  }
  ngOnDestroy(): void {
   this.unSubScripCartServ?.unsubscribe()
  }
}
