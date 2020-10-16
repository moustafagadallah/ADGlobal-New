(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-medical-history-medical-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-mh/create-mh.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-mh/create-mh.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>  {{'ADD_MEDICAL_H' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"close\" (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" color=\"light\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<div class=\"name\">\n  <ion-select interface=\"popover\" [compareWith]=\"compareWith\" value=\"{{MyDiseaseTypeValue}}\" \n  (ionChange)=\"diseasesTypeSelected($event)\" placeholder=\"{{'DISEASE_TYPE' | translate}}\">\n    <ion-select-option *ngFor=\"let d of diseases\" [value]=\"d.value\">{{d.name}}</ion-select-option>\n  </ion-select>\n</div>\n\n<!-- <div class=\"name\">\n<ion-input  [(ngModel)]=\"date\" placeholder=\"Date\" type=\"date\">\n</ion-input>\n</div> -->\n\n<div class=\"name\">\n  <ion-datetime  class=\"id\" display-format=\"YYYY MMMM DD\" [(ngModel)]=\"date\" placeholder=\"{{'DATE' | translate}}\"></ion-datetime>\n</div>\n\n<div class=\"name\">\n  <ion-label position=\"stacked\">{{'NOTES' | translate}}</ion-label>\n  <ion-textarea [(ngModel)]=\"note\"></ion-textarea>\n</div>\n\n  <ion-button item-center (click)=\"createOrEdit()\">\n    <ion-icon slot=\"start\" color=\"light\" name=\"add\"></ion-icon>\n    {{'ADD' | translate}}\n  </ion-button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/medical-history/medical-history.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/medical-history/medical-history.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-title>\n      {{'MEDICAL_HISTORY' | translate}}\n    </ion-title>\n\n  <!-- <ion-item class=\"itmeTitle\" lines=\"none\"> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/tab1\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n      <!-- <ion-toggle></ion-toggle> -->\n    </ion-buttons>\n  </ion-toolbar>\n    <!-- <ion-searchbar s-style mode=\"ios\" placeholder=\"Search Services..\"></ion-searchbar> -->\n  <!-- </ion-item> -->\n      <ion-segment mode=\"md\" [(ngModel)]=\"MedicalHistory\" >\n      <ion-segment-button mode=\"md\" value=\"Chronic\" >\n        <ion-label>{{'CHRONIC' | translate}}</ion-label>\n        <ion-icon name=\"stopwatch\" checked></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button mode=\"md\" value=\"Healed\">\n        <ion-label>{{'HEALD' | translate}}</ion-label>\n        <ion-icon name=\"thermometer\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button mode=\"md\" value=\"Sensitive\">\n        <ion-label>{{'SENSITIVE' | translate}}</ion-label>\n        <ion-icon name=\"bug\"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button mode=\"md\" value=\"generalNotes\">\n        <ion-label>{{'NOTES' | translate}}</ion-label>\n        <ion-icon name=\"alert\"></ion-icon>\n        </ion-segment-button>\n    </ion-segment>\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n\n\n\n  <div [ngSwitch]=\"MedicalHistory\">\n    <ion-list *ngSwitchCase=\"'Chronic'\">\n      <ion-item class=\"item-hm\" *ngFor=\"let ch of chronic \" lines=\"none\" >\n        <ion-label>\n          <h1>{{ch.diseaseName}}</h1>\n         <h2>{{ch.notes}}</h2>\n         <p>{{ch.date | date }}</p>\n        </ion-label>\n        <ion-icon slot=\"end\" name=\"create\" (click)=\"edit_MH(ch  , 'Chronic')\"></ion-icon>\n        <ion-icon slot=\"end\" color=\"danger\" name=\"trash\" (click)=\"delete_MH(ch  , 'Chronic')\"></ion-icon>\n      </ion-item>\n    </ion-list>\n\n    <ion-list  *ngSwitchCase=\"'Healed'\">\n        <ion-item class=\"item-hm\" *ngFor=\"let H of Healed \" lines=\"none\" >\n          <ion-label>\n            <h1>{{H.diseaseName}}</h1>\n           <h2>{{H.notes}}</h2>\n           <p>{{H.date | date }}</p>\n          </ion-label>\n          <ion-icon slot=\"end\" name=\"create\" (click)=\"edit_MH(H,'Healed')\"></ion-icon>\n          <ion-icon slot=\"end\" color=\"danger\" name=\"trash\" (click)=\"delete_MH(H ,'Healed')\"></ion-icon>\n        </ion-item>\n    </ion-list>\n\n    <ion-list  *ngSwitchCase=\"'Sensitive'\">\n        <ion-item class=\"item-hm\" *ngFor=\"let s of Sensitive \" lines=\"none\" >\n          <ion-label>\n            <h1>{{s.diseaseName}}</h1>\n           <h2>{{s.notes}}</h2>\n           <p>{{s.date | date }}</p>\n          </ion-label>\n          <ion-icon slot=\"end\" name=\"create\" (click)=\"edit_MH(s , 'Sensitive')\"></ion-icon>\n          <ion-icon slot=\"end\" color=\"danger\" name=\"trash\" (click)=\"delete_MH(s , 'Sensitive')\"></ion-icon>\n          </ion-item>\n    </ion-list>\n\n    <ion-list   *ngSwitchCase=\"'generalNotes'\">\n      <ion-item class=\"item-hm\" *ngFor=\"let note of generalNotes \" lines=\"none\">\n        <ion-label>\n          <h1>{{note.diseaseName}}</h1>\n         <h2> {{note.notes}}</h2>\n         <p>{{note.date | date }}</p>\n        </ion-label>\n        <ion-icon slot=\"end\" name=\"create\" (click)=\"edit_MH(note , 'generalNotes')\"></ion-icon>\n        <ion-icon slot=\"end\" color=\"danger\" name=\"trash\" (click)=\"delete_MH(note , 'generalNotes')\"></ion-icon>\n        </ion-item>\n  </ion-list>\n  </div>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"historyCreate($event)\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/create-mh/create-mh.component.scss":
/*!****************************************************!*\
  !*** ./src/app/create-mh/create-mh.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  background: white;\n  position: relative;\n  border-radius: 5px;\n  --padding-start:10px; }\n\nion-select {\n  background: white;\n  border-radius: 5px;\n  color: red;\n  text-align: justify; }\n\n.name {\n  text-align: justify;\n  padding-top: 10px;\n  width: 270px;\n  margin-left: auto;\n  margin-right: auto;\n  border-color: black; }\n\nion-textarea {\n  background: #ffffff9e;\n  height: 80px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 8px; }\n\nion-button {\n  --background: #353535;\n  width: 110px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px; }\n\n.sc-ion-buttons-ios-s .button-has-icon-only.button-clear {\n  margin-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLW1oL0Q6XFx3b3JrXFxwcm9qZWN0XFxTSENUL3NyY1xcYXBwXFxjcmVhdGUtbWhcXGNyZWF0ZS1taC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLG9CQUFnQixFQUFBOztBQUlsQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQixFQUFBOztBQUduQjtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtbWgvY3JlYXRlLW1oLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0e1xyXG4gIC8vIC0tYmFja2dyb3VuZDp2YXIoLS1jb250ZW50LWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OjEwcHg7XHJcbn1cclxuXHJcblxyXG5pb24tc2VsZWN0IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuXHJcbiAgLm5hbWV7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICBpb24tdGV4dGFyZWEge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjllO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMzUzNTM1O1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24taGFzLWljb24tb25seS5idXR0b24tY2xlYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/create-mh/create-mh.component.ts":
/*!**************************************************!*\
  !*** ./src/app/create-mh/create-mh.component.ts ***!
  \**************************************************/
/*! exports provided: CreateMHComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMHComponent", function() { return CreateMHComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_Diseases_Diseases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/Diseases/Diseases */ "./src/app/services/Diseases/Diseases.ts");
/* harmony import */ var src_app_services_Diseases_GeneralDiseases__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Diseases/GeneralDiseases */ "./src/app/services/Diseases/GeneralDiseases.ts");





let CreateMHComponent = class CreateMHComponent {
    constructor(popover, _diseases, modalController, _generalDiseases) {
        this.popover = popover;
        this._diseases = _diseases;
        this.modalController = modalController;
        this._generalDiseases = _generalDiseases;
        this.diseases = [];
    }
    compareWithFn(o1, o2) {
        return o1 === o2;
    }
    ;
    ngOnInit() { this.getAllDiseas(); }
    ionViewWillEnter() {
        console.log(this.diseaseList);
        console.log(this.patient_Id);
        // this.diseases_Id = this.diseaseList.id;
        // this.note        = this.diseaseList.notes;
        // this.date        = this.diseaseList.date;
        console.log(this.tabName);
        if (this.diseaseList) {
            this.initialSetting();
        }
    }
    ionViewDidEnter() {
        // setTimeout(() => {
        //   switch (this.diseaseType) {
        //     case 'Chronic':
        //       this._diseases.getChronicDiseaseForEdit(this.diseaseList.id).subscribe(data =>{
        //         console.log(data)
        //         this.diseases_Id = data.diseaseId;
        //         this.note        = data.notes;
        //         this.date        = this.diseaseList.date;
        //       })
        //       break;
        //     case 'Healed':
        //       break;
        //     case 'Sensitive':
        //         break;
        //     case 'generalNotes':
        //         break;    
        //     default:
        //       break;
        //   }
        // }, 1000);
    }
    initialSetting() {
        switch (this.tabName) {
            case 'Chronic':
                this._diseases.getChronicDiseaseForEdit(this.diseaseList.id).subscribe((data) => {
                    console.log(data);
                    this.diseases_Id = data.result.diseaseId;
                    this.note = data.result.notes;
                    this.date = data.result.date;
                    this.MyDiseaseTypeValue = data.result.diseaseId;
                    this.compareWith = this.compareWithFn;
                });
                break;
            case 'Healed':
                this._diseases.getHealedDiseaseForEdit(this.diseaseList.id).subscribe((data) => {
                    console.log(data);
                    this.diseases_Id = data.result.diseaseId;
                    this.note = data.result.notes;
                    this.date = data.result.date;
                    this.MyDiseaseTypeValue = data.result.diseaseId;
                    this.compareWith = this.compareWithFn;
                });
                break;
            case 'Sensitive':
                this._diseases.GetSensitiveDiseaseForEdit(this.diseaseList.id).subscribe((data) => {
                    console.log(data);
                    this.diseases_Id = data.result.diseaseId;
                    this.note = data.result.notes;
                    this.date = data.result.date;
                    this.MyDiseaseTypeValue = data.result.diseaseId;
                    this.compareWith = this.compareWithFn;
                });
                break;
            case 'generalNotes':
                break;
            default:
                break;
        }
    }
    ionViewWillLeave() { }
    getAllDiseas() {
        this._diseases.getAllDisease(undefined).subscribe(d => {
            this.diseases = d.result;
            console.log(this.diseases);
        });
    }
    diseasesTypeSelected(event) {
        console.log(event);
        this.diseases_Id = event.detail.value;
        this.diseases.forEach(element => {
            if (element.value == event.detail.value)
                this.diseaseTypeName = element.name;
        });
        console.log(this.diseaseTypeName);
    }
    createOrEdit() {
        this.id = (this.diseaseList) ? this.diseaseList.id : null;
        console.log("date :" + this.date + "<br>" + "diseas : " + this.diseases_Id + "<br>" + "note : " + this.note);
        switch (this.tabName) {
            case 'Chronic': {
                let item = {
                    patientId: this.patient_Id,
                    diseaseName: this.tabName,
                    diseaseId: this.diseases_Id,
                    date: this.date,
                    notes: this.note,
                    id: this.id
                };
                console.log(this.tabName);
                this._diseases.createOrEditChronicDisease(item).subscribe(data => {
                    // this.chronic.push(item)
                    console.log(data);
                });
                break;
            }
            case 'Healed': {
                let item = {
                    patientId: this.patient_Id,
                    diseaseName: this.tabName,
                    diseaseId: this.diseases_Id,
                    date: this.date,
                    notes: this.note,
                    id: this.id
                };
                console.log(this.tabName);
                this._diseases.createOrEditHealedDisease(item).subscribe(data => {
                    console.log(data);
                });
                break;
            }
            case 'Sensitive': {
                let item = {
                    patientId: this.patient_Id,
                    diseaseName: this.tabName,
                    diseaseId: this.diseases_Id,
                    date: this.date,
                    notes: this.note,
                    id: this.id
                };
                console.log(this.tabName);
                this._generalDiseases.createOrEditSensitiveDisease(item).subscribe(data => {
                    console.log(data);
                });
                break;
            }
            case 'generalNotes': {
                let item = {
                    patientId: this.patient_Id,
                    diseaseName: this.tabName,
                    diseaseId: this.diseases_Id,
                    date: this.date,
                    notes: this.note,
                    id: this.id
                };
                console.log(this.tabName);
                this._generalDiseases.createOrEditMedicalHistoryNote(item).subscribe(data => {
                    console.log(data);
                });
                break;
            }
            default:
                break;
        }
        this.modalController.dismiss({
            date: this.date,
            diseaseName: this.diseaseTypeName,
            id: this.id,
            notes: this.note,
            diseases_Id: this.diseases_Id,
            tabName: this.tabName,
        });
    }
    close() {
        this.modalController.dismiss({
            date: this.date,
            diseaseName: this.diseaseTypeName,
            id: this.id,
            notes: this.note,
            diseases_Id: this.diseases_Id,
            tabName: this.tabName,
        });
    }
};
CreateMHComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _services_Diseases_Diseases__WEBPACK_IMPORTED_MODULE_3__["Diseases"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_Diseases_GeneralDiseases__WEBPACK_IMPORTED_MODULE_4__["GeneralDiseases"] }
];
CreateMHComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-mh',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-mh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-mh/create-mh.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-mh.component.scss */ "./src/app/create-mh/create-mh.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _services_Diseases_Diseases__WEBPACK_IMPORTED_MODULE_3__["Diseases"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_Diseases_GeneralDiseases__WEBPACK_IMPORTED_MODULE_4__["GeneralDiseases"]])
], CreateMHComponent);



