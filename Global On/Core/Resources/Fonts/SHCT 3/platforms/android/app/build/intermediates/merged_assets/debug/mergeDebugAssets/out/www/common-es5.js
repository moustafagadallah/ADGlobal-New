function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/chunk-00265c49.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/chunk-00265c49.js ***!
    \*************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmChunk00265c49Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/chunk-4e92c885.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/chunk-4e92c885.js ***!
    \*************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmChunk4e92c885Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/chunk-7507b2b9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/chunk-7507b2b9.js ***!
    \*************************************************************/

  /*! exports provided: d, l, s, t */

  /***/
  function node_modulesIonicCoreDistEsmChunk7507b2b9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return deepReady;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "l", function () {
      return lifecycle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return setPageHidden;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "t", function () {
      return transition;
    });
    /* harmony import */


    var _chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chunk-84f6bf13.js */
    "./node_modules/@ionic/core/dist/esm/chunk-84f6bf13.js");
    /* harmony import */


    var _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chunk-94c4865f.js */
    "./node_modules/@ionic/core/dist/esm/chunk-94c4865f.js");

    var iosTransitionAnimation = function iosTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | ios-transition-3107e07c-js */
      "ios-transition-3107e07c-js").then(__webpack_require__.bind(null,
      /*! ./ios.transition-3107e07c.js */
      "./node_modules/@ionic/core/dist/esm/ios.transition-3107e07c.js"));
    };

    var mdTransitionAnimation = function mdTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | md-transition-90b00ffe-js */
      "md-transition-90b00ffe-js").then(__webpack_require__.bind(null,
      /*! ./md.transition-90b00ffe.js */
      "./node_modules/@ionic/core/dist/esm/md.transition-90b00ffe.js"));
    };

    var transition = function transition(opts) {
      return new Promise(function (resolve, reject) {
        Object(_chunk_84f6bf13_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
          beforeTransition(opts);
          runTransition(opts).then(function (result) {
            if (result.animation) {
              result.animation.destroy();
            }

            afterTransition(opts);
            resolve(result);
          }, function (error) {
            afterTransition(opts);
            reject(error);
          });
        });
      });
    };

    var beforeTransition = function beforeTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      setZIndex(enteringEl, leavingEl, opts.direction);

      if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
      } else {
        enteringEl.classList.remove('can-go-back');
      }

      setPageHidden(enteringEl, false);

      if (leavingEl) {
        setPageHidden(leavingEl, false);
      }
    };

    var runTransition = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(opts) {
        var animationBuilder, ani;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return getAnimationBuilder(opts);

              case 2:
                animationBuilder = _context2.sent;
                ani = animationBuilder ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

                return _context2.abrupt("return", ani);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function runTransition(_x6) {
        return _ref2.apply(this, arguments);
      };
    }();

    var afterTransition = function afterTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      enteringEl.classList.remove('ion-page-invisible');

      if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
      }
    };

    var getAnimationBuilder = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(opts) {
        var builder;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!opts.leavingEl || !opts.animated || opts.duration === 0)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", undefined);

              case 2:
                if (!opts.animationBuilder) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", opts.animationBuilder);

              case 4:
                if (!(opts.mode === 'ios')) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 7;
                return iosTransitionAnimation();

              case 7:
                _context3.t0 = _context3.sent.iosTransitionAnimation;
                _context3.next = 13;
                break;

              case 10:
                _context3.next = 12;
                return mdTransitionAnimation();

              case 12:
                _context3.t0 = _context3.sent.mdTransitionAnimation;

              case 13:
                builder = _context3.t0;
                return _context3.abrupt("return", builder);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getAnimationBuilder(_x7) {
        return _ref3.apply(this, arguments);
      };
    }();

    var animation = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(animationBuilder, opts) {
        var trans;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return waitForReady(opts, true);

              case 2:
                _context4.next = 4;
                return __webpack_require__.e(
                /*! import() | index-d9adb105-js */
                "index-d9adb105-js").then(__webpack_require__.bind(null,
                /*! ./index-d9adb105.js */
                "./node_modules/@ionic/core/dist/esm/index-d9adb105.js")).then(function (mod) {
                  return mod.create(animationBuilder, opts.baseEl, opts);
                });

              case 4:
                trans = _context4.sent;
                fireWillEvents(opts.enteringEl, opts.leavingEl);
                _context4.next = 8;
                return playTransition(trans, opts);

              case 8:
                if (opts.progressCallback) {
                  opts.progressCallback(undefined);
                }

                if (trans.hasCompleted) {
                  fireDidEvents(opts.enteringEl, opts.leavingEl);
                }

                return _context4.abrupt("return", {
                  hasCompleted: trans.hasCompleted,
                  animation: trans
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function animation(_x8, _x9) {
        return _ref4.apply(this, arguments);
      };
    }();

    var noAnimation = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(opts) {
        var enteringEl, leavingEl;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                enteringEl = opts.enteringEl;
                leavingEl = opts.leavingEl;
                _context5.next = 4;
                return waitForReady(opts, false);

              case 4:
                fireWillEvents(enteringEl, leavingEl);
                fireDidEvents(enteringEl, leavingEl);
                return _context5.abrupt("return", {
                  hasCompleted: true
                });

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function noAnimation(_x10) {
        return _ref5.apply(this, arguments);
      };
    }();

    var waitForReady = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(opts, defaultDeep) {
        var deep, promises;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
                promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
                _context6.next = 4;
                return Promise.all(promises);

              case 4:
                _context6.next = 6;
                return notifyViewReady(opts.viewIsReady, opts.enteringEl);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function waitForReady(_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }();

    var notifyViewReady = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(viewIsReady, enteringEl) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!viewIsReady) {
                  _context7.next = 3;
                  break;
                }

                _context7.next = 3;
                return viewIsReady(enteringEl);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function notifyViewReady(_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }();

    var playTransition = function playTransition(trans, opts) {
      var progressCallback = opts.progressCallback;
      var promise = new Promise(function (resolve) {
        return trans.onFinish(resolve);
      }); // cool, let's do this, start the transition

      if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart();
        progressCallback(trans);
      } else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
      } // create a callback for when the animation is done


      return promise;
    };

    var fireWillEvents = function fireWillEvents(enteringEl, leavingEl) {
      lifecycle(leavingEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
      lifecycle(enteringEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
    };

    var fireDidEvents = function fireDidEvents(enteringEl, leavingEl) {
      lifecycle(enteringEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
      lifecycle(leavingEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
    };

    var lifecycle = function lifecycle(el, eventName) {
      if (el) {
        var ev = new CustomEvent(eventName, {
          bubbles: false,
          cancelable: false
        });
        el.dispatchEvent(ev);
      }
    };

    var shallowReady = function shallowReady(el) {
      if (el && el.componentOnReady) {
        return el.componentOnReady();
      }

      return Promise.resolve();
    };

    var deepReady = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(el) {
        var element, stencilEl;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                element = el;

                if (!element) {
                  _context8.next = 10;
                  break;
                }

                if (!(element.componentOnReady != null)) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return element.componentOnReady();

              case 5:
                stencilEl = _context8.sent;

                if (!(stencilEl != null)) {
                  _context8.next = 8;
                  break;
                }

                return _context8.abrupt("return");

              case 8:
                _context8.next = 10;
                return Promise.all(Array.from(element.children).map(deepReady));

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function deepReady(_x15) {
        return _ref8.apply(this, arguments);
      };
    }();

    var setPageHidden = function setPageHidden(el, hidden) {
      if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
      } else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
      }
    };

    var setZIndex = function setZIndex(enteringEl, leavingEl, direction) {
      if (enteringEl !== undefined) {
        enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
      }

      if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/chunk-ba834eff.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/chunk-ba834eff.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmChunkBa834effJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context9.next = 7;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context9.next = 7;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                _context9.next = 6;
                return router.componentOnReady();

              case 6:
                return _context9.abrupt("return", router.push(url, direction));

              case 7:
                return _context9.abrupt("return", false);

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function openURL(_x16, _x17, _x18) {
        return _ref10.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js ***!
    \*************************************************************/

  /*! exports provided: a, b, c, d, e, f, h, i, n, p, r */

  /***/
  function node_modulesIonicCoreDistEsmChunkC90aaa66Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return rIC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return assert;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return clamp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return debounceEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "e", function () {
      return debounce;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "f", function () {
      return findItemLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hasShadowDom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "i", function () {
      return isEndSide;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "n", function () {
      return now;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "p", function () {
      return pointerCoord;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "r", function () {
      return renderHiddenInput;
    });

    var rIC = function rIC(callback) {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
      } else {
        setTimeout(callback, 32);
      }
    };

    var hasShadowDom = function hasShadowDom(el) {
      return !!el.shadowRoot && !!el.attachShadow;
    };

    var findItemLabel = function findItemLabel(componentEl) {
      var itemEl = componentEl.closest('ion-item');

      if (itemEl) {
        return itemEl.querySelector('ion-label');
      }

      return null;
    };

    var renderHiddenInput = function renderHiddenInput(always, container, name, value, disabled) {
      if (always || hasShadowDom(container)) {
        var input = container.querySelector('input.aux-input');

        if (!input) {
          input = container.ownerDocument.createElement('input');
          input.type = 'hidden';
          input.classList.add('aux-input');
          container.appendChild(input);
        }

        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
      }
    };

    var clamp = function clamp(min, n, max) {
      return Math.max(min, Math.min(n, max));
    };

    var assert = function assert(actual, reason) {
      if (!actual) {
        var message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line

        throw new Error(message);
      }
    };

    var now = function now(ev) {
      return ev.timeStamp || Date.now();
    };

    var pointerCoord = function pointerCoord(ev) {
      // get X coordinates for either a mouse click
      // or a touch depending on the given event
      if (ev) {
        var changedTouches = ev.changedTouches;

        if (changedTouches && changedTouches.length > 0) {
          var touch = changedTouches[0];
          return {
            x: touch.clientX,
            y: touch.clientY
          };
        }

        if (ev.pageX !== undefined) {
          return {
            x: ev.pageX,
            y: ev.pageY
          };
        }
      }

      return {
        x: 0,
        y: 0
      };
    };
    /**
     * @hidden
     * Given a side, return if it should be on the end
     * based on the value of dir
     * @param side the side
     * @param isRTL whether the application dir is rtl
     */


    var isEndSide = function isEndSide(side) {
      var isRTL = document.dir === 'rtl';

      switch (side) {
        case 'start':
          return isRTL;

        case 'end':
          return !isRTL;

        default:
          throw new Error("\"".concat(side, "\" is not a valid value for [side]. Use \"start\" or \"end\" instead."));
      }
    };

    var debounceEvent = function debounceEvent(event, wait) {
      var original = event._original || event;
      return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
      };
    };

    var debounce = function debounce(func) {
      var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var timer;
      return function () {
        clearTimeout(timer);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        timer = setTimeout.apply(void 0, [func, wait].concat(args));
      };
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/chunk-cae2ca23.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/chunk-cae2ca23.js ***!
    \*************************************************************/

  /*! exports provided: s */

  /***/
  function node_modulesIonicCoreDistEsmChunkCae2ca23Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return sanitizeDOMString;
    });
    /**
     * Does a simple sanitization of all elements
     * in an untrusted string
     */


    var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
      try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
          return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */


        var documentFragment = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */

        blockedTags.forEach(function (blockedTag) {
          var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

          for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
            var element = getElementsToRemove[elementIndex];

            if (element.parentNode) {
              element.parentNode.removeChild(element);
            } else {
              documentFragment.removeChild(element);
            }
            /**
             * We still need to sanitize
             * the children of this element
             * as they are left behind
             */


            var childElements = getElementChildren(element);
            /* tslint:disable-next-line */

            for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
              sanitizeElement(childElements[childIndex]);
            }
          }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes

        var documentFragmentChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */

        for (var childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
          sanitizeElement(documentFragmentChildren[childIndex]);
        } // Append document fragment to div


        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

        var getInnerDiv = fragmentDiv.querySelector('div');
        return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
      } catch (err) {
        console.error(err);
        return '';
      }
    };
    /**
     * Clean up current element based on allowed attributes
     * and then recursively dig down into any child elements to
     * clean those up as well
     */


    var sanitizeElement = function sanitizeElement(element) {
      // IE uses childNodes, so ignore nodes that are not elements
      if (element.nodeType && element.nodeType !== 1) {
        return;
      }

      for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes[i];
        var attributeName = attribute.name; // remove non-allowed attribs

        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
          element.removeAttribute(attributeName);
          continue;
        } // clean up any allowed attribs
        // that attempt to do any JS funny-business


        var attributeValue = attribute.value;
        /* tslint:disable-next-line */

        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
          element.removeAttribute(attributeName);
        }
      }
      /**
       * Sanitize any nested children
       */


      var childElements = getElementChildren(element);
      /* tslint:disable-next-line */

      for (var _i = 0; _i < childElements.length; _i++) {
        sanitizeElement(childElements[_i]);
      }
    };
    /**
     * IE doesn't always support .children
     * so we revert to .childNodes instead
     */


    var getElementChildren = function getElementChildren(element) {
      return element.children != null ? element.children : element.childNodes;
    };

    var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
    var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/module.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/module.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinModuleJs(module, exports) {
    module.exports = function (module) {
      if (!module.webpackPolyfill) {
        module.deprecate = function () {};

        module.paths = []; // module.parent = undefined by default

        if (!module.children) module.children = [];
        Object.defineProperty(module, "loaded", {
          enumerable: true,
          get: function get() {
            return module.l;
          }
        });
        Object.defineProperty(module, "id", {
          enumerable: true,
          get: function get() {
            return module.i;
          }
        });
        module.webpackPolyfill = 1;
      }

      return module;
    };
    /***/

  },

  /***/
  "./src/app/services/Lookup/LookUps.ts":
  /*!********************************************!*\
    !*** ./src/app/services/Lookup/LookUps.ts ***!
    \********************************************/

  /*! exports provided: LookUps */

  /***/
  function srcAppServicesLookupLookUpsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LookUps", function () {
      return LookUps;
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

    var LookUps = /*#__PURE__*/function () {
      function LookUps(http) {
        _classCallCheck(this, LookUps);

        this.http = http;
      }

      _createClass(LookUps, [{
        key: "getAllNationalities",
        value: function getAllNationalities() {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/CommonLookup/GetAllNationalities";
          return this.http.get(url_);
        }
      }, {
        key: "getAllCountries",
        value: function getAllCountries() {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/CommonLookup/GetAllCountries";
          return this.http.get(url_);
        }
      }, {
        key: "getAllRegions",
        value: function getAllRegions(filter, ParentId) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/CommonLookup/GetAllRegions?";
          if (filter !== undefined) url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
          if (ParentId !== undefined) url_ += "ParentId=" + encodeURIComponent("" + ParentId) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }, {
        key: "getAllCities",
        value: function getAllCities(filter, ParentId) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/CommonLookup/GetAllCities?";
          if (filter !== undefined) url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
          if (ParentId !== undefined) url_ += "ParentId=" + encodeURIComponent("" + ParentId) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }, {
        key: "getAllDistricts",
        value: function getAllDistricts(filter, ParentId) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/CommonLookup/GetAllDistricts?";
          if (filter !== undefined) url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
          if (ParentId !== undefined) url_ += "ParentId=" + encodeURIComponent("" + ParentId) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
        /**
          * @return Success
          */

      }, {
        key: "getLookupsForDropDown",
        value: function getLookupsForDropDown(lookupTypeEnum) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/CommonLookup/GetLookupsForDropDown?";
          if (lookupTypeEnum === undefined || lookupTypeEnum === null) throw new Error("The parameter 'lookupTypeEnum' must be defined and cannot be null.");else url_ += "lookupTypeEnum=" + encodeURIComponent("" + 13) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }, {
        key: "getPatientRelation",
        value: function getPatientRelation(lookupTypeEnum) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/CommonLookup/GetLookupsForDropDown?";
          if (lookupTypeEnum !== undefined) url_ += "lookupTypeEnum=" + encodeURIComponent("" + lookupTypeEnum) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }]);

      return LookUps;
    }();

    LookUps.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LookUps = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LookUps);
    /***/
  },

  /***/
  "./src/app/services/MainMedical/main-medical.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/services/MainMedical/main-medical.service.ts ***!
    \**************************************************************/

  /*! exports provided: MainMedicalService */

  /***/
  function srcAppServicesMainMedicalMainMedicalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainMedicalService", function () {
      return MainMedicalService;
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

    var MainMedicalService = /*#__PURE__*/function () {
      function MainMedicalService(http) {
        _classCallCheck(this, MainMedicalService);

        this.http = http;
      }
      /**
       * @param serviceType (optional)
       * @param filter (optional)
       * @return Success
       */


      _createClass(MainMedicalService, [{
        key: "getAllMainMedical",
        value: function getAllMainMedical(serviceType, filter, AdditionalParameter) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/MainMedicalServices/GetAll?";
          if (serviceType !== undefined) url_ += "ServiceType=" + encodeURIComponent("" + serviceType) + "&";
          if (filter !== undefined) url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
          if (AdditionalParameter !== undefined) url_ += "AdditionalParameter.Language=" + encodeURIComponent("" + AdditionalParameter) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
      }]);

      return MainMedicalService;
    }();

    MainMedicalService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MainMedicalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], MainMedicalService);
    /***/
  },

  /***/
  "./src/app/services/Request/RequestServices.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/Request/RequestServices.ts ***!
    \*****************************************************/

  /*! exports provided: RequestService */

  /***/
  function srcAppServicesRequestRequestServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestService", function () {
      return RequestService;
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

    var RequestService = /*#__PURE__*/function () {
      function RequestService(http) {
        _classCallCheck(this, RequestService);

        this.http = http;
      }
      /**
       * @param filter (optional)
       * @param requestId (optional)
       * @return Success
       */


      _createClass(RequestService, [{
        key: "getRequestServices",
        value: function getRequestServices(filter, requestId) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Request/GetRequestServices?";
          if (filter !== undefined) url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
          if (requestId !== undefined) url_ += "RequestId=" + encodeURIComponent("" + requestId) + "&";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.get(url_);
        }
        /**
        * @param input (optional)
        * @return Success
        */

      }, {
        key: "createOrEditRequest",
        value: function createOrEditRequest(input) {
          var url_ = src_app_enums_baseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl + "/api/services/app/Request/CreateOrEditRequest";
          url_ = url_.replace(/[?&]$/, "");
          return this.http.post(url_, input);
        }
      }]);

      return RequestService;
    }();

    RequestService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], RequestService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map