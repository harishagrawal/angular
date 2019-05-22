import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-signout',
  template: `
    <h2>You have logged out successfully</h2>
  `,
  styles: []
})
export class SignoutComponent implements OnInit {

  constructor(private lsvc:LoginService) { }

  ngOnInit() {
    this.lsvc.setIsAdminLoggedIn(false);
  }

}
