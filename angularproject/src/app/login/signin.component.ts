import { Component } from "@angular/core"

@Component({
    selector: "sign-in",
    template: `<h2>Welcome {{userName}}<\h2>
    <my-sign></my-sign>`
})
export class SignInComponent{
    userName = "Guest"
    constructor(){
        console.log("Sign In component constructor")
    }
}