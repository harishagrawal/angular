import { Component } from "@angular/core"
// import { RouterOutlet } from "@angular/router";

@Component({
  // Specify name of the tag for component
  selector: "app-root",
  // Output for the component
  template: `<!-- <h3>My First Angular Component</h3> -->
  <app-header></app-header>
  <router-outlet></router-outlet>
  `

})
export class AppComponent {
    constructor() {
        console.log("AppComponent constructor")
    }
}