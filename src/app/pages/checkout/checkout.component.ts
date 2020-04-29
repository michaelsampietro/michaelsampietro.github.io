import { Component, OnInit } from '@angular/core';
import { EnderecoApi, Address } from "src/models/address";
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  address: Address;
  user: User;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.getAddress();
  }

  changeAddress() {
    sessionStorage.setItem('redirect', '/pagamento');
    this.router.navigate(['/endereco']);
  }

  private getAddress() {
    this.address = JSON.parse(localStorage.getItem('address'));
    console.log(this.address);
  }

}