/***/ }),

/***/ "./src/app/enums/BaseUrl.ts":
/*!**********************************!*\
  !*** ./src/app/enums/BaseUrl.ts ***!
  \**********************************/
/*! exports provided: BaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUrl", function() { return BaseUrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var BaseUrl;
(function (BaseUrl) {
    // baseUrl= 'http://localhost:22743'
    BaseUrl["baseUrl"] = "http://shc.saudishct.com";
    //baseUrl='https://192.168.1.4:9001'
    //baseUrl=' http://mobil.shct.com'
    //baseUrl='https://192.168.1.104'
})(BaseUrl || (BaseUrl = {}));


/***/ }),

/***/ "./src/app/pages/medical-history/medical-history.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/medical-history/medical-history.module.ts ***!
  \*****************************************************************/
/*! exports provided: MedicalHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalHistoryPageModule", function() { return MedicalHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _medical_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medical-history.page */ "./src/app/pages/medical-history/medical-history.page.ts");
/* harmony import */ var src_app_create_mh_create_mh_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/create-mh/create-mh.component */ "./src/app/create-mh/create-mh.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _medical_history_page__WEBPACK_IMPORTED_MODULE_6__["MedicalHistoryPage"]
    }
];
let MedicalHistoryPageModule = class MedicalHistoryPageModule {
};
MedicalHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
        ],
        entryComponents: [src_app_create_mh_create_mh_component__WEBPACK_IMPORTED_MODULE_7__["CreateMHComponent"]],
        declarations: [_medical_history_page__WEBPACK_IMPORTED_MODULE_6__["MedicalHistoryPage"], src_app_create_mh_create_mh_component__WEBPACK_IMPORTED_MODULE_7__["CreateMHComponent"]]
    })
], MedicalHistoryPageModule);



