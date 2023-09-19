import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'auction';
  stock: string = '';
  readonly numberOfShares = 100;

  onChangeEvent({ target }: any) {
    this.stock = target.value
  }
}
