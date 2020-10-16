(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Request-tab4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/Request/tab4.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/Request/tab4.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title> {{'REQUESTE' | translate}}</ion-title>\n\n  <!-- <ion-item lines=\"none\"> -->\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n      <!-- <ion-toggle></ion-toggle> -->\n    </ion-buttons>\n    <!-- <ion-searchbar s-style mode=\"ios\" placeholder=\"Search Services..\"></ion-searchbar> -->\n  <!-- </ion-item> -->\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"filterModal()\">\n      <ion-icon mode=\"ios\" name=\"funnel\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div class=\"container\" *ngFor=\"let request of requests \">\n    <div class=\"item1\">\n      <ion-item class=\"requestItem\" lines=\"none\">\n        <ion-text slot=\"start\" color=\"primary\">\n          <h6><b>{{'R_CODE' | translate}} : </b><span class=\"\">{{request.requestCode}}</span></h6>\n        </ion-text>\n        <ion-text id=\"center\" color=\"primary\">\n          <h6><b>{{'R_DATE' | translate}} &nbsp;</b>{{request.requestDate | date}}</h6>\n        </ion-text>\n        <ion-text id=\"Cost\" slot=\"end\" color=\"primary\">\n          <b>{{request.price | currency }}</b>\n        </ion-text>\n      </ion-item>\n    </div>\n    <!-- <div dir=\"ltr\" class=\"requestItem\"  *ngIf=\"request.requestStatusId != '3' && request.requestStatusId != '6'\">\n      <aw-wizard #Wizard class=\"wizard\" \n      [defaultStepIndex]=\"request.requestStatusId - 1\"\n      [navBarDirection]='right-to-left'\n      [disableNavigationBar]=\"true\">\n        <aw-wizard-step stepTitle=\"{{'NEW' | translate}}\">\n        </aw-wizard-step>\n        <aw-wizard-step stepTitle=\"{{'RECEVIED' | translate}}\" >\n        </aw-wizard-step>\n        <aw-wizard-step stepTitle=\"{{'EXECUTING' | translate}}\" >\n        </aw-wizard-step>\n        <aw-wizard-step stepTitle=\"{{'FINISHED' | translate}}\" >\n        </aw-wizard-step>\n      </aw-wizard>\n    </div> -->\n        \n    <ion-item *ngIf=\"request.requestStatusId != '3' && request.requestStatusId != '6'\" class=\"requestItem\" lines=\"none\">\n      <h6 ><b>{{'STATUS' | translate}} : </b><span style=\"color: green;\" >{{request.requestStatusName }}</span></h6>\n    </ion-item>\n      <ion-item *ngIf=\"request.requestStatusId == '3'\" class=\"requestItem\" lines=\"none\">\n      <h6 ><b>{{'STATUS' | translate}} : </b><span style=\"color: red;\">{{'req_Deferment' | translate }}</span></h6>\n    </ion-item>\n      <ion-item *ngIf=\"request.requestStatusId == '6'\" class=\"requestItem\" lines=\"none\">\n      <h6 ><b>{{'STATUS' | translate}}  : </b><span style=\"color: red;\">{{'req_Canceled' | translate }}</span></h6>\n      </ion-item>\n    <!-- <ion-button (click)=\"onClick()\">\n      Click me\n    </ion-button> -->\n    <div>\n      <ion-item class=\"requestItem\">\n        <ion-text color=\"primary\">\n          <h6><b>{{'PROVIDER_NAME' | translate}}  : </b> {{request.providerName}} </h6>\n        </ion-text>\n        <!-- <ion-text color=\"primary\">\n              <h6>Rate</h6>\n            </ion-text> -->\n\n       <div class=\"S-evaluation\" slot=\"end\">\n        <ionic4-star-rating #rating\n        activeIcon = \"ios-star\"\n        defaultIcon = \"ios-star-outline\"\n        activeColor = \"#488aff\" \n        defaultColor = \"#737373\"\n        readonly=\"true\"\n        rating=\"{{request.rate}}\"\n        fontSize = \"25px\">\n       </ionic4-star-rating>\n       <!-- *ngIf=\"request.canEvaluate\" -->\n        <div  >\n          <ion-button *ngIf=\"request.canEvaluate\" (click)=\"evaluation(request)\" expand=\"full\" fill=\"outline\" shape=\"round\" class=\"evaluate-bt\">\n            {{'SERVICE_EVALUATION' | translate}}\n           </ion-button>\n        </div>\n\n       </div>\n\n      </ion-item>\n      \n    </div>\n    <div>\n      <ion-item class=\"requestItem\" (click)=\"details(request)\">\n        <ion-text color=\"primary\">\n          <h5>{{'DETAILS' | translate}} </h5>\n        </ion-text>\n        <ion-icon color=\"danger\" slot=\"end\" mode=\"md\" name=\"arrow-dropright\"></ion-icon>\n      </ion-item>\n    </div>\n  </div>\n\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/services/MainRequest/mainRequest.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/MainRequest/mainRequest.ts ***!
  \*****************************************************/
/*! exports provided: MainRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRequestService", function() { return MainRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/enums/baseUrl */ "./src/app/enums/baseUrl.ts");




