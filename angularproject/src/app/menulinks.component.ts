import { Component } from "@angular/core"

@Component({
    selector: "app-home",
    template: `<h1>Welcome to My Shopping App</h1>
    <h2>One way binding
    <input type="number" [value]="count"><h2>
    <br>Two way binding
    <input type="number" [(ngModel)]="count">
    `
    // <h2 [innerHTML]="mycontent"></h2><br>
    // {{mycontent}}<br>
    // <input type="text" value="count">
    // <input type="number" value="{{count}}">
    // <input type="number" [value]="count">
    // <button class="btn btn-primary" (click)="incrementCount()">Increase</button>

})
export class HomeComponent{
    mycontent:string = "<u>My Sample content</u>"
    count = 0 
    incrementCount() {
        this.count++
    }
    constructor(){
        console.log("HomeComponent constructor")
    }
}

@Component({
    selector: "app-list",
    template: `
    <div class="row">
        <div class="col-sm-7">
            <app-products></app-products>
        </div>
        <div class="col-sm-5">
            <app-cartitems></app-cartitems>
        </div>
    </div>
    `
})
export class ListComponent{
    constructor(){
        console.log("ListComponent constructor")
    }
}

@Component({
    selector: "not-found",
    template: `<h2>Oops!!! 404, Page not found</h2>`
})
export class NotFoundComponent{
    constructor(){
        console.log("NotFoundComponent constructor")
    }
}