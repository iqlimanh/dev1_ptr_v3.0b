webpackJsonp([36],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/artikel/artikel.module": [
		272,
		34
	],
	"../pages/bantuan/bantuan.module": [
		273,
		33
	],
	"../pages/berita-reportase/berita-reportase.module": [
		274,
		32
	],
	"../pages/berita/berita.module": [
		275,
		31
	],
	"../pages/corsores/corsores.module": [
		276,
		30
	],
	"../pages/home/home.module": [
		277,
		29
	],
	"../pages/info-produk/info-produk.module": [
		288,
		28
	],
	"../pages/kegiatan-tahunan/kegiatan-tahunan.module": [
		278,
		27
	],
	"../pages/laporan/laporan.module": [
		279,
		26
	],
	"../pages/login/login.module": [
		280,
		25
	],
	"../pages/menu/menu.module": [
		289,
		24
	],
	"../pages/pedoman-audit/pedoman-audit.module": [
		281,
		23
	],
	"../pages/pedoman-etik/pedoman-etik.module": [
		282,
		22
	],
	"../pages/pedoman-gcg/pedoman-gcg.module": [
		283,
		21
	],
	"../pages/pedoman-gratifikasi/pedoman-gratifikasi.module": [
		284,
		20
	],
	"../pages/pedoman-jasa/pedoman-jasa.module": [
		285,
		19
	],
	"../pages/pedoman-kerja/pedoman-kerja.module": [
		286,
		18
	],
	"../pages/pedoman-komite/pedoman-komite.module": [
		287,
		17
	],
	"../pages/pedoman-wbs/pedoman-wbs.module": [
		304,
		35
	],
	"../pages/pemasaran/pemasaran.module": [
		307,
		16
	],
	"../pages/pengumuman/pengumuman.module": [
		290,
		15
	],
	"../pages/profil/profil.module": [
		291,
		14
	],
	"../pages/siaran-pers/siaran-pers.module": [
		292,
		13
	],
	"../pages/special/special.module": [
		293,
		12
	],
	"../pages/tab1/tab1.module": [
		294,
		11
	],
	"../pages/tab2/tab2.module": [
		295,
		10
	],
	"../pages/tabs/tabs.module": [
		296,
		9
	],
	"../pages/tanya-gcg/tanya-gcg.module": [
		297,
		8
	],
	"../pages/tanya1/tanya1.module": [
		298,
		7
	],
	"../pages/tanya2/tanya2.module": [
		299,
		6
	],
	"../pages/tanya3/tanya3.module": [
		300,
		5
	],
	"../pages/tanya4/tanya4.module": [
		301,
		4
	],
	"../pages/tanya5/tanya5.module": [
		302,
		3
	],
	"../pages/tanya6/tanya6.module": [
		303,
		2
	],
	"../pages/tata-kelola/tata-kelola.module": [
		306,
		1
	],
	"../pages/tautan/tautan.module": [
		305,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedomanWbsPage; });
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
 * Generated class for the PedomanWbsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedomanWbsPage = /** @class */ (function () {
    function PedomanWbsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PedomanWbsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedomanWbsPage');
    };
    PedomanWbsPage.prototype.downloadAndOpenPdf = function () {
        window.open("http://www.petrokimia-gresik.com/Resources/Docs/Pedoman%20WBS.pdf", '_system', 'location=yes');
    };
    PedomanWbsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedoman-wbs',template:/*ion-inline-start:"E:\KKI II\ionic-petro3\src\pages\pedoman-wbs\pedoman-wbs.html"*/'<!--\n  Generated template for the PedomanWbsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar color="header">\n    <ion-title>pedoman WBS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h3 class="search-query">\n    <span>Showing: </span>\n    <ion-badge class="query-tag"></ion-badge>\n    <span class="query-explanation"> Pedoman WBS </span>\n  </h3>\n\n  <ion-card class="category-concept-card cardHome">\n    <ion-card-header>\n      <h2 class="category-title" class="textDesc text-wrap">Pedoman WBS</h2>\n    </ion-card-header>\n    <ion-card-content>\n      <p class="category-description">\n        Selengkapnya...\n      </p>\n      <ion-row>\n        <ion-col no-padding>\n          <ion-badge class="category-tag" (click)=\'downloadAndOpenPdf();\'>Download and open PDF</ion-badge>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  	</ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\KKI II\ionic-petro3\src\pages\pedoman-wbs\pedoman-wbs.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], PedomanWbsPage);
    return PedomanWbsPage;
    var _a, _b;
}());

