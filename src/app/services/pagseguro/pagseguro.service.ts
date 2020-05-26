import { Injectable } from '@angular/core';
import { email , token } from './pagseguro-info';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagseguroService {

  sessionId = '';

  constructor(private httpClient: HttpClient) {
    // Iniciando sessão pagseguro
    this.httpClient.post(
      `/pagseguro/sessions?email=${email}&token=${token}`,
      {},
      { responseType: 'text'}).subscribe(data => {
        const xml = new window.DOMParser().parseFromString((data as string), 'text/xml');
        this.sessionId = xml.activeElement.textContent;
        console.log(this.sessionId);
      });
  }
}
