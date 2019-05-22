import { TestBed } from "@angular/core/testing";
import { SignUpComponent } from './login/signup.component';
import { MySignComponent } from './shared/mysign.component';
import { LoginService } from './shared/services/login.service';

describe("Verify sign up component", () => {

    beforeEach(() =>{
        TestBed.configureTestingModule({
            declarations: [SignUpComponent, MySignComponent]
        })
    })

    it("should verify sign up", () => {
        let f = TestBed.createComponent(SignUpComponent)
        expect(f).toBeDefined();
    })

    it("should verify data member", () => {
        let f = TestBed.createComponent(SignUpComponent);
        let obj = f.componentInstance;
        expect(obj.signUpHeading).toEqual("Quick Sign Up")
    })

    it("should verify login service", () => {
        let ls = new LoginService();
        expect(ls.isValidUser("admin", "123")).toBeTruthy()
    })
})