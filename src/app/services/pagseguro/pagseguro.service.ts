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

declare const PagSeguroDirectPayment: any;

@Injectable({
  providedIn: 'root'
})
export class PagseguroService {

  sessionId = '';

  constructor(private httpClient: HttpClient, private alertService: AlertService, private router: Router ) {
    // Iniciando sessão pagseguro
    this.httpClient.post(
      `/pagseguro/sessions?email=${email}&token=${token}`,
      {},
      { responseType: 'text'}).subscribe(data => {
        const xml = new window.DOMParser().parseFromString((data as string), 'text/xml');
        this.sessionId = xml.activeElement.textContent;
        PagSeguroDirectPayment.setSessionId(this.sessionId);
      });
  }

  getCardBrand(cardNumber: string) {
    const cardBin = cardNumber.substr(0, 6);
    console.log(cardBin);
    PagSeguroDirectPayment.getBrand({
      cardBin,
      success(response) {
        console.log(response);
      },
      error(error) {
        console.log(error);
      }
    });
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

      console.log(body);

      const endpoint = `/pagseguro/transactions/?email=${email}&token=${token}`;

      const header = new Headers();
      header.append('Content-Type', 'application/x-www-form-urlencoded');

      const xmlExemplo = '<?xml version="1.0" encoding="ISO-8859-1" standalone="yes"?><transaction><date>2020-05-27T16:34:31.000-03:00</date><code>B53C67A6-7167-4D09-949A-A5A8DE6AE0C0</code><type>1</type><status>1</status><lastEventDate>2020-05-27T16:34:33.000-03:00</lastEventDate><paymentMethod><type>2</type><code>202</code></paymentMethod><paymentLink>https://pagseguro.uol.com.br/checkout/payment/booklet/print.jhtml?c=859df15347210729f8e171bfdc9e6f89b1c2fd411a540226d8de025b5464caa1da83b57824225c23</paymentLink><grossAmount>11.00</grossAmount><discountAmount>0.00</discountAmount><feeAmount>0.33</feeAmount><netAmount>10.67</netAmount><extraAmount>0.00</extraAmount><installmentCount>1</installmentCount><itemCount>1</itemCount><items><item><id>1</id><description>Zen Sleep Dynamic Cell</description><quantity>1</quantity><amount>10.00</amount></item></items><sender><name>Michael Alexandre da Silva Sampietro</name><email>michaelsampietro@outlook.com</email><phone><areaCode>62</areaCode><number>982793547</number></phone></sender><shipping><address><street>Rua CeÌ�sar Vallejo</street><number>100</number><complement>Ap 2314</complement><district>Real Parque</district><city>SaÌ¿o Paulo</city><state>SP</state><country>BRA</country><postalCode>05685000</postalCode></address><type>1</type><cost>1.00</cost></shipping></transaction> pagseguro.service.ts:96:16';

      parseString(xmlExemplo, (err, data) => {
        console.log(data.transaction.paymentLink[0]);
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

      this.httpClient.post(endpoint, '', { responseType: 'text', headers: { 'Content-Type': 'application/x-www-form-urlencoded'}}).subscribe(
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
