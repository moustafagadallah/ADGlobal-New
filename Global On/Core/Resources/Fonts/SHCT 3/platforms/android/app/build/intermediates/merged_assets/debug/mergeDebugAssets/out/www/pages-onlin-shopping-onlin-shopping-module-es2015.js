(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onlin-shopping-onlin-shopping-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onlin-shopping/onlin-shopping.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onlin-shopping/onlin-shopping.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'ONLINE_SHOPPING' | translate}}</ion-title>\n    <!-- <ion-item class=\"item-toolbar\" lines=\"none\"> -->\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-searchbar s-style mode=\"ios\" placeholder=\"{{'SEARCH_SERVICES' | translate}}\"></ion-searchbar> -->\n    <!-- </ion-item> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <shct-spinner [IsShow]=\"spinnerWorking\"></shct-spinner>\n<!-- \n   <ion-grid *ngIf=\"!spinnerWorking\" style=\"margin-top: 20px;\" >\n    <ion-row >\n      <ion-col *ngFor=\"let p of products\" size-xs=\"6\" size-xl=\"6\" sizeSm=\"4\" size-lg=\"4\" >\n        <ion-card class=\"cardOnline\">\n          <img  src=\"assets/imgs/online-store.jpg\" >\n          <h6><b>{{p.categoryName}} &nbsp; &nbsp; &nbsp; </b><span>{{p.netPrice | currency}}</span></h6>\n         \n         <div style=\"width: 100%; text-align: center;\">\n          <ion-button class=\"getNow\" color=\"danger\" (click)=\"getNow(p)\">\n            {{'GET_NOW' | translate}}\n          </ion-button>\n        </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>  -->\n\n  <ion-grid *ngIf=\"!spinnerWorking\">\n    <ion-row>\n      <ion-col *ngFor=\"let p of products\" size-xs=\"6\" size-xl=\"6\" sizeSm=\"4\" size-lg=\"4\">\n        <div class=\"wrapper\">\n          <div class=\"container\" (click)=\"getNow(p)\">\n            <div class=\"top\">\n              <img  src=\"{{p.imageUrl}}\" >\n            </div>\n            <div class=\"bottom\">\n              <div class=\"buy\" >\n               <i class=\"material-icons\">add_shopping_cart</i>\n              </div>\n              <div  class=\"product\">\n                <span class=\"product-name\">{{p.categoryName}}</span>\n                <span class=\"product-price\">{{p.netPrice | currency}}</span>\n              </div>     \n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/onlin-shopping/onlin-shopping.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/onlin-shopping/onlin-shopping.module.ts ***!
  \***************************************************************/
/*! exports provided: OnlinShoppingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlinShoppingPageModule", function() { return OnlinShoppingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _onlin_shopping_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onlin-shopping.page */ "./src/app/pages/onlin-shopping/onlin-shopping.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









const routes = [
    {
        path: '',
        component: _onlin_shopping_page__WEBPACK_IMPORTED_MODULE_6__["OnlinShoppingPage"]
    }
];
let OnlinShoppingPageModule = class OnlinShoppingPageModule {
};
OnlinShoppingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsModule"]
        ],
        declarations: [_onlin_shopping_page__WEBPACK_IMPORTED_MODULE_6__["OnlinShoppingPage"]]
    })
], OnlinShoppingPageModule);



/***/ }),

