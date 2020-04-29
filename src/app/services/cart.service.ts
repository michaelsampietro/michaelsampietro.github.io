import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';
import { Cart } from 'src/models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = null;
  constructor() {
    this.cart = this.getCart();
  }

  add(product: Product, quantity: number, update: boolean = false) {
    const productIsOnCart = this.cart.products.some(p => p.id === product.id);

    if (!productIsOnCart) {
      this.cart.products.push(product);
      this.updateCartOnStorage(this.cart);
    } else if (update) {
      const index = this.cart.products.findIndex(f => f.id === product.id);
      this.cart.products[index].quantity = quantity;
      this.updateCartOnStorage(this.cart);
    } else if (!update) {
      alert('Esse produto já está adicionado ao carrinho!');
    }
  }

  remove(product: Product) {
    const index = this.cart.products.findIndex(f => f.id === product.id);
    this.cart.products.splice(index);
    this.updateCartOnStorage(this.cart);
  }

  // Como não tenho backend, estou fazendo um controle apenas usando o localstorage.
  getCart(): Cart {
    const cart = JSON.parse(localStorage.getItem('cart')) as Cart;
    return cart ? cart : this.createCart();
  }

  private createCart(): Cart {
    const cart = {
      id: new Date().getTime(),
      products: [],
      shipping: 10
    };

    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
  }

  private updateCartOnStorage(cart: Cart): Cart {
    this.cart = cart;
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
  }

}