/***/ }),

/***/ "./src/app/pages/medical-history/medical-history.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/medical-history/medical-history.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: #c0e2fd; }\n\nion-segment {\n  font-size: 200px; }\n\n.item-hm {\n  --background: #c0e2fd;\n  border-left-width: 4px;\n  border-left-style: solid;\n  border-left-color: #353535;\n  margin-top: 15px; }\n\nh1 {\n  font-size: 25px; }\n\np {\n  font-size: 10px; }\n\nh2 {\n  color: #6d6d6d; }\n\n.itmeTitle {\n  --background: var(--content-color); }\n\nion-list {\n  background: var(--content-color); }\n\nion-segment-button {\n  height: 5px;\n  --border-radius: 8px;\n  --border-style: solid;\n  --border-width: 2px;\n  --margin-end: 4px;\n  --margin-start: 4px;\n  --padding-end: 4px;\n  width: 0px;\n  --padding-start: 4px;\n  --transition: background-color 10ms linear;\n  --margin-end:auto;\n  --margin-start:auto; }\n\nion-modal {\n  --background: #ffffff;\n  --border-color: #3880ff;\n  --border-radius: 4px;\n  --border-style: solid;\n  --border-width: 8px;\n  --height: 100%;\n  --max-height: 100%;\n  --max-width: 100%;\n  --min-height: 100%;\n  --min-width: 100%;\n  --width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVkaWNhbC1oaXN0b3J5L0Q6XFx3b3JrXFxwcm9qZWN0XFxTSENUL3NyY1xcYXBwXFxwYWdlc1xcbWVkaWNhbC1oaXN0b3J5XFxtZWRpY2FsLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFDSyxnQkFBZ0IsRUFBQTs7QUFFckI7RUFDSSxxQkFBYTtFQUNiLHNCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsMEJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtDQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksV0FBVztFQUNYLG9CQUFnQjtFQUNoQixxQkFBZTtFQUNmLG1CQUFlO0VBQ2YsaUJBQWE7RUFDYixtQkFBZTtFQUNmLGtCQUFjO0VBQ2QsVUFBVTtFQUNWLG9CQUFnQjtFQUNoQiwwQ0FBYTtFQUNiLGlCQUFhO0VBQ2IsbUJBQWUsRUFBQTs7QUFFbkI7RUFDSSxxQkFBYTtFQUNiLHVCQUFlO0VBQ2Ysb0JBQWdCO0VBQ2hCLHFCQUFlO0VBQ2YsbUJBQWU7RUFDZixjQUFTO0VBQ1Qsa0JBQWE7RUFDYixpQkFBWTtFQUNaLGtCQUFhO0VBQ2IsaUJBQVk7RUFDWixhQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZWRpY2FsLWhpc3RvcnkvbWVkaWNhbC1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYzBlMmZkO1xyXG59XHJcbmlvbi1zZWdtZW50e1xyXG4gICAgIGZvbnQtc2l6ZTogMjAwcHg7XHJcbn1cclxuLml0ZW0taG17XHJcbiAgICAtLWJhY2tncm91bmQ6ICNjMGUyZmQ7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDo0cHg7XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjojMzUzNTM1O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbn1cclxuaDF7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5oMntcclxuICAgIGNvbG9yOiAjNmQ2ZDZkO1xyXG59XHJcblxyXG4uaXRtZVRpdGxle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcclxuICB9XHJcblxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAtLW1hcmdpbi1lbmQ6IDRweDtcclxuICAgIC0tbWFyZ2luLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA0cHg7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICAtLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTBtcyBsaW5lYXI7XHJcbiAgICAtLW1hcmdpbi1lbmQ6YXV0bztcclxuICAgIC0tbWFyZ2luLXN0YXJ0OmF1dG87XHJcbn1cclxuaW9uLW1vZGFsIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjMzg4MGZmO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWJvcmRlci13aWR0aDogOHB4O1xyXG4gICAgLS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAtLW1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAtLW1heC13aWR0aDogMTAwJTtcclxuICAgIC0tbWluLWhlaWdodDogMTAwJTtcclxuICAgIC0tbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgLS13aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/medical-history/medical-history.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/medical-history/medical-history.page.ts ***!
  \***************************************************************/
