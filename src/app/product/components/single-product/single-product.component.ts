import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  faCartShopping = faCartShopping
  @Input() data:any = []
  @Output() item = new EventEmitter()
 random:number =  Math.floor(Math.random() * 500);
 amount:number = 1
  constructor() { }
  ngOnInit(): void {
  }
 add()
 {
  this.item.emit({item:this.data , quantity: this.amount})
 }
}
