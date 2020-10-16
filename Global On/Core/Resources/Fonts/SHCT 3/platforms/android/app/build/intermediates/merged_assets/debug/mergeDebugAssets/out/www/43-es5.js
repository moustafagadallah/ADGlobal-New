function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js ***!
    \********************************************************************/

  /*! exports provided: ion_popover */

  /***/
  function node_modulesIonicCoreDistEsmIonPopoverIosEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_popover", function () {
      return Popover;
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


    var _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chunk-94c4865f.js */
    "./node_modules/@ionic/core/dist/esm/chunk-94c4865f.js");
    /* harmony import */


    var _chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chunk-d83bfeae.js */
    "./node_modules/@ionic/core/dist/esm/chunk-d83bfeae.js");
    /* harmony import */


    var _chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./chunk-ba834eff.js */
    "./node_modules/@ionic/core/dist/esm/chunk-ba834eff.js");
    /* harmony import */


    var _chunk_00265c49_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chunk-00265c49.js */
    "./node_modules/@ionic/core/dist/esm/chunk-00265c49.js");
    /* harmony import */


    var _chunk_7507b2b9_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chunk-7507b2b9.js */
    "./node_modules/@ionic/core/dist/esm/chunk-7507b2b9.js");
    /**
     * iOS Popover Enter Animation
     */


    var iosEnterAnimation = function iosEnterAnimation(AnimationC, baseEl, ev) {
      var originY = 'top';
      var originX = 'left';
      var contentEl = baseEl.querySelector('.popover-content');
      var contentDimentions = contentEl.getBoundingClientRect();
      var contentWidth = contentDimentions.width;
      var contentHeight = contentDimentions.height;
      var bodyWidth = baseEl.ownerDocument.defaultView.innerWidth;
      var bodyHeight = baseEl.ownerDocument.defaultView.innerHeight; // If ev was passed, use that for target element

      var targetDim = ev && ev.target && ev.target.getBoundingClientRect();
      var targetTop = targetDim != null && 'top' in targetDim ? targetDim.top : bodyHeight / 2 - contentHeight / 2;
      var targetLeft = targetDim != null && 'left' in targetDim ? targetDim.left : bodyWidth / 2;
      var targetWidth = targetDim && targetDim.width || 0;
      var targetHeight = targetDim && targetDim.height || 0;
      var arrowEl = baseEl.querySelector('.popover-arrow');
      var arrowDim = arrowEl.getBoundingClientRect();
      var arrowWidth = arrowDim.width;
      var arrowHeight = arrowDim.height;

      if (targetDim == null) {
        arrowEl.style.display = 'none';
      }

      var arrowCSS = {
        top: targetTop + targetHeight,
        left: targetLeft + targetWidth / 2 - arrowWidth / 2
      };
      var popoverCSS = {
        top: targetTop + targetHeight + (arrowHeight - 1),
        left: targetLeft + targetWidth / 2 - contentWidth / 2
      }; // If the popover left is less than the padding it is off screen
      // to the left so adjust it, else if the width of the popover
      // exceeds the body width it is off screen to the right so adjust
      //

      var checkSafeAreaLeft = false;
      var checkSafeAreaRight = false; // If the popover left is less than the padding it is off screen
      // to the left so adjust it, else if the width of the popover
      // exceeds the body width it is off screen to the right so adjust
      // 25 is a random/arbitrary number. It seems to work fine for ios11
      // and iPhoneX. Is it perfect? No. Does it work? Yes.

      if (popoverCSS.left < POPOVER_IOS_BODY_PADDING + 25) {
        checkSafeAreaLeft = true;
        popoverCSS.left = POPOVER_IOS_BODY_PADDING;
      } else if (contentWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left + 25 > bodyWidth) {
        // Ok, so we're on the right side of the screen,
        // but now we need to make sure we're still a bit further right
        // cus....notchurally... Again, 25 is random. It works tho
        checkSafeAreaRight = true;
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_IOS_BODY_PADDING;
        originX = 'right';
      } // make it pop up if there's room above


      if (targetTop + targetHeight + contentHeight > bodyHeight && targetTop - contentHeight > 0) {
        arrowCSS.top = targetTop - (arrowHeight + 1);
        popoverCSS.top = targetTop - contentHeight - (arrowHeight - 1);
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom'; // If there isn't room for it to pop up above the target cut it off
      } else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_IOS_BODY_PADDING + '%';
      }

      arrowEl.style.top = arrowCSS.top + 'px';
      arrowEl.style.left = arrowCSS.left + 'px';
      contentEl.style.top = popoverCSS.top + 'px';
      contentEl.style.left = popoverCSS.left + 'px';

      if (checkSafeAreaLeft) {
        contentEl.style.left = "calc(".concat(popoverCSS.left, "px + var(--ion-safe-area-left, 0px))");
      }

      if (checkSafeAreaRight) {
        contentEl.style.left = "calc(".concat(popoverCSS.left, "px - var(--ion-safe-area-right, 0px))");
      }

      contentEl.style.transformOrigin = originY + ' ' + originX;
      var baseAnimation = new AnimationC();
      var backdropAnimation = new AnimationC();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
      backdropAnimation.fromTo('opacity', 0.01, 0.08);
      var wrapperAnimation = new AnimationC();
      wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      return Promise.resolve(baseAnimation.addElement(baseEl).easing('ease').duration(100).add(backdropAnimation).add(wrapperAnimation));
    };

    var POPOVER_IOS_BODY_PADDING = 5;
    /**
     * iOS Popover Leave Animation
     */

    var iosLeaveAnimation = function iosLeaveAnimation(AnimationC, baseEl) {
      var baseAnimation = new AnimationC();
      var backdropAnimation = new AnimationC();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
      var wrapperAnimation = new AnimationC();
      wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
      wrapperAnimation.fromTo('opacity', 0.99, 0);
      backdropAnimation.fromTo('opacity', 0.08, 0);
      return Promise.resolve(baseAnimation.addElement(baseEl).easing('ease').duration(500).add(backdropAnimation).add(wrapperAnimation));
    };
    /**
     * Md Popover Enter Animation
     */


    var mdEnterAnimation = function mdEnterAnimation(AnimationC, baseEl, ev) {
      var doc = baseEl.ownerDocument;
      var isRTL = doc.dir === 'rtl';
      var originY = 'top';
      var originX = isRTL ? 'right' : 'left';
      var contentEl = baseEl.querySelector('.popover-content');
      var contentDimentions = contentEl.getBoundingClientRect();
      var contentWidth = contentDimentions.width;
      var contentHeight = contentDimentions.height;
      var bodyWidth = doc.defaultView.innerWidth;
      var bodyHeight = doc.defaultView.innerHeight; // If ev was passed, use that for target element

      var targetDim = ev && ev.target && ev.target.getBoundingClientRect(); // As per MD spec, by default position the popover below the target (trigger) element

      var targetTop = targetDim != null && 'bottom' in targetDim ? targetDim.bottom : bodyHeight / 2 - contentHeight / 2;
      var targetLeft = targetDim != null && 'left' in targetDim ? isRTL ? targetDim.left - contentWidth + targetDim.width : targetDim.left : bodyWidth / 2 - contentWidth / 2;
      var targetHeight = targetDim && targetDim.height || 0;
      var popoverCSS = {
        top: targetTop,
        left: targetLeft
      }; // If the popover left is less than the padding it is off screen
      // to the left so adjust it, else if the width of the popover
      // exceeds the body width it is off screen to the right so adjust

      if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {
        popoverCSS.left = POPOVER_MD_BODY_PADDING; // Same origin in this case for both LTR & RTL
        // Note: in LTR, originX is already 'left'

        originX = 'left';
      } else if (contentWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left > bodyWidth) {
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_MD_BODY_PADDING; // Same origin in this case for both LTR & RTL
        // Note: in RTL, originX is already 'right'

        originX = 'right';
      } // If the popover when popped down stretches past bottom of screen,
      // make it pop up if there's room above


      if (targetTop + targetHeight + contentHeight > bodyHeight && targetTop - contentHeight > 0) {
        popoverCSS.top = targetTop - contentHeight - targetHeight;
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom'; // If there isn't room for it to pop up above the target cut it off
      } else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_MD_BODY_PADDING + 'px';
      }

      contentEl.style.top = popoverCSS.top + 'px';
      contentEl.style.left = popoverCSS.left + 'px';
      contentEl.style.transformOrigin = originY + ' ' + originX;
      var baseAnimation = new AnimationC();
      var backdropAnimation = new AnimationC();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
      backdropAnimation.fromTo('opacity', 0.01, 0.32);
      var wrapperAnimation = new AnimationC();
      wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      var contentAnimation = new AnimationC();
      contentAnimation.addElement(baseEl.querySelector('.popover-content'));
      contentAnimation.fromTo('scale', 0.001, 1);
      var viewportAnimation = new AnimationC();
      viewportAnimation.addElement(baseEl.querySelector('.popover-viewport'));
      viewportAnimation.fromTo('opacity', 0.01, 1);
      return Promise.resolve(baseAnimation.addElement(baseEl).easing('cubic-bezier(0.36,0.66,0.04,1)').duration(300).add(backdropAnimation).add(wrapperAnimation).add(contentAnimation).add(viewportAnimation));
    };

    var POPOVER_MD_BODY_PADDING = 12;
    /**
     * Md Popover Leave Animation
     */

    var mdLeaveAnimation = function mdLeaveAnimation(AnimationC, baseEl) {
      var baseAnimation = new AnimationC();
      var backdropAnimation = new AnimationC();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
      var wrapperAnimation = new AnimationC();
      wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
      wrapperAnimation.fromTo('opacity', 0.99, 0);
      backdropAnimation.fromTo('opacity', 0.32, 0);
      return Promise.resolve(baseAnimation.addElement(baseEl).easing('ease').duration(500).add(backdropAnimation).add(wrapperAnimation));
    };
    /**
     * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
     */


    var Popover = /*#__PURE__*/function () {
      function Popover(hostRef) {
        _classCallCheck(this, Popover);

        Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.presented = false;
        this.mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */

        this.keyboardClose = true;
        /**
         * If `true`, the popover will be dismissed when the backdrop is clicked.
         */

        this.backdropDismiss = true;
        /**
         * If `true`, a backdrop will be displayed behind the popover.
         */

        this.showBackdrop = true;
        /**
         * If `true`, the popover will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */

        this.translucent = false;
        /**
         * If `true`, the popover will animate.
         */

        this.animated = true;
        this.didPresent = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPopoverDidPresent", 7);
        this.willPresent = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPopoverWillPresent", 7);
        this.willDismiss = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPopoverWillDismiss", 7);
        this.didDismiss = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionPopoverDidDismiss", 7);
      }

      _createClass(Popover, [{
        key: "onDismiss",
        value: function onDismiss(ev) {
          ev.stopPropagation();
          ev.preventDefault();
          this.dismiss();
        }
      }, {
        key: "onBackdropTap",
        value: function onBackdropTap() {
          this.dismiss(undefined, _chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_3__["B"]);
        }
      }, {
        key: "lifecycle",
        value: function lifecycle(modalEvent) {
          var el = this.usersElement;
          var name = LIFECYCLE_MAP[modalEvent.type];

          if (el && name) {
            var event = new CustomEvent(name, {
              bubbles: false,
              cancelable: false,
              detail: modalEvent.detail
            });
            el.dispatchEvent(event);
          }
        }
        /**
         * Present the popover overlay after it has been created.
         */

      }, {
        key: "present",
        value: function () {
          var _present = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var container, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.presented) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    container = this.el.querySelector('.popover-content');

                    if (container) {
                      _context.next = 5;
                      break;
                    }

                    throw new Error('container is undefined');

                  case 5:
                    data = Object.assign({}, this.componentProps, {
                      popover: this.el
                    });
                    _context.next = 8;
                    return Object(_chunk_00265c49_js__WEBPACK_IMPORTED_MODULE_5__["a"])(this.delegate, container, this.component, ['popover-viewport', this.el['s-sc']], data);

                  case 8:
                    this.usersElement = _context.sent;
                    _context.next = 11;
                    return Object(_chunk_7507b2b9_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.usersElement);

                  case 11:
                    return _context.abrupt("return", Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this, 'popoverEnter', iosEnterAnimation, mdEnterAnimation, this.event));

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function present() {
            return _present.apply(this, arguments);
          }

          return present;
        }()
        /**
         * Dismiss the popover overlay after it has been presented.
         *
         * @param data Any data to emit in the dismiss events.
         * @param role The role of the element that is dismissing the popover. For example, 'cancel' or 'backdrop'.
         */

      }, {
        key: "dismiss",
        value: function () {
          var _dismiss = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data, role) {
            var shouldDismiss;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this, data, role, 'popoverLeave', iosLeaveAnimation, mdLeaveAnimation, this.event);

                  case 2:
                    shouldDismiss = _context2.sent;

                    if (!shouldDismiss) {
                      _context2.next = 6;
                      break;
                    }

                    _context2.next = 6;
                    return Object(_chunk_00265c49_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this.delegate, this.usersElement);

                  case 6:
                    return _context2.abrupt("return", shouldDismiss);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function dismiss(_x, _x2) {
            return _dismiss.apply(this, arguments);
          }

          return dismiss;
        }()
        /**
         * Returns a promise that resolves when the popover did dismiss.
         */

      }, {
        key: "onDidDismiss",
        value: function onDidDismiss() {
          return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this.el, 'ionPopoverDidDismiss');
        }
        /**
         * Returns a promise that resolves when the popover will dismiss.
         */

      }, {
        key: "onWillDismiss",
        value: function onWillDismiss() {
          return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this.el, 'ionPopoverWillDismiss');
        }
      }, {
        key: "hostData",
        value: function hostData() {
          var _Object$assign;

          var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          return {
            'aria-modal': 'true',
            'no-router': true,
            style: {
              zIndex: 20000 + this.overlayIndex
            },
            "class": Object.assign({}, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.cssClass), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, 'popover-translucent', this.translucent), _Object$assign))
          };
        }
      }, {
        key: "__stencil_render",
        value: function __stencil_render() {
          return [Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
            tappable: this.backdropDismiss,
            visible: this.showBackdrop
          }), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "popover-wrapper"
          }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "popover-arrow"
          }), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "popover-content"
          }))];
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
          return ".sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}";
        }
      }]);

      return Popover;
    }();

    var LIFECYCLE_MAP = {
      'ionPopoverDidPresent': 'ionViewDidEnter',
      'ionPopoverWillPresent': 'ionViewWillEnter',
      'ionPopoverWillDismiss': 'ionViewWillLeave',
      'ionPopoverDidDismiss': 'ionViewDidLeave'
    };
    /***/
  }
}]);
//# sourceMappingURL=43-es5.js.map