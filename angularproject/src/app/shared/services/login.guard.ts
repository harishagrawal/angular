import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
    canActivate(){
        return this.lsvc.getIsAdminLoggedIn()
    }
    constructor(private lsvc:LoginService){}
}