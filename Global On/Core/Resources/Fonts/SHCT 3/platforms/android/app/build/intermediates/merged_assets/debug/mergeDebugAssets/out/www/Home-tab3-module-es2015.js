(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.page.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.page.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>{{serviceName}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"dismiss()\">\n        close\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen >\n  <ion-slides #slides mode=\"ios\" [options]=\"slideOpts\" >\n\n    <ion-slide>\n        <h2>{{'S_DETAILS' | translate }}</h2>\n        <p>{{description}}</p>\n\n    </ion-slide>\n\n    <ion-slide>\n      <!-- <img [src]=\"imageUrl\"/> -->\n      <h2>{{'Terms and Conditions' | translate }}</h2>\n      <p>{{termsAndConditions}}</p>\n    </ion-slide>\n\n  \n  </ion-slides>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"danger\" (click)=\"slidNext()\" *ngIf=\"!lastSlide\">\n        <ion-icon name=\"arrow-round-forward\" slot=\"end\"></ion-icon>\n        {{'NEXT' | translate}}\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"danger\" (click)=\"slidPrev()\" *ngIf=\"slideIndexNumber > 0\">\n        <ion-icon name=\"arrow-round-back\" slot=\"start\"></ion-icon>\n        {{'PREVIOUS' | translate}}\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"danger\" (click)=\"moveToService()\" *ngIf=\"lastSlide\">\n        <ion-icon name=\"arrow-round-forward\" slot=\"end\"></ion-icon>\n        {{'NEXT' | translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n<!-- [disabled]=\"lastSlide\" -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/Home/tab3.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/Home/tab3.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-item lines=\"none\">\n            <ion-buttons slot=\"end\">\n              <ion-menu-button ></ion-menu-button>\n            </ion-buttons>\n            <ion-img src=\"assets\\imgs\\logo.png\"></ion-img>\n            <!-- <ion-searchbar s-style mode=\"ios\" placeholder=\"Search Services..\" ></ion-searchbar> -->\n          </ion-item>\n    </ion-toolbar>\n  \n  </ion-header>\n\n<ion-content>\n  <!-- <max-min-price ></max-min-price> -->\n  <!-- <search-by-name></search-by-name> -->\n\n  \n<!--     \n  <ion-item>\n    <ion-select [(ngModel)]=\"language\" (ionChange)=\"changeLanguage(language)\">\n       <ion-select-option value=\"en\" selected=\"true\">English</ion-select-option>\n       <ion-select-option value=\"ar\">Arabic</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <h6 style=\"text-align: center; color: white;\">{{'HELLO' | translate}} <span class=\"userName\">{{FRIST_NAME}}</span></h6>\n  <h6 style=\"text-align: center; color: white; margin-top: -8px;\">{{'HELLO_MESSAGE' | translate }}</h6>\n\n      <ion-grid style=\"margin-top: 20px;\">\n        <ion-row>\n          <ion-col size=\"6\" size-xs=\"6\" size-xl=\"6\" sizeSm=\"4\" size-lg=\"3\"\n          *ngFor=\"let item of mainMedicalServiceList;  let i = index\" (click)=\"navigatetoServiceProvider(item)\">\n            <ion-card>\n              <img  src=\"{{item.mainMedicalService.imageUrl}}\" (error)=setServiceImage(i);>\n              <!-- <ng-template #imagTemplate>\n                <img  [src]=\"medicalServicesImg[i].url\">\n              </ng-template> -->\n             <b><ion-label>{{item.mainMedicalService.name}}</ion-label></b>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"6\" size-xs=\"6\" size-xl=\"6\" sizeSm=\"4\" size-lg=\"3\" (click)=\"navigatetoOnlineShopping()\" >\n            <ion-card>\n              <img src=\"assets/imgs/online-store.jpg\">\n             <b><ion-label>{{'Online_Store' | translate}}</ion-label></b>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DescTermsAndConditionsSlidersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescTermsAndConditionsSlidersPageModule", function() { return DescTermsAndConditionsSlidersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _desc_terms_and_conditions_sliders_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desc-terms-and-conditions-sliders.page */ "./src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");







let DescTermsAndConditionsSlidersPageModule = class DescTermsAndConditionsSlidersPageModule {
};
DescTermsAndConditionsSlidersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
        ],
        declarations: [
            _desc_terms_and_conditions_sliders_page__WEBPACK_IMPORTED_MODULE_5__["DescTermsAndConditionsSlidersComponent"]
        ],
        exports: [
            _desc_terms_and_conditions_sliders_page__WEBPACK_IMPORTED_MODULE_5__["DescTermsAndConditionsSlidersComponent"]
        ],
        entryComponents: [
            _desc_terms_and_conditions_sliders_page__WEBPACK_IMPORTED_MODULE_5__["DescTermsAndConditionsSlidersComponent"],
        ],
    })
], DescTermsAndConditionsSlidersPageModule);



