(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-verification-code-login-verification-code-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-verification-code/login-verification-code.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-verification-code/login-verification-code.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\" >\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n  <!-- <ion-input type=\"number\" [(ngModel)]=\"vCode\" placeholder=\"Awesome Input\"></ion-input>\n  <ion-button (click)=\"LoginOk()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    Ok\n  </ion-button>\n  <ion-button (click)=\"cancel()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n    cancel\n  </ion-button> -->\n\n  <body>\n    \n\n\n  <div id=\"wrapper\">\n    <div id=\"dialog\">\n      <div class=\"icon\">\n          <img src=\"assets\\imgs\\logo.png\" alt=\"\">\n      </div>\n      <div class=\"icon\">\n        <img src=\"assets\\imgs\\password.svg\" alt=\"\">\n    </div>\n      <span>( {{'VERIFI_MESSAGE' | translate }} )</span> \n      <div id=\"form\" dir=\"ltr\">\n        <input [(ngModel)]=\"C1\" id=\"VC1\" type=\"text\" maxLength=\"1\" size=\".5\" min=\"0\" max=\"8\" pattern=\"[0-9]{1}\" (input)=\"changeC1($event)\"/>\n        <input [(ngModel)]=\"C2\" id=\"VC2\" type=\"text\" maxLength=\"1\" size=\".5\" min=\"0\" max=\"8\" pattern=\"[0-9]{1}\" (input)=\"changeC2($event)\"/>\n        <input [(ngModel)]=\"C3\" id=\"VC3\" type=\"text\" maxLength=\"1\" size=\".5\" min=\"0\" max=\"8\" pattern=\"[0-9]{1}\" (input)=\"changeC3($event)\"/>\n        <input [(ngModel)]=\"C4\" id=\"VC4\" type=\"text\" maxLength=\"1\" size=\".5\" min=\"0\" max=\"8\" pattern=\"[0-9]{1}\" (input)=\"changeC4($event)\"/>\n        <input [(ngModel)]=\"C5\" id=\"VC5\" type=\"text\" maxLength=\"1\" size=\".5\" min=\"0\" max=\"8\" pattern=\"[0-9]{1}\" (input)=\"changeC5($event)\"/>\n        <input [(ngModel)]=\"C6\" id=\"VC6\" type=\"text\" maxLength=\"1\" size=\".5\" min=\"0\" max=\"8\" pattern=\"[0-9]{1}\" (input)=\"changeC6($event)\"/>\n        <ion-button class=\"btn\" (click)=\"LoginOk()\">{{'Verify' | translate}}</ion-button>\n      </div>\n<!--       \n      <div>\n        Didn't receive the code?<br />\n        <a href=\"login\">Send code again</a><br />\n        <a href=\"login\">Change phone number</a>\n      </div> -->\n       <!-- <img src=\"http://jira.moovooz.com/secure/attachment/10424/VmVyaWZpY2F0aW9uLnN2Zw==\" alt=\"test\" /> -->\n    </div>\n  </div>\n\n\n\n</body>");

/***/ }),

/***/ "./src/app/login-verification-code/login-verification-code.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/login-verification-code/login-verification-code.module.ts ***!
  \***************************************************************************/
/*! exports provided: LoginVerificationCodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginVerificationCodePageModule", function() { return LoginVerificationCodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_verification_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-verification-code.page */ "./src/app/login-verification-code/login-verification-code.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _login_verification_code_page__WEBPACK_IMPORTED_MODULE_6__["LoginVerificationCodePage"]
    }
];
let LoginVerificationCodePageModule = class LoginVerificationCodePageModule {
};
LoginVerificationCodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            // TokenService
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_login_verification_code_page__WEBPACK_IMPORTED_MODULE_6__["LoginVerificationCodePage"]]
    })
], LoginVerificationCodePageModule);



/***/ }),

