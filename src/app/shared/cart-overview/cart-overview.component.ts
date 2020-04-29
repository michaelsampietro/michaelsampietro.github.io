import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.scss']
})
export class CartOverviewComponent implements OnInit {

  cart: Cart = null;

  @Input()
  showButton = true;

  constructor(private cartService: CartService,
              private userService: UserService,
              private router: Router) {
    this.refreshCart();
  }

  ngOnInit(): void {
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

  redirect() {
    if (this.userService.isLogged()) {
      this.router.navigate(['/pagamento']);
    } else {
      sessionStorage.setItem('redirect', '/pagamento');
      this.router.navigate(['/login']);
    }
  }

  private refreshCart() {
    this.cart = this.cartService.getCart();
  }

}
