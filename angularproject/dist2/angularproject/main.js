(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { RouterOutlet } from "@angular/router";
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        console.log("AppComponent constructor");
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // Specify name of the tag for component
            selector: "app-root",
            // Output for the component
            template: "<!-- <h3>My First Angular Component</h3> -->\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.header.component.ts":
/*!*****************************************!*\
  !*** ./src/app/app.header.component.ts ***!
  \*****************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/login.service */ "./src/app/shared/services/login.service.ts");



var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(lsvc) {
        this.lsvc = lsvc;
        console.log("Header Component Constructor");
    }
    AppHeaderComponent.prototype.isAdminLoggedIn = function () {
        return this.lsvc.getIsAdminLoggedIn();
    };
    AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            // template: "<h2>Header Component</h2>"
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.header.component */ "./src/app/app.header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping/shopping.module */ "./src/app/shopping/shopping.module.ts");
/* harmony import */ var _menulinks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menulinks.component */ "./src/app/menulinks.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _shopping_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping/products.component */ "./src/app/shopping/products.component.ts");





// import { LoginModule } from "./login/login.module";








// import { SearchDataPipe } from "./shared/searchdata.pipe";
var appRoutes = [
    // {path:"", component: HomeComponent},
    { path: "home", component: _menulinks_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "cart", component: _menulinks_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], children: [
            { path: "", component: _shopping_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"] },
            { path: ":ctgid", component: _shopping_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"] },
        ] },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "**", component: _menulinks_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
        console.log("App Module constructor");
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            // Register Components
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _app_header_component__WEBPACK_IMPORTED_MODULE_3__["AppHeaderComponent"], _menulinks_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _menulinks_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _menulinks_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]],
            // Startup Component
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            // Module Dependencies
            // imports: [ BrowserModule, LoginModule, ShoppingModule, RouterModule.forRoot(appRoutes), FormsModule ],
            // remove LoginModule and instead add path for Lazy loading
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_5__["ShoppingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { useHash: true }), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
            providers: [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"], _shared_services_category_service__WEBPACK_IMPORTED_MODULE_11__["CategoryService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header.component.html":
/*!***************************************!*\
  !*** ./src/app/header.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar bg-dark navbar-expand-sm navbar-dark\">\r\n    <a href=\"/\" class=\"navbar-brand\">My App</a>\r\n\r\n    <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n            <a routerLink=\"/home\" class=\"nav-link\" routerLinkActive = \"active\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!isAdminLoggedIn()\">\r\n            <a routerLink=\"/login/sign-in\" class=\"nav-link\" routerLinkActive = \"active\">Sign In</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"!isAdminLoggedIn()\">\r\n            <a routerLink=\"/login/sign-up\" class=\"nav-link\" routerLinkActive = \"active\">Quick Sign Up</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a routerLink=\"/cart\" class=\"nav-link\" routerLinkActive = \"active\">Shopping Cart</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isAdminLoggedIn()\">\r\n            <a routerLink=\"/categories\" class=\"nav-link\" routerLinkActive = \"active\">Categories</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"isAdminLoggedIn()\">\r\n            <a routerLink=\"/login/sign-out\" class=\"nav-link\" routerLinkActive = \"active\">Sign Out</a>\r\n        </li>\r\n    </ul>\r\n</nav>   "

/***/ }),

