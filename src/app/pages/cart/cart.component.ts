import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/models/cart';
import { Product } from 'src/models/product';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  displayedColumns = ['thumbnail', 'name', 'quantity', 'price'];
  cart: Cart = null;

  constructor(
    private cartService: CartService,
    private userService: UserService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void { }

  addOne(element: Product) {
    this.cartService.add(element, element.quantity + 1, true);
    this.refreshCart();
  }

  removeOne(element: Product) {
    this.cartService.add(element, element.quantity - 1, true);
    this.refreshCart();
  }

  async delete(product: Product) {
    await this.cartService.remove(product);
    this.refreshCart();
  }

  redirect() {
    if (this.userService.isLogged()) {
      this.router.navigate(['/pagamento']);
    } else {
      sessionStorage.setItem('redirect', '/pagamento');
      this.router.navigate(['/login']);
    }
  }

  getPrice(): number {
    let totalPrice = 0;
    this.cart.products.map( (product) => {
      totalPrice += product.price * product.quantity;
    });

    return totalPrice;
  }

  cartTotal(): number {
    return this.getPrice() + this.cart.shipping;
  }

  private refreshCart() {
    this.cart = this.cartService.getCart();
  }
}
