import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OrderProcessorComponent } from './order-processor/order-processor.component';
import { PriceQuoterComponent } from './price-quoter/price-quoter.component';
import { ProductsComponent } from './products/products.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { PreventActionDirective } from './shared/directives/prevent-action.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderProcessorComponent,
    PriceQuoterComponent,
    ProductsComponent,
    HighlightDirective,
    PreventActionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
