import { Injectable } from '@angular/core';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): User | string {
    // const user = JSON.parse(localStorage.getItem('user'));
    const user = localStorage.getItem('user');
    return user;
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(credentials: { email: string, password: string}) {
    localStorage.setItem('user', credentials.email);
  }

  register(user: User) {
    // aqui deve enviar os dados para o backend e, apois isso salvar no localstorage o token.
    localStorage.setItem('user', user.email); // Salvando email como exemplo
    return true;

    // se der erro na criação do usuario retornar falso;
  }

  isLogged(): boolean{
    return this.getUser() ? true : false;
  }
}