/*! exports provided: MedicalHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalHistoryPage", function() { return MedicalHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_Diseases_Diseases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Diseases/Diseases */ "./src/app/services/Diseases/Diseases.ts");
/* harmony import */ var src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/DataShare/data-share.service */ "./src/app/services/DataShare/data-share.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_create_mh_create_mh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/create-mh/create-mh.component */ "./src/app/create-mh/create-mh.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_Diseases_GeneralDiseases__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/Diseases/GeneralDiseases */ "./src/app/services/Diseases/GeneralDiseases.ts");








let MedicalHistoryPage = class MedicalHistoryPage {
    constructor(_diseases, _dataShare, activeRouter, alertCtrl, modalController, _generalDiseases) {
        this._diseases = _diseases;
        this._dataShare = _dataShare;
        this.activeRouter = activeRouter;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this._generalDiseases = _generalDiseases;
        this.MedicalHistory = "Chronic";
        this.chronic = [];
        this.Healed = [];
        this.Sensitive = [];
        this.generalNotes = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.initialSetting();
        this.getChronicDiseases();
        this.getHealedDiseases();
        this.getSensitiveDiseases();
        this.getMedicalHistoryNote();
    }
    initialSetting() {
        if (this.activeRouter.snapshot.data['dataSharing']) {
            this.patientInfo = this.activeRouter.snapshot.data['dataSharing'];
            console.log(this.patientInfo);
        }
        this.patient_Id = this.patientInfo.id;
    }
    ionViewWillLeave() {
        this.chronic = [];
        this.Healed = [];
        this.Sensitive = [];
        this.generalNotes = [];
    }
    getChronicDiseases() {
        this._diseases.getChronicDiseasesForPatient(undefined, this.patient_Id, undefined, undefined, undefined).subscribe(chronic => {
            this.chronic = chronic.result.items;
            console.log(chronic);
        });
    }
    getHealedDiseases() {
        this._diseases.getHealedDiseasesForPatient(undefined, this.patient_Id, undefined, undefined, undefined).subscribe(Healed => {
            this.Healed = Healed.result.items;
            console.log(Healed);
        });
    }
    getSensitiveDiseases() {
        this._diseases.getSensitiveDiseasesForPatient(undefined, this.patient_Id, undefined, undefined, undefined).subscribe(Sensitive => {
            this.Sensitive = Sensitive.result.items;
            console.log(Sensitive);
        });
    }
    getMedicalHistoryNote() {
        this._generalDiseases.getHealedMedicalHistoryNote(undefined, this.patient_Id, undefined, undefined, undefined).subscribe(notes => {
            this.generalNotes = notes.result.items;
            console.log(this.generalNotes);
        });
    }
    historyCreate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_create_mh_create_mh_component__WEBPACK_IMPORTED_MODULE_5__["CreateMHComponent"],
                cssClass: "history-medical",
                componentProps: {
                    tabName: this.MedicalHistory,
                    patient_Id: this.patient_Id
                }
            });
            yield modal.present();
            console.log((yield modal.onWillDismiss()).data);
            yield modal.onDidDismiss().then((detail) => {
                console.log(detail);
                if (detail.data.diseases_Id) {
                    switch (detail.data.tabName) {
                        case 'Chronic':
                            {
                                //  this.chronic.push(detail.data);
                                this.getChronicDiseases();
                            }
                            break;
                        case 'Healed':
                            {
                                //    this.Healed.push(detail.data);
                                this.getHealedDiseases();
                            }
                            break;
                        case 'Sensitive':
                            {
                                //    this.Sensitive.push(detail.data)
                                this.getSensitiveDiseases();
                            }
                            break;
                        case 'generalNotes':
                            {
                                //   this.generalNotes.push(detail.data);
                                this.getMedicalHistoryNote();
                            }
                            break;
                        default:
                            break;
                    }
                }
                else
                    console.log("colse model without Change value  ");
            });
        });
    }
    delete_MH(diseaseList, diseaseType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(diseaseType);
            const alert = yield this.alertCtrl.create({
                header: 'Delete Item',
                subHeader: 'Are you sure to delete this Item !',
                mode: "ios",
                buttons: [{
                        text: "OK",
                        handler: () => {
                            switch (diseaseType) {
                                case 'Chronic':
                                    {
                                        this._diseases.deleteChronicDisease(diseaseList.id).subscribe(data => { console.log(data); });
                                        var index = this.chronic.map(x => {
                                            return x.id;
                                        }).indexOf(diseaseList.id);
                                        this.chronic.splice(index, 1);
                                        console.log(this.chronic);
                                    }
                                    break;
                                case 'Healed':
                                    {
                                        this._diseases.deleteHealedDisease(diseaseList.id).subscribe(data => { console.log(data); });
                                        var index = this.chronic.map(x => {
                                            return x.id;
                                        }).indexOf(diseaseList.id);
                                        this.Healed.splice(index, 1);
                                        console.log(this.Healed);
                                    }
                                    break;
                                case 'Sensitive':
                                    {
                                        this._generalDiseases.deleteSensitiveDisease(diseaseList.id).subscribe(data => { console.log(data); });
                                        var index = this.Sensitive.map(x => {
                                            return x.id;
                                        }).indexOf(diseaseList.id);
                                        this.Sensitive.splice(index, 1);
                                        console.log(this.Sensitive);
                                    }
                                    break;
                                case 'generalNotes':
                                    {
                                        this._generalDiseases.deleteMedicalHistoryNote(diseaseList.id).subscribe(data => { console.log(data); });
                                        var index = this.chronic.map(x => {
                                            return x.id;
                                        }).indexOf(diseaseList.id);
                                        this.generalNotes.splice(index, 1);
                                        console.log(this.generalNotes);
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                    }, {
                        text: "Cancel"
                    }]
            });
            yield alert.present();
        });
    }
    edit_MH(diseaseList, diseaseType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(diseaseList);
            const modal = yield this.modalController.create({
                component: src_app_create_mh_create_mh_component__WEBPACK_IMPORTED_MODULE_5__["CreateMHComponent"],
                cssClass: "history-medical",
                componentProps: {
                    tabName: this.MedicalHistory,
                    patient_Id: this.patient_Id,
                    diseaseList: diseaseList,
                    diseaseType: diseaseType
                }
            });
            yield modal.present();
            yield modal.onDidDismiss().then((detail) => {
                console.log(detail.data.tabName);
                switch (detail.data.tabName) {
                    case 'Chronic':
                        {
                            //Find index of specific object using findIndex method.    
                            let objIndex = this.chronic.findIndex((obj => obj.id == detail.data.id));
                            //Log object to Console.
                            console.log("Before update: ", this.chronic[objIndex]);
                            //Update object's name property.
                            this.chronic[objIndex] = detail.data;
                            //Log object to console again.
                            console.log("After update: ", this.chronic[objIndex]);
                            console.log(detail);
                        }
                        break;
                    case 'Healed':
                        {
                            //Find index of specific object using findIndex method.    
                            let objIndex = this.Healed.findIndex((obj => obj.id == detail.data.id));
                            //Update object's name property.
                            this.Healed[objIndex] = detail.data;
                        }
                        break;
                    case 'Sensitive':
                        {
                            //Find index of specific object using findIndex method.    
                            let objIndex = this.Sensitive.findIndex((obj => obj.id == detail.data.id));
                            //Update object's name property.
                            this.Sensitive[objIndex] = detail.data;
                        }
                        break;
                    case 'generalNotes':
                        {
                            //Find index of specific object using findIndex method.    
                            let objIndex = this.generalNotes.findIndex((obj => obj.id == detail.data.id));
                            //Update object's name property.
                            this.generalNotes[objIndex] = detail.data;
                        }
                        break;
                    default:
                        break;
                }
            });
        });
    }
};
MedicalHistoryPage.ctorParameters = () => [
    { type: src_app_services_Diseases_Diseases__WEBPACK_IMPORTED_MODULE_2__["Diseases"] },
    { type: src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_3__["DataShareService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_services_Diseases_GeneralDiseases__WEBPACK_IMPORTED_MODULE_7__["GeneralDiseases"] }
];
MedicalHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medical-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./medical-history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/medical-history/medical-history.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./medical-history.page.scss */ "./src/app/pages/medical-history/medical-history.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Diseases_Diseases__WEBPACK_IMPORTED_MODULE_2__["Diseases"],
        src_app_services_DataShare_data_share_service__WEBPACK_IMPORTED_MODULE_3__["DataShareService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        src_app_services_Diseases_GeneralDiseases__WEBPACK_IMPORTED_MODULE_7__["GeneralDiseases"]])
], MedicalHistoryPage);



/***/ }),

