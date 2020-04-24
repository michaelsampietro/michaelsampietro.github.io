import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/models/cart';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  displayedColumns = ['thumbnail', 'name', 'quantity', 'price'];
  cart: Cart = null;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
  }

  addOne(element: Product) {
    this.cartService.add(element, element.quantity + 1, true);
    this.refreshCart();
  }

  removeOne(element: Product) {
    this.cartService.add(element, element.quantity - 1, true);
    this.refreshCart();
  }

  delete(product: Product) {
    this.cartService.remove(product);
    this.refreshCart();
  }

  private refreshCart() {
    this.cart = this.cartService.getCart();
  }

}
