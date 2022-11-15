import { Component, OnInit } from '@angular/core';
import {faSearch,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch
  faShoppingCart = faShoppingCart
  ArrPrice:any[] = []
  total = 0
  cartEmpty:String = ''

  constructor() { }

  ngOnInit(): void {
    this.geTotalPrice();


  }


 geTotalPrice()
 {
  if('__cart' in localStorage)
  {
  this.ArrPrice = JSON.parse(localStorage.getItem('__cart')!)
   for (let x in this.ArrPrice)
   {
    this.total += this.ArrPrice[x].item.price * this.ArrPrice[x].quantity
   }
  }else
  {
  this.cartEmpty = '0'
  }
 }
}
