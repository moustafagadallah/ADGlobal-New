function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-userService-serviceProviders-service-provider-service-provider-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userService/serviceProviders/service-provider/service-provider.page.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userService/serviceProviders/service-provider/service-provider.page.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUserServiceServiceProvidersServiceProviderServiceProviderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'S_PROVIDERS' | translate}}</ion-title>\n    <ion-buttons slot=\"start\" >\n      <ion-back-button defaultHref=\"#\" (click)=\"PreviousPage()\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"filterModal()\">\n        <ion-icon mode=\"ios\" name=\"funnel\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n <shct-spinner [IsShow]=\"spinnerShow\"></shct-spinner>\n\n <ion-item lines=\"none\" *ngIf=\"!spinnerShow\">\n  <ion-note slot=\"start\" class=\"margin-left margin-right\">مزود الخدمة</ion-note>\n  <ion-note slot=\"end\" class=\"margin-right margin-left\">التأمين</ion-note>\n </ion-item>\n\n <ng-container *ngIf=\"!spinnerShow\">\n  <ion-item *ngFor=\"let item of ServiceProviders \" lines=\"none\" (click)=\"viewProviders(item)\">\n    <ion-label>\n      <ion-item lines=\"none\" class=\"height_90\">\n        {{item.name}}\n        <ion-note slot=\"end\"> {{item.price| currency}}</ion-note>\n        <ion-icon slot=\"end\" name=\"md-arrow-dropright\" color=\"danger\"></ion-icon>\n      </ion-item>\n      <!-- <ion-item lines=\"none\">\n        <span class=\"f\">{{'View Provides Services'| translate}}</span>\n      </ion-item> -->\n    </ion-label>\n  </ion-item>\n</ng-container>\n\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/userService/serviceProviders/service-provider/service-provider.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/userService/serviceProviders/service-provider/service-provider.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: ServiceProviderPageModule */

  /***/
  function srcAppPagesUserServiceServiceProvidersServiceProviderServiceProviderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceProviderPageModule", function () {
      return ServiceProviderPageModule;
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


    var _service_provider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service-provider.page */
    "./src/app/pages/userService/serviceProviders/service-provider/service-provider.page.ts");
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
      component: _service_provider_page__WEBPACK_IMPORTED_MODULE_6__["ServiceProviderPage"]
    }];

    var ServiceProviderPageModule = function ServiceProviderPageModule() {
      _classCallCheck(this, ServiceProviderPageModule);
    };

    ServiceProviderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["CustomComponentsModule"]],
      declarations: [_service_provider_page__WEBPACK_IMPORTED_MODULE_6__["ServiceProviderPage"]]
    })], ServiceProviderPageModule);
    /***/
  },

  /***/
  "./src/app/pages/userService/serviceProviders/service-provider/service-provider.page.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/pages/userService/serviceProviders/service-provider/service-provider.page.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUserServiceServiceProvidersServiceProviderServiceProviderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  margin-top: 10px;\n  --background: #c0e2fd;\n  --padding-bottom:-10px;\n  white-space: normal; }\n\nion-list {\n  background: #a2c3fa; }\n\n.f {\n  color: var(--text-color); }\n\nion-label {\n  margin: -10px; }\n\n.height_90 {\n  height: 90px;\n  padding-top: 15px; }\n\n.margin-right {\n  margin-right: 50px; }\n\n.margin-left {\n  margin-left: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlclNlcnZpY2Uvc2VydmljZVByb3ZpZGVycy9zZXJ2aWNlLXByb3ZpZGVyL0Q6XFx3b3JrXFxwcm9qZWN0XFxTSENUL3NyY1xcYXBwXFxwYWdlc1xcdXNlclNlcnZpY2VcXHNlcnZpY2VQcm92aWRlcnNcXHNlcnZpY2UtcHJvdmlkZXJcXHNlcnZpY2UtcHJvdmlkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLHFCQUFhO0VBQ2Isc0JBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNBLHdCQUF3QixFQUFBOztBQUV4QjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyU2VydmljZS9zZXJ2aWNlUHJvdmlkZXJzL3NlcnZpY2UtcHJvdmlkZXIvc2VydmljZS1wcm92aWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7IFxyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYzBlMmZkO1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTotMTBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbmlvbi1saXN0e1xyXG4gICAgYmFja2dyb3VuZDogI2EyYzNmYTtcclxufVxyXG4uZntcclxuY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIG1hcmdpbjogLTEwcHg7XHJcbn1cclxuLmhlaWdodF85MHtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi5tYXJnaW4tcmlnaHR7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuLm1hcmdpbi1sZWZ0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/userService/serviceProviders/service-provider/service-provider.page.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/userService/serviceProviders/service-provider/service-provider.page.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ServiceProviderPage */

  /***/
  function srcAppPagesUserServiceServiceProvidersServiceProviderServiceProviderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceProviderPage", function () {
      return ServiceProviderPage;
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


    var src_app_services_Tenants_getTenantsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/Tenants/getTenantsService */
    "./src/app/services/Tenants/getTenantsService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/loading/loading.service */
    "./src/app/services/loading/loading.service.ts");
    /* harmony import */


    var src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/DataShare/data-share.service */
    "./src/app/services/DataShare/data-share.service.ts");
    /* harmony import */


    var src_app_components_advanced_fiter_advanced_fiter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/advanced-fiter/advanced-fiter.component */
    "./src/app/components/advanced-fiter/advanced-fiter.component.ts");
    /* harmony import */


    var src_app_enums_pageName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/enums/pageName */
    "./src/app/enums/pageName.ts");

    var ServiceProviderPage = /*#__PURE__*/function () {
      function ServiceProviderPage(_providersService, activeRouter, location, ionRouterOutlet, router, _ctrloading, _dataShare, navctrl, modalController) {
        _classCallCheck(this, ServiceProviderPage);

        // this.activeRouter.queryParams.subscribe(mainServiceId => {
        //   this.mainServiceId = mainServiceId;
        //   // console.log(this.mainServiceId)
        // })
        this._providersService = _providersService;
        this.activeRouter = activeRouter;
        this.location = location;
        this.ionRouterOutlet = ionRouterOutlet;
        this.router = router;
        this._ctrloading = _ctrloading;
        this._dataShare = _dataShare;
        this.navctrl = navctrl;
        this.modalController = modalController;
        this.ServiceProviders = [];
        this.spinnerShow = true;
      }

      _createClass(ServiceProviderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.initialSetting();
          this.getAllServiceProviders(this.mainServiceId, undefined);
        }
      }, {
        key: "initialSetting",
        value: function initialSetting() {
          if (this.activeRouter.snapshot.data['dataSharing']) {
            this.mainMedicalServiceData = this.activeRouter.snapshot.data['dataSharing'];
            console.log(this.mainMedicalServiceData); //get data from mainServiceData page

            this.mainServiceId = this.mainMedicalServiceData.mainMedicalService.id;
            console.log(this.mainServiceId);
          }
        }
      }, {
        key: "getAllServiceProviders",
        value: function getAllServiceProviders(mainServiceId, filter) {
          var _this = this;

          //this._ctrloading.present();
          this.spinnerShow = true;

          this._providersService.getAllServiceProviders(mainServiceId, filter).subscribe(function (data) {
            console.log(data.result);
            data.result.items.forEach(function (element) {
              _this.ServiceProviders.push(element); // this._ctrloading.dismiss();


              _this.spinnerShow = false;
            });
            console.log(_this.ServiceProviders);
          }, function (error) {
            _this.spinnerShow = false;
            console.log(error);
          });
        }
      }, {
        key: "viewProviders",
        value: function viewProviders(serviceProvider) {
          console.log("viewProviders");

          this._dataShare.setData("serviceProvider", serviceProvider);

          console.log(serviceProvider);
          this.router.navigateByUrl("tabs/provided-services/serviceProvider");
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.ServiceProviders = [];
          this.mainServiceId = 0;
        } //#region back button function

      }, {
        key: "previousPage",
        value: function previousPage() {
          var _this2 = this;

          this.location.back();
          console.log(this.location.back());
          this.canGoBack = this.ionRouterOutlet.canGoBack();
          this.currentUrl = this.router.url;
          this.routerEvents = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
              _this2.previousUrl = _this2.currentUrl;
              _this2.currentUrl = event.url;
            }
          });
          console.log(this.previousUrl);
        } //#endregion

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
                        filtrationList: this.ServiceProviders,
                        filterPageName: src_app_enums_pageName__WEBPACK_IMPORTED_MODULE_9__["pageName"].SERVICEPROVIDER,
                        patientHidden: true,
                        SearchByNameHidden: false,
                        priceHidden: true
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

                      if (data.data.searchList) {
                        _this3.ServiceProviders = [];

                        _this3.getAllServiceProviders(_this3.mainServiceId, data.data.searchList.name);
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

      return ServiceProviderPage;
    }();

    ServiceProviderPage.ctorParameters = function () {
      return [{
        type: src_app_services_Tenants_getTenantsService__WEBPACK_IMPORTED_MODULE_2__["GetTenantsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }, {
        type: src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_7__["DataShareService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }];
    };

    ServiceProviderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-service-provider',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./service-provider.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/userService/serviceProviders/service-provider/service-provider.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./service-provider.page.scss */
      "./src/app/pages/userService/serviceProviders/service-provider/service-provider.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Tenants_getTenantsService__WEBPACK_IMPORTED_MODULE_2__["GetTenantsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_7__["DataShareService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])], ServiceProviderPage);
    /***/
  },

  /***/
  "./src/app/services/Tenants/getTenantsService.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/Tenants/getTenantsService.ts ***!
    \*******************************************************/

  /*! exports provided: GetTenantsService */

  /***/
  function srcAppServicesTenantsGetTenantsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetTenantsService", function () {
      return GetTenantsService;
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

    var GetTenantsService = /*#__PURE__*/function () {
      function GetTenantsService(http) {
        _classCallCheck(this, GetTenantsService);

        this.http = http;
      }
      /**
          * @param mainServiceId (optional)
          * @return Success
          */


      _createClass(GetTenantsService, [{
        key: "getAllServiceProviders",
        value: function getAllServiceProviders(mainServiceId, Filter) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Request/GetAllServiceProviders?";
          if (mainServiceId !== undefined) url_ += "mainServiceId=" + encodeURIComponent("" + mainServiceId) + "&";
          if (Filter !== undefined) url_ += "Filter=" + encodeURIComponent("" + Filter) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }]);

      return GetTenantsService;
    }();

    GetTenantsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    GetTenantsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], GetTenantsService);
    /***/
  }
}]);
//# sourceMappingURL=pages-userService-serviceProviders-service-provider-service-provider-module-es5.js.map