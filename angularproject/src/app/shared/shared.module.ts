import { NgModule } from "@angular/core";
import { MySignComponent } from './mysign.component';
import { SearchDataPipe } from "./searchdata.pipe";
import { CategoryComponent } from './services/category/category.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [MySignComponent, SearchDataPipe, CategoryComponent],
    exports: [MySignComponent, SearchDataPipe],
    imports: [ HttpClientModule ]
})
export class SharedModule{
    constructor(){
        console.log("Shared module constructor")
    }
}