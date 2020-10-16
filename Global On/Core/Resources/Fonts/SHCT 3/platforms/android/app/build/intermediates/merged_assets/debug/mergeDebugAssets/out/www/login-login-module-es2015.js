(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'SIGN_IN' | translate}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"#\" (click)=\"PreviousPage()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--   \n  <ion-item>\n    <ion-select [(ngModel)]=\"language\" (ionChange)=\"changeLanguage()\">\n       <ion-select-option value=\"en\" selected=\"true\">English</ion-select-option>\n       <ion-select-option value=\"fr\">French</ion-select-option>\n       <ion-select-option value=\"ar\">Arabic</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <div class=\"logo\">\n    <img src=\"assets\\imgs\\logo.png\" alt=\"\">\n  </div>\n\n  <!-- Segment with default selection -->\n  <ion-segment value=\"SignIn\" [(ngModel)]=\"SignInForm\" mode=\"md\">\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-segment-button mode=\"md\" value=\"SignIn\">\n            <ion-label>{{'SIGN_IN' | translate}}</ion-label>\n          </ion-segment-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-segment-button mode=\"md\" value=\"SignUP\">\n            <ion-label>{{'SIGN_UP' | translate}}</ion-label>\n          </ion-segment-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </ion-segment>\n\n\n  <div [ngSwitch]=\"SignInForm\">\n\n\n    <ion-list *ngSwitchCase=\"'SignIn'\">\n      <form [formGroup]=\"SignInF\">\n\n        <div class=\"name\">\n          <ion-label position=\"floating\">{{'ID' | translate}} <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <ion-input type=\"text\" formControlName=\"signIn_IdForm\" [(ngModel)]=\"id\" required>\n            <i class=\"material-icons\">\n              assignment_ind\n            </i>\n          </ion-input>\n\n          <!-- validation message -->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.Required_message\">\n              <div class=\"error-message\"\n                *ngIf=\"SignInF.get('signIn_IdForm').hasError(validation.type) && (SignInF.get('signIn_IdForm').dirty || SignInF.get('signIn_IdForm').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <!-- end validation message -->\n\n        </div>\n\n        <div class=\"name\">\n          <ion-label position=\"floating\">{{'PHONE_NYMBER' | translate}} <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <ion-input type=\"text\" formControlName=\"signInPhone\" [(ngModel)]=\"loginPhone\" required>\n            <i class=\"material-icons\">\n              local_phone\n            </i>\n          </ion-input>\n\n          <!-- validation message -->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.Required_message\">\n              <div class=\"error-message\"\n                *ngIf=\"SignInF.get('signInPhone').hasError(validation.type) && (SignInF.get('signInPhone').dirty || SignInF.get('signInPhone').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <!-- end validation message -->\n\n        </div>\n        <br>\n        <div class=\"Loginbutton\">\n          <!-- [disabled]=\"PatientFoem.invalid\" -->\n          <ion-button (click)=\"login()\" translate [disabled]=\"SignInF.invalid\">\n            {{'SIGN_IN' | translate}}\n          </ion-button>\n        </div>\n      </form>\n    </ion-list>\n\n\n\n\n\n\n    <ion-list *ngSwitchCase=\"'SignUP'\">\n\n      <form [formGroup]=\"PatientFoem\">\n        <!-- \n        <ion-slides pager=\"true\" #slides [options]=\"slideOpts\"> -->\n        <!-- <ion-slide> -->\n\n        <div class=\"name\">\n          <ion-label position=\"floating\">{{'FRIST_NAME' | translate}}<ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <ion-input type=\"text\" formControlName=\"FName\" [(ngModel)]=\"FName\" type=\"text\" required>\n            <i class=\"material-icons\">\n              person\n            </i>\n          </ion-input>\n\n          <!-- validation message -->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.Required_message\">\n              <div class=\"error-message\"\n                *ngIf=\"PatientFoem.get('FName').hasError(validation.type) && (PatientFoem.get('FName').dirty || PatientFoem.get('FName').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <!-- end validation message -->\n\n        </div>\n\n        <div class=\"name\">\n          <ion-label position=\"floating\">{{'LAST_NAME' | translate}} <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <ion-input type=\"text\" formControlName=\"LName\" [(ngModel)]=\"LName\" type=\"text\" required>\n            <i class=\"material-icons\">\n              person\n            </i>\n          </ion-input>\n\n          <!-- validation message -->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.Required_message\">\n              <div class=\"error-message\"\n                *ngIf=\"PatientFoem.get('LName').hasError(validation.type) && (PatientFoem.get('LName').dirty || PatientFoem.get('LName').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <!-- end validation message -->\n\n        </div>\n\n\n        <div class=\"name\">\n          <ion-label position=\"floating\">{{'ID' | translate}} <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <ion-input type=\"number\" formControlName=\"UserName\" [(ngModel)]=\"UserName\"  required>\n            <i class=\"material-icons\">\n              assignment_ind\n            </i>\n          </ion-input>\n\n          <!-- validation message -->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.Required_message\">\n              <div class=\"error-message\"\n                *ngIf=\"PatientFoem.get('UserName').hasError(validation.type) && (PatientFoem.get('UserName').dirty || PatientFoem.get('UserName').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <!-- end validation message -->\n\n        </div>\n\n        <div class=\"name\">\n          <ion-label position=\"floating\">{{'EMAIL' | translate}} <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <ion-input type=\"text\" formControlName=\"Email\" [(ngModel)]=\"Email\" required>\n            <i class=\"material-icons\">\n              mail\n            </i>\n          </ion-input>\n\n          <!-- validation message -->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.Required_message\">\n              <div class=\"error-message\"\n                *ngIf=\"PatientFoem.get('Email').hasError(validation.type) && (PatientFoem.get('Email').dirty || PatientFoem.get('Email').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <!-- end validation message -->\n\n        </div>\n\n        <div class=\"name\">\n          <ion-label position=\"floating\">{{'PHONE_NYMBER' | translate}} <ion-text color=\"danger\">*</ion-text>\n          </ion-label>\n          <ion-input type=\"number\" formControlName=\"Phone\" [(ngModel)]=\"R_Phone\" required>\n            <i class=\"material-icons\">\n              local_phone\n            </i>\n          </ion-input>\n\n          <!-- validation message -->\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.Required_message\">\n              <div class=\"error-message\"\n                *ngIf=\"PatientFoem.get('Phone').hasError(validation.type) && (PatientFoem.get('Phone').dirty || PatientFoem.get('Phone').touched)\">\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n          <!-- end validation message -->\n\n        </div>\n\n        <!-- </ion-slide> -->\n\n\n        <!-- <ion-slide>\n\n            <ion-grid fixed>\n\n              <ion-row>\n                <ion-col size=\"6\">\n\n                  <div class=\"name\">\n                    <ion-label position=\"floating\">{{'COUNTRIES' | translate}} </ion-label>\n                    <ion-select  [(ngModel)]=\"Country\" (ionChange)=\"loadRegions(Country)\"\n                      [ngModelOptions]=\"{standalone: true}\">\n                      <ion-select-option *ngFor=\"let country of countries\" [value]=\"country\">{{country.name}}\n                      </ion-select-option>\n                    </ion-select>\n                  </div>\n\n                </ion-col>\n\n                <ion-col size=\"6\">\n\n                  <div class=\"name\">\n                    <ion-label position=\"floating\">{{'REGION' | translate}} </ion-label>\n                    <ion-select [(ngModel)]=\"Region\" (ionChange)=\"loadCities(Region)\"\n                      [ngModelOptions]=\"{standalone: true}\">\n                      <ion-select-option *ngFor=\"let region of regions\" [value]=\"region\">{{region.name}}\n                      </ion-select-option>\n                    </ion-select>\n                  </div>\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n            <div class=\"name\">\n              <ion-label position=\"floating\">{{'CITY' | translate}} </ion-label>\n              <ion-select   [(ngModel)]=\"City\" (ionChange)=\"loadDistricts(City)\"\n              [ngModelOptions]=\"{standalone: true}\">\n              <ion-select-option *ngFor=\"let city of cities\" [value]=\"city\">{{city.name}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n\n\n            <div class=\"name\">\n                <ion-label position=\"floating\">{{'DISTRICT' | translate}} </ion-label>\n              <ion-select [(ngModel)]=\"District\" (ionChange)=\"districtsSelected(District)\"\n              [ngModelOptions]=\"{standalone: true}\">\n              <ion-select-option *ngFor=\"let district of districts\" [value]=\"district\">{{district.name}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n\n\n            <div class=\"name\">\n              <ion-label position=\"stacked\">{{'ADDRESS' | translate}}</ion-label>\n              <ion-textarea [(ngModel)]=\"addressDetails\" [ngModelOptions]=\"{standalone: true}\"></ion-textarea>\n            </div>\n\n          </ion-slide>\n\n          <ion-slide>\n            <h1>Slide 3</h1>\n          </ion-slide>\n\n        </ion-slides> -->\n        <div class=\"divBT\">\n          <ion-button color=\"danger\" [disabled]=\"PatientFoem.invalid\" (click)=\"registerMobileUser()\">\n            <!-- <ion-icon name=\"arrow-round-forward\" slot=\"end\"></ion-icon> -->\n            {{'NEXT' | translate}}\n          </ion-button>\n        </div>\n\n      </form>\n\n\n      <!-- <div class=\"divBT\">\n         <ion-button style=\"margin-right: 50px;\" color=\"danger\" (click)=\"slidPrev()\" *ngIf=\"slideIndexNumber > 0\">\n          {{'PREVIOUS' | translate}}\n        </ion-button> \n         <ion-button color=\"danger\" [disabled]=\"PatientFoem.invalid\" (click)=\"registerMobileUser()\" style=\"margin-top: 5px;\">\n          <ion-icon name=\"arrow-round-forward\" slot=\"end\"></ion-icon>\n          {{'NEXT' | translate}}\n        </ion-button> \n         <ion-button [disabled]=\"PatientFoem.invalid\" color=\"danger\" (click)=\"createPatient()\" *ngIf=\"lastSlide\">\n          {{'FINISH' | translate}}\n        </ion-button> \n      </div> -->\n\n    </ion-list>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/enums/AlertMessage.ts":
/*!***************************************!*\
  !*** ./src/app/enums/AlertMessage.ts ***!
  \***************************************/
