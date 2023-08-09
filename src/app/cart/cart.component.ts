import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, updateQuantity, removeFromCart } from '../cart.actions';
import { CartItem, cartReducer, selectCartItems } from '../cart.reducer';
import { Observable } from 'rxjs';

export interface Product {
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private store: Store) {}

   ngOnInit(): void {
    this.store.select(selectCartItems).subscribe(cartItems => {
      this.cartItems = cartItems;
    });
  }
    products: Product[] = [
    { productId: 1, name: 'Product 1', price: 10, quantity: 1 },
    { productId: 2, name: 'Product 2', price: 20, quantity: 1 },
    { productId: 3, name: 'Product 3', price: 30, quantity: 1 }
  ];


    addToCart(product: Product) {
      this.store.dispatch(addToCart({ product }));
    }

    updateQuantity(productId: number, productQuantity: number) {
      this.store.dispatch(updateQuantity({ productId, productQuantity }));
    }

    removeFromCart(productId: number) {
      this.store.dispatch(removeFromCart({ productId }));
    }
}
