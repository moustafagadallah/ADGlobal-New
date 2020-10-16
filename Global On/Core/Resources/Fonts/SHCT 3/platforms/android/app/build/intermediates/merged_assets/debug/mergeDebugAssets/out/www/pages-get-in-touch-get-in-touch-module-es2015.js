(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-get-in-touch-get-in-touch-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/get-in-touch/get-in-touch.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/get-in-touch/get-in-touch.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>{{'GET_IN_TOUCH' | translate}}</ion-title>\n    <ion-item lines=\"none\">\n      <ion-buttons slot=\"end\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <img src=\"assets\\imgs\\logo.png\" alt=\"\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref></ion-back-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"none\">\n    <ion-label style=\" white-space: pre-wrap !important;\">\n      <p>\n        {{'GET_IN_TOUCH_MESSAGE' | translate}}\n      </p>\n    </ion-label>\n  </ion-item>\n\n\n  <ion-item lines=\"none\" >\n    <input class=\"input-radio\" type=\"radio\" [(ngModel)]=\"radio\" value=\"40\" name=\"Enquiry\">\n    <ion-label class=\"label\">{{'ENQUIRY' | translate}}</ion-label>\n    <input class=\"input-radio\" type=\"radio\" [(ngModel)]=\"radio\" value=\"41\" name=\"Enquiry\">\n    <ion-label class=\"label\">{{'COMPLAIN' | translate}}</ion-label>\n    <input class=\"input-radio\" type=\"radio\" [(ngModel)]=\"radio\" value=\"42\" name=\"Enquiry\">\n    <ion-label class=\"label\">{{'REQUEST' | translate}}</ion-label>\n  </ion-item>\n\n\n  <ion-item lines=\"none\">\n    <p style=\"color: rgb(122, 121, 121);\">{{'DETAILS' | translate}}</p>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <textarea class=\"textarea\" [(ngModel)]=\"Details\"></textarea>\n  </ion-item>\n\n  <!-- <ion-item lines=\"none\">\n    <p style=\"color: rgb(122, 121, 121); \">Attchment :</p>\n    <ion-button (click)=\"Attchment()\">\n      <ion-icon slot=\"end\" name=\"document\"></ion-icon>\n      {{'ATTACH_FILE' | translate}}\n    </ion-button>\n  </ion-item> -->\n\n  <ion-item lines=\"none\" class=\"upload-btn-wrapper\">\n    <!-- <p class=\"fileName\" *ngIf=\"!fileName\"></p> -->\n    <button class=\"btn\">\n      <ion-icon slot=\"end\" name=\"document\" style=\"font-size: 15px;\"></ion-icon>\n      {{'ATTACH_FILE' | translate}}\n    </button>\n    <input #file type=\"file\" (change)=\"fileAttach(file.files)\" />\n  </ion-item>\n  <div class=\"fileNameContainer\">\n    <p class=\"fileName\" *ngIf=\"fileName\">{{fileName}}</p>\n  </div>\n \n\n  <div class=\"button-div\">\n    <ion-button color=\"danger\" (click)=\"getInTouch()\">\n      {{'SUBMITE' | translate}}\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/models/ContactUsDto.ts":
/*!****************************************!*\
  !*** ./src/app/models/ContactUsDto.ts ***!
  \****************************************/
/*! exports provided: ContactUsDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsDto", function() { return ContactUsDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ContactUsDto {
    constructor(data) {
        this.attachmentUrl = data.attachmentUrl;
        this.contactUsTypeId = data.contactUsTypeId;
        this.details = data.details;
        this.id = data.id;
    }
}


/***/ }),

/***/ "./src/app/pages/get-in-touch/get-in-touch.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/get-in-touch/get-in-touch.module.ts ***!
  \***********************************************************/
/*! exports provided: GetInTouchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetInTouchPageModule", function() { return GetInTouchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _get_in_touch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-in-touch.page */ "./src/app/pages/get-in-touch/get-in-touch.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _get_in_touch_page__WEBPACK_IMPORTED_MODULE_6__["GetInTouchPage"]
    }
];
let GetInTouchPageModule = class GetInTouchPageModule {
};
GetInTouchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_get_in_touch_page__WEBPACK_IMPORTED_MODULE_6__["GetInTouchPage"]]
    })
], GetInTouchPageModule);



/***/ }),

