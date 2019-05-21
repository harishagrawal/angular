import { Component } from "@angular/core"

@Component({
    selector: "sign-up",
    template: `<my-sign></my-sign>`
})
export class SignUpComponent{
    constructor(){
        console.log("SignUp component constructor")
    }
}