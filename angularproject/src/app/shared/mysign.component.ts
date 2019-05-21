import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
    selector: "my-sign",
    template: `<h2>{{title}}</h2>
    <form>
        UserName: <input type="text" placeholder="Enter User Name" #txtUser> <br>
        Password: <input type="password" placeholder="Enter Password" #txtPwd> <br>
        <button class="btn btn-primary" type="button" 
        (click)="handleButtonClick(txtUser.value, txtPwd.value)" >{{title}}</button>
    `
})
export class MySignComponent{
    @Input()
    title:string;

    @Output()
    myEvent = new EventEmitter()

    // constructor(){
    //     console.log("MySign component constructor")
    // }
    
    handleButtonClick(usr:string, pwd:string) {
        console.log("User:", usr, "Password:", pwd)
        this.myEvent.emit({usr, pwd})
    }
}