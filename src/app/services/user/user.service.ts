import { Injectable } from '@angular/core';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): User {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  isLogged(): boolean{
    console.log(this.getUser());
    return this.getUser() ? true : false;
  }
}
