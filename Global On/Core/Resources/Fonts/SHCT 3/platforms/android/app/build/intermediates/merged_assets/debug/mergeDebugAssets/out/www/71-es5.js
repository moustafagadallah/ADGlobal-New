function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-text.entry.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-text.entry.js ***!
    \*************************************************************/

  /*! exports provided: ion_text */

  /***/
  function node_modulesIonicCoreDistEsmIonTextEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_text", function () {
      return Text;
    });
    /* harmony import */


    var _chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chunk-84f6bf13.js */
    "./node_modules/@ionic/core/dist/esm/chunk-84f6bf13.js");
    /* harmony import */


    var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chunk-1074393c.js */
    "./node_modules/@ionic/core/dist/esm/chunk-1074393c.js");
    /* harmony import */


    var _chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chunk-ba834eff.js */
    "./node_modules/@ionic/core/dist/esm/chunk-ba834eff.js");
    /**
     * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
     */


    var Text = /*#__PURE__*/function () {
      function Text(hostRef) {
        _classCallCheck(this, Text);

        Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(Text, [{
        key: "hostData",
        value: function hostData() {
          var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          return {
            "class": Object.assign({}, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), _defineProperty({}, mode, true))
          };
        }
      }, {
        key: "__stencil_render",
        value: function __stencil_render() {
          return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render());
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host(.ion-color){color:var(--ion-color-base)}";
        }
      }]);

      return Text;
    }();
    /***/

  }
}]);
//# sourceMappingURL=71-es5.js.map