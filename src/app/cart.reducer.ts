import { createReducer, on } from '@ngrx/store';
import { addToCart, updateQuantity, removeFromCart } from './cart.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';


export interface Product {
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

// The product 
export interface CartItem {
  product: Product;
  productQuantity: number;
}

// The shopping cart
export interface CartState {
  items: CartItem[];
}

// initial shopping cart state
export const initialState: CartState = {
  items: []
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, {product}) => {
    return {
      ...state,
      items: [...state.items, {product, productQuantity: 1}]
    }
  }),
  on(removeFromCart, (state, {productId}) => {
    return {
      ...state,
      items: state.items.filter(item => item.product.productId !== productId)
    };
  }),
  on(updateQuantity, (state, {productId, productQuantity}) => {
    return {
      ...state,
      items: state.items.map(item =>
        item.product.productId === productId ? { ...item, productQuantity:productQuantity } : item
      )
    }
  })
);

// export const selectCartItems = (state: CartState) => state.items;

export const selectCartState = createFeatureSelector<CartState>('cart');// 'cart' is the name in app.module.ts

export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);