let MainRequestService = class MainRequestService {
    constructor(http) {
        this.http = http;
    }
    /**
     * @param filter (optional)
     * @param providerId (optional)
     * @param userId (optional)
     * @param patientIds (optional)
     * @param requestStatusIds (optional)
     * @param sorting (optional)
     * @param skipCount (optional)
     * @param maxResultCount (optional)
     * @return Success
     */
    getAll(filter, providerId, userId, patientIds, requestStatusIds, sorting, skipCount, maxResultCount) {
        let url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Request/GetAll?";
        if (filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
        if (providerId !== undefined)
            url_ += "ProviderId=" + encodeURIComponent("" + providerId) + "&";
        if (userId !== undefined)
            url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (patientIds !== undefined)
            patientIds && patientIds.forEach(item => { url_ += "PatientIds=" + encodeURIComponent("" + item) + "&"; });
        if (requestStatusIds !== undefined)
            requestStatusIds && requestStatusIds.forEach(item => { url_ += "RequestStatusIds=" + encodeURIComponent("" + item) + "&"; });
        if (sorting !== undefined)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.get(url_);
    }
};
MainRequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MainRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], MainRequestService);



/***/ }),

/***/ "./src/app/tabs/Request/tab4.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/Request/tab4.module.ts ***!
  \*********************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tabs/Request/tab4.page.ts");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");
/* harmony import */ var ionic4_star_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic4-star-rating */ "./node_modules/ionic4-star-rating/dist/index.js");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-archwizard */ "./node_modules/angular-archwizard/fesm2015/angular-archwizard.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");












//import { EvaluationsPage } from 'src/app/components/evaluations/evaluations.page';
//import { EvaluationsPage } from 'src/app/components/evaluations/evaluations.page';
let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"],
            ionic4_star_rating__WEBPACK_IMPORTED_MODULE_8__["StarRatingModule"],
            angular_archwizard__WEBPACK_IMPORTED_MODULE_9__["ArchwizardModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_11__["CustomComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"] }]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild()
        ],
        entryComponents: [],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "./src/app/tabs/Request/tab4.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tabs/Request/tab4.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  text-align: center; }\n\nh6 {\n  font-size: 8px;\n  color: #5d5c5c; }\n\nb, strong {\n  font-weight: 900; }\n\n.S-evaluation {\n  display: block;\n  text-align: center; }\n\n.starRate {\n  margin-left: 7px;\n  width: 18px;\n  margin-top: -1px; }\n\n#center {\n  margin-left: auto;\n  margin-right: auto; }\n\n#Cost {\n  color: red;\n  font-size: 15px; }\n\nspan {\n  color: #888888; }\n\nrating {\n  margin-left: auto;\n  margin-right: auto; }\n\n.requestItem {\n  --background: #c0e2fd;\n  background: #c0e2fd; }\n\n.container {\n  margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9SZXF1ZXN0L0Q6XFx3b3JrXFxwcm9qZWN0XFxTSENUL3NyY1xcYXBwXFx0YWJzXFxSZXF1ZXN0XFx0YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksY0FBYyxFQUFBOztBQUlsQjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDSSxxQkFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUV2QjtFQUNLLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFicy9SZXF1ZXN0L3RhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuaDZ7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIGNvbG9yOiAjNWQ1YzVjO1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAtNTFweDtcclxufVxyXG5iLCBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLlMtZXZhbHVhdGlvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy9oZWlnaHQ6IDI1cHg7XHJcbn1cclxuLnN0YXJSYXRle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuXHJcbn1cclxuXHJcbiNjZW50ZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuI0Nvc3R7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbnNwYW57XHJcbiAgICBjb2xvcjogIzg4ODg4ODtcclxufVxyXG5cclxuXHJcbnJhdGluZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG5cclxuLnJlcXVlc3RJdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYzBlMmZkO1xyXG4gICAgYmFja2dyb3VuZDogI2MwZTJmZDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/Request/tab4.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tabs/Request/tab4.page.ts ***!
  \*******************************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-archwizard */ "./node_modules/angular-archwizard/fesm2015/angular-archwizard.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_MainRequest_mainRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/MainRequest/mainRequest */ "./src/app/services/MainRequest/mainRequest.ts");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/DataShare/data-share.service */ "./src/app/services/DataShare/data-share.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_evaluations_evaluations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/evaluations/evaluations.component */ "./src/app/components/evaluations/evaluations.component.ts");
