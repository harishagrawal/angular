import { NgModule } from "@angular/core";
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';
import { CommonModule } from "@angular/common";
import {FormsModule} from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import {RouterModule} from "@angular/router"
import { CategoryComponent } from "./category/category.component";
import { LoginGuard } from '../shared/services/login.guard';

@NgModule({

  declarations: [ProductsComponent, CartitemsComponent, CategoryComponent],
  exports: [ProductsComponent, CartitemsComponent, CategoryComponent],
  imports: [ CommonModule, FormsModule, SharedModule, 
    RouterModule.forChild([{path:"categories",component: CategoryComponent, canActivate: [LoginGuard]}]) ],
})
export class ShoppingModule{
    constructor() {
        console.log("Shopping Module constructor")
    }
}