/*! exports provided: LoginAlertMessage, RegisterAlertMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAlertMessage", function() { return LoginAlertMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterAlertMessage", function() { return RegisterAlertMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var LoginAlertMessage;
(function (LoginAlertMessage) {
    LoginAlertMessage["title_ar"] = "\u062E\u0637\u0623 \u0641\u064A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062F\u062E\u0648\u0644";
    LoginAlertMessage["title_en"] = "Login Failed";
    LoginAlertMessage["messageLoginFaild_ar"] = "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0623\u0648 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0644\u064A\u0633 \u0645\u062A\u0637\u0627\u0628\u0642";
    LoginAlertMessage["messageLoginFaild_en"] = "Your ID or Phone number do not match.";
})(LoginAlertMessage || (LoginAlertMessage = {}));
var RegisterAlertMessage;
(function (RegisterAlertMessage) {
    RegisterAlertMessage["title_ar"] = "\u062E\u0637\u0623 \u0641\u064A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u0633\u062C\u064A\u0644";
    RegisterAlertMessage["title_en"] = "Register Failed";
    RegisterAlertMessage["messageRegisterUserNameInvalid_ar"] = "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645/\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0630\u064A \u0627\u062F\u062E\u0644\u062A\u0647 \u0645\u0648\u062C\u0648\u062F \u0645\u0633\u0628\u0642\u0627";
    RegisterAlertMessage["messageRegisterUserNameInvalid_en"] = "The username/ID you entered already exists.";
    RegisterAlertMessage["messageRegisterEmailInvalid_ar"] = "\u062A\u0627\u0643\u062F \u0645\u0646 \u0627\u062F\u062E\u0627\u0644 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D";
    RegisterAlertMessage["messageRegisterEmailInvalid_en"] = "The EmailAddress field is not a valid e-mail address.";
})(RegisterAlertMessage || (RegisterAlertMessage = {}));


/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  width: 130px;\n  height: 145px;\n  margin-left: auto;\n  margin-right: auto; }\n\nion-slides {\n  background: var(--content-color);\n  height: 100%; }\n\nion-list {\n  background: var(--content-color); }\n\n.name {\n  text-align: justify;\n  padding-top: 10px; }\n\nion-input {\n  --background:white;\n  position: relative;\n  border-radius: 5px;\n  --padding-start:10px;\n  font-size: 12px;\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 5px;\n  padding-right: 5px; }\n\nion-slide {\n  display: block; }\n\n.label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h {\n  font-size: 13px;\n  color: dimgrey;\n  margin-left: 23px; }\n\n.label-floating.sc-ion-label-ios-h, .label-stacked.sc-ion-label-ios-h {\n  font-size: 13px;\n  color: dimgrey;\n  margin-left: 23px; }\n\nion-select {\n  background: white;\n  border-radius: 5px;\n  color: red;\n  font-size: 15px;\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto; }\n\nion-textarea {\n  background: white;\n  height: 50px;\n  border-radius: 8px;\n  font-size: 14px;\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.divBT {\n  text-align: center;\n  margin-bottom: 10px;\n  margin-top: 10px; }\n\n.divBT ion-button {\n    width: 90%; }\n\n.Loginbutton {\n  text-align: center; }\n\n.Loginbutton ion-button {\n    width: 90%; }\n\nion-label {\n  padding-right: 20px; }\n\n.error-message {\n  color: #f04141;\n  padding-left: 20px;\n  padding-right: 20px; }\n\nion-segment-button {\n  width: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXHdvcmtcXHByb2plY3RcXFNIQ1Qvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQ0FBZ0M7RUFDaEMsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdDQUFnQyxFQUFBOztBQUdwQztFQUNHLG1CQUFtQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFJbkI7RUFDRSxrQkFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsb0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHbEI7RUFFSSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUhsQjtJQUtJLFVBQVUsRUFBQTs7QUFJZDtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdLLFVBQVUsRUFBQTs7QUFHZjtFQUVGLG1CQUFtQixFQUFBOztBQUdqQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDE0NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29udGVudC1jb2xvcik7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG5pb24tbGlzdHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xyXG59XHJcblxyXG4ubmFtZXtcclxuICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICBcclxuICB9XHJcblxyXG4gIGlvbi1pbnB1dHtcclxuICAgIC0tYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OjEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4gIGlvbi1zbGlkZXtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiBkaW1ncmV5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzcHg7XHJcbn1cclxuLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCwgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLWlvcy1oIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6IGRpbWdyZXk7XHJcbiAgbWFyZ2luLWxlZnQ6IDIzcHg7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi10ZXh0YXJlYSB7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC5kaXZCVHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5Mb2dpbmJ1dHRvbiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgLy8gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lcnJvci1tZXNzYWdle1xyXG4gICAgICAgIGNvbG9yOiAjZjA0MTQxO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_Lookup_LookUps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/Lookup/LookUps */ "./src/app/services/Lookup/LookUps.ts");
/* harmony import */ var _services_login_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/login/login */ "./src/app/services/login/login.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/DataShare/data-share.service */ "./src/app/services/DataShare/data-share.service.ts");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var _enums_AlertMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../enums/AlertMessage */ "./src/app/enums/AlertMessage.ts");











