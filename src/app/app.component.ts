import { Component } from '@angular/core';
import { IPriceQuote } from './interfaces/iprice.quote';
import { ProductService } from './shared/product/product.service';
import { IProduct } from './interfaces/iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'auction';
  stock: string = '';
  readonly numberOfShares = 100;
  priceQuote!: IPriceQuote;
  products: Array<IProduct> = [];
  birthday = new Date(2000, 0, 30)

  constructor(productService: ProductService) {
    this.products = productService.getAll();
  }

  onChangeEvent({ target }: any) {
    this.stock = target.value
  }

  priceQuoteHandler(event: IPriceQuote) {
    this.priceQuote = event;
  }
}