/***/ }),

/***/ "./src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.page.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.page.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: #c0e2fd; }\n\nion-slides {\n  height: 100%;\n  width: 100%; }\n\n.swiper-slide {\n  display: block; }\n\n.swiper-slide h2 {\n  margin-top: 2.8rem; }\n\n.img {\n  max-height: 50px;\n  max-width: 80%; }\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none; }\n\nb {\n  font-weight: 500; }\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b); }\n\np b {\n  color: var(--ion-text-color, #000000); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNjLXRlcm1zLWFuZC1jb25kaXRpb25zLXNsaWRlcnMvRDpcXHdvcmtcXHByb2plY3RcXFNIQ1Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRlc2MtdGVybXMtYW5kLWNvbmRpdGlvbnMtc2xpZGVyc1xcZGVzYy10ZXJtcy1hbmQtY29uZGl0aW9ucy1zbGlkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVLLHFCQUFhLEVBQUE7O0FBR2xCO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlDQUF5QyxFQUFBOztBQUczQztFQUNFLHFDQUFxQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZXNjLXRlcm1zLWFuZC1jb25kaXRpb25zLXNsaWRlcnMvZGVzYy10ZXJtcy1hbmQtY29uZGl0aW9ucy1zbGlkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDsgXHJcbiAgICAgLS1iYWNrZ3JvdW5kOiAjYzBlMmZkO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5zd2lwZXItc2xpZGUgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMi44cmVtO1xyXG4gIH1cclxuXHJcbiAgLmltZ3tcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgLnN3aXBlci1zbGlkZSBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNTAlO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDYwcHggMCA0MHB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBiIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcclxuICB9XHJcblxyXG4gIHAgYiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.page.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.page.ts ***!
  \********************************************************************************************************/
/*! exports provided: DescTermsAndConditionsSlidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescTermsAndConditionsSlidersComponent", function() { return DescTermsAndConditionsSlidersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/DataShare/data-share.service */ "./src/app/services/DataShare/data-share.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DescTermsAndConditionsSlidersComponent = class DescTermsAndConditionsSlidersComponent {
    constructor(modalCtrl, _dataShare, router) {
        this.modalCtrl = modalCtrl;
        this._dataShare = _dataShare;
        this.router = router;
        this.lastSlide = false;
    }
    ngOnInit() {
        console.log(this.service_info);
        this.termsAndConditions = this.service_info.mainMedicalService.termsAndConditions;
        this.description = this.service_info.mainMedicalService.description;
        this.imageUrl = this.service_info.mainMedicalService.imageUrl;
        this.serviceName = this.service_info.mainMedicalService.name;
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
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
            this.lastSlide = (Index === 1) ? true : false;
        });
    }
    slidPrev() {
        this.slides.slidePrev();
        this.slides.getActiveIndex().then(Index => {
            console.log(Index);
            this.slideIndexNumber = Index;
            this.lastSlide = (Index === 1) ? true : false;
        });
    }
    moveToService() {
        this._dataShare.setData("mainMedical", this.service_info);
        console.log(this.service_info);
        this.router.navigateByUrl('tabs/service-provider/mainMedical');
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }
};
DescTermsAndConditionsSlidersComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_3__["DataShareService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], DescTermsAndConditionsSlidersComponent.prototype, "slides", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DescTermsAndConditionsSlidersComponent.prototype, "service_info", void 0);
DescTermsAndConditionsSlidersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'desc-terms-and-conditions-sliders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./desc-terms-and-conditions-sliders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./desc-terms-and-conditions-sliders.page.scss */ "./src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_3__["DataShareService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], DescTermsAndConditionsSlidersComponent);



/***/ }),

