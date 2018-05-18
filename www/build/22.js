webpackJsonp([22],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedomanEtikPageModule", function() { return PedomanEtikPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedoman_etik__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedomanEtikPageModule = /** @class */ (function () {
    function PedomanEtikPageModule() {
    }
    PedomanEtikPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedoman_etik__["a" /* PedomanEtikPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedoman_etik__["a" /* PedomanEtikPage */]),
            ],
        })
    ], PedomanEtikPageModule);
    return PedomanEtikPageModule;
}());

//# sourceMappingURL=pedoman-etik.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedomanEtikPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PedomanEtikPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedomanEtikPage = /** @class */ (function () {
    function PedomanEtikPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PedomanEtikPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedomanEtikPage');
    };
    PedomanEtikPage.prototype.downloadAndOpenPdf = function () {
        window.open("http://www.petrokimia-gresik.com/Resources/Docs/PEBK_2017.pdf", '_system', 'location=yes');
    };
    PedomanEtikPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedoman-etik',template:/*ion-inline-start:"E:\KKI II\ionic-petro3\src\pages\pedoman-etik\pedoman-etik.html"*/'<!--\n  Generated template for the PedomanEtikPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar color="header">\n    <ion-title>pedoman Etika</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="search-query">\n    <span>Showing: </span>\n    <ion-badge class="query-tag"></ion-badge>\n    <span class="query-explanation"> Pedoman Etika Kerja </span>\n  </h3>\n\n  <ion-card class="category-concept-card cardHome">\n    <ion-card-header>\n      <h2 class="category-title" class="textDesc text-wrap">Pedoman Etika kerja</h2>\n    </ion-card-header>\n    <ion-card-content>\n      <p class="category-description">\n        Selengkapnya...\n      </p>\n      <ion-row>\n        <ion-col no-padding>\n          <ion-badge class="category-tag" (click)=\'downloadAndOpenPdf();\'>Download and Open PDF</ion-badge>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  	</ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\KKI II\ionic-petro3\src\pages\pedoman-etik\pedoman-etik.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], PedomanEtikPage);
    return PedomanEtikPage;
    var _a, _b;
}());

//# sourceMappingURL=pedoman-etik.js.map

/***/ })

});
//# sourceMappingURL=22.js.map