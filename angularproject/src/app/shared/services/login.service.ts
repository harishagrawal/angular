import { Injectable } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAdminLoggedIn = false;

  getIsAdminLoggedIn() {
    return this.isAdminLoggedIn;
  }

  setIsAdminLoggedIn(newval:boolean) {
    this.isAdminLoggedIn = newval;
  }

  isValidUser(username:string, password:string) {
    if (username == 'admin') {
      return true;
    } else {
      return false;
    }
      
  }

  constructor() { }
}