//# sourceMappingURL=pedoman-wbs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pedoman_wbs_pedoman_wbs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_document_viewer__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pedoman_wbs_pedoman_wbs__["a" /* PedomanWbsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/artikel/artikel.module#ArtikelPageModule', name: 'ArtikelPage', segment: 'artikel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bantuan/bantuan.module#BantuanPageModule', name: 'BantuanPage', segment: 'bantuan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/berita-reportase/berita-reportase.module#BeritaReportasePageModule', name: 'BeritaReportasePage', segment: 'berita-reportase', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/berita/berita.module#BeritaPageModule', name: 'BeritaPage', segment: 'berita', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/corsores/corsores.module#CorsoresPageModule', name: 'CorsoresPage', segment: 'corsores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kegiatan-tahunan/kegiatan-tahunan.module#KegiatanTahunanPageModule', name: 'KegiatanTahunanPage', segment: 'kegiatan-tahunan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/laporan/laporan.module#LaporanPageModule', name: 'LaporanPage', segment: 'laporan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedoman-audit/pedoman-audit.module#PedomanAuditPageModule', name: 'PedomanAuditPage', segment: 'pedoman-audit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedoman-etik/pedoman-etik.module#PedomanEtikPageModule', name: 'PedomanEtikPage', segment: 'pedoman-etik', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedoman-gcg/pedoman-gcg.module#PedomanGcgPageModule', name: 'PedomanGcgPage', segment: 'pedoman-gcg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedoman-gratifikasi/pedoman-gratifikasi.module#PedomanGratifikasiPageModule', name: 'PedomanGratifikasiPage', segment: 'pedoman-gratifikasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedoman-jasa/pedoman-jasa.module#PedomanJasaPageModule', name: 'PedomanJasaPage', segment: 'pedoman-jasa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedoman-kerja/pedoman-kerja.module#PedomanKerjaPageModule', name: 'PedomanKerjaPage', segment: 'pedoman-kerja', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedoman-komite/pedoman-komite.module#PedomanKomitePageModule', name: 'PedomanKomitePage', segment: 'pedoman-komite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-produk/info-produk.module#InfoProdukPageModule', name: 'InfoProdukPage', segment: 'info-produk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pengumuman/pengumuman.module#PengumumanPageModule', name: 'PengumumanPage', segment: 'pengumuman', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profil/profil.module#ProfilPageModule', name: 'ProfilPage', segment: 'profil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/siaran-pers/siaran-pers.module#SiaranPersPageModule', name: 'SiaranPersPage', segment: 'siaran-pers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/special/special.module#SpecialPageModule', name: 'SpecialPage', segment: 'special', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab1/tab1.module#Tab1PageModule', name: 'Tab1Page', segment: 'tab1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab2/tab2.module#Tab2PageModule', name: 'Tab2Page', segment: 'tab2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tanya-gcg/tanya-gcg.module#TanyaGcgPageModule', name: 'TanyaGcgPage', segment: 'tanya-gcg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tanya1/tanya1.module#Tanya1PageModule', name: 'Tanya1Page', segment: 'tanya1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tanya2/tanya2.module#Tanya2PageModule', name: 'Tanya2Page', segment: 'tanya2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tanya3/tanya3.module#Tanya3PageModule', name: 'Tanya3Page', segment: 'tanya3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tanya4/tanya4.module#Tanya4PageModule', name: 'Tanya4Page', segment: 'tanya4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tanya5/tanya5.module#Tanya5PageModule', name: 'Tanya5Page', segment: 'tanya5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tanya6/tanya6.module#Tanya6PageModule', name: 'Tanya6Page', segment: 'tanya6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedoman-wbs/pedoman-wbs.module#PedomanWbsPageModule', name: 'PedomanWbsPage', segment: 'pedoman-wbs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tautan/tautan.module#TautanPageModule', name: 'TautanPage', segment: 'tautan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tata-kelola/tata-kelola.module#TataKelolaPageModule', name: 'TataKelolaPage', segment: 'tata-kelola', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pemasaran/pemasaran.module#PemasaranPageModule', name: 'PemasaranPage', segment: 'pemasaran', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pedoman_wbs_pedoman_wbs__["a" /* PedomanWbsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'MenuPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\KKI II\ionic-petro3\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\KKI II\ionic-petro3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map