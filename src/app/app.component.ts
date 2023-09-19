import { Component } from '@angular/core';
import { IPriceQuote } from './interfaces/iprice.quote';

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

  onChangeEvent({ target }: any) {
    this.stock = target.value
  }

  priceQuoteHandler(event: IPriceQuote) {
    this.priceQuote = event;
  }
}
