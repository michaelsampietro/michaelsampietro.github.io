import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EnderecoApi, Address } from 'src/models/address';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  enderecoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private httpClient: HttpClient,
              private userService: UserService,
              private router: Router) {
    const name = this.userService.getUser().name;
    const address: Address = JSON.parse(localStorage.getItem('address'));

    if (address) {
      this.enderecoForm = this.fb.group({
        name: [name, Validators.required],
        cep: [address.cep, Validators.required],
        address: [address.address, Validators.required],
        number: [address.number, Validators.required],
        complement: [address.complement],
        neighbourhood: [address.neighbourhood, Validators.required],
        city: [address.city, Validators.required],
        state: [address.state, Validators.required],
      });
    } else {
      this.enderecoForm = this.fb.group({
        name: [name, Validators.required],
        cep: ['', Validators.required],
        address: ['', Validators.required],
        number: ['', Validators.required],
        complement: [''],
        neighbourhood: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
      });
    }


  }

  ngOnInit(): void { }

  saveAddress(address: any) {
    localStorage.setItem('address', JSON.stringify(address));

    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      this.router.navigate([redirect]);
      sessionStorage.removeItem('redirect');
    } else {
      this.router.navigate(['/produtos']);
    }
  }

  async checkCEP(cep: string) {
    if (cep.length === 8) {
      await this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`).toPromise().then((endereco: any) => {
        if (!endereco.erro) {
          this.address.patchValue(endereco.logradouro);
          this.city.patchValue(endereco.localidade);
          this.state.patchValue(endereco.uf);
          this.complement.patchValue(endereco.complemento);
          this.neighbourhood.patchValue(endereco.bairro);
        } else {
          this.address.patchValue('Não encontramos. Por favor, verifique o CEP.');
          this.cep.setErrors({ required: true });
        }
      });
    }
  }

  // Getters
  get name() { return this.enderecoForm.get('name'); }
  get cep() { return this.enderecoForm.get('cep'); }
  get address() { return this.enderecoForm.get('address'); }
  get number() { return this.enderecoForm.get('number'); }
  get complement() { return this.enderecoForm.get('complement'); }
  get neighbourhood() { return this.enderecoForm.get('neighbourhood'); }
  get city() { return this.enderecoForm.get('city'); }
  get state() { return this.enderecoForm.get('state'); }

}