/***/ "./src/app/services/Diseases/Diseases.ts":
/*!***********************************************!*\
  !*** ./src/app/services/Diseases/Diseases.ts ***!
  \***********************************************/
/*! exports provided: Diseases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diseases", function() { return Diseases; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_enums_BaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/enums/BaseUrl */ "./src/app/enums/BaseUrl.ts");




let Diseases = class Diseases {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_app_enums_BaseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl;
    }
    /**
         * @param filter (optional)
         * @param patientId (optional)
         * @param sorting (optional)
         * @param skipCount (optional)
         * @param maxResultCount (optional)
         * @return Success
         */
    getSensitiveDiseasesForPatient(filter, patientId, sorting, skipCount, maxResultCount) {
        let url_ = this.baseUrl + "/api/services/app/Patients/GetSensitiveDiseasesForPatient?";
        if (filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
        if (patientId !== undefined)
            url_ += "PatientId=" + encodeURIComponent("" + patientId) + "&";
        if (sorting !== undefined)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.get(url_);
    }
    /**
 * @param filter (optional)
 * @param patientId (optional)
 * @param sorting (optional)
 * @param skipCount (optional)
 * @param maxResultCount (optional)
 * @return Success
 */
    getChronicDiseasesForPatient(filter, patientId, sorting, skipCount, maxResultCount) {
        let url_ = this.baseUrl + "/api/services/app/Patients/GetChronicDiseasesForPatient?";
        if (filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
        if (patientId !== undefined)
            url_ += "PatientId=" + encodeURIComponent("" + patientId) + "&";
        if (sorting !== undefined)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.get(url_);
    }
    /**
 * @param input (optional)
 * @return Success
 */
    createOrEditChronicDisease(input) {
        let url_ = this.baseUrl + "/api/services/app/Patients/CreateOrEditChronicDisease";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.post(url_, input);
    }
    /**
    * @param id (optional)
    * @return Success
    */
    getChronicDiseaseForEdit(id) {
        let url_ = this.baseUrl + "/api/services/app/Patients/GetChronicDiseaseForEdit?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.get(url_);
    }
    /**
* @param id (optional)
* @return Success
*/
    GetSensitiveDiseaseForEdit(id) {
        let url_ = this.baseUrl + "/api/services/app/Patients/GetSensitiveDiseaseForEdit?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.get(url_);
    }
    /**
 * @param id (optional)
 * @return Success
 */
    deleteChronicDisease(id) {
        let url_ = this.baseUrl + "/api/services/app/Patients/DeleteChronicDisease?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.delete(url_);
    }
    /**
     * @param filter (optional)
     * @param patientId (optional)
     * @param sorting (optional)
     * @param skipCount (optional)
     * @param maxResultCount (optional)
     * @return Success
     */
    getHealedDiseasesForPatient(filter, patientId, sorting, skipCount, maxResultCount) {
        let url_ = this.baseUrl + "/api/services/app/Patients/GetHealedDiseasesForPatient?";
        if (filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
        if (patientId !== undefined)
            url_ += "PatientId=" + encodeURIComponent("" + patientId) + "&";
        if (sorting !== undefined)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.get(url_);
    }
    /**
 * @param input (optional)
 * @return Success
 */
    createOrEditHealedDisease(input) {
        let url_ = this.baseUrl + "/api/services/app/Patients/CreateOrEditHealedDisease";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.post(url_, input);
    }
    /**
    * @param id (optional)
    * @return Success
    */
    getHealedDiseaseForEdit(id) {
        let url_ = this.baseUrl + "/api/services/app/Patients/GetHealedDiseaseForEdit?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.get(url_);
    }
    /**
     * @param id (optional)
     * @return Success
     */
    deleteHealedDisease(id) {
        let url_ = this.baseUrl + "/api/services/app/Patients/DeleteHealedDisease?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.delete(url_);
    }
    /**
     * @param filter (optional)
     * @return Success
     */
    getAllDisease(filter) {
        let url_ = this.baseUrl + "/api/services/app/CommonLookup/GetAllDisease?";
        if (filter !== undefined)
            url_ += "filter=" + encodeURIComponent("" + filter) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.get(url_);
    }
};
Diseases.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
Diseases = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], Diseases);



