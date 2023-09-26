import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<IProduct> = []

  constructor() {
    this.createProducts()
  }

  private createProducts() {
    this.products.push({
      id: 0,
      name: 'Iphone 12'
    }, {
      id: 1,
      name: 'Macbook Air M1 2020'
    })
  }

  getAll(): Array<IProduct> {
    return this.products
  }
}
