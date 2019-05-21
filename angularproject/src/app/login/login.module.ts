import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router"
import { SignInComponent } from './signin.component';
import { SignUpComponent } from './signup.component';
import { SharedModule } from '../shared/shared.module';


let loginRoutes:Routes = [
    {path:"sign-in", component: SignInComponent},
    {path:"sign-up", component: SignUpComponent},
]

@NgModule({
    declarations: [ SignInComponent, SignUpComponent ],
    imports: [RouterModule.forChild(loginRoutes), SharedModule]
})
export class LoginModule {
    constructor() {
        console.log("Login module constructor")
    }
}