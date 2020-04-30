import { Component, OnInit, ViewChild } from '@angular/core';
import { EnderecoApi, Address } from 'src/models/address';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const enum PaymentOptions {
  Nenhum = 0,
  Cartao = 1,
  Boleto = 2,
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  address: Address;
  user: User;
  showButton = false;
  cardForm: FormGroup = null;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.cardForm = this.formBuilder.group({
      number: ['', Validators.required],
      name: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      security: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    
    this.user = this.userService.getUser();
    this.getAddress();
  }

  changeAddress() {
    sessionStorage.setItem('redirect', '/pagamento');
    this.router.navigate(['/endereco']);
  }

  tabChanged(event: MatTabChangeEvent): void {
    if (event.index === PaymentOptions.Cartao) {
      this.showButton = true;
    } else if (event.index === PaymentOptions.Boleto) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  card(cardInfo: any) {
    console.log('Cartão: ', cardInfo);
    // Tratar os dados do cartão aqui
  }

  boleto(option: number) {
    if (option === PaymentOptions.Boleto) {
      // gerar boleto aqui
      console.log('boleto');
    }
  }

  private getAddress() {
    this.address = JSON.parse(localStorage.getItem('address'));
    console.log(this.address);
  }

  // Getters
  get number() { return this.cardForm.get('number'); }
  get name() { return this.cardForm.get('name'); }
  get month() { return this.cardForm.get('month'); }
  get year() { return this.cardForm.get('year'); }
  get security() { return this.cardForm.get('security'); }
}
