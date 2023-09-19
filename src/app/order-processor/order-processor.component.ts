import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-processor',
  templateUrl: './order-processor.component.html',
  styleUrls: ['./order-processor.component.sass']
})
export class OrderProcessorComponent {
  #stockSymbol = '';

  @Input() quantity = 100;
  @Input() set stockSymbol(value: string) {
    if (value) {
      this.#stockSymbol = value;
    } else {
      this.#stockSymbol = '';
    }
  }

  get stockSymbol(): string {
    return this.#stockSymbol;
  }

}
