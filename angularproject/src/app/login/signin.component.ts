import { Component } from "@angular/core"

@Component({
    selector: "sign-in",
    template: `<h1>Welcome {{userName}}</h1><br>
    <my-sign [title]="signInHeading" (myEvent)="handleMyEvent($event)"></my-sign>
    `
})
export class SignInComponent{
    userName = "Guest"
    signInHeading = "Sign In"
    constructor(){
        console.log("Sign In component constructor")
    }

    handleMyEvent(obj){
        this.userName = obj.usr;
    }
}