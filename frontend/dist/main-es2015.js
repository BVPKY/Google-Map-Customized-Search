(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"text-center\" [ngStyle]=\"{ 'color': changeColor }\">{{title}}</h1>\n</div>\n\n<div class=\"input-group\">\n  <input type=\"text\" placeholder=\"Enter Location\" class=\"form-control\" (input)=\"onEnter(value)\" (change)=\"setFlag()\"\n    [(ngModel)]=\"value\" #search />\n</div>\n\n<div class=\"input-result\" *ngIf=\"flag\">\n  <li *ngFor=\"let client of geoSearch.names\">\n    <a (click)=\"onselectClient(client)\">{{client}}</a>\n  </li>\n</div>\n\n<agm-map [zoom]=\"zoom\" [latitude]=\"latitude\" [longitude]=\"longitude\" [fullscreenControl]=\"true\" [mapTypeControl]=\"true\" [usePanning]=\"true\" [fitBounds]=\"true\">\n  <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [agmFitBounds]=\"true\"></agm-marker>\n</agm-map>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\n    margin-bottom: 0px;\n    background-image: url('Universe.jpeg');\n    background-position: 44% 56%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    text-shadow: #52597d 0.5em 0.5em 0.5em;\n}\n\nagm-map {\n    height: 400px;\n}\n\n.input-result{\n    display: block;\n    width: 100%;\n    font-size: 1rem;\n    font-weight: 400;\n    color: #495057;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: .25rem;\n}\n\nli {\n    list-style-type: none;\n    width: auto;\n    opacity: 0.75;\n    border: 1px solid rgb(245, 239, 239);\n}\n\na:hover { \n    background-color: rgb(219, 229, 233);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsc0NBQThDO0lBQzlDLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0ksb0NBQW9DO0VBQ3RDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL1VuaXZlcnNlLmpwZWcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ0JSA1NiU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHRleHQtc2hhZG93OiAjNTI1OTdkIDAuNWVtIDAuNWVtIDAuNWVtO1xufVxuXG5hZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufVxuXG4uaW5wdXQtcmVzdWx0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG59XG5cbmxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgb3BhY2l0eTogMC43NTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQ1LCAyMzksIDIzOSk7XG59XG5hOmhvdmVyIHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjI5LCAyMzMpO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _geonames_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geonames.service */ "./src/app/geonames.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let AppComponent = class AppComponent {
    constructor(geoSearch) {
        this.geoSearch = geoSearch;
        this.value = '';
        this.title = 'Custom GeoSearch';
        this.names = [];
        this.id = [];
        this.flag = false;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.colors = ["#f44336", "#ffebee", "#ffcdd2", "#ef9a9a", "#e57373", "#ef5350", "#f44336", "#e53935", "#d32f2f", "#c62828", "#b71c1c", "#ff8a80", "#ff5252", "#ff1744", "#d50000", "#e91e63", "#fce4ec", "#f8bbd0", "#f48fb1", "#f06292", "#ec407a", "#e91e63", "#d81b60", "#c2185b", "#ad1457", "#880e4f", "#ff80ab", "#ff4081", "#f50057", "#c51162", "#9c27b0", "#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c", "#ea80fc", "#e040fb", "#d500f9", "#aa00ff", "#673ab7", "#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92", "#b388ff", "#7c4dff", "#651fff", "#6200ea", "#3f51b5", "#e8eaf6", "#c5cae9", "#9fa8da", "#7986cb", "#5c6bc0", "#3f51b5", "#3949ab", "#303f9f", "#283593", "#1a237e", "#8c9eff", "#536dfe", "#3d5afe", "#304ffe", "#2196f3", "#e3f2fd", "#bbdefb", "#90caf9", "#64b5f6", "#42a5f5", "#2196f3", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1", "#82b1ff", "#448aff", "#2979ff", "#2962ff", "#03a9f4", "#e1f5fe", "#b3e5fc", "#81d4fa", "#4fc3f7", "#29b6f6", "#03a9f4", "#039be5", "#0288d1", "#0277bd", "#01579b", "#80d8ff", "#40c4ff", "#00b0ff", "#0091ea", "#00bcd4", "#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da", "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064", "#84ffff", "#18ffff", "#00e5ff", "#00b8d4", "#009688", "#e0f2f1", "#b2dfdb", "#80cbc4", "#4db6ac", "#26a69a", "#009688", "#00897b", "#00796b", "#00695c", "#004d40", "#a7ffeb", "#64ffda", "#1de9b6", "#00bfa5", "#4caf50", "#e8f5e9", "#c8e6c9", "#a5d6a7", "#81c784", "#66bb6a", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20", "#b9f6ca", "#69f0ae", "#00e676", "#00c853", "#8bc34a", "#f1f8e9", "#dcedc8", "#c5e1a5", "#aed581", "#9ccc65", "#8bc34a", "#7cb342", "#689f38", "#558b2f", "#33691e", "#ccff90", "#b2ff59", "#76ff03", "#64dd17", "#cddc39", "#f9fbe7", "#f0f4c3", "#e6ee9c", "#dce775", "#d4e157", "#cddc39", "#c0ca33", "#afb42b", "#9e9d24", "#827717", "#f4ff81", "#eeff41", "#c6ff00", "#aeea00", "#ffeb3b", "#fffde7", "#fff9c4", "#fff59d", "#fff176", "#ffee58", "#ffeb3b", "#fdd835", "#fbc02d", "#f9a825", "#f57f17", "#ffff8d", "#ffff00", "#ffea00", "#ffd600", "#ffc107", "#fff8e1", "#ffecb3", "#ffe082", "#ffd54f", "#ffca28", "#ffc107", "#ffb300", "#ffa000", "#ff8f00", "#ff6f00", "#ffe57f", "#ffd740", "#ffc400", "#ffab00", "#ff9800", "#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100", "#ffd180", "#ffab40", "#ff9100", "#ff6d00", "#ff5722", "#fbe9e7", "#ffccbc", "#ffab91", "#ff8a65", "#ff7043", "#ff5722", "#f4511e", "#e64a19", "#d84315", "#bf360c", "#ff9e80", "#ff6e40", "#ff3d00", "#dd2c00", "#795548", "#efebe9", "#d7ccc8", "#bcaaa4", "#a1887f", "#8d6e63", "#795548", "#6d4c41", "#5d4037", "#4e342e", "#3e2723", "#9e9e9e", "#fafafa", "#f5f5f5", "#eeeeee", "#e0e0e0", "#bdbdbd", "#9e9e9e", "#757575", "#616161", "#424242", "#212121", "#607d8b", "#eceff1", "#cfd8dc", "#b0bec5", "#90a4ae", "#78909c", "#607d8b", "#546e7a", "#455a64", "#37474f", "#263238", "#ffffff", "#000000"];
        this.counter = 0;
    }
    ngOnInit() {
        this.setCurrentPosition();
        this.onEnter(this.value);
        let intervalId = setInterval(() => {
            this.counter = this.counter + 1;
            this.changeColor = this.colors[Math.floor(Math.random() * this.colors.length)];
            if (this.counter === 0)
                clearInterval(intervalId);
        }, 1000);
    }
    onEnter(value) {
        console.log(value);
        console.log(this.geoSearch.geonameArr);
        this.value = value;
        this.flag = true;
        this.zoom = 3;
        this.geoSearch.getGeonames(this.value);
        this.id = this.geoSearch.id;
        this.latitude = this.geoSearch.latitude;
        this.longitude = this.geoSearch.longitude;
    }
    onselectClient(client) {
        console.log(client);
        if (client) {
            for (let i = 0; i < this.geoSearch.geonameArr.length; i++) {
                if (client == this.geoSearch.geonameArr[i].split(',')[1]) {
                    this.value = this.geoSearch.geonameArr[i].split(',')[1];
                    this.geoSearch.name = client;
                    this.latitude = this.geoSearch.geonameArr[i].split(',')[2];
                    this.longitude = this.geoSearch.geonameArr[i].split(',')[3];
                    this.flag = false;
                    break;
                }
            }
        }
    }
    setFlag() {
        this.flag = true;
    }
    setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
            });
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _geonames_service__WEBPACK_IMPORTED_MODULE_2__["GeonameService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { static: true })
], AppComponent.prototype, "searchElement", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _geonames_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./geonames.service */ "./src/app/geonames.service.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm2015/angular-ng-autocomplete.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_9__["AngularFontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutocompleteLibModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCBbdKeV6BFo9gxqtDl3eLLWQ5HPqWfhiI',
                libraries: ['places']
            })
        ],
        providers: [_geonames_service__WEBPACK_IMPORTED_MODULE_11__["GeonameService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/geonames.service.ts":
/*!*************************************!*\
  !*** ./src/app/geonames.service.ts ***!
  \*************************************/
/*! exports provided: GeonameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeonameService", function() { return GeonameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GeonameService = class GeonameService {
    constructor(http) {
        this.http = http;
        this.geonameArr = [];
        this.names = [];
        this.ids = [];
        this._url = `https://bvpky.xyz`;
    }
    getGeonames(name) {
        if (name == '' || !name) {
            return null;
        }
        console.log(this._url + `/geoName/${name}`);
        this.http.get(this._url + `/geoName/${name.toLowerCase()}/`).subscribe((res) => {
            if (res) {
                this.geonameArr = [];
                this.names = [];
                let i = 0;
                for (const data of res.hits.hits) {
                    this.geonameArr[i] = data._source.id + "," + data._source.name + "," + data._source.lat + "," + data._source.long;
                    this.names[i] = data._source.name;
                    this.id = this.geonameArr[i].split(',')[0];
                    this.name = this.geonameArr[i].split(',')[1];
                    this.latitude = this.geonameArr[i].split(',')[2];
                    this.longitude = this.geonameArr[i].split(',')[3];
                    i++;
                }
            }
        });
    }
};
GeonameService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GeonameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GeonameService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/darling/47ba7b33-d0b2-4875-bb85-de2dbfe969dc/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map