function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-test-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTestTestPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>test</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button>\n      {{ 'HELLO' | translate }}\n  </ion-button>\n\n  <ion-text color=\"primary\">\n    <h1> {{ 'HELLO' | translate }}</h1>\n  </ion-text>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/test/test.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/test/test.module.ts ***!
    \*******************************************/

  /*! exports provided: TestPageModule */

  /***/
  function srcAppPagesTestTestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestPageModule", function () {
      return TestPageModule;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _test_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./test.page */
    "./src/app/pages/test/test.page.ts");

    var routes = [{
      path: '',
      component: _test_page__WEBPACK_IMPORTED_MODULE_7__["TestPage"]
    }];

    var TestPageModule = function TestPageModule() {
      _classCallCheck(this, TestPageModule);
    };

    TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()],
      declarations: [_test_page__WEBPACK_IMPORTED_MODULE_7__["TestPage"]]
    })], TestPageModule);
    /***/
  },

  /***/
  "./src/app/pages/test/test.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/test/test.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTestTestPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QvdGVzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/test/test.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/test/test.page.ts ***!
    \*****************************************/

  /*! exports provided: TestPage */

  /***/
  function srcAppPagesTestTestPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestPage", function () {
      return TestPage;
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


    var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api/api.service */
    "./src/app/services/api/api.service.ts");
    /* harmony import */


    var src_app_services_MainMedical_main_medical_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/MainMedical/main-medical.service */
    "./src/app/services/MainMedical/main-medical.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var TestPage = /*#__PURE__*/function () {
      function TestPage(api, translate, mainMedicalService) {
        var _this = this;

        _classCallCheck(this, TestPage);

        this.api = api;
        this.translate = translate;
        this.mainMedicalService = mainMedicalService;
        this.urlPost = "http://localhost:22743/api/services/app/MainMedicalServices/GetAll";
        this.urlSmartPhonr = 'assets/data/smartFone.json';
        this.maind = [];

        this.getCallback = function (response) {
          _this.main = response;
          return _this.main;
        };

        this.translate.use('ar'); // this.translate.setDefaultLang('en');
        // this.translate.use('en');
      }

      _createClass(TestPage, [{
        key: "getSmartphones",
        value: function getSmartphones() {
          var _this2 = this;

          this.api.getSmartphone().subscribe(function (resp) {
            console.log(resp);
            var keys = resp.headers.keys();
            _this2.headers = keys.map(function (key) {
              return "".concat(key, ": ").concat(resp.headers.get(key));
            }); // for (const data of resp.body) {
            //   this.smartPhone.push(data);
            // }

            console.log(_this2.smartPhone);
            console.log(resp);
          });
        } // loadDate(ServiceType: number){
        //   this.api.getAllServiceProviders(ServiceType).subscribe(data => console.log(data))
        // }

      }, {
        key: "loadDate",
        value: function loadDate(serviceType, filter) {// this.mainMedicalService.getAllMainMedical(serviceType,filter).subscribe(data => 
          //   {
          //     let main ;
          //     main.forEach(element => {
          //       this.main = element.mainMedicalService
          //       console.log(this.main);
          //       console.log(element)
          //       this.maind.push(element.mainMedicalService)
          //     });
          //     console.log(this.maind);
          //   });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadDate(7, undefined);
          this.getSmartphones();
          this.translate.get('HELLO').subscribe(function (value) {
            // value is our translated string
            var alertTitle = value;
            console.log(alertTitle);
          });
          this.translate.get('LOL').subscribe(function (value) {
            // value is our translated string
            var alertTitle = value;
            console.log(alertTitle);
          });
        }
      }]);

      return TestPage;
    }();

    TestPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: src_app_services_MainMedical_main_medical_service__WEBPACK_IMPORTED_MODULE_3__["MainMedicalService"]
      }];
    };

    TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test.page.scss */
      "./src/app/pages/test/test.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], src_app_services_MainMedical_main_medical_service__WEBPACK_IMPORTED_MODULE_3__["MainMedicalService"]])], TestPage);
    /***/
  },

  /***/
  "./src/app/services/api/api.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/api/api.service.ts ***!
    \*********************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.urlSmartPhone = 'assets/data/smartFone.json';
      }

      _createClass(ApiService, [{
        key: "get",
        value: function get(url) {
          return this.http.get(url);
        }
      }, {
        key: "getSmartphone",
        value: function getSmartphone() {
          return this.http.get(this.urlSmartPhone, {
            observe: 'response'
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiService);
    /***/
  }
}]);
//# sourceMappingURL=pages-test-test-module-es5.js.map