/***/ "./src/app/pages/get-in-touch/get-in-touch.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/get-in-touch/get-in-touch.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 90px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto; }\n\nion-item {\n  text-align: center; }\n\nion-title {\n  margin-top: 10px; }\n\n.label {\n  color: #428bca;\n  font-size: 14px; }\n\nion-radio-group {\n  display: inline; }\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: grid;\n  width: 135px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.btn {\n  color: #504c4c;\n  background-color: #dbefff;\n  padding: 6px 10px;\n  border-radius: 8px;\n  font-size: 12px;\n  border-style: solid;\n  border-width: thin;\n  font-weight: bold; }\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 20px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0; }\n\n.fileNameContainer {\n  width: 100%;\n  text-align: center; }\n\n.fileName {\n  font-size: 10px;\n  color: cornflowerblue; }\n\n.textarea {\n  background: #ffffff9e;\n  height: 150px;\n  width: 100%;\n  border-radius: 8px;\n  font-size: 14px;\n  padding: 10px; }\n\n.native-textarea.sc-ion-textarea-ios {\n  padding-bottom: 90px; }\n\n.native-textarea.sc-ion-textarea-md {\n  padding-bottom: 90px; }\n\nion-button {\n  margin-left: auto;\n  margin-right: auto;\n  --background: rgb(212, 237, 241);\n  --color:#4343f9 ;\n  --border-radius:10px; }\n\n.button-div {\n  text-align: center; }\n\n.input-radio {\n  width: 20px;\n  height: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2V0LWluLXRvdWNoL0Q6XFx3b3JrXFxwcm9qZWN0XFxTSENUL3NyY1xcYXBwXFxwYWdlc1xcZ2V0LWluLXRvdWNoXFxnZXQtaW4tdG91Y2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0EsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFZjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sVUFBVSxFQUFBOztBQUVaO0VBQ0csV0FBVztFQUNaLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUFJekI7RUFDSSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRyxvQkFBb0IsRUFBQTs7QUFHekI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdDQUFhO0VBQ2IsZ0JBQVE7RUFDUixvQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2V0LWluLXRvdWNoL2dldC1pbi10b3VjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5pb24taXRlbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tdGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5sYWJlbHtcclxuY29sb3I6ICM0MjhiY2E7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pb24tcmFkaW8tZ3JvdXB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi51cGxvYWQtYnRuLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICBjb2xvcjogIzUwNGM0YztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmVmZmY7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLmZpbGVOYW1lQ29udGFpbmVye1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZmlsZU5hbWV7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgICAvL21hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbi50ZXh0YXJlYXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY5ZTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXRpdmUtdGV4dGFyZWEuc2MtaW9uLXRleHRhcmVhLWlvcyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOTBweDtcclxuICB9XHJcbiAgLm5hdGl2ZS10ZXh0YXJlYS5zYy1pb24tdGV4dGFyZWEtbWQge1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiA5MHB4O1xyXG4gIH1cclxuICBcclxuaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjEyLCAyMzcsIDI0MSk7XHJcbiAgICAtLWNvbG9yOiM0MzQzZjkgO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjEwcHg7XHJcbn1cclxuLmJ1dHRvbi1kaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1yYWRpb3tcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/get-in-touch/get-in-touch.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/get-in-touch/get-in-touch.page.ts ***!
  \*********************************************************/
/*! exports provided: GetInTouchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetInTouchPage", function() { return GetInTouchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_ContactUs_ContactUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ContactUs/ContactUs */ "./src/app/services/ContactUs/ContactUs.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_models_ContactUsDto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/ContactUsDto */ "./src/app/models/ContactUsDto.ts");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");






let GetInTouchPage = class GetInTouchPage {
    constructor(_inTouch, alertctrl, _loading) {
        this._inTouch = _inTouch;
        this.alertctrl = alertctrl;
        this._loading = _loading;
        this.form = [
            { val: 'Pepperoni', isChecked: true },
            { val: 'Sausage', isChecked: false },
            { val: 'Mushroom', isChecked: false }
        ];
    }
    ngOnInit() {
    }
    getInTouch() {
        this._loading.present();
        console.log(this.radio);
        this.contactUs =
            {
                "contactUsTypeId": this.radio,
                "details": this.Details,
                "attachmentUrl": "",
                "id": undefined
            };
        let contact = new src_app_models_ContactUsDto__WEBPACK_IMPORTED_MODULE_4__["ContactUsDto"](this.contactUs);
        this._inTouch.create(contact).subscribe(data => {
            console.log(data);
            setTimeout(() => {
                this._loading.dismiss().then(() => {
                    this.presentAlert("Your complaint has been sent successfully");
                });
            }, 1500);
        }, error => {
            this._loading.dismiss();
            alert(error);
        });
    }
    presentAlert(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertctrl.create({
                header: 'Request successful',
                message: message,
                mode: 'ios',
                buttons: [{
                        text: 'ok',
                        handler: () => {
                            this.radio = 0;
                            this.Details = '';
                        }
                    }]
            });
            alert.present();
        });
    }
    fileAttach(files) {
        console.log(files);
        this.fileName = files[0].name;
        if (files.length === 0)
            return;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.attachmentUrl = reader.result;
            console.log(this.attachmentUrl);
        };
    }
};
GetInTouchPage.ctorParameters = () => [
    { type: src_app_services_ContactUs_ContactUs__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }
];
GetInTouchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-in-touch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-in-touch.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/get-in-touch/get-in-touch.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-in-touch.page.scss */ "./src/app/pages/get-in-touch/get-in-touch.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ContactUs_ContactUs__WEBPACK_IMPORTED_MODULE_2__["ContactUsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]])
], GetInTouchPage);



/***/ }),

/***/ "./src/app/services/ContactUs/ContactUs.ts":
/*!*************************************************!*\
  !*** ./src/app/services/ContactUs/ContactUs.ts ***!
  \*************************************************/
/*! exports provided: ContactUsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsService", function() { return ContactUsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/enums/baseUrl */ "./src/app/enums/baseUrl.ts");




let ContactUsService = class ContactUsService {
    constructor(http) {
        this.http = http;
    }
    /**
      * @param input (optional)
      * @return Success
      */
    create(input) {
        let url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/ContactUs/Create";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.post(url_, input);
    }
};
ContactUsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContactUsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ContactUsService);



/***/ })

}]);
//# sourceMappingURL=pages-get-in-touch-get-in-touch-module-es2015.js.map