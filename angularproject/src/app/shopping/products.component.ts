import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Product } from './models/product.models';
import { CartService } from '../shared/services/cart.service';
import { CartItem } from './models/cartitems.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  products:Product[];

  constructor(private psvc:ProductService, private csvc:CartService) { 
  }

  ngOnInit() {
    this.products = this.psvc.getProducts()
  }

  addToCart(prod:Product) {
    let item:CartItem = new CartItem(prod.id, prod.name, prod.price, 1)
    this.csvc.addCartItem(item)
  }
}