/***/ "./src/app/services/mainServiceStore/main-service-store.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/mainServiceStore/main-service-store.service.ts ***!
  \*************************************************************************/
/*! exports provided: MainServiceStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainServiceStoreService", function() { return MainServiceStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _MainMedical_main_medical_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MainMedical/main-medical.service */ "./src/app/services/MainMedical/main-medical.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");





let MainServiceStoreService = class MainServiceStoreService {
    constructor(_mainMedicalService, _translate) {
        this._mainMedicalService = _mainMedicalService;
        this._translate = _translate;
        this._intialMainServiceList = (_translate.currentLang == 'ar') ?
            JSON.parse(window.localStorage.getItem("mainMedicalServiceList_ar")) :
            JSON.parse(window.localStorage.getItem("mainMedicalServiceList_en"));
        console.log(this._intialMainServiceList);
        this.mainService = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this._intialMainServiceList);
        this.loadInitialData(7, undefined, window.localStorage.getItem('lang'));
    }
    loadInitialData(serviceType, filter, AdditionalParameter) {
        this._mainMedicalService.getAllMainMedical(serviceType, filter, AdditionalParameter)
            .subscribe(res => {
            console.log(res.result.items);
            if (this._translate.currentLang == 'ar')
                window.localStorage.setItem("mainMedicalServiceList_ar", JSON.stringify(res.result.items));
            else
                window.localStorage.setItem("mainMedicalServiceList_en", JSON.stringify(res.result.items));
            this.mainService.next(res.result.items);
        }, err => console.log("Error retrieving mainMedicalServiceStore ", err));
    }
};
MainServiceStoreService.ctorParameters = () => [
    { type: _MainMedical_main_medical_service__WEBPACK_IMPORTED_MODULE_3__["MainMedicalService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
MainServiceStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_MainMedical_main_medical_service__WEBPACK_IMPORTED_MODULE_3__["MainMedicalService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
], MainServiceStoreService);



/***/ }),

/***/ "./src/app/tabs/Home/tab3.module.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/Home/tab3.module.ts ***!
  \******************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tabs/Home/tab3.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_components_desc_terms_and_conditions_sliders_desc_terms_and_conditions_sliders_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.module */ "./src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");










let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            src_app_components_desc_terms_and_conditions_sliders_desc_terms_and_conditions_sliders_module__WEBPACK_IMPORTED_MODULE_8__["DescTermsAndConditionsSlidersPageModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_9__["CustomComponentsModule"]
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tabs/Home/tab3.page.scss":
/*!******************************************!*\
  !*** ./src/app/tabs/Home/tab3.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  margin-top: 20px; }\n\nion-card {\n  --background: none;\n  box-shadow: none;\n  text-align: center; }\n\nimg {\n  display: block;\n  margin: auto;\n  width: 200px;\n  height: 129px;\n  border-radius: 20px;\n  margin-bottom: 15px; }\n\nion-label {\n  color: var(--text-color);\n  font-size: medium; }\n\n.userName {\n  color: #5f9fff;\n  font-size: 15px;\n  font-style: oblique;\n  font-weight: 900; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9Ib21lL0Q6XFx3b3JrXFxwcm9qZWN0XFxTSENUL3NyY1xcYXBwXFx0YWJzXFxIb21lXFx0YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFicy9Ib21lL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taXRlbSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuICBpb24tY2FyZHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBpbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDEyOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICBpb24tbGFiZWx7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG5cbiAgLnVzZXJOYW1le1xuICAgIGNvbG9yOiAjNWY5ZmZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/tabs/Home/tab3.page.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/Home/tab3.page.ts ***!
  \****************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/DataShare/data-share.service */ "./src/app/services/DataShare/data-share.service.ts");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_Settings_Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/Settings/Settings */ "./src/app/services/Settings/Settings.ts");
/* harmony import */ var src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/TempDataDistributor/TempDataDistributor */ "./src/app/services/TempDataDistributor/TempDataDistributor.ts");
/* harmony import */ var src_app_components_desc_terms_and_conditions_sliders_desc_terms_and_conditions_sliders_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.page */ "./src/app/components/desc-terms-and-conditions-sliders/desc-terms-and-conditions-sliders.page.ts");
/* harmony import */ var src_app_services_mainServiceStore_main_service_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/mainServiceStore/main-service-store.service */ "./src/app/services/mainServiceStore/main-service-store.service.ts");













// import { IMainMedicalServiceDto } from 'src/app/models/MainMedicalService';
let Tab3Page = class Tab3Page {
    constructor(_service, router, _dataShare, _loadCtrl, _translate, platform, _setting, _tempData, descTermAndCond, 
    //private event     : Events
    document) {
        this._service = _service;
        this.router = router;
        this._dataShare = _dataShare;
        this._loadCtrl = _loadCtrl;
        this._translate = _translate;
        this.platform = platform;
        this._setting = _setting;
        this._tempData = _tempData;
        this.descTermAndCond = descTermAndCond;
        this.document = document;
        this.imageError = false;
        this.FRIST_NAME = '';
        this.medicalServicesImg = [
            { title: 'homeCare', url: 'assets/medical-services/mainService0.jpg' },
            { title: 'longTerm', url: 'assets/medical-services/mainService1.jpg' },
            { title: 'specialHome', url: 'assets/medical-services/mainService2.jpg' },
        ];
        this.isAuthenticated = false;
    }
    ngOnInit() { }
    intialHome() {
        // if(window.localStorage.getItem("mainMedicalServiceList_ar") && (this._translate.currentLang == 'ar'))
        // {
        //   this.mainMedicalServiceList = JSON.parse(window.localStorage.getItem("mainMedicalServiceList_ar"));
        //   for (let index = 0; index < this.mainMedicalServiceList.length; index++) {
        //     this.mainMedicalServiceList[index].mainMedicalService.imageUrl =  "assets/medical-services/mainService" + index + ".jpg";
        //   }
        //   console.log(this.mainMedicalServiceList)
        //   }else if (window.localStorage.getItem("mainMedicalServiceList_en") && (this._translate.currentLang === 'en')){
        //     this.mainMedicalServiceList = JSON.parse(window.localStorage.getItem("mainMedicalServiceList_en"));
        //     for (let index = 0; index < this.mainMedicalServiceList.length; index++) {
        //       this.mainMedicalServiceList[index].mainMedicalService.imageUrl =  "assets/medical-services/mainService" + index + ".jpg";
        //     }
        //     console.log(this.mainMedicalServiceList)
        //   }
        this._service.mainService.subscribe(mainMedicalService => {
            if (mainMedicalService) {
                this.mainMedicalServiceList = mainMedicalService;
                for (let index = 0; index < this.mainMedicalServiceList.length; index++) {
                    this.mainMedicalServiceList[index].mainMedicalService.imageUrl = "assets/medical-services/mainService" + index + ".jpg";
                }
            }
            else
                this._service.loadInitialData(7, undefined, window.localStorage.getItem('lang'));
        });
    }
    // getMainMedicalService(serviceType: number, filter: string){
    //   this._loadCtrl.present();
    //   this._service.getAllMainMedical(serviceType,filter,"").subscribe( data => {
    //     this.mainMedicalServiceList = data.result.items;
    //     if(this._translate.currentLang === 'ar')
    //     window.localStorage.setItem("mainMedicalServiceList_ar" , JSON.stringify(data.result.items))
    //     else
    //     window.localStorage.setItem("mainMedicalServiceList_en" , JSON.stringify(data.result.items))
    //     console.log(this.mainMedicalServiceList)
    //     for (let index = 0; index < data.result.totalCount; index++) {
    //       this.mainMedicalServiceList[index].mainMedicalService.imageUrl =  "assets/medical-services/mainService" + index + ".jpg"; 
    //     }
    //     this._loadCtrl.dismiss();
    //   })
    // }
    ionViewWillEnter() {
        this.intialHome();
        this._tempData.authState.subscribe((isAuthenticated) => {
            this.isAuthenticated = isAuthenticated;
        });
        console.log("isAuthenticated : ", this.isAuthenticated);
        console.log("here");
        if (this.isAuthenticated)
            this.getUserInfo();
    }
    //   // edit page
    //   private updateData() {
    //   // some processing
    //   this.event.publish('user:updated', yourUpdatedData);
    // }
    getUserInfo() {
        this._setting.GetCurrentUserProfileForEdit().subscribe(data => {
            this.dataUserInfo = data.result;
            console.log(this.dataUserInfo);
            this.FRIST_NAME = this.dataUserInfo.name;
        }, error => { console.log(error); });
    }
    navigatetoServiceProvider(item) {
        this.descTermAndCondDataPass(item);
        // this._dataShare.setData("mainMedical" , item);
        // console.log(item)
        // this.router.navigateByUrl('tabs/service-provider/mainMedical');
    }
    setServiceImage(item) {
        console.log(item);
        console.log("Image Error");
        this.imageError = true;
        this.mainMedicalServiceList[item].mainMedicalService.imageUrl = "assets/medical-services/mainService" + item + ".jpg";
    }
    navigatetoOnlineShopping() {
        this.router.navigate(['tabs/onlin-shopping']);
    }
    // public changeLanguage(language) : void
    // {
    //   //TODO ::  CAll Change Language from Server  
    //   // and all the below will be on subscrip on this funcion 
    //   this._setting.getChangeLanguage(language ).subscribe(data =>{
    //     console.log(data)
    //     this._translate.use(language);
    //     window.localStorage.setItem('lang',language);
    //     window.location.reload();
    //     console.log(language)
    //     setTimeout(() => {
    //       if(this.platform.isRTL)
    //       this.document.documentElement.dir = "ltr"
    //       else
    //       this.document.documentElement.dir = "rtl"
    //     }, 5000);
    //   })
    // }
    descTermAndCondDataPass(service_info) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(service_info);
            const modal = yield this.descTermAndCond.create({
                component: src_app_components_desc_terms_and_conditions_sliders_desc_terms_and_conditions_sliders_page__WEBPACK_IMPORTED_MODULE_10__["DescTermsAndConditionsSlidersComponent"],
                cssClass: 'my-custom-class',
                componentProps: {
                    "service_info": service_info
                }
            });
            return yield modal.present();
        });
    }
    onClick(e) {
        console.log(e);
    }
    ionViewWillLeave() { }
};
Tab3Page.ctorParameters = () => [
    { type: src_app_services_mainServiceStore_main_service_store_service__WEBPACK_IMPORTED_MODULE_11__["MainServiceStoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_3__["DataShareService"] },
    { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: src_app_services_Settings_Settings__WEBPACK_IMPORTED_MODULE_8__["SettingsService"] },
    { type: src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_9__["TempDataDistributorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/Home/tab3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tabs/Home/tab3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_mainServiceStore_main_service_store_service__WEBPACK_IMPORTED_MODULE_11__["MainServiceStoreService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_3__["DataShareService"],
        src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
        src_app_services_Settings_Settings__WEBPACK_IMPORTED_MODULE_8__["SettingsService"],
        src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_9__["TempDataDistributorService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        Document])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=Home-tab3-module-es2015.js.map