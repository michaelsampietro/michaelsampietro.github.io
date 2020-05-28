import { Component, OnInit, ViewChild } from '@angular/core';
import { EnderecoApi, Address } from 'src/models/address';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AlertTypes } from 'src/app/services/alert/alert-types.enum';
import { PagseguroService } from 'src/app/services/pagseguro/pagseguro.service';
import { Product } from 'src/models/product';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { options } from 'src/app/app.module';
import { Installment } from 'src/models/installment';

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

  compraFinalizada = false;
  address: Address;
  user: User;
  showButton = false;

  cardForm: FormGroup = null;
  cardBrand = '';
  installments: Installment[] = [];
  selectedInstallment: Installment = null;

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private pagSeguroService: PagseguroService,
    private cartService: CartService,
    private router: Router
  ) {

    this.cardForm = this.formBuilder.group({
      number: ['', Validators.required],
      name: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      security: ['', Validators.required],

      sameAddress: [true],

      street: '',
      addressNumber: '',
      complement: '',
      district: '',
      postalcode: '',
      city: '',
      state: '',
      brand: ''
    });
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.getAddress();
  }

  changeAddress() {
    sessionStorage.setItem('redirect', '/pagamento');
    this.router.navigate(['/cadastro']);
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

  getCardInfoAndInstallments(cardNumber: string) {
    if (cardNumber.length >= 6) {
      this.pagSeguroService.getCardBrand(cardNumber.substr(0, 6));

      this.pagSeguroService.cardBrand.subscribe(brand => {
        this.cardBrand = brand;
        this.brand.patchValue(brand);
        this.pagSeguroService.getInstallments(this.cartService.total(), brand);
      });

      this.pagSeguroService.installments.subscribe(parcelas => {
        this.installments = parcelas;
        this.selectedInstallment = this.installments[0];
      });
    }
  }

  setInstallment(option) {
    this.selectedInstallment = option.value as Installment;
    console.log(this.selectedInstallment);
  }

  card(cardInfo: any) {
    console.log('Cartão: ', cardInfo);

    if (cardInfo.sameAddress) {
      this.setCardAddress();
    } else {
      // tratar aqui o endereço.
    }

    this.pagSeguroService.payWithCreditCard(cardInfo, this.selectedInstallment);

    // Se der sucesso, chamar o alert service com mensagem de sucesso
    const dialog = this.alertService.show({
      title: 'Obrigado pela compra',
      message: 'Sua compra efetuada com sucesso. Aguarde nosso contato por email para maiores informações.',
      type: AlertTypes.success,
      showButtons: false
    });

    dialog.afterClosed().toPromise().then(e => {
      // this.router.navigate(['/']);
    });
  }

  async boleto() {
    this.pagSeguroService.gerarBoleto(this.cartService.getCart(), this.userService.getUser(), this.address);
  }

  private getAddress(): Address {
    return this.address = JSON.parse(localStorage.getItem('address')) as Address;
  }

  private setCardAddress() {
    const address = this.getAddress();

    this.street.patchValue(address.address);
    this.addressNumber.patchValue(address.number);
    this.complement.patchValue(address.complement);
    this.district.patchValue(address.neighbourhood);
    this.postalcode.patchValue(address.cep);
    this.city.patchValue(address.city);
    this.state.patchValue(address.state);
  }

  // Getters
  get number() { return this.cardForm.get('number'); }
  get name() { return this.cardForm.get('name'); }
  get month() { return this.cardForm.get('month'); }
  get year() { return this.cardForm.get('year'); }
  get security() { return this.cardForm.get('security'); }
  get street() { return this.cardForm.get('street'); }
  get addressNumber() { return this.cardForm.get('addressNumber'); }
  get complement() { return this.cardForm.get('complement'); }
  get district() { return this.cardForm.get('district'); }
  get postalcode() { return this.cardForm.get('postalcode'); }
  get city() { return this.cardForm.get('city'); }
  get state() { return this.cardForm.get('state'); }
  get brand() { return this.cardForm.get('brand'); }
}
