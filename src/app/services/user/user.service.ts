import { Injectable } from '@angular/core';
import { User } from 'src/models/user';
import { Address } from 'src/models/address';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): User {
    const user = JSON.parse(localStorage.getItem('user'));
    return user as User;
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(credentials: { email: string, password: string}) {
    localStorage.setItem('user', JSON.stringify(credentials.email));
  }

  register(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  }

  getAddress(): Address {
    return JSON.parse(localStorage.getItem('address')) as Address;
  }

  isLogged(): boolean{
    return this.getUser() ? true : false;
  }
}
