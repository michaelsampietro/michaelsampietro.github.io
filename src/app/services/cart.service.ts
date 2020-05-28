import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';
import { Cart } from 'src/models/cart';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from './alert/alert.service';
import { AlertTypes } from './alert/alert-types.enum';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = null;
  constructor(private alertService: AlertService,
              private snackBar: MatSnackBar) {
    this.cart = this.getCart();
  }

  add(product: Product, quantity: number, update: boolean = false) {
    const productIsOnCart = this.cart.products.some(p => p.id === product.id);

    if (!productIsOnCart) {
      this.cart.products.push(product);
      this.updateCartOnStorage(this.cart);
      this.snackBar.open('Sucesso! O produto foi adicionado ao carrinho.', '', {
        duration: 2000,
        horizontalPosition: 'left',
        verticalPosition: 'bottom',
        panelClass: ['bg-success', 'text-white', 'font-weight-bold']
      });
    } else if (update) {
      const index = this.cart.products.findIndex(f => f.id === product.id);
      this.cart.products[index].quantity = quantity;
      this.updateCartOnStorage(this.cart);
    } else {
      this.snackBar.open('O produto já está no carrinho.', '', {
        duration: 2000,
        horizontalPosition: 'left',
        verticalPosition: 'bottom',
        panelClass: ['bg-warning', 'text-dark', 'font-weight-bold']
      });
    }
  }

  async remove(product: Product) {
    const dialog = this.alertService.show({
      title: 'Tem certeza?',
      message: 'Essa ação não pode ser desfeita.',
      type: AlertTypes.warning,
      showButtons: true
    });

    await dialog.afterClosed().toPromise().then(close => {
      if (close) {
        const index = this.cart.products.findIndex(f => f.id === product.id);
        this.cart.products.splice(index);
        this.updateCartOnStorage(this.cart);
      }
    });
  }

  total(): number {
    const cart = this.getCart();
    let total = 0;
    cart.products.forEach(product => {
      total += (product.price * product.quantity);
    });

    return Number.parseFloat((Math.round(total * 100) / 100).toFixed(2)) + cart.shipping;
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
