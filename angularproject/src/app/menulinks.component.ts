import { Component, OnInit } from "@angular/core"
import { CategoryService } from './shared/services/category.service';
import { Category } from './shopping/models/category.model';

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
    templateUrl: "./list.component.html"
    // template: `
    // <div class="row">
    //     <div class="col-sm-3 card">
    //         <div class="card-header bg-info">
    //             <b>Categories</b>
    //         </div>
    //         <div class="card-body">
    //             <ul class="list-group">
    //                 <li class="list-group-item" *ngFor="let link of ctgLinks">
    //                     <a routerLink="../wscategories/{{link.id}}">{{link.name}}</a>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    //     <div class="col-sm-5">
    //         <app-products></app-products>
    //     </div>
    //     <div class="col-sm-4">
    //         <app-cartitems></app-cartitems>
    //     </div>
    // </div>
    // `
})
export class ListComponent implements OnInit {
    ctgLinks:Category[] = []
    constructor(private csvc:CategoryService){
        console.log("ListComponent constructor")
    }
    ngOnInit(){
        this.csvc.getCategories().subscribe(
            (data) => {
                this.ctgLinks = data
              }, (err) => {
                console.log("Error: ", err)
              }        
        )
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