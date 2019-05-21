import { Component } from "@angular/core"

@Component({
    selector: "my-sign",
    template: `<h2>My Sign Heading</h2>
    <form>
        UserName: <input type="text" placeholder="Enter User Name"> <br>
        Password: <input type="password" placeholder="Enter Password"> <br>
        <button class="btn btn-primary" type="button">Submit</button>
    `
})
export class MySignComponent{
    constructor(){
        console.log("MySign component constructor")
    }
}