/***/ "./src/app/pages/onlin-shopping/onlin-shopping.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/onlin-shopping/onlin-shopping.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  margin-top: 20px; }\n\nion-card {\n  --background: none;\n  box-shadow: none;\n  text-align: center; }\n\nimg {\n  width: 100%;\n  height: 100%; }\n\nion-label {\n  color: var(--text-color);\n  font-size: large; }\n\n.cardOnline {\n  width: 100%;\n  height: 100%;\n  border-radius: 20px;\n  background: #d4edf1; }\n\n.getNow {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: -7px;\n  width: 70px;\n  height: 30px;\n  padding-bottom: 5px;\n  font-size: 10px;\n  --border-radius: 15px; }\n\nspan {\n  color: #888888;\n  font-size: 14px; }\n\nb, strong {\n  font-weight: bold;\n  font-size: 14px; }\n\n.wrapper {\n  height: 200px;\n  background: white;\n  margin: auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 0;\n  transform: scale(0.95);\n  transition: box-shadow 0.5s, transform 0.5s;\n  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2); }\n\n.wrapper:hover {\n    transform: scale(1);\n    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2); }\n\n.wrapper .container {\n    width: 100%;\n    height: 100%; }\n\n.wrapper .container .top {\n      height: 70%;\n      width: 100%;\n      background-size: 100%; }\n\n.wrapper .container .bottom {\n      height: 30%;\n      width: 100%;\n      background: #d4edf1;\n      display: flex; }\n\n.wrapper .container .bottom .buy {\n        height: 100%;\n        width: 30%;\n        padding-top: 14px;\n        background: #a1d4ff; }\n\n.wrapper .container .bottom .buy .material-icons {\n          color: #4e4d4d; }\n\n.wrapper .container .bottom .product {\n        height: 100%;\n        width: 70%;\n        text-align: center; }\n\n.wrapper .container .bottom .product-name {\n        font-size: 15px;\n        display: block;\n        position: relative;\n        margin-top: 10px;\n        text-align: center; }\n\n.wrapper .container .bottom .product-price {\n        font-size: 10px;\n        display: block;\n        position: relative;\n        text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb25saW4tc2hvcHBpbmcvRDpcXHdvcmtcXHByb2plY3RcXFNIQ1Qvc3JjXFxhcHBcXHBhZ2VzXFxvbmxpbi1zaG9wcGluZ1xcb25saW4tc2hvcHBpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQWdCLEVBQUE7O0FBRXBCO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQVNuQjtFQUVFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkNBQTJDO0VBQzNDLDRDQUF5QyxFQUFBOztBQVgzQztJQWFJLG1CQUFtQjtJQUNuQiw0Q0FBeUMsRUFBQTs7QUFkN0M7SUFrQkksV0FBVTtJQUNWLFlBQVcsRUFBQTs7QUFuQmY7TUFxQk0sV0FBVztNQUNYLFdBQVU7TUFJZCxxQkFBcUIsRUFBQTs7QUExQnZCO01BNkJNLFdBQVc7TUFDWCxXQUFVO01BQ1YsbUJBQTZCO01BQzdCLGFBQWEsRUFBQTs7QUFoQ25CO1FBa0NRLFlBQVk7UUFDWixVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLG1CQUFtQixFQUFBOztBQXJDM0I7VUF1Q1UsY0FBYSxFQUFBOztBQXZDdkI7UUEyQ1EsWUFBWTtRQUNaLFVBQVU7UUFDVixrQkFBa0IsRUFBQTs7QUE3QzFCO1FBZ0RRLGVBQWU7UUFDZixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixrQkFBa0IsRUFBQTs7QUFwRDFCO1FBdURRLGVBQWU7UUFDZixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb25saW4tc2hvcHBpbmcvb25saW4tc2hvcHBpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiAgaW9uLWNhcmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAuY2FyZE9ubGluZXtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDIxMiwgMjM3LCAyNDEpO1xyXG4gIH1cclxuXHJcbiAgLmdldE5vd3tcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87IFxyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAjODg4ODg4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmIsIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLy8gaHRtbCwgYm9keXtcclxuLy8gICBiYWNrZ3JvdW5kOiAjRTNFM0Q4O1xyXG4vLyAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4vLyAgIHBhZGRpbmc6IDI1cHg7XHJcbi8vIH1cclxuXHJcbi53cmFwcGVye1xyXG4gIC8vIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDA7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMsIHRyYW5zZm9ybSAwLjVzO1xyXG4gIGJveC1zaGFkb3c6IDVweCAyMHB4IDMwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICY6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDIwcHggMzBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAudG9we1xyXG4gICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAtby1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbXtcclxuICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6cmdiKDIxMiwgMjM3LCAyNDEpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAuYnV5e1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNhMWQ0ZmY7XHJcbiAgICAgICAgLm1hdGVyaWFsLWljb25ze1xyXG4gICAgICAgICAgY29sb3I6IzRlNGQ0ZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnByb2R1Y3R7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm9kdWN0LW5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAucHJvZHVjdC1wcmljZXtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG4gIFxyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/onlin-shopping/onlin-shopping.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/onlin-shopping/onlin-shopping.page.ts ***!
  \*************************************************************/