let LoginPage = class LoginPage {
    constructor(_translate, _lookUp, _login, router, _dataShare, _loading, alertController, navctrl) {
        this._translate = _translate;
        this._lookUp = _lookUp;
        this._login = _login;
        this.router = router;
        this._dataShare = _dataShare;
        this._loading = _loading;
        this.alertController = alertController;
        this.navctrl = navctrl;
        //isEditable      : boolean = false;
        this.lastSlide = false;
        this.SignInForm = 'SignIn';
        this.validation_messages = {
            'Required_message': [{ type: 'required', message: 'required.' }],
        };
    }
    changeLanguage() {
        console.log(this.language);
        this._translate.use(this.language);
    }
    ngOnInit() {
        if (window.localStorage.getItem('lang') === 'ar') {
            this.validation_messages.Required_message[0].message = "لا تترك هذا الحقل فارغا";
        }
        this.setupForm();
        // this.loadNationalities();
        //this.loadCountries();
    }
    //#region  Validation
    setupForm() {
        this.SignInF = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            signIn_IdForm: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,])),
            signInPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,])),
        });
        this.PatientFoem = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            FName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,])),
            LName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,])),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,])),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,])),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,])),
        });
    }
    //#endregion
    login() {
        this._loading.present();
        let loginInput = {
            UserName: this.id,
            PhoneNumber: this.loginPhone.toString()
        };
        console.log(loginInput);
        this._login.loginWithNationalIdAndMobile(loginInput).subscribe(data => {
            this._loading.dismiss();
            this.titleLoginMessage = (this._translate.currentLang == 'ar') ? _enums_AlertMessage__WEBPACK_IMPORTED_MODULE_10__["LoginAlertMessage"].title_ar : _enums_AlertMessage__WEBPACK_IMPORTED_MODULE_10__["LoginAlertMessage"].title_en;
            this.messageLoginFaild = (this._translate.currentLang == 'ar') ? _enums_AlertMessage__WEBPACK_IMPORTED_MODULE_10__["LoginAlertMessage"].messageLoginFaild_ar : _enums_AlertMessage__WEBPACK_IMPORTED_MODULE_10__["LoginAlertMessage"].messageLoginFaild_en;
            console.log(data);
            if (data.result.status == 1) {
                this._dataShare.setData("loginInfo", this.id);
                this.router.navigateByUrl('/login-verification-code/loginInfo');
            }
            else
                this.presentAlert(this.titleLoginMessage, this.messageLoginFaild);
        }, error => {
            this._loading.dismiss();
            this.presentAlert(this.titleLoginMessage, this.messageLoginFaild);
            console.log(error);
        });
    }
    slidNext() {
        this.slides.slideNext();
        this.slides.isEnd().then(isEnd => {
            console.log(isEnd);
        });
        this.slides.getActiveIndex().then(Index => {
            console.log(Index);
            this.slideIndexNumber = Index;
            this.lastSlide = (Index === 2) ? true : false;
        });
    }
    slidPrev() {
        this.slides.slidePrev();
        this.slides.getActiveIndex().then(Index => {
            console.log(Index);
            this.slideIndexNumber = Index;
            this.lastSlide = (Index === 2) ? true : false;
        });
    }
    //#region LookUps
    // loadNationalities() {
    //   this._lookUp.getAllNationalities(this.to).subscribe(nationalities => {
    //     this.nationalities = nationalities.result;
    //     console.log(this.nationalities);
    //   })
    // }
    // loadCountries() {
    //   this._lookUp.getAllCountries().subscribe(
    //     countries => {
    //       this.countries = countries.result;
    //     }
    //   );
    //   console.log(this.countries);
    // }
    // loadRegions(country: LookUpDto) {
    //   this.country_Id = country.value;
    //   console.log(this.country_Id);
    //   console.log(country)
    //   this._lookUp.getAllRegions(undefined, country.value).subscribe(
    //     regions => {
    //       this.regions = regions.result;
    //     }
    //   )
    //   console.log(this.regions)
    // }
    // loadCities(region: LookUpDto) {
    //   this.region_Id = region.value;
    //   console.log(this.region_Id);
    //   console.log(region)
    //   this._lookUp.getAllCities(undefined, region.value).subscribe(
    //     cities => {
    //       this.cities = cities.result;
    //     }
    //   )
    //   console.log(this.cities)
    // }
    // loadDistricts(city: LookUpDto) {
    //   this.city_Id = city.value;
    //   console.log(this.city_Id);
    //   console.log(city)
    //   this._lookUp.getAllDistricts(undefined, city.value).subscribe(
    //     districts => {
    //       this.districts = districts.result;
    //     }
    //   )
    //   console.log(this.districts)
    // }
    districtsSelected(district) {
        this.district_Id = district.value;
        console.log(this.district_Id);
    }
    //#endregion
    registerMobileUser() {
        this._loading.present();
        this.newUser = {
            name: this.FName,
            surname: this.LName,
            userName: this.UserName,
            emailAddress: this.Email,
            phoneNumber: this.R_Phone
        };
        let user = new _services_login_login__WEBPACK_IMPORTED_MODULE_6__["MobileRegisterInput"](this.newUser);
        console.log(this.newUser);
        this._login.registerMobileUser(user).subscribe((data) => {
            this._loading.dismiss();
            console.log(data);
            if (data.result.status == 1) {
                this._dataShare.setData("loginInfo", this.UserName);
                this.router.navigateByUrl('/login-verification-code/loginInfo');
                this.mobileRegisterOutput = data.result;
                console.log(this.mobileRegisterOutput);
            }
            else
                this.presentAlert("", data.result.message);
        }, error => {
            this._loading.dismiss();
            console.log(error);
            this.titleRegisterMessage = (this._translate.currentLang == 'ar') ? _enums_AlertMessage__WEBPACK_IMPORTED_MODULE_10__["RegisterAlertMessage"].title_ar : _enums_AlertMessage__WEBPACK_IMPORTED_MODULE_10__["RegisterAlertMessage"].title_en;
            this.messageRegisterEmailInvalid = (this._translate.currentLang == 'ar') ? _enums_AlertMessage__WEBPACK_IMPORTED_MODULE_10__["RegisterAlertMessage"].messageRegisterEmailInvalid_ar : _enums_AlertMessage__WEBPACK_IMPORTED_MODULE_10__["RegisterAlertMessage"].messageRegisterEmailInvalid_en;
            this.messageRegisterUserNameInvalid = (this._translate.currentLang == 'ar') ? _enums_AlertMessage__WEBPACK_IMPORTED_MODULE_10__["RegisterAlertMessage"].messageRegisterUserNameInvalid_ar : _enums_AlertMessage__WEBPACK_IMPORTED_MODULE_10__["RegisterAlertMessage"].messageRegisterUserNameInvalid_en;
            if (error.error.error.validationErrors)
                this.presentAlert(this.titleRegisterMessage, this.messageRegisterEmailInvalid);
            else
                this.presentAlert(this.titleRegisterMessage, this.messageRegisterUserNameInvalid);
        });
    }
    presentAlert(title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    PreviousPage() {
        this.navctrl.back();
        // console.log(this.location.path());
    }
};
LoginPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_Lookup_LookUps__WEBPACK_IMPORTED_MODULE_5__["LookUps"] },
    { type: _services_login_login__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_8__["DataShareService"] },
    { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], LoginPage.prototype, "slides", void 0);
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _services_Lookup_LookUps__WEBPACK_IMPORTED_MODULE_5__["LookUps"],
        _services_login_login__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_8__["DataShareService"],
        _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map