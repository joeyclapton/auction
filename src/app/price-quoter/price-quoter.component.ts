import { Component, EventEmitter, Output } from '@angular/core';
import { IPriceQuote } from '../interfaces/iprice.quote'
import { interval } from 'rxjs';

@Component({
  selector: 'app-price-quoter',
  templateUrl: './price-quoter.component.html',
  styleUrls: ['./price-quoter.component.sass']
})
export class PriceQuoterComponent {
  priceQuote!: IPriceQuote;

  @Output() lastPrice = new EventEmitter<IPriceQuote>();

  constructor() {
    interval(2000).subscribe(data => {
      this.priceQuote = {
        stockSymbol: 'Meta',
        lastPrice: 100 * Math.random()
      }
    })

  }
} 