/*! exports provided: OnlinShoppingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlinShoppingPage", function() { return OnlinShoppingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_Shopping_Shopping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Shopping/Shopping */ "./src/app/services/Shopping/Shopping.ts");
/* harmony import */ var src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/DataShare/data-share.service */ "./src/app/services/DataShare/data-share.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_enums_pageName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/enums/pageName */ "./src/app/enums/pageName.ts");
/* harmony import */ var src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/TempDataDistributor/TempDataDistributor */ "./src/app/services/TempDataDistributor/TempDataDistributor.ts");







let OnlinShoppingPage = class OnlinShoppingPage {
    constructor(_shopping, _dataShare, router, _tempData) {
        this._shopping = _shopping;
        this._dataShare = _dataShare;
        this.router = router;
        this._tempData = _tempData;
        this.isAuthenticated = false;
        this.spinnerWorking = true;
    }
    ngOnInit() {
        this._tempData.authState.subscribe((isAuthenticated) => {
            this.isAuthenticated = isAuthenticated;
        });
        console.log("isAuthenticated : ", this.isAuthenticated);
        if (!this.isAuthenticated)
            this.nextPage = '/login';
        else
            this.nextPage = 'tabs/provided-details/serviceProvider';
    }
    ionViewWillEnter() { this.getAllProducrs(undefined, undefined, undefined, undefined, undefined, undefined); }
    initialSetting() { }
    ionViewWillLeave() { }
    getAllProducrs(filter, tenantId, categoryId, minPrice, maxPrice, hasOffer) {
        this.spinnerWorking = true;
        this._shopping.getAllProducts(filter, tenantId, categoryId, minPrice, maxPrice, hasOffer).subscribe(product => {
            this.products = product.result;
            console.log(this.products);
            this.spinnerWorking = false;
        }, erreor => { console.log(erreor); this.spinnerWorking = false; });
    }
    getNow(onlinShoppingDetails) {
        this._dataShare.setData("serviceProvider", onlinShoppingDetails);
        this._dataShare.setData("pageName", src_app_enums_pageName__WEBPACK_IMPORTED_MODULE_5__["pageName"].ONLIN_SHOPPING_PAGE);
        console.log(onlinShoppingDetails);
        this.router.navigateByUrl(this.nextPage);
    }
};
OnlinShoppingPage.ctorParameters = () => [
    { type: src_app_services_Shopping_Shopping__WEBPACK_IMPORTED_MODULE_2__["ShoppingService"] },
    { type: src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_3__["DataShareService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_6__["TempDataDistributorService"] }
];
OnlinShoppingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onlin-shopping',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./onlin-shopping.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onlin-shopping/onlin-shopping.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./onlin-shopping.page.scss */ "./src/app/pages/onlin-shopping/onlin-shopping.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Shopping_Shopping__WEBPACK_IMPORTED_MODULE_2__["ShoppingService"],
        src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_3__["DataShareService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_6__["TempDataDistributorService"]])
], OnlinShoppingPage);



/***/ }),

/***/ "./src/app/services/Shopping/Shopping.ts":
/*!***********************************************!*\
  !*** ./src/app/services/Shopping/Shopping.ts ***!
  \***********************************************/
/*! exports provided: ShoppingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingService", function() { return ShoppingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/enums/baseUrl */ "./src/app/enums/baseUrl.ts");




let ShoppingService = class ShoppingService {
    constructor(http) {
        this.http = http;
    }
    /**
       * @param filter (optional)
       * @param tenantId (optional)
       * @param categoryId (optional)
       * @param minPrice (optional)
       * @param maxPrice (optional)
       * @param hasOffer (optional)
       * @return Success
       */
    getAllProducts(filter, tenantId, categoryId, minPrice, maxPrice, hasOffer) {
        let url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Request/GetAllProducts?";
        if (filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
        if (tenantId !== undefined)
            url_ += "TenantId=" + encodeURIComponent("" + tenantId) + "&";
        if (categoryId !== undefined)
            url_ += "CategoryId=" + encodeURIComponent("" + categoryId) + "&";
        if (minPrice !== undefined)
            url_ += "MinPrice=" + encodeURIComponent("" + minPrice) + "&";
        if (maxPrice !== undefined)
            url_ += "MaxPrice=" + encodeURIComponent("" + maxPrice) + "&";
        if (hasOffer !== undefined)
            url_ += "HasOffer=" + encodeURIComponent("" + hasOffer) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.get(url_);
    }
};
ShoppingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShoppingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ShoppingService);



/***/ })

}]);
//# sourceMappingURL=pages-onlin-shopping-onlin-shopping-module-es2015.js.map