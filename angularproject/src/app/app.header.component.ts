import { Component } from "@angular/core"

@Component({
    selector: "app-header",
    // template: "<h2>Header Component</h2>"
    templateUrl: "./header.component.html"
})

export class AppHeaderComponent {
    constructor() {
        console.log("Header Component Constructor")
    }
}