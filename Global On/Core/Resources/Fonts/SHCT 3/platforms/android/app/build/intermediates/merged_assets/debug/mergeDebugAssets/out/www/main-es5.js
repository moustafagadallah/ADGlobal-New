function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./login-verification-code/login-verification-code.module": ["./src/app/login-verification-code/login-verification-code.module.ts", "login-verification-code-login-verification-code-module"],
      "./login/login.module": ["./src/app/login/login.module.ts", "common", "login-login-module"],
      "./menu/menu.module": ["./src/app/menu/menu.module.ts", "menu-menu-module"],
      "./pages/about-us/about-us.module": ["./src/app/pages/about-us/about-us.module.ts", "pages-about-us-about-us-module"],
      "./pages/get-in-touch/get-in-touch.module": ["./src/app/pages/get-in-touch/get-in-touch.module.ts", "pages-get-in-touch-get-in-touch-module"],
      "./pages/medical-history/medical-history.module": ["./src/app/pages/medical-history/medical-history.module.ts", "pages-medical-history-medical-history-module"],
      "./pages/onlin-shopping/onlin-shopping.module": ["./src/app/pages/onlin-shopping/onlin-shopping.module.ts", "default~Home-tab3-module~Profile-tab1-module~Request-tab4-module~pages-onlin-shopping-onlin-shopping~93d9100c", "pages-onlin-shopping-onlin-shopping-module"],
      "./pages/personal-informations/personal-informations.module": ["./src/app/pages/personal-informations/personal-informations.module.ts", "default~Home-tab3-module~Profile-tab1-module~Request-tab4-module~pages-onlin-shopping-onlin-shopping~93d9100c", "common", "pages-personal-informations-personal-informations-module"],
      "./pages/request-details/request-details.module": ["./src/app/pages/request-details/request-details.module.ts", "default~Home-tab3-module~Profile-tab1-module~Request-tab4-module~pages-onlin-shopping-onlin-shopping~93d9100c", "default~Request-tab4-module~pages-request-details-request-details-module", "common", "pages-request-details-request-details-module"],
      "./pages/test/test.module": ["./src/app/pages/test/test.module.ts", "common", "pages-test-test-module"],
      "./pages/userService/profile/profile.module": ["./src/app/pages/userService/profile/profile.module.ts", "pages-userService-profile-profile-module"],
      "./pages/userService/serviceProviders/provided-details/provided-details.module": ["./src/app/pages/userService/serviceProviders/provided-details/provided-details.module.ts", "default~Home-tab3-module~Profile-tab1-module~Request-tab4-module~pages-onlin-shopping-onlin-shopping~93d9100c", "common", "pages-userService-serviceProviders-provided-details-provided-details-module"],
      "./pages/userService/serviceProviders/provided-services/provided-services.module": ["./src/app/pages/userService/serviceProviders/provided-services/provided-services.module.ts", "default~Home-tab3-module~Profile-tab1-module~Request-tab4-module~pages-onlin-shopping-onlin-shopping~93d9100c", "pages-userService-serviceProviders-provided-services-provided-services-module"],
      "./pages/userService/serviceProviders/service-provider/service-provider.module": ["./src/app/pages/userService/serviceProviders/service-provider/service-provider.module.ts", "default~Home-tab3-module~Profile-tab1-module~Request-tab4-module~pages-onlin-shopping-onlin-shopping~93d9100c", "pages-userService-serviceProviders-service-provider-service-provider-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 1],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 2],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 3],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 4],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 5],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 6],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 7],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 8],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 9],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 10],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 11],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 0, "common", 12],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 0, "common", 13],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 14],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 15],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 16],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 17],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 18],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 19],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 20],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 21],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 22],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 23],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 24],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 25],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 26],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 27],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 28],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 29],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 30],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 31],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 32],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 33],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 34],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 35],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 36],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 37],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", 0, "common", 38],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", 0, "common", 39],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 40],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 41],
      "./ion-nav_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_4.entry.js", "common", 42],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 43],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 44],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 45],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 46],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 47],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 48],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 49],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 50],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 51],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 52],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 53],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 54],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 55],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 56],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 57],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 58],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 59],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 60],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 61],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 62],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", "common", 63],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", "common", 64],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 65],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 66],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 67],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 68],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 69],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 70],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 71],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 72],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 73],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 74],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 75],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 76],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 77],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 78]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane>\n    <ion-menu menuId=\"Menu\" side=\"end\" type=\"overlay\">\n      <ion-header>\n        <ion-toolbar>\n          <div class=\"menu-image\">\n            <img [src]=\"sideMenuImg\" alt=\"\">\n            <!-- <img *ngIf=\"!sideMenuImg\" src=\"assets\\imgs\\emp.jpg\" alt=\"\"> -->\n          </div>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n\n        <ion-list mode=\"ios\">\n          <ion-menu-toggle auto-hide=\"false\"  >\n            <ion-item *ngFor=\"let item of appMenu\" mode=\"md\" [routerDirection]='root' (click)=\"openPage(item)\">\n              <ion-icon slot=\"start\" [name]=\"item.icon\"></ion-icon>\n              <ion-label>{{item.title}}</ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"isLogin\" (click)=\"logOut()\">\n              <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\n              <ion-label>{{'Log out' | translate }}</ion-label>\n            </ion-item>\n            <ion-item *ngIf=\"!isLogin\" (click)=\"Login()\">\n              <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n              <ion-label>{{ 'SIGN_IN' | translate }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"Menu\" main></ion-router-outlet>\n  </ion-split-pane>\n\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lang-change/lang-change.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lang-change/lang-change.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLangChangeLangChangePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-select *ngIf=\"!isFromSideMenu\" interface=\"popover\" [(ngModel)]=\"language\" (ionChange)=\"changeLanguage(language)\" placeholder=\"{{'CHANGE_LANG' | translate}}\">\n  <ion-select-option value=\"en\" selected=\"true\">English</ion-select-option>\n  <ion-select-option value=\"ar\">عربي</ion-select-option>\n</ion-select>\n\n\n<ion-header *ngIf=\"isFromSideMenu\" translucent>\n  <ion-toolbar>\n    <ion-title>{{'CHANGE_LANG' | translate}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" (click)=\"dismiss()\">\n        close\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"isFromSideMenu\" fullscreen >\n  <ion-list >\n    <ion-item (click)=\"changeLanguage('en')\">\n      <ion-label>English</ion-label>\n    </ion-item>\n    <ion-item  (click)=\"changeLanguage('ar')\">\n      <ion-label>عربي</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _services_DataShare_data_resolve_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/DataShare/data-resolve.service */
    "./src/app/services/DataShare/data-resolve.service.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-tabs-module */
        "tabs-tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs/tabs.module */
        "./src/app/tabs/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'test',
      loadChildren: './pages/test/test.module#TestPageModule'
    }, {
      path: 'menu',
      loadChildren: './menu/menu.module#MenuPageModule'
    }, {
      path: 'getintouch',
      loadChildren: './pages/get-in-touch/get-in-touch.module#GetInTouchPageModule'
    }, {
      path: 'personal-informations/:id',
      resolve: {
        dataSharing: _services_DataShare_data_resolve_service__WEBPACK_IMPORTED_MODULE_3__["DataResolveService"]
      },
      loadChildren: './pages/personal-informations/personal-informations.module#PersonalInformationsPageModule'
    }, {
      path: 'medical-history',
      loadChildren: './pages/medical-history/medical-history.module#MedicalHistoryPageModule'
    }, {
      path: 'request-details',
      loadChildren: './pages/request-details/request-details.module#RequestDetailsPageModule'
    }, {
      path: 'service-provider',
      loadChildren: './pages/userService/serviceProviders/service-provider/service-provider.module#ServiceProviderPageModule'
    }, {
      path: 'provided-services',
      loadChildren: './pages/userService/serviceProviders/provided-services/provided-services.module#ProvidedServicesPageModule'
    }, {
      path: 'profile',
      loadChildren: './pages/userService/profile/profile.module#ProfilePageModule'
    }, {
      path: 'provided-details',
      loadChildren: './pages/userService/serviceProviders/provided-details/provided-details.module#ProvidedDetailsPageModule'
    }, {
      path: 'onlin-shopping',
      loadChildren: './pages/onlin-shopping/onlin-shopping.module#OnlinShoppingPageModule'
    }, {
      path: 'about-us',
      loadChildren: './pages/about-us/about-us.module#AboutUsPageModule'
    }, {
      path: 'login',
      loadChildren: './login/login.module#LoginPageModule'
    }, {
      path: 'login-verification-code/:id',
      resolve: {
        dataSharing: _services_DataShare_data_resolve_service__WEBPACK_IMPORTED_MODULE_3__["DataResolveService"]
      },
      loadChildren: './login-verification-code/login-verification-code.module#LoginVerificationCodePageModule'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  border-radius: 50%;\n  border: powderblue;\n  border-width: medium;\n  border-style: solid;\n  height: 100px;\n  width: 100px; }\n\n.menu-image {\n  margin-top: 12px;\n  margin-bottom: -80px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 110px;\n  height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHdvcmtcXHByb2plY3RcXFNIQ1Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiBwb3dkZXJibHVlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLm1lbnUtaW1hZ2V7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTgwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbi8vIC5pbWdzeyBcclxuLy8gfVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/loading/loading.service */
    "./src/app/services/loading/loading.service.ts");
    /* harmony import */


    var _enums_filesPath__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./enums/filesPath */
    "./src/app/enums/filesPath.ts");
    /* harmony import */


    var _services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/TempDataDistributor/TempDataDistributor */
    "./src/app/services/TempDataDistributor/TempDataDistributor.ts");
    /* harmony import */


    var _services_login_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/login/login */
    "./src/app/services/login/login.ts");
    /* harmony import */


    var _enums_pageName__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./enums/pageName */
    "./src/app/enums/pageName.ts");
    /* harmony import */


    var _components_lang_change_lang_change_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/lang-change/lang-change.page */
    "./src/app/components/lang-change/lang-change.page.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, _translate, storage, router, _loading, _temDataDistributor, _login, document, langChange) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this._translate = _translate;
        this.storage = storage;
        this.router = router;
        this._loading = _loading;
        this._temDataDistributor = _temDataDistributor;
        this._login = _login;
        this.document = document;
        this.langChange = langChange;
        this.appMenu = [{
          title: 'Request',
          url: '/tabs/tab4',
          pageName: _enums_pageName__WEBPACK_IMPORTED_MODULE_13__["pageName"].REQUEST,
          icon: 'basket'
        }, {
          title: 'Profile',
          url: '/tabs/tab1',
          pageName: _enums_pageName__WEBPACK_IMPORTED_MODULE_13__["pageName"].PROFILE,
          icon: 'person'
        }, {
          title: 'Chat with us',
          url: '/tabs/chat',
          pageName: _enums_pageName__WEBPACK_IMPORTED_MODULE_13__["pageName"].CHAT,
          icon: 'chatboxes'
        }, {
          title: 'Get in touch',
          url: '/tabs/getintouch',
          pageName: _enums_pageName__WEBPACK_IMPORTED_MODULE_13__["pageName"].GETINTOUCH,
          icon: 'list'
        }, {
          title: 'About',
          url: '/tabs/about-us',
          pageName: _enums_pageName__WEBPACK_IMPORTED_MODULE_13__["pageName"].ABOUT,
          icon: 'information-circle'
        }, {
          title: 'Lang Change',
          url: 'langChange',
          pageName: 'lang-change',
          icon: 'globe'
        }];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.authState().then(function (data) {
            console.log(data);

            _this._temDataDistributor.authState.subscribe(function (isAuth) {
              console.log(isAuth);
              _this.isLogin = isAuth;
            });
          });
          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this._initTranslate();

            _this.splashScreen.hide();
          });
        }
      }, {
        key: "_initTranslate",
        value: function _initTranslate() {
          var _this2 = this;

          this._temDataDistributor.profileStoredImage.subscribe(function (sideMenuImg) {
            _this2.sideMenuImg = sideMenuImg;
          });

          this.sideMenuImg = window.localStorage.getItem("imgURL") ? window.localStorage.getItem("imgURL") : _enums_filesPath__WEBPACK_IMPORTED_MODULE_10__["filesPath"].DEFAULT_PROFILE_IMAGE_URL; // Set the default language for translation strings, and the current language.

          console.log(window.localStorage.getItem('lang'));

          if (window.localStorage.getItem('lang')) {
            var default_Lang = window.localStorage.getItem('lang');

            this._translate.use(default_Lang);

            if (window.localStorage.getItem('lang') == 'ar') this.document.documentElement.dir = 'rtl';else this.document.documentElement.dir = 'ltr';
            console.log(window.localStorage.getItem('lang'));
          } else {
            this._translate.use('ar');

            console.log(this._translate.currentLang);
            window.localStorage.setItem('lang', this._translate.currentLang);
            if (this.platform.isRTL) this.document.documentElement.dir = 'ltr';
          }

          if (window.localStorage.getItem('lang') == 'ar') {
            this.appMenu[0].title = 'طلباتي';
            this.appMenu[1].title = 'حسابي';
            this.appMenu[2].title = 'تحدث معنا';
            this.appMenu[3].title = 'ابقنا على تواصل معك';
            this.appMenu[4].title = 'من نحن';
            this.appMenu[5].title = 'تغير اللغة'; // this.appMenu[5].title = 'الاعدادات';
            // this.appMenu[5].title = 'الخروج من التطبيق';
          } // this.accessToken = window.localStorage.getItem('accessToken');
          // console.log(this.accessToken)
          // if (!this.accessToken || this.accessToken == null) {
          //   this.appMenu[0].url = '/login';
          //   this.appMenu[1].url = '/login';
          //   this.appMenu[2].url = '/login';
          // }
          //  if(window.localStorage.getItem('accessToken')){


          this.router.navigateByUrl('tabs/tab3'); //  }else
          //  this.router.navigateByUrl('login')
          //  if (this._translate.getBrowserLang() !== undefined) 
          //  {
          //      this._translate.use(this._translate.getBrowserLang());
          //  } 
          //  else 
          //  {
          //      this._translate.use('ar'); // Set your language here
          //  }
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this._loading.present();

          window.localStorage.clear();

          this._translate.use('ar');

          window.localStorage.setItem('lang', 'ar');

          this._loading.dismiss();

          this.splashScreen.show();
          window.location.reload(); // setTimeout(() => {
          //   this.router.navigateByUrl('login')
          // }, 1500);
        }
      }, {
        key: "Login",
        value: function Login() {
          this.router.navigateByUrl('login');
        }
      }, {
        key: "authState",
        value: function authState() {
          var _this3 = this;

          var promise = new Promise(function (resolve, reject) {
            _this3._login.GetCheckAuthorization().subscribe(function (authState) {
              console.log(authState);

              _this3._temDataDistributor.authState.next(true);

              resolve(true);
            }, function (err) {
              console.log(err);

              _this3._temDataDistributor.authState.next(false);

              reject(false);
            });
          });
          return promise;
        }
      }, {
        key: "openPage",
        value: function openPage(pages) {
          var _this4 = this;

          this._temDataDistributor.authState.subscribe(function (isAuth) {
            console.log(isAuth);
            _this4.isLogin = isAuth;
          });

          console.log(pages);
          var page;

          switch (pages.pageName) {
            case _enums_pageName__WEBPACK_IMPORTED_MODULE_13__["pageName"].REQUEST:
              {
                page = !this.isLogin ? 'login' : '/tabs/tab4';
                this.router.navigateByUrl(page);
              }
              break;

            case _enums_pageName__WEBPACK_IMPORTED_MODULE_13__["pageName"].PROFILE:
              {
                page = !this.isLogin ? 'login' : '/tabs/tab1';
                this.router.navigateByUrl(page);
              }
              break;

            case _enums_pageName__WEBPACK_IMPORTED_MODULE_13__["pageName"].CHAT:
              {
                page = !this.isLogin ? 'login' : '/tabs/chat';
                this.router.navigateByUrl(page);
              }

            case _enums_pageName__WEBPACK_IMPORTED_MODULE_13__["pageName"].GETINTOUCH:
              {
                page = !this.isLogin ? 'login' : '/tabs/getintouch';
                this.router.navigateByUrl(page);
              }
              break;

            case _enums_pageName__WEBPACK_IMPORTED_MODULE_13__["pageName"].ABOUT:
              {
                this.router.navigateByUrl('/tabs/about-us');
              }
              break;

            case 'lang-change':
              {
                this.langChangeModal();
              }
              break;

            default:
              break;
          }
        }
      }, {
        key: "langChangeModal",
        value: function langChangeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.langChange.create({
                      component: _components_lang_change_lang_change_page__WEBPACK_IMPORTED_MODULE_14__["LangChangeComponent"],
                      componentProps: {
                        isFromSideMenu: true
                      },
                      cssClass: 'lang-change'
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]
      }, {
        type: _services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_11__["TempDataDistributorService"]
      }, {
        type: _services_login_login__WEBPACK_IMPORTED_MODULE_12__["LoginService"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"], _services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_11__["TempDataDistributorService"], _services_login_login__WEBPACK_IMPORTED_MODULE_12__["LoginService"], Document, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/dist/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var primeng_primeng__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/primeng */
    "./node_modules/primeng/primeng.js");
    /* harmony import */


    var primeng_primeng__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/ngx/index.js");
    /* harmony import */


    var _interceptor_Index_interceptor_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./interceptor/Index/interceptor.index */
    "./src/app/interceptor/Index/interceptor.index.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _components_lang_change_lang_change_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/lang-change/lang-change.module */
    "./src/app/components/lang-change/lang-change.module.ts"); // Import ionic-rating module


    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, "assets/i18n/", ".json");
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [primeng_primeng__WEBPACK_IMPORTED_MODULE_15__["FileUploadModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_12__["IonicRatingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_16__["IonicStorageModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
        }
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _components_lang_change_lang_change_module__WEBPACK_IMPORTED_MODULE_21__["LangChangePageModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_18__["ImagePicker"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__["Geolocation"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__["Camera"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, _interceptor_Index_interceptor_index__WEBPACK_IMPORTED_MODULE_19__["httpInterCeptorProviders"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/lang-change/lang-change.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/lang-change/lang-change.module.ts ***!
    \**************************************************************/

  /*! exports provided: LangChangePageModule */

  /***/
  function srcAppComponentsLangChangeLangChangeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LangChangePageModule", function () {
      return LangChangePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _lang_change_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lang-change.page */
    "./src/app/components/lang-change/lang-change.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var LangChangePageModule = function LangChangePageModule() {
      _classCallCheck(this, LangChangePageModule);
    };

    LangChangePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild()],
      declarations: [_lang_change_page__WEBPACK_IMPORTED_MODULE_5__["LangChangeComponent"]],
      exports: [_lang_change_page__WEBPACK_IMPORTED_MODULE_5__["LangChangeComponent"]],
      bootstrap: [_lang_change_page__WEBPACK_IMPORTED_MODULE_5__["LangChangeComponent"]]
    })], LangChangePageModule);
    /***/
  },

  /***/
  "./src/app/components/lang-change/lang-change.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/components/lang-change/lang-change.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLangChangeLangChangePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-select {\n  background: #c0e2fd;\n  border-radius: 5px;\n  color: black;\n  font-weight: bold;\n  font-size: 15px;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto; }\n\nion-list {\n  background: var(--content-color); }\n\nion-item {\n  text-align: center; }\n\nion-title {\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5nLWNoYW5nZS9EOlxcd29ya1xccHJvamVjdFxcU0hDVC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGFuZy1jaGFuZ2VcXGxhbmctY2hhbmdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFbEI7RUFDSSxnQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmctY2hhbmdlL2xhbmctY2hhbmdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb250ZW50LWNvbG9yOiNjMGUyZmQ7XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNjMGUyZmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcclxuICAgIH1cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/lang-change/lang-change.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/lang-change/lang-change.page.ts ***!
    \************************************************************/

  /*! exports provided: LangChangeComponent */

  /***/
  function srcAppComponentsLangChangeLangChangePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LangChangeComponent", function () {
      return LangChangeComponent;
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


    var src_app_services_Settings_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/Settings/Settings */
    "./src/app/services/Settings/Settings.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/TempDataDistributor/TempDataDistributor */
    "./src/app/services/TempDataDistributor/TempDataDistributor.ts");

    var LangChangeComponent = /*#__PURE__*/function () {
      function LangChangeComponent(_setting, _translate, splashScreen, document, platform, modalController, _tempData) {
        _classCallCheck(this, LangChangeComponent);

        this._setting = _setting;
        this._translate = _translate;
        this.splashScreen = splashScreen;
        this.document = document;
        this.platform = platform;
        this.modalController = modalController;
        this._tempData = _tempData;
        this.onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFromSideMenu = false;
        this.isAuthenticated = false;
      }

      _createClass(LangChangeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this._tempData.authState.subscribe(function (isAuthenticated) {
            _this5.isAuthenticated = isAuthenticated;
          });

          console.log("isAuthenticated : ", this.isAuthenticated);
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(language) {
          //TODO ::  CAll Change Language from Server  
          // and all the below will be on subscrip on this funcion 
          // this._setting.getChangeLanguage(language).subscribe(data =>{
          //   console.log(data)
          //   this._translate.use(language);
          //   window.localStorage.setItem('lang',language);
          //   this.splashScreen.show();
          //   window.location.reload();
          //   console.log(language)
          //   setTimeout(() => {
          //     if(this.platform.isRTL)
          //     this.document.documentElement.dir = "ltr"
          //     else
          //     this.document.documentElement.dir = "rtl"
          //   }, 5000);
          // })
          window.localStorage.setItem('lang', language);
          this.splashScreen.show();
          window.location.reload();
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalController.dismiss({
            'dismissed': true
          });
        }
      }]);

      return LangChangeComponent;
    }();

    LangChangeComponent.ctorParameters = function () {
      return [{
        type: src_app_services_Settings_Settings__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_7__["TempDataDistributorService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], LangChangeComponent.prototype, "onLangChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], LangChangeComponent.prototype, "isFromSideMenu", void 0);
    LangChangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'lang-change',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lang-change.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/lang-change/lang-change.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lang-change.page.scss */
      "./src/app/components/lang-change/lang-change.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Settings_Settings__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], Document, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], src_app_services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_7__["TempDataDistributorService"]])], LangChangeComponent);
    /***/
  },

  /***/
  "./src/app/enums/baseUrl.ts":
  /*!**********************************!*\
    !*** ./src/app/enums/baseUrl.ts ***!
    \**********************************/

  /*! exports provided: BaseUrl */

  /***/
  function srcAppEnumsBaseUrlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseUrl", function () {
      return BaseUrl;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var BaseUrl;

    (function (BaseUrl) {
      // baseUrl= 'http://localhost:22743'
      BaseUrl["baseUrl"] = "http://shc.saudishct.com"; //baseUrl='https://192.168.1.4:9001'
      //baseUrl=' http://mobil.shct.com'
      //baseUrl='https://192.168.1.104'
    })(BaseUrl || (BaseUrl = {}));
    /***/

  },

  /***/
  "./src/app/enums/filesPath.ts":
  /*!************************************!*\
    !*** ./src/app/enums/filesPath.ts ***!
    \************************************/

  /*! exports provided: filesPath */

  /***/
  function srcAppEnumsFilesPathTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "filesPath", function () {
      return filesPath;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var filesPath;

    (function (filesPath) {
      filesPath["DEFAULT_PROFILE_IMAGE_URL"] = "assets/imgs/takeImage.png";
      filesPath["spinnerGigt"] = "assets/spinner/spinner.gif";
    })(filesPath || (filesPath = {}));
    /***/

  },

  /***/
  "./src/app/enums/pageName.ts":
  /*!***********************************!*\
    !*** ./src/app/enums/pageName.ts ***!
    \***********************************/

  /*! exports provided: pageName */

  /***/
  function srcAppEnumsPageNameTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pageName", function () {
      return pageName;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var pageName;

    (function (pageName) {
      pageName[pageName["ONLIN_SHOPPING_PAGE"] = 1] = "ONLIN_SHOPPING_PAGE";
      pageName[pageName["PROVIDED_SERVICES_PAGE"] = 2] = "PROVIDED_SERVICES_PAGE";
      pageName[pageName["OFFERS"] = 3] = "OFFERS";
      pageName[pageName["REQUEST"] = 4] = "REQUEST";
      pageName[pageName["CHAT"] = 5] = "CHAT";
      pageName[pageName["GETINTOUCH"] = 6] = "GETINTOUCH";
      pageName[pageName["PROFILE"] = 7] = "PROFILE";
      pageName[pageName["ABOUT"] = 8] = "ABOUT";
      pageName[pageName["SERVICEPROVIDER"] = 9] = "SERVICEPROVIDER";
      pageName[pageName["PROVIDEDSERVICES"] = 10] = "PROVIDEDSERVICES";
    })(pageName || (pageName = {}));
    /***/

  },

  /***/
  "./src/app/interceptor/Index/interceptor.index.ts":
  /*!********************************************************!*\
    !*** ./src/app/interceptor/Index/interceptor.index.ts ***!
    \********************************************************/

  /*! exports provided: httpInterCeptorProviders */

  /***/
  function srcAppInterceptorIndexInterceptorIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "httpInterCeptorProviders", function () {
      return httpInterCeptorProviders;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../interceptor.service */
    "./src/app/interceptor/interceptor.service.ts");
    /* harmony import */


    var _header_incepter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../header.incepter */
    "./src/app/interceptor/header.incepter.ts");

    var httpInterCeptorProviders = [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: _interceptor_service__WEBPACK_IMPORTED_MODULE_2__["httpRequestInterceptor"],
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: _header_incepter__WEBPACK_IMPORTED_MODULE_3__["HeaderInterceptor"],
      multi: true
    }];
    /***/
  },

  /***/
  "./src/app/interceptor/header.incepter.ts":
  /*!************************************************!*\
    !*** ./src/app/interceptor/header.incepter.ts ***!
    \************************************************/

  /*! exports provided: HeaderInterceptor */

  /***/
  function srcAppInterceptorHeaderIncepterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderInterceptor", function () {
      return HeaderInterceptor;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/TempDataDistributor/TempDataDistributor */
    "./src/app/services/TempDataDistributor/TempDataDistributor.ts");
    /* harmony import */


    var _services_login_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/login/login */
    "./src/app/services/login/login.ts");

    var HeaderInterceptor = /*#__PURE__*/function () {
      function HeaderInterceptor(router, _tempData, _login) {
        _classCallCheck(this, HeaderInterceptor);

        this.router = router;
        this._tempData = _tempData;
        this._login = _login;
      }
      /**
      * Intercept all HTTP request to add JWT token to Headers
      * @param {HttpRequest<any>} request
      * @param {HttpHandler} next
      * @returns {Observable<HttpEvent<any>>}
      * @memberof TokenInterceptor
      */


      _createClass(HeaderInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var token = window.localStorage.getItem('accessToken');
          console.log('==> APi Config with Token : ' + token);
          var headers_object = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", "bearer " + token);
          request = request.clone({
            headers: headers_object
          });
          return next.handle(request);
        }
      }]);

      return HeaderInterceptor;
    }();

    HeaderInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_4__["TempDataDistributorService"]
      }, {
        type: _services_login_login__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
      }];
    };

    HeaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_4__["TempDataDistributorService"], _services_login_login__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])], HeaderInterceptor);
    /***/
  },

  /***/
  "./src/app/interceptor/interceptor.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/interceptor/interceptor.service.ts ***!
    \****************************************************/

  /*! exports provided: httpRequestInterceptor */

  /***/
  function srcAppInterceptorInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "httpRequestInterceptor", function () {
      return httpRequestInterceptor;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/TempDataDistributor/TempDataDistributor */
    "./src/app/services/TempDataDistributor/TempDataDistributor.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var httpRequestInterceptor = /*#__PURE__*/function () {
      function httpRequestInterceptor(router, _tempData, toastController) {
        _classCallCheck(this, httpRequestInterceptor);

        this.router = router;
        this._tempData = _tempData;
        this.toastController = toastController;
      }

      _createClass(httpRequestInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this6 = this;

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) _this6._tempData.authState.next(false); // this.router.events.subscribe((event) => {
            //   console.log(event);
            //   if (event instanceof NavigationEnd ) {
            //    console.log(event.url)
            //   }
            // });
            // this.presentToast();

            console.log("httpRequestInterceptor");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: 'لقد انتهت فترة دخولك ',
                      closeButtonText: 'اغلاق',
                      cssClass: "errToast",
                      showCloseButton: true
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return httpRequestInterceptor;
    }();

    httpRequestInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_5__["TempDataDistributorService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }];
    };

    httpRequestInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_TempDataDistributor_TempDataDistributor__WEBPACK_IMPORTED_MODULE_5__["TempDataDistributorService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])], httpRequestInterceptor);
    /***/
  },

  /***/
  "./src/app/services/DataShare/data-resolve.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/services/DataShare/data-resolve.service.ts ***!
    \************************************************************/

  /*! exports provided: DataResolveService */

  /***/
  function srcAppServicesDataShareDataResolveServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataResolveService", function () {
      return DataResolveService;
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


    var _data_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data-share.service */
    "./src/app/services/DataShare/data-share.service.ts");

    var DataResolveService = /*#__PURE__*/function () {
      function DataResolveService(dataService) {
        _classCallCheck(this, DataResolveService);

        this.dataService = dataService;
      }

      _createClass(DataResolveService, [{
        key: "resolve",
        value: function resolve(route) {
          var id = route.paramMap.get('id');
          return this.dataService.getData(id);
        }
      }]);

      return DataResolveService;
    }();

    DataResolveService.ctorParameters = function () {
      return [{
        type: _data_share_service__WEBPACK_IMPORTED_MODULE_2__["DataShareService"]
      }];
    };

    DataResolveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_share_service__WEBPACK_IMPORTED_MODULE_2__["DataShareService"]])], DataResolveService);
    /***/
  },

  /***/
  "./src/app/services/DataShare/data-share.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/DataShare/data-share.service.ts ***!
    \**********************************************************/

  /*! exports provided: DataShareService */

  /***/
  function srcAppServicesDataShareDataShareServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataShareService", function () {
      return DataShareService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DataShareService = /*#__PURE__*/function () {
      function DataShareService() {
        _classCallCheck(this, DataShareService);

        this.data = [];
      }

      _createClass(DataShareService, [{
        key: "setData",
        value: function setData(id, data) {
          this.data[id] = data;
        }
      }, {
        key: "getData",
        value: function getData(id) {
          return this.data[id];
        }
      }]);

      return DataShareService;
    }();

    DataShareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DataShareService);
    /***/
  },

  /***/
  "./src/app/services/Settings/Settings.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/Settings/Settings.ts ***!
    \***********************************************/

  /*! exports provided: ChangeUserLanguageDto, EvaluateModle, SettingsService */

  /***/
  function srcAppServicesSettingsSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeUserLanguageDto", function () {
      return ChangeUserLanguageDto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EvaluateModle", function () {
      return EvaluateModle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
      return SettingsService;
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

    var ChangeUserLanguageDto = function ChangeUserLanguageDto() {
      _classCallCheck(this, ChangeUserLanguageDto);
    };

    var EvaluateModle = function EvaluateModle() {
      _classCallCheck(this, EvaluateModle);
    };

    var SettingsService = /*#__PURE__*/function () {
      function SettingsService(http) {
        _classCallCheck(this, SettingsService);

        this.http = http;
        this.isLoading = false;
      }
      /**
      * @return Success
      */


      _createClass(SettingsService, [{
        key: "getAllSettings",
        value: function getAllSettings() {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/HostSettings/GetAllSettings";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }, {
        key: "GetCurrentUserProfileForEdit",
        value: function GetCurrentUserProfileForEdit() {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Profile/GetCurrentUserProfileForEdit";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }, {
        key: "getChangeLanguage",
        value: function getChangeLanguage(langType) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Profile/ChangeLanguage";
          var input = new ChangeUserLanguageDto();
          input.languageName = langType;
          url_ = url_.replace(/[?&]$/, "");
          return this.http.post(url_, input);
        }
      }, {
        key: "evaluateRequest",
        value: function evaluateRequest(evaluateModle) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Request/EvaluateRequest";
          var input = new EvaluateModle();
          input.evaluation = evaluateModle.evaluation;
          input.evaluationComment = evaluateModle.evaluationComment;
          input.requestId = evaluateModle.requestId;
          url_ = url_.replace(/[?&]$/, "");
          return this.http.post(url_, input);
        }
      }, {
        key: "getCurrentUserLanguage",
        value: function getCurrentUserLanguage() {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Account/GetCurrentUserLanguage";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }]);

      return SettingsService;
    }();

    SettingsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], SettingsService);
    /***/
  },

  /***/
  "./src/app/services/TempDataDistributor/TempDataDistributor.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/services/TempDataDistributor/TempDataDistributor.ts ***!
    \*********************************************************************/

  /*! exports provided: TempDataDistributorService */

  /***/
  function srcAppServicesTempDataDistributorTempDataDistributorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TempDataDistributorService", function () {
      return TempDataDistributorService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_enums_filesPath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/enums/filesPath */
    "./src/app/enums/filesPath.ts");

    var TempDataDistributorService = /*#__PURE__*/function () {
      function TempDataDistributorService() {
        _classCallCheck(this, TempDataDistributorService);

        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.getStoredImage();
        this.profileStoredImage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.imgURL);
      }

      _createClass(TempDataDistributorService, [{
        key: "getStoredImage",
        value: function getStoredImage() {
          if (this.imgURL) {
            window.localStorage.setItem("imgURL", this.imgURL);
            return this.imgURL;
          } else return src_app_enums_filesPath__WEBPACK_IMPORTED_MODULE_3__["filesPath"].DEFAULT_PROFILE_IMAGE_URL;
        }
      }, {
        key: "newImage",
        value: function newImage(imgURL) {
          this.profileStoredImage.next(imgURL);
          window.localStorage.setItem("imgURL", imgURL);
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authState.value;
        }
      }]);

      return TempDataDistributorService;
    }();

    TempDataDistributorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TempDataDistributorService);
    /***/
  },

  /***/
  "./src/app/services/loading/loading.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/loading/loading.service.ts ***!
    \*****************************************************/

  /*! exports provided: LoadingService */

  /***/
  function srcAppServicesLoadingLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
      return LoadingService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var LoadingService = /*#__PURE__*/function () {
      function LoadingService(loadingController) {
        _classCallCheck(this, LoadingService);

        this.loadingController = loadingController;
        this.isLoading = false;
      }

      _createClass(LoadingService, [{
        key: "present",
        value: function present() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.isLoading = true;
                    _context3.next = 3;
                    return this.loadingController.create({}).then(function (a) {
                      a.present().then(function () {
                        console.log('presented');

                        if (!_this7.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context3.abrupt("return", _context3.sent);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.isLoading = false;
                    _context4.next = 3;
                    return this.loadingController.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context4.abrupt("return", _context4.sent);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return LoadingService;
    }();

    LoadingService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], LoadingService);
    /***/
  },

  /***/
  "./src/app/services/login/login.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/login/login.ts ***!
    \*****************************************/

  /*! exports provided: MobileRegisterInput, MobileLoginOrRegisterOutput, LoginService */

  /***/
  function srcAppServicesLoginLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileRegisterInput", function () {
      return MobileRegisterInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileLoginOrRegisterOutput", function () {
      return MobileLoginOrRegisterOutput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
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

    var MobileRegisterInput = function MobileRegisterInput(user) {
      _classCallCheck(this, MobileRegisterInput);

      this.name = user.name;
      this.surname = user.surname;
      this.userName = user.userName;
      this.emailAddress = user.emailAddress;
      this.phoneNumber = user.phoneNumber;
    };

    var MobileLoginOrRegisterOutput = function MobileLoginOrRegisterOutput(result) {
      _classCallCheck(this, MobileLoginOrRegisterOutput);

      this.status = result.status;
      this.errorCode = result.errorCode;
      this.verificationCode = result.verificationCode;
    };

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
      }

      _createClass(LoginService, [{
        key: "loginWithNationalIdAndMobile",
        value: function loginWithNationalIdAndMobile(mobileLoginInput) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Account/LoginWithNationalIdAndMobile";
          return this.http.post(url_, mobileLoginInput);
        }
        /**
        * @param model (optional)
        * @return Success
        */

      }, {
        key: "authenticate",
        value: function authenticate(model) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/TokenAuth/Authenticate";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.post(url_, model);
        }
      }, {
        key: "registerMobileUser",
        value: function registerMobileUser(model) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Account/RegisterMobileUser";
          return this.http.post(url_, model);
        }
      }, {
        key: "GetCheckAuthorization",
        value: function GetCheckAuthorization() {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Account/GetCheckAuthorization";
          return this.http.get(url_);
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LoginService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\work\project\SHCT\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map