import { Component, Input } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent {

  @Input() products: Array<IProduct> = [];

}
