function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js ***!
    \************************************************************************/

  /*! exports provided: ion_action_sheet */

  /***/
  function node_modulesIonicCoreDistEsmIonActionSheetMdEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_action_sheet", function () {
      return ActionSheet;
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


    var _chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chunk-d83bfeae.js */
    "./node_modules/@ionic/core/dist/esm/chunk-d83bfeae.js");
    /* harmony import */


    var _chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chunk-ba834eff.js */
    "./node_modules/@ionic/core/dist/esm/chunk-ba834eff.js");
    /**
     * iOS Action Sheet Enter Animation
     */


    var iosEnterAnimation = function iosEnterAnimation(AnimationC, baseEl) {
      var baseAnimation = new AnimationC();
      var backdropAnimation = new AnimationC();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
      var wrapperAnimation = new AnimationC();
      wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
      backdropAnimation.fromTo('opacity', 0.01, 0.4);
      wrapperAnimation.fromTo('translateY', '100%', '0%');
      var ani = baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).add(backdropAnimation).add(wrapperAnimation);
      return Promise.resolve(ani);
    };
    /**
     * iOS Action Sheet Leave Animation
     */


    var iosLeaveAnimation = function iosLeaveAnimation(AnimationC, baseEl) {
      var baseAnimation = new AnimationC();
      var backdropAnimation = new AnimationC();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
      var wrapperAnimation = new AnimationC();
      wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
      backdropAnimation.fromTo('opacity', 0.4, 0);
      wrapperAnimation.fromTo('translateY', '0%', '100%');
      var ani = baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(450).add(backdropAnimation).add(wrapperAnimation);
      return Promise.resolve(ani);
    };
    /**
     * MD Action Sheet Enter Animation
     */


    var mdEnterAnimation = function mdEnterAnimation(AnimationC, baseEl) {
      var baseAnimation = new AnimationC();
      var backdropAnimation = new AnimationC();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
      var wrapperAnimation = new AnimationC();
      wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
      backdropAnimation.fromTo('opacity', 0.01, 0.32);
      wrapperAnimation.fromTo('translateY', '100%', '0%');
      var ani = baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).add(backdropAnimation).add(wrapperAnimation);
      return Promise.resolve(ani);
    };
    /**
     * MD Action Sheet Leave Animation
     */


    var mdLeaveAnimation = function mdLeaveAnimation(AnimationC, baseEl) {
      var baseAnimation = new AnimationC();
      var backdropAnimation = new AnimationC();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
      var wrapperAnimation = new AnimationC();
      wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
      backdropAnimation.fromTo('opacity', 0.32, 0);
      wrapperAnimation.fromTo('translateY', '0%', '100%');
      var ani = baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(450).add(backdropAnimation).add(wrapperAnimation);
      return Promise.resolve(ani);
    };
    /**
     * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
     */


    var ActionSheet = /*#__PURE__*/function () {
      function ActionSheet(hostRef) {
        _classCallCheck(this, ActionSheet);

        Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.presented = false;
        this.mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */

        this.keyboardClose = true;
        /**
         * An array of buttons for the action sheet.
         */

        this.buttons = [];
        /**
         * If `true`, the action sheet will be dismissed when the backdrop is clicked.
         */

        this.backdropDismiss = true;
        /**
         * If `true`, the action sheet will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */

        this.translucent = false;
        /**
         * If `true`, the action sheet will animate.
         */

        this.animated = true;
        this.didPresent = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionActionSheetDidPresent", 7);
        this.willPresent = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionActionSheetWillPresent", 7);
        this.willDismiss = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionActionSheetWillDismiss", 7);
        this.didDismiss = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionActionSheetDidDismiss", 7);
      }

      _createClass(ActionSheet, [{
        key: "onBackdropTap",
        value: function onBackdropTap() {
          this.dismiss(undefined, _chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["B"]);
        }
      }, {
        key: "dispatchCancelHandler",
        value: function dispatchCancelHandler(ev) {
          var role = ev.detail.role;

          if (Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["i"])(role)) {
            var cancelButton = this.getButtons().find(function (b) {
              return b.role === 'cancel';
            });
            this.callButtonHandler(cancelButton);
          }
        }
        /**
         * Present the action sheet overlay after it has been created.
         */

      }, {
        key: "present",
        value: function present() {
          return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);
        }
        /**
         * Dismiss the action sheet overlay after it has been presented.
         *
         * @param data Any data to emit in the dismiss events.
         * @param role The role of the element that is dismissing the action sheet.
         * This can be useful in a button handler for determining which button was
         * clicked to dismiss the action sheet.
         * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
         */

      }, {
        key: "dismiss",
        value: function dismiss(data, role) {
          return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);
        }
        /**
         * Returns a promise that resolves when the action sheet did dismiss.
         */

      }, {
        key: "onDidDismiss",
        value: function onDidDismiss() {
          return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el, 'ionActionSheetDidDismiss');
        }
        /**
         * Returns a promise that resolves when the action sheet will dismiss.
         *
         */

      }, {
        key: "onWillDismiss",
        value: function onWillDismiss() {
          return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el, 'ionActionSheetWillDismiss');
        }
      }, {
        key: "buttonClick",
        value: function () {
          var _buttonClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(button) {
            var role, shouldDismiss;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    role = button.role;

                    if (!Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["i"])(role)) {
                      _context.next = 3;
                      break;
                    }

                    return _context.abrupt("return", this.dismiss(undefined, role));

                  case 3:
                    _context.next = 5;
                    return this.callButtonHandler(button);

                  case 5:
                    shouldDismiss = _context.sent;

                    if (!shouldDismiss) {
                      _context.next = 8;
                      break;
                    }

                    return _context.abrupt("return", this.dismiss(undefined, button.role));

                  case 8:
                    return _context.abrupt("return", Promise.resolve());

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function buttonClick(_x) {
            return _buttonClick.apply(this, arguments);
          }

          return buttonClick;
        }()
      }, {
        key: "callButtonHandler",
        value: function () {
          var _callButtonHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(button) {
            var rtn;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!button) {
                      _context2.next = 6;
                      break;
                    }

                    _context2.next = 3;
                    return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["s"])(button.handler);

                  case 3:
                    rtn = _context2.sent;

                    if (!(rtn === false)) {
                      _context2.next = 6;
                      break;
                    }

                    return _context2.abrupt("return", false);

                  case 6:
                    return _context2.abrupt("return", true);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function callButtonHandler(_x2) {
            return _callButtonHandler.apply(this, arguments);
          }

          return callButtonHandler;
        }()
      }, {
        key: "getButtons",
        value: function getButtons() {
          return this.buttons.map(function (b) {
            return typeof b === 'string' ? {
              text: b
            } : b;
          });
        }
      }, {
        key: "hostData",
        value: function hostData() {
          var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          return {
            'role': 'dialog',
            'aria-modal': 'true',
            style: {
              zIndex: 20000 + this.overlayIndex
            },
            "class": Object.assign(_defineProperty({}, mode, true), Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.cssClass), {
              'action-sheet-translucent': this.translucent
            })
          };
        }
      }, {
        key: "__stencil_render",
        value: function __stencil_render() {
          var _this = this;

          var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          var allButtons = this.getButtons();
          var cancelButton = allButtons.find(function (b) {
            return b.role === 'cancel';
          });
          var buttons = allButtons.filter(function (b) {
            return b.role !== 'cancel';
          });
          return [Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
            tappable: this.backdropDismiss
          }), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "action-sheet-wrapper",
            role: "dialog"
          }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "action-sheet-container"
          }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "action-sheet-group"
          }, this.header !== undefined && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "action-sheet-title"
          }, this.header, this.subHeader && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "action-sheet-sub-title"
          }, this.subHeader)), buttons.map(function (b) {
            return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
              type: "button",
              "ion-activatable": true,
              "class": buttonClass(b),
              onClick: function onClick() {
                return _this.buttonClick(b);
              }
            }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "action-sheet-button-inner"
            }, b.icon && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
              icon: b.icon,
              lazy: false,
              "class": "action-sheet-icon"
            }), b.text), mode === 'md' && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null));
          })), cancelButton && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "action-sheet-group action-sheet-group-cancel"
          }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            type: "button",
            "class": buttonClass(cancelButton),
            onClick: function onClick() {
              return _this.buttonClick(cancelButton);
            }
          }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "action-sheet-button-inner"
          }, cancelButton.icon && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
            icon: cancelButton.icon,
            lazy: false,
            "class": "action-sheet-icon"
          }), cancelButton.text)))))];
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render());
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return ".sc-ion-action-sheet-md-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-md{width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-md{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-selected.sc-ion-action-sheet-md{background:var(--background-selected)}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color,var(--ion-background-color,#fff));--background-selected:var(--background,);--background-activated:var(--background)}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;height:60px;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:16px;text-align:start}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:0}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;background:transparent;color:var(--color,var(--ion-color-step-850,#262626));font-size:16px;text-align:start;contain:strict;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color,rgba(var(--ion-text-color-rgb,0,0,0),.54));font-size:24px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:700}";
        }
      }]);

      return ActionSheet;
    }();

    var buttonClass = function buttonClass(button) {
      return Object.assign(_defineProperty({
        'action-sheet-button': true,
        'ion-activatable': true
      }, "action-sheet-".concat(button.role), button.role !== undefined), Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__["g"])(button.cssClass));
    };
    /***/

  }
}]);
//# sourceMappingURL=3-es5.js.map