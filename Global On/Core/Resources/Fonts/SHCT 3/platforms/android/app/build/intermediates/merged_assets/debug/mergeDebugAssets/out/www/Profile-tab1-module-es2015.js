(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Profile-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/Profile/tab1.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/Profile/tab1.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title> {{'PROFILE' | translate}}</ion-title>\n    \n  </ion-toolbar>\n  <!-- <ion-item lines=\"none\">\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-item> -->\n</ion-header>\n\n<ion-content>\n<!-- \n  <div>\n    <ion-item lines=\"none\">\n      <ion-label>\n        <div class=\"img\">\n            <img [src]=\"GetImage()\">\n        </div>\n        <h2 class=\"imgTitle\">{{'ADD_PC' | translate}}</h2>\n        <input #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n      </ion-label>\n    </ion-item>\n  </div> -->\n\n  <!-- <span class=\"filewrap\">\n    {{'ADD_PC' | translate}}\n    <input #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n  </span> -->\n\n  <div class=\"img\">\n    <img [src]=\"GetImage()\">\n </div>\n\n   <!-- <div class=\"menu-image\">\n    <img [src]=\"GetImage()\" alt=\"\">\n  </div> -->\n\n  <div class=\"upload-btn-wrapper\">\n    <button class=\"btn\">{{'ADD_PC' | translate}}</button>\n    <input #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\n  </div>\n\n\n <div class=\"text-align-center\">\n  <span style=\"color:red;\" *ngIf=\"message\">{{message}}</span>\n </div>\n\n\n  \n  <ion-item>\n    <ion-label>\n        <div class=\"userInfo\"> <h2>{{'profileNAME' | translate}} : <span>{{FRIST_NAME}} &nbsp; {{SURNAME}}</span></h2> </div>\n        <div class=\"userInfo\"> <h2>{{'ID' | translate}} : <span>{{ID}}</span> </h2></div>\n        <div class=\"userInfo\"> <h2>{{'PHONE_NUMBER' | translate}} : <span>{{PHONE_NUMBER}}</span> </h2></div>\n        <div class=\"userInfo\"> <h2>{{'EMAIL' | translate}} : <span>{{EMAIL}}</span> </h2></div>\n    </ion-label>\n  </ion-item>\n\n  <!-- <ion-item>\n    <ion-select [(ngModel)]=\"language\" (ionChange)=\"changeLanguage(language)\" placeholder=\"{{'CHANGE_LANG' | translate}}\">\n       <ion-select-option value=\"en\" selected=\"true\">English</ion-select-option>\n       <ion-select-option value=\"ar\">Arabic</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <div class=\"name\">\n    <!-- <ion-label position=\"floating\">{{'CHANGE_LANG' | translate}}\n      <ion-icon slot=\"end\" name=\"settings\"></ion-icon>\n    </ion-label> -->\n    <!-- <ion-select interface=\"popover\" [(ngModel)]=\"language\" (ionChange)=\"changeLanguage(language)\" placeholder=\"{{'CHANGE_LANG' | translate}}\">\n      <ion-select-option value=\"en\" selected=\"true\">English</ion-select-option>\n      <ion-select-option value=\"ar\">عربي</ion-select-option>\n    </ion-select> -->\n    <lang-change></lang-change>\n  </div>\n  \n\n  <ion-item lines=\"none\">\n    <!-- <h2 class=\"myPatienText\">{{'PATIENT' | translate}}</h2>  -->\n    <ion-button (click)=\"createPatiant()\" style=\"margin-left: auto; margin-right: auto;\">\n      <i  slot=\"start\" class=\"material-icons\">\n          person_add\n        </i>\n        {{'ADD_PATIENT' | translate}}\n    </ion-button>\n  </ion-item>\n\n  <shct-spinner [IsShow]=\"spinnerWorking\"></shct-spinner>\n\n  <ng-container *ngIf=\"!spinnerWorking\">\n    \n    <ion-item lines=\"none\" class=\"patientInfo\" *ngFor=\"let p of patients\">\n      <ion-label>\n        <h2>{{'P_NAME' | translate}}</h2>\n        <p>{{p.firstName}} - {{p.code}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"document\" (click)=\"historyCreate(p)\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"create\" (click)=\"editPatient(p)\"></ion-icon>\n      <ion-icon slot=\"end\" color=\"danger\" name=\"trash\" (click)=\"deletePatient(p)\"></ion-icon>\n      \n  </ion-item>\n\n  </ng-container>\n\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadPatients($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tabs/Profile/tab1.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/Profile/tab1.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tabs/Profile/tab1.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_components_lang_change_lang_change_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/lang-change/lang-change.module */ "./src/app/components/lang-change/lang-change.module.ts");










let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }]),
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsModule"],
            src_app_components_lang_change_lang_change_module__WEBPACK_IMPORTED_MODULE_9__["LangChangePageModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]],
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tabs/Profile/tab1.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tabs/Profile/tab1.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img {\n  display: table;\n  width: 100px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 100%; }\n  .img img {\n    border-radius: 100%;\n    width: 90%;\n    height: 90%; }\n  .imgTitle {\n  text-align: center; }\n  .userInfo {\n  background: #c0e2fd;\n  margin-top: 10px; }\n  .userInfo h2 {\n    margin-right: 5px;\n    margin-left: 5px; }\n  .patientInfo {\n  --background: #c0e2fd;\n  margin-top: 5px;\n  border-left-width: 4px;\n  border-left-style: solid;\n  border-left-color: #353535; }\n  .myPatienText {\n  margin-right: 40px;\n  color: #539610;\n  font-size: medium; }\n  .material-icons {\n  color: white;\n  margin-right: 8px;\n  font-size: 23px; }\n  ion-button {\n  --border-radius: 20px; }\n  .upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: grid;\n  width: 110px;\n  margin-left: auto;\n  margin-right: auto; }\n  .btn {\n  color: white;\n  background-color: #3880ff;\n  padding: 8px 20px;\n  border-radius: 8px;\n  font-size: 10px;\n  font-weight: bold; }\n  .upload-btn-wrapper input[type=file] {\n  font-size: 20px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0; }\n  .name {\n  text-align: justify;\n  padding-top: 10px; }\n  ion-select {\n  background: #c0e2fd;\n  border-radius: 5px;\n  color: black;\n  font-weight: bold;\n  font-size: 15px;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto; }\n  .label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h {\n  padding-left: 20px;\n  padding-right: 20px; }\n  .label-floating.sc-ion-label-ios-h, .label-stacked.sc-ion-label-ios-h {\n  padding-left: 20px;\n  padding-right: 20px; }\n  .menu-image {\n  margin-top: 12px;\n  margin-bottom: -80px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 110px;\n  height: 200px; }\n  .spinner {\n  margin-top: 10px;\n  width: 100%;\n  height: 100px;\n  text-align: center; }\n  .text-align-center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9Qcm9maWxlL0Q6XFx3b3JrXFxwcm9qZWN0XFxTSENUL3NyY1xcYXBwXFx0YWJzXFxQcm9maWxlXFx0YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQWM7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7RUFOdkI7SUFTUSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVcsRUFBQTtFQUduQjtFQUNJLGtCQUFrQixFQUFBO0VBRXRCO0VBQ0ksbUJBbkJrQjtFQW9CbEIsZ0JBQWdCLEVBQUE7RUFGcEI7SUFJTSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUFHdEI7RUFDSSxxQkFBYTtFQUNiLGVBQWU7RUFDZixzQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLDBCQUF5QixFQUFBO0VBRzdCO0VBQ0Esa0JBQWtCO0VBQ2xCLGNBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBO0VBRWpCO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7RUFHbkI7RUFDSSxxQkFBaUIsRUFBQTtFQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7RUFHcEI7RUFFRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQixFQUFBO0VBR25CO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFVBQVUsRUFBQTtFQUdaO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBO0VBSW5CO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBRXZCO0VBQ0Usa0JBQWtCO0VBQ2hCLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhLEVBQUE7RUFHYjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWJzL1Byb2ZpbGUvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29udGVudC1jb2xvcjojYzBlMmZkO1xuLmltZ3tcbiAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDoxMDBweCA7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgaW1nIHtcbiAgICAgICAgLy9tYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgIH1cbn1cbi5pbWdUaXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlckluZm97XG4gICAgYmFja2dyb3VuZDogJGNvbnRlbnQtY29sb3I7XG4gICAgbWFyZ2luLXRvcDoxMHB4IDtcbiAgICBoMntcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG59XG4ucGF0aWVudEluZm8ge1xuICAgIC0tYmFja2dyb3VuZDogI2MwZTJmZDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7ICBcbiAgICBib3JkZXItbGVmdC13aWR0aDo0cHg7XG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiMzNTM1MzU7XG59XG5cbi5teVBhdGllblRleHQge1xubWFyZ2luLXJpZ2h0OiA0MHB4O1xuY29sb3I6IHJnYig4MywgMTUwLCAxNik7IFxuZm9udC1zaXplOiBtZWRpdW07IFxufVxuLm1hdGVyaWFsLWljb25ze1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBmb250LXNpemU6IDIzcHg7XG59XG5cbmlvbi1idXR0b257XG4gICAgLS1ib3JkZXItcmFkaXVzXHQ6IDIwcHg7XG59XG5cbi51cGxvYWQtYnRuLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxMTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmJ0biB7XG4gIC8vYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubmFtZXtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gXG59XG5cbmlvbi1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiAjYzBlMmZkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuXG4gIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCwgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5tZW51LWltYWdle1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAtODBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLnNwaW5uZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAudGV4dC1hbGlnbi1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiBcblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/Profile/tab1.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tabs/Profile/tab1.page.ts ***!
  \*******************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_Patients_patients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Patients/patients.service */ "./src/app/services/Patients/patients.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/DataShare/data-share.service */ "./src/app/services/DataShare/data-share.service.ts");
/* harmony import */ var src_app_enums_filesPath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/enums/filesPath */ "./src/app/enums/filesPath.ts");
/* harmony import */ var src_app_services_Settings_Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/Settings/Settings */ "./src/app/services/Settings/Settings.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/TempDataDistributor/TempDataDistributor */ "./src/app/services/TempDataDistributor/TempDataDistributor.ts");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");














