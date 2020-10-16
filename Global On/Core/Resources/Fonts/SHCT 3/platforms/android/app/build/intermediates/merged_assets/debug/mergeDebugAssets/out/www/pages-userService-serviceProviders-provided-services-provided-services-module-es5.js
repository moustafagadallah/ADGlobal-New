function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-userService-serviceProviders-provided-services-provided-services-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userService/serviceProviders/provided-services/provided-services.page.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userService/serviceProviders/provided-services/provided-services.page.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUserServiceServiceProvidersProvidedServicesProvidedServicesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-title> {{'PROVIDED_SERVICES' | translate}}</ion-title> -->\n    <ion-title> {{providedServicesName}}</ion-title>\n    \n    <!-- <ion-item class=\"item-toolbar\" lines=\"none\"> -->\n      <ion-buttons  slot=\"end\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"start\" >\n        <ion-back-button defaultHref=\"#\" (click)=\"PreviousPage()\"></ion-back-button>\n      </ion-buttons>\n      <!-- <ion-searchbar s-style mode=\"ios\" placeholder=\"Search Services..\"></ion-searchbar> -->\n    <!-- </ion-item> -->\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"filterModal()\">\n        <ion-icon mode=\"ios\" name=\"funnel\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <shct-spinner [IsShow]=\"spinnerShow\"></shct-spinner>\n  <ng-container *ngIf=\"!spinnerShow\">\n  <ion-item *ngFor=\"let item of providedServices \" lines=\"none\" (click)=\"navigateProviderDetails(item)\">\n    <ion-label>\n      <ion-item lines=\"none\">\n        <h2> {{item.providedServiceName}}</h2>\n        <!-- <ion-label>\n          <h2> {{'S_NAME' | translate}} : <span class=\"white-space-initial\">{{item.providedServiceName}}</span></h2>\n          <br>\n         <h5>{{'S_DETAILS' | translate}} : </h5>\n          <span class=\"details\">{{item.description}}</span>\n          <h5> {{'S_PROVIDERS' | translate}} : <span>{{item.providerName}}</span></h5> \n        </ion-label> -->\n        <ion-note color=\"danger\" slot=\"end\">{{item.price| currency}}</ion-note>\n        <ion-icon slot=\"end\" name=\"md-arrow-dropright\" color=\"danger\"></ion-icon>\n      </ion-item>\n      <!-- <ion-item lines=\"none\" (click)=\"navigateProviderDetails(item)\">\n        <h2 class=\"f\">{{'View Provides Services'| translate}}</h2>\n        <ion-icon slot=\"end\" name=\"md-arrow-dropright\" color=\"danger\"></ion-icon>\n      </ion-item> -->\n    </ion-label>\n  </ion-item>\n</ng-container>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/userService/serviceProviders/provided-services/provided-services.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/userService/serviceProviders/provided-services/provided-services.module.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ProvidedServicesPageModule */

  /***/
  function srcAppPagesUserServiceServiceProvidersProvidedServicesProvidedServicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProvidedServicesPageModule", function () {
      return ProvidedServicesPageModule;
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


    var _provided_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./provided-services.page */
    "./src/app/pages/userService/serviceProviders/provided-services/provided-services.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _provided_services_page__WEBPACK_IMPORTED_MODULE_6__["ProvidedServicesPage"]
    }];

    var ProvidedServicesPageModule = function ProvidedServicesPageModule() {
      _classCallCheck(this, ProvidedServicesPageModule);
    };

    ProvidedServicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsModule"]],
      declarations: [_provided_services_page__WEBPACK_IMPORTED_MODULE_6__["ProvidedServicesPage"]]
    })], ProvidedServicesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/userService/serviceProviders/provided-services/provided-services.page.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/userService/serviceProviders/provided-services/provided-services.page.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUserServiceServiceProvidersProvidedServicesProvidedServicesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".f {\n  color: var(--text-color); }\n\nion-item {\n  margin-top: 10px;\n  --background: #c0e2fd;\n  height: 90px;\n  white-space: normal; }\n\n.item-toolbar {\n  --background: var(--content-color); }\n\n.details {\n  white-space: pre-wrap; }\n\n.white-space-initial {\n  white-space: initial; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlclNlcnZpY2Uvc2VydmljZVByb3ZpZGVycy9wcm92aWRlZC1zZXJ2aWNlcy9EOlxcd29ya1xccHJvamVjdFxcU0hDVC9zcmNcXGFwcFxccGFnZXNcXHVzZXJTZXJ2aWNlXFxzZXJ2aWNlUHJvdmlkZXJzXFxwcm92aWRlZC1zZXJ2aWNlc1xccHJvdmlkZWQtc2VydmljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXdCLEVBQUE7O0FBR3pCO0VBQ0MsZ0JBQWdCO0VBQ2hCLHFCQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtDQUFhLEVBQUE7O0FBRWpCO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyU2VydmljZS9zZXJ2aWNlUHJvdmlkZXJzL3Byb3ZpZGVkLXNlcnZpY2VzL3Byb3ZpZGVkLXNlcnZpY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5me1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gfVxyXG5cclxuICAgaW9uLWl0ZW17XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyBcclxuICAgIC0tYmFja2dyb3VuZDogI2MwZTJmZDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5pdGVtLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xyXG59XHJcbi5kZXRhaWxze1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcbi53aGl0ZS1zcGFjZS1pbml0aWFse1xyXG4gICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/userService/serviceProviders/provided-services/provided-services.page.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/userService/serviceProviders/provided-services/provided-services.page.ts ***!
    \************************************************************************************************/

  /*! exports provided: ProvidedServicesPage */

  /***/
  function srcAppPagesUserServiceServiceProvidersProvidedServicesProvidedServicesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProvidedServicesPage", function () {
      return ProvidedServicesPage;
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


    var src_app_services_ProvidedServices_provided_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/ProvidedServices/provided.service */
    "./src/app/services/ProvidedServices/provided.service.ts");
    /* harmony import */


    var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/loading/loading.service */
    "./src/app/services/loading/loading.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/DataShare/data-share.service */
    "./src/app/services/DataShare/data-share.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/TempDataDistributor/TempDataDistributor */
    "./src/app/services/TempDataDistributor/TempDataDistributor.ts");
    /* harmony import */


    var src_app_components_advanced_fiter_advanced_fiter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/advanced-fiter/advanced-fiter.component */
    "./src/app/components/advanced-fiter/advanced-fiter.component.ts");
    /* harmony import */


    var src_app_enums_pageName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/enums/pageName */
    "./src/app/enums/pageName.ts");

    var ProvidedServicesPage = /*#__PURE__*/function () {
      function ProvidedServicesPage(_providedService, _Loading, activeRouter, _dataShare, router, navctrl, _tempData, modalController) {
        _classCallCheck(this, ProvidedServicesPage);

        this._providedService = _providedService;
        this._Loading = _Loading;
        this.activeRouter = activeRouter;
        this._dataShare = _dataShare;
        this.router = router;
        this.navctrl = navctrl;
        this._tempData = _tempData;
        this.modalController = modalController;
        this.providedServices = [];
        this.spinnerShow = true;
        this.isAuthenticated = false;
      }

      _createClass(ProvidedServicesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.initialSetting();
          this.getProvidedService(undefined, undefined, undefined);

          this._tempData.authState.subscribe(function (isAuthenticated) {
            _this.isAuthenticated = isAuthenticated;
          });
        }
      }, {
        key: "initialSetting",
        value: function initialSetting() {
          this.mainMedicalServiceData = this._dataShare.getData("mainMedical");
          console.log(this.mainMedicalServiceData); // if(this.activeRouter.snapshot.data["dataSharing"])
          // {
          //   this.serviceProvider = this.activeRouter.snapshot.data['dataSharing']
          //   console.log(this.serviceProvider);
          // }
          // console.log(this.serviceProvider.tenantId , this.mainMedicalServiceData.mainMedicalService.id)

          if (this.activeRouter.snapshot.data["dataSharing"]) {
            var R = this.activeRouter.snapshot.data['dataSharing'];
            console.log(R);

            if (R.serviceNavigateType || R.serviceNavigateType == 'offer') {
              this.mainService_id = R.serviceId;
              this.tenantId = R.id;
              console.log(R.serviceNavigateType, "mainService_id :" + this.mainService_id);
            } else {
              this.serviceProvider = this.activeRouter.snapshot.data['dataSharing'];
              this.mainService_id = this.mainMedicalServiceData.mainMedicalService.id;
              this.tenantId = this.serviceProvider.tenantId;
              console.log(this.serviceProvider);
              console.log("mainService_id :" + this.mainService_id);
              console.log(this.serviceProvider.tenantId, "mainService_id :" + this.mainService_id);
            }
          }
        }
      }, {
        key: "getProvidedService",
        value: function getProvidedService(minPrice, maxPrice, filter) {
          var _this2 = this;

          //this._Loading.present();
          this.spinnerShow = true;

          this._providedService.getProvidedServices(this.tenantId, undefined, this.mainService_id, minPrice, maxPrice, undefined, filter, window.localStorage.getItem('lang')).subscribe(function (data) {
            console.log(data);
            data.result.items.forEach(function (element) {
              _this2.providedServices.push(element);
            }); // this._Loading.dismiss();

            _this2.spinnerShow = false;
            console.log(_this2.providedServices);
            _this2.providedServicesName = _this2.providedServices[0].providerName;
          }, function (error) {
            _this2.spinnerShow = false;
            console.log(error);
          });
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.providedServices = [];
          this.mainMedicalServiceData = null;
          this.serviceProvider = null;
        }
      }, {
        key: "navigateProviderDetails",
        value: function navigateProviderDetails(providedService) {
          this._dataShare.setData("providerDetails", providedService);

          console.log(providedService);
          if (!this.isAuthenticated) this.nextPage = 'login';else this.nextPage = "tabs/provided-details/providerDetails";
          this.router.navigateByUrl(this.nextPage);
        }
      }, {
        key: "PreviousPage",
        value: function PreviousPage() {
          this.navctrl.back(); // console.log(this.location.path());
        }
      }, {
        key: "filterModal",
        value: function filterModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: src_app_components_advanced_fiter_advanced_fiter_component__WEBPACK_IMPORTED_MODULE_8__["AdvancedFiterComponent"],
                      componentProps: {
                        filtrationList: this.providedServices,
                        filterPageName: src_app_enums_pageName__WEBPACK_IMPORTED_MODULE_9__["pageName"].PROVIDEDSERVICES,
                        patientHidden: true,
                        SearchByNameHidden: false,
                        priceHidden: false
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    _context.next = 7;
                    return modal.onWillDismiss().then(function (data) {
                      console.log(data.data);
                      var minPrice = data.data.price ? data.data.price.minPrice : undefined;
                      var maxPrice = data.data.price ? data.data.price.maxPrice : undefined;
                      var description = data.data.searchList ? data.data.searchList.description : undefined;

                      if (data.data.searchList || data.data.price) {
                        _this3.providedServices = [];

                        _this3.getProvidedService(minPrice, maxPrice, description);
                      }
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ProvidedServicesPage;
    }();

    ProvidedServicesPage.ctorParameters = function () {
      return [{
        type: src_app_services_ProvidedServices_provided_service__WEBPACK_IMPORTED_MODULE_2__["ProvidedService"]
      }, {
        type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_5__["DataShareService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_7__["TempDataDistributorService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    ProvidedServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-provided-services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./provided-services.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userService/serviceProviders/provided-services/provided-services.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./provided-services.page.scss */
      "./src/app/pages/userService/serviceProviders/provided-services/provided-services.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ProvidedServices_provided_service__WEBPACK_IMPORTED_MODULE_2__["ProvidedService"], src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_5__["DataShareService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_7__["TempDataDistributorService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], ProvidedServicesPage);
    /***/
  },

  /***/
  "./src/app/services/ProvidedServices/provided.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/ProvidedServices/provided.service.ts ***!
    \***************************************************************/

  /*! exports provided: ProvidedService */

  /***/
  function srcAppServicesProvidedServicesProvidedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProvidedService", function () {
      return ProvidedService;
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


    var src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/enums/baseUrl */
    "./src/app/enums/baseUrl.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProvidedService = /*#__PURE__*/function () {
      function ProvidedService(http) {
        _classCallCheck(this, ProvidedService);

        this.http = http;
      }
      /**
       * @param tenantId (optional)
       * @param classificationId (optional)
       * @param mainMedicalService (optional)
       * @param minPrice (optional)
       * @param maxPrice (optional)
       * @param hasOffer (optional)
       * @return Success
       */


      _createClass(ProvidedService, [{
        key: "getProvidedServices",
        value: function getProvidedServices(tenantId, classificationId, mainMedicalService, minPrice, maxPrice, hasOffer, Filter, AdditionalParameter) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_2__["BaseUrl"].baseUrl + "/api/services/app/Request/GetProvidedServices?";
          if (tenantId !== undefined) url_ += "TenantId=" + encodeURIComponent("" + tenantId) + "&";
          if (classificationId !== undefined) url_ += "ClassificationId=" + encodeURIComponent("" + classificationId) + "&";
          if (mainMedicalService !== undefined) url_ += "MainMedicalService=" + encodeURIComponent("" + mainMedicalService) + "&";
          if (minPrice !== undefined) url_ += "MinPrice=" + encodeURIComponent("" + minPrice) + "&";
          if (maxPrice !== undefined) url_ += "MaxPrice=" + encodeURIComponent("" + maxPrice) + "&";
          if (hasOffer !== undefined) url_ += "HasOffer=" + encodeURIComponent("" + hasOffer) + "&";
          if (Filter !== undefined) url_ += "Filter=" + encodeURIComponent("" + Filter) + "&";
          if (AdditionalParameter !== undefined) url_ += "AdditionalParameter.Language=" + encodeURIComponent("" + AdditionalParameter) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }]);

      return ProvidedService;
    }();

    ProvidedService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ProvidedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ProvidedService);
    /***/
  }
}]);
//# sourceMappingURL=pages-userService-serviceProviders-provided-services-provided-services-module-es5.js.map