import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';
import { Cart } from 'src/models/cart';

@Injectable({
  providedIn: 'root'
})
export class CheckoutGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const estaLogado = this.userService.isLogged();

      if (!estaLogado) {
        this.router.navigate(['/login']);
        return false;
      } else {
        const carrinho = JSON.parse(localStorage.getItem('cart')) as Cart;

        if (carrinho.products.length > 0) {
          return true;
        }

        this.router.navigate(['/produtos']);
        return true;
      }
  }
}
