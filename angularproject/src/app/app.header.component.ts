import { Component } from "@angular/core"
import { LoginService } from './shared/services/login.service';

@Component({
    selector: "app-header",
    // template: "<h2>Header Component</h2>"
    templateUrl: "./header.component.html"
})

export class AppHeaderComponent {
    constructor(private lsvc:LoginService) {
        console.log("Header Component Constructor")
    }

    isAdminLoggedIn(){
        return this.lsvc.getIsAdminLoggedIn()
    }

    
}