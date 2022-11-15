import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpC:HttpClient) { }

  getAllProduct()
  {
    return this.httpC.get(environment.apiMain + 'products')
  }
  getSingleProduct(id:any)
  {
    return this.httpC.get(environment.apiMain+ 'products/'+ id)
  }
  getAllCategory()
  {
    return this.httpC.get(environment.apiMain+ 'products/categories')
  }
  getSpecificgategory(key:any)
  {
    return this.httpC.get(environment.apiMain + 'products/category/'+ key)
  }
}
