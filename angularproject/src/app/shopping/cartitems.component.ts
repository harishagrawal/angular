import { Component, OnInit } from '@angular/core';
import { CartItem } from './models/cartitems.model';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styles: []
})
export class CartitemsComponent implements OnInit {
  cartItems:CartItem[] = []

  constructor(private csvc:CartService) { }

  ngOnInit() {
    this.cartItems = this.csvc.getCartItems()
  }

  delete(i:number){
    this.csvc.deleteCartItem(i)
  }

  getCartTotal():number{
    let total:number = 0;
    for (let item of this.cartItems){
        total += (item.price * item.qty)
    }
    return total
  }
}
