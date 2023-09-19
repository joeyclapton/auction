import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OrderProcessorComponent } from './order-processor/order-processor.component';
import { PriceQuoterComponent } from './price-quoter/price-quoter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderProcessorComponent,
    PriceQuoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
