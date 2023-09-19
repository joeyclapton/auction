import { Component, EventEmitter, Output, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { IPriceQuote } from '../interfaces/iprice.quote';
import { interval } from 'rxjs';

@Component({
  selector: 'app-price-quoter',
  templateUrl: './price-quoter.component.html',
  styleUrls: ['./price-quoter.component.sass']
})
export class PriceQuoterComponent implements OnChanges {
  priceQuote: IPriceQuote = {
    stockSymbol: '',
    lastPrice: 0
  };

  @Output() lastPrice = new EventEmitter<IPriceQuote>();
  @Input() eventType = '';

  constructor(private element: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventType']) {
      this.initializeEventHandler();
    }
  }

  initializeEventHandler() {
    if (this.eventType === 'bubbling') {
      this.bubblingEventHandler();
    } else if (this.eventType === 'emitter') {
      this.emitterEventHandler();
    }
  }

  emitterEventHandler() {
    interval(2000).subscribe(data => {
      this.priceQuote = {
        stockSymbol: 'Meta 🔵',
        lastPrice: 100 * Math.random()
      };
      this.lastPrice.emit(this.priceQuote);
    });
  }

  bubblingEventHandler() {
    setInterval(() => {
      const value: IPriceQuote = {
        stockSymbol: 'Apple 🍎',
        lastPrice: 100 * Math.random()
      };
      this.priceQuote = value;

      this.element.nativeElement.dispatchEvent(
        new CustomEvent('lastPrice', {
          detail: this.priceQuote,
          bubbles: true,
        })
      );
    }, 1000);
  }
}