/* harmony import */ var src_app_components_advanced_fiter_advanced_fiter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/advanced-fiter/advanced-fiter.component */ "./src/app/components/advanced-fiter/advanced-fiter.component.ts");
/* harmony import */ var src_app_enums_pageName__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/enums/pageName */ "./src/app/enums/pageName.ts");




//import { IRequestServicesDto } from 'src/app/models/RequestDto/RequestServicesDto';







let Tab4Page = class Tab4Page {
    constructor(router, _Request, _loadCtrl, _dataShare, modalController) {
        this.router = router;
        this._Request = _Request;
        this._loadCtrl = _loadCtrl;
        this._dataShare = _dataShare;
        this.modalController = modalController;
        this.stepIndex = 2;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.userId = parseInt(window.localStorage.getItem('userId'));
        console.log(this.userId);
        this.getAllRequest(undefined, undefined, this.userId, undefined, undefined, undefined, undefined, undefined);
    }
    initialSetting() { }
    ionViewWillLeave() { }
    onRateChange(event) {
        console.log('Your rate:', event);
    }
    logRatingChange(rating) {
        console.log("changed rating: ", rating);
        // do your stuff
    }
    enterSecondStep(enter) {
        console.log(enter);
    }
    onClick() {
        console.log(this.wizard.currentStepIndex);
        // console.log(this.wizard.currentStep);
        // console.log(this.wizard.getIndexOfStep);
        this.wizard.goToNextStep();
        this.wizard.defaultStepIndex.valueOf();
        this.wizard.currentStepIndex;
        console.log(this.wizard.defaultStepIndex);
    }
    details(requests) {
        console.log(requests);
        this._dataShare.setData("request", requests);
        this.router.navigateByUrl('tabs/request-details/request');
    }
    getAllRequest(filter, providerId, userId, patientIds, requestStatusIds, sorting, skipCount, maxResultCount) {
        this._loadCtrl.present();
        this._Request.getAll(filter, providerId, userId, patientIds, requestStatusIds, sorting, skipCount, maxResultCount)
            .subscribe(request => {
            this.requests = request.result.items;
            console.log(request);
            this._loadCtrl.dismiss();
        });
    }
    evaluation(request) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(request);
            const modal = yield this.modalController.create({
                component: src_app_components_evaluations_evaluations_component__WEBPACK_IMPORTED_MODULE_8__["EvaluationsComponent"],
                cssClass: "start-evaluation",
                componentProps: { request_Id: request.id }
            });
            yield modal.present();
        });
    }
    filterModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_advanced_fiter_advanced_fiter_component__WEBPACK_IMPORTED_MODULE_9__["AdvancedFiterComponent"],
                componentProps: {
                    filtrationList: this.requests,
                    filterPageName: src_app_enums_pageName__WEBPACK_IMPORTED_MODULE_10__["pageName"].REQUEST,
                    userId: this.userId,
                    patientHidden: false,
                    SearchByNameHidden: true,
                    priceHidden: true
                }
            });
            yield modal.present();
            yield modal.onWillDismiss().then((data) => {
                console.log(data.data);
                if (data.data.patient_id) {
                    let patient_ids = [];
                    patient_ids.push(data.data.patient_id);
                    this.requests = undefined;
                    this.getAllRequest(undefined, undefined, this.userId, patient_ids, undefined, undefined, undefined, undefined);
                }
            });
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_MainRequest_mainRequest__WEBPACK_IMPORTED_MODULE_4__["MainRequestService"] },
    { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_6__["DataShareService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Wizard', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_archwizard__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"])
], Tab4Page.prototype, "wizard", void 0);
Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/Request/tab4.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tabs/Request/tab4.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_MainRequest_mainRequest__WEBPACK_IMPORTED_MODULE_4__["MainRequestService"],
        src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_6__["DataShareService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])
], Tab4Page);



/***/ })

}]);
//# sourceMappingURL=Request-tab4-module-es2015.js.map