/***/ "./src/app/list.component.html":
/*!*************************************!*\
  !*** ./src/app/list.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n        <div class=\"col-sm-3 card\">\r\n            <div class=\"card-header bg-info\">\r\n                <b>Categories</b>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <ul class=\"list-group\">\r\n                    <li class=\"list-group-item\" *ngFor=\"let link of ctgLinks\">\r\n                        <a routerLink=\"{{link.id}}\">{{link.name}}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-5\">\r\n            <!-- <app-products></app-products> -->\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <app-cartitems></app-cartitems>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/menulinks.component.ts":
/*!****************************************!*\
  !*** ./src/app/menulinks.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent, ListComponent, NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/category.service */ "./src/app/shared/services/category.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.mycontent = "<u>My Sample content</u>";
        this.count = 0;
        console.log("HomeComponent constructor");
    }
    HomeComponent.prototype.incrementCount = function () {
        this.count++;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: "<h1>Welcome to My Shopping App</h1>\n    <h2>One way binding\n    <input type=\"number\" [value]=\"count\"><h2>\n    <br>Two way binding\n    <input type=\"number\" [(ngModel)]=\"count\">\n    "
            // <h2 [innerHTML]="mycontent"></h2><br>
            // {{mycontent}}<br>
            // <input type="text" value="count">
            // <input type="number" value="{{count}}">
            // <input type="number" [value]="count">
            // <button class="btn btn-primary" (click)="incrementCount()">Increase</button>
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

var ListComponent = /** @class */ (function () {
    function ListComponent(csvc) {
        this.csvc = csvc;
        this.ctgLinks = [];
        console.log("ListComponent constructor");
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.csvc.getCategories().subscribe(function (data) {
            _this.ctgLinks = data;
        }, function (err) {
            console.log("Error: ", err);
        });
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-list",
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list.component.html")
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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], ListComponent);
    return ListComponent;
}());

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
        console.log("NotFoundComponent constructor");
    }
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "not-found",
            template: "<h2>Oops!!! 404, Page not found</h2>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/mysign.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/mysign.component.ts ***!
  \********************************************/
/*! exports provided: MySignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySignComponent", function() { return MySignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MySignComponent = /** @class */ (function () {
    function MySignComponent() {
        this.myEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log("MySign component constructor: ", this.title);
    }
    MySignComponent.prototype.ngOnChanges = function () {
        console.log("MySign component ngOnChanges: ", this.title);
    };
    MySignComponent.prototype.ngOnInit = function () {
        console.log("MySign component ngOnInit: ", this.title);
    };
    MySignComponent.prototype.ngOnDestroy = function () {
        console.log("MySign component ngOnDestroy");
    };
    MySignComponent.prototype.handleButtonClick = function (usr, pwd) {
        console.log("User:", usr, "Password:", pwd);
        this.myEvent.emit({ usr: usr, pwd: pwd });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MySignComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MySignComponent.prototype, "myEvent", void 0);
    MySignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "my-sign",
            template: "<h2>{{title}}</h2>\n    <form>\n        UserName: <input type=\"text\" placeholder=\"Enter User Name\" #txtUser> <br>\n        Password: <input type=\"password\" placeholder=\"Enter Password\" #txtPwd> <br>\n        <button class=\"btn btn-primary\" type=\"button\" \n        (click)=\"handleButtonClick(txtUser.value, txtPwd.value)\" >{{title}}</button>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MySignComponent);
    return MySignComponent;
}());



/***/ }),

/***/ "./src/app/shared/searchdata.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/searchdata.pipe.ts ***!
  \*******************************************/