let Tab1Page = class Tab1Page {
    constructor(router, _patients, alertCtrl, _loadCtrl, toastController, historyForm, _dataShare, _setting, _translate, platform, _temDataDistributor, document, splashScreen, _tempData) {
        this.router = router;
        this._patients = _patients;
        this.alertCtrl = alertCtrl;
        this._loadCtrl = _loadCtrl;
        this.toastController = toastController;
        this.historyForm = historyForm;
        this._dataShare = _dataShare;
        this._setting = _setting;
        this._translate = _translate;
        this.platform = platform;
        this._temDataDistributor = _temDataDistributor;
        this.document = document;
        this.splashScreen = splashScreen;
        this._tempData = _tempData;
        this.patients = [];
        this.scorllCount = 0;
        this.skipCount = 0;
        this.base64Image = "";
        this.ChangePhotoImage = false;
        this.isAuthenticated = false;
        this.spinnerWorking = true;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.onEnter();
            this.subscription = this.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && event.url === '/tabs/tab1') {
                    this.onEnter();
                }
            });
        });
    }
    onEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield {};
            this.patients = [];
            this.userId = parseInt(window.localStorage.getItem('userId'));
            console.log(this.userId);
            this._tempData.authState.subscribe((isAuthenticated) => {
                this.isAuthenticated = isAuthenticated;
            });
            this.getUserInfo();
            this.getAllPatients(undefined, this.userId, undefined, undefined, undefined);
            if (window.localStorage.getItem("imgURL")) //to get profile image from localStorage 
                this.imgURL = window.localStorage.getItem("imgURL");
            console.log("onEnter fire");
        });
    }
    ionViewWillEnter() {
        console.log("ionViewWillEnter fire");
    }
    getUserInfo() {
        this._setting.GetCurrentUserProfileForEdit().subscribe(data => {
            this.dataUserInfo = data.result;
            console.log(this.dataUserInfo);
            this.FRIST_NAME = this.dataUserInfo.name;
            this.PHONE_NUMBER = this.dataUserInfo.phoneNumber;
            this.ID = this.dataUserInfo.userName;
            this.EMAIL = this.dataUserInfo.emailAddress;
            this.SURNAME = this.dataUserInfo.surname;
        }, error => { console.log(error); });
    }
    //#region  Method not implemented.
    initialSetting() {
    }
    //#endregion
    createPatiant() {
        this._dataShare.setData("createOrEdit", "");
        this.router.navigate(['/personal-informations/createOrEdit']);
    }
    GetImage() {
        if (this.imgURL) {
            localStorage.setItem("imgURL", this.imgURL);
            return this.imgURL;
        }
        else
            return src_app_enums_filesPath__WEBPACK_IMPORTED_MODULE_7__["filesPath"].DEFAULT_PROFILE_IMAGE_URL;
    }
    editPatient(patient) {
        this._dataShare.setData("createOrEdit", patient);
        console.log(patient);
        this.router.navigateByUrl('/personal-informations/createOrEdit');
    }
    getAllPatients(filter, userId, sorting, skipCount, maxResultCount) {
        // this._loadCtrl.present();
        this.spinnerWorking = true;
        this._patients.getAllPatients(filter, userId, sorting, skipCount, maxResultCount)
            .subscribe(patients => {
            console.log(patients.result);
            this.totalCount = patients.result.totalCount;
            patients.result.items.forEach(element => {
                this.patients.push(element.patient);
            });
            this.patientsDto = patients.result.items;
            console.log(this.patients);
            this.spinnerWorking = false;
            // this._loadCtrl.dismiss();
        }, error => {
            this.spinnerWorking = false;
            console.log(error);
        });
    }
    loadPatients(event) {
        this.scorllCount = this.scorllCount + 10;
        this.skipCount = this.skipCount + 10;
        if (this.patients.length == this.totalCount) {
            this.scorllCount = this.totalCount;
            this.skipCount = this.totalCount;
        }
        console.log("scorllCount :" + this.scorllCount.toString(), "skipCount :" + this.skipCount.toString());
        this.getAllPatients(undefined, this.userId, undefined, this.skipCount, this.scorllCount);
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            if (this.totalCount <= this.patients.length) {
                this.presentToast();
            }
        }, 500);
    }
    deletePatient(patient) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Delete Patient',
                subHeader: 'Are you sure to delete this patient?!',
                mode: "ios",
                buttons: [{
                        text: "OK",
                        handler: () => {
                            console.log(patient);
                            this._patients.delete(patient.id).subscribe(del => {
                                console.log(del);
                                var index = this.patients.map(x => {
                                    return x.id;
                                }).indexOf(patient.id);
                                this.patients.splice(index, 1);
                            }, error => { console.log(error); });
                            console.log(this.patients);
                        }
                    }, {
                        text: "Cancel"
                    }]
            });
            yield alert.present();
        });
    }
    historyCreate(patient) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._dataShare.setData("patientInfo", patient);
            this.router.navigate(['tabs/medical-history/patientInfo']);
        });
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'no more data',
                duration: 1000,
                position: "middle",
                cssClass: "no-more-data",
            });
            toast.present();
        });
    }
    ionViewWillLeave() {
        //  console.log("ionViewWillLeave fire")
        // this.patients = [];
        // this.subscription.unsubscribe();
    }
    preview(files) {
        this.message = null;
        console.log(files);
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        if (files[0].size * 2 > Math.pow(2, 21))
            this.message = 'File exceeds the maximum size'; // Note: 2*2**20 = 2**21
        else {
            var reader = new FileReader();
            this.imagePath = files;
            reader.readAsDataURL(files[0]);
            reader.onload = (_event) => {
                console.log(reader.result);
                this._temDataDistributor.newImage(reader.result);
                this._temDataDistributor.profileStoredImage.subscribe(image => {
                    this.imgURL = image;
                });
            };
            //console.log( this.imgURL)
        }
        this.GetImage();
    }
    changeLanguage(language) {
        //TODO ::  CAll Change Language from Server  
        // and all the below will be on subscrip on this funcion 
        this._setting.getChangeLanguage(language).subscribe(data => {
            console.log(data);
            this._translate.use(language);
            window.localStorage.setItem('lang', language);
            this.splashScreen.show();
            window.location.reload();
            console.log(language);
            setTimeout(() => {
                if (this.platform.isRTL)
                    this.document.documentElement.dir = "ltr";
                else
                    this.document.documentElement.dir = "rtl";
            }, 5000);
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_Patients_patients_service__WEBPACK_IMPORTED_MODULE_3__["PatientsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_6__["DataShareService"] },
    { type: src_app_services_Settings_Settings__WEBPACK_IMPORTED_MODULE_8__["SettingsService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_11__["TempDataDistributorService"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"],] }] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_12__["SplashScreen"] },
    { type: src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_11__["TempDataDistributorService"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/Profile/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tabs/Profile/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](11, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_Patients_patients_service__WEBPACK_IMPORTED_MODULE_3__["PatientsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_6__["DataShareService"],
        src_app_services_Settings_Settings__WEBPACK_IMPORTED_MODULE_8__["SettingsService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_11__["TempDataDistributorService"],
        Document,
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_12__["SplashScreen"],
        src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_11__["TempDataDistributorService"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=Profile-tab1-module-es2015.js.map