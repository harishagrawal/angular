import { NgModule } from "@angular/core";
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';
import { CommonModule } from "@angular/common";

@NgModule({

  declarations: [ProductsComponent, CartitemsComponent],
  exports: [ProductsComponent, CartitemsComponent],
  imports: [ CommonModule ],
})
export class ShoppingModule{
    constructor() {
        console.log("Shopping Module constructor")
    }
}