function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-request-details-request-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request-details/request-details.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request-details/request-details.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRequestDetailsRequestDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'REQUEST_DEYAILS' | translate}}</ion-title>\n\n  <!-- <ion-item lines=\"none\"> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab4\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n      <!-- <ion-toggle></ion-toggle> -->\n    </ion-buttons>\n    <!-- <ion-searchbar s-style mode=\"ios\" placeholder=\"Search Services..\"></ion-searchbar>\n  </ion-item> -->\n</ion-toolbar>\n</ion-header>\n<ion-content>\n  <!-- <div *ngIf='!view' class=\"view-spinner\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n  </div> -->\n  <shct-spinner [IsShow] =\"spinnerSiew\" ></shct-spinner>\n\n  <div *ngIf='view' class=\"container\">\n    <ion-item>\n      <ion-text color=\"primary\">\n        <h6><b>{{'R_CODE' | translate}} : </b><span>{{view.requestCode}}</span></h6>\n      </ion-text>\n      <ion-text slot=\"end\" id=\"center\" color=\"primary\">\n        <h6><b>{{'P_NAME' | translate}} : </b><span>{{view.patientName}}</span></h6>\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-text color=\"primary\">\n        <h6><b>{{'S_NAME' | translate}} : </b><span>{{view.mainServiceName}}</span></h6>\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-text color=\"primary\">\n        <h6><b>{{'R_DATE' | translate}} : </b><span>{{view.expectedVisitDate |date}}</span></h6>\n      </ion-text>\n      <ion-text slot=\"end\" id=\"center\" color=\"primary\">\n        <h6><b>{{'R_Visite' | translate}} : </b><span>{{view.actualVisitDate |date }}</span></h6>\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-text slot=\"end\" id=\"center\" color=\"primary\">\n          <h6><b>{{'STATUS' | translate}} : </b></h6>\n        </ion-text>\n        <div  dir=\"ltr\" class=\"requestItem\">\n          <aw-wizard #Wizard class=\"wizard\" [defaultStepIndex]=\"requestStatusId - 1\">\n            <aw-wizard-step stepTitle=\"{{'NEW' | translate}}\">\n            </aw-wizard-step>\n            <aw-wizard-step stepTitle=\"{{'RECEVIED' | translate}}\">\n            </aw-wizard-step>\n            <aw-wizard-step stepTitle=\"{{'EXECUTING' | translate}}\">\n            </aw-wizard-step>\n            <aw-wizard-step stepTitle=\"{{'FINISHED' | translate}}\">\n            </aw-wizard-step>\n          </aw-wizard>\n        </div>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-text>\n        <h6><b>{{'TOTAL' | translate}} </b></h6>\n      </ion-text>\n      <ion-text slot=\"end\">\n        <h6><b>{{view.total | currency}}</b></h6>\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-text>\n        <h6><b>{{'DESCOUNT' | translate}} </b></h6>\n      </ion-text>\n      <ion-text slot=\"end\">\n        <h6><b>{{view.discountValue | currency}}</b></h6>\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-text>\n        <h6><b>VAT % </b></h6>\n      </ion-text>\n      <ion-text slot=\"end\">\n        <h6><b>{{view.discountPercentage }} %</b></h6>\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-text>\n        <h6><b>{{'NET' | translate}}</b></h6>\n      </ion-text>\n      <ion-text slot=\"end\">\n        <h6><b>{{view.netPrice | currency}}</b></h6>\n      </ion-text>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-text>\n        <h6><b>{{'RATING' | translate}} </b> </h6>\n      </ion-text>\n      &nbsp; &nbsp; &nbsp;\n      <rating [(ngModel)]=\"rate\" readonly=\"false\" size=\"default\" fontSize=\"15px\" (rateChange)=\"onRateChange($event)\">\n      </rating>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-text>\n        <h6><b>{{'Y_R_C' | translate}} </b></h6>\n      </ion-text>\n    </ion-item>\n    <ion-item style=\"text-align: center !important; font-size: smaller;\">\n      <ion-textarea [(ngModel)]=\"viewNotes\" readonly=\"true\"></ion-textarea>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-text>\n        <h6><b>{{'V_S' | translate}}</b></h6>\n      </ion-text>\n    </ion-item>\n\n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"6\">\n          <div style=\"background: #ffffff9e;\">\n            <ion-text color=\"primary\">\n              <h6><b>{{'WEIGHT' | translate}} : </b><span>{{view.weight}}</span></h6>\n            </ion-text>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div style=\"background: #ffffff9e;\">\n            <ion-text color=\"primary\">\n              <h6><b>{{'B_PRESSURE' | translate}} : </b><span>{{view.bloodPressureHigh}} / {{view.bloodPressureLow}}</span></h6>\n            </ion-text>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <div style=\"background: #ffffff9e;\">\n            <ion-text color=\"primary\">\n              <h6><b>{{'HEIGHT' | translate}} : </b><span>{{view.height}}</span></h6>\n            </ion-text>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div style=\"background: #ffffff9e;\">\n            <ion-text color=\"primary\">\n              <h6><b>{{'TEMPERATURE' | translate}} : </b><span>{{view.temperature}}</span></h6>\n            </ion-text>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <div style=\"background: #ffffff9e;\">\n            <ion-text color=\"primary\">\n              <h6><b>{{'B_M_I' | translate}} : </b><span>{{view.bodyMassIndex}}</span></h6>\n            </ion-text>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div style=\"background: #ffffff9e;\">\n            <ion-text color=\"primary\">\n              <h6><b>{{'BLOOD_TYPE' | translate}} : </b><span>{{view.bloodTypeName}}</span></h6>\n            </ion-text>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <div style=\"background: #ffffff9e;\">\n            <ion-text color=\"primary\">\n              <h6><b>{{'B_O_R' | translate}} : </b><span>{{view.oxygen}}</span></h6>\n            </ion-text>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div style=\"background: #ffffff9e;\">\n            <ion-text color=\"primary\">\n              <h6><b>{{'PULSE_RATE' | translate}} : </b><span>{{view.pulseRate}}</span></h6>\n            </ion-text>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-item lines=\"none\">\n      <ion-text>\n        <h6><b>{{'V_s_n' | translate}} :</b></h6>\n      </ion-text>\n    </ion-item>\n    <ion-item style=\"text-align: center !important; font-size: smaller;\">\n      <ion-textarea [(ngModel)]=\"vitaSignNotes\" class=\"vital\" readonly=\"true\"></ion-textarea>\n    </ion-item>\n\n    <div *ngIf='!diagnosis' class=\"view-medicine\">\n      <ion-spinner name=\"crescent\"></ion-spinner>\n    </div>\n\n    <div *ngIf='diagnosis'>\n      <ion-item lines=\"none\">\n        <ion-item *ngFor=\"let d of diagnosis\" align-items-center lines=\"none\">\n          <b>{{'DIAGNOSES' | translate}} : &nbsp; &nbsp; </b>\n          <span>{{d.diagnosisName}}</span>\n          <!-- <ion-select class=\"divinfo\" multiple=\"true\" placeholder=\"Select Pizza\">\n          <ion-select-option value=\"peperoni\">Peperoni</ion-select-option>\n          <ion-select-option value=\"hawaii\">Hawaii</ion-select-option>\n        </ion-select> -->\n        </ion-item>\n      </ion-item>\n      <ion-item style=\"text-align: center !important; font-size: smaller;\">\n        <ion-textarea [(ngModel)]=\"diagnosesNotes\" class=\"vital\" readonly=\"true\"></ion-textarea>\n      </ion-item>\n    </div>\n\n    <div *ngIf='!medicine' class=\"view-medicine\">\n      <ion-spinner name=\"crescent\"></ion-spinner>\n    </div>\n\n    <div *ngIf='medicine'>\n      <ion-item lines=\"none\">\n        <ion-text>\n          <h6><b>{{'MEDICINE_NAME' | translate}} </b></h6>\n        </ion-text>\n      </ion-item>\n\n      <ion-item *ngFor=\"let m of medicine\">\n        <ion-label>\n          <h6><b>{{'MEDICINE_NAME' | translate}} : </b><span>{{m.medicineName}}</span></h6>\n          <h6><b>{{'DOSAGE' | translate}} : </b><span>{{m.dosage}}</span></h6>\n          <h6><b>{{'EVERY' | translate}} : </b><span>{{m.every}}</span></h6>\n          <h6><b>{{'DURATION' | translate}} : </b><span>{{m.duration}}</span></h6>\n        </ion-label>\n      </ion-item>\n\n      <!-- <ion-item align-items-center lines=\"none\">\n      <span>medicine name : &nbsp; &nbsp; </span>\n      <ion-select class=\"divinfo\" multiple=\"true\" placeholder=\"medicine name\">\n        <ion-select-option value=\"peperoni\">Peperoni</ion-select-option>\n        <ion-select-option value=\"hawaii\">Hawaii</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item align-items-center lines=\"none\">\n      <span>Dosage : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>\n      <ion-select class=\"divinfo\" multiple=\"true\" placeholder=\"Dosage\">\n        <ion-select-option value=\"peperoni\">Peperoni</ion-select-option>\n        <ion-select-option value=\"hawaii\">Hawaii</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item align-items-center lines=\"none\">\n      <span>Every :&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>\n      <ion-select class=\"divinfo\" multiple=\"true\" placeholder=\"Every\">\n        <ion-select-option value=\"peperoni\">Peperoni</ion-select-option>\n        <ion-select-option value=\"hawaii\">Hawaii</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item align-items-center lines=\"none\">\n      <span>Duration : &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>\n      <ion-select class=\"divinfo\" multiple=\"true\" placeholder=\"Duration\">\n        <ion-select-option value=\"peperoni\">Peperoni</ion-select-option>\n        <ion-select-option value=\"hawaii\">Hawaii</ion-select-option>\n      </ion-select>\n    </ion-item> -->\n\n      <ion-item lines=\"none\">\n        <ion-text>\n          <h6><b>{{'NOTES' | translate}} </b></h6>\n        </ion-text>\n      </ion-item>\n      <ion-item style=\"text-align: center !important; font-size: smaller;\">\n        <ion-textarea [(ngModel)]=\"Note\" readonly=\"true\"></ion-textarea>\n      </ion-item>\n\n    </div>\n\n    <ion-item lines=\"none\">\n      <ion-text>\n        <h6><b>{{'H_R' | translate}} </b></h6>\n      </ion-text>\n    </ion-item>\n\n    <ion-item *ngFor=\"let h of healthy\">\n      <ion-label>\n        <h6><b>{{'NAME' | translate}} : </b><span>{{h.healthyRecommendationName}}</span></h6>\n        <span>{{h.notes}}</span>\n        <!-- <ion-item lines=\"none\">\n      <ion-text>\n        <h6><b>Notes </b></h6>\n      </ion-text>\n    </ion-item>\n    <ion-item style=\"text-align: center !important; font-size: smaller;\" lines=\"none\">\n      <ion-textarea [(ngModel)]=\"notes\" class=\"vital\" readonly=\"true\"></ion-textarea>\n    </ion-item> -->\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-text>\n        <h6><b>{{'MEDICAL_TEAM' | translate}} </b></h6>\n      </ion-text>\n    </ion-item>\n\n    <ion-list style=\"background: none;\">\n      <ion-item *ngFor=\"let team of medicine\">\n        <ion-label>\n          <h2>{{'NAME' | translate}} : {{team.employeeName}}</h2>\n          <p> {{'JOB' | translate}} : {{team.jobName}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <br><br><br>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/request-details/request-details.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/request-details/request-details.module.ts ***!
    \*****************************************************************/

  /*! exports provided: RequestDetailsPageModule */

  /***/
  function srcAppPagesRequestDetailsRequestDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestDetailsPageModule", function () {
      return RequestDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _request_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./request-details.page */
    "./src/app/pages/request-details/request-details.page.ts");
    /* harmony import */


    var ionic4_star_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-star-rating */
    "./node_modules/ionic4-star-rating/dist/index.js");
    /* harmony import */


    var angular_archwizard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-archwizard */
    "./node_modules/angular-archwizard/fesm2015/angular-archwizard.js");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/dist/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _request_details_page__WEBPACK_IMPORTED_MODULE_6__["RequestDetailsPage"]
    }];

    var RequestDetailsPageModule = function RequestDetailsPageModule() {
      _classCallCheck(this, RequestDetailsPageModule);
    };

    RequestDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], ionic4_star_rating__WEBPACK_IMPORTED_MODULE_7__["StarRatingModule"], angular_archwizard__WEBPACK_IMPORTED_MODULE_8__["ArchwizardModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_9__["IonicRatingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_components_components_module__WEBPACK_IMPORTED_MODULE_11__["CustomComponentsModule"]],
      declarations: [_request_details_page__WEBPACK_IMPORTED_MODULE_6__["RequestDetailsPage"]]
    })], RequestDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/request-details/request-details.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/request-details/request-details.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRequestDetailsRequestDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-textarea {\n  --background:rgb(212, 237, 241);\n  border-radius: 12px;\n  height: 120px; }\n\n.vital {\n  height: 90px; }\n\n.container {\n  padding-top: -15px; }\n\n.view-spinner {\n  margin-top: 10px;\n  width: 100%;\n  height: 100px;\n  text-align: center; }\n\n.view-medicine {\n  margin-top: 50px;\n  width: 100%;\n  height: 100px;\n  text-align: center; }\n\n.divinfo {\n  border: 2px solid #16c6d1;\n  border-radius: 30px;\n  width: 200px;\n  height: 31px;\n  background: white;\n  --placeholder-color: #91ccff;\n  font-size: small;\n  text-align: center;\n  font-weight: bold;\n  padding-left: 0px;\n  padding-top: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVxdWVzdC1kZXRhaWxzL0Q6XFx3b3JrXFxwcm9qZWN0XFxTSENUL3NyY1xcYXBwXFxwYWdlc1xccmVxdWVzdC1kZXRhaWxzXFxyZXF1ZXN0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFHdEI7RUFFSSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDRCQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXF1ZXN0LWRldGFpbHMvcmVxdWVzdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10ZXh0YXJlYXtcclxuICAgIC0tYmFja2dyb3VuZDpyZ2IoMjEyLCAyMzcsIDI0MSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuXHJcbn1cclxuLnZpdGFse1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogLTE1cHg7XHJcbn1cclxuLnZpZXctc3Bpbm5lcntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnZpZXctbWVkaWNpbmV7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2aW5mb3tcclxuXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTZjNmQxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzFweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzkxY2NmZjtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIFxyXG4gIH1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/request-details/request-details.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/request-details/request-details.page.ts ***!
    \***************************************************************/

  /*! exports provided: RequestDetailsPage */

  /***/
  function srcAppPagesRequestDetailsRequestDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestDetailsPage", function () {
      return RequestDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_Request_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/Request/View */
    "./src/app/services/Request/View.ts");
    /* harmony import */


    var src_app_services_Request_TeamWork__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/Request/TeamWork */
    "./src/app/services/Request/TeamWork.ts");
    /* harmony import */


    var src_app_services_Request_RequestServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/Request/RequestServices */
    "./src/app/services/Request/RequestServices.ts");
    /* harmony import */


    var src_app_services_Request_RequestActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/Request/RequestActions */
    "./src/app/services/Request/RequestActions.ts");
    /* harmony import */


    var src_app_services_Request_RequestDiagnosis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/Request/RequestDiagnosis */
    "./src/app/services/Request/RequestDiagnosis.ts");
    /* harmony import */


    var src_app_services_Request_RequestMedicine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/Request/RequestMedicine */
    "./src/app/services/Request/RequestMedicine.ts");
    /* harmony import */


    var src_app_services_Request_HealthyRecommendati__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/Request/HealthyRecommendati */
    "./src/app/services/Request/HealthyRecommendati.ts");
    /* harmony import */


    var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/loading/loading.service */
    "./src/app/services/loading/loading.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/DataShare/data-share.service */
    "./src/app/services/DataShare/data-share.service.ts");

    var RequestDetailsPage = /*#__PURE__*/function () {
      function RequestDetailsPage(_view, _teamWork, _Request, _actions, _diagnosis, _medicine, _healthy, _loadCtrl, activeRouter, _dataShare) {
        _classCallCheck(this, RequestDetailsPage);

        this._view = _view;
        this._teamWork = _teamWork;
        this._Request = _Request;
        this._actions = _actions;
        this._diagnosis = _diagnosis;
        this._medicine = _medicine;
        this._healthy = _healthy;
        this._loadCtrl = _loadCtrl;
        this.activeRouter = activeRouter;
        this._dataShare = _dataShare;
        this.spinnerSiew = true;
      }

      _createClass(RequestDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.initialSetting();
          setTimeout(function () {
            _this.getView(_this.request_id);

            _this.getTeamWork(undefined, _this.request_id, undefined, undefined, undefined);

            _this.getDiagnosis(undefined, _this.request_id, undefined, undefined, undefined);

            _this.getMedicine(undefined, _this.request_id, undefined, undefined, undefined);

            _this.getHealthyRecommendation(undefined, _this.request_id, undefined, undefined, undefined);

            _this.getRequestService(undefined, _this.request_id);

            _this.getActions(_this.request_id);
          }, 2000);
        }
      }, {
        key: "initialSetting",
        value: function initialSetting() {
          if (this.activeRouter.snapshot.data['dataSharing']) {
            this.requestList = this._dataShare.getData('request');
            console.log(this.requestList); //get data from mainServiceData page

            this.request_id = this.requestList.id;
            this.requestStatusId = this.requestList.requestStatusId;
            this.rate = this.requestList.rate;
            console.log(this.requestStatusId);
            console.log(this.request_id);
          }
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.view = undefined;
          this.spinnerSiew = true;
        }
      }, {
        key: "getView",
        value: function getView(requestId) {
          var _this2 = this;

          this._view.getRequestForView(requestId).subscribe(function (view) {
            _this2.spinnerSiew = false;
            _this2.view = view.result;
            _this2.viewNotes = view.result.evaluationComment;
            _this2.vitaSignNotes = view.result.vitaSignNotes;
            console.log(_this2.view);
          }, function (error) {
            console.log(error);
            _this2.spinnerSiew = false;
          });
        }
      }, {
        key: "getTeamWork",
        value: function getTeamWork(filter, requestId, sorting, skipCount, maxResultCount) {
          var _this3 = this;

          this._teamWork.getRequestTeamWork(filter, requestId, sorting, skipCount, maxResultCount).subscribe(function (team) {
            _this3.teamWork = team.result.items;
            console.log(_this3.teamWork);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getRequestService",
        value: function getRequestService(filter, requestId) {
          var _this4 = this;

          this._Request.getRequestServices(filter, requestId).subscribe(function (req) {
            _this4.request = req.result;
            console.log(_this4.request);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getActions",
        value: function getActions(requestId) {
          var _this5 = this;

          this._actions.getRequestActions(requestId).subscribe(function (actions) {
            _this5.action = actions;
            console.log(_this5.action);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getDiagnosis",
        value: function getDiagnosis(filter, requestId, sorting, skipCount, maxResultCount) {
          var _this6 = this;

          this._diagnosis.getRequestDiagnosis(filter, requestId, sorting, skipCount, maxResultCount).subscribe(function (diagnosis) {
            _this6.diagnosis = diagnosis.result.items;
            console.log(_this6.diagnosis);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getMedicine",
        value: function getMedicine(filter, requestId, sorting, skipCount, maxResultCount) {
          var _this7 = this;

          this._medicine.getRequestMedicine(filter, requestId, sorting, skipCount, maxResultCount).subscribe(function (mediciene) {
            _this7.medicine = mediciene.result.items;
            console.log(_this7.medicine);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getHealthyRecommendation",
        value: function getHealthyRecommendation(filter, requestId, sorting, skipCount, maxResultCount) {
          var _this8 = this;

          this._healthy.getRequestHealthyRecommendation(filter, requestId, sorting, skipCount, maxResultCount).subscribe(function (healthy) {
            _this8.healthy = healthy.result.items;
            console.log(_this8.healthy);
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return RequestDetailsPage;
    }();

    RequestDetailsPage.ctorParameters = function () {
      return [{
        type: src_app_services_Request_View__WEBPACK_IMPORTED_MODULE_2__["ViewService"]
      }, {
        type: src_app_services_Request_TeamWork__WEBPACK_IMPORTED_MODULE_3__["TeamWorkService"]
      }, {
        type: src_app_services_Request_RequestServices__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: src_app_services_Request_RequestActions__WEBPACK_IMPORTED_MODULE_5__["ActionsService"]
      }, {
        type: src_app_services_Request_RequestDiagnosis__WEBPACK_IMPORTED_MODULE_6__["DiagnosisService"]
      }, {
        type: src_app_services_Request_RequestMedicine__WEBPACK_IMPORTED_MODULE_7__["MedicineService"]
      }, {
        type: src_app_services_Request_HealthyRecommendati__WEBPACK_IMPORTED_MODULE_8__["HealthyRecommendationService"]
      }, {
        type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
      }, {
        type: src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_11__["DataShareService"]
      }];
    };

    RequestDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request-details/request-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request-details.page.scss */
      "./src/app/pages/request-details/request-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Request_View__WEBPACK_IMPORTED_MODULE_2__["ViewService"], src_app_services_Request_TeamWork__WEBPACK_IMPORTED_MODULE_3__["TeamWorkService"], src_app_services_Request_RequestServices__WEBPACK_IMPORTED_MODULE_4__["RequestService"], src_app_services_Request_RequestActions__WEBPACK_IMPORTED_MODULE_5__["ActionsService"], src_app_services_Request_RequestDiagnosis__WEBPACK_IMPORTED_MODULE_6__["DiagnosisService"], src_app_services_Request_RequestMedicine__WEBPACK_IMPORTED_MODULE_7__["MedicineService"], src_app_services_Request_HealthyRecommendati__WEBPACK_IMPORTED_MODULE_8__["HealthyRecommendationService"], src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_11__["DataShareService"]])], RequestDetailsPage);
    /***/
  },

  /***/
  "./src/app/services/Request/HealthyRecommendati.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/Request/HealthyRecommendati.ts ***!
    \*********************************************************/

  /*! exports provided: HealthyRecommendationService */

  /***/
  function srcAppServicesRequestHealthyRecommendatiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthyRecommendationService", function () {
      return HealthyRecommendationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/enums/baseUrl */
    "./src/app/enums/baseUrl.ts");

    var HealthyRecommendationService = /*#__PURE__*/function () {
      function HealthyRecommendationService(http) {
        _classCallCheck(this, HealthyRecommendationService);

        this.http = http;
      }
      /**
       * @param filter (optional)
       * @param requestId (optional)
       * @param sorting (optional)
       * @param skipCount (optional)
       * @param maxResultCount (optional)
       * @return Success
       */


      _createClass(HealthyRecommendationService, [{
        key: "getRequestHealthyRecommendation",
        value: function getRequestHealthyRecommendation(filter, requestId, sorting, skipCount, maxResultCount) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Request/GetRequestHealthyRecommendation?";
          if (filter !== undefined) url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
          if (requestId !== undefined) url_ += "RequestId=" + encodeURIComponent("" + requestId) + "&";
          if (sorting !== undefined) url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&";
          if (skipCount !== undefined) url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
          if (maxResultCount !== undefined) url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }]);

      return HealthyRecommendationService;
    }();

    HealthyRecommendationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HealthyRecommendationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], HealthyRecommendationService);
    /***/
  },

  /***/
  "./src/app/services/Request/RequestActions.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/Request/RequestActions.ts ***!
    \****************************************************/

  /*! exports provided: ActionsService */

  /***/
  function srcAppServicesRequestRequestActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionsService", function () {
      return ActionsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/enums/baseUrl */
    "./src/app/enums/baseUrl.ts");

    var ActionsService = /*#__PURE__*/function () {
      function ActionsService(http) {
        _classCallCheck(this, ActionsService);

        this.http = http;
      }
      /**
       * @param requestId (optional)
       * @return Success
       */


      _createClass(ActionsService, [{
        key: "getRequestActions",
        value: function getRequestActions(requestId) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Request/GetRequestActions?";
          if (requestId !== undefined) url_ += "requestId=" + encodeURIComponent("" + requestId) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }]);

      return ActionsService;
    }();

    ActionsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ActionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ActionsService);
    /***/
  },

  /***/
  "./src/app/services/Request/RequestDiagnosis.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/Request/RequestDiagnosis.ts ***!
    \******************************************************/

  /*! exports provided: DiagnosisService */

  /***/
  function srcAppServicesRequestRequestDiagnosisTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiagnosisService", function () {
      return DiagnosisService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/enums/baseUrl */
    "./src/app/enums/baseUrl.ts");

    var DiagnosisService = /*#__PURE__*/function () {
      function DiagnosisService(http) {
        _classCallCheck(this, DiagnosisService);

        this.http = http;
      }
      /**
       * @param filter (optional)
       * @param requestId (optional)
       * @param sorting (optional)
       * @param skipCount (optional)
       * @param maxResultCount (optional)
       * @return Success
       */


      _createClass(DiagnosisService, [{
        key: "getRequestDiagnosis",
        value: function getRequestDiagnosis(filter, requestId, sorting, skipCount, maxResultCount) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Request/GetRequestDiagnosis?";
          if (filter !== undefined) url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
          if (requestId !== undefined) url_ += "RequestId=" + encodeURIComponent("" + requestId) + "&";
          if (sorting !== undefined) url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&";
          if (skipCount !== undefined) url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
          if (maxResultCount !== undefined) url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }]);

      return DiagnosisService;
    }();

    DiagnosisService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DiagnosisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], DiagnosisService);
    /***/
  },

  /***/
  "./src/app/services/Request/RequestMedicine.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/Request/RequestMedicine.ts ***!
    \*****************************************************/

  /*! exports provided: MedicineService */

  /***/
  function srcAppServicesRequestRequestMedicineTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedicineService", function () {
      return MedicineService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/enums/baseUrl */
    "./src/app/enums/baseUrl.ts");

    var MedicineService = /*#__PURE__*/function () {
      function MedicineService(http) {
        _classCallCheck(this, MedicineService);

        this.http = http;
      }
      /**
           * @param filter (optional)
           * @param requestId (optional)
           * @param sorting (optional)
           * @param skipCount (optional)
           * @param maxResultCount (optional)
           * @return Success
           */


      _createClass(MedicineService, [{
        key: "getRequestMedicine",
        value: function getRequestMedicine(filter, requestId, sorting, skipCount, maxResultCount) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Request/GetRequestMedicine?";
          if (filter !== undefined) url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
          if (requestId !== undefined) url_ += "RequestId=" + encodeURIComponent("" + requestId) + "&";
          if (sorting !== undefined) url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&";
          if (skipCount !== undefined) url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
          if (maxResultCount !== undefined) url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }]);

      return MedicineService;
    }();

    MedicineService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MedicineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], MedicineService);
    /***/
  },

  /***/
  "./src/app/services/Request/TeamWork.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/Request/TeamWork.ts ***!
    \**********************************************/

  /*! exports provided: TeamWorkService */

  /***/
  function srcAppServicesRequestTeamWorkTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamWorkService", function () {
      return TeamWorkService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/enums/baseUrl */
    "./src/app/enums/baseUrl.ts");

    var TeamWorkService = /*#__PURE__*/function () {
      function TeamWorkService(http) {
        _classCallCheck(this, TeamWorkService);

        this.http = http;
      }
      /**
       * @param filter (optional)
       * @param requestId (optional)
       * @param sorting (optional)
       * @param skipCount (optional)
       * @param maxResultCount (optional)
       * @return Success
       */


      _createClass(TeamWorkService, [{
        key: "getRequestTeamWork",
        value: function getRequestTeamWork(filter, requestId, sorting, skipCount, maxResultCount) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Request/GetRequestTeamWork?";
          if (filter !== undefined) url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
          if (requestId !== undefined) url_ += "RequestId=" + encodeURIComponent("" + requestId) + "&";
          if (sorting !== undefined) url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&";
          if (skipCount !== undefined) url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
          if (maxResultCount !== undefined) url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }]);

      return TeamWorkService;
    }();

    TeamWorkService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TeamWorkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], TeamWorkService);
    /***/
  },

  /***/
  "./src/app/services/Request/View.ts":
  /*!******************************************!*\
    !*** ./src/app/services/Request/View.ts ***!
    \******************************************/

  /*! exports provided: ViewService */

  /***/
  function srcAppServicesRequestViewTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewService", function () {
      return ViewService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/enums/baseUrl */
    "./src/app/enums/baseUrl.ts");

    var ViewService = /*#__PURE__*/function () {
      function ViewService(http) {
        _classCallCheck(this, ViewService);

        this.http = http;
      }
      /**
       * @param id (optional)
       * @return Success
       */


      _createClass(ViewService, [{
        key: "getRequestForView",
        value: function getRequestForView(id) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Request/GetRequestForView?";
          if (id !== undefined) url_ += "id=" + encodeURIComponent("" + id) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }]);

      return ViewService;
    }();

    ViewService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ViewService);
    /***/
  }
}]);
//# sourceMappingURL=pages-request-details-request-details-module-es5.js.map