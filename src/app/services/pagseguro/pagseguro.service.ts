import { Injectable } from '@angular/core';
import { email , token } from './pagseguro-info';
import { HttpClient } from '@angular/common/http';
import { options } from 'src/app/app.module';
import { HttpHeaders } from '@angular/common/http';
import { retry, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagseguroService {

  sessionId = '';

  constructor(private httpClient: HttpClient) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/xml',
      })
    };

    this.httpClient.post(
      `/v2/sessions?email=${email}&token=${token}`,
      {},
      { responseType: 'text'}).subscribe(data => {
        const xml = new window.DOMParser().parseFromString((data as string), 'text/xml');
        this.sessionId = xml.activeElement.textContent;
        console.log(this.sessionId);
      });
  }
}
