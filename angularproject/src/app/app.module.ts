import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppHeaderComponent } from "./app.header.component";
import { BrowserModule } from "@angular/platform-browser"
import { LoginModule } from "./login/login.module";
import { ShoppingModule } from "./shopping/shopping.module";
import { HomeComponent, ListComponent, NotFoundComponent } from "./menulinks.component";
import {Routes, RouterModule} from "@angular/router"
import {FormsModule} from "@angular/forms"

let appRoutes:Routes = [
    // {path:"", component: HomeComponent},
    {path:"home", component: HomeComponent},
    {path:"", redirectTo: "home",  pathMatch: "full"},
    {path: "cart", component: ListComponent},
    {path: "**", component: NotFoundComponent}
]

@NgModule({
    // Register Components
    declarations: [AppComponent, AppHeaderComponent, HomeComponent, ListComponent, NotFoundComponent],

    // Startup Component
    bootstrap: [AppComponent],

    // Module Dependencies
    imports: [ BrowserModule, LoginModule, ShoppingModule, RouterModule.forRoot(appRoutes), FormsModule ],

})
export class AppModule {
    constructor() {
        console.log("App Module constructor")
    }
}