/*! exports provided: SearchDataPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDataPipe", function() { return SearchDataPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchDataPipe = /** @class */ (function () {
    function SearchDataPipe() {
    }
    SearchDataPipe.prototype.transform = function (input, queryData, key) {
        if (queryData == "" || queryData == undefined || key == undefined) {
            return input;
        }
        return input.filter(function (e) { return e[key].toLowerCase().indexOf(queryData.toLowerCase()) > -1; });
        // let a:string = "ABc";
        // a.toLowerCase
    };
    SearchDataPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'searchData'
        })
    ], SearchDataPipe);
    return SearchDataPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/cart.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/cart.service.ts ***!
  \*************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartService = /** @class */ (function () {
    function CartService() {
        this.cartData = [];
    }
    // constructor() { }
    CartService.prototype.getCartItems = function () {
        return this.cartData;
    };
    CartService.prototype.addCartItem = function (newItem) {
        this.cartData.push(newItem);
    };
    CartService.prototype.deleteCartItem = function (pos) {
        // remove 1 element at index pos
        this.cartData.splice(pos, 1);
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/shared/services/category.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.restURL = "http://localhost:3000/wscategories";
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get(this.restURL);
    };
    CategoryService.prototype.addCategory = function (newcategory) {
        return this.http.post(this.restURL, newcategory);
    };
    CategoryService.prototype.deleteCategory = function (id) {
        return this.http.delete(this.restURL + "/" + id);
    };
    CategoryService.prototype.updateCategory = function (modifiedcategory) {
        return this.http.put(this.restURL + "/" + modifiedcategory.id, modifiedcategory);
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/shared/services/login.guard.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/login.guard.ts ***!
  \************************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/shared/services/login.service.ts");



var LoginGuard = /** @class */ (function () {
    function LoginGuard(lsvc) {
        this.lsvc = lsvc;
    }
    LoginGuard.prototype.canActivate = function () {
        return this.lsvc.getIsAdminLoggedIn();
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/login.service.ts ***!
  \**************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginService = /** @class */ (function () {
    function LoginService() {
        this.isAdminLoggedIn = false;
    }
    LoginService.prototype.getIsAdminLoggedIn = function () {
        return this.isAdminLoggedIn;
    };
    LoginService.prototype.setIsAdminLoggedIn = function (newval) {
        this.isAdminLoggedIn = newval;
    };
    LoginService.prototype.isValidUser = function (username, pwd) {
        if (username == 'admin') {
            this.setIsAdminLoggedIn(true);
            return true;
        }
        else {
            return false;
        }
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_models_product_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shopping/models/product.models */ "./src/app/shopping/models/product.models.ts");



var ProductService = /** @class */ (function () {
    function ProductService() {
        this.productsData = [];
        this.productsData = [
            new _shopping_models_product_models__WEBPACK_IMPORTED_MODULE_2__["Product"](1, 'one', 10, 'one for 10', 1),
            new _shopping_models_product_models__WEBPACK_IMPORTED_MODULE_2__["Product"](2, 'two', 20, 'two for 20', 2),
            new _shopping_models_product_models__WEBPACK_IMPORTED_MODULE_2__["Product"](3, 'three', 30, 'three for 30', 1),
            new _shopping_models_product_models__WEBPACK_IMPORTED_MODULE_2__["Product"](4, 'Bravia', 50000, 'Sony TV', 2),
            new _shopping_models_product_models__WEBPACK_IMPORTED_MODULE_2__["Product"](5, 'Galaxy S', 20000, 'Samsung Mobile', 2),
            new _shopping_models_product_models__WEBPACK_IMPORTED_MODULE_2__["Product"](6, 'iPhone X', 125000, 'Apple Phone', 1)
        ];
    }
    ProductService.prototype.getProducts = function () {
        return this.productsData;
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mysign_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mysign.component */ "./src/app/shared/mysign.component.ts");
/* harmony import */ var _searchdata_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchdata.pipe */ "./src/app/shared/searchdata.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





// import { FormsModule } from '@angular/forms';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
        console.log("Shared module constructor");
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_mysign_component__WEBPACK_IMPORTED_MODULE_2__["MySignComponent"], _searchdata_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchDataPipe"]],
            exports: [_mysign_component__WEBPACK_IMPORTED_MODULE_2__["MySignComponent"], _searchdata_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchDataPipe"]],
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shopping/cartitems.component.html":
/*!***************************************************!*\
  !*** ./src/app/shopping/cartitems.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Cart Items are <span class=\"badge badge-primary\">{{cartItems.length}}</span></h3>\n<table class=\"table table-bordered\">\n  <tr>\n      <th>Name</th><th>Price</th><th>Quantity</th><th>Price</th>\n  </tr>\n  <tr *ngIf=\"cartItems.length == 0\">\n    <td colspan=\"4\">Cart is empty</td>\n  </tr>\n  <tr *ngFor=\"let item of cartItems; let i=index\">\n    <td><button class=\"btn btn-danger\" (click)=\"delete(i)\">X</button>{{item.name}}</td>\n    <td>{{item.price | currency:'JPY'}}</td>\n    <td><input type=\"number\" name=\"Quantity\" [(ngModel)]=\"item.qty\" style=\"width: 50px;\"></td>\n    <td>{{item.price * item.qty}}</td>\n  </tr>\n  <tr>\n    <td colspan=\"3\">Total Amount</td>\n    <td>{{getCartTotal()}}</td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/shopping/cartitems.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shopping/cartitems.component.ts ***!
  \*************************************************/
/*! exports provided: CartitemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartitemsComponent", function() { return CartitemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");



var CartitemsComponent = /** @class */ (function () {
    function CartitemsComponent(csvc) {
        this.csvc = csvc;
        this.cartItems = [];
    }
    CartitemsComponent.prototype.ngOnInit = function () {
        this.cartItems = this.csvc.getCartItems();
    };
    CartitemsComponent.prototype.delete = function (i) {
        this.csvc.deleteCartItem(i);
    };
    CartitemsComponent.prototype.getCartTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.cartItems; _i < _a.length; _i++) {
            var item = _a[_i];
            total += (item.price * item.qty);
        }
        return total;
    };
    CartitemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cartitems',
            template: __webpack_require__(/*! ./cartitems.component.html */ "./src/app/shopping/cartitems.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], CartitemsComponent);
    return CartitemsComponent;
}());



/***/ }),

/***/ "./src/app/shopping/category/category.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shopping/category/category.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Manage Categories</h4>>\n\n<form>\n  <input name=\"txtId\" [(ngModel)]=\"frmCtg.id\" placeholder=\"Category Id\">\n  <input name=\"txtName\" [(ngModel)]=\"frmCtg.name\" placeholder=\"Category Name\">\n  <button class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n</form>\n<br>\n\n<table class=\"table table-bordered\">\n  <tr>\n    <th>Id</th><th>Name</th>\n  </tr>\n  <tr *ngIf=\"categories.length == 0\">\n    <th colspan=\"3\">No data found</th>\n  </tr>\n  <tr *ngFor=\"let ctg of categories\">\n    <td>{{ctg.id}}</td>\n    <td>{{ctg.name}}</td>\n    <td>\n      <button class=\"btn btn-danger\" (click)=\"delete(ctg.id)\">Delete</button>\n      <button class=\"btn btn-success\" (click)=\"edit(ctg)\">Edit</button>\n    </td>\n  </tr> \n</table>"

/***/ }),

/***/ "./src/app/shopping/category/category.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shopping/category/category.component.ts ***!
  \*********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/category.model */ "./src/app/shopping/models/category.model.ts");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/category.service */ "./src/app/shared/services/category.service.ts");




var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(ctgsvc) {
        this.ctgsvc = ctgsvc;
        this.categories = [];
        // @Input
        this.frmCtg = new _models_category_model__WEBPACK_IMPORTED_MODULE_2__["Category"](null, null);
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ctgsvc.getCategories().subscribe(function (data) {
            _this.categories = data;
        }, function (err) {
            console.log("Error: ", err);
        });
    };
    CategoryComponent.prototype.save = function () {
        var _this = this;
        if (this.frmCtg.id == undefined) {
            this.ctgsvc.addCategory(this.frmCtg).subscribe(function (data) {
                console.log("Saved successfully");
                _this.categories.push(data);
                _this.frmCtg = new _models_category_model__WEBPACK_IMPORTED_MODULE_2__["Category"](null, null);
            }, function (err) {
                console.log("Error: ", err);
            });
        }
        else {
            this.ctgsvc.updateCategory(this.frmCtg).subscribe(function (data) {
                console.log("Update success");
                var idx = _this.categories.findIndex(function (e) { return e.id == data.id; });
                _this.categories[idx] = data;
            }, function (err) {
                console.log("Update error: ", err);
            });
        }
    };
    CategoryComponent.prototype.delete = function (id) {
        var _this = this;
        this.ctgsvc.deleteCategory(id).subscribe(function (data) {
            console.log("Delete success");
            var idx = _this.categories.findIndex(function (e) { return e.id == id; });
            _this.categories.splice(idx, 1);
        }, function (err) {
            console.log('Delete error: ', err);
        });
    };
    CategoryComponent.prototype.edit = function (selectedCtg) {
        // this.frmCtg.id = selectedCtg.id
        // this.frmCtg.name = selectedCtg.name
        Object.assign(this.frmCtg, selectedCtg);
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/shopping/category/category.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/shopping/models/cartitems.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shopping/models/cartitems.model.ts ***!
  \****************************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
var CartItem = /** @class */ (function () {
    // Define and initialize using TypeScript syntax
    function CartItem(id, name, price, qty) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    return CartItem;
}());



/***/ }),

/***/ "./src/app/shopping/models/category.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shopping/models/category.model.ts ***!
  \***************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(id, name) {
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/shopping/models/product.models.ts":
/*!***************************************************!*\
  !*** ./src/app/shopping/models/product.models.ts ***!
  \***************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    // Define and initialize using TypeScript syntax
    function Product(id, name, price, description, ctgid) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.ctgid = ctgid;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/shopping/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/shopping/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <h3>List of products</h3>\n  <div>\n      <div colspan=\"1\">{{myDate | date:\"MMM/dd/yyyy\"}}</div>\n        <input placeholder=\"Input here to search\" [(ngModel)]=\"queryString\">\n  </div>\n  <div class=\"card-deck\">\n    <div class=\"card\" *ngFor=\"let product of products | searchData:queryString:'name'\" >\n      <div class=\"card-header bg-warning\">\n        <b>{{product.name | uppercase }}</b>\n      </div>\n      <div class=\"card-body\">\n        {{product.price | currency:'JPY'}}\n        <br>\n        <b>\"{{product.description}}\"</b>\n      </div>\n      <div class=\"card-footer\">\n        <button class=\"btn btn-primary\" (click)=\"addToCart(product)\">Add to Cart</button>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/shopping/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/shopping/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _models_cartitems_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/cartitems.model */ "./src/app/shopping/models/cartitems.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(psvc, csvc, ar) {
        this.psvc = psvc;
        this.csvc = csvc;
        this.ar = ar;
        this.myDate = new Date();
        this.queryString = '';
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ar.params.subscribe(function (paramData) {
            var paramId = paramData.ctgid;
            if (paramId == undefined) {
                _this.products = _this.psvc.getProducts();
            }
            else {
                _this.products = _this.psvc.getProducts().filter(function (e) { return e.ctgid == paramId; });
            }
        });
    };
    ProductsComponent.prototype.addToCart = function (prod) {
        var item = new _models_cartitems_model__WEBPACK_IMPORTED_MODULE_4__["CartItem"](prod.id, prod.name, prod.price, 1);
        var existingItems = this.csvc.getCartItems();
        // TODO: also check how to prevent negative qty
        // Check if the item exists in the cart then increment quantity
        // for item of existingItems {
        //     if item
        // }
        // Else add it to the cart
        this.csvc.addCartItem(item);
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/shopping/products.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shopping/shopping.module.ts ***!
  \*********************************************/
/*! exports provided: ShoppingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingModule", function() { return ShoppingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ "./src/app/shopping/products.component.ts");
/* harmony import */ var _cartitems_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cartitems.component */ "./src/app/shopping/cartitems.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category/category.component */ "./src/app/shopping/category/category.component.ts");
/* harmony import */ var _shared_services_login_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/login.guard */ "./src/app/shared/services/login.guard.ts");










var ShoppingModule = /** @class */ (function () {
    function ShoppingModule() {
        console.log("Shopping Module constructor");
    }
    ShoppingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], _cartitems_component__WEBPACK_IMPORTED_MODULE_3__["CartitemsComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"]],
            exports: [_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], _cartitems_component__WEBPACK_IMPORTED_MODULE_3__["CartitemsComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([{ path: "categories", component: _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"], canActivate: [_shared_services_login_guard__WEBPACK_IMPORTED_MODULE_9__["LoginGuard"]] }])],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingModule);
    return ShoppingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\angularproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map