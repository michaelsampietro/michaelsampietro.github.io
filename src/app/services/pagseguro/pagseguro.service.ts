import { Injectable } from '@angular/core';
import { email , token } from './pagseguro-info';
import { HttpClient } from '@angular/common/http';
import { options } from 'src/app/app.module';


@Injectable({
  providedIn: 'root'
})
export class PagseguroService {

  constructor(private httpClient: HttpClient) {

    this.httpClient.post(`https://ws.pagseguro.uol.com.br/v2/sessions?email=${email}&token=${token}`,
      {
        headers: { 'Content-Type': 'application/xml' }
      }
    ).subscribe(res => {
      console.log(res);
    });
  }
}
