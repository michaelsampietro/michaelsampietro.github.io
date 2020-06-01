import { Component, OnInit } from '@angular/core';
import { Address } from 'src/models/address';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AlertTypes } from 'src/app/services/alert/alert-types.enum';
import { PagseguroService } from 'src/app/services/pagseguro/pagseguro.service';
import { CartService } from 'src/app/services/cart.service';
import { Installment } from 'src/models/installment';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

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
  showAddressForm = false;

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
    private router: Router,
    private httpClient: HttpClient
  ) {

    const address = this.getAddress();

    this.cardForm = this.formBuilder.group({
      number: ['', Validators.required],
      name: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      security: ['', Validators.required],

      sameAddress: [true],

      street: [address.address, Validators.required],
      addressNumber: [address.number, Validators.required],
      complement: [address.complement],
      district: [address.neighbourhood, Validators.required],
      postalcode: [address.cep, Validators.required],
      city: [address.city, Validators.required],
      state: [address.state, Validators.required],
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
    console.log(cardInfo);

    if (cardInfo.sameAddress) {
      const address = this.getAddress();
      this.street.patchValue(address.address);
      this.addressNumber.patchValue(address.number);
      this.complement.patchValue(address.complement);
      this.district.patchValue(address.neighbourhood);
      this.postalcode.patchValue(address.cep);
      this.city.patchValue(address.city);
      this.state.patchValue(address.state);
    } else {
      console.log(cardInfo);
    }

    console.log(cardInfo);

    this.pagSeguroService.payWithCreditCard(cardInfo, this.selectedInstallment, this.cartService.getCart(), this.userService.getUser(), this.address);

    // Se der sucesso, chamar o alert service com mensagem de sucesso
    // const dialog = this.alertService.show({
    //   title: 'Obrigado pela compra',
    //   message: 'Sua compra efetuada com sucesso. Aguarde nosso contato por email para maiores informações.',
    //   type: AlertTypes.success,
    //   showButtons: false
    // });

    // dialog.afterClosed().toPromise().then(() => {
    //   // this.router.navigate(['/']);
    // });
  }

  async boleto() {
    this.pagSeguroService.gerarBoleto(this.cartService.getCart(), this.userService.getUser(), this.address);
  }

  async checkCEP(cep: string) {
    if (cep.length === 8) {
      await this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`).toPromise().then((endereco: any) => {
        if (!endereco.erro) {
          this.street.patchValue(endereco.logradouro);
          this.city.patchValue(endereco.localidade);
          this.state.patchValue(endereco.uf);
          this.complement.patchValue(endereco.complemento);
          this.district.patchValue(endereco.bairro);
        } else {
          this.street.patchValue('Não encontramos. Por favor, verifique o CEP.');
          this.postalcode.setErrors({ required: true });
        }
      });
    }
  }

  toggleAddressForm(value: any) {
    this.showAddressForm = !value.checked;
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