/***/ "./src/app/login-verification-code/login-verification-code.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/login-verification-code/login-verification-code.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background: var(--content-color); }\n\n#wrapper {\n  font-family: Lato;\n  font-size: 1.2rem;\n  text-align: center;\n  box-sizing: border-box;\n  color: #333; }\n\n#wrapper #dialog {\n    margin: 10px auto;\n    padding: 20px 30px;\n    display: inline-block;\n    background-color: var(--content-color);\n    overflow: hidden;\n    position: relative;\n    max-width: 450px; }\n\n#wrapper #dialog .icon {\n      width: 140px;\n      margin-left: auto;\n      margin-right: auto; }\n\n#wrapper #dialog .btn {\n      margin-top: 20px; }\n\n#wrapper #dialog span {\n      font-size: 90%; }\n\n#wrapper #dialog #form {\n      max-width: 240px;\n      margin: 25px auto 0; }\n\n#wrapper #dialog #form input {\n        margin: 0 5px;\n        text-align: center;\n        line-height: 46px;\n        font-size: 40px;\n        border: solid 1px #ccc;\n        box-shadow: 0 0 5px #ccc inset;\n        outline: none;\n        width: 12%;\n        transition: all 0.2s ease-in-out;\n        border-radius: 3px; }\n\n#wrapper #dialog #form input:focus {\n          border-color: #3880ff;\n          box-shadow: 0 0 8px #3880ff inset; }\n\n#wrapper #dialog #form input::-moz-selection {\n          background: transparent; }\n\n#wrapper #dialog #form input::selection {\n          background: transparent; }\n\n#wrapper #dialog button.close {\n      border: solid 2px;\n      border-radius: 30px;\n      line-height: 19px;\n      font-size: 120%;\n      width: 22px;\n      position: absolute;\n      right: 5px;\n      top: 5px; }\n\n#wrapper #dialog div {\n      position: relative;\n      z-index: 1; }\n\nimg {\n  margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tdmVyaWZpY2F0aW9uLWNvZGUvRDpcXHdvcmtcXHByb2plY3RcXFNIQ1Qvc3JjXFxhcHBcXGxvZ2luLXZlcmlmaWNhdGlvbi1jb2RlXFxsb2dpbi12ZXJpZmljYXRpb24tY29kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBK0IsRUFBQTs7QUFHbkM7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUxmO0lBU00saUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFFckIsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7O0FBaEJ0QjtNQW1CUSxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBOztBQXJCMUI7TUF5QlUsZ0JBQWdCLEVBQUE7O0FBekIxQjtNQTZCUSxjQUFjLEVBQUE7O0FBN0J0QjtNQWlDUSxnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUE7O0FBbEMzQjtRQXFDUyxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5QixhQUFhO1FBQ2IsVUFBVTtRQUNWLGdDQUFnQztRQUNoQyxrQkFBa0IsRUFBQTs7QUE5QzNCO1VBaURZLHFCQUFvQjtVQUNwQixpQ0FBaUMsRUFBQTs7QUFsRDdDO1VBc0RZLHVCQUF1QixFQUFBOztBQXREbkM7VUFzRFksdUJBQXVCLEVBQUE7O0FBdERuQztNQXNFVSxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsUUFBUSxFQUFBOztBQTdFbEI7TUFrRlEsa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTs7QUFXaEI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXZlcmlmaWNhdGlvbi1jb2RlL2xvZ2luLXZlcmlmaWNhdGlvbi1jb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWNvbnRlbnQtY29sb3IpO1xyXG59XHJcblxyXG4jd3JhcHBlciB7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgXHJcbiAgICAjZGlhbG9nIHtcclxuICAgICAvLyBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgLy8gYm94LXNoYWRvdzogMCAwIDRweCAjY2NjO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgICBcclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5idG57XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDkwJTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI2Zvcm0ge1xyXG4gICAgICAgIG1heC13aWR0aDogMjQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG8gMDtcclxuICAgICAgICBcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgbGluZS1oZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjY2NjIGluc2V0O1xyXG4gICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICB3aWR0aDogMTIlO1xyXG4gICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiMzODgwZmY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggIzM4ODBmZiBpbnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJjo6c2VsZWN0aW9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGJ1dHRvbiB7XHJcbiAgICAgICAgLy8gICBtYXJnaW46ICAzMHB4IDAgNTBweDtcclxuICAgICAgICAvLyAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogI0I4NUZDNjtcclxuICAgICAgICAvLyAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAvLyAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgICYuY2xvc2Uge1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZGl2IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIC8vICAgaW1nIHtcclxuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyAgICAgYm90dG9tOiAtNzBweDtcclxuICAgIC8vICAgICByaWdodDogLTYzcHg7XHJcbiAgICAvLyAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/login-verification-code/login-verification-code.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/login-verification-code/login-verification-code.page.ts ***!
  \*************************************************************************/
/*! exports provided: LoginVerificationCodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginVerificationCodePage", function() { return LoginVerificationCodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_login_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login/login */ "./src/app/services/login/login.ts");
/* harmony import */ var _models_AuthenticateModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/AuthenticateModel */ "./src/app/models/AuthenticateModel.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_Settings_Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/Settings/Settings */ "./src/app/services/Settings/Settings.ts");
/* harmony import */ var _services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/TempDataDistributor/TempDataDistributor */ "./src/app/services/TempDataDistributor/TempDataDistributor.ts");










let LoginVerificationCodePage = class LoginVerificationCodePage {
    constructor(_login, activeRouter, router, storage, _loading, _translate, _setting, _tempData
    // private _tokenService: TokenService
    ) {
        this._login = _login;
        this.activeRouter = activeRouter;
        this.router = router;
        this.storage = storage;
        this._loading = _loading;
        this._translate = _translate;
        this._setting = _setting;
        this._tempData = _tempData;
        this.currentLang = 'ar';
    }
    ngOnInit() {
        if (this.activeRouter.snapshot.data['dataSharing']) {
            this.UserName = this.activeRouter.snapshot.data['dataSharing'];
            // this.vCode = this.activeRouter.snapshot.data['dataSharing'].verificationCode;
            console.log(this.UserName);
        }
    }
    LoginOk() {
        this._loading.present();
        this.vCode = this.C1 + this.C2 + this.C3 + this.C4 + this.C5 + this.C6; //mobile Code .
        console.log(this.vCode);
        let modelResult = {
            password: this.vCode,
            rememberClient: true,
            userNameOrEmailAddress: this.UserName,
            returnUrl: "tabs/tab3",
            twoFactorRememberClientToken: "",
            twoFactorVerificationCode: "",
            singleSignIn: false
        };
        let userInfoForLogin = new _models_AuthenticateModel__WEBPACK_IMPORTED_MODULE_3__["AuthenticateModel"](modelResult); //send Info for Login...
        this._login.authenticate(userInfoForLogin).subscribe((result) => {
            this.getCurrentUserLanguage();
            setTimeout(() => {
                this._loading.dismiss();
                this.processAuthenticateResult(result.result, result.result.returnUrl); // process Authenticate Result
            }, 1500);
            console.log(result);
            window.localStorage.setItem('userId', result.result.userId.toString());
        }, error => {
            this._loading.dismiss();
            console.log(error);
        });
    }
    processAuthenticateResult(authenticateResult, redirectUrl) {
        this.authenticateResult = authenticateResult;
        if (authenticateResult.accessToken) {
            // Successfully logged in
            this._tempData.authState.next(true);
            if (authenticateResult.returnUrl && !redirectUrl) {
                redirectUrl = authenticateResult.returnUrl;
                console.log(redirectUrl);
                console.log(" Successfully logged in");
            }
            this.login(authenticateResult.accessToken, authenticateResult.encryptedAccessToken, authenticateResult.expireInSeconds, true, authenticateResult.twoFactorRememberClientToken, redirectUrl);
        }
        else {
            // Unexpected result!
            this._tempData.authState.next(false);
            console.log('Unexpected authenticateResult!');
            this.router.navigate(['/login']);
        }
    }
    login(accessToken, encryptedAccessToken, expireInSeconds, rememberMe, twoFactorRememberClientToken, redirectUrl) {
        let tokenExpireDate = rememberMe ? (new Date(new Date().getTime() + 1000 * expireInSeconds)) : undefined;
        this.storage.set('accessToken', accessToken);
        console.log(tokenExpireDate);
        window.localStorage.setItem('accessToken', accessToken);
        window.localStorage.setItem('tokenExpireDate', tokenExpireDate.toString());
        if (redirectUrl) {
            this._tempData.authState.next(true);
            this._translate.use(this.currentLang);
            window.localStorage.setItem('lang', this.currentLang);
            //location.href = redirectUrl;
            this.router.navigateByUrl(redirectUrl);
        }
        else {
            // location.href = '/login';
            this.router.navigateByUrl('/login');
        }
    }
    getCurrentUserLanguage() {
        this._setting.getCurrentUserLanguage().subscribe(lang => {
            this.currentLang = lang.result;
            console.log(this.currentLang);
        });
    }
    changeC1(e) {
        console.log(e.data);
        //this.C1 = e.data
        if (parseInt(e.data) >= 0 && parseInt(e.data) <= 9)
            document.getElementById("VC2").focus();
    }
    changeC2(e) {
        console.log(e.data);
        //  this.C2 = e.data
        if (parseInt(e.data) >= 0 && parseInt(e.data) <= 9)
            document.getElementById("VC3").focus();
    }
    changeC3(e) {
        console.log(e.data);
        // this.C3 = e.data
        if (parseInt(e.data) >= 0 && parseInt(e.data) <= 9)
            document.getElementById("VC4").focus();
    }
    changeC4(e) {
        console.log(e.data);
        //  this.C4 = e.data
        if (parseInt(e.data) >= 0 && parseInt(e.data) <= 9)
            document.getElementById("VC5").focus();
    }
    changeC5(e) {
        console.log(e.data);
        // this.C5 = e.data
        if (parseInt(e.data) >= 0 && parseInt(e.data) <= 9)
            document.getElementById("VC6").focus();
    }
    changeC6(e) {
        console.log(e.data);
        //  this.C6 = e.data
        // document.getElementById("VC6").focus();
    }
};
LoginVerificationCodePage.ctorParameters = () => [
    { type: _services_login_login__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _services_Settings_Settings__WEBPACK_IMPORTED_MODULE_8__["SettingsService"] },
    { type: _services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_9__["TempDataDistributorService"] }
];
LoginVerificationCodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-verification-code',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-verification-code.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-verification-code/login-verification-code.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-verification-code.page.scss */ "./src/app/login-verification-code/login-verification-code.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_login__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _services_Settings_Settings__WEBPACK_IMPORTED_MODULE_8__["SettingsService"],
        _services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_9__["TempDataDistributorService"]
        // private _tokenService: TokenService
    ])
], LoginVerificationCodePage);



/***/ }),

/***/ "./src/app/models/AuthenticateModel.ts":
/*!*********************************************!*\
  !*** ./src/app/models/AuthenticateModel.ts ***!
  \*********************************************/
/*! exports provided: AuthenticateModel, AuthenticateResultModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateModel", function() { return AuthenticateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateResultModel", function() { return AuthenticateResultModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AuthenticateModel {
    constructor(authenticateModel) {
        this.userNameOrEmailAddress = authenticateModel.userNameOrEmailAddress;
        this.password = authenticateModel.password;
        this.twoFactorRememberClientToken = authenticateModel.twoFactorRememberClientToken;
        this.twoFactorVerificationCode = authenticateModel.twoFactorVerificationCode;
        this.rememberClient = authenticateModel.rememberClient;
        this.singleSignIn = authenticateModel.singleSignIn;
        this.returnUrl = authenticateModel.returnUrl;
    }
}
class AuthenticateResultModel {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(data) {
        if (data) {
            this.accessToken = data["accessToken"];
            this.encryptedAccessToken = data["encryptedAccessToken"];
            this.expireInSeconds = data["expireInSeconds"];
            this.shouldResetPassword = data["shouldResetPassword"];
            this.passwordResetCode = data["passwordResetCode"];
            this.userId = data["userId"];
            this.requiresTwoFactorVerification = data["requiresTwoFactorVerification"];
            if (data["twoFactorAuthProviders"] && data["twoFactorAuthProviders"].constructor === Array) {
                this.twoFactorAuthProviders = [];
                for (let item of data["twoFactorAuthProviders"])
                    this.twoFactorAuthProviders.push(item);
            }
            this.twoFactorRememberClientToken = data["twoFactorRememberClientToken"];
            this.returnUrl = data["returnUrl"];
            this.refreshToken = data["refreshToken"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new AuthenticateResultModel();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["accessToken"] = this.accessToken;
        data["encryptedAccessToken"] = this.encryptedAccessToken;
        data["expireInSeconds"] = this.expireInSeconds;
        data["shouldResetPassword"] = this.shouldResetPassword;
        data["passwordResetCode"] = this.passwordResetCode;
        data["userId"] = this.userId;
        data["requiresTwoFactorVerification"] = this.requiresTwoFactorVerification;
        if (this.twoFactorAuthProviders && this.twoFactorAuthProviders.constructor === Array) {
            data["twoFactorAuthProviders"] = [];
            for (let item of this.twoFactorAuthProviders)
                data["twoFactorAuthProviders"].push(item);
        }
        data["twoFactorRememberClientToken"] = this.twoFactorRememberClientToken;
        data["returnUrl"] = this.returnUrl;
        data["refreshToken"] = this.refreshToken;
        return data;
    }
}


/***/ })

}]);
//# sourceMappingURL=login-verification-code-login-verification-code-module-es2015.js.map