import { NgModule } from "@angular/core";
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';

@NgModule({

  declarations: [ProductsComponent, CartitemsComponent],
  exports: [ProductsComponent, CartitemsComponent]
})
export class ShoppingModule{
    constructor() {
        console.log("Shopping Module constructor")
    }
}