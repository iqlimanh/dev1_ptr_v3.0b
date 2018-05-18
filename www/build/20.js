webpackJsonp([20],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedomanGratifikasiPageModule", function() { return PedomanGratifikasiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedoman_gratifikasi__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedomanGratifikasiPageModule = /** @class */ (function () {
    function PedomanGratifikasiPageModule() {
    }
    PedomanGratifikasiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedoman_gratifikasi__["a" /* PedomanGratifikasiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedoman_gratifikasi__["a" /* PedomanGratifikasiPage */]),
            ],
        })
    ], PedomanGratifikasiPageModule);
    return PedomanGratifikasiPageModule;
}());

//# sourceMappingURL=pedoman-gratifikasi.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedomanGratifikasiPage; });
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
 * Generated class for the PedomanGratifikasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedomanGratifikasiPage = /** @class */ (function () {
    function PedomanGratifikasiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PedomanGratifikasiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedomanGratifikasiPage');
    };
    PedomanGratifikasiPage.prototype.download = function () {
        window.open("http://www.petrokimia-gresik.com/Resources/Docs/Pedoman%20Pengendalian%20Gratifikasi.pdf", '_system', 'location=yes');
    };
    PedomanGratifikasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedoman-gratifikasi',template:/*ion-inline-start:"E:\KKI II\ionic-petro3\src\pages\pedoman-gratifikasi\pedoman-gratifikasi.html"*/'<!--\n  Generated template for the PedomanGratifikasiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar color="header">\n    <ion-title>pedoman Gratifikasi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="search-query">\n    <span>Showing: </span>\n    <ion-badge class="query-tag"></ion-badge>\n    <span class="query-explanation"> Pedoman Pengendalian Gratifikasi </span>\n  </h3>\n\n  <ion-card class="category-concept-card cardHome">\n    <ion-card-header>\n      <h2 class="category-title" class="textDesc text-wrap">Pedoman Pengendalian Gratifikasi</h2>\n    </ion-card-header>\n    <ion-card-content>\n      <p class="category-description">\n        Selengkapnya...\n      </p>\n      <ion-row>\n        <ion-col no-padding>\n          <ion-badge class="category-tag" (click)=\'download();\'>Download and Open PDF</ion-badge>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  	</ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\KKI II\ionic-petro3\src\pages\pedoman-gratifikasi\pedoman-gratifikasi.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], PedomanGratifikasiPage);
    return PedomanGratifikasiPage;
    var _a, _b;
}());

//# sourceMappingURL=pedoman-gratifikasi.js.map

/***/ })

});
//# sourceMappingURL=20.js.map