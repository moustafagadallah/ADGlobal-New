function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs/tabs.page.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs/tabs.page.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n    <ion-tabs >\n\n        <ion-tab-bar slot=\"bottom\" >\n\n          <ion-tab-button   *ngIf=\"!isAuthenticated\" color=\"primary\" mode=\"ios\" (click)=\"navigateProfilePage()\">\n            <ion-icon name=\"person\" mode=\"ios\"></ion-icon>\n            <ion-label>{{'profileTab' | translate }}</ion-label>\n          </ion-tab-button>\n\n                  \n\n          <ion-tab-button  *ngIf=\"isAuthenticated\"  tab=\"tab1\" color=\"primary\" mode=\"ios\">\n            <ion-icon name=\"person\" mode=\"ios\"></ion-icon>\n            <ion-label>{{'profileTab' | translate }}</ion-label>\n          </ion-tab-button>\n\n\n          <ion-tab-button  *ngIf=\"!isAuthenticated\"  mode=\"ios\" (click)=\"navigateChatePage()\">\n            <ion-icon name=\"chatbubbles\"></ion-icon>\n          <ion-label>{{'chatTab' | translate }}</ion-label>\n        </ion-tab-button>\n\n\n          <ion-tab-button *ngIf=\"isAuthenticated\" mode=\"ios\" tab=\"chat\">\n              <ion-icon name=\"chatbubbles\"></ion-icon>\n            <ion-label>{{'chatTab' | translate }}</ion-label>\n          </ion-tab-button>\n\n\n\n          <ion-tab-button tab=\"tab3\" mode=\"ios\">\n            <ion-icon name=\"home\" mode=\"ios\"></ion-icon>\n            <ion-label>{{'homeTab' | translate }}</ion-label>\n          </ion-tab-button>\n      \n          <ion-tab-button tab=\"tab2\" mode=\"ios\">\n            <ion-icon name=\"gift\" mode=\"ios\"></ion-icon>\n            <ion-label>{{'offersTab' | translate }}</ion-label>\n          </ion-tab-button>\n      \n               \n          <ion-tab-button  *ngIf=\"!isAuthenticated\" mode=\"ios\" (click)=\"navigateRequestPage()\">\n            <ion-icon name=\"basket\" mode=\"md\"></ion-icon>\n            <ion-label>{{'requestTab' | translate }}</ion-label>\n          </ion-tab-button> \n\n            <ion-tab-button *ngIf=\"isAuthenticated\" tab=\"tab4\"  mode=\"ios\">\n              <ion-icon name=\"basket\" mode=\"md\"></ion-icon>\n              <ion-label>{{'requestTab' | translate }}</ion-label>\n            </ion-tab-button>\n\n        </ion-tab-bar>\n      \n      </ion-tabs>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tabs/tabs/tabs.module.ts":
  /*!******************************************!*\
    !*** ./src/app/tabs/tabs/tabs.module.ts ***!
    \******************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs.router.module */
    "./src/app/tabs/tabs/tabs.router.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs/tabs.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs/tabs.page.scss":
  /*!******************************************!*\
    !*** ./src/app/tabs/tabs/tabs.page.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-tab-bar {\n  height: 70px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px; }\n\nion-tab-button:focus {\n  --color: #3880ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzL0Q6XFx3b3JrXFxwcm9qZWN0XFxTSENUL3NyY1xcYXBwXFx0YWJzXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0EsZ0JBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLXRhYi1iYXJ7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG59XG5cbmlvbi10YWItYnV0dG9uOmZvY3Vze1xuLS1jb2xvcjogIzM4ODBmZjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs/tabs.page.ts":
  /*!****************************************!*\
    !*** ./src/app/tabs/tabs/tabs.page.ts ***!
    \****************************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/TempDataDistributor/TempDataDistributor */
    "./src/app/services/TempDataDistributor/TempDataDistributor.ts");

    var TabsPage = /*#__PURE__*/function () {
      // chatPage    : string ;
      // homePage    : string ;
      // offersPage  : string ;
      // profilePage : string ;
      // requestPage : string ;
      function TabsPage(router, _tempData) {
        var _this = this;

        _classCallCheck(this, TabsPage);

        this.router = router;
        this._tempData = _tempData;
        this.isAuthenticated = false;

        this._tempData.authState.subscribe(function (isAuthenticated) {
          _this.isAuthenticated = isAuthenticated;
        });

        console.log("isAuthenticated : ", this.isAuthenticated);
      }

      _createClass(TabsPage, [{
        key: "navigateRequestPage",
        value: function navigateRequestPage() {
          this.profile = !this.isAuthenticated ? 'login' : 'tabs/tab4';
          this.router.navigateByUrl(this.profile);
        }
      }, {
        key: "navigateProfilePage",
        value: function navigateProfilePage() {
          this.profile = !this.isAuthenticated ? 'login' : 'tabs/tab1';
          this.router.navigateByUrl(this.profile);
        }
      }, {
        key: "navigateChatePage",
        value: function navigateChatePage() {
          this.profile = !this.isAuthenticated ? 'login' : 'tabs/chat';
          this.router.navigateByUrl(this.profile);
        }
      }]);

      return TabsPage;
    }();

    TabsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_3__["TempDataDistributorService"]
      }];
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs/tabs.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs/tabs.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_3__["TempDataDistributorService"]])], TabsPage);
    /***/
  },

  /***/
  "./src/app/tabs/tabs/tabs.router.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/tabs/tabs/tabs.router.module.ts ***!
    \*************************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsTabsRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs/tabs.page.ts");
    /* harmony import */


    var src_app_services_DataShare_data_resolve_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/DataShare/data-resolve.service */
    "./src/app/services/DataShare/data-resolve.service.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'tab1',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | Profile-tab1-module */
            [__webpack_require__.e("default~Home-tab3-module~Profile-tab1-module~Request-tab4-module~pages-onlin-shopping-onlin-shopping~93d9100c"), __webpack_require__.e("Profile-tab1-module")]).then(__webpack_require__.bind(null,
            /*! ../Profile/tab1.module */
            "./src/app/tabs/Profile/tab1.module.ts")).then(function (m) {
              return m.Tab1PageModule;
            });
          }
        }]
      }, {
        path: 'chat',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | chat-chat-module */
            [__webpack_require__.e("common"), __webpack_require__.e("chat-chat-module")]).then(__webpack_require__.bind(null,
            /*! ../chat/chat.module */
            "./src/app/tabs/chat/chat.module.ts")).then(function (m) {
              return m.ChatPageModule;
            });
          }
        }]
      }, {
        path: 'tab2',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | Offers-tab2-module */
            "Offers-tab2-module").then(__webpack_require__.bind(null,
            /*! ../Offers/tab2.module */
            "./src/app/tabs/Offers/tab2.module.ts")).then(function (m) {
              return m.Tab2PageModule;
            });
          }
        }]
      }, {
        path: 'tab3',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | Home-tab3-module */
            [__webpack_require__.e("default~Home-tab3-module~Profile-tab1-module~Request-tab4-module~pages-onlin-shopping-onlin-shopping~93d9100c"), __webpack_require__.e("common"), __webpack_require__.e("Home-tab3-module")]).then(__webpack_require__.bind(null,
            /*! ../Home/tab3.module */
            "./src/app/tabs/Home/tab3.module.ts")).then(function (m) {
              return m.Tab3PageModule;
            });
          }
        }]
      }, {
        path: 'tab4',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | Request-tab4-module */
            [__webpack_require__.e("default~Home-tab3-module~Profile-tab1-module~Request-tab4-module~pages-onlin-shopping-onlin-shopping~93d9100c"), __webpack_require__.e("default~Request-tab4-module~pages-request-details-request-details-module"), __webpack_require__.e("Request-tab4-module")]).then(__webpack_require__.bind(null,
            /*! ../Request/tab4.module */
            "./src/app/tabs/Request/tab4.module.ts")).then(function (m) {
              return m.Tab4PageModule;
            });
          }
        }]
      }, {
        path: 'getintouch',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-get-in-touch-get-in-touch-module */
            "pages-get-in-touch-get-in-touch-module").then(__webpack_require__.bind(null,
            /*! ../../pages/get-in-touch/get-in-touch.module */
            "./src/app/pages/get-in-touch/get-in-touch.module.ts")).then(function (m) {
              return m.GetInTouchPageModule;
            });
          }
        }]
      }, {
        path: 'request-details/:id',
        resolve: {
          dataSharing: src_app_services_DataShare_data_resolve_service__WEBPACK_IMPORTED_MODULE_4__["DataResolveService"]
        },
        loadChildren: './pages/request-details/request-details.module#RequestDetailsPageModule'
      }, {
        path: 'service-provider',
        loadChildren: './pages/userService/serviceProviders/service-provider/service-provider.module#ServiceProviderPageModule'
      }, {
        path: 'service-provider/:id',
        resolve: {
          dataSharing: src_app_services_DataShare_data_resolve_service__WEBPACK_IMPORTED_MODULE_4__["DataResolveService"]
        },
        loadChildren: './pages/userService/serviceProviders/service-provider/service-provider.module#ServiceProviderPageModule'
      }, {
        path: 'provided-services/:id',
        resolve: {
          dataSharing: src_app_services_DataShare_data_resolve_service__WEBPACK_IMPORTED_MODULE_4__["DataResolveService"]
        },
        loadChildren: './pages/userService/serviceProviders/provided-services/provided-services.module#ProvidedServicesPageModule'
      }, {
        path: 'provided-details/:id',
        resolve: {
          dataSharing: src_app_services_DataShare_data_resolve_service__WEBPACK_IMPORTED_MODULE_4__["DataResolveService"]
        },
        loadChildren: './pages/userService/serviceProviders/provided-details/provided-details.module#ProvidedDetailsPageModule'
      }, {
        path: 'medical-history/:id',
        resolve: {
          dataSharing: src_app_services_DataShare_data_resolve_service__WEBPACK_IMPORTED_MODULE_4__["DataResolveService"]
        },
        loadChildren: './pages/medical-history/medical-history.module#MedicalHistoryPageModule'
      }, {
        path: 'onlin-shopping',
        loadChildren: './pages/onlin-shopping/onlin-shopping.module#OnlinShoppingPageModule'
      }, {
        path: 'about-us',
        loadChildren: './pages/about-us/about-us.module#AboutUsPageModule'
      }]
    }, {
      path: '',
      redirectTo: '/tabs/tab3',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-tabs-module-es5.js.map