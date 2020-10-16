function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js ***!
    \*****************************************************************/

  /*! exports provided: ion_modal */

  /***/
  function node_modulesIonicCoreDistEsmIonModalMdEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_modal", function () {
      return Modal;
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
     * iOS Modal Enter Animation
     */


    var iosEnterAnimation = function iosEnterAnimation(AnimationC, baseEl) {
      var baseAnimation = new AnimationC();
      var backdropAnimation = new AnimationC();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
      var wrapperAnimation = new AnimationC();
      wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));
      wrapperAnimation.beforeStyles({
        'opacity': 1
      }).fromTo('translateY', '100%', '0%');
      backdropAnimation.fromTo('opacity', 0.01, 0.4);
      return Promise.resolve(baseAnimation.addElement(baseEl).easing('cubic-bezier(0.36,0.66,0.04,1)').duration(400).beforeAddClass('show-modal').add(backdropAnimation).add(wrapperAnimation));
    };
    /**
     * Animations for modals
     */
    // export function modalSlideIn(rootEl: HTMLElement) {
    // }
    // export class ModalSlideOut {
    //   constructor(el: HTMLElement) {
    //     let backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
    //     let wrapperEle = <HTMLElement>el.querySelector('.modal-wrapper');
    //     let wrapperEleRect = wrapperEle.getBoundingClientRect();
    //     let wrapper = new Animation(this.plt, wrapperEle);
    //     // height of the screen - top of the container tells us how much to scoot it down
    //     // so it's off-screen
    //     wrapper.fromTo('translateY', '0px', `${this.plt.height() - wrapperEleRect.top}px`);
    //     backdrop.fromTo('opacity', 0.4, 0.0);
    //     this
    //       .element(this.leavingView.pageRef())
    //       .easing('ease-out')
    //       .duration(250)
    //       .add(backdrop)
    //       .add(wrapper);
    //   }
    // }
    // export class ModalMDSlideIn {
    //   constructor(el: HTMLElement) {
    //     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
    //     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
    //     backdrop.fromTo('opacity', 0.01, 0.4);
    //     wrapper.fromTo('translateY', '40px', '0px');
    //     wrapper.fromTo('opacity', 0.01, 1);
    //     const DURATION = 280;
    //     const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
    //     this.element(this.enteringView.pageRef()).easing(EASING).duration(DURATION)
    //       .add(backdrop)
    //       .add(wrapper);
    //   }
    // }
    // export class ModalMDSlideOut {
    //   constructor(el: HTMLElement) {
    //     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
    //     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
    //     backdrop.fromTo('opacity', 0.4, 0.0);
    //     wrapper.fromTo('translateY', '0px', '40px');
    //     wrapper.fromTo('opacity', 0.99, 0);
    //     this
    //       .element(this.leavingView.pageRef())
    //       .duration(200)
    //       .easing('cubic-bezier(0.47,0,0.745,0.715)')
    //       .add(wrapper)
    //       .add(backdrop);
    //   }
    // }

    /**
     * iOS Modal Leave Animation
     */


    var iosLeaveAnimation = function iosLeaveAnimation(AnimationC, baseEl) {
      var baseAnimation = new AnimationC();
      var backdropAnimation = new AnimationC();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
      var wrapperAnimation = new AnimationC();
      var wrapperEl = baseEl.querySelector('.modal-wrapper');
      wrapperAnimation.addElement(wrapperEl);
      var wrapperElRect = wrapperEl.getBoundingClientRect();
      wrapperAnimation.beforeStyles({
        'opacity': 1
      }).fromTo('translateY', '0%', "".concat(baseEl.ownerDocument.defaultView.innerHeight - wrapperElRect.top, "px"));
      backdropAnimation.fromTo('opacity', 0.4, 0.0);
      return Promise.resolve(baseAnimation.addElement(baseEl).easing('ease-out').duration(250).add(backdropAnimation).add(wrapperAnimation));
    };
    /**
     * Md Modal Enter Animation
     */


    var mdEnterAnimation = function mdEnterAnimation(AnimationC, baseEl) {
      var baseAnimation = new AnimationC();
      var backdropAnimation = new AnimationC();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
      var wrapperAnimation = new AnimationC();
      wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));
      wrapperAnimation.fromTo('opacity', 0.01, 1).fromTo('translateY', '40px', '0px');
      backdropAnimation.fromTo('opacity', 0.01, 0.32);
      return Promise.resolve(baseAnimation.addElement(baseEl).easing('cubic-bezier(0.36,0.66,0.04,1)').duration(280).beforeAddClass('show-modal').add(backdropAnimation).add(wrapperAnimation));
    };
    /**
     * Md Modal Leave Animation
     */


    var mdLeaveAnimation = function mdLeaveAnimation(AnimationC, baseEl) {
      var baseAnimation = new AnimationC();
      var backdropAnimation = new AnimationC();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
      var wrapperAnimation = new AnimationC();
      var wrapperEl = baseEl.querySelector('.modal-wrapper');
      wrapperAnimation.addElement(wrapperEl);
      wrapperAnimation.fromTo('opacity', 0.99, 0).fromTo('translateY', '0px', '40px');
      backdropAnimation.fromTo('opacity', 0.32, 0.0);
      return Promise.resolve(baseAnimation.addElement(baseEl).easing('cubic-bezier(0.47,0,0.745,0.715)').duration(200).add(backdropAnimation).add(wrapperAnimation));
    };
    /**
     * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
     */


    var Modal = /*#__PURE__*/function () {
      function Modal(hostRef) {
        _classCallCheck(this, Modal);

        Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.presented = false;
        this.mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */

        this.keyboardClose = true;
        /**
         * If `true`, the modal will be dismissed when the backdrop is clicked.
         */

        this.backdropDismiss = true;
        /**
         * If `true`, a backdrop will be displayed behind the modal.
         */

        this.showBackdrop = true;
        /**
         * If `true`, the modal will animate.
         */

        this.animated = true;
        this.didPresent = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionModalDidPresent", 7);
        this.willPresent = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionModalWillPresent", 7);
        this.willDismiss = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionModalWillDismiss", 7);
        this.didDismiss = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionModalDidDismiss", 7);
      }

      _createClass(Modal, [{
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
            var ev = new CustomEvent(name, {
              bubbles: false,
              cancelable: false,
              detail: modalEvent.detail
            });
            el.dispatchEvent(ev);
          }
        }
        /**
         * Present the modal overlay after it has been created.
         */

      }, {
        key: "present",
        value: function () {
          var _present = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var container, componentProps;
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
                    container = this.el.querySelector(".modal-wrapper");

                    if (container) {
                      _context.next = 5;
                      break;
                    }

                    throw new Error('container is undefined');

                  case 5:
                    componentProps = Object.assign({}, this.componentProps, {
                      modal: this.el
                    });
                    _context.next = 8;
                    return Object(_chunk_00265c49_js__WEBPACK_IMPORTED_MODULE_5__["a"])(this.delegate, container, this.component, ['ion-page'], componentProps);

                  case 8:
                    this.usersElement = _context.sent;
                    _context.next = 11;
                    return Object(_chunk_7507b2b9_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.usersElement);

                  case 11:
                    return _context.abrupt("return", Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation));

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
         * Dismiss the modal overlay after it has been presented.
         *
         * @param data Any data to emit in the dismiss events.
         * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
         */

      }, {
        key: "dismiss",
        value: function () {
          var _dismiss = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data, role) {
            var dismissed;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation);

                  case 2:
                    dismissed = _context2.sent;

                    if (!dismissed) {
                      _context2.next = 6;
                      break;
                    }

                    _context2.next = 6;
                    return Object(_chunk_00265c49_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this.delegate, this.usersElement);

                  case 6:
                    return _context2.abrupt("return", dismissed);

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
         * Returns a promise that resolves when the modal did dismiss.
         */

      }, {
        key: "onDidDismiss",
        value: function onDidDismiss() {
          return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this.el, 'ionModalDidDismiss');
        }
        /**
         * Returns a promise that resolves when the modal will dismiss.
         */

      }, {
        key: "onWillDismiss",
        value: function onWillDismiss() {
          return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this.el, 'ionModalWillDismiss');
        }
      }, {
        key: "hostData",
        value: function hostData() {
          var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          return {
            'no-router': true,
            'aria-modal': 'true',
            "class": Object.assign(_defineProperty({}, mode, true), Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.cssClass)),
            style: {
              zIndex: 20000 + this.overlayIndex
            }
          };
        }
      }, {
        key: "__stencil_render",
        value: function __stencil_render() {
          var _dialogClasses;

          var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          var dialogClasses = (_dialogClasses = {}, _defineProperty(_dialogClasses, "modal-wrapper", true), _defineProperty(_dialogClasses, mode, true), _dialogClasses);
          return [Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
            visible: this.showBackdrop,
            tappable: this.backdropDismiss
          }), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            role: "dialog",
            "class": dialogClasses
          })];
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
          return ".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0,0,0,0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}";
        }
      }]);

      return Modal;
    }();

    var LIFECYCLE_MAP = {
      'ionModalDidPresent': 'ionViewDidEnter',
      'ionModalWillPresent': 'ionViewWillEnter',
      'ionModalWillDismiss': 'ionViewWillLeave',
      'ionModalDidDismiss': 'ionViewDidLeave'
    };
    /***/
  }
}]);
//# sourceMappingURL=41-es5.js.map