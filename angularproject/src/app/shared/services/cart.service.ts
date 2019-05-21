import { Injectable } from '@angular/core';
import { CartItem } from "../../shopping/models/cartitems.model";

@Injectable()
export class CartService {
  private cartData:CartItem[] = [];

  // constructor() { }
  getCartItems() {
    return this.cartData;
  }

  addCartItem(newItem:CartItem) {
    this.cartData.push(newItem)
  }

  deleteCartItem(pos:number) {
    // remove 1 element at index pos
    this.cartData.splice(pos, 1)
  }
}
