import { Injectable, OnInit } from '@angular/core';
import { email , token } from './pagseguro-info';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/product';
import { Cart } from 'src/models/cart';
import { Address } from 'src/models/address';
import { User } from 'src/models/user';
import { parseString } from 'xml2js';
import { AlertService } from '../alert/alert.service';
import { AlertTypes } from '../alert/alert-types.enum';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

declare const PagSeguroDirectPayment: any;

@Injectable({
  providedIn: 'root'
})
export class PagseguroService {

  sessionId = '';

  parcelas = new Subject<any>();


  constructor(private httpClient: HttpClient, private alertService: AlertService, private router: Router ) {
    // Iniciando sessão pagseguro
    this.httpClient.post(
      `/pagseguro/sessions?email=${email}&token=${token}`,
      {},
      {
        responseType: 'text',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }).subscribe(data => {
        const xml = new window.DOMParser().parseFromString((data as string), 'text/xml');
        this.sessionId = xml.activeElement.textContent;
        PagSeguroDirectPayment.setSessionId(this.sessionId);
      });
  }

  async getCardBrand(cardNumber: string) {
    const cardBin = cardNumber.substr(0, 6);
    let brand = '';
    PagSeguroDirectPayment.getBrand({
      cardBin,
      success(response) {
        brand = response.brand.name;
        console.log('1');
      },
      error(error) {
        console.log(error);
      }
    });
    console.log('2');
  }

  obterParcelas(amount: number) {
    const self = this;
    PagSeguroDirectPayment.getInstallments({
      amount,
      maxInstallmentNoInterest: 3,
      brand: 'visa',
      success(response) {
          // Retorna as opções de parcelamento disponíveis
          self.salvarParcelas(response.installments['visa']);
      },
      error(response) {
          // callback para chamadas que falharam.
      },
      complete(response){
          // Callback para todas chamadas.
      }
    });
  }

  private salvarParcelas(parcelas) {
    this.parcelas.next(parcelas);
  }

  async pagarComCartao(card: any) {

    // Primeiro, precisamos obter a bandeira do cartão
    // PagSeguroDirectPayment.getBrand({
    //   cardBin: card.number,
    //   success(response) {
    //     response.brand.name;
    //   },
    //   error(error) {
    //     console.log(error);
    //   }
    // });

    // console.log('2');

  }

  async gerarBoleto(cart: Cart, comprador: User, address: Address) {
    PagSeguroDirectPayment.onSenderHashReady( (hash) => {
      let products = ``;
      cart.products.forEach( (product, index) => {
        const i = index + 1;
        const precoFormatado = (Math.round(product.price * 100) / 100).toFixed(2);
        products += '&itemId' + i + '=' + product.id +
        '&itemDescription' + i + '=' + product.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '') +
        '&itemAmount' + i + '=' + precoFormatado +
        '&itemQuantity' + i + '=' + product.quantity;
      });

      // Se fizer promoção, adicionar "extraAmount" abaixo com valor negativo.
      const body = 'paymentMode=default' +
      '&paymentMethod=boleto' +
      '&receiverEmail=' + email +
      '&currency=BRL' +

      products +

      '&senderName=' + comprador.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '') +
      '&senderCPF=' + comprador.cpf +
      '&senderAreaCode=' + comprador.phoneAreaCode +
      '&senderPhone=' + comprador.phone +
      '&senderEmail=' + comprador.email +
      '&senderHash=' + hash.senderHash +

      '&shippingAddressRequired=true' +
      '&shippingAddressStreet=' + address.address.normalize('NFD').replace(/[\u0300-\u036f]/g, '') +
      '&shippingAddressNumber=' + address.number +
      '&shippingAddressComplement=' + address.complement.normalize('NFD').replace(/[\u0300-\u036f]/g, '') +
      '&shippingAddressDistrict=' + address.neighbourhood.normalize('NFD').replace(/[\u0300-\u036f]/g, '') +
      '&shippingAddressPostalCode=' + address.cep +
      '&shippingAddressCity=' + address.city.normalize('NFD').replace(/[\u0300-\u036f]/g, '') +
      '&shippingAddressState=' + address.state +
      '&shippingAddressCountry=BRA' +

      '&shippingType=1' +
      '&shippingCost=1.00';

      const endpoint = `/pagseguro/transactions/?email=${email}&token=${token}`;

      const header = new Headers();
      header.append('Content-Type', 'application/x-www-form-urlencoded');
      header.append('Access-Control-Allow-Origin', 'https://sandbox.pagseguro.uol.com.br');

      this.httpClient.post(endpoint, body, { responseType: 'text', headers: { 'Content-Type': 'application/x-www-form-urlencoded'}}).subscribe(
        res => {
          parseString(res, (err, data) => {
            const dialog = this.alertService.show({
              title: 'Obrigado pela compra',
              message: `O boleto foi enviado para o seu email.
                        Lembre-se que após o pagamento, a confirmação pode demorar até 2 dias úteis. <br/>
                        <a class='link-blue m-auto' target='blank' href='${data.transaction.paymentLink[0]}'>Você também pode clicar aqui para visualizar o boleto.</a>`,
              type: AlertTypes.success,
              showButtons: false
            });

            dialog.afterClosed().toPromise().then(e => {
              this.router.navigate(['/']);
            });
          });
        },
        err => {
          this.alertService.show({
            title: 'Não foi possível realizar a compra.',
            message: `Não foi possível gerar o boleto. Tente outro método de pagamento ou <a class='link-blue' href='/contato'>entre em contato conosco.</a>`,
            type: AlertTypes.error,
            showButtons: false
          });
        }
      );
    });
  }

}