/***/ }),

/***/ "./src/app/services/Diseases/GeneralDiseases.ts":
/*!******************************************************!*\
  !*** ./src/app/services/Diseases/GeneralDiseases.ts ***!
  \******************************************************/
/*! exports provided: GeneralDiseases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralDiseases", function() { return GeneralDiseases; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_enums_BaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/enums/BaseUrl */ "./src/app/enums/BaseUrl.ts");




let GeneralDiseases = class GeneralDiseases {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_app_enums_BaseUrl__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"].baseUrl;
    }
    /**
       * @param input (optional)
       * @return Success
       */
    createOrEditSensitiveDisease(input) {
        let url_ = this.baseUrl + "/api/services/app/Patients/CreateOrEditSensitiveDisease";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.post(url_, input);
    }
    /**
  * @param id (optional)
  * @return Success
  */
    getSensitiveDiseaseForEdit(id) {
        let url_ = this.baseUrl + "/api/services/app/Patients/GetSensitiveDiseaseForEdit?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.get(url_);
    }
    /**
 * @param id (optional)
 * @return Success
 */
    deleteSensitiveDisease(id) {
        let url_ = this.baseUrl + "/api/services/app/Patients/DeleteSensitiveDisease?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.delete(url_);
    }
    /**
     * @param input (optional)
     * @return Success
     */
    createOrEditMedicalHistoryNote(input) {
        let url_ = this.baseUrl + "/api/services/app/Patients/CreateOrEditMedicalHistoryNote";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.post(url_, input);
    }
    /**
     * @param filter (optional)
     * @param patientId (optional)
     * @param sorting (optional)
     * @param skipCount (optional)
     * @param maxResultCount (optional)
     * @return Success
     */
    getHealedMedicalHistoryNote(filter, patientId, sorting, skipCount, maxResultCount) {
        let url_ = this.baseUrl + "/api/services/app/Patients/GetHistoryNotesForPatient?";
        if (filter !== undefined)
            url_ += "Filter=" + encodeURIComponent("" + filter) + "&";
        if (patientId !== undefined)
            url_ += "PatientId=" + encodeURIComponent("" + patientId) + "&";
        if (sorting !== undefined)
            url_ += "Sorting=" + encodeURIComponent("" + sorting) + "&";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.get(url_);
    }
    /**
 * @param id (optional)
 * @return Success
 */
    deleteMedicalHistoryNote(id) {
        let url_ = this.baseUrl + "/api/services/app/Patients/DeleteMedicalHistoryNote?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        return this.http.delete(url_);
    }
};
GeneralDiseases.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GeneralDiseases = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GeneralDiseases);



/***/ })

}]);
//# sourceMappingURL=pages-medical-history-medical-history-module-es2015.js.map