import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router"
import { SignInComponent } from './signin.component';
import { SignUpComponent } from './signup.component';
import { SharedModule } from '../shared/shared.module';
import { SignoutComponent } from './signout.component';
import { ErrorComponent } from './error.component';


let loginRoutes:Routes = [
    {path:"sign-in", component: SignInComponent},
    {path:"sign-up", component: SignUpComponent},
    {path:"sign-out", component: SignoutComponent},
    {path:"error", component: ErrorComponent},
]

@NgModule({
    declarations: [ SignInComponent, SignUpComponent, SignoutComponent, ErrorComponent ],
    imports: [RouterModule.forChild(loginRoutes), SharedModule]
})
export class LoginModule {
    constructor() {
        console.log("Login module constructor")
    }
}