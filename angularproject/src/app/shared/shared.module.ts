import { NgModule } from "@angular/core";
import { MySignComponent } from './mysign.component';
import { SearchDataPipe } from "./searchdata.pipe";

@NgModule({
    declarations: [MySignComponent, SearchDataPipe],
    exports: [MySignComponent, SearchDataPipe]
})
export class SharedModule{
    constructor(){
        console.log("Shared module constructor")
    }
}