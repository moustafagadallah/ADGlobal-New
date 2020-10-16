(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-userService-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userService/profile/profile.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userService/profile/profile.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title> {{'PROFILE' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div>\n    <ion-item lines=\"none\">\n      <ion-label>\n        <div class=\"img\">\n            <img src=\"assets\\imgs\\emp.jpg\">\n        </div>\n        <h2 class=\"imgTitle\">{{'ADD_PC' | translate}}</h2>\n      </ion-label>\n    </ion-item>\n  </div>\n  <ion-item>\n    <ion-label>\n        <div class=\"userInfo\"> <h2>{{'FRIST_NAME' | translate}}</h2></div>\n        <div class=\"userInfo\"> <h2>{{'ID' | translate}}</h2></div>\n        <div class=\"userInfo\"> <h2>{{'PHONE_NUMBER' | translate}}</h2></div>\n        <div class=\"userInfo\"> <h2>{{'EMAIL' | translate}}</h2></div>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <h2 class=\"myPatienText\">My Patient</h2> \n    <ion-button (click)=\"onClick()\">\n      <i  slot=\"start\" class=\"material-icons\">\n          person_add\n        </i>\n        {{'C_N_PATIENT' | translate}}\n    </ion-button>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"patientInfo\" *ngFor=\"let f of [].constructor(10)\">\n           <ion-label>\n              <h2>{{'P_NAME' | translate}}</h2>\n              <p>ahmed</p>\n            </ion-label>\n            <ion-icon slot=\"end\" name=\"trash\"></ion-icon>\n            <ion-icon slot=\"end\" name=\"create\"></ion-icon>\n\n  </ion-item>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/userService/profile/profile.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/userService/profile/profile.module.ts ***!
  \*************************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/userService/profile/profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot()
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/userService/profile/profile.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/userService/profile/profile.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img {\n  width: 120px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 10px; }\n  .img img {\n    max-width: 100%;\n    border-radius: 14px; }\n  .imgTitle {\n  text-align: center; }\n  .userInfo {\n  background: #c0e2fd;\n  margin-top: 10px; }\n  .patientInfo {\n  --background: #c0e2fd;\n  margin-top: 5px; }\n  .myPatienText {\n  margin-right: 40px;\n  color: #539610;\n  font-size: medium; }\n  .material-icons {\n  color: white;\n  margin-right: 8px;\n  font-size: 23px; }\n  ion-button {\n  --border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlclNlcnZpY2UvcHJvZmlsZS9EOlxcd29ya1xccHJvamVjdFxcU0hDVC9zcmNcXGFwcFxccGFnZXNcXHVzZXJTZXJ2aWNlXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtFQUx2QjtJQU9RLGVBQWU7SUFDZixtQkFBbUIsRUFBQTtFQUczQjtFQUNJLGtCQUFrQixFQUFBO0VBRXRCO0VBQ0ksbUJBaEJrQjtFQWlCbEIsZ0JBQWdCLEVBQUE7RUFFcEI7RUFDSSxxQkFBYTtFQUNiLGVBQWUsRUFBQTtFQUduQjtFQUNBLGtCQUFrQjtFQUNsQixjQUF1QjtFQUN2QixpQkFBaUIsRUFBQTtFQUVqQjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBO0VBR25CO0VBQ0kscUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyU2VydmljZS9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbnRlbnQtY29sb3I6I2MwZTJmZDtcclxuLmltZ3tcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDoxMDBweCA7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweCA7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcbi5pbWdUaXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udXNlckluZm97XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29udGVudC1jb2xvcjtcclxuICAgIG1hcmdpbi10b3A6MTBweCA7XHJcbn1cclxuLnBhdGllbnRJbmZvIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2MwZTJmZDtcclxuICAgIG1hcmdpbi10b3A6IDVweDsgIFxyXG59XHJcblxyXG4ubXlQYXRpZW5UZXh0IHtcclxubWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG5jb2xvcjogcmdiKDgzLCAxNTAsIDE2KTsgXHJcbmZvbnQtc2l6ZTogbWVkaXVtOyBcclxufVxyXG4ubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYm9yZGVyLXJhZGl1c1x0OiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/userService/profile/profile.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/userService/profile/profile.page.ts ***!
  \***********************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_Patients_patients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Patients/patients.service */ "./src/app/services/Patients/patients.service.ts");



let ProfilePage = class ProfilePage {
    constructor(_patient) {
        this._patient = _patient;
    }
    ngOnInit() {
        this.GetAllPatients(undefined, undefined, undefined, undefined, undefined);
    }
    GetAllPatients(filter, userId, sorting, skipCount, maxResultCount) {
        // this._patient.getAllPatients(filter ,userId ,sorting,skipCount , maxResultCount).subscribe(
        //   patient => {
        //     // this.PatientsServiceData = patient;
        //     console.log( this.PatientsServiceData)
        //   } 
        // )
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_Patients_patients_service__WEBPACK_IMPORTED_MODULE_2__["PatientsService"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userService/profile/profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/userService/profile/profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Patients_patients_service__WEBPACK_IMPORTED_MODULE_2__["PatientsService"]])
], ProfilePage);



/***/ }),

/***/ "./src/app/services/Patients/patients.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/Patients/patients.service.ts ***!
  \*******************************************************/
/*! exports provided: PatientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsService", function() { return PatientsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/enums/baseUrl */ "./src/app/enums/baseUrl.ts");




let PatientsService = class PatientsService {
    constructor(http) {
        this.http = http;
    }
    /**
      * @param filter (optional)
      * @param userId (optional)
      * @param sorting (optional)
      * @param skipCount (optional)
      * @param maxResultCount (optional)
      * @return Success
      */
    getAllPatients(filter, userId, sorting, skipCount, maxResultCount) {
        let url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Patients/GetAll?";
        if (filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
        if (userId !== undefined)
            url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (sorting !== undefined)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.get(url_);
    }
    /**
      * @param input (optional)
      * @return Success
      */
    createOrEdit(input) {
        let url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Patients/CreateOrEdit";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.post(url_, input);
    }
    /**
* @param id (optional)
* @return Success
*/
    getPatientForEdit(id) {
        let url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Patients/GetPatientForEdit?";
        // var headers_object = new HttpHeaders().set("Authorization", "bearer " + userToken);
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.get(url_);
    }
    /**
   * @param id (optional)
   * @return Success
   */
    delete(id) {
        let url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Patients/Delete?";
        // var headers_object = new HttpHeaders().set("Authorization", "bearer " + userToken);
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.delete(url_);
    }
};
PatientsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PatientsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PatientsService);



/***/ })

}]);
//# sourceMappingURL=pages-userService-profile-profile-module-es2015.js.map