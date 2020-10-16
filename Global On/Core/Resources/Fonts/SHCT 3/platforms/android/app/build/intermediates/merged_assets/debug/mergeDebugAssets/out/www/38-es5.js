function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js ***!
    \*******************************************************************/

  /*! exports provided: ion_menu, ion_menu_button, ion_menu_controller, ion_menu_toggle */

  /***/
  function node_modulesIonicCoreDistEsmIonMenu_4IosEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_menu", function () {
      return Menu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_menu_button", function () {
      return MenuButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_menu_controller", function () {
      return MenuController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_menu_toggle", function () {
      return MenuToggle;
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
    /* harmony import */


    var _chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chunk-c90aaa66.js */
    "./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js");
    /* harmony import */


    var _index_8421816f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./index-8421816f.js */
    "./node_modules/@ionic/core/dist/esm/index-8421816f.js");

    var Menu = /*#__PURE__*/function () {
      function Menu(hostRef) {
        _classCallCheck(this, Menu);

        Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.lastOnEnd = 0;
        this.blocker = _index_8421816f_js__WEBPACK_IMPORTED_MODULE_4__["GESTURE_CONTROLLER"].createBlocker({
          disableScroll: true
        });
        this.mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        this.isAnimating = false;
        this._isOpen = false;
        this.isPaneVisible = false;
        this.isEndSide = false;
        /**
         * If `true`, the menu is disabled.
         */

        this.disabled = false;
        /**
         * Which side of the view the menu should be placed.
         */

        this.side = 'start';
        /**
         * If `true`, swiping the menu is enabled.
         */

        this.swipeGesture = true;
        /**
         * The edge threshold for dragging the menu open.
         * If a drag/swipe happens over this value, the menu is not triggered.
         */

        this.maxEdgeStart = 50;
        this.ionWillOpen = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionWillOpen", 7);
        this.ionWillClose = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionWillClose", 7);
        this.ionDidOpen = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionDidOpen", 7);
        this.ionDidClose = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionDidClose", 7);
        this.ionMenuChange = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionMenuChange", 7);
        this.lazyMenuCtrl = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["k"])(this, "ion-menu-controller");
      }

      _createClass(Menu, [{
        key: "typeChanged",
        value: function typeChanged(type, oldType) {
          var contentEl = this.contentEl;

          if (contentEl) {
            if (oldType !== undefined) {
              contentEl.classList.remove("menu-content-".concat(oldType));
            }

            contentEl.classList.add("menu-content-".concat(type));
            contentEl.removeAttribute('style');
          }

          if (this.menuInnerEl) {
            // Remove effects of previous animations
            this.menuInnerEl.removeAttribute('style');
          }

          this.animation = undefined;
        }
      }, {
        key: "disabledChanged",
        value: function disabledChanged() {
          this.updateState();
          this.ionMenuChange.emit({
            disabled: this.disabled,
            open: this._isOpen
          });
        }
      }, {
        key: "sideChanged",
        value: function sideChanged() {
          this.isEndSide = Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["i"])(this.side);
        }
      }, {
        key: "swipeGestureChanged",
        value: function swipeGestureChanged() {
          this.updateState();
        }
      }, {
        key: "componentWillLoad",
        value: function () {
          var _componentWillLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var menuCtrl, el, parent, content;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.type === undefined) {
                      this.type = _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('menuType', this.mode === 'ios' ? 'reveal' : 'overlay');
                    }

                    _context.next = 3;
                    return this.lazyMenuCtrl.componentOnReady().then(function (p) {
                      return p._getInstance();
                    });

                  case 3:
                    menuCtrl = this.menuCtrl = _context.sent;
                    el = this.el;
                    parent = el.parentNode;
                    content = this.contentId !== undefined ? document.getElementById(this.contentId) : parent && parent.querySelector && parent.querySelector('[main]');

                    if (!(!content || !content.tagName)) {
                      _context.next = 10;
                      break;
                    }

                    // requires content element
                    console.error('Menu: must have a "content" element to listen for drag events on.');
                    return _context.abrupt("return");

                  case 10:
                    this.contentEl = content; // add menu's content classes

                    content.classList.add('menu-content');
                    this.typeChanged(this.type, undefined);
                    this.sideChanged(); // register this menu with the app's menu controller

                    menuCtrl._register(this);

                    _context.next = 17;
                    return Promise.resolve().then(__webpack_require__.bind(null,
                    /*! ./index-8421816f.js */
                    "./node_modules/@ionic/core/dist/esm/index-8421816f.js"));

                  case 17:
                    this.gesture = _context.sent.createGesture({
                      el: document,
                      gestureName: 'menu-swipe',
                      gesturePriority: 30,
                      threshold: 10,
                      canStart: function canStart(ev) {
                        return _this.canStart(ev);
                      },
                      onWillStart: function onWillStart() {
                        return _this.onWillStart();
                      },
                      onStart: function onStart() {
                        return _this.onStart();
                      },
                      onMove: function onMove(ev) {
                        return _this.onMove(ev);
                      },
                      onEnd: function onEnd(ev) {
                        return _this.onEnd(ev);
                      }
                    });
                    this.updateState();

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function componentWillLoad() {
            return _componentWillLoad.apply(this, arguments);
          }

          return componentWillLoad;
        }()
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          this.ionMenuChange.emit({
            disabled: this.disabled,
            open: this._isOpen
          });
        }
      }, {
        key: "componentDidUnload",
        value: function componentDidUnload() {
          this.blocker.destroy();

          this.menuCtrl._unregister(this);

          if (this.animation) {
            this.animation.destroy();
          }

          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }

          this.animation = undefined;
          this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
        }
      }, {
        key: "onSplitPaneChanged",
        value: function onSplitPaneChanged(ev) {
          this.isPaneVisible = ev.detail.isPane(this.el);
          this.updateState();
        }
      }, {
        key: "onBackdropClick",
        value: function onBackdropClick(ev) {
          if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
            var shouldClose = ev.composedPath ? !ev.composedPath().includes(this.menuInnerEl) : false;

            if (shouldClose) {
              ev.preventDefault();
              ev.stopPropagation();
              this.close();
            }
          }
        }
        /**
         * Returns `true` is the menu is open.
         */

      }, {
        key: "isOpen",
        value: function isOpen() {
          return Promise.resolve(this._isOpen);
        }
        /**
         * Returns `true` is the menu is active.
         *
         * A menu is active when it can be opened or closed, meaning it's enabled
         * and it's not part of a `ion-split-pane`.
         */

      }, {
        key: "isActive",
        value: function isActive() {
          return Promise.resolve(this._isActive());
        }
        /**
         * Opens the menu. If the menu is already open or it can't be opened,
         * it returns `false`.
         */

      }, {
        key: "open",
        value: function open() {
          var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.setOpen(true, animated);
        }
        /**
         * Closes the menu. If the menu is already closed or it can't be closed,
         * it returns `false`.
         */

      }, {
        key: "close",
        value: function close() {
          var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.setOpen(false, animated);
        }
        /**
         * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
         * If the operation can't be completed successfully, it returns `false`.
         */

      }, {
        key: "toggle",
        value: function toggle() {
          var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.setOpen(!this._isOpen, animated);
        }
        /**
         * Opens or closes the button.
         * If the operation can't be completed successfully, it returns `false`.
         */

      }, {
        key: "setOpen",
        value: function setOpen(shouldOpen) {
          var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.menuCtrl._setOpen(this, shouldOpen, animated);
        }
      }, {
        key: "_setOpen",
        value: function () {
          var _setOpen2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(shouldOpen) {
            var animated,
                _args2 = arguments;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    animated = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : true;

                    if (!(!this._isActive() || this.isAnimating || shouldOpen === this._isOpen)) {
                      _context2.next = 3;
                      break;
                    }

                    return _context2.abrupt("return", false);

                  case 3:
                    this.beforeAnimation(shouldOpen);
                    _context2.next = 6;
                    return this.loadAnimation();

                  case 6:
                    _context2.next = 8;
                    return this.startAnimation(shouldOpen, animated);

                  case 8:
                    this.afterAnimation(shouldOpen);
                    return _context2.abrupt("return", true);

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function _setOpen(_x) {
            return _setOpen2.apply(this, arguments);
          }

          return _setOpen;
        }()
      }, {
        key: "loadAnimation",
        value: function () {
          var _loadAnimation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var width;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // Menu swipe animation takes the menu's inner width as parameter,
                    // If `offsetWidth` changes, we need to create a new animation.
                    width = this.menuInnerEl.offsetWidth;

                    if (!(width === this.width && this.animation !== undefined)) {
                      _context3.next = 3;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 3:
                    this.width = width; // Destroy existing animation

                    if (this.animation) {
                      this.animation.destroy();
                      this.animation = undefined;
                    } // Create new animation


                    _context3.next = 7;
                    return this.menuCtrl._createAnimation(this.type, this);

                  case 7:
                    this.animation = _context3.sent;

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function loadAnimation() {
            return _loadAnimation.apply(this, arguments);
          }

          return loadAnimation;
        }()
      }, {
        key: "startAnimation",
        value: function () {
          var _startAnimation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(shouldOpen, animated) {
            var ani;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    ani = this.animation.reverse(!shouldOpen);

                    if (!animated) {
                      _context4.next = 6;
                      break;
                    }

                    _context4.next = 4;
                    return ani.playAsync();

                  case 4:
                    _context4.next = 7;
                    break;

                  case 6:
                    ani.playSync();

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          function startAnimation(_x2, _x3) {
            return _startAnimation.apply(this, arguments);
          }

          return startAnimation;
        }()
      }, {
        key: "_isActive",
        value: function _isActive() {
          return !this.disabled && !this.isPaneVisible;
        }
      }, {
        key: "canSwipe",
        value: function canSwipe() {
          return this.swipeGesture && !this.isAnimating && this._isActive();
        }
      }, {
        key: "canStart",
        value: function canStart(detail) {
          if (!this.canSwipe()) {
            return false;
          }

          if (this._isOpen) {
            return true; // TODO error
          } else if (this.menuCtrl.getOpenSync()) {
            return false;
          }

          return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
        }
      }, {
        key: "onWillStart",
        value: function onWillStart() {
          this.beforeAnimation(!this._isOpen);
          return this.loadAnimation();
        }
      }, {
        key: "onStart",
        value: function onStart() {
          if (!this.isAnimating || !this.animation) {
            Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["b"])(false, 'isAnimating has to be true');
            return;
          } // the cloned animation should not use an easing curve during seek


          this.animation.reverse(this._isOpen).progressStart();
        }
      }, {
        key: "onMove",
        value: function onMove(detail) {
          if (!this.isAnimating || !this.animation) {
            Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["b"])(false, 'isAnimating has to be true');
            return;
          }

          var delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
          var stepValue = delta / this.width;
          this.animation.progressStep(stepValue);
        }
      }, {
        key: "onEnd",
        value: function onEnd(detail) {
          var _this2 = this;

          if (!this.isAnimating || !this.animation) {
            Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["b"])(false, 'isAnimating has to be true');
            return;
          }

          var isOpen = this._isOpen;
          var isEndSide = this.isEndSide;
          var delta = computeDelta(detail.deltaX, isOpen, isEndSide);
          var width = this.width;
          var stepValue = delta / width;
          var velocity = detail.velocityX;
          var z = width / 2.0;
          var shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
          var shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
          var shouldComplete = isOpen ? isEndSide ? shouldCompleteRight : shouldCompleteLeft : isEndSide ? shouldCompleteLeft : shouldCompleteRight;
          var shouldOpen = !isOpen && shouldComplete;

          if (isOpen && !shouldComplete) {
            shouldOpen = true;
          }

          var missing = shouldComplete ? 1 - stepValue : stepValue;
          var missingDistance = missing * width;
          var realDur = 0;

          if (missingDistance > 5) {
            var dur = missingDistance / Math.abs(velocity);
            realDur = Math.min(dur, 300);
          }

          this.lastOnEnd = detail.timeStamp;
          this.animation.onFinish(function () {
            return _this2.afterAnimation(shouldOpen);
          }, {
            clearExistingCallbacks: true,
            oneTimeCallback: true
          }).progressEnd(shouldComplete, stepValue, realDur);
        }
      }, {
        key: "beforeAnimation",
        value: function beforeAnimation(shouldOpen) {
          Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["b"])(!this.isAnimating, '_before() should not be called while animating'); // this places the menu into the correct location before it animates in
          // this css class doesn't actually kick off any animations

          this.el.classList.add(SHOW_MENU);

          if (this.backdropEl) {
            this.backdropEl.classList.add(SHOW_BACKDROP);
          }

          this.blocker.block();
          this.isAnimating = true;

          if (shouldOpen) {
            this.ionWillOpen.emit();
          } else {
            this.ionWillClose.emit();
          }
        }
      }, {
        key: "afterAnimation",
        value: function afterAnimation(isOpen) {
          Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["b"])(this.isAnimating, '_before() should be called while animating'); // keep opening/closing the menu disabled for a touch more yet
          // only add listeners/css if it's enabled and isOpen
          // and only remove listeners/css if it's not open
          // emit opened/closed events

          this._isOpen = isOpen;
          this.isAnimating = false;

          if (!this._isOpen) {
            this.blocker.unblock();
          }

          if (isOpen) {
            // add css class
            if (this.contentEl) {
              this.contentEl.classList.add(MENU_CONTENT_OPEN);
            } // emit open event


            this.ionDidOpen.emit();
          } else {
            // remove css classes
            this.el.classList.remove(SHOW_MENU);

            if (this.contentEl) {
              this.contentEl.classList.remove(MENU_CONTENT_OPEN);
            }

            if (this.backdropEl) {
              this.backdropEl.classList.remove(SHOW_BACKDROP);
            } // emit close event


            this.ionDidClose.emit();
          }
        }
      }, {
        key: "updateState",
        value: function updateState() {
          var isActive = this._isActive();

          if (this.gesture) {
            this.gesture.setDisabled(!isActive || !this.swipeGesture);
          } // Close menu immediately


          if (!isActive && this._isOpen) {
            // close if this menu is open, and should not be enabled
            this.forceClosing();
          }

          if (!this.disabled && this.menuCtrl) {
            this.menuCtrl._setActiveMenu(this);
          }

          Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["b"])(!this.isAnimating, 'can not be animating');
        }
      }, {
        key: "forceClosing",
        value: function forceClosing() {
          Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["b"])(this._isOpen, 'menu cannot be closed');
          this.isAnimating = true;
          var ani = this.animation.reverse(true);
          ani.playSync();
          this.afterAnimation(false);
        }
      }, {
        key: "hostData",
        value: function hostData() {
          var _class;

          var isEndSide = this.isEndSide,
              type = this.type,
              disabled = this.disabled,
              isPaneVisible = this.isPaneVisible;
          return {
            role: 'navigation',
            "class": (_class = {}, _defineProperty(_class, "".concat(this.mode), true), _defineProperty(_class, "menu-type-".concat(type), true), _defineProperty(_class, 'menu-enabled', !disabled), _defineProperty(_class, 'menu-side-end', isEndSide), _defineProperty(_class, 'menu-side-start', !isEndSide), _defineProperty(_class, 'menu-pane-visible', isPaneVisible), _class)
          };
        }
      }, {
        key: "__stencil_render",
        value: function __stencil_render() {
          var _this3 = this;

          return [Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "menu-inner",
            ref: function ref(el) {
              return _this3.menuInnerEl = el;
            }
          }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
            ref: function ref(el) {
              return _this3.backdropEl = el;
            },
            "class": "menu-backdrop",
            tappable: false,
            stopPropagation: false
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
        key: "watchers",
        get: function get() {
          return {
            "type": ["typeChanged"],
            "disabled": ["disabledChanged"],
            "side": ["sideChanged"],
            "swipeGesture": ["swipeGestureChanged"]
          };
        }
      }, {
        key: "style",
        get: function get() {
          return ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:80}:host(.menu-type-push) .show-backdrop{display:block}";
        }
      }]);

      return Menu;
    }();

    var computeDelta = function computeDelta(deltaX, isOpen, isEndSide) {
      return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
    };

    var checkEdgeSide = function checkEdgeSide(win, posX, isEndSide, maxEdgeStart) {
      if (isEndSide) {
        return posX >= win.innerWidth - maxEdgeStart;
      } else {
        return posX <= maxEdgeStart;
      }
    };

    var SHOW_MENU = 'show-menu';
    var SHOW_BACKDROP = 'show-backdrop';
    var MENU_CONTENT_OPEN = 'menu-content-open'; // Get the menu controller element

    var getMenuController = function getMenuController(doc) {
      var menuControllerElement = doc.querySelector('ion-menu-controller');

      if (!menuControllerElement) {
        return Promise.resolve(undefined);
      }

      return menuControllerElement.componentOnReady();
    }; // Given a menu, toggle it


    var toggleMenu = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(menu) {
        var menuCtrl, menuEl;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return getMenuController(document);

              case 2:
                menuCtrl = _context5.sent;

                if (!menuCtrl) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 6;
                return menuCtrl.get(menu);

              case 6:
                menuEl = _context5.sent;

                if (menuEl) {
                  menuCtrl.toggle(menu);
                }

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function toggleMenu(_x4) {
        return _ref.apply(this, arguments);
      };
    }(); // Given a menu, return whether or not the menu toggle should be visible


    var updateVisibility = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(menu) {
        var menuCtrl, menuEl;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return getMenuController(document);

              case 2:
                menuCtrl = _context6.sent;

                if (!menuCtrl) {
                  _context6.next = 14;
                  break;
                }

                _context6.next = 6;
                return menuCtrl.get(menu);

              case 6:
                menuEl = _context6.sent;
                _context6.t0 = menuEl;

                if (!_context6.t0) {
                  _context6.next = 12;
                  break;
                }

                _context6.next = 11;
                return menuEl.isActive();

              case 11:
                _context6.t0 = _context6.sent;

              case 12:
                if (!_context6.t0) {
                  _context6.next = 14;
                  break;
                }

                return _context6.abrupt("return", true);

              case 14:
                return _context6.abrupt("return", false);

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function updateVisibility(_x5) {
        return _ref2.apply(this, arguments);
      };
    }();

    var MenuButton = /*#__PURE__*/function () {
      function MenuButton(hostRef) {
        var _this4 = this;

        _classCallCheck(this, MenuButton);

        Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visible = false;
        /**
         * If `true`, the user cannot interact with the menu button.
         */

        this.disabled = false;
        /**
         * Automatically hides the menu button when the corresponding menu is not active
         */

        this.autoHide = true;
        /**
         * The type of the button.
         */

        this.type = 'button';
        this.setVisibility = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return updateVisibility(_this4.menu);

                case 2:
                  _this4.visible = _context7.sent;

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));
        this.onClick = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return toggleMenu(_this4.menu);

                case 2:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));
      }

      _createClass(MenuButton, [{
        key: "componentDidLoad",
        value: function () {
          var _componentDidLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.setVisibility();

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));

          function componentDidLoad() {
            return _componentDidLoad.apply(this, arguments);
          }

          return componentDidLoad;
        }()
      }, {
        key: "visibilityChanged",
        value: function () {
          var _visibilityChanged = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.setVisibility();

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));

          function visibilityChanged() {
            return _visibilityChanged.apply(this, arguments);
          }

          return visibilityChanged;
        }()
      }, {
        key: "render",
        value: function render() {
          var color = this.color,
              disabled = this.disabled;
          var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);

          var menuIcon = _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('menuIcon', 'menu');

          var hidden = this.autoHide && !this.visible;
          var attrs = {
            type: this.type
          };
          return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.onClick,
            "aria-disabled": disabled ? 'true' : null,
            "aria-hidden": hidden ? 'true' : null,
            "class": Object.assign(_defineProperty({}, mode, true), Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_2__["c"])(color), {
              'button': true,
              'menu-button-hidden': hidden,
              'menu-button-disabled': disabled,
              'ion-activatable': true,
              'ion-focusable': true
            })
          }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", Object.assign({}, attrs, {
            disabled: this.disabled,
            "class": "button-native"
          }), Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
            icon: menuIcon,
            mode: mode,
            lazy: false
          })), mode === 'md' && Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", {
            type: "unbounded"
          })));
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.activated){opacity:.4}\@media (any-hover:hover){:host(:hover){opacity:.6}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.1)}";
        }
      }]);

      return MenuButton;
    }();
    /**
     * baseAnimation
     * Base class which is extended by the various types. Each
     * type will provide their own animations for open and close
     * and registers itself with Menu.
     */


    var baseAnimation = function baseAnimation(AnimationC) {
      // https://material.io/guidelines/motion/movement.html#movement-movement-in-out-of-screen-bounds
      // https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves
      // "Apply the sharp curve to items temporarily leaving the screen that may return
      // from the same exit point. When they return, use the deceleration curve. On mobile,
      // this transition typically occurs over 300ms" -- MD Motion Guide
      return Promise.resolve(new AnimationC().easing('cubic-bezier(0.0, 0.0, 0.2, 1)') // Deceleration curve (Entering the screen)
      .easingReverse('cubic-bezier(0.4, 0.0, 0.6, 1)') // Sharp curve (Temporarily leaving the screen)
      .duration(300));
    };

    var BOX_SHADOW_WIDTH = 8;
    /**
     * Menu Overlay Type
     * The menu slides over the content. The content
     * itself, which is under the menu, does not move.
     */

    var menuOverlayAnimation = function menuOverlayAnimation(AnimationC, _, menu) {
      var closedX;
      var openedX;
      var width = menu.width + BOX_SHADOW_WIDTH;

      if (menu.isEndSide) {
        // right side
        closedX = width + 'px';
        openedX = '0px';
      } else {
        // left side
        closedX = -width + 'px';
        openedX = '0px';
      }

      var menuAnimation = new AnimationC().addElement(menu.menuInnerEl).fromTo('translateX', closedX, openedX);
      var backdropAnimation = new AnimationC().addElement(menu.backdropEl).fromTo('opacity', 0.01, 0.32);
      return baseAnimation(AnimationC).then(function (animation) {
        return animation.add(menuAnimation).add(backdropAnimation);
      });
    };
    /**
     * Menu Push Type
     * The content slides over to reveal the menu underneath.
     * The menu itself also slides over to reveal its bad self.
     */


    var menuPushAnimation = function menuPushAnimation(AnimationC, _, menu) {
      var contentOpenedX;
      var menuClosedX;
      var width = menu.width;

      if (menu.isEndSide) {
        contentOpenedX = -width + 'px';
        menuClosedX = width + 'px';
      } else {
        contentOpenedX = width + 'px';
        menuClosedX = -width + 'px';
      }

      var menuAnimation = new AnimationC().addElement(menu.menuInnerEl).fromTo('translateX', menuClosedX, '0px');
      var contentAnimation = new AnimationC().addElement(menu.contentEl).fromTo('translateX', '0px', contentOpenedX);
      var backdropAnimation = new AnimationC().addElement(menu.backdropEl).fromTo('opacity', 0.01, 0.32);
      return baseAnimation(AnimationC).then(function (animation) {
        return animation.add(menuAnimation).add(backdropAnimation).add(contentAnimation);
      });
    };
    /**
     * Menu Reveal Type
     * The content slides over to reveal the menu underneath.
     * The menu itself, which is under the content, does not move.
     */


    var menuRevealAnimation = function menuRevealAnimation(AnimationC, _, menu) {
      var openedX = menu.width * (menu.isEndSide ? -1 : 1) + 'px';
      var contentOpen = new AnimationC().addElement(menu.contentEl).fromTo('translateX', '0px', openedX);
      return baseAnimation(AnimationC).then(function (animation) {
        return animation.add(contentOpen);
      });
    };

    var MenuController = /*#__PURE__*/function () {
      function MenuController(hostRef) {
        _classCallCheck(this, MenuController);

        Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.menus = [];
        this.menuAnimations = new Map();
        this.registerAnimation('reveal', menuRevealAnimation);
        this.registerAnimation('push', menuPushAnimation);
        this.registerAnimation('overlay', menuOverlayAnimation);
      }
      /**
       * Open the menu. If a menu is not provided then it will open the first
       * menu found. If the specified menu is `start` or `end`, then it will open
       * the enabled menu on that side. Otherwise, it will try to find the menu
       * using the menu's `id` property. If a menu is not found then it will
       * return `false`.
       *
       * @param menu The menuId or side of the menu to open.
       */


      _createClass(MenuController, [{
        key: "open",
        value: function () {
          var _open = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(menu) {
            var menuEl;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.get(menu);

                  case 2:
                    menuEl = _context11.sent;

                    if (!menuEl) {
                      _context11.next = 5;
                      break;
                    }

                    return _context11.abrupt("return", menuEl.open());

                  case 5:
                    return _context11.abrupt("return", false);

                  case 6:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));

          function open(_x6) {
            return _open.apply(this, arguments);
          }

          return open;
        }()
        /**
         * Close the menu. If a menu is specified, it will close that menu.
         * If no menu is specified, then it will close any menu that is open.
         * If it does not find any open menus, it will return `false`.
         *
         * @param menu The menuId or side of the menu to close.
         */

      }, {
        key: "close",
        value: function () {
          var _close = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(menu) {
            var menuEl;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return menu !== undefined ? this.get(menu) : this.getOpen();

                  case 2:
                    menuEl = _context12.sent;

                    if (!(menuEl !== undefined)) {
                      _context12.next = 5;
                      break;
                    }

                    return _context12.abrupt("return", menuEl.close());

                  case 5:
                    return _context12.abrupt("return", false);

                  case 6:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));

          function close(_x7) {
            return _close.apply(this, arguments);
          }

          return close;
        }()
        /**
         * Toggle the menu open or closed. If the menu is already open, it will try to
         * close the menu, otherwise it will try to open it. Returns `false` if
         * a menu is not found.
         *
         * @param menu The menuId or side of the menu to toggle.
         */

      }, {
        key: "toggle",
        value: function () {
          var _toggle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(menu) {
            var menuEl;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.get(menu);

                  case 2:
                    menuEl = _context13.sent;

                    if (!menuEl) {
                      _context13.next = 5;
                      break;
                    }

                    return _context13.abrupt("return", menuEl.toggle());

                  case 5:
                    return _context13.abrupt("return", false);

                  case 6:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));

          function toggle(_x8) {
            return _toggle.apply(this, arguments);
          }

          return toggle;
        }()
        /**
         * Enable or disable a menu. Disabling a menu will not allow gestures
         * for that menu or any calls to open it. This is useful when there are
         * multiple menus on the same side and only one of them should be allowed
         * to open. Enabling a menu will automatically disable all other menus
         * on that side.
         *
         * @param enable If `true`, the menu should be enabled.
         * @param menu The menuId or side of the menu to enable or disable.
         */

      }, {
        key: "enable",
        value: function () {
          var _enable2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(_enable, menu) {
            var menuEl;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.get(menu);

                  case 2:
                    menuEl = _context14.sent;

                    if (menuEl) {
                      menuEl.disabled = !_enable;
                    }

                    return _context14.abrupt("return", menuEl);

                  case 5:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));

          function enable(_x9, _x10) {
            return _enable2.apply(this, arguments);
          }

          return enable;
        }()
        /**
         * Enable or disable the ability to swipe open the menu.
         *
         * @param enable If `true`, the menu swipe gesture should be enabled.
         * @param menu The menuId or side of the menu to enable or disable the swipe gesture on.
         */

      }, {
        key: "swipeGesture",
        value: function () {
          var _swipeGesture = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(enable, menu) {
            var menuEl;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.get(menu);

                  case 2:
                    menuEl = _context15.sent;

                    if (menuEl) {
                      menuEl.swipeGesture = enable;
                    }

                    return _context15.abrupt("return", menuEl);

                  case 5:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));

          function swipeGesture(_x11, _x12) {
            return _swipeGesture.apply(this, arguments);
          }

          return swipeGesture;
        }()
        /**
         * Get whether or not the menu is open. Returns `true` if the specified
         * menu is open. If a menu is not specified, it will return `true` if
         * any menu is currently open.
         *
         * @param menu The menuId or side of the menu that is being checked.
         */

      }, {
        key: "isOpen",
        value: function () {
          var _isOpen = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(menu) {
            var menuEl, _menuEl;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    if (!(menu != null)) {
                      _context16.next = 7;
                      break;
                    }

                    _context16.next = 3;
                    return this.get(menu);

                  case 3:
                    menuEl = _context16.sent;
                    return _context16.abrupt("return", menuEl !== undefined && menuEl.isOpen());

                  case 7:
                    _context16.next = 9;
                    return this.getOpen();

                  case 9:
                    _menuEl = _context16.sent;
                    return _context16.abrupt("return", _menuEl !== undefined);

                  case 11:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));

          function isOpen(_x13) {
            return _isOpen.apply(this, arguments);
          }

          return isOpen;
        }()
        /**
         * Get whether or not the menu is enabled. Returns `true` if the
         * specified menu is enabled. Returns `false` if a menu is disabled
         * or not found.
         *
         * @param menu The menuId or side of the menu that is being checked.
         */

      }, {
        key: "isEnabled",
        value: function () {
          var _isEnabled = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(menu) {
            var menuEl;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.get(menu);

                  case 2:
                    menuEl = _context17.sent;

                    if (!menuEl) {
                      _context17.next = 5;
                      break;
                    }

                    return _context17.abrupt("return", !menuEl.disabled);

                  case 5:
                    return _context17.abrupt("return", false);

                  case 6:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));

          function isEnabled(_x14) {
            return _isEnabled.apply(this, arguments);
          }

          return isEnabled;
        }()
        /**
         * Get a menu instance. If a menu is not provided then it will return the first
         * menu found. If the specified menu is `start` or `end`, then it will return the
         * enabled menu on that side. Otherwise, it will try to find the menu using the menu's
         * `id` property. If a menu is not found then it will return `null`.
         *
         * @param menu The menuId or side of the menu.
         */

      }, {
        key: "get",
        value: function () {
          var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(menu) {
            var menuRef, menuEl;
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.waitUntilReady();

                  case 2:
                    if (!(menu === 'start' || menu === 'end')) {
                      _context18.next = 9;
                      break;
                    }

                    // there could be more than one menu on the same side
                    // so first try to get the enabled one
                    menuRef = this.find(function (m) {
                      return m.side === menu && !m.disabled;
                    });

                    if (!menuRef) {
                      _context18.next = 6;
                      break;
                    }

                    return _context18.abrupt("return", menuRef);

                  case 6:
                    return _context18.abrupt("return", this.find(function (m) {
                      return m.side === menu;
                    }));

                  case 9:
                    if (!(menu != null)) {
                      _context18.next = 11;
                      break;
                    }

                    return _context18.abrupt("return", this.find(function (m) {
                      return m.menuId === menu;
                    }));

                  case 11:
                    // return the first enabled menu
                    menuEl = this.find(function (m) {
                      return !m.disabled;
                    });

                    if (!menuEl) {
                      _context18.next = 14;
                      break;
                    }

                    return _context18.abrupt("return", menuEl);

                  case 14:
                    return _context18.abrupt("return", this.menus.length > 0 ? this.menus[0].el : undefined);

                  case 15:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));

          function get(_x15) {
            return _get.apply(this, arguments);
          }

          return get;
        }()
        /**
         * Get the instance of the opened menu. Returns `null` if a menu is not found.
         */

      }, {
        key: "getOpen",
        value: function () {
          var _getOpen = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this.waitUntilReady();

                  case 2:
                    return _context19.abrupt("return", this.getOpenSync());

                  case 3:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));

          function getOpen() {
            return _getOpen.apply(this, arguments);
          }

          return getOpen;
        }()
        /**
         * Get all menu instances.
         */

      }, {
        key: "getMenus",
        value: function () {
          var _getMenus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.waitUntilReady();

                  case 2:
                    return _context20.abrupt("return", this.getMenusSync());

                  case 3:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));

          function getMenus() {
            return _getMenus.apply(this, arguments);
          }

          return getMenus;
        }()
        /**
         * Get whether or not a menu is animating. Returns `true` if any
         * menu is currently animating.
         */

      }, {
        key: "isAnimating",
        value: function () {
          var _isAnimating = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.waitUntilReady();

                  case 2:
                    return _context21.abrupt("return", this.isAnimatingSync());

                  case 3:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));

          function isAnimating() {
            return _isAnimating.apply(this, arguments);
          }

          return isAnimating;
        }()
        /**
         * Registers a new animation that can be used with any `ion-menu` by
         * passing the name of the animation in its `type` property.
         *
         * @param name The name of the animation to register.
         * @param animation The animation function to register.
         */

      }, {
        key: "registerAnimation",
        value: function () {
          var _registerAnimation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(name, animation) {
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    this.menuAnimations.set(name, animation);

                  case 1:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));

          function registerAnimation(_x16, _x17) {
            return _registerAnimation.apply(this, arguments);
          }

          return registerAnimation;
        }()
        /**
         * @internal
         */

      }, {
        key: "_getInstance",
        value: function _getInstance() {
          return Promise.resolve(this);
        }
      }, {
        key: "_register",
        value: function _register(menu) {
          var menus = this.menus;

          if (menus.indexOf(menu) < 0) {
            if (!menu.disabled) {
              this._setActiveMenu(menu);
            }

            menus.push(menu);
          }
        }
      }, {
        key: "_unregister",
        value: function _unregister(menu) {
          var index = this.menus.indexOf(menu);

          if (index > -1) {
            this.menus.splice(index, 1);
          }
        }
      }, {
        key: "_setActiveMenu",
        value: function _setActiveMenu(menu) {
          // if this menu should be enabled
          // then find all the other menus on this same side
          // and automatically disable other same side menus
          var side = menu.side;
          this.menus.filter(function (m) {
            return m.side === side && m !== menu;
          }).forEach(function (m) {
            return m.disabled = true;
          });
        }
      }, {
        key: "_setOpen",
        value: function () {
          var _setOpen3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(menu, shouldOpen, animated) {
            var openedMenu;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    if (!this.isAnimatingSync()) {
                      _context23.next = 2;
                      break;
                    }

                    return _context23.abrupt("return", false);

                  case 2:
                    if (!shouldOpen) {
                      _context23.next = 9;
                      break;
                    }

                    _context23.next = 5;
                    return this.getOpen();

                  case 5:
                    openedMenu = _context23.sent;

                    if (!(openedMenu && menu.el !== openedMenu)) {
                      _context23.next = 9;
                      break;
                    }

                    _context23.next = 9;
                    return openedMenu.setOpen(false, false);

                  case 9:
                    return _context23.abrupt("return", menu._setOpen(shouldOpen, animated));

                  case 10:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));

          function _setOpen(_x18, _x19, _x20) {
            return _setOpen3.apply(this, arguments);
          }

          return _setOpen;
        }()
      }, {
        key: "_createAnimation",
        value: function () {
          var _createAnimation2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(type, menuCmp) {
            var animationBuilder, animation;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    animationBuilder = this.menuAnimations.get(type);

                    if (animationBuilder) {
                      _context24.next = 3;
                      break;
                    }

                    throw new Error('animation not registered');

                  case 3:
                    _context24.next = 5;
                    return __webpack_require__.e(
                    /*! import() | index-d9adb105-js */
                    "index-d9adb105-js").then(__webpack_require__.bind(null,
                    /*! ./index-d9adb105.js */
                    "./node_modules/@ionic/core/dist/esm/index-d9adb105.js")).then(function (mod) {
                      return mod.create(animationBuilder, null, menuCmp);
                    });

                  case 5:
                    animation = _context24.sent;

                    if (!_chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true)) {
                      animation.duration(0);
                    }

                    return _context24.abrupt("return", animation);

                  case 8:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));

          function _createAnimation(_x21, _x22) {
            return _createAnimation2.apply(this, arguments);
          }

          return _createAnimation;
        }()
      }, {
        key: "getOpenSync",
        value: function getOpenSync() {
          return this.find(function (m) {
            return m._isOpen;
          });
        }
      }, {
        key: "getMenusSync",
        value: function getMenusSync() {
          return this.menus.map(function (menu) {
            return menu.el;
          });
        }
      }, {
        key: "isAnimatingSync",
        value: function isAnimatingSync() {
          return this.menus.some(function (menu) {
            return menu.isAnimating;
          });
        }
      }, {
        key: "find",
        value: function find(predicate) {
          var instance = this.menus.find(predicate);

          if (instance !== undefined) {
            return instance.el;
          }

          return undefined;
        }
      }, {
        key: "waitUntilReady",
        value: function waitUntilReady() {
          return Promise.all(Array.from(document.querySelectorAll('ion-menu')).map(function (menu) {
            return menu.componentOnReady();
          }));
        }
      }], [{
        key: "style",
        get: function get() {
          return ".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{-webkit-box-shadow:8px 0 42px rgba(0,0,0,.08);box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}";
        }
      }]);

      return MenuController;
    }();

    var MenuToggle = /*#__PURE__*/function () {
      function MenuToggle(hostRef) {
        var _this5 = this;

        _classCallCheck(this, MenuToggle);

        Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visible = false;
        /**
         * Automatically hides the content when the corresponding menu is not active.
         *
         * By default, it's `true`. Change it to `false` in order to
         * keep `ion-menu-toggle` always visible regardless the state of the menu.
         */

        this.autoHide = true;
        this.setVisibility = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
          return regeneratorRuntime.wrap(function _callee25$(_context25) {
            while (1) {
              switch (_context25.prev = _context25.next) {
                case 0:
                  _context25.next = 2;
                  return updateVisibility(_this5.menu);

                case 2:
                  _this5.visible = _context25.sent;

                case 3:
                case "end":
                  return _context25.stop();
              }
            }
          }, _callee25);
        }));
        this.onClick = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
          return regeneratorRuntime.wrap(function _callee26$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  _context26.next = 2;
                  return toggleMenu(_this5.menu);

                case 2:
                case "end":
                  return _context26.stop();
              }
            }
          }, _callee26);
        }));
      }

      _createClass(MenuToggle, [{
        key: "componentDidLoad",
        value: function () {
          var _componentDidLoad2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return this.setVisibility();

                  case 2:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));

          function componentDidLoad() {
            return _componentDidLoad2.apply(this, arguments);
          }

          return componentDidLoad;
        }()
      }, {
        key: "visibilityChanged",
        value: function () {
          var _visibilityChanged2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return this.setVisibility();

                  case 2:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));

          function visibilityChanged() {
            return _visibilityChanged2.apply(this, arguments);
          }

          return visibilityChanged;
        }()
      }, {
        key: "render",
        value: function render() {
          var _class2;

          var mode = Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          var hidden = this.autoHide && !this.visible;
          return Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.onClick,
            "aria-hidden": hidden ? 'true' : null,
            "class": (_class2 = {}, _defineProperty(_class2, mode, true), _defineProperty(_class2, 'menu-toggle-hidden', hidden), _class2)
          }, Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host(.menu-toggle-hidden){display:none}";
        }
      }]);

      return MenuToggle;
    }();
    /***/

  }
}]);
//# sourceMappingURL=38-es5.js.map