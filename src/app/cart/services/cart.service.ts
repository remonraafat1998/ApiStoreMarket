import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpC:HttpClient) { }

  cartSend(Model:any)
  {
    return this.httpC.post(environment.apiMain+'carts', Model)
  }
}
