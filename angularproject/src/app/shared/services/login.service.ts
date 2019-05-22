import { Injectable } from '@angular/core';

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

  isValidUser(username:string, pwd:string) {
    if (username == 'admin') {
      this.setIsAdminLoggedIn(true)
      return true;
    } else {
      return false;
    }
  }

  constructor() { }
}
