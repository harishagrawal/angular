import { NgModule } from "@angular/core";
import { MySignComponent } from './mysign.component';
import { SearchDataPipe } from "./searchdata.pipe";
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [MySignComponent, SearchDataPipe],
    exports: [MySignComponent, SearchDataPipe],
    imports: [ HttpClientModule ]
})
export class SharedModule{
    constructor(){
        console.log("Shared module constructor")
    }
}