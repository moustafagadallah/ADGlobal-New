(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Offers-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/Offers/tab2.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/Offers/tab2.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar>\n    <ion-title>\n      {{'OFFERS' | translate}}\n    </ion-title>\n \n  <!-- <ion-item lines=\"none\"> -->\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n      <!-- <ion-toggle></ion-toggle> -->\n    </ion-buttons>\n    <!-- <ion-searchbar s-style mode=\"ios\" placeholder=\"Search Services..\"></ion-searchbar>\n  </ion-item> -->\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <shct-spinner [IsShow]=\"spinnerShow\"></shct-spinner>\n\n  <ion-list *ngIf=\"!spinnerShow\" mode=\"ios\">\n    <ion-item mode=\"ios\" *ngFor=\"let offer of offers ;let i = index \" lines=\"none\" style=\"margin-top: 10px; --background: #c0e2fd;\">\n      <ion-thumbnail>\n       \n        <img [src]=\"offer.imageUrl\"  (error)=setServiceImage(i);/>\n        \n        \n      </ion-thumbnail>\n      <ion-label>\n        <h4>{{'O-NAME' | translate}} :</h4>\n        <p> {{offer.name}}</p>\n        <h4>{{'O_DATE' | translate}} : </h4>\n        <p> {{ offer.expiringDate | date}}</p>\n        <h4>{{'O_TYPE' | translate}}  :</h4>\n        <p> {{ offer.description}}</p>\n      </ion-label>\n      <ion-label style=\" text-align: center;\">\n        <div class=\"offerPrice\">\n          <del slot=\"end\">{{offer.oldPrice}}</del> &nbsp;\n          <ion-note slot=\"end\">{{offer.price}}</ion-note>\n        </div>\n        <br>\n        <ion-button slot=\"end\" (click)=\"getNow(offer)\">\n          {{'GET_NOW' | translate}}\n        </ion-button>\n\n      </ion-label>\n\n    </ion-item>\n  </ion-list> -->\n  <!-- \n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\"></ion-col>\n      <ion-col size=\"6\"></ion-col>\n      <ion-col size=\"12\">\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <!-- <ion-card  *ngFor=\"let offer of offers ;let i = index \">\n    <img [src]=\"offer.imageUrl\"  />\n    <ion-card-header>\n      <ion-card-subtitle>Destination</ion-card-subtitle>\n      <ion-card-title>Madison, WI</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.\n    </ion-card-content>\n  </ion-card> -->\n\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"12\" size-xl=\"12\" sizeSm=\"4\" size-lg=\"4\" *ngFor=\"let offer of offers ;let i = index \"\n        style=\"margin-bottom: -20px;margin-top: -20px;\">\n        <ion-card mode=\"ios\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"6\">\n                <img [src]=\"offer.imageUrl\">\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-row>\n                  <ion-col size=\"auto\">\n                    <p class=\"offer-title overme\">{{offer.name}}</p>\n                  </ion-col>\n                </ion-row>\n                <ion-row style=\"max-height: 27px;\">\n                  <ion-col class=\"x-emoji-overlay\" size=\"6\">\n\n                    <span style=\"color: rgb(250, 43, 43); font-size: 15px; \">{{offer.oldPrice}} </span><span\n                      style=\"color:  rgb(250, 43, 43);; font-size: 10px;\">ريال</span>\n\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <span style=\"color: green; font-size: 65%;\">{{offer.price}} </span> <span\n                      style=\"color: green; font-size: 10px;\">ريال</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=\"12\">\n                    <ion-button (click)=\"getNow(offer)\">\n                      {{'GET_NOW' | translate}}\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/services/Offers/OffersService.ts":
/*!**************************************************!*\
  !*** ./src/app/services/Offers/OffersService.ts ***!
  \**************************************************/
/*! exports provided: OffersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersService", function() { return OffersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/enums/baseUrl */ "./src/app/enums/baseUrl.ts");




let OffersService = class OffersService {
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
    getAllOffer(filter, MinPrice, MaxPrice, ServiceType) {
        let url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Request/GetOffers?";
        if (filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
        if (MinPrice !== undefined)
            url_ += "MinPrice=" + encodeURIComponent("" + MinPrice) + "&";
        if (MaxPrice !== undefined)
            url_ += "MaxPrice=" + encodeURIComponent("" + MaxPrice) + "&";
        if (ServiceType !== undefined)
            url_ += "ServiceType=" + encodeURIComponent("" + ServiceType) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.get(url_);
    }
};
OffersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OffersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], OffersService);



/***/ }),

/***/ "./src/app/tabs/Offers/tab2.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/Offers/tab2.module.ts ***!
  \********************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tabs/Offers/tab2.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tabs/Offers/tab2.page.scss":
/*!********************************************!*\
  !*** ./src/app/tabs/Offers/tab2.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-thumbnail {\n  min-width: 7rem;\n  min-height: 7rem; }\n  ion-thumbnail img {\n    max-width: 6rem;\n    min-width: 6rem; }\n  .spinner {\n  width: 30px;\n  height: 30pc;\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto; }\n  ion-button {\n  --background: rgb(228, 86, 86);\n  --border-radius: 20px;\n  max-width: 60px;\n  max-height: 26px;\n  font-size: 11px;\n  font-size: 9px;\n  inline-size: -webkit-fill-available; }\n  h4 {\n  font-size: 11px;\n  margin-top: 10px;\n  white-space: normal; }\n  ion-note {\n  --color:green;\n  font-size: 20px; }\n  ion-list {\n  background: var(--content-color); }\n  ion-searchbar {\n  margin-top: -8px; }\n  del {\n  font-size: 14px;\n  color: red; }\n  section {\n  background: var(--content-color);\n  padding: 0.5rem; }\n  .x-emoji-overlay:after {\n  content: \"\\2715\";\n  padding: 14px;\n  font-size: 30px;\n  line-height: 20px;\n  opacity: 0.7; }\n  .x-emoji-overlay {\n  position: relative; }\n  .x-emoji-overlay:after {\n  position: absolute;\n  top: 10px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  color: red;\n  text-align: center; }\n  .offer-title {\n  font-size: 11px;\n  font-style: italic;\n  font-weight: 700; }\n  img {\n  max-width: 100%;\n  border: 0;\n  height: 100%;\n  border-radius: 10px;\n  border: #c8c7c7;\n  border-width: thin;\n  border-style: solid;\n  max-height: 160px; }\n  ion-card {\n  --background: #c0e2fd;\n  max-height: 185px; }\n  ion-col {\n  text-align: center;\n  font-size: 25px; }\n  .overme {\n  line-height: 19px;\n  font-size: 12px;\n  font-weight: bold;\n  width: 90px;\n  height: 34px;\n  margin-left: auto;\n  margin-right: auto;\n  overflow: hidden;\n  display: inline-block;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  .overme {\n  white-space: normal;\n  display: -webkit-inline-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9PZmZlcnMvRDpcXHdvcmtcXHByb2plY3RcXFNIQ1Qvc3JjXFxhcHBcXHRhYnNcXE9mZmVyc1xcdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUM7RUFDRyxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFGbkI7SUFJTyxlQUFlO0lBQ2YsZUFBZSxFQUFBO0VBS3ZCO0VBQ0csV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0VBR3JCO0VBQ0ksOEJBQWE7RUFDYixxQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLG1DQUFtQyxFQUFBO0VBRXZDO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtFQUV2QjtFQUNJLGFBQVE7RUFDUixlQUFlLEVBQUE7RUFHbkI7RUFDSSxnQ0FBZ0MsRUFBQTtFQUdsQztFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0UsZUFBZTtFQUNmLFVBQVUsRUFBQTtFQVdkO0VBRUUsZ0NBQWdDO0VBSWhDLGVBQWUsRUFBQTtFQUtqQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBMkI7RUFDM0IsaUJBM0VjO0VBNEVkLFlBQVksRUFBQTtFQUdkO0VBQ0Usa0JBQWtCLEVBQUE7RUFLcEI7RUFFSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVU7RUFDVixrQkFBa0IsRUFBQTtFQU10QjtFQUNFLGVBQWU7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFHcEI7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7RUFFbkI7RUFDRSxxQkFBYTtFQUNiLGlCQUFpQixFQUFBO0VBSW5CO0VBQ0Esa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQUlmO0VBRUUsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0VBR3JCO0VBQ0UsbUJBQW1CO0VBRW5CLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWJzL09mZmVycy90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwRm9udFNpemU6IDIwcHg7XG5cbiBpb24tdGh1bWJuYWlsIHtcbiAgICBtaW4td2lkdGg6IDdyZW07ICAgIFxuICAgIG1pbi1oZWlnaHQ6IDdyZW07XG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2cmVtOyAgICBcbiAgICAgICAgbWluLXdpZHRoOiA2cmVtO1xuICAgIH1cblxufVxuXG4uc3Bpbm5lciB7XG4gICB3aWR0aDogMzBweDtcbiAgIGhlaWdodDogMzBwYztcbiAgIG1hcmdpbi10b3A6IDMwcHg7IFxuICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbmlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjI4LCA4NiwgODYpO1xuICAgIC0tYm9yZGVyLXJhZGl1c1x0OiAyMHB4O1xuICAgIG1heC13aWR0aDogNjBweDtcbiAgICBtYXgtaGVpZ2h0OiAyNnB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBpbmxpbmUtc2l6ZTogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cbmg0e1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24tbm90ZXtcbiAgICAtLWNvbG9yOmdyZWVuO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLWxpc3R7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29udGVudC1jb2xvcik7XG4gIH1cbiAgXG4gIGlvbi1zZWFyY2hiYXJ7XG4gICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICB9XG5cbiAgZGVse1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5cbi8vICAgLm9mZmVyUHJpY2V7XG4vLyAgICAgYm9yZGVyOiAjM2EzYTE3O1xuLy8gICAgIGJvcmRlci1zdHlsZTogZG90dGVkO1xuLy8gICAgIGhlaWdodDogNDFweDtcbi8vICAgICBwYWRkaW5nLXRvcDogN3B4O1xuLy8gICB9XG4gXG5cbnNlY3Rpb24ge1xuICAvLyBtYXgtd2lkdGg6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcbiAgLy8gZGlzcGxheTogZmxleDtcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8vIGhlaWdodDogMTAwdnc7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuXG5cbi54LWVtb2ppLW92ZXJsYXk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcMjcxNVwiO1xuICBwYWRkaW5nOiAxNHB4O1xuICBmb250LXNpemU6IDEuNSAqICRwRm9udFNpemU7XG4gIGxpbmUtaGVpZ2h0OiAkcEZvbnRTaXplO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi54LWVtb2ppLW92ZXJsYXkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cblxufVxuXG4ueC1lbW9qaS1vdmVybGF5IHtcbiAgJjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG5cblxuLm9mZmVyLXRpdGxle1xuICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmltZ3tcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAjYzhjN2M3O1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIG1heC1oZWlnaHQ6IDE2MHB4O1xufVxuaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6ICNjMGUyZmQ7XG4gIG1heC1oZWlnaHQ6IDE4NXB4O1xuLy8gIG1heC13aWR0aDogNTQwcHg7XG59XG5cbmlvbi1jb2wge1xudGV4dC1hbGlnbjogY2VudGVyO1xuZm9udC1zaXplOiAyNXB4O1xufVxuXG5cbi5vdmVybWUge1xuIFxuICBsaW5lLWhlaWdodDogMTlweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogMzRweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbiAgXG4ub3Zlcm1lIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgLy8gZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/tabs/Offers/tab2.page.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/Offers/tab2.page.ts ***!
  \******************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_Offers_OffersService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Offers/OffersService */ "./src/app/services/Offers/OffersService.ts");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "./src/app/services/loading/loading.service.ts");
/* harmony import */ var src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/DataShare/data-share.service */ "./src/app/services/DataShare/data-share.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_enums_pageName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/enums/pageName */ "./src/app/enums/pageName.ts");
/* harmony import */ var src_app_enums_filesPath__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/enums/filesPath */ "./src/app/enums/filesPath.ts");
/* harmony import */ var src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/TempDataDistributor/TempDataDistributor */ "./src/app/services/TempDataDistributor/TempDataDistributor.ts");









//declare var $: JQueryStatic;
let Tab2Page = class Tab2Page {
    constructor(_offer, _loadCtrl, router, _dataShare, _tempData) {
        this._offer = _offer;
        this._loadCtrl = _loadCtrl;
        this.router = router;
        this._dataShare = _dataShare;
        this._tempData = _tempData;
        this.imageError = false;
        this.isMainService = false;
        this.isAuthenticated = false;
        this.spinnerShow = true;
    }
    ionViewWillEnter() {
        this.getAllOffers();
        this.spinnerGift = src_app_enums_filesPath__WEBPACK_IMPORTED_MODULE_7__["filesPath"].spinnerGigt;
    }
    ngOnInit() {
        this._tempData.authState.subscribe((isAuthenticated) => {
            this.isAuthenticated = isAuthenticated;
        });
    }
    ngAfterViewInit() { }
    getAllOffers() {
        //this._loadCtrl.present();
        this.spinnerShow = true;
        this._offer.getAllOffer(undefined, undefined, undefined, undefined).subscribe(offers => {
            this.offers = offers.result.items;
            console.log(this.offers);
            //  this._loadCtrl.dismiss();
            this.spinnerShow = false;
        }, error => {
            this.spinnerShow = false;
            console.log(error);
        });
    }
    initialSetting() { }
    ionViewWillLeave() { }
    getNow(offer) {
        console.log(offer.isMainService);
        if (!this.isAuthenticated) {
            this.nextPage = 'login';
            this.router.navigateByUrl(this.nextPage);
        }
        else {
            if (offer.isMainService) {
                this.nextPage = 'tabs/provided-services/mainMedical';
                offer.serviceNavigateType = 'offer';
                this._dataShare.setData("mainMedical", offer);
                console.log(offer);
                this.router.navigateByUrl(this.nextPage);
            }
            else {
                this.nextPage = 'tabs/provided-details/Offer';
                this._dataShare.setData("Offer", offer);
                this._dataShare.setData("pageName", src_app_enums_pageName__WEBPACK_IMPORTED_MODULE_6__["pageName"].OFFERS);
                this.router.navigate([this.nextPage]);
            }
        }
    }
    setServiceImage(i) {
        console.log(i);
        console.log("Image Error");
        this.imageError = true;
        this.offers[i].imageUrl = "assets/imgs/logo.png";
    }
};
Tab2Page.ctorParameters = () => [
    { type: src_app_services_Offers_OffersService__WEBPACK_IMPORTED_MODULE_2__["OffersService"] },
    { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_4__["DataShareService"] },
    { type: src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_8__["TempDataDistributorService"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/Offers/tab2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tabs/Offers/tab2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Offers_OffersService__WEBPACK_IMPORTED_MODULE_2__["OffersService"],
        src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_4__["DataShareService"],
        src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_8__["TempDataDistributorService"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=Offers-tab2-module-es2015.js.map