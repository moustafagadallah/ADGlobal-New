function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-split-pane>\n  \n    <ion-menu menuId=\"Menu\" side=\"end\" type=\"overlay\" mode=\"ios\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content>\n\n          <div class=\"menu-image\">\n              <img src=\"assets\\imgs\\emp.jpg\" alt=\"\">\n          </div>\n\n        <ion-list mode=\"ios\">\n            <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let item of appMenu\">\n              <ion-item [routerDirection]='root' [routerLink]=\"item.url\"  lines=\"none\">\n                <ion-label  >{{item.title}}</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n        </ion-list>\n        \n        Awesome avocado content\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"Menu\" main></ion-router-outlet>\n  </ion-split-pane>\n  -->";
    /***/
  },

  /***/
  "./src/app/menu/menu.module.ts":
  /*!*************************************!*\
    !*** ./src/app/menu/menu.module.ts ***!
    \*************************************/

  /*! exports provided: MenuPageModule */

  /***/
  function srcAppMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageModule", function () {
      return MenuPageModule;
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


    var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/menu/menu.page.ts");

    var routes = [{
      path: '',
      component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
      children: [{
        path: 'about-us',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-about-us-about-us-module */
            "pages-about-us-about-us-module").then(__webpack_require__.bind(null,
            /*! ../pages/about-us/about-us.module */
            "./src/app/pages/about-us/about-us.module.ts")).then(function (m) {
              return m.AboutUsPageModule;
            });
          }
        }]
      }, {
        path: 'tabs',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | tabs-tabs-tabs-module */
            "tabs-tabs-tabs-module").then(__webpack_require__.bind(null,
            /*! ../tabs/tabs/tabs.module */
            "./src/app/tabs/tabs/tabs.module.ts")).then(function (m) {
              return m.TabsPageModule;
            });
          }
        }]
      }]
    }];

    var MenuPageModule = function MenuPageModule() {
      _classCallCheck(this, MenuPageModule);
    };

    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })], MenuPageModule);
    /***/
  },

  /***/
  "./src/app/menu/menu.page.scss":
  /*!*************************************!*\
    !*** ./src/app/menu/menu.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu-image {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9EOlxcd29ya1xccHJvamVjdFxcU0hDVC9zcmNcXGFwcFxcbWVudVxcbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxnQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWltYWdle1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/menu/menu.page.ts":
  /*!***********************************!*\
    !*** ./src/app/menu/menu.page.ts ***!
    \***********************************/

  /*! exports provided: MenuPage */

  /***/
  function srcAppMenuMenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPage", function () {
      return MenuPage;
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

    var MenuPage = /*#__PURE__*/function () {
      function MenuPage(router) {
        var _this = this;

        _classCallCheck(this, MenuPage);

        this.router = router;
        this.selectPatch = '';
        this.appMenu = [{
          title: 'tes1',
          url: '/menu/about-us',
          icon: 'list'
        }, {
          title: 'tes2',
          url: '/menu/tabs',
          icon: 'list'
        }, {
          title: 'tes3',
          url: '/test2',
          icon: 'list'
        }];
        this.router.events.subscribe(function (event) {
          if (event && event.url) {
            _this.selectPatch = event.url;
          }
        });
      }

      _createClass(MenuPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuPage;
    }();

    MenuPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.page.scss */
      "./src/app/menu/menu.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], MenuPage);
    /***/
  }
}]);
//# sourceMappingURL=menu-menu-module-es5.js.map