import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy } from "@angular/core"

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
export class MySignComponent implements OnDestroy, OnInit, OnChanges {
    @Input()
    title:string;

    @Output()
    myEvent = new EventEmitter()

    constructor(){
        console.log("MySign component constructor")
    }
    
    ngOnChanges(){
        console.log("MySign component ngOnChanges")
    }

    ngOnInit(){
        console.log("MySign component ngOnInit")
    }

    ngOnDestroy(){
        console.log("MySign component ngOnDestroy")
    }

    handleButtonClick(usr:string, pwd:string) {
        console.log("User:", usr, "Password:", pwd)
        this.myEvent.emit({usr, pwd})
    }
}