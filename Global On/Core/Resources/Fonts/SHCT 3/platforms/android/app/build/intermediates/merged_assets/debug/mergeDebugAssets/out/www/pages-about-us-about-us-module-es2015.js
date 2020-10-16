(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-us-about-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n    <ion-toolbar>\n        <ion-title> {{'CONTACT_US' | translate}}</ion-title>\n        <ion-item lines=\"none\">\n            <ion-buttons slot=\"end\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <img src=\"assets\\imgs\\logo.png\" alt=\"\">\n            <ion-buttons slot=\"start\">\n                <ion-back-button defaultHref></ion-back-button>\n              </ion-buttons>\n        </ion-item>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item lines=\"none\">\n        <ion-label>\n            <!-- <b>{{'ABOUT_THE_COMPANY' | translate}}  </b> -->\n            <h1>{{'ABOUT_THE_COMPANY' | translate}}</h1>\n            <p [innerHtml]=\" aboutCompany\"></p>\n        </ion-label>\n    </ion-item>\n\n    <ion-text>\n        <h1>{{'CONTACT_US' | translate}}</h1>\n    </ion-text>\n<!-- \n    <ion-item lines=\"none\" class=\"padding\">\n        <b>{{'PHONE' | translate}} :</b>\n        <ion-item class=\"contactUs\" lines=\"none\">\n            <i slot=\"start\" class=\"material-icons\">\n                call\n            </i>\n            <ion-label>\n                <p>{{phone}}</p>\n            </ion-label>\n        </ion-item>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"padding\">\n        <b>{{'EMAIL' | translate}} :</b>\n        <ion-item class=\"contactUs\">\n            <i class=\"material-icons\" lines=\"none\">\n                email\n            </i>\n            <ion-label>\n                <p>{{email}}</p>\n            </ion-label>\n        </ion-item>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"padding\">\n        <b>{{'WEBSITE' | translate}} :</b>\n        <ion-item class=\"contactUs\" lines=\"none\">\n            <ion-label>\n                <a [href]=\"website\" target=\"_blank\">{{website}}</a>\n            </ion-label>\n        </ion-item>\n    </ion-item> -->\n\n    <!-- <ion-item>\n        <ion-label>\n            <h2>Email:</h2>\n            <p>{{email}}</p>\n        </ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-label>\n            <h2>Website:</h2>\n  \n        </ion-label>\n    </ion-item> -->\n\n    <ion-grid fixed>\n        <ion-row>\n            <ion-col>\n                <ion-item class=\"contactUs\" lines=\"none\">\n                    <!-- <i slot=\"start\" class=\"material-icons\">\n                        call\n                    </i> -->\n                    <ion-icon name=\"logo-whatsapp\"></ion-icon>\n                    <ion-label>\n                        <p>{{phone}}</p>\n                    </ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-item class=\"contactUs\">\n                    <!-- <i class=\"material-icons\" lines=\"none\">\n                        email\n                    </i> -->\n                    <ion-icon name=\"mail\"></ion-icon>\n                    <ion-label>\n                        <p>{{email}}</p>\n                    </ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-item class=\"contactUs\" lines=\"none\">\n                    <ion-icon name=\"globe\"></ion-icon>\n                    <ion-label>\n                        <a [href]=\"website\" target=\"_blank\">{{website}}</a>\n                    </ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/about-us/about-us.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.module.ts ***!
  \***************************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us.page */ "./src/app/pages/about-us/about-us.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]
    }
];
let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
    })
], AboutUsPageModule);



/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  margin-top: 10px; }\n\nimg {\n  width: 130px;\n  height: 145px;\n  margin-left: auto;\n  margin-right: auto; }\n\np {\n  white-space: pre-line; }\n\nh1 {\n  margin-top: 20px;\n  font-size: 16px;\n  color: #353535;\n  margin-left: 10px;\n  font-weight: 700; }\n\n.material-icons {\n  color: #7c7f84;\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 22px;\n  padding-left: 0px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  margin-right: 10px; }\n\n.contactUs {\n  width: 250px;\n  --background: #c4e4ff;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  --border-radius: 12px; }\n\n.padding {\n  margin-left: 20px; }\n\nion-label {\n  text-align: center; }\n\nion-text {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvRDpcXHdvcmtcXHByb2plY3RcXFNIQ1Qvc3JjXFxhcHBcXHBhZ2VzXFxhYm91dC11c1xcYWJvdXQtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1oscUJBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDQSxrQkFBa0IsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiAxNDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5we1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBjb2xvcjogIzdjN2Y4NDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFjdFVzIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2M0ZTRmZjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4ucGFkZGluZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgO1xyXG59XHJcbmlvbi1sYWJlbHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi10ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.ts ***!
  \*************************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_Settings_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Settings/Settings */ "./src/app/services/Settings/Settings.ts");



let AboutUsPage = class AboutUsPage {
    constructor(_settings) {
        this._settings = _settings;
        this.aboutCompany = '';
        this.phone = '';
        this.email = '';
        this.website = '';
    }
    ngOnInit() {
        this.getInfo();
    }
    getInfo() {
        this._settings.getAllSettings().subscribe(data => {
            this.aboutCompany = data.result.general.aboutCompany;
            this.phone = data.result.general.phone;
            this.email = data.result.general.email;
            this.website = data.result.general.website;
            console.log(data);
        });
    }
};
AboutUsPage.ctorParameters = () => [
    { type: src_app_services_Settings_Settings__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
];
AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.page.scss */ "./src/app/pages/about-us/about-us.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Settings_Settings__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
], AboutUsPage);



/***/ })

}]);
//# sourceMappingURL=pages-about-us-about-us-module-es2015.js.map