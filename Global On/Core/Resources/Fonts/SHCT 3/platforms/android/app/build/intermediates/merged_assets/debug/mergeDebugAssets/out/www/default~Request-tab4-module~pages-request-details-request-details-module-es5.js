function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Request-tab4-module~pages-request-details-request-details-module"], {
  /***/
  "./node_modules/angular-archwizard/fesm2015/angular-archwizard.js":
  /*!************************************************************************!*\
    !*** ./node_modules/angular-archwizard/fesm2015/angular-archwizard.js ***!
    \************************************************************************/

  /*! exports provided: ArchwizardModule, BaseNavigationMode, CompletedStepDirective, ConfigurableNavigationMode, EnableBackLinksDirective, GoToStepDirective, MovingDirection, NavigationModeDirective, NextStepDirective, OptionalStepDirective, PreviousStepDirective, ResetWizardDirective, SelectedStepDirective, WizardCompletionStep, WizardCompletionStepComponent, WizardCompletionStepDirective, WizardComponent, WizardNavigationBarComponent, WizardStep, WizardStepComponent, WizardStepDirective, WizardStepTitleDirective, isStepId, isStepIndex, isStepOffset, ɵa */

  /***/
  function node_modulesAngularArchwizardFesm2015AngularArchwizardJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArchwizardModule", function () {
      return ArchwizardModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseNavigationMode", function () {
      return BaseNavigationMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompletedStepDirective", function () {
      return CompletedStepDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurableNavigationMode", function () {
      return ConfigurableNavigationMode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnableBackLinksDirective", function () {
      return EnableBackLinksDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoToStepDirective", function () {
      return GoToStepDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovingDirection", function () {
      return MovingDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationModeDirective", function () {
      return NavigationModeDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NextStepDirective", function () {
      return NextStepDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionalStepDirective", function () {
      return OptionalStepDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviousStepDirective", function () {
      return PreviousStepDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetWizardDirective", function () {
      return ResetWizardDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectedStepDirective", function () {
      return SelectedStepDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WizardCompletionStep", function () {
      return WizardCompletionStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WizardCompletionStepComponent", function () {
      return WizardCompletionStepComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WizardCompletionStepDirective", function () {
      return WizardCompletionStepDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WizardComponent", function () {
      return WizardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WizardNavigationBarComponent", function () {
      return WizardNavigationBarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WizardStep", function () {
      return WizardStep;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WizardStepComponent", function () {
      return WizardStepComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WizardStepDirective", function () {
      return WizardStepDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WizardStepTitleDirective", function () {
      return WizardStepTitleDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isStepId", function () {
      return isStepId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isStepIndex", function () {
      return isStepIndex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isStepOffset", function () {
      return isStepOffset;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return WizardStepSymbolDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `awWizardStepSymbol` directive can be used as an alternative to the `navigationSymbol` input of a [[WizardStep]]
     * to define the step symbol inside the navigation bar.  This way step symbol may contain arbitrary content.
     *
     * ### Syntax
     *
     * ```html
     * <ng-template awWizardStepSymbol>
     *     ...
     * </ng-template>
     * ```
     */


    var WizardStepSymbolDirective =
    /**
     * Constructor
     *
     * @param {?} templateRef A reference to the content of the `ng-template` that contains this [[WizardStepSymbolDirective]]
     */
    function WizardStepSymbolDirective(templateRef) {
      _classCallCheck(this, WizardStepSymbolDirective);

      this.templateRef = templateRef;
    };

    WizardStepSymbolDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[awStepSymbol], ng-template[awWizardStepSymbol]'
      }]
    }];
    /** @nocollapse */

    WizardStepSymbolDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `awWizardStepTitle` directive can be used as an alternative to the `stepTitle` input of a [[WizardStep]]
     * to define the content of a step title inside the navigation bar.
     * This step title can be freely created and can contain more than only plain text
     *
     * ### Syntax
     *
     * ```html
     * <ng-template awWizardStepTitle>
     *     ...
     * </ng-template>
     * ```
     *
     * @author Marc Arndt
     */


    var WizardStepTitleDirective =
    /**
     * Constructor
     *
     * @param {?} templateRef A reference to the content of the `ng-template` that contains this [[WizardStepTitleDirective]]
     */
    function WizardStepTitleDirective(templateRef) {
      _classCallCheck(this, WizardStepTitleDirective);

      this.templateRef = templateRef;
    };

    WizardStepTitleDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[awStepTitle], ng-template[awWizardStepTitle]'
      }]
    }];
    /** @nocollapse */

    WizardStepTitleDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Basic functionality every type of wizard step needs to provide
     *
     * @author Marc Arndt
     * @abstract
     */


    var WizardStep = /*#__PURE__*/function () {
      function WizardStep() {
        _classCallCheck(this, WizardStep);

        /**
         * A symbol property, which contains an optional symbol for the step inside the navigation bar.
         * Takes effect when `stepSymbolTemplate` is not defined or null.
         */
        this.navigationSymbol = {
          symbol: ''
        };
        /**
         * A boolean describing if the wizard step is currently selected
         */

        this.selected = false;
        /**
         * A boolean describing if the wizard step has been completed
         */

        this.completed = false;
        /**
         * A boolean describing if the wizard step is shown as completed when the wizard is presented to the user
         *
         * Users will typically use `CompletedStepDirective` to set this flag
         */

        this.initiallyCompleted = false;
        /**
         * A boolean describing if the wizard step is being edited after being competed
         *
         * This flag can only be true when `selected` is true.
         */

        this.editing = false;
        /**
         * A boolean describing, if the wizard step should be selected by default, i.e. after the wizard has been initialized as the initial step
         */

        this.defaultSelected = false;
        /**
         * A boolean describing if the wizard step is an optional step
         */

        this.optional = false;
        /**
         * A function or boolean deciding, if this step can be entered
         */

        this.canEnter = true;
        /**
         * A function or boolean deciding, if this step can be exited
         */

        this.canExit = true;
        /**
         * This [[EventEmitter]] is called when the step is entered.
         * The bound method should be used to do initialization work.
         */

        this.stepEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */

        this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * Returns if this wizard step should be visible to the user.
       * If the step should be visible to the user false is returned, otherwise true
       * @return {?}
       */


      _createClass(WizardStep, [{
        key: "enter",

        /**
         * A function called when the step is entered
         *
         * @param {?} direction The direction in which the step is entered
         * @return {?}
         */
        value: function enter(direction) {
          this.stepEnter.emit(direction);
        }
        /**
         * A function called when the step is exited
         *
         * @param {?} direction The direction in which the step is exited
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit(direction) {
          this.stepExit.emit(direction);
        }
        /**
         * This method returns true, if this wizard step can be entered from the given direction.
         * Because this method depends on the value `canEnter`, it will throw an error, if `canEnter` is neither a boolean
         * nor a function.
         *
         * @throws An `Error` is thrown if `anEnter` is neither a function nor a boolean
         * @param {?} direction The direction in which this step should be entered
         * @return {?} A [[Promise]] containing `true`, if the step can be entered in the given direction, false otherwise
         */

      }, {
        key: "canEnterStep",
        value: function canEnterStep(direction) {
          return WizardStep.canTransitionStep(this.canEnter, direction);
        }
        /**
         * This method returns true, if this wizard step can be exited into given direction.
         * Because this method depends on the value `canExit`, it will throw an error, if `canExit` is neither a boolean
         * nor a function.
         *
         * @throws An `Error` is thrown if `canExit` is neither a function nor a boolean
         * @param {?} direction The direction in which this step should be left
         * @return {?} A [[Promise]] containing `true`, if the step can be exited in the given direction, false otherwise
         */

      }, {
        key: "canExitStep",
        value: function canExitStep(direction) {
          return WizardStep.canTransitionStep(this.canExit, direction);
        }
      }, {
        key: "hidden",
        get: function get() {
          return !this.selected;
        }
        /**
         * This method returns true, if this wizard step can be transitioned with a given direction.
         * Transitioned in this case means either entered or exited, depending on the given `condition` parameter.
         *
         * @throws An `Error` is thrown if `condition` is neither a function nor a boolean
         * @private
         * @param {?} condition A condition variable, deciding if the step can be transitioned
         * @param {?} direction The direction in which this step should be transitioned
         * @return {?} A [[Promise]] containing `true`, if this step can transitioned in the given direction
         */

      }], [{
        key: "canTransitionStep",
        value: function canTransitionStep(condition, direction) {
          if (typeof condition === typeof true) {
            return Promise.resolve(
            /** @type {?} */
            condition);
          } else if (condition instanceof Function) {
            return Promise.resolve(condition(direction));
          } else {
            return Promise.reject(new Error("Input value '".concat(condition, "' is neither a boolean nor a function")));
          }
        }
      }]);

      return WizardStep;
    }();

    WizardStep.propDecorators = {
      stepTitleTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [WizardStepTitleDirective, {
          "static": false
        }]
      }],
      stepSymbolTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [WizardStepSymbolDirective, {
          "static": false
        }]
      }],
      stepId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      stepTitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      navigationSymbol: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      canEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      canExit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      stepEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      stepExit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      hidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['hidden']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Basic functionality every wizard completion step needs to provide
     *
     * @author Marc Arndt
     * @abstract
     */

    var WizardCompletionStep = /*#__PURE__*/function (_WizardStep) {
      _inherits(WizardCompletionStep, _WizardStep);

      var _super = _createSuper(WizardCompletionStep);

      function WizardCompletionStep() {
        var _this;

        _classCallCheck(this, WizardCompletionStep);

        _this = _super.apply(this, arguments);
        /**
         * @inheritDoc
         */

        _this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @inheritDoc
         */

        _this.canExit = false;
        return _this;
      }
      /**
       * @inheritDoc
       * @param {?} direction
       * @return {?}
       */


      _createClass(WizardCompletionStep, [{
        key: "enter",
        value: function enter(direction) {
          this.completed = true;
          this.stepEnter.emit(direction);
        }
        /**
         * @inheritDoc
         * @param {?} direction
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit(direction) {
          // set this completion step as incomplete (unless it happens to be initiallyCompleted)
          this.completed = this.initiallyCompleted;
          this.stepExit.emit(direction);
        }
      }]);

      return WizardCompletionStep;
    }(WizardStep);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `aw-wizard-completion-step` component can be used to define a completion/success step at the end of your wizard
     * After a `aw-wizard-completion-step` has been entered, it has the characteristic that the user is blocked from
     * leaving it again to a previous step.
     * In addition entering a `aw-wizard-completion-step` automatically sets the `aw-wizard` and all steps inside the `aw-wizard`
     * as completed.
     *
     * ### Syntax
     *
     * ```html
     * <aw-wizard-completion-step [stepTitle]="title of the wizard step"
     *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'navigation symbol font family' }"
     *    (stepEnter)="event emitter to be called when the wizard step is entered"
     *    (stepExit)="event emitter to be called when the wizard step is exited">
     *    ...
     * </aw-wizard-completion-step>
     * ```
     *
     * ### Example
     *
     * ```html
     * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
     *    ...
     * </aw-wizard-completion-step>
     * ```
     *
     * With a navigation symbol from the `font-awesome` font:
     *
     * ```html
     * <aw-wizard-completion-step stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
     *    ...
     * </aw-wizard-completion-step>
     * ```
     *
     * @author Marc Arndt
     */


    var WizardCompletionStepComponent = /*#__PURE__*/function (_WizardCompletionStep) {
      _inherits(WizardCompletionStepComponent, _WizardCompletionStep);

      var _super2 = _createSuper(WizardCompletionStepComponent);

      function WizardCompletionStepComponent() {
        _classCallCheck(this, WizardCompletionStepComponent);

        return _super2.apply(this, arguments);
      }

      return WizardCompletionStepComponent;
    }(WizardCompletionStep);

    WizardCompletionStepComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'aw-wizard-completion-step',
        template: "<ng-content></ng-content>\n",
        providers: [{
          provide: WizardStep,
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return WizardCompletionStepComponent;
          })
        }, {
          provide: WizardCompletionStep,
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return WizardCompletionStepComponent;
          })
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The direction in which a step transition was made
     *
     * @author Marc Arndt
     */

    /** @enum {number} */

    var MovingDirection = {
      /**
       * A forward step transition
       */
      Forwards: 0,

      /**
       * A backward step transition
       */
      Backwards: 1,

      /**
       * No step transition was done
       */
      Stay: 2
    };
    MovingDirection[MovingDirection.Forwards] = 'Forwards';
    MovingDirection[MovingDirection.Backwards] = 'Backwards';
    MovingDirection[MovingDirection.Stay] = 'Stay';
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base implementation of [[NavigationMode]]
     *
     * Note: Built-in [[NavigationMode]] classes should be stateless, allowing the library user to easily create
     * an instance of a particular [[NavigationMode]] class and pass it to `<aw-wizard [navigationMode]="...">`.
     *
     * @author Marc Arndt
     * @abstract
     */

    var BaseNavigationMode = /*#__PURE__*/function () {
      function BaseNavigationMode() {
        _classCallCheck(this, BaseNavigationMode);
      }

      _createClass(BaseNavigationMode, [{
        key: "canGoToStep",

        /**
         * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
         *
         * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
         * Navigation by navigation bar is governed by [[isNavigable]].
         *
         * In this implementation, a destination wizard step can be entered if:
         * - it exists
         * - the current step can be exited in the direction of the destination step
         * - the destination step can be entered in the direction from the current step
         *
         * Subclasses can impose additional restrictions, see [[canTransitionToStep]].
         *
         * @param {?} wizard The wizard component to operate on
         * @param {?} destinationIndex The index of the destination step
         * @return {?} A [[Promise]] containing `true`, if the destination step can be transitioned to and `false` otherwise
         */
        value: function canGoToStep(wizard, destinationIndex) {
          var _this2 = this;

          /** @type {?} */
          var hasStep = wizard.hasStep(destinationIndex);
          /** @type {?} */

          var movingDirection = wizard.getMovingDirection(destinationIndex);
          /** @type {?} */

          var canExitCurrentStep =
          /**
          * @param {?} previous
          * @return {?}
          */
          function canExitCurrentStep(previous) {
            return previous && wizard.currentStep.canExitStep(movingDirection);
          };
          /** @type {?} */


          var canEnterDestinationStep =
          /**
          * @param {?} previous
          * @return {?}
          */
          function canEnterDestinationStep(previous) {
            return previous && wizard.getStepAtIndex(destinationIndex).canEnterStep(movingDirection);
          };
          /** @type {?} */


          var canTransitionToStep =
          /**
          * @param {?} previous
          * @return {?}
          */
          function canTransitionToStep(previous) {
            return previous && _this2.canTransitionToStep(wizard, destinationIndex);
          };

          return Promise.resolve(hasStep).then(canTransitionToStep) // Apply user-defined checks at the end.  They can involve user interaction
          // which is better to be avoided if navigation mode does not actually allow the transition
          // (`canTransitionToStep` returns `false`).
          .then(canExitCurrentStep).then(canEnterDestinationStep);
        }
        /**
         * Imposes additional restrictions for `canGoToStep` in current navigation mode.
         *
         * The base implementation allows transition iff the given step is navigable from the navigation bar (see `isNavigable`).
         * However, in some navigation modes `canTransitionToStep` can be more relaxed to allow navigation to certain steps
         * by previous/next buttons, but not using the navigation bar.
         *
         * @protected
         * @param {?} wizard The wizard component to operate on
         * @param {?} destinationIndex The index of the destination step
         * @return {?} `true`, if the destination step can be transitioned to and `false` otherwise
         */

      }, {
        key: "canTransitionToStep",
        value: function canTransitionToStep(wizard, destinationIndex) {
          return this.isNavigable(wizard, destinationIndex);
        }
        /**
         * Tries to transition to the wizard step, as denoted by the given destination index.
         *
         * When entering the destination step, the following actions are done:
         * - the old current step is set as completed
         * - the old current step is set as unselected
         * - the old current step is exited
         * - the destination step is set as selected
         * - the destination step is entered
         *
         * When the destination step couldn't be entered, the following actions are done:
         * - the current step is exited and entered in the direction `MovingDirection.Stay`
         *
         * @param {?} wizard The wizard component to operate on
         * @param {?} destinationIndex The index of the destination wizard step, which should be entered
         * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
         * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
         * @return {?}
         */

      }, {
        key: "goToStep",
        value: function goToStep(wizard, destinationIndex, preFinalize, postFinalize) {
          var _this3 = this;

          this.canGoToStep(wizard, destinationIndex).then(
          /**
          * @param {?} navigationAllowed
          * @return {?}
          */
          function (navigationAllowed) {
            if (navigationAllowed) {
              // the current step can be exited in the given direction

              /** @type {?} */
              var movingDirection = wizard.getMovingDirection(destinationIndex);
              /* istanbul ignore if */

              if (preFinalize) {
                preFinalize.emit();
              } // leave current step


              wizard.currentStep.completed = true;
              wizard.currentStep.exit(movingDirection);
              wizard.currentStep.editing = false;
              wizard.currentStep.selected = false;

              _this3.transition(wizard, destinationIndex); // remember if the next step is already completed before entering it to properly set `editing` flag

              /** @type {?} */


              var wasCompleted = wizard.completed || wizard.currentStep.completed; // go to next step

              wizard.currentStep.enter(movingDirection);
              wizard.currentStep.selected = true;

              if (wasCompleted) {
                wizard.currentStep.editing = true;
              }
              /* istanbul ignore if */


              if (postFinalize) {
                postFinalize.emit();
              }
            } else {
              // if the current step can't be left, reenter the current step
              wizard.currentStep.exit(MovingDirection.Stay);
              wizard.currentStep.enter(MovingDirection.Stay);
            }
          });
        }
        /**
         * Transitions the wizard to the given step index.
         *
         * Can perform additional actions in particular navigation mode implementations.
         *
         * @protected
         * @param {?} wizard The wizard component to operate on
         * @param {?} destinationIndex The index of the destination wizard step
         * @return {?}
         */

      }, {
        key: "transition",
        value: function transition(wizard, destinationIndex) {
          wizard.currentStepIndex = destinationIndex;
        }
        /**
         * Resets the state of this wizard.
         *
         * A reset transitions the wizard automatically to the first step and sets all steps as incomplete.
         * In addition the whole wizard is set as incomplete.
         *
         * @param {?} wizard The wizard component to operate on
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(wizard) {
          this.ensureCanReset(wizard); // reset the step internal state

          wizard.wizardSteps.forEach(
          /**
          * @param {?} step
          * @return {?}
          */
          function (step) {
            step.completed = step.initiallyCompleted;
            step.selected = false;
            step.editing = false;
          }); // set the first step as the current step

          wizard.currentStepIndex = wizard.defaultStepIndex;
          wizard.currentStep.selected = true;
          wizard.currentStep.enter(MovingDirection.Forwards);
        }
        /**
         * Checks if wizard configuration allows to perform reset.
         *
         * A check failure is indicated by throwing an `Error` with the message discribing the discovered misconfiguration issue.
         *
         * Can include additional checks in particular navigation mode implementations.
         *
         * @throws An `Error` is thrown, if a micconfiguration issue is discovered.
         * @protected
         * @param {?} wizard The wizard component to operate on
         * @return {?}
         */

      }, {
        key: "ensureCanReset",
        value: function ensureCanReset(wizard) {
          // the wizard doesn't contain a step with the default step index
          if (!wizard.hasStep(wizard.defaultStepIndex)) {
            throw new Error("The wizard doesn't contain a step with index ".concat(wizard.defaultStepIndex));
          }
        }
      }]);

      return BaseNavigationMode;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The default navigation mode used by [[WizardComponent]] and [[NavigationModeDirective]].
     *
     * It is parameterized with two navigation policies passed to constructor:
     *
     * - [[navigateBackward]] policy controls whether wizard steps before the current step are navigable:
     *
     *   - `"deny"` -- the steps are not navigable
     *   - `"allow"` -- the steps are navigable
     *   - If the corresponding constructor argument is omitted or is `null` or `undefined`,
     *     then the default value is applied which is `"deny"`
     *
     * - [[navigateForward]] policy controls whether wizard steps after the current step are navigable:
     *
     *   - `"deny"` -- the steps are not navigable
     *   - `"allow"` -- the steps are navigable
     *   - `"visited"` -- a step is navigable iff it was already visited before
     *   - If the corresponding constructor argument is omitted or is `null` or `undefined`,
     *     then the default value is applied which is `"allow"`
     */


    var ConfigurableNavigationMode = /*#__PURE__*/function (_BaseNavigationMode) {
      _inherits(ConfigurableNavigationMode, _BaseNavigationMode);

      var _super3 = _createSuper(ConfigurableNavigationMode);

      /**
       * Constructor
       *
       * @param {?=} navigateBackward Controls whether wizard steps before the current step are navigable
       * @param {?=} navigateForward Controls whether wizard steps before the current step are navigable
       */
      function ConfigurableNavigationMode() {
        var _this4;

        var navigateBackward = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var navigateForward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, ConfigurableNavigationMode);

        _this4 = _super3.call(this);
        _this4.navigateBackward = navigateBackward;
        _this4.navigateForward = navigateForward;
        _this4.navigateBackward = _this4.navigateBackward || 'allow';
        _this4.navigateForward = _this4.navigateForward || 'deny';
        return _this4;
      }
      /**
       * @inheritDoc
       * @protected
       * @param {?} wizard
       * @param {?} destinationIndex
       * @return {?}
       */


      _createClass(ConfigurableNavigationMode, [{
        key: "canTransitionToStep",
        value: function canTransitionToStep(wizard, destinationIndex) {
          // if the destination step can be navigated to using the navigation bar,
          // it should be accessible with [goToStep] as well
          if (this.isNavigable(wizard, destinationIndex)) {
            return true;
          } // navigation with [goToStep] is permitted if all previous steps
          // to the destination step have been completed or are optional


          return wizard.wizardSteps.filter(
          /**
          * @param {?} step
          * @param {?} index
          * @return {?}
          */
          function (step, index) {
            return index < destinationIndex && index !== wizard.currentStepIndex;
          }).every(
          /**
          * @param {?} step
          * @return {?}
          */
          function (step) {
            return step.completed || step.optional;
          });
        }
        /**
         * @inheritDoc
         * @protected
         * @param {?} wizard
         * @param {?} destinationIndex
         * @return {?}
         */

      }, {
        key: "transition",
        value: function transition(wizard, destinationIndex) {
          if (this.navigateForward === 'deny') {
            // set all steps after the destination step to incomplete
            wizard.wizardSteps.filter(
            /**
            * @param {?} step
            * @param {?} index
            * @return {?}
            */
            function (step, index) {
              return wizard.currentStepIndex > destinationIndex && index > destinationIndex;
            }).forEach(
            /**
            * @param {?} step
            * @return {?}
            */
            function (step) {
              return step.completed = false;
            });
          }

          _get(_getPrototypeOf(ConfigurableNavigationMode.prototype), "transition", this).call(this, wizard, destinationIndex);
        }
        /**
         * @inheritDoc
         * @param {?} wizard
         * @param {?} destinationIndex
         * @return {?}
         */

      }, {
        key: "isNavigable",
        value: function isNavigable(wizard, destinationIndex) {
          // Check if the destination step can be navigated to

          /** @type {?} */
          var destinationStep = wizard.getStepAtIndex(destinationIndex);

          if (destinationStep instanceof WizardCompletionStep) {
            // A completion step can only be entered, if all previous steps have been completed, are optional, or selected

            /** @type {?} */
            var previousStepsCompleted = wizard.wizardSteps.filter(
            /**
            * @param {?} step
            * @param {?} index
            * @return {?}
            */
            function (step, index) {
              return index < destinationIndex;
            }).every(
            /**
            * @param {?} step
            * @return {?}
            */
            function (step) {
              return step.completed || step.optional || step.selected;
            });

            if (!previousStepsCompleted) {
              return false;
            }
          } // Apply navigation pocicies


          if (destinationIndex < wizard.currentStepIndex) {
            // If the destination step is before current, apply the `navigateBackward` policy
            switch (this.navigateBackward) {
              case 'allow':
                return true;

              case 'deny':
                return false;

              default:
                throw new Error("Invalid value for navigateBackward: ".concat(this.navigateBackward));
            }
          } else if (destinationIndex > wizard.currentStepIndex) {
            // If the destination step is after current, apply the `navigateForward` policy
            switch (this.navigateForward) {
              case 'allow':
                return true;

              case 'deny':
                return false;

              case 'visited':
                return destinationStep.completed;

              default:
                throw new Error("Invalid value for navigateForward: ".concat(this.navigateForward));
            }
          } else {
            // Re-entering the current step is not allowed
            return false;
          }
        }
        /**
         * @inheritDoc
         * @protected
         * @param {?} wizard
         * @return {?}
         */

      }, {
        key: "ensureCanReset",
        value: function ensureCanReset(wizard) {
          _get(_getPrototypeOf(ConfigurableNavigationMode.prototype), "ensureCanReset", this).call(this, wizard); // the default step is a completion step and the wizard contains more than one step

          /** @type {?} */


          var defaultWizardStep = wizard.getStepAtIndex(wizard.defaultStepIndex);
          /** @type {?} */

          var defaultCompletionStep = defaultWizardStep instanceof WizardCompletionStep;

          if (defaultCompletionStep && wizard.wizardSteps.length !== 1) {
            throw new Error("The default step index ".concat(wizard.defaultStepIndex, " references a completion step"));
          }
        }
      }]);

      return ConfigurableNavigationMode;
    }(BaseNavigationMode);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `aw-wizard` component defines the root component of a wizard.
     * Through the setting of input parameters for the `aw-wizard` component it's possible to change the location and size
     * of its navigation bar.
     *
     * ### Syntax
     * ```html
     * <aw-wizard [navBarLocation]="location of navigation bar" [navBarLayout]="layout of navigation bar">
     *     ...
     * </aw-wizard>
     * ```
     *
     * ### Example
     *
     * Without completion step:
     *
     * ```html
     * <aw-wizard navBarLocation="top" navBarLayout="small">
     *     <aw-wizard-step>...</aw-wizard-step>
     *     <aw-wizard-step>...</aw-wizard-step>
     * </aw-wizard>
     * ```
     *
     * With completion step:
     *
     * ```html
     * <aw-wizard navBarLocation="top" navBarLayout="small">
     *     <aw-wizard-step>...</aw-wizard-step>
     *     <aw-wizard-step>...</aw-wizard-step>
     *     <aw-wizard-completion-step>...</aw-wizard-completion-step>
     * </aw-wizard>
     * ```
     *
     * @author Marc Arndt
     */


    var WizardComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function WizardComponent() {
        _classCallCheck(this, WizardComponent);

        /**
         * The location of the navigation bar inside the wizard.
         * This location can be either top, bottom, left or right
         */
        this.navBarLocation = 'top';
        /**
         * The layout of the navigation bar inside the wizard.
         * The layout can be either small, large-filled, large-empty or large-symbols
         */

        this.navBarLayout = 'small';
        /**
         * The direction in which the steps inside the navigation bar should be shown.
         * The direction can be either `left-to-right` or `right-to-left`
         */

        this.navBarDirection = 'left-to-right';
        this._defaultStepIndex = 0;
        /**
         * True, if the navigation bar shouldn't be used for navigating
         */

        this.disableNavigationBar = false;
        /**
         * The navigation mode used to navigate inside the wizard
         *
         * For outside access, use the [[navigation]] getter.
         */

        this._navigation = new ConfigurableNavigationMode();
        /**
         * An array representation of all wizard steps belonging to this model
         *
         * For outside access, use the [[wizardSteps]] getter.
         */

        this._wizardSteps = [];
        /**
         * The index of the currently visible and selected step inside the wizardSteps QueryList.
         * If this wizard contains no steps, currentStepIndex is -1
         *
         * Note: Do not modify this field directly.  Instead, use navigation methods:
         * [[goToStep]], [[goToPreviousStep]], [[goToNextStep]].
         */

        this.currentStepIndex = -1;
      }
      /**
       * The initially selected step, represented by its index
       * Beware: This initial default is only used if no wizard step has been enhanced with the `selected` directive
       * @return {?}
       */


      _createClass(WizardComponent, [{
        key: "ngAfterContentInit",

        /**
         * Initialization work
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this5 = this;

          // add a subscriber to the wizard steps QueryList to listen to changes in the DOM
          this.wizardStepsQueryList.changes.subscribe(
          /**
          * @param {?} changedWizardSteps
          * @return {?}
          */
          function (changedWizardSteps) {
            _this5.updateWizardSteps(changedWizardSteps.toArray());
          }); // initialize the model

          this.updateWizardSteps(this.wizardStepsQueryList.toArray()); // finally reset the whole wizard componennt

          this.reset();
        }
        /**
         * The WizardStep object belonging to the currently visible and selected step.
         * The currentStep is always the currently selected wizard step.
         * The currentStep can be either completed, if it was visited earlier,
         * or not completed, if it is visited for the first time or its state is currently out of date.
         *
         * If this wizard contains no steps, currentStep is null
         * @return {?}
         */

      }, {
        key: "updateWizardSteps",

        /**
         * Updates the wizard steps to the new array
         *
         * @private
         * @param {?} wizardSteps The updated wizard steps
         * @return {?}
         */
        value: function updateWizardSteps(wizardSteps) {
          // the wizard is currently not in the initialization phase
          if (this.wizardSteps.length > 0 && this.currentStepIndex > -1) {
            this.currentStepIndex = wizardSteps.indexOf(this.wizardSteps[this.currentStepIndex]);
          }

          this._wizardSteps = wizardSteps;
        }
        /**
         * The navigation mode used to navigate inside the wizard
         * @return {?}
         */

      }, {
        key: "hasStep",

        /**
         * Checks if a given index `stepIndex` is inside the range of possible wizard steps inside this wizard
         *
         * @param {?} stepIndex The to be checked index of a step inside this wizard
         * @return {?} True if the given `stepIndex` is contained inside this wizard, false otherwise
         */
        value: function hasStep(stepIndex) {
          return this.wizardSteps.length > 0 && 0 <= stepIndex && stepIndex < this.wizardSteps.length;
        }
        /**
         * Checks if this wizard has a previous step, compared to the current step
         *
         * @return {?} True if this wizard has a previous step before the current step
         */

      }, {
        key: "hasPreviousStep",
        value: function hasPreviousStep() {
          return this.hasStep(this.currentStepIndex - 1);
        }
        /**
         * Checks if this wizard has a next step, compared to the current step
         *
         * @return {?} True if this wizard has a next step after the current step
         */

      }, {
        key: "hasNextStep",
        value: function hasNextStep() {
          return this.hasStep(this.currentStepIndex + 1);
        }
        /**
         * Checks if this wizard is currently inside its last step
         *
         * @return {?} True if the wizard is currently inside its last step
         */

      }, {
        key: "isLastStep",
        value: function isLastStep() {
          return this.wizardSteps.length > 0 && this.currentStepIndex === this.wizardSteps.length - 1;
        }
        /**
         * Finds the [[WizardStep]] at the given index `stepIndex`.
         * If no [[WizardStep]] exists at the given index an Error is thrown
         *
         * @throws An `Error` is thrown, if the given index `stepIndex` doesn't exist
         * @param {?} stepIndex The given index
         * @return {?} The found [[WizardStep]] at the given index `stepIndex`
         */

      }, {
        key: "getStepAtIndex",
        value: function getStepAtIndex(stepIndex) {
          if (!this.hasStep(stepIndex)) {
            throw new Error("Expected a known step, but got stepIndex: ".concat(stepIndex, "."));
          }

          return this.wizardSteps[stepIndex];
        }
        /**
         * Finds the index of the step with the given `stepId`.
         * If no step with the given `stepId` exists, `-1` is returned
         *
         * @param {?} stepId The given step id
         * @return {?} The found index of a step with the given step id, or `-1` if no step with the given id is included in the wizard
         */

      }, {
        key: "getIndexOfStepWithId",
        value: function getIndexOfStepWithId(stepId) {
          return this.wizardSteps.findIndex(
          /**
          * @param {?} step
          * @return {?}
          */
          function (step) {
            return step.stepId === stepId;
          });
        }
        /**
         * Finds the index of the given [[WizardStep]] `step`.
         * If the given [[WizardStep]] is not contained inside this wizard, `-1` is returned
         *
         * @param {?} step The given [[WizardStep]]
         * @return {?} The found index of `step` or `-1` if the step is not included in the wizard
         */

      }, {
        key: "getIndexOfStep",
        value: function getIndexOfStep(step) {
          return this.wizardSteps.indexOf(step);
        }
        /**
         * Calculates the correct [[MovingDirection]] value for a given `destinationStep` compared to the `currentStepIndex`.
         *
         * @param {?} destinationStep The given destination step
         * @return {?} The calculated [[MovingDirection]]
         */

      }, {
        key: "getMovingDirection",
        value: function getMovingDirection(destinationStep) {
          /** @type {?} */
          var movingDirection;

          if (destinationStep > this.currentStepIndex) {
            movingDirection = MovingDirection.Forwards;
          } else if (destinationStep < this.currentStepIndex) {
            movingDirection = MovingDirection.Backwards;
          } else {
            movingDirection = MovingDirection.Stay;
          }

          return movingDirection;
        }
        /**
         * Checks, whether a wizard step, as defined by the given destination index, can be transitioned to.
         *
         * This method controls navigation by [[goToStep]], [[goToPreviousStep]], and [[goToNextStep]] directives.
         * Navigation by navigation bar is governed by [[isNavigable]].
         *
         * @param {?} destinationIndex The index of the destination step
         * @return {?} A [[Promise]] containing `true`, if the destination step can be transitioned to and false otherwise
         */

      }, {
        key: "canGoToStep",
        value: function canGoToStep(destinationIndex) {
          return this.navigation.canGoToStep(this, destinationIndex);
        }
        /**
         * Tries to transition to the wizard step, as denoted by the given destination index.
         *
         * Note: You do not have to call [[canGoToStep]] before calling [[goToStep]].
         * The [[canGoToStep]] method will be called automatically.
         *
         * @param {?} destinationIndex The index of the destination wizard step, which should be entered
         * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
         * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
         * @return {?}
         */

      }, {
        key: "goToStep",
        value: function goToStep(destinationIndex, preFinalize, postFinalize) {
          return this.navigation.goToStep(this, destinationIndex, preFinalize, postFinalize);
        }
        /**
         * Tries to transition the wizard to the previous step
         *
         * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
         * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
         * @return {?}
         */

      }, {
        key: "goToPreviousStep",
        value: function goToPreviousStep(preFinalize, postFinalize) {
          return this.navigation.goToStep(this, this.currentStepIndex - 1, preFinalize, postFinalize);
        }
        /**
         * Tries to transition the wizard to the next step
         *
         * @param {?=} preFinalize An event emitter, to be called before the step has been transitioned
         * @param {?=} postFinalize An event emitter, to be called after the step has been transitioned
         * @return {?}
         */

      }, {
        key: "goToNextStep",
        value: function goToNextStep(preFinalize, postFinalize) {
          return this.navigation.goToStep(this, this.currentStepIndex + 1, preFinalize, postFinalize);
        }
        /**
         * Checks, whether the wizard step, located at the given index, can be navigated to using the navigation bar.
         *
         * @param {?} destinationIndex The index of the destination step
         * @return {?} True if the step can be navigated to, false otherwise
         */

      }, {
        key: "isNavigable",
        value: function isNavigable(destinationIndex) {
          return this.navigation.isNavigable(this, destinationIndex);
        }
        /**
         * Resets the state of this wizard.
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this.navigation.reset(this);
        }
      }, {
        key: "defaultStepIndex",
        get: function get() {
          // This value can be either:
          // - the index of a wizard step with a `selected` directive, or
          // - the default step index, set in the [[WizardComponent]]
          // This value can be either:
          // - the index of a wizard step with a `selected` directive, or
          // - the default step index, set in the [[WizardComponent]]

          /** @type {?} */
          var foundDefaultStep = this.wizardSteps.find(
          /**
          * @param {?} step
          * @return {?}
          */
          function (step) {
            return step.defaultSelected;
          });

          if (foundDefaultStep) {
            return this.getIndexOfStep(foundDefaultStep);
          } else {
            return this._defaultStepIndex;
          }
        }
        /**
         * @param {?} defaultStepIndex
         * @return {?}
         */
        ,
        set: function set(defaultStepIndex) {
          this._defaultStepIndex = defaultStepIndex;
        }
        /**
         * Returns true if this wizard uses a horizontal orientation.
         * The wizard uses a horizontal orientation, iff the navigation bar is shown at the top or bottom of this wizard
         *
         * @return {?} True if this wizard uses a horizontal orientation
         */

      }, {
        key: "horizontalOrientation",
        get: function get() {
          return this.navBarLocation === 'top' || this.navBarLocation === 'bottom';
        }
        /**
         * Returns true if this wizard uses a vertical orientation.
         * The wizard uses a vertical orientation, iff the navigation bar is shown at the left or right of this wizard
         *
         * @return {?} True if this wizard uses a vertical orientation
         */

      }, {
        key: "verticalOrientation",
        get: function get() {
          return this.navBarLocation === 'left' || this.navBarLocation === 'right';
        }
      }, {
        key: "currentStep",
        get: function get() {
          if (this.hasStep(this.currentStepIndex)) {
            return this.wizardSteps[this.currentStepIndex];
          } else {
            return null;
          }
        }
        /**
         * The completeness of the wizard.
         * If the wizard has been completed, i.e. all steps are either completed or optional, this value is true, otherwise it is false
         * @return {?}
         */

      }, {
        key: "completed",
        get: function get() {
          return this.wizardSteps.every(
          /**
          * @param {?} step
          * @return {?}
          */
          function (step) {
            return step.completed || step.optional;
          });
        }
        /**
         * An array representation of all wizard steps belonging to this model
         * @return {?}
         */

      }, {
        key: "wizardSteps",
        get: function get() {
          return this._wizardSteps;
        }
      }, {
        key: "navigation",
        get: function get() {
          return this._navigation;
        }
        /**
         * Updates the navigation mode for this wizard component
         *
         * @param {?} navigation The updated navigation mode
         * @return {?}
         */
        ,
        set: function set(navigation) {
          this._navigation = navigation;
        }
      }]);

      return WizardComponent;
    }();

    WizardComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'aw-wizard',
        template: "<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'top' || navBarLocation == 'left'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'left',\n    horizontal: navBarLocation == 'top',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n\n<div [ngClass]=\"{\n  'wizard-steps': true,\n  vertical: navBarLocation == 'left' || navBarLocation == 'right',\n  horizontal: navBarLocation == 'top' || navBarLocation == 'bottom'\n}\">\n  <ng-content></ng-content>\n</div>\n\n<aw-wizard-navigation-bar\n  [direction]=\"navBarDirection\"\n  *ngIf=\"navBarLocation == 'bottom' || navBarLocation == 'right'\"\n  [ngClass]=\"{\n    vertical: navBarLocation == 'right',\n    horizontal: navBarLocation == 'bottom',\n    small: navBarLayout == 'small',\n    'large-filled': navBarLayout == 'large-filled',\n    'large-filled-symbols': navBarLayout == 'large-filled-symbols',\n    'large-empty': navBarLayout == 'large-empty',\n    'large-empty-symbols': navBarLayout == 'large-empty-symbols'\n  }\">\n</aw-wizard-navigation-bar>\n"
      }]
    }];
    /** @nocollapse */

    WizardComponent.ctorParameters = function () {
      return [];
    };

    WizardComponent.propDecorators = {
      wizardStepsQueryList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [WizardStep]
      }],
      navBarLocation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      navBarLayout: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      navBarDirection: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      defaultStepIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disableNavigationBar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      horizontalOrientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.horizontal']
      }],
      verticalOrientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.vertical']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `aw-wizard-navigation-bar` component contains the navigation bar inside a [[WizardComponent]].
     * To correctly display the navigation bar, it's required to set the right css classes for the navigation bar,
     * otherwise it will look like a normal `ul` component.
     *
     * ### Syntax
     *
     * ```html
     * <aw-wizard-navigation-bar></aw-wizard-navigation-bar>
     * ```
     *
     * @author Marc Arndt
     */

    var WizardNavigationBarComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {?} wizard The state the wizard currently resides in
       */
      function WizardNavigationBarComponent(wizard) {
        _classCallCheck(this, WizardNavigationBarComponent);

        this.wizard = wizard;
        /**
         * The direction in which the wizard steps should be shown in the navigation bar.
         * This value can be either `left-to-right` or `right-to-left`
         */

        this.direction = 'left-to-right';
      }
      /**
       * Returns all [[WizardStep]]s contained in the wizard
       *
       * @return {?} An array containing all [[WizardStep]]s
       */


      _createClass(WizardNavigationBarComponent, [{
        key: "isCurrent",

        /**
         * Checks, whether a [[WizardStep]] can be marked as `current` in the navigation bar
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as `current`
         */
        value: function isCurrent(wizardStep) {
          return wizardStep.selected;
        }
        /**
         * Checks, whether a [[WizardStep]] can be marked as `editing` in the navigation bar
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as `editing`
         */

      }, {
        key: "isEditing",
        value: function isEditing(wizardStep) {
          return wizardStep.editing;
        }
        /**
         * Checks, whether a [[WizardStep]] can be marked as `done` in the navigation bar
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as `done`
         */

      }, {
        key: "isDone",
        value: function isDone(wizardStep) {
          return wizardStep.completed;
        }
        /**
         * Checks, whether a [[WizardStep]] can be marked as `optional` in the navigation bar
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as `optional`
         */

      }, {
        key: "isOptional",
        value: function isOptional(wizardStep) {
          return wizardStep.optional;
        }
        /**
         * Checks, whether a [[WizardStep]] can be marked as `completed` in the navigation bar.
         *
         * The `completed` class is only applied to completion steps.
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as `completed`
         */

      }, {
        key: "isCompleted",
        value: function isCompleted(wizardStep) {
          return wizardStep instanceof WizardCompletionStep && this.wizard.completed;
        }
        /**
         * Checks, whether a [[WizardStep]] can be marked as `navigable` in the navigation bar.
         * A wizard step can be navigated to if:
         * - the step is currently not selected
         * - the navigation bar isn't disabled
         * - the navigation mode allows navigation to the step
         *
         * @param {?} wizardStep The wizard step to be checked
         * @return {?} True if the step can be marked as navigable
         */

      }, {
        key: "isNavigable",
        value: function isNavigable(wizardStep) {
          return !wizardStep.selected && !this.wizard.disableNavigationBar && this.wizard.isNavigable(this.wizard.getIndexOfStep(wizardStep));
        }
      }, {
        key: "wizardSteps",
        get: function get() {
          switch (this.direction) {
            case 'right-to-left':
              return this.wizard.wizardSteps.slice().reverse();

            case 'left-to-right':
            default:
              return this.wizard.wizardSteps;
          }
        }
        /**
         * Returns the number of wizard steps, that need to be displaced in the navigation bar
         *
         * @return {?} The number of wizard steps to be displayed
         */

      }, {
        key: "numberOfWizardSteps",
        get: function get() {
          return this.wizard.wizardSteps.length;
        }
      }]);

      return WizardNavigationBarComponent;
    }();

    WizardNavigationBarComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'aw-wizard-navigation-bar',
        template: "<ul class=\"steps-indicator steps-{{numberOfWizardSteps}}\">\n  <li [attr.id]=\"step.stepId\" *ngFor=\"let step of wizardSteps\"\n      [ngClass]=\"{\n        current: isCurrent(step),\n        editing: isEditing(step),\n        done: isDone(step),\n        optional: isOptional(step),\n        completed: isCompleted(step),\n        navigable: isNavigable(step)\n  }\">\n    <a [awGoToStep]=\"step\">\n      <div class=\"label\">\n        <ng-container *ngIf=\"step.stepTitleTemplate\" [ngTemplateOutlet]=\"step.stepTitleTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepTitleTemplate\">{{step.stepTitle}}</ng-container>\n      </div>\n      <div class=\"step-indicator\" [ngStyle]=\"{ 'font-family': step.stepSymbolTemplate ? '' : step.navigationSymbol.fontFamily }\">\n        <ng-container *ngIf=\"step.stepSymbolTemplate\" [ngTemplateOutlet]=\"step.stepSymbolTemplate.templateRef\"></ng-container>\n        <ng-container *ngIf=\"!step.stepSymbolTemplate\">{{step.navigationSymbol.symbol}}</ng-container>\n      </div>\n    </a>\n  </li>\n</ul>\n"
      }]
    }];
    /** @nocollapse */

    WizardNavigationBarComponent.ctorParameters = function () {
      return [{
        type: WizardComponent
      }];
    };

    WizardNavigationBarComponent.propDecorators = {
      direction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `aw-wizard-step` component is used to define a normal step inside a wizard.
     *
     * ### Syntax
     *
     * With `stepTitle` and `navigationSymbol` inputs:
     *
     * ```html
     * <aw-wizard-step [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
     *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
     *    ...
     * </aw-wizard-step>
     * ```
     *
     * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
     *
     * ```html
     * <aw-wizard-step"
     *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
     *    <ng-template awWizardStepTitle>
     *        step title
     *    </ng-template>
     *    <ng-template awWizardStepSymbol>
     *        symbol
     *    </ng-template>
     *    ...
     * </aw-wizard-step>
     * ```
     *
     * ### Example
     *
     * With `stepTitle` and `navigationSymbol` inputs:
     *
     * ```html
     * <aw-wizard-step stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
     *    ...
     * </aw-wizard-step>
     * ```
     *
     * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
     *
     * ```html
     * <aw-wizard-step>
     *    <ng-template awWizardStepTitle>
     *        Address information
     *    </ng-template>
     *    <ng-template awWizardStepSymbol>
     *        <i class="fa fa-taxi"></i>
     *    </ng-template>
     * </aw-wizard-step>
     * ```
     *
     * @author Marc Arndt
     */

    var WizardStepComponent = /*#__PURE__*/function (_WizardStep2) {
      _inherits(WizardStepComponent, _WizardStep2);

      var _super4 = _createSuper(WizardStepComponent);

      function WizardStepComponent() {
        _classCallCheck(this, WizardStepComponent);

        return _super4.apply(this, arguments);
      }

      return WizardStepComponent;
    }(WizardStep);

    WizardStepComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'aw-wizard-step',
        template: "<ng-content></ng-content>\n",
        providers: [{
          provide: WizardStep,
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return WizardStepComponent;
          })
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `awEnableBackLinks` directive can be used to allow the user to leave a [[WizardCompletionStep]] after is has been entered.
     *
     * ### Syntax
     *
     * ```html
     * <aw-wizard-completion-step awEnableBackLinks (stepExit)="exit function">
     *     ...
     * </aw-wizard-completion-step>
     * ```
     *
     * ### Example
     *
     * ```html
     * <aw-wizard-completion-step stepTitle="Final step" awEnableBackLinks>
     *     ...
     * </aw-wizard-completion-step>
     * ```
     *
     * @author Marc Arndt
     */

    var EnableBackLinksDirective = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {?} completionStep The wizard completion step, which should be exitable
       */
      function EnableBackLinksDirective(completionStep) {
        _classCallCheck(this, EnableBackLinksDirective);

        this.completionStep = completionStep;
        /**
         * This EventEmitter is called when the step is exited.
         * The bound method can be used to do cleanup work.
         */

        this.stepExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * Initialization work
       * @return {?}
       */


      _createClass(EnableBackLinksDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.completionStep.canExit = true;
          this.completionStep.stepExit = this.stepExit;
        }
      }]);

      return EnableBackLinksDirective;
    }();

    EnableBackLinksDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[awEnableBackLinks]'
      }]
    }];
    /** @nocollapse */

    EnableBackLinksDirective.ctorParameters = function () {
      return [{
        type: WizardCompletionStep,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    EnableBackLinksDirective.propDecorators = {
      stepExit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Checks whether the given `value` implements the interface [[StepId]].
     *
     * @param {?} value The value to be checked
     * @return {?} True if the given value implements [[StepId]] and false otherwise
     */

    function isStepId(value) {
      return value.hasOwnProperty('stepId') && !(value instanceof WizardStep);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Checks whether the given `value` implements the interface [[StepIndex]].
     *
     * @param {?} value The value to be checked
     * @return {?} True if the given value implements [[StepIndex]] and false otherwise
     */


    function isStepIndex(value) {
      return value.hasOwnProperty('stepIndex');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Checks whether the given `value` implements the interface [[StepOffset]].
     *
     * @param {?} value The value to be checked
     * @return {?} True if the given value implements [[StepOffset]] and false otherwise
     */


    function isStepOffset(value) {
      return value.hasOwnProperty('stepOffset');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `awGoToStep` directive can be used to navigate to a given step.
     * This step can be defined in one of multiple formats
     *
     * ### Syntax
     *
     * With absolute step index:
     *
     * ```html
     * <button [awGoToStep]="{ stepIndex: absolute step index }" (finalize)="finalize method">...</button>
     * ```
     *
     * With unique step id:
     *
     * ```html
     * <button [awGoToStep]="{ stepId: 'step id of destination step' }" (finalize)="finalize method">...</button>
     * ```
     *
     * With a wizard step object:
     *
     * ```html
     * <button [awGoToStep]="wizard step object" (finalize)="finalize method">...</button>
     * ```
     *
     * With an offset to the defining step:
     *
     * ```html
     * <button [awGoToStep]="{ stepOffset: offset }" (finalize)="finalize method">...</button>
     * ```
     *
     * @author Marc Arndt
     */


    var GoToStepDirective = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {?} wizard The wizard component
       * @param {?} wizardStep The wizard step, which contains this [[GoToStepDirective]]
       */
      function GoToStepDirective(wizard, wizardStep) {
        _classCallCheck(this, GoToStepDirective);

        this.wizard = wizard;
        this.wizardStep = wizardStep;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */

        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */

        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * A convenience field for `preFinalize`
       * @return {?}
       */


      _createClass(GoToStepDirective, [{
        key: "onClick",

        /**
         * Listener method for `click` events on the component with this directive.
         * After this method is called the wizard will try to transition to the `destinationStep`
         * @param {?} event
         * @return {?}
         */
        value: function onClick(event) {
          this.wizard.goToStep(this.destinationStep, this.preFinalize, this.postFinalize);
        }
      }, {
        key: "finalize",
        get: function get() {
          return this.preFinalize;
        }
        /**
         * A convenience name for `preFinalize`
         *
         * @param {?} emitter The [[EventEmitter]] to be set
         * @return {?}
         */
        ,
        set: function set(emitter) {
          /* istanbul ignore next */
          this.preFinalize = emitter;
        }
        /**
         * Returns the destination step of this directive as an absolute step index inside the wizard
         *
         * @throws If `targetStep` is of an unknown type an `Error` is thrown
         * @return {?} The index of the destination step
         */

      }, {
        key: "destinationStep",
        get: function get() {
          /** @type {?} */
          var destinationStep;

          if (isStepIndex(this.targetStep)) {
            destinationStep = this.targetStep.stepIndex;
          } else if (isStepId(this.targetStep)) {
            destinationStep = this.wizard.getIndexOfStepWithId(this.targetStep.stepId);
          } else if (isStepOffset(this.targetStep) && this.wizardStep !== null) {
            destinationStep = this.wizard.getIndexOfStep(this.wizardStep) + this.targetStep.stepOffset;
          } else if (this.targetStep instanceof WizardStep) {
            destinationStep = this.wizard.getIndexOfStep(this.targetStep);
          } else {
            throw new Error("Input 'targetStep' is neither a WizardStep, StepOffset, StepIndex or StepId");
          }

          return destinationStep;
        }
      }]);

      return GoToStepDirective;
    }();

    GoToStepDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[awGoToStep]'
      }]
    }];
    /** @nocollapse */

    GoToStepDirective.ctorParameters = function () {
      return [{
        type: WizardComponent
      }, {
        type: WizardStep,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    GoToStepDirective.propDecorators = {
      preFinalize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      postFinalize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      targetStep: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['awGoToStep']
      }],
      finalize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click', ['$event']]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `awNextStep` directive can be used to navigate to the next step.
     *
     * ### Syntax
     *
     * ```html
     * <button awNextStep (finalize)="finalize method">...</button>
     * ```
     *
     * @author Marc Arndt
     */

    var NextStepDirective = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {?} wizard The state of the wizard
       */
      function NextStepDirective(wizard) {
        _classCallCheck(this, NextStepDirective);

        this.wizard = wizard;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */

        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */

        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * A convenience field for `preFinalize`
       * @return {?}
       */


      _createClass(NextStepDirective, [{
        key: "onClick",

        /**
         * Listener method for `click` events on the component with this directive.
         * After this method is called the wizard will try to transition to the next step
         * @param {?} event
         * @return {?}
         */
        value: function onClick(event) {
          this.wizard.goToNextStep(this.preFinalize, this.postFinalize);
        }
      }, {
        key: "finalize",
        get: function get() {
          return this.preFinalize;
        }
        /**
         * A convenience name for `preFinalize`
         *
         * @param {?} emitter The [[EventEmitter]] to be set
         * @return {?}
         */
        ,
        set: function set(emitter) {
          /* istanbul ignore next */
          this.preFinalize = emitter;
        }
      }]);

      return NextStepDirective;
    }();

    NextStepDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[awNextStep]'
      }]
    }];
    /** @nocollapse */

    NextStepDirective.ctorParameters = function () {
      return [{
        type: WizardComponent
      }];
    };

    NextStepDirective.propDecorators = {
      preFinalize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      postFinalize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      finalize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click', ['$event']]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `awOptionalStep` directive can be used to define an optional `wizard-step`.
     * An optional wizard step is a [[WizardStep]] that doesn't need to be completed to transition to later wizard steps.
     *
     * ### Syntax
     *
     * ```html
     * <aw-wizard-step awOptionalStep>
     *     ...
     * </aw-wizard-step>
     * ```
     *
     * ### Example
     *
     * ```html
     * <aw-wizard-step stepTitle="Second step" awOptionalStep>
     *     ...
     * </aw-wizard-step>
     * ```
     *
     * @author Marc Arndt
     */

    var OptionalStepDirective = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {?} wizardStep The wizard step, which contains this [[OptionalStepDirective]]
       */
      function OptionalStepDirective(wizardStep) {
        _classCallCheck(this, OptionalStepDirective);

        this.wizardStep = wizardStep;
      }
      /**
       * Initialization work
       * @return {?}
       */


      _createClass(OptionalStepDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.wizardStep.optional = true;
        }
      }]);

      return OptionalStepDirective;
    }();

    OptionalStepDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[awOptionalStep]'
      }]
    }];
    /** @nocollapse */

    OptionalStepDirective.ctorParameters = function () {
      return [{
        type: WizardStep,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `awPreviousStep` directive can be used to navigate to the previous step.
     * Compared to the [[NextStepDirective]] it's important to note, that this directive doesn't contain a `finalize` output method.
     *
     * ### Syntax
     *
     * ```html
     * <button awPreviousStep>...</button>
     * ```
     *
     * @author Marc Arndt
     */


    var PreviousStepDirective = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {?} wizard The state of the wizard
       */
      function PreviousStepDirective(wizard) {
        _classCallCheck(this, PreviousStepDirective);

        this.wizard = wizard;
        /**
         * This [[EventEmitter]] is called directly before the current step is exited during a transition through a component with this directive.
         */

        this.preFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This [[EventEmitter]] is called directly after the current step is exited during a transition through a component with this directive.
         */

        this.postFinalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * A convenience field for `preFinalize`
       * @return {?}
       */


      _createClass(PreviousStepDirective, [{
        key: "onClick",

        /**
         * Listener method for `click` events on the component with this directive.
         * After this method is called the wizard will try to transition to the previous step
         * @param {?} event
         * @return {?}
         */
        value: function onClick(event) {
          this.wizard.goToPreviousStep(this.preFinalize, this.postFinalize);
        }
      }, {
        key: "finalize",
        get: function get() {
          return this.preFinalize;
        }
        /**
         * A convenience field for `preFinalize`
         *
         * @param {?} emitter The [[EventEmitter]] to be set
         * @return {?}
         */
        ,
        set: function set(emitter) {
          /* istanbul ignore next */
          this.preFinalize = emitter;
        }
      }]);

      return PreviousStepDirective;
    }();

    PreviousStepDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[awPreviousStep]'
      }]
    }];
    /** @nocollapse */

    PreviousStepDirective.ctorParameters = function () {
      return [{
        type: WizardComponent
      }];
    };

    PreviousStepDirective.propDecorators = {
      preFinalize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      postFinalize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      finalize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click', ['$event']]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `awResetWizard` directive can be used to reset the wizard to its initial state.
     * This directive accepts an output, which can be used to specify some custom cleanup work during the reset process.
     *
     * ### Syntax
     *
     * ```html
     * <button awResetWizard (finalize)="custom reset task">...</button>
     * ```
     *
     * @author Marc Arndt
     */

    var ResetWizardDirective = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {?} wizard The wizard component
       */
      function ResetWizardDirective(wizard) {
        _classCallCheck(this, ResetWizardDirective);

        this.wizard = wizard;
        /**
         * An [[EventEmitter]] containing some tasks to be done, directly before the wizard is being reset
         */

        this.finalize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * Resets the wizard
       * @param {?} event
       * @return {?}
       */


      _createClass(ResetWizardDirective, [{
        key: "onClick",
        value: function onClick(event) {
          // do some optional cleanup work
          this.finalize.emit(); // reset the wizard to its initial state

          this.wizard.reset();
        }
      }]);

      return ResetWizardDirective;
    }();

    ResetWizardDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[awResetWizard]'
      }]
    }];
    /** @nocollapse */

    ResetWizardDirective.ctorParameters = function () {
      return [{
        type: WizardComponent
      }];
    };

    ResetWizardDirective.propDecorators = {
      finalize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click', ['$event']]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `awSelectedStep` directive can be used on a [[WizardStep]] to set it as selected after the wizard initialisation or a reset.
     *
     * ### Syntax
     *
     * ```html
     * <aw-wizard-step stepTitle="Step title" awSelectedStep>
     *     ...
     * </aw-wizard-step>
     * ```
     *
     * @author Marc Arndt
     */

    var SelectedStepDirective = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {?} wizardStep The wizard step, which should be selected by default
       */
      function SelectedStepDirective(wizardStep) {
        _classCallCheck(this, SelectedStepDirective);

        this.wizardStep = wizardStep;
      }
      /**
       * Initialization work
       * @return {?}
       */


      _createClass(SelectedStepDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.wizardStep.defaultSelected = true;
        }
      }]);

      return SelectedStepDirective;
    }();

    SelectedStepDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[awSelectedStep]'
      }]
    }];
    /** @nocollapse */

    SelectedStepDirective.ctorParameters = function () {
      return [{
        type: WizardStep,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `awWizardCompletionStep` directive can be used to define a completion/success step at the end of your wizard
     * After a [[WizardCompletionStep]] has been entered, it has the characteristic that the user is blocked from
     * leaving it again to a previous step.
     * In addition entering a [[WizardCompletionStep]] automatically sets the `wizard`, and all steps inside the `wizard`,
     * as completed.
     *
     * ### Syntax
     *
     * ```html
     * <div awWizardCompletionStep [stepTitle]="title of the wizard step"
     *    [navigationSymbol]="{ symbol: 'navigation symbol', fontFamily: 'font-family' }"
     *    (stepEnter)="event emitter to be called when the wizard step is entered"
     *    (stepExit)="event emitter to be called when the wizard step is exited">
     *    ...
     * </div>
     * ```
     *
     * ### Example
     *
     * ```html
     * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '1' }">
     *    ...
     * </div>
     * ```
     *
     * With a navigation symbol from the `font-awesome` font:
     *
     * ```html
     * <div awWizardCompletionStep stepTitle="Step 1" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
     *    ...
     * </div>
     * ```
     *
     * @author Marc Arndt
     */


    var WizardCompletionStepDirective = /*#__PURE__*/function (_WizardCompletionStep2) {
      _inherits(WizardCompletionStepDirective, _WizardCompletionStep2);

      var _super5 = _createSuper(WizardCompletionStepDirective);

      function WizardCompletionStepDirective() {
        _classCallCheck(this, WizardCompletionStepDirective);

        return _super5.apply(this, arguments);
      }

      return WizardCompletionStepDirective;
    }(WizardCompletionStep);

    WizardCompletionStepDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[awWizardCompletionStep]',
        providers: [{
          provide: WizardStep,
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return WizardCompletionStepDirective;
          })
        }, {
          provide: WizardCompletionStep,
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return WizardCompletionStepDirective;
          })
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `awWizardStep` directive can be used to define a normal step inside a wizard.
     *
     * ### Syntax
     *
     * With `stepTitle` and `navigationSymbol` inputs:
     *
     * ```html
     * <div awWizardStep [stepTitle]="step title" [navigationSymbol]="{ symbol: 'symbol', fontFamily: 'font-family' }"
     *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
     *    ...
     * </div>
     * ```
     *
     * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
     *
     * ```html
     * <div awWizardStep [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
     *    <ng-template awWizardStepTitle>
     *        step title
     *    </ng-template>
     *    <ng-template awWizardStepSymbol>
     *        symbol
     *    </ng-template>
     *    ...
     * </div>
     * ```
     *
     * ### Example
     *
     * With `stepTitle` and `navigationSymbol` inputs:
     *
     * ```html
     * <div awWizardStep stepTitle="Address information" [navigationSymbol]="{ symbol: '&#xf1ba;', fontFamily: 'FontAwesome' }">
     *    ...
     * </div>
     * ```
     *
     * With `awWizardStepTitle` and `awWizardStepSymbol` directives:
     *
     * ```html
     * <div awWizardStep>
     *    <ng-template awWizardStepTitle>
     *        Address information
     *    </ng-template>
     *    <ng-template awWizardStepSymbol>
     *        <i class="fa fa-taxi"></i>
     *    </ng-template>
     * </div>
     * ```
     *
     * @author Marc Arndt
     */

    var WizardStepDirective = /*#__PURE__*/function (_WizardStep3) {
      _inherits(WizardStepDirective, _WizardStep3);

      var _super6 = _createSuper(WizardStepDirective);

      function WizardStepDirective() {
        _classCallCheck(this, WizardStepDirective);

        return _super6.apply(this, arguments);
      }

      return WizardStepDirective;
    }(WizardStep);

    WizardStepDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[awWizardStep]',
        providers: [{
          provide: WizardStep,
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return WizardStepDirective;
          })
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The [[awNavigationMode]] directive can be used to customize wizard'd navigation mode.
     *
     * There are several usage options:
     *
     * ### Option 1. Customize the default navigation mode with [[navigateBackward]] and/or [[navigateForward]] inputs.
     *
     * ```html
     * <aw-wizard [awNavigationMode] navigateBackward="deny" navigateForward="allow">...</aw-wizard>
     * ```
     *
     * ### Option 2. Pass in a custom navigation mode
     *
     * ```typescript
     * import { BaseNavigationMode } from 'angular-archwizard'
     *
     * class CustomNavigationMode extends BaseNavigationMode {
     *
     *   // ...
     * }
     * ```
     *
     * ```typescript
     * \@Component({
     *   // ...
     * })
     * class MyComponent {
     *
     *   navigationMode = new CustomNavigationMode();
     * }
     * ```
     *
     * ```html
     * <aw-wizard [awNavigationMode]="navigationMode">...</aw-wizard>
     * ```
     *
     * ### Additional Notes
     *
     * - Specifying a custom navigation mode takes priority over [[navigateBackward]] and [[navigateForward]] inputs
     *
     * - Omitting the [[awNavigationMode]] directive or, equally, specifying just [[awNavigationMode]] without
     *   any inputs or parameters causes the wizard to use the default "strict" navigation mode equivalent to
     *
     * ```html
     * <aw-wizard [awNavigationMode] navigateBackward="deny" navigateForward="allow">...</aw-wizard>
     * ````
     */

    var NavigationModeDirective = /*#__PURE__*/function () {
      /**
       * @param {?} wizard
       */
      function NavigationModeDirective(wizard) {
        _classCallCheck(this, NavigationModeDirective);

        this.wizard = wizard;
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(NavigationModeDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.wizard.navigation = this.getNavigationMode();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getNavigationMode",
        value: function getNavigationMode() {
          if (this.awNavigationMode) {
            return this.awNavigationMode;
          }

          return new ConfigurableNavigationMode(this.navigateBackward, this.navigateForward);
        }
      }]);

      return NavigationModeDirective;
    }();

    NavigationModeDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[awNavigationMode]'
      }]
    }];
    /** @nocollapse */

    NavigationModeDirective.ctorParameters = function () {
      return [{
        type: WizardComponent
      }];
    };

    NavigationModeDirective.propDecorators = {
      awNavigationMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      navigateBackward: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      navigateForward: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The `awCompletedStep` directive can be used to make a wizard step initially completed.
     *
     * Initially completed steps are shown as completed when the wizard is presented to the user.
     *
     * A typical use case is to make a step initially completed if it is automatically filled with some derived/predefined information.
     *
     * ### Syntax
     *
     * ```html
     * <aw-wizard-step awCompletedStep>
     *     ...
     * </aw-wizard-step>
     * ```
     *
     * An optional boolean condition can be specified:
     *
     * ```html
     * <aw-wizard-step [awCompletedStep]="shouldBeCompleted">
     *     ...
     * </aw-wizard-step>
     * ```
     *
     * ### Example
     *
     * ```html
     * <aw-wizard-step stepTitle="First step" [awCompletedStep]="firstStepPrefilled">
     *     ...
     * </aw-wizard-step>
     * ```
     */

    var CompletedStepDirective = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {?} wizardStep The wizard step, which contains this [[CompletedStepDirective]]
       */
      function CompletedStepDirective(wizardStep) {
        _classCallCheck(this, CompletedStepDirective);

        this.wizardStep = wizardStep; // tslint:disable-next-line:no-input-rename

        this.initiallyCompleted = true;
      }
      /**
       * Initialization work
       * @return {?}
       */


      _createClass(CompletedStepDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // The input receives '' when specified in the template without a value.  In this case, apply the default value (`true`).
          this.wizardStep.initiallyCompleted = this.initiallyCompleted ||
          /** @type {?} */
          this.initiallyCompleted === '';
        }
      }]);

      return CompletedStepDirective;
    }();

    CompletedStepDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[awCompletedStep]'
      }]
    }];
    /** @nocollapse */

    CompletedStepDirective.ctorParameters = function () {
      return [{
        type: WizardStep,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    CompletedStepDirective.propDecorators = {
      initiallyCompleted: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['awCompletedStep']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The module defining all the content inside `angular-archwizard`
     *
     * @author Marc Arndt
     */

    var ArchwizardModule = /*#__PURE__*/function () {
      function ArchwizardModule() {
        _classCallCheck(this, ArchwizardModule);
      }

      _createClass(ArchwizardModule, null, [{
        key: "forRoot",

        /* istanbul ignore next */

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: ArchwizardModule,
            providers: [// Nothing here yet
            ]
          };
        }
      }]);

      return ArchwizardModule;
    }();

    ArchwizardModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [WizardComponent, WizardStepComponent, WizardNavigationBarComponent, WizardCompletionStepComponent, GoToStepDirective, NextStepDirective, PreviousStepDirective, OptionalStepDirective, WizardStepSymbolDirective, WizardStepTitleDirective, EnableBackLinksDirective, WizardStepDirective, WizardCompletionStepDirective, SelectedStepDirective, ResetWizardDirective, NavigationModeDirective, CompletedStepDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [WizardComponent, WizardStepComponent, WizardNavigationBarComponent, WizardCompletionStepComponent, GoToStepDirective, NextStepDirective, PreviousStepDirective, OptionalStepDirective, WizardStepSymbolDirective, WizardStepTitleDirective, EnableBackLinksDirective, WizardStepDirective, WizardCompletionStepDirective, SelectedStepDirective, ResetWizardDirective, NavigationModeDirective, CompletedStepDirective]
      }]
    }]; //# sourceMappingURL=angular-archwizard.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~Request-tab4-module~pages-request-details-request-details-module-es5.js.map