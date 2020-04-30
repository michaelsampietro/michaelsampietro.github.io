import { Injectable } from '@angular/core';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): any {
    const user = JSON.parse(localStorage.getItem('user'));
    // const user = localStorage.getItem('user');
    return user;
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(credentials: { email: string, password: string}) {
    // Aqui deve salvar um objeto com as informações do usuario
    localStorage.setItem('user', JSON.stringify(credentials.email));

    // tambem deve coletar as informações de endereço do usuario, vindas do backend e salvar no storage
    // Ex.:
    // const endereco: Address = ~obter do back~
    // localStorage.setItem('address', JSON.stringify(endereco));
  }

  register(user: User) {
    // aqui deve enviar os dados para o backend e, apois isso salvar no localstorage o token.
    localStorage.setItem('user', JSON.stringify(user));
    return true;

    // se der erro na criação do usuario retornar falso;
  }

  isLogged(): boolean{
    return this.getUser() ? true : false;
  }
}
