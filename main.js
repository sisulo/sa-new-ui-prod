(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./global-statistics/global-statistics.module": [
		"./src/app/global-statistics/global-statistics.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/iframe/iframe.component */ "./src/app/components/iframe/iframe.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'iframe/:url', component: _components_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_2__["IframeComponent"] },
    {
        path: 'global-statistics',
        loadChildren: './global-statistics/global-statistics.module#GlobalStatisticsModule',
    },
    { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // RouterModule.forRoot(routes, { enableTracing: true }) // debugging
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-side-menu></app-side-menu>\n<div class=\"content-wrapper\">\n  <section class=\"container-fluid\">\n    <router-outlet></router-outlet>\n  </section>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sa-admin-ts';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/side-menu/side-menu.component */ "./src/app/components/side-menu/side-menu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/iframe/iframe.component */ "./src/app/components/iframe/iframe.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _global_statistics_global_statistics_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global-statistics/global-statistics.module */ "./src/app/global-statistics/global-statistics.module.ts");
/* harmony import */ var _common_sa_common_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/sa-common.module */ "./src/app/common/sa-common.module.ts");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_6__["SideMenuComponent"],
                _components_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_8__["IframeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            ],
            imports: [
                _global_statistics_global_statistics_module__WEBPACK_IMPORTED_MODULE_10__["GlobalStatisticsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_store__WEBPACK_IMPORTED_MODULE_12__["WebStorageModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"],
                _common_sa_common_module__WEBPACK_IMPORTED_MODULE_11__["SaCommonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/components/info-box/info-box.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/common/components/info-box/info-box.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.modal.open {\n  display: block;\n  padding-right: 15px;\n}\n.info-box-number {\n  font-size: 25px;\n}\n.info-box-text {\n  font-size: 17px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvaW5mby1ib3gvaW5mby1ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvaW5mby1ib3gvaW5mby1ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5tb2RhbC5vcGVuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4uaW5mby1ib3gtbnVtYmVyIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLmluZm8tYm94LXRleHQge1xuICBmb250LXNpemU6IDE3cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/common/components/info-box/info-box.component.html":
/*!********************************************************************!*\
  !*** ./src/app/common/components/info-box/info-box.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-box\">\n  <span [ngClass]=\"isOverThreshold() ? 'info-box-icon bg-orange': 'info-box-icon bg-green'\" class=\"info-box-icon\"><i class=\"fa\" [ngClass]=\"isOverThreshold() ? 'fa-exclamation-triangle' : icon\"></i></span>\n\n  <div class=\"info-box-content\">\n    <span class=\"info-box-text\">{{label}}</span>\n    <span class=\"info-box-number\">{{value}}<small></small></span>\n    <span *ngIf=\"data.length > 0\">\n      |<span *ngFor=\"let occurence of data; let i = index;\">\n        <span *ngIf=\"i < 2\" ><a [routerLink]=\"'/global-statistics/' + occurence.datacenterId + '/' + context\">\n          {{occurence.name}}</a> |\n          </span>\n      </span>\n    </span>\n    <span *ngIf=\"data.length > 2\"> ... <a class=\"small-box-footer\" href=\"#\" [class.hidden]=\"!isOverThreshold()\" (click)=\"openModal()\"> >>> </a> </span>\n  </div>\n  <!-- /.info-box-content -->\n</div>\n<div class=\"modal fade in\" id=\"modal-default\" [class.open]=\"isModalOpened()\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" (click)=\"closeModal()\">×</span></button>\n        <h4 class=\"modal-title\">{{label}}</h4>\n      </div>\n      <div class=\"modal-body\" *ngIf=\"data.length > 0\">\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr>\n              <th>System</th>\n              <th *ngIf=\"data[0].entityType === entityType.POOL\">Pool</th>\n              <th>Value</th>\n            </tr>\n          </thead>\n          <tr *ngFor=\"let occurence of data\">\n            <td *ngIf=\"occurence.entityType === null\">\n              {{occurence.name}}\n            </td>\n            <td *ngIf=\"occurence.entityType !== null\">\n              {{metric.getSystemName(occurence.datacenterId, occurence.systemId)}}\n            </td>\n            <td *ngIf=\"occurence.entityType === entityType.POOL\">\n              {{occurence.name}}\n            </td>\n            <td>\n              {{occurence.value}} {{occurence.unit}}\n            </td>\n            <!---->\n            <!--<a [routerLink]=\"'/global-statistics/' + occurence.datacenterId + '/' + context\">-->\n          <!--{{occurence.name}}</a> - {{occurence.value}} {{occurence.unit}} -->\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default pull-left\" data-dismiss=\"modal\" (click)=\"closeModal()\">Close</button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n"

/***/ }),

/***/ "./src/app/common/components/info-box/info-box.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/common/components/info-box/info-box.component.ts ***!
  \******************************************************************/
/*! exports provided: InfoBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBoxComponent", function() { return InfoBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_metrics_EntityType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/metrics/EntityType */ "./src/app/common/models/metrics/EntityType.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../metric.service */ "./src/app/metric.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoBoxComponent = /** @class */ (function () {
    function InfoBoxComponent(route, router, metric) {
        this.route = route;
        this.router = router;
        this.metric = metric;
        this.threshold = 0;
        this.icon = '';
        this.data = [];
        this.entityType = _models_metrics_EntityType__WEBPACK_IMPORTED_MODULE_2__["EntityType"];
        this.modalState = 'close';
    }
    InfoBoxComponent.prototype.ngOnInit = function () {
        if (this.data.length > 0) {
            var result = this.data.sort(function (occurence1, occurrence2) {
                return occurrence2.value - occurence1.value;
            });
        }
    };
    InfoBoxComponent.prototype.isOverThreshold = function () {
        return this.value > this.threshold;
    };
    InfoBoxComponent.prototype.openModal = function () {
        this.modalState = 'open';
    };
    InfoBoxComponent.prototype.closeModal = function () {
        this.modalState = 'close';
    };
    InfoBoxComponent.prototype.isModalOpened = function () {
        return this.modalState === 'open';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InfoBoxComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InfoBoxComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InfoBoxComponent.prototype, "context", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoBoxComponent.prototype, "threshold", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoBoxComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InfoBoxComponent.prototype, "data", void 0);
    InfoBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-box',
            template: __webpack_require__(/*! ./info-box.component.html */ "./src/app/common/components/info-box/info-box.component.html"),
            styles: [__webpack_require__(/*! ./info-box.component.css */ "./src/app/common/components/info-box/info-box.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _metric_service__WEBPACK_IMPORTED_MODULE_3__["MetricService"]])
    ], InfoBoxComponent);
    return InfoBoxComponent;
}());



/***/ }),

/***/ "./src/app/common/components/knob/knob-sa.component.css":
/*!**************************************************************!*\
  !*** ./src/app/common/components/knob/knob-sa.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2tub2Iva25vYi1zYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/components/knob/knob-sa.component.html":
/*!***************************************************************!*\
  !*** ./src/app/common/components/knob/knob-sa.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-knob-label workload-knob-label\">{{label}}</div>\n<div appUiKnob *ngIf=\"metric !== undefined\" [value]=\"metric.value\" [options]=\"knOptions\"></div>\n"

/***/ }),

/***/ "./src/app/common/components/knob/knob-sa.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/components/knob/knob-sa.component.ts ***!
  \*************************************************************/
/*! exports provided: KnobSaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnobSaComponent", function() { return KnobSaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_metrics_Metric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/metrics/Metric */ "./src/app/common/models/metrics/Metric.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KnobSaComponent = /** @class */ (function () {
    function KnobSaComponent() {
        this.color = '#225bb7';
        this.sizeType = 'medium';
        this.knOptions = {};
    }
    KnobSaComponent.prototype.ngOnInit = function () {
        // if (this.metric !== undefined) {
        switch (this.sizeType) {
            case 'medium':
                this.knOptions = {
                    readOnly: true,
                    size: 150,
                    unit: this.metric.unit,
                    textColor: this.color,
                    fontSize: '25',
                    fontWeight: '400',
                    fontFamily: 'Roboto',
                    min: 0,
                    max: this.metric.unit === '%' ? 100 : this.metric.value,
                    trackWidth: 19,
                    barWidth: 20,
                    trackColor: '#D8D8D8',
                    barColor: this.color,
                };
                break;
            case 'small':
                this.knOptions = {
                    skin: {
                        type: 'tron',
                        width: 2,
                        color: this.color,
                        spaceWidth: 4
                    },
                    readOnly: true,
                    size: 100,
                    unit: this.metric.unit,
                    textColor: this.color,
                    fontSize: '25',
                    fontWeight: '800',
                    fontFamily: 'Roboto',
                    min: 0,
                    max: this.metric.unit === '%' ? 100 : this.metric.value,
                    trackWidth: 20,
                    barWidth: 25,
                    trackColor: '#D8D8D8',
                    barColor: this.color,
                };
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_metrics_Metric__WEBPACK_IMPORTED_MODULE_1__["Metric"])
    ], KnobSaComponent.prototype, "metric", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], KnobSaComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], KnobSaComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], KnobSaComponent.prototype, "sizeType", void 0);
    KnobSaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-knob',
            template: __webpack_require__(/*! ./knob-sa.component.html */ "./src/app/common/components/knob/knob-sa.component.html"),
            styles: [__webpack_require__(/*! ./knob-sa.component.css */ "./src/app/common/components/knob/knob-sa.component.css")]
        })
    ], KnobSaComponent);
    return KnobSaComponent;
}());



/***/ }),

/***/ "./src/app/common/components/knob/ng-2-knob.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/components/knob/ng-2-knob.directive.ts ***!
  \***************************************************************/
/*! exports provided: Ng2KnobDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2KnobDirective", function() { return Ng2KnobDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_selection_multi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection-multi */ "./node_modules/d3-selection-multi/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var Ng2KnobDirective = /** @class */ (function () {
    function Ng2KnobDirective(el) {
        this.el = el;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // All that need to be instanciated before bindings
        this.element = this.el.nativeElement;
        this.value = 0;
        this.defaultOptions = {
            skin: {
                type: 'simple',
                width: 10,
                color: 'rgba(255,0,0,.5)',
                spaceWidth: 5
            },
            animate: {
                enabled: true,
                duration: 1000,
                ease: 'bounce'
            },
            size: 200,
            startAngle: 0,
            endAngle: 360,
            unit: '',
            displayInput: true,
            inputFormatter: function (v) {
                return v;
            },
            readOnly: false,
            trackWidth: 50,
            barWidth: 50,
            trackColor: 'rgba(0,0,0,0)',
            barColor: 'rgba(255,0,0,.5)',
            prevBarColor: 'rgba(0,0,0,0)',
            textColor: '#222',
            barCap: 0,
            trackCap: 0,
            fontSize: 'auto',
            fontWeigth: '400',
            fontFamily: 'Arial',
            subText: {
                enabled: false,
                text: '',
                fontFamily: 'Arial',
                fontWeight: 'normal',
                color: 'gray',
                font: 'auto',
                offset: 0
            },
            bgColor: '',
            bgFull: false,
            scale: {
                enabled: false,
                type: 'lines',
                color: 'gray',
                width: 4,
                quantity: 20,
                height: 10,
                spaceWidth: 15
            },
            step: 1,
            displayPrevious: false,
            min: 0,
            max: 100,
            dynamicOptions: false
        };
        this.animations = {
            linear: d3__WEBPACK_IMPORTED_MODULE_1__["easeLinear"],
            bounce: d3__WEBPACK_IMPORTED_MODULE_1__["easeBounce"]
        };
    }
    /**
     * Implement this interface to execute custom initialization logic after your directive's data-bound properties have been initialized.
     * ngOnInit is called right after the directive's data-bound properties have been checked for the first time, and before any of its children have been checked.
     * It is invoked only once when the directive is instantiated.
     */
    Ng2KnobDirective.prototype.ngOnInit = function () {
        this.inDrag = false;
        this.options = Object.assign(this.defaultOptions, this.options);
        this.draw();
    };
    /**
     * Actions when value or options change in host component
     */
    Ng2KnobDirective.prototype.ngOnChanges = function (changes) {
        if (this.defaultOptions != null && changes.options != null && changes.options.currentValue != null && this.value != null) {
            this.options = Object.assign(this.defaultOptions, changes.options.currentValue);
            this.draw();
        }
        if (this.defaultOptions != null && this.options != null && changes.value && changes.value.currentValue != null && changes.value.previousValue != null && changes.value.currentValue !== changes.value.previousValue) {
            this.setValue(changes.value.currentValue);
        }
    };
    /**
     *   Convert from value to radians
     */
    Ng2KnobDirective.prototype.valueToRadians = function (value, valueEnd, angleEnd, angleStart, valueStart) {
        if (angleEnd === void 0) { angleEnd = 0; }
        if (angleStart === void 0) { angleStart = 0; }
        if (valueStart === void 0) { valueStart = 0; }
        valueEnd = valueEnd || 100;
        valueStart = valueStart || 0;
        angleEnd = angleEnd || 360;
        angleStart = angleStart || 0;
        return (Math.PI / 180) * ((((value - valueStart) * (angleEnd - angleStart)) / (valueEnd - valueStart)) + angleStart);
    };
    /**
     *   Convert from radians to value
     */
    Ng2KnobDirective.prototype.radiansToValue = function (radians, valueEnd, valueStart, angleEnd, angleStart) {
        valueEnd = valueEnd || 100;
        valueStart = valueStart || 0;
        angleEnd = angleEnd || 360;
        angleStart = angleStart || 0;
        return ((((((180 / Math.PI) * radians) - angleStart) * (valueEnd - valueStart)) / (angleEnd - angleStart)) + valueStart);
    };
    /**
     *   Create the arc
     */
    Ng2KnobDirective.prototype.createArc = function (innerRadius, outerRadius, startAngle, endAngle, cornerRadius) {
        var arc = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(startAngle)
            .endAngle(endAngle)
            .cornerRadius(cornerRadius);
        return arc;
    };
    /**
     *   Draw the arc
     */
    Ng2KnobDirective.prototype.drawArc = function (svg, arc, label, style, click, drag) {
        var elem = svg.append('path')
            .attr('id', label)
            .attr('d', arc);
        for (var key in style) {
            elem.style(key, style[key]);
        }
        elem.attr('transform', 'translate(' + (this.options.size / 2) + ', ' + (this.options.size / 2) + ')');
        if (this.options.readOnly === false) {
            if (click) {
                elem.on('click', click);
            }
            if (drag) {
                elem.call(drag);
            }
        }
        return elem;
    };
    /**
     *   Create the arcs
     */
    Ng2KnobDirective.prototype.createArcs = function () {
        var outerRadius = parseInt((this.options.size / 2).toString(), 10);
        var startAngle = this.valueToRadians(this.options.startAngle, 360);
        var endAngle = this.valueToRadians(this.options.endAngle, 360);
        if (this.options.scale.enabled) {
            outerRadius -= this.options.scale.width + this.options.scale.spaceWidth;
        }
        var trackInnerRadius = outerRadius - this.options.trackWidth;
        var changeInnerRadius = outerRadius - this.options.barWidth;
        var valueInnerRadius = outerRadius - this.options.barWidth;
        // interactInnerRadius = outerRadius - this.options.barWidth,
        var interactInnerRadius = 1;
        var trackOuterRadius = outerRadius;
        var changeOuterRadius = outerRadius;
        var valueOuterRadius = outerRadius;
        var interactOuterRadius = outerRadius;
        var diff;
        if (this.options.barWidth > this.options.trackWidth) {
            diff = (this.options.barWidth - this.options.trackWidth) / 2;
            trackInnerRadius -= diff;
            trackOuterRadius -= diff;
        }
        else if (this.options.barWidth < this.options.trackWidth) {
            diff = (this.options.trackWidth - this.options.barWidth) / 2;
            changeOuterRadius -= diff;
            valueOuterRadius -= diff;
            changeInnerRadius -= diff;
            valueInnerRadius -= diff;
            // interactInnerRadius = outerRadius - this.options.trackWidth;
        }
        if (this.options.bgColor) {
            if (this.options.bgFull) {
                this.bgArc = this.createArc(0, outerRadius, 0, Math.PI * 2);
            }
            else {
                this.bgArc = this.createArc(0, outerRadius, startAngle, endAngle);
            }
        }
        if (this.options.skin.type === 'tron') {
            trackOuterRadius = trackOuterRadius - this.options.skin.width - this.options.skin.spaceWidth;
            changeOuterRadius = changeOuterRadius - this.options.skin.width - this.options.skin.spaceWidth;
            valueOuterRadius = valueOuterRadius - this.options.skin.width - this.options.skin.spaceWidth;
            interactOuterRadius = interactOuterRadius - this.options.skin.width - this.options.skin.spaceWidth;
            this.hoopArc = this.createArc(outerRadius - this.options.skin.width, outerRadius, startAngle, endAngle);
        }
        this.trackArc = this.createArc(trackInnerRadius, trackOuterRadius, startAngle, endAngle, this.options.trackCap);
        this.changeArc = this.createArc(changeInnerRadius, changeOuterRadius, startAngle, startAngle, this.options.barCap);
        this.valueArc = this.createArc(valueInnerRadius, valueOuterRadius, startAngle, startAngle, this.options.barCap);
        this.interactArc = this.createArc(interactInnerRadius, interactOuterRadius, startAngle, endAngle);
    };
    /**
     *   Draw the arcs
     */
    Ng2KnobDirective.prototype.drawArcs = function (clickInteraction, dragBehavior) {
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.element)
            .append('svg')
            .attr('width', this.options.size)
            .attr('height', this.options.size);
        if (this.options.bgColor) {
            this.drawArc(svg, this.bgArc, 'bgArc', { 'fill': this.options.bgColor });
        }
        if (this.options.displayInput) {
            var fontSize = (this.options.size * 0.20) + 'px';
            if (this.options.fontSize !== 'auto') {
                fontSize = this.options.fontSize + 'px';
            }
            if (this.options.step < 1) {
                this.value = Number(this.value.toFixed(1));
            }
            var v = this.label || this.value;
            if (typeof this.options.inputFormatter === 'function') {
                v = this.options.inputFormatter(v);
            }
            var fontFamily = '';
            if (this.options.fontFamily !== 'Arial') {
                fontFamily = this.options.fontFamily;
            }
            var fontWeigth = '';
            if (this.options.fontWeigth !== '400') {
                fontWeigth = this.options.fontWeigth;
            }
            svg.append('text')
                .attr('id', 'text')
                .attr('class', 'text-value')
                .attr('text-anchor', 'middle')
                .attr('font-size', fontSize)
                .attr('font-weight', fontWeigth)
                .attr('font-family', fontFamily)
                .style('fill', this.options.textColor)
                .text(v + this.options.unit || '')
                .attr('transform', 'translate(' + ((this.options.size / 2)) + ', ' + ((this.options.size / 2) + (this.options.size * 0.06)) + ')');
            if (this.options.subText.enabled) {
                fontSize = (this.options.size * 0.07) + 'px';
                if (this.options.subText.font !== 'auto') {
                    fontSize = this.options.subText.font + 'px';
                }
                var fontFamily_1 = '';
                if (this.options.subText.fontFamily !== 'Arial') {
                    fontFamily_1 = this.options.subText.fontFamily;
                }
                var fontWeight = '';
                if (this.options.subText.fontWeight !== 'normal') {
                    fontWeight = this.options.subText.fontWeight;
                }
                svg.append('text')
                    .attr('class', 'sub-text')
                    .attr('text-anchor', 'middle')
                    .attr('font-size', fontSize)
                    .attr('font-family', fontFamily_1)
                    .attr('font-weight', fontWeight)
                    .style('fill', this.options.subText.color)
                    .text(this.options.subText.text)
                    .attr('transform', 'translate(' + ((this.options.size / 2)) + ', ' + ((this.options.size / 2) + (this.options.size * 0.15) + this.options.subText.offset) + ')');
            }
        }
        if (this.options.scale.enabled) {
            var radius_1;
            var quantity_1;
            var data = void 0;
            var count_1 = 0;
            var angle_1 = 0;
            var startRadians_1 = this.valueToRadians(this.options.min, this.options.max, this.options.endAngle, this.options.startAngle, this.options.min);
            var endRadians_1 = this.valueToRadians(this.options.max, this.options.max, this.options.endAngle, this.options.startAngle, this.options.min);
            var diff_1 = 0;
            if (this.options.startAngle !== 0 || this.options.endAngle !== 360) {
                diff_1 = 1;
            }
            if (this.options.scale.type === 'dots') {
                var width_1 = this.options.scale.width;
                radius_1 = (this.options.size / 2) - width_1;
                quantity_1 = this.options.scale.quantity;
                var offset_1 = radius_1 + this.options.scale.width;
                data = d3__WEBPACK_IMPORTED_MODULE_1__["range"](quantity_1).map(function () {
                    angle_1 = (count_1 * (endRadians_1 - startRadians_1)) - (Math.PI / 2) + startRadians_1;
                    count_1 = count_1 + (1 / (quantity_1 - diff_1));
                    return {
                        cx: offset_1 + Math.cos(angle_1) * radius_1,
                        cy: offset_1 + Math.sin(angle_1) * radius_1,
                        r: width_1
                    };
                });
                svg.selectAll('circle')
                    .data(data)
                    .enter().append('circle')
                    .attrs({
                    r: function (d) {
                        return d.r;
                    },
                    cx: function (d) {
                        return d.cx;
                    },
                    cy: function (d) {
                        return d.cy;
                    },
                    fill: this.options.scale.color
                });
            }
            else if (this.options.scale.type === 'lines') {
                var height_1 = this.options.scale.height;
                radius_1 = (this.options.size / 2);
                quantity_1 = this.options.scale.quantity;
                data = d3__WEBPACK_IMPORTED_MODULE_1__["range"](quantity_1).map(function () {
                    angle_1 = (count_1 * (endRadians_1 - startRadians_1)) - (Math.PI / 2) + startRadians_1;
                    count_1 = count_1 + (1 / (quantity_1 - diff_1));
                    return {
                        x1: radius_1 + Math.cos(angle_1) * radius_1,
                        y1: radius_1 + Math.sin(angle_1) * radius_1,
                        x2: radius_1 + Math.cos(angle_1) * (radius_1 - height_1),
                        y2: radius_1 + Math.sin(angle_1) * (radius_1 - height_1)
                    };
                });
                svg.selectAll('line')
                    .data(data)
                    .enter().append('line')
                    .attrs({
                    x1: function (d) {
                        return d.x1;
                    },
                    y1: function (d) {
                        return d.y1;
                    },
                    x2: function (d) {
                        return d.x2;
                    },
                    y2: function (d) {
                        return d.y2;
                    },
                    'stroke-width': this.options.scale.width,
                    'stroke': this.options.scale.color
                });
            }
        }
        if (this.options.skin.type === 'tron') {
            this.drawArc(svg, this.hoopArc, 'hoopArc', { 'fill': this.options.skin.color });
        }
        this.drawArc(svg, this.trackArc, 'trackArc', { 'fill': this.options.trackColor });
        if (this.options.displayPrevious) {
            this.changeElem = this.drawArc(svg, this.changeArc, 'changeArc', { 'fill': this.options.prevBarColor });
        }
        else {
            this.changeElem = this.drawArc(svg, this.changeArc, 'changeArc', { 'fill-opacity': 0 });
        }
        this.valueElem = this.drawArc(svg, this.valueArc, 'valueArc', { 'fill': this.options.barColor });
        var cursor = 'pointer';
        if (this.options.readOnly) {
            cursor = 'default';
        }
        this.drawArc(svg, this.interactArc, 'interactArc', { 'fill-opacity': 0, 'cursor': cursor }, clickInteraction, dragBehavior);
    };
    /**
     *   Draw knob component
     */
    Ng2KnobDirective.prototype.draw = function () {
        d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.element).select('svg').remove();
        var that = this;
        that.createArcs();
        var dragBehavior = d3__WEBPACK_IMPORTED_MODULE_1__["drag"]()
            .on('drag', dragInteraction)
            .on('end', clickInteraction);
        that.drawArcs(clickInteraction, dragBehavior);
        if (that.options.animate.enabled) {
            // that.valueElem.transition().ease(that.options.animate.ease).duration(that.options.animate.duration).tween('', function () {
            that.valueElem.transition().ease(that.animations[that.options.animate.ease]).duration(that.options.animate.duration).tween('', function () {
                var i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](that.valueToRadians(that.options.startAngle, 360), that.valueToRadians(that.value, that.options.max, that.options.endAngle, that.options.startAngle, that.options.min));
                return function (t) {
                    var val = i(t);
                    that.valueElem.attr('d', that.valueArc.endAngle(val));
                    that.changeElem.attr('d', that.changeArc.endAngle(val));
                };
            });
        }
        else {
            that.changeArc.endAngle(this.valueToRadians(this.value, this.options.max, this.options.endAngle, this.options.startAngle, this.options.min));
            that.changeElem.attr('d', that.changeArc);
            that.valueArc.endAngle(this.valueToRadians(this.value, this.options.max, this.options.endAngle, this.options.startAngle, this.options.min));
            that.valueElem.attr('d', that.valueArc);
        }
        function dragInteraction() {
            that.inDrag = true;
            var x = d3__WEBPACK_IMPORTED_MODULE_1__["event"].x - (that.options.size / 2);
            var y = d3__WEBPACK_IMPORTED_MODULE_1__["event"].y - (that.options.size / 2);
            interaction(x, y, false);
        }
        function clickInteraction() {
            that.inDrag = false;
            var coords = d3__WEBPACK_IMPORTED_MODULE_1__["mouse"](this.parentNode);
            var x = coords[0] - (that.options.size / 2);
            var y = coords[1] - (that.options.size / 2);
            interaction(x, y, true);
        }
        function interaction(x, y, isFinal) {
            var arc = Math.atan(y / x) / (Math.PI / 180);
            var delta;
            if ((x >= 0 && y <= 0) || (x >= 0 && y >= 0)) {
                delta = 90;
            }
            else {
                delta = 270;
                if (that.options.startAngle < 0) {
                    delta = -90;
                }
            }
            var radians = (delta + arc) * (Math.PI / 180);
            that.value = that.radiansToValue(radians, that.options.max, that.options.min, that.options.endAngle, that.options.startAngle);
            if (that.value >= that.options.min && that.value <= that.options.max) {
                that.value = Math.round(((~~(((that.value < 0) ? -0.5 : 0.5) + (that.value / that.options.step))) * that.options.step) * 100) / 100;
                if (that.options.step < 1) {
                    that.value = Number(that.value.toFixed(1));
                }
                that.valueArc.endAngle(that.valueToRadians(that.value, that.options.max, that.options.endAngle, that.options.startAngle, that.options.min));
                that.valueElem.attr('d', that.valueArc);
                if (isFinal) {
                    that.changeArc.endAngle(that.valueToRadians(that.value, that.options.max, that.options.endAngle, that.options.startAngle, that.options.min));
                    that.changeElem.attr('d', that.changeArc);
                }
                if (that.options.displayInput) {
                    var v = that.label || that.value;
                    if (typeof that.options.inputFormatter === 'function') {
                        v = that.options.inputFormatter(v);
                    }
                    d3__WEBPACK_IMPORTED_MODULE_1__["select"](that.element).select('#text').text(v + that.options.unit || '');
                }
            }
            that.valueChange.emit(that.value);
        }
    };
    /**
     *   Set a value
     */
    Ng2KnobDirective.prototype.setValue = function (newValue) {
        if ((!this.inDrag) && this.value >= this.options.min && this.value <= this.options.max) {
            var radians = this.valueToRadians(newValue, this.options.max, this.options.endAngle, this.options.startAngle, this.options.min);
            this.value = Math.round(((~~(((newValue < 0) ? -0.5 : 0.5) + (newValue / this.options.step))) * this.options.step) * 100) / 100;
            if (this.options.step < 1) {
                this.value = Number(this.value.toFixed(1));
            }
            this.changeArc.endAngle(radians);
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.element).select('#changeArc').attr('d', this.changeArc);
            this.valueArc.endAngle(radians);
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.element).select('#valueArc').attr('d', this.valueArc);
            if (this.options.displayInput) {
                var v = this.label || this.value;
                if (typeof this.options.inputFormatter === 'function') {
                    v = this.options.inputFormatter(v);
                }
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.element).select('#text').text(v + this.options.unit || '');
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Ng2KnobDirective.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Ng2KnobDirective.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Ng2KnobDirective.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Ng2KnobDirective.prototype, "valueChange", void 0);
    Ng2KnobDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appUiKnob]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], Ng2KnobDirective);
    return Ng2KnobDirective;
}());



/***/ }),

/***/ "./src/app/common/components/sasi-table/cell-table.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/common/components/sasi-table/cell-table.component.ts ***!
  \**********************************************************************/
/*! exports provided: CellTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellTableComponent", function() { return CellTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _formatter_host_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatter-host.directive */ "./src/app/common/components/sasi-table/formatter-host.directive.ts");
/* harmony import */ var _sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CellTableComponent = /** @class */ (function () {
    function CellTableComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    CellTableComponent.prototype.ngOnInit = function () {
        this.loadComponent();
    };
    CellTableComponent.prototype.ngOnChanges = function (changes) {
        this.loadComponent();
    };
    CellTableComponent.prototype.ngOnDestroy = function () {
    };
    CellTableComponent.prototype.loadComponent = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentFormatter);
        var viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = this.data;
        componentRef.instance.label = this.label;
        componentRef.instance.options = this.options;
        componentRef.instance.column = this.column;
        componentRef.instance.rowData = this.rowData;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CellTableComponent.prototype, "componentFormatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CellTableComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiRow"])
    ], CellTableComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CellTableComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumn"])
    ], CellTableComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiRow"])
    ], CellTableComponent.prototype, "rowData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_formatter_host_directive__WEBPACK_IMPORTED_MODULE_1__["FormatterHostDirective"]),
        __metadata("design:type", _formatter_host_directive__WEBPACK_IMPORTED_MODULE_1__["FormatterHostDirective"])
    ], CellTableComponent.prototype, "adHost", void 0);
    CellTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cell-table',
            template: '<ng-template appFormatterHost></ng-template>'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], CellTableComponent);
    return CellTableComponent;
}());



/***/ }),

/***/ "./src/app/common/components/sasi-table/formatter-host.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/formatter-host.directive.ts ***!
  \**************************************************************************/
/*! exports provided: FormatterHostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatterHostDirective", function() { return FormatterHostDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormatterHostDirective = /** @class */ (function () {
    function FormatterHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    FormatterHostDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appFormatterHost]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], FormatterHostDirective);
    return FormatterHostDirective;
}());



/***/ }),

/***/ "./src/app/common/components/sasi-table/group-sort-impl.ts":
/*!*****************************************************************!*\
  !*** ./src/app/common/components/sasi-table/group-sort-impl.ts ***!
  \*****************************************************************/
/*! exports provided: GroupSortImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSortImpl", function() { return GroupSortImpl; });
/* harmony import */ var _simple_sort_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-sort-impl */ "./src/app/common/components/sasi-table/simple-sort-impl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GroupSortImpl = /** @class */ (function (_super) {
    __extends(GroupSortImpl, _super);
    function GroupSortImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupSortImpl.prototype.sort = function (data, column, sortType, sortByRawValue) {
        var _this = this;
        data.forEach(function (groupRow) { return groupRow.rows = _super.prototype.sort.call(_this, groupRow.rows, column, sortType, sortByRawValue, function (row, columnIndex) { return row.getCellValue(columnIndex); }); });
        if (column.index === 'name') {
            return _super.prototype.sort.call(this, data, column, sortType, sortByRawValue, function (row, columnIndex) { return row.groupRow.getCellValue(columnIndex); });
        }
        else {
            return _super.prototype.sort.call(this, data, column, sortType, sortByRawValue, function (row, columnIndex) { return row.rows[0].getCellValue(columnIndex); });
        }
    };
    return GroupSortImpl;
}(_simple_sort_impl__WEBPACK_IMPORTED_MODULE_0__["SimpleSortImpl"]));



/***/ }),

/***/ "./src/app/common/components/sasi-table/row-dynamic.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/common/components/sasi-table/row-dynamic.component.ts ***!
  \***********************************************************************/
/*! exports provided: RowDynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowDynamicComponent", function() { return RowDynamicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _formatter_host_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatter-host.directive */ "./src/app/common/components/sasi-table/formatter-host.directive.ts");
/* harmony import */ var _sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RowDynamicComponent = /** @class */ (function () {
    function RowDynamicComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    RowDynamicComponent.prototype.ngOnInit = function () {
        this.loadComponent();
    };
    RowDynamicComponent.prototype.ngOnChanges = function (changes) {
        this.loadComponent();
    };
    RowDynamicComponent.prototype.ngOnDestroy = function () {
    };
    RowDynamicComponent.prototype.loadComponent = function () {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentFormatter);
        var viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = this.data;
        componentRef.instance.label = this.label;
        componentRef.instance.options = this.options;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RowDynamicComponent.prototype, "componentFormatter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RowDynamicComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiGroupRow"])
    ], RowDynamicComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RowDynamicComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_formatter_host_directive__WEBPACK_IMPORTED_MODULE_1__["FormatterHostDirective"]),
        __metadata("design:type", _formatter_host_directive__WEBPACK_IMPORTED_MODULE_1__["FormatterHostDirective"])
    ], RowDynamicComponent.prototype, "adHost", void 0);
    RowDynamicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-row-dynamic-table',
            template: '<ng-template appFormatterHost></ng-template>'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], RowDynamicComponent);
    return RowDynamicComponent;
}());



/***/ }),

/***/ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/row-group-table/row-group-table.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-control {\n  width: 3.5%;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.col {\n  /*width: 13.33%;*/\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.col-control i {\n  font-size: 11px;\n  padding: 5px;\n}\n\n.col-control:after {\n  content: \"\";\n  font-size: 11px;\n  padding: 3px;\n}\n\n/**** Data group header ****/\n\n.table-group-header > div.table-group-label > div[class^=\"col\"],\n.table-group-header > div.table-group-label > div.ignore > div {\n  text-align: center;\n  border-right: 1px #EAEAEA solid;\n  margin: 2px 0px 2px 0px;\n}\n\n.table-group-header > div:first-child {\n  /*background-color: #BBD9E6;*/\n  color: #35516A;\n  /*padding: 10px 0px 10px 0px;*/\n  /*border-top: 3px solid #EAEAEA;*/\n  border-bottom: 3px solid #EAEAEA;\n  /*margin-top: 10px;*/\n}\n\n.table-group-header > div:first-child > div.col:last-child {\n  border-right: none;\n}\n\napp-row-table {\n  display: block;\n}\n\napp-row-table.striped-row:nth-of-type(odd) {\n  background-color: #f3f8fa;\n}\n\n.col-label {\n  display: inline-block;\n  text-align: center;\n  /*width: 100%;*/\n}\n\n.highlightColumn {\n  background-color: #b4d1ee !important;\n  color: #3A738C;\n  /*padding:0px;*/\n}\n\n.text-alert-yellow {\n  color: #ffd829;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvc2FzaS10YWJsZS9yb3ctZ3JvdXAtdGFibGUvcm93LWdyb3VwLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkOztBQUdELDZCQUE2Qjs7QUFDN0I7O0VBRUUsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyx3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsaUNBQWlDO0VBQ2pDLHFCQUFxQjtDQUN0Qjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL3Nhc2ktdGFibGUvcm93LWdyb3VwLXRhYmxlL3Jvdy1ncm91cC10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1jb250cm9sIHtcbiAgd2lkdGg6IDMuNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbCB7XG4gIC8qd2lkdGg6IDEzLjMzJTsqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jb2wtY29udHJvbCBpIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jb2wtY29udHJvbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogM3B4O1xufVxuXG5cbi8qKioqIERhdGEgZ3JvdXAgaGVhZGVyICoqKiovXG4udGFibGUtZ3JvdXAtaGVhZGVyID4gZGl2LnRhYmxlLWdyb3VwLWxhYmVsID4gZGl2W2NsYXNzXj1cImNvbFwiXSxcbi50YWJsZS1ncm91cC1oZWFkZXIgPiBkaXYudGFibGUtZ3JvdXAtbGFiZWwgPiBkaXYuaWdub3JlID4gZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmlnaHQ6IDFweCAjRUFFQUVBIHNvbGlkO1xuICBtYXJnaW46IDJweCAwcHggMnB4IDBweDtcbn1cblxuLnRhYmxlLWdyb3VwLWhlYWRlciA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI0JCRDlFNjsqL1xuICBjb2xvcjogIzM1NTE2QTtcbiAgLypwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDsqL1xuICAvKmJvcmRlci10b3A6IDNweCBzb2xpZCAjRUFFQUVBOyovXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRUFFQUVBO1xuICAvKm1hcmdpbi10b3A6IDEwcHg7Ki9cbn1cblxuLnRhYmxlLWdyb3VwLWhlYWRlciA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdi5jb2w6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuYXBwLXJvdy10YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5hcHAtcm93LXRhYmxlLnN0cmlwZWQtcm93Om50aC1vZi10eXBlKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmOGZhO1xufVxuXG4uY29sLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qd2lkdGg6IDEwMCU7Ki9cbn1cblxuLmhpZ2hsaWdodENvbHVtbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGQxZWUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzQTczOEM7XG4gIC8qcGFkZGluZzowcHg7Ki9cbn1cblxuLnRleHQtYWxlcnQteWVsbG93IHtcbiAgY29sb3I6ICNmZmQ4Mjk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/row-group-table/row-group-table.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n          SYSTEM PART\n        -->\n<div class=\"table-group-header\">\n  <!--\n    SYSTEM LABEL\n  -->\n  <div class=\"table-group-label\">\n    <div class=\"col-val col-control\">\n      <i class=\"fa expand-collapse\"\n         [@iconRotate]=\"isCollapsed(data.groupRow.getCell('name').value)\"\n         [ngClass]=\"'fa-angle-down'\"\n         (click)=\"addCollapsed(data.groupRow.getCell('name').value)\"\n         [tooltip]=\"isCollapsed(data.groupRow.getCell('name').value) ? 'Expand':'Collapse'\"></i>\n\n    </div>\n    <div class=\"col-val col-control\" *ngIf=\"options.isDataGrouped && options.cellDecoratorRules.length > 0\">\n      <span *ngFor=\"let alertSum of alertSummary\">\n        <span [ngClass]=\"alertSum.type\"><i tooltip=\"Warning for one or more metrics\" class=\"fa fa-exclamation-triangle\" [ngClass]=\"alertSum.type\" ></i></span>\n      </span>\n    </div>\n    <div class=\"col-val col-label\" [style.width.%]=\"options.getColumnWidth(options.columns[0].index)\"\n         (mouseout)=\"setHighlightedColumn(-1)\"\n         (mouseover)=\"setHighlightedColumn(0)\"\n         [class.highlightColumn]=\"isColumnHighlighted(0)\">\n      <app-cell-table\n        [componentFormatter]=\"options.grIndexComponentFormatter\" [data]=\"data.groupRow.getCell('name').rawData\"\n        [label]=\"''\"\n        [options]=\"options\"\n\n      ></app-cell-table>\n    </div>\n    <div class=\"col-val col\" *ngFor=\"let column of options.getAggregatedColumns(); let colIndex=index\"\n         [style.width.%]=\"options.getColumnWidth(column.index)\"\n         (mouseout)=\"setHighlightedColumn(-1)\"\n         (mouseover)=\"setHighlightedColumn(colIndex+1)\"\n         [class.highlightColumn]=\"isColumnHighlighted(colIndex+1)\"\n\n    >\n      <app-cell-table *ngIf=\"aggregatedValues[column.index] !== undefined\" [componentFormatter]=\"column.component\"\n                      [data]=\"getAggregatedValue(column.index)\" [column]=\"column\"\n                      [label]=\"column.label\" [options]=\"options\"\n      ></app-cell-table>\n    </div>\n  </div>\n  <!---->\n  <!--POOL ROWS-->\n  <!---->\n  <div class=\"groupped-data\" [@slideInOut]=\"isCollapsed(data.groupRow.getCell('name').value)\">\n    <app-row-table *ngFor=\"let row of data.rows\"\n                   [class.striped-row]=\"options.isDataGrouped\" [data]=\"row\" [options]=\"options\"\n                   [groupName]=\"data.groupRow.getCell('name').value\"\n                   (selectEmit)=\"onSelectRow($event)\"\n                    ></app-row-table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RowGroupTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowGroupTableComponent", function() { return RowGroupTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/index.js");
/* harmony import */ var _global_statistics_utils_ConditionEvaluate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global-statistics/utils/ConditionEvaluate */ "./src/app/global-statistics/utils/ConditionEvaluate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlertSummaryValue = /** @class */ (function () {
    function AlertSummaryValue(type, count) {
        this.type = type;
        this.count = count;
    }
    return AlertSummaryValue;
}());
var RowGroupTableComponent = /** @class */ (function () {
    function RowGroupTableComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.columnHighlightEnable = false;
        this.highlightedColumn = -1;
        this.aggregatedValues = {};
        this.collapsedRows = [];
        this.alertGroup = '';
        this.alertSummary = [];
        this.alertPriority = ['text-alert-yellow', 'text-orange', 'text-red'];
    }
    RowGroupTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO refactor this to the service
        this.localStorageService.observe(this.options.storageNamePrefix + '_selected').subscribe(function (data) {
            _this.selectedRows = data.newValue;
            _this.initAggregatedValues();
        });
        this.localStorageService.observe(this.options.storageNamePrefix + '_collapsed').subscribe(function (data) {
            _this.collapsedRows = data.newValue;
        });
        this.selectedRows = this.localStorageService.get(this.options.storageNamePrefix + '_selected');
        this.collapsedRows = this.localStorageService.get(this.options.storageNamePrefix + '_collapsed');
        if (this.selectedRows === null) {
            this.selectedRows = [];
        }
        else {
            this.selectedRows = this.selectedRows; // this must be reset because save on the collapsedRows doesn't work
        }
        if (this.collapsedRows === null) {
            this.collapsedRows = [];
        }
        else {
            this.collapsedRows = this.collapsedRows; // this must be reset because save on the collapsedRows doesn't work
        }
        this.initAggregatedValues();
        this.summarizeAlerts();
    };
    RowGroupTableComponent.prototype.initAggregatedValues = function () {
        if (this.selectedRows === null) {
            this.selectedRows = [];
        }
        this.aggregateValues(this.selectedRows);
    };
    RowGroupTableComponent.prototype.addCollapsed = function (systemName) {
        if (this.collapsedRows === null) {
            this.collapsedRows = [];
        }
        var index = this.collapsedRows.findIndex(function (name) { return name === systemName; });
        if (index > -1) {
            this.collapsedRows = this.collapsedRows.filter(function (name) { return name !== systemName; });
        }
        else {
            this.collapsedRows.push(systemName);
        }
        this.localStorageService.set(this.options.storageNamePrefix + '_collapsed', this.collapsedRows);
    };
    RowGroupTableComponent.prototype.isCollapsed = function (systemName) {
        return this.collapsedRows.findIndex(function (value) { return value === systemName; }) > -1;
    };
    RowGroupTableComponent.prototype.isColumnHighlighted = function (column) {
        if (!this.options.highlightColumn || this.isAggregatedValuesEmpty()) {
            return false;
        }
        return column === this.highlightedColumn;
    };
    RowGroupTableComponent.prototype.setHighlightedColumn = function (column) {
        this.highlightedColumn = column;
    };
    RowGroupTableComponent.prototype.isAggregatedValuesEmpty = function () {
        return Object(d3_collection__WEBPACK_IMPORTED_MODULE_3__["keys"])(this.aggregatedValues).length === 0;
    };
    RowGroupTableComponent.prototype.onSelectRow = function (selectedRows) {
        this.selectedRows = selectedRows;
        if (this.options.aggregateValuesService !== undefined) {
            this.aggregateValues(selectedRows);
        }
    };
    RowGroupTableComponent.prototype.getAggregatedValue = function (type) {
        return this.aggregatedValues[type];
    };
    RowGroupTableComponent.prototype.aggregateValues = function (selectedRows) {
        var mean = this.options.aggregateValuesService;
        var values = mean.computeSummaries([this.data], selectedRows, this.options);
        var result = {};
        if (values !== null) {
            this.options.getAggregatedColumns().forEach(function (column) { return result[column.index] = { value: values.getValue(column.index) }; });
        }
        this.aggregatedValues = result;
    };
    RowGroupTableComponent.prototype.summarizeAlerts = function () {
        var _this = this;
        this.initializeSummaryAlerts();
        this.options.cellDecoratorRules.forEach(function (rule) {
            var filteredData = _this.data.rows.filter(function (row) {
                var cell = row.getCell(rule.type);
                return cell != null ? _global_statistics_utils_ConditionEvaluate__WEBPACK_IMPORTED_MODULE_4__["ConditionEvaluate"].eval(cell.value, rule) : false;
            });
            if (filteredData.length > 0) {
                _this.alertSummary.push(new AlertSummaryValue(rule.threshold.alertType, filteredData.length));
            }
        });
    };
    RowGroupTableComponent.prototype.initializeSummaryAlerts = function () {
        var _this = this;
        this.options.cellDecoratorRules.forEach(function (rule) {
            _this.alertSummary[rule.threshold.alertType] = 0;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiGroupRow"])
    ], RowGroupTableComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RowGroupTableComponent.prototype, "columnHighlightEnable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiTableOptions"])
    ], RowGroupTableComponent.prototype, "options", void 0);
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"])(),
        __metadata("design:type", Object)
    ], RowGroupTableComponent.prototype, "highlightedColumn", void 0);
    RowGroupTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-row-group-table',
            template: __webpack_require__(/*! ./row-group-table.component.html */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.html"),
            animations: _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["slideInOutAnimation"],
            styles: [__webpack_require__(/*! ./row-group-table.component.css */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_store__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], RowGroupTableComponent);
    return RowGroupTableComponent;
}());



/***/ }),

/***/ "./src/app/common/components/sasi-table/row-table/row-table.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/row-table/row-table.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Layout table ***/\n.col-control {\n  width: 3.5%;\n  display: inline-block;\n  vertical-align: middle;\n}\n.col {\n  /*width: 13.33%;*/\n  display: inline-block;\n  vertical-align: middle;\n}\n.col-control i {\n  font-size: 11px;\n  padding: 3px;\n}\n.col-control:after {\n  content: \"\";\n  font-size: 11px;\n  padding: 3px;\n}\n/**** Table data ****/\n.table-data {\n  width: 100%;\n}\n.table-data > div {\n  text-align: center;\n  border-right: 1px #EAEAEA solid;\n  display: inline-block;\n  vertical-align: middle;\n  margin: auto;\n}\n.selectedRow {\n  background-color: #BEECD1;\n  color: #3A738C;\n}\n.table-data .highlightColumn {\n  background-color: #b4d1ee !important;\n  color: #3A738C;\n}\n.highlight-row:hover {\n  background-color: #b4d1ee !important;\n  color: #3A738C;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvc2FzaS10YWJsZS9yb3ctdGFibGUvcm93LXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCO0FBQ3RCO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCO0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkO0FBRUQ7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZDtBQUVELHNCQUFzQjtBQUN0QjtFQUNFLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL3Nhc2ktdGFibGUvcm93LXRhYmxlL3Jvdy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBMYXlvdXQgdGFibGUgKioqL1xuLmNvbC1jb250cm9sIHtcbiAgd2lkdGg6IDMuNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbCB7XG4gIC8qd2lkdGg6IDEzLjMzJTsqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jb2wtY29udHJvbCBpIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5jb2wtY29udHJvbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4vKioqKiBUYWJsZSBkYXRhICoqKiovXG4udGFibGUtZGF0YSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFibGUtZGF0YSA+IGRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggI0VBRUFFQSBzb2xpZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zZWxlY3RlZFJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCRUVDRDE7XG4gIGNvbG9yOiAjM0E3MzhDO1xufVxuLnRhYmxlLWRhdGEgLmhpZ2hsaWdodENvbHVtbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGQxZWUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzQTczOEM7XG59XG4uaGlnaGxpZ2h0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGQxZWUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzQTczOEM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/common/components/sasi-table/row-table/row-table.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/row-table/row-table.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-data \" [class.selectedRow]=\"isSelectedRow(data.getCell('name').value)\" [class.highlight-row]=\"options.highlightRow\">\n  <div class=\"col-val col-control\" *ngIf=\"options.selectableRows\">\n    <i\n      [ngClass]=\"isSelectedRow(data.getCell('name').value) ? 'fa-check-square' : 'fa-square'\" class=\"far fa-fw\"\n      (click)=\"selectRow(data.getCell('name').value)\"></i>\n  </div>\n  <div *ngIf=\"options.colControlFormatter != null\" class=\"col-val col-control\">\n    <app-cell-table [componentFormatter]=\"options.colControlFormatter\" [data]=\"data\" [label]=\"''\"\n                    [options]=\"options\"\n                    ></app-cell-table>\n  </div>\n  <div [ngClass]=\"'col-val col'\" [style.width.%]=\"options.getColumnWidth(column.index)\" *ngFor=\"let column of options.columns; let colIndex = index\"\n       (mouseout)=\"setHighlightedColumn(-1)\"\n       (mouseover)=\"setHighlightedColumn(colIndex)\"\n       [class.highlightColumn]=\"isColumnHighlighted(colIndex)\"\n  >\n   <app-cell-table [componentFormatter]=\"column.component\" [data]=\"data.getCellRawData(column)\" [label]=\"column.label\" [rowData]=\"data\"\n                    [options]=\"options\" [column]=\"column\"></app-cell-table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/components/sasi-table/row-table/row-table.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/row-table/row-table.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RowTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowTableComponent", function() { return RowTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var _selected_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selected-row */ "./src/app/common/components/sasi-table/row-table/selected-row.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RowTableComponent = /** @class */ (function () {
    function RowTableComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.columnHighlightEnable = false;
        this.selectEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.highlightedColumn = -1;
    }
    RowTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localStorageService.observe(this.options.storageNamePrefix + '_selected').subscribe(function (data) {
            _this.selectedRows = data.newValue;
        });
        this.selectedRows = this.localStorageService.get(this.options.storageNamePrefix + '_selected');
        if (this.selectedRows === null) {
            this.selectedRows = [];
        }
    };
    /* HIGHLIGHTNING */
    RowTableComponent.prototype.isColumnHighlighted = function (column) {
        if (!this.options.highlightColumn) {
            return false;
        }
        return column === this.highlightedColumn;
    };
    RowTableComponent.prototype.setHighlightedColumn = function (column) {
        this.highlightedColumn = column;
    };
    RowTableComponent.prototype.isSelectedRow = function (name) {
        return this.findIndex(name) > -1;
    };
    RowTableComponent.prototype.selectRow = function (name) {
        this.selectedRows = this.localStorageService.get(this.options.storageNamePrefix + '_selected');
        if (this.selectedRows === null) {
            this.selectedRows = [];
        }
        var index = this.findIndex(name);
        if (index > -1) {
            this.selectedRows.splice(index, 1);
        }
        else {
            this.selectedRows.push(new _selected_row__WEBPACK_IMPORTED_MODULE_3__["SelectedRow"](this.groupName, name));
        }
        // @ts-ignore
        this.localStorageService.set(this.options.storageNamePrefix + '_selected', this.selectedRows);
        this.selectEmit.emit(this.selectedRows);
    };
    RowTableComponent.prototype.findIndex = function (name) {
        var _this = this;
        return this.selectedRows.findIndex(function (value) { return value.rowName === name && value.groupName === _this.groupName; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiRow"])
    ], RowTableComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RowTableComponent.prototype, "groupName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RowTableComponent.prototype, "columnHighlightEnable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiTableOptions"])
    ], RowTableComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RowTableComponent.prototype, "selectEmit", void 0);
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"])(),
        __metadata("design:type", Object)
    ], RowTableComponent.prototype, "highlightedColumn", void 0);
    RowTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-row-table',
            template: __webpack_require__(/*! ./row-table.component.html */ "./src/app/common/components/sasi-table/row-table/row-table.component.html"),
            styles: [__webpack_require__(/*! ./row-table.component.css */ "./src/app/common/components/sasi-table/row-table/row-table.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_store__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], RowTableComponent);
    return RowTableComponent;
}());



/***/ }),

/***/ "./src/app/common/components/sasi-table/row-table/selected-row.ts":
/*!************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/row-table/selected-row.ts ***!
  \************************************************************************/
/*! exports provided: SelectedRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedRow", function() { return SelectedRow; });
var SelectedRow = /** @class */ (function () {
    function SelectedRow(groupName, rowName) {
        this.groupName = groupName;
        this.rowName = rowName;
    }
    return SelectedRow;
}());



/***/ }),

/***/ "./src/app/common/components/sasi-table/sasi-table.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/common/components/sasi-table/sasi-table.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/****** Behavior *****/\ndiv.collapsed ~ div.collapsable {\n  display: none;\n}\ndiv.table-header > div.col.highlightColumn {\n  -webkit-text-decoration: #334369 underline;\n          text-decoration: #334369 underline;\n}\n.selectedRow {\n  background-color: #BEECD1 !important;\n  color: #3A738C;\n}\n/*** Layout table ***/\n.col-control {\n  width: 3.5%;\n  display: inline-block;\n  vertical-align: middle;\n}\n.col {\n  /*width: 13.33%;*/\n  display: inline-block;\n  vertical-align: middle;\n}\n.col-label {\n  width: 13%;\n  display: inline-block;\n\n  /*width: 100%;*/\n}\n.capacity-table .row {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n/*** Table header ***/\ndiv.table-header {\n  border: 3px #EAEAEA solid;\n  background-color: #3C8CBC;\n  font-size: 13px;\n  color: white;\n  font-weight: bolder;\n}\ndiv.table-header > div {\n  border-right: 1px #EAEAEA solid;\n  padding: 10px 0px 10px 0px;\n}\ndiv.table-header > div {\n  text-align: center;\n}\ndiv.table-header > div.col-control {\n  color: #333;\n}\n/**** Table data ****/\napp-row-dynamic-table {\n  display: block;\n  margin: 0 0 5px;\n  border: 3px solid #eaeaea;\n}\napp-row-dynamic-table.striped-row:nth-of-type(odd) {\n  background-color: #f3f8fa;\n}\napp-row-dynamic-table.highlight-row:hover {\n  background-color: #b4d1ee !important;\n  color: #3A738C;\n}\n.col-control i {\n  font-size: 11px;\n  padding: 3px;\n}\n.table-header .col-control i, .table-header i{\n  color: white\n}\n.col-control:after {\n  content: \"\";\n  font-size: 11px;\n  padding: 3px;\n}\ndiv.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n}\ndiv.sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 50px;\n  z-index: 10;\n}\n.expand-collapse {\n  padding-right: 15px;\n}\n.expand-collapse:hover {\n  color: #5C91A8;\n  font-size: 17px;\n}\ndiv.no-border {\n  border-right: 0px !important;\n}\ni.sort-icon-left {\n  margin-right: 5px;\n}\ni.sort-icon-right {\n  margin-left: 5px;\n}\n.table-data.row {\n  margin: 0px 0px 5px 0px;\n  border: 3px #EAEAEA solid;\n}\n.peak-label {\n  color: #c7e1f8;\n}\napp-row-dynamic-table {\n  width: 100%;\n}\n.sorting{\n  font-size:10px;\n}\n.col span.link {\n  color: white;\n  cursor: pointer;\n\n}\n.col span.link:hover {\n  color: white;\n  cursor: pointer;\n  -webkit-text-decoration: white underline;\n          text-decoration: white underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvc2FzaS10YWJsZS9zYXNpLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsY0FBYztDQUNmO0FBRUQ7RUFDRSwyQ0FBbUM7VUFBbkMsbUNBQW1DO0NBQ3BDO0FBR0Q7RUFDRSxxQ0FBcUM7RUFDckMsZUFBZTtDQUNoQjtBQUVELHNCQUFzQjtBQUN0QjtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCO0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4QjtBQUVEO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjs7RUFFdEIsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0NBQ2xCO0FBRUQsc0JBQXNCO0FBRXRCO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG9CQUFvQjtDQUNyQjtBQUVEO0VBQ0UsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtDQUM1QjtBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxZQUFZO0NBQ2I7QUFFRCxzQkFBc0I7QUFDdEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZDtBQUVEO0VBQ0UseUJBQWlCO0VBQWpCLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0UseUJBQWlCO0VBQWpCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtDQUNiO0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLDZCQUE2QjtDQUM5QjtBQUVEO0VBQ0Usa0JBQWtCO0NBQ25CO0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7Q0FDM0I7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjs7Q0FFakI7QUFDRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUNBQWlDO1VBQWpDLGlDQUFpQztDQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL3Nhc2ktdGFibGUvc2FzaS10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKiBCZWhhdmlvciAqKioqKi9cbmRpdi5jb2xsYXBzZWQgfiBkaXYuY29sbGFwc2FibGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYudGFibGUtaGVhZGVyID4gZGl2LmNvbC5oaWdobGlnaHRDb2x1bW4ge1xuICB0ZXh0LWRlY29yYXRpb246ICMzMzQzNjkgdW5kZXJsaW5lO1xufVxuXG5cbi5zZWxlY3RlZFJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCRUVDRDEgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzQTczOEM7XG59XG5cbi8qKiogTGF5b3V0IHRhYmxlICoqKi9cbi5jb2wtY29udHJvbCB7XG4gIHdpZHRoOiAzLjUlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jb2wge1xuICAvKndpZHRoOiAxMy4zMyU7Ki9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sLWxhYmVsIHtcbiAgd2lkdGg6IDEzJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIC8qd2lkdGg6IDEwMCU7Ki9cbn1cblxuLmNhcGFjaXR5LXRhYmxlIC5yb3cge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLyoqKiBUYWJsZSBoZWFkZXIgKioqL1xuXG5kaXYudGFibGUtaGVhZGVyIHtcbiAgYm9yZGVyOiAzcHggI0VBRUFFQSBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDOENCQztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmRpdi50YWJsZS1oZWFkZXIgPiBkaXYge1xuICBib3JkZXItcmlnaHQ6IDFweCAjRUFFQUVBIHNvbGlkO1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbn1cblxuZGl2LnRhYmxlLWhlYWRlciA+IGRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2LnRhYmxlLWhlYWRlciA+IGRpdi5jb2wtY29udHJvbCB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4vKioqKiBUYWJsZSBkYXRhICoqKiovXG5hcHAtcm93LWR5bmFtaWMtdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDAgNXB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZWFlYWVhO1xufVxuYXBwLXJvdy1keW5hbWljLXRhYmxlLnN0cmlwZWQtcm93Om50aC1vZi10eXBlKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmOGZhO1xufVxuYXBwLXJvdy1keW5hbWljLXRhYmxlLmhpZ2hsaWdodC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRkMWVlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjM0E3MzhDO1xufVxuXG4uY29sLWNvbnRyb2wgaSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogM3B4O1xufVxuLnRhYmxlLWhlYWRlciAuY29sLWNvbnRyb2wgaSwgLnRhYmxlLWhlYWRlciBpe1xuICBjb2xvcjogd2hpdGVcbn1cbi5jb2wtY29udHJvbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogM3B4O1xufVxuXG5kaXYuc3RpY2t5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbn1cblxuZGl2LnN0aWNreS10b3Age1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDUwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uZXhwYW5kLWNvbGxhcHNlIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLmV4cGFuZC1jb2xsYXBzZTpob3ZlciB7XG4gIGNvbG9yOiAjNUM5MUE4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmRpdi5uby1ib3JkZXIge1xuICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pLnNvcnQtaWNvbi1sZWZ0IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmkuc29ydC1pY29uLXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnRhYmxlLWRhdGEucm93IHtcbiAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XG4gIGJvcmRlcjogM3B4ICNFQUVBRUEgc29saWQ7XG59XG5cbi5wZWFrLWxhYmVsIHtcbiAgY29sb3I6ICNjN2UxZjg7XG59XG5hcHAtcm93LWR5bmFtaWMtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNvcnRpbmd7XG4gIGZvbnQtc2l6ZToxMHB4O1xufVxuXG4uY29sIHNwYW4ubGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG4uY29sIHNwYW4ubGluazpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHdoaXRlIHVuZGVybGluZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/common/components/sasi-table/sasi-table.component.html":
/*!************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/sasi-table.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"capacity-table sticky col-md-12\">\n  <!--\n    TOP TABLE ROW\n  -->\n  <div class=\"row table-header sticky-top\">\n    <div class=\"col-control\">\n      <i *ngIf=\"options.isDataGrouped\" class=\"fa expand-collapse\"\n         [@iconRotate]=\"isCollapseAll()\"\n         [ngClass]=\"'fa-angle-down'\"\n         (click)=\"collapseAll()\"\n         [tooltip]=\"isCollapseAll() ? 'Expand All':'Collapse All'\"></i>\n      <i *ngIf=\"options.selectableRows && isSelectedAll()\" class=\"far fa-check-square\" (click)=\"selectAll()\"></i>\n      <i *ngIf=\"options.selectableRows && isPartiallySelected() && !isSelectedAll()\" class=\"far fa-fw fa-minus-square\"\n      (click)=\"selectAll()\"></i>\n      <i *ngIf=\"options.selectableRows && (!isPartiallySelected()) && (!isSelectedAll())\" class=\"far fa-fw fa-square\"\n      (click)=\"selectAll()\"></i>\n    </div>\n    <div class=\"col-val col-control\" *ngIf=\"options.isDataGrouped && options.cellDecoratorRules.length > 0\">\n      <i tooltip=\"Alerts\" class=\"fa fa-exclamation-triangle text-orange\"></i>\n    </div>\n    <div class=\"col\" [style.width.%]=\"options.getColumnWidth(columnOption.index)\"\n         *ngFor=\"let columnOption of options.columns\">\n      <span class=\"link\" (click)=\"setSort(columnOption, false)\">{{getColumnLabel(columnOption.index)}} <i\n        class=\"text-muted sorting sort-icon-right\"\n        [ngClass]=\"getSortIconClass(columnOption.index, false)\"></i>\n      </span>\n      <!-- [class.highlightColumn]=\"isColumnHighlighted(column)\" -->\n      <br/>\n      <span *ngIf=\"columnOption.altSortEnable === true\" (click)=\"setSort(columnOption, true)\" class=\"link\"><i\n      class=\"fa fa-angle-up text-red sort-icon-left\"></i>\n        <span class=\"peak-label\">Peak</span> <i\n      class='sorting sort-icon-right' [ngClass]=\"getSortIconClass(columnOption.index, true)\"\n      ></i></span>\n    </div>\n  </div>\n  <!--POOL ROWS-->\n  <!---->\n  <div class=\"row\">\n    <!--<div  [class.highlight-row]=\"options.highlightRow\">-->\n    <app-row-dynamic-table *ngFor=\"let row of data\"\n                           [class.highlight-row]=\"options.highlightRow && !options.isDataGrouped\"\n                           [class.striped-row]=\"!options.isDataGrouped\"\n                           [componentFormatter]=\"options.rowComponentFormatter\" [data]=\"row\"\n                           [options]=\"options\"></app-row-dynamic-table>\n    <!--</div>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/components/sasi-table/sasi-table.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/common/components/sasi-table/sasi-table.component.ts ***!
  \**********************************************************************/
/*! exports provided: SasiColumnBuilder, SasiColumn, SasiCell, SasiRow, SasiGroupRow, SasiTableOptions, SasiSortType, slideInOutAnimation, SasiTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiColumnBuilder", function() { return SasiColumnBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiColumn", function() { return SasiColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiCell", function() { return SasiCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiRow", function() { return SasiRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiGroupRow", function() { return SasiGroupRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiTableOptions", function() { return SasiTableOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiSortType", function() { return SasiSortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInOutAnimation", function() { return slideInOutAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiTableComponent", function() { return SasiTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _row_table_selected_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./row-table/selected-row */ "./src/app/common/components/sasi-table/row-table/selected-row.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * SasiColumn is metadata object for columns.
 */
var SasiColumnBuilder = /** @class */ (function () {
    function SasiColumnBuilder() {
        this.altSortEnable = false;
        this.isAggregated = false;
        this.tooltipText = null;
        this.infinity = true;
    }
    SasiColumnBuilder.getInstance = function () {
        return new SasiColumnBuilder();
    };
    SasiColumnBuilder.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    SasiColumnBuilder.prototype.withLabel = function (label) {
        this.label = label;
        return this;
    };
    SasiColumnBuilder.prototype.withComponent = function (component) {
        this.component = component;
        return this;
    };
    SasiColumnBuilder.prototype.withAltSortEnable = function (altSortEnable) {
        this.altSortEnable = altSortEnable;
        return this;
    };
    SasiColumnBuilder.prototype.withIsAggregated = function (isAggregated) {
        this.isAggregated = isAggregated;
        return this;
    };
    SasiColumnBuilder.prototype.withTooltipText = function (tooltipText) {
        this.tooltipText = tooltipText;
        return this;
    };
    SasiColumnBuilder.prototype.build = function () {
        return new SasiColumn(this.index, this.label, this.component, this.altSortEnable, this.isAggregated, this.tooltipText === null ? this.label : this.tooltipText, this.infinity);
    };
    SasiColumnBuilder.prototype.withInfinity = function (isInfinity) {
        this.infinity = isInfinity;
        return this;
    };
    return SasiColumnBuilder;
}());

var SasiColumn = /** @class */ (function () {
    function SasiColumn(index, label, component, altSortEnable, isAggragated, tooltipText, isInfinity) {
        this.index = index;
        this.label = label;
        this.component = component;
        this.altSortEnable = altSortEnable;
        this.isAggregated = isAggragated;
        this.tooltipText = tooltipText;
        this.isInfinity = isInfinity;
    }
    return SasiColumn;
}());

/**
 * SasiCell is data model for one cell in the table
 */
var SasiCell = /** @class */ (function () {
    function SasiCell(value, rawData) {
        this.value = value;
        this.rawData = rawData;
    }
    return SasiCell;
}());

/**
 * SasiRow is data model for row in the table
 */
var SasiRow = /** @class */ (function () {
    function SasiRow() {
        this.cells = [];
    }
    SasiRow.prototype.getCellValue = function (columnIndex) {
        var cellData = this.getCell(columnIndex.index);
        return cellData !== null ? cellData.value : null;
    };
    SasiRow.prototype.getCellRawData = function (columnIndex) {
        var cellData = this.getCell(columnIndex.index);
        return cellData !== null ? cellData.rawData : null;
    };
    SasiRow.prototype.getCell = function (columnIndex) {
        var cellData = this.cells[columnIndex];
        if (cellData === undefined) {
            // console.error('Cannot find data in %s row, and columnIndex: %s', this.cells.toString(), columnIndex);
            cellData = null;
        }
        return cellData;
    };
    return SasiRow;
}());

var SasiGroupRow = /** @class */ (function () {
    function SasiGroupRow() {
        this.rows = [];
    }
    return SasiGroupRow;
}());

/**
 * SasiTableOptions is class holding options to be set in table, and define behavior, features etc. for sasi table.
 */
var SasiTableOptions = /** @class */ (function () {
    function SasiTableOptions() {
        this.columns = [];
        this.cellDecoratorRules = [];
    }
    SasiTableOptions.prototype.getColumnWidth = function (name) {
        if (name === 'name') {
            return this.labelColumnWidth;
        }
        return this.valueColumnWidth;
    };
    SasiTableOptions.prototype.getAggregatedColumns = function () {
        return this.columns.filter(function (column) { return column.isAggregated; });
    };
    return SasiTableOptions;
}());

var SasiSortType;
(function (SasiSortType) {
    SasiSortType[SasiSortType["ASC"] = 0] = "ASC";
    SasiSortType[SasiSortType["DESC"] = 1] = "DESC";
})(SasiSortType || (SasiSortType = {}));
var slideInOutAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px', overflow: 'hidden', margin: '0' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ 'height': '*', overflow: 'hidden', margin: '0' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-out'))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('iconRotate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(0deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(90deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms'))
    ])
];
var SasiTableComponent = /** @class */ (function () {
    function SasiTableComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.data = [];
        this.tableOptions = new SasiTableOptions();
        this.defaultOptions = {
            sortDescIcon: 'glyphicon glyphicon-sort-by-attributes-alt',
            sortAscIcon: 'glyphicon glyphicon-sort-by-attributes',
            sortDefaultIcon: 'glyphicon glyphicon-sort',
            sortType: SasiSortType.ASC,
            altSortColumnName: null,
            highlightColumn: true,
            highlightRow: true,
            valueColumnWidth: '',
            labelColumnWidth: '',
            isDataGrouped: false,
            selectableRows: false,
            colControlFormatter: null,
            cellDecoratorRules: [],
            rowComponentFormatter: null,
            grIndexComponentFormatter: null,
            aggregateColumns: [],
            sortService: null,
            storageNamePrefix: 'sasi_default',
            getColumnWidth: function (name) {
                if (name === 'name') {
                    return this.labelColumnWidth;
                }
                return this.valueColumnWidth;
            },
            getAggregatedColumns: function () {
                return this.columns.filter(function (column) { return column.isAggregated; });
            }
        };
        this.altSort = false;
    }
    SasiTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = Object.assign(this.defaultOptions, this.tableOptions);
        this.localStorageService.observe(this.options.storageNamePrefix + '_selected').subscribe(function (data) { return _this.selectedRows = data.newValue; });
        this.localStorageService.observe(this.options.storageNamePrefix + '_collapsed').subscribe(function (data) {
            _this.collapsedRows = data.newValue;
        });
        this.selectedRows = this.localStorageService.get(this.options.storageNamePrefix + '_selected');
        this.collapsedRows = this.localStorageService.get(this.options.storageNamePrefix + '_collapsed');
        if (this.selectedRows === null) {
            this.selectedRows = [];
        }
        else {
            this.selectedRows = this.selectedRows; // this must be reset because save on the collapsedRows doesn't work
        }
        if (this.collapsedRows === null) {
            this.collapsedRows = [];
        }
        else {
            this.collapsedRows = this.collapsedRows; // this must be reset because save on the collapsedRows doesn't work
        }
    };
    SasiTableComponent.prototype.getColumnLabel = function (type) {
        var column = this.options.columns.find(function (optionColumn) { return optionColumn.index === type; });
        if (column === undefined) {
            return '';
        }
        return column.label;
    };
    /* SORTING FEATURES */
    SasiTableComponent.prototype.getSortIconClass = function (column, isAltSort) {
        var sortIconClass = this.options.sortDefaultIcon;
        if (this.options.sortColumnName === column) {
            if (this.options.sortType === SasiSortType.ASC) {
                sortIconClass = this.options.sortAscIcon;
            }
            else {
                sortIconClass = this.options.sortDescIcon;
            }
        }
        if (this.altSort === isAltSort) {
            return sortIconClass;
        }
        return this.options.sortDefaultIcon;
    };
    SasiTableComponent.prototype.setSort = function (column, isAltSort) {
        if (this.options.sortColumnName === column.index) {
            if (this.options.sortType === SasiSortType.ASC) {
                this.options.sortType = SasiSortType.DESC;
            }
            else {
                this.options.sortType = SasiSortType.ASC;
            }
        }
        else {
            this.options.sortType = SasiSortType.ASC;
            this.options.sortColumnName = column.index;
        }
        this.altSort = isAltSort;
        this.data = this.options.sortService.sort(this.data, column, this.options.sortType, this.altSort ? this.options.altSortColumnName : null, (function (row, column1) { return row.getCellValue(column1); }));
    };
    SasiTableComponent.prototype.collapseAll = function () {
        var _this = this;
        // @ts-ignore
        var d = this.data;
        if (this.isCollapseAll()) {
            d.forEach(function (value) {
                return _this.collapsedRows = _this.collapsedRows.filter(function (collapsedRowValue) { return collapsedRowValue !== value.groupRow.getCell('name').value; });
            });
        }
        else {
            d.forEach(function (value) { return _this.collapsedRows.push(value.groupRow.getCell('name').value); });
        }
        this.localStorageService.set(this.options.storageNamePrefix + '_collapsed', this.collapsedRows);
    };
    SasiTableComponent.prototype.isCollapseAll = function () {
        var _this = this;
        return this.data.every(
        // @ts-ignore
        function (row) { return _this.collapsedRows.includes(row.groupRow.getCell('name').value); });
    };
    SasiTableComponent.prototype.isSelectedAll = function () {
        var _this = this;
        if (!this.options.isDataGrouped) {
            return false;
        }
        // @ts-ignore
        var d = this.data;
        return d.every(
        // @ts-ignore
        function (rowGroup) { return rowGroup.rows.every(function (row) { return _this.selectedRows.find(function (selectedRow) { return selectedRow.rowName === row.getCell('name').value && selectedRow.groupName === rowGroup.groupRow.getCell('name').value; }) !== undefined; }); });
    };
    SasiTableComponent.prototype.isPartiallySelected = function () {
        var _this = this;
        if (!this.options.isDataGrouped) {
            return false;
        }
        // @ts-ignore
        var d = this.data;
        return d.find(
        // @ts-ignore
        function (rowGroup) { return rowGroup.rows.find(function (row) { return _this.selectedRows.find(function (selectedRow) { return selectedRow.rowName === row.getCell('name').value && selectedRow.groupName === rowGroup.groupRow.getCell('name').value; }) !== undefined; }); }) !== undefined;
    };
    SasiTableComponent.prototype.selectAll = function () {
        var _this = this;
        // @ts-ignore
        var d = this.data;
        if (!this.isSelectedAll()) {
            this.selectedRows = [];
            d.forEach(function (rowGroup) { return rowGroup.rows.forEach(function (row) { return _this.selectedRows.push(new _row_table_selected_row__WEBPACK_IMPORTED_MODULE_3__["SelectedRow"](rowGroup.groupRow.getCell('name').value, row.getCell('name').value)); }); });
        }
        else {
            d.forEach(function (groupRow) {
                return groupRow.rows.forEach(function (row) { return _this.selectedRows.splice(_this.selectedRows.findIndex(function (selectedRow) { return selectedRow.groupName === groupRow.groupRow.getCell('name').value && selectedRow.rowName === row.getCell('name').value; }), 1); });
            });
        }
        this.localStorageService.set(this.options.storageNamePrefix + '_selected', this.selectedRows);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SasiTableComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", SasiTableOptions)
    ], SasiTableComponent.prototype, "tableOptions", void 0);
    SasiTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sasi-table',
            template: __webpack_require__(/*! ./sasi-table.component.html */ "./src/app/common/components/sasi-table/sasi-table.component.html"),
            animations: slideInOutAnimation,
            styles: [__webpack_require__(/*! ./sasi-table.component.css */ "./src/app/common/components/sasi-table/sasi-table.component.css")]
        })
        /**
         * Storage analytics simple interactive table
         */
        ,
        __metadata("design:paramtypes", [ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], SasiTableComponent);
    return SasiTableComponent;
}());



/***/ }),

/***/ "./src/app/common/components/sasi-table/simple-sort-impl.ts":
/*!******************************************************************!*\
  !*** ./src/app/common/components/sasi-table/simple-sort-impl.ts ***!
  \******************************************************************/
/*! exports provided: SimpleSortImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSortImpl", function() { return SimpleSortImpl; });
/* harmony import */ var _sasi_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");

var SimpleSortImpl = /** @class */ (function () {
    function SimpleSortImpl() {
    }
    SimpleSortImpl.prototype.sort = function (data, column, sortType, sortByRawValue, getValue) {
        var _this = this;
        var dataReturned = data.sort(function (rowA, rowB) {
            if (sortType === _sasi_table_component__WEBPACK_IMPORTED_MODULE_0__["SasiSortType"].ASC) {
                if (sortByRawValue !== null) {
                    return _this.compare(rowA.getCellRawData(column)[sortByRawValue], rowB.getCellRawData(column)[sortByRawValue]);
                }
                else {
                    return _this.compare(getValue(rowA, column), getValue(rowB, column));
                }
            }
            else {
                if (sortByRawValue !== null) {
                    return _this.compare(rowB.getCellRawData(column)[sortByRawValue], rowA.getCellRawData(column)[sortByRawValue]);
                }
                else {
                    return _this.compare(getValue(rowB, column), getValue(rowA, column));
                }
            }
        });
        return dataReturned;
    };
    SimpleSortImpl.prototype.compare = function (valueA, valueB) {
        if (valueA > valueB) {
            return 1;
        }
        else if (valueA < valueB) {
            return -1;
        }
        return 0;
    };
    return SimpleSortImpl;
}());



/***/ }),

/***/ "./src/app/common/components/small-box/locale-number-format.pipe.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common/components/small-box/locale-number-format.pipe.ts ***!
  \**************************************************************************/
/*! exports provided: LocaleNumberFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleNumberFormatPipe", function() { return LocaleNumberFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocaleNumberFormatPipe = /** @class */ (function () {
    function LocaleNumberFormatPipe() {
    }
    LocaleNumberFormatPipe_1 = LocaleNumberFormatPipe;
    LocaleNumberFormatPipe.prototype.transform = function (value) {
        var result = [];
        var partValue = value.toFixed(0);
        while (this.lastNChar(partValue, LocaleNumberFormatPipe_1.DECIMAL_SIZE) !== '') {
            result.push(this.lastNChar(partValue, LocaleNumberFormatPipe_1.DECIMAL_SIZE));
            partValue = this.ignoreLastNChar(partValue, LocaleNumberFormatPipe_1.DECIMAL_SIZE);
        }
        return result.reverse().join(' ');
    };
    LocaleNumberFormatPipe.prototype.lastNChar = function (value, count) {
        return value.substring(value.length - count, value.length);
    };
    LocaleNumberFormatPipe.prototype.ignoreLastNChar = function (value, count) {
        return value.substring(0, value.length - count);
    };
    var LocaleNumberFormatPipe_1;
    LocaleNumberFormatPipe.DECIMAL_SIZE = 3;
    LocaleNumberFormatPipe = LocaleNumberFormatPipe_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'localeNumberFormat'
        })
    ], LocaleNumberFormatPipe);
    return LocaleNumberFormatPipe;
}());



/***/ }),

/***/ "./src/app/common/components/small-box/small-box.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/common/components/small-box/small-box.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL3NtYWxsLWJveC9zbWFsbC1ib3guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/common/components/small-box/small-box.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/common/components/small-box/small-box.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"small-box\" ngClass=\"{{color}}\">\n  <div class=\"inner\">\n    <h3>{{data.value | localeNumberFormat}} <span>{{data.unit}}</span></h3>\n\n    <p>{{label}}</p>\n  </div>\n  <div class=\"icon\">\n\n    <i ngClass=\"{{icon}}\"></i>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/components/small-box/small-box.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/common/components/small-box/small-box.component.ts ***!
  \********************************************************************/
/*! exports provided: SmallBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallBoxComponent", function() { return SmallBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmallBoxComponent = /** @class */ (function () {
    function SmallBoxComponent() {
    }
    SmallBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SmallBoxComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SmallBoxComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SmallBoxComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SmallBoxComponent.prototype, "color", void 0);
    SmallBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-small-box',
            template: __webpack_require__(/*! ./small-box.component.html */ "./src/app/common/components/small-box/small-box.component.html"),
            styles: [__webpack_require__(/*! ./small-box.component.css */ "./src/app/common/components/small-box/small-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SmallBoxComponent);
    return SmallBoxComponent;
}());



/***/ }),

/***/ "./src/app/common/models/MenuItem.ts":
/*!*******************************************!*\
  !*** ./src/app/common/models/MenuItem.ts ***!
  \*******************************************/
/*! exports provided: MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
var MenuItem = /** @class */ (function () {
    function MenuItem(id, label) {
        this.name = label;
        // this.url = url;
        this.id = id;
    }
    return MenuItem;
}());



/***/ }),

/***/ "./src/app/common/models/MenuTree.ts":
/*!*******************************************!*\
  !*** ./src/app/common/models/MenuTree.ts ***!
  \*******************************************/
/*! exports provided: MenuTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTree", function() { return MenuTree; });
var MenuTree = /** @class */ (function () {
    function MenuTree(label, items) {
        this.label = label;
        this.items = items;
    }
    return MenuTree;
}());



/***/ }),

/***/ "./src/app/common/models/metrics/AlertType.ts":
/*!****************************************************!*\
  !*** ./src/app/common/models/metrics/AlertType.ts ***!
  \****************************************************/
/*! exports provided: AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var AlertType;
(function (AlertType) {
    AlertType["SLA_EVENTS"] = "sla_events";
    AlertType["DISBALANCE_EVENTS"] = "disbalance_events";
    AlertType["CAPACITY_USAGE"] = "capacityUsage";
    AlertType["CPU"] = "cpu";
    AlertType["HDD"] = "hdd";
    AlertType["WRITE_PENDING"] = "write_pending";
    AlertType["RESPONSE"] = "response";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/common/models/metrics/EntityType.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/models/metrics/EntityType.ts ***!
  \*****************************************************/
/*! exports provided: EntityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return EntityType; });
var EntityType;
(function (EntityType) {
    EntityType["POOL"] = "pool";
    EntityType["SYSTEM"] = "system";
})(EntityType || (EntityType = {}));


/***/ }),

/***/ "./src/app/common/models/metrics/Metric.ts":
/*!*************************************************!*\
  !*** ./src/app/common/models/metrics/Metric.ts ***!
  \*************************************************/
/*! exports provided: Metric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Metric", function() { return Metric; });
var Metric = /** @class */ (function () {
    function Metric() {
    }
    return Metric;
}());



/***/ }),

/***/ "./src/app/common/models/metrics/SystemMetric.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/models/metrics/SystemMetric.ts ***!
  \*******************************************************/
/*! exports provided: SystemMetric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemMetric", function() { return SystemMetric; });
/* harmony import */ var _Metric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Metric */ "./src/app/common/models/metrics/Metric.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SystemMetric = /** @class */ (function (_super) {
    __extends(SystemMetric, _super);
    function SystemMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SystemMetric;
}(_Metric__WEBPACK_IMPORTED_MODULE_0__["Metric"]));



/***/ }),

/***/ "./src/app/common/models/metrics/SystemMetricType.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/models/metrics/SystemMetricType.ts ***!
  \***********************************************************/
/*! exports provided: SystemMetricType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemMetricType", function() { return SystemMetricType; });
var SystemMetricType;
(function (SystemMetricType) {
    SystemMetricType["PHYSICAL_CAPACITY"] = "PHYSICAL_CAPACITY";
    SystemMetricType["PHYSICAL_SUBS_PERC"] = "PHYSICAL_SUBS_PERC";
    SystemMetricType["AVAILABLE_CAPACITY"] = "AVAILABLE_CAPACITY";
    SystemMetricType["LOGICAL_USED_PERC"] = "LOGICAL_USED_PERC";
    SystemMetricType["PHYSICAL_USED_PERC"] = "PHYSICAL_USED_PERC";
    SystemMetricType["PHYSICAL_USED"] = "PHYSICAL_USED";
    SystemMetricType["PHYSICAL_FREE"] = "PHYSICAL_FREE";
    SystemMetricType["LOGICAL_CAPACITY"] = "LOGICAL_CAPACITY";
    SystemMetricType["LOGICAL_USED"] = "LOGICAL_USED";
    SystemMetricType["LOGICAL_FREE"] = "LOGICAL_FREE";
    SystemMetricType["NET_TOTAL"] = "NET_TOTAL";
    SystemMetricType["NET_USED"] = "NET_USED";
    SystemMetricType["NET_FREE"] = "NET_FREE";
    SystemMetricType["NET_USED_PERC"] = "NET_USED_PERC";
    SystemMetricType["COMPRESS_RATIO"] = "COMPRESSION_RATIO";
    SystemMetricType["DEDUP_RATIO"] = "DEDUP_RATIO";
    SystemMetricType["TOTAL_SAVING_EFFECT"] = "TOTAL_SAVING_EFFECT";
    SystemMetricType["WORKLOAD"] = "WORKLOAD";
    SystemMetricType["RESPONSE"] = "RESPONSE";
    SystemMetricType["TRANSFER"] = "TRANSFER";
    SystemMetricType["HDD"] = "HDD_PERC";
    SystemMetricType["CPU"] = "CPU_PERC";
    SystemMetricType["WRITE_PENDING_PERC"] = "WRITE_PENDING_PERC";
    SystemMetricType["SLA_EVENTS"] = "SLA_EVENTS";
    SystemMetricType["OUT_OF_SLA_TIME"] = "OUT_OF_SLA_TIME";
    SystemMetricType["IMBALANCE_EVENTS"] = "DISBALANCE_EVENTS";
    SystemMetricType["PREDICTION_L1"] = "PREDICTION_L1";
    SystemMetricType["PREDICTION_L2"] = "PREDICTION_L2";
    SystemMetricType["PREDICTION_L3"] = "PREDICTION_L3";
    SystemMetricType["CAPACITY_CHANGE_1D"] = "CHANGE_DAY";
    SystemMetricType["CAPACITY_CHANGE_1W"] = "CHANGE_WEEK";
    SystemMetricType["CAPACITY_CHANGE_1M"] = "CHANGE_MONTH";
    SystemMetricType["IMBALANCE_PERC"] = "DISBALANCE_PERC";
    SystemMetricType["IMBALANCE_ABSOLUT"] = "DISBALANCE_ABSOLUT";
    SystemMetricType["NET_SUBS_PERC"] = "NET_SUBS_PERC";
    SystemMetricType["LOGICAL_SUBS_PERC"] = "LOGICAL_SUBS_PERC";
    SystemMetricType["SUBSCRIBED_CAPACITY"] = "SUBSCRIBED_CAPACITY";
})(SystemMetricType || (SystemMetricType = {}));


/***/ }),

/***/ "./src/app/common/sa-common.module.ts":
/*!********************************************!*\
  !*** ./src/app/common/sa-common.module.ts ***!
  \********************************************/
/*! exports provided: SaCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaCommonModule", function() { return SaCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_knob_knob_sa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/knob/knob-sa.component */ "./src/app/common/components/knob/knob-sa.component.ts");
/* harmony import */ var _utils_iframe_url_creator_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/iframe-url-creator.pipe */ "./src/app/common/utils/iframe-url-creator.pipe.ts");
/* harmony import */ var _components_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/info-box/info-box.component */ "./src/app/common/components/info-box/info-box.component.ts");
/* harmony import */ var _utils_system_pool_2_sasi_table_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/system-pool-2-sasi-table.pipe */ "./src/app/common/utils/system-pool-2-sasi-table.pipe.ts");
/* harmony import */ var _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _components_sasi_table_cell_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sasi-table/cell-table.component */ "./src/app/common/components/sasi-table/cell-table.component.ts");
/* harmony import */ var _components_sasi_table_formatter_host_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sasi-table/formatter-host.directive */ "./src/app/common/components/sasi-table/formatter-host.directive.ts");
/* harmony import */ var _global_statistics_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global-statistics/route-link-formatter/route-link-formatter.component */ "./src/app/global-statistics/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _global_statistics_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../global-statistics/unit-formatter/unit-formatter.component */ "./src/app/global-statistics/unit-formatter/unit-formatter.component.ts");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");
/* harmony import */ var _components_sasi_table_row_table_row_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sasi-table/row-table/row-table.component */ "./src/app/common/components/sasi-table/row-table/row-table.component.ts");
/* harmony import */ var _global_statistics_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../global-statistics/alert-formatter/alert-formatter.component */ "./src/app/global-statistics/alert-formatter/alert-formatter.component.ts");
/* harmony import */ var _components_small_box_small_box_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/small-box/small-box.component */ "./src/app/common/components/small-box/small-box.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/system-pool-2-sasi-group-table.pipe */ "./src/app/common/utils/system-pool-2-sasi-group-table.pipe.ts");
/* harmony import */ var _components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _components_sasi_table_row_dynamic_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sasi-table/row-dynamic.component */ "./src/app/common/components/sasi-table/row-dynamic.component.ts");
/* harmony import */ var _global_statistics_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../global-statistics/simple-formatter/simple-formatter.component */ "./src/app/global-statistics/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _components_knob_ng_2_knob_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/knob/ng-2-knob.directive */ "./src/app/common/components/knob/ng-2-knob.directive.ts");
/* harmony import */ var _components_small_box_locale_number_format_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/small-box/locale-number-format.pipe */ "./src/app/common/components/small-box/locale-number-format.pipe.ts");
/* harmony import */ var _global_statistics_time_formatter_time_formatter_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../global-statistics/time-formatter/time-formatter.component */ "./src/app/global-statistics/time-formatter/time-formatter.component.ts");
/* harmony import */ var _global_statistics_text_formatter_text_formatter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../global-statistics/text-formatter/text-formatter.component */ "./src/app/global-statistics/text-formatter/text-formatter.component.ts");
/* harmony import */ var _global_statistics_emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../global-statistics/emph-formatter/emph-formatter.component */ "./src/app/global-statistics/emph-formatter/emph-formatter.component.ts");
/* harmony import */ var _utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./utils/safe-html.pipe */ "./src/app/common/utils/safe-html.pipe.ts");
/* harmony import */ var _global_statistics_disbalance_formatter_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../global-statistics/disbalance-formatter/disbalance-formatter.component */ "./src/app/global-statistics/disbalance-formatter/disbalance-formatter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var SaCommonModule = /** @class */ (function () {
    function SaCommonModule() {
    }
    SaCommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _utils_iframe_url_creator_pipe__WEBPACK_IMPORTED_MODULE_3__["IframeUrlCreatorPipe"],
                _components_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_4__["InfoBoxComponent"],
                _utils_system_pool_2_sasi_table_pipe__WEBPACK_IMPORTED_MODULE_5__["SystemPool2SasiTablePipe"],
                _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiTableComponent"],
                _components_sasi_table_cell_table_component__WEBPACK_IMPORTED_MODULE_7__["CellTableComponent"],
                _components_sasi_table_formatter_host_directive__WEBPACK_IMPORTED_MODULE_8__["FormatterHostDirective"],
                _components_sasi_table_row_table_row_table_component__WEBPACK_IMPORTED_MODULE_12__["RowTableComponent"],
                _components_sasi_table_row_dynamic_component__WEBPACK_IMPORTED_MODULE_18__["RowDynamicComponent"],
                _components_small_box_small_box_component__WEBPACK_IMPORTED_MODULE_14__["SmallBoxComponent"],
                _utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_16__["SystemPool2SasiGroupTablePipe"],
                _components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_17__["RowGroupTableComponent"],
                _components_knob_knob_sa_component__WEBPACK_IMPORTED_MODULE_2__["KnobSaComponent"],
                _components_knob_ng_2_knob_directive__WEBPACK_IMPORTED_MODULE_20__["Ng2KnobDirective"],
                _components_small_box_locale_number_format_pipe__WEBPACK_IMPORTED_MODULE_21__["LocaleNumberFormatPipe"],
                _utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_25__["SafeHtmlPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]
            ],
            exports: [
                _utils_iframe_url_creator_pipe__WEBPACK_IMPORTED_MODULE_3__["IframeUrlCreatorPipe"],
                _components_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_4__["InfoBoxComponent"],
                _utils_system_pool_2_sasi_table_pipe__WEBPACK_IMPORTED_MODULE_5__["SystemPool2SasiTablePipe"],
                _utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_16__["SystemPool2SasiGroupTablePipe"],
                _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiTableComponent"],
                _components_knob_knob_sa_component__WEBPACK_IMPORTED_MODULE_2__["KnobSaComponent"],
                _components_small_box_small_box_component__WEBPACK_IMPORTED_MODULE_14__["SmallBoxComponent"],
                _components_knob_ng_2_knob_directive__WEBPACK_IMPORTED_MODULE_20__["Ng2KnobDirective"],
                _utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_25__["SafeHtmlPipe"]
            ],
            entryComponents: [
                _global_statistics_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_9__["RouteLinkFormatterComponent"],
                _global_statistics_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_10__["UnitFormatterComponent"],
                _global_statistics_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_13__["AlertFormatterComponent"],
                _global_statistics_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_19__["SimpleFormatterComponent"],
                _components_sasi_table_row_table_row_table_component__WEBPACK_IMPORTED_MODULE_12__["RowTableComponent"],
                _components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_17__["RowGroupTableComponent"],
                _global_statistics_time_formatter_time_formatter_component__WEBPACK_IMPORTED_MODULE_22__["TimeFormatterComponent"],
                _global_statistics_text_formatter_text_formatter_component__WEBPACK_IMPORTED_MODULE_23__["TextFormatterComponent"],
                _global_statistics_emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_24__["EmphFormatterComponent"],
                _global_statistics_disbalance_formatter_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_26__["DisbalanceFormatterComponent"]
            ]
        })
    ], SaCommonModule);
    return SaCommonModule;
}());



/***/ }),

/***/ "./src/app/common/utils/UrlCreator.ts":
/*!********************************************!*\
  !*** ./src/app/common/utils/UrlCreator.ts ***!
  \********************************************/
/*! exports provided: UrlCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlCreator", function() { return UrlCreator; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

var UrlCreator = /** @class */ (function () {
    function UrlCreator() {
    }
    UrlCreator.hrefEncode = function (url) {
        return '/iframe/' + btoa(url);
    };
    UrlCreator.url = function (systemId, linkPart) {
        var systemPrefix = systemId.toString().length === 1 ? '0' + systemId : systemId;
        return this.hrefEncode(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].iframeBaseUrl + systemPrefix + linkPart);
    };
    return UrlCreator;
}());



/***/ }),

/***/ "./src/app/common/utils/iframe-url-creator.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/utils/iframe-url-creator.pipe.ts ***!
  \*********************************************************/
/*! exports provided: IframeUrlCreatorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeUrlCreatorPipe", function() { return IframeUrlCreatorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _UrlCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UrlCreator */ "./src/app/common/utils/UrlCreator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var IframeUrlCreatorPipe = /** @class */ (function () {
    function IframeUrlCreatorPipe() {
        this.iFrameLinks = {
            dashboard: '1%20Dash%20Board/Dash%20Board.html',
            serverBoard: '2%20Server%20Board/index.html',
            dpSla: '4%20DP%20Pool%20Board%20and%20SLA/index.html',
            deepAnalysis: '7%20Deep%20Analysis/index.html',
            cache: '8%20Cache%20Board/index.html',
            adapters: '8%20CHA%20Adapters%20Board/index.html',
            trends: '8%20Trends/Trends.html'
        };
    }
    IframeUrlCreatorPipe.prototype.transform = function (value, linkType) {
        return _UrlCreator__WEBPACK_IMPORTED_MODULE_1__["UrlCreator"].url(value, this.iFrameLinks[linkType]);
    };
    IframeUrlCreatorPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'iframeUrlCreator'
        })
    ], IframeUrlCreatorPipe);
    return IframeUrlCreatorPipe;
}());



/***/ }),

/***/ "./src/app/common/utils/safe-html.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/common/utils/safe-html.pipe.ts ***!
  \************************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/common/utils/system-pool-2-sasi-group-table.pipe.ts":
/*!*********************************************************************!*\
  !*** ./src/app/common/utils/system-pool-2-sasi-group-table.pipe.ts ***!
  \*********************************************************************/
/*! exports provided: SystemPool2SasiGroupTablePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemPool2SasiGroupTablePipe", function() { return SystemPool2SasiGroupTablePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _system_pool_2_sasi_table_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system-pool-2-sasi-table.pipe */ "./src/app/common/utils/system-pool-2-sasi-table.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SystemPool2SasiGroupTablePipe = /** @class */ (function () {
    function SystemPool2SasiGroupTablePipe(rowPipe) {
        this.rowPipe = rowPipe;
    }
    SystemPool2SasiGroupTablePipe.prototype.transform = function (systems, args) {
        var _this = this;
        return systems.map(function (system) {
            var row = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiGroupRow"]();
            var groupRow = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiRow"]();
            groupRow.cells['name'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiCell"](system.name, { id: system.id, iFrameLink: 'dashboard', value: system.name });
            row.groupRow = groupRow;
            row.rows = _this.rowPipe.transform(system.pools);
            return row;
        });
    };
    SystemPool2SasiGroupTablePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'systemPool2SasiGroupTable'
        }),
        __metadata("design:paramtypes", [_system_pool_2_sasi_table_pipe__WEBPACK_IMPORTED_MODULE_2__["SystemPool2SasiTablePipe"]])
    ], SystemPool2SasiGroupTablePipe);
    return SystemPool2SasiGroupTablePipe;
}());



/***/ }),

/***/ "./src/app/common/utils/system-pool-2-sasi-table.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/utils/system-pool-2-sasi-table.pipe.ts ***!
  \***************************************************************/
/*! exports provided: SystemPool2SasiTablePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemPool2SasiTablePipe", function() { return SystemPool2SasiTablePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// TODO move to the global statistics module
var SystemPool2SasiTablePipe = /** @class */ (function () {
    function SystemPool2SasiTablePipe() {
    }
    SystemPool2SasiTablePipe.prototype.transform = function (systems, args) {
        return systems.map(function (system) {
            var row = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiRow"]();
            row.cells['name'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiCell"](system.name, { id: system.id, iFrameLink: 'dashboard', value: system.name });
            system.metrics.forEach(function (metric) { return row.cells[metric.type] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiCell"](metric.value, metric); });
            return row;
        });
    };
    SystemPool2SasiTablePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'systemPool2SasiTable'
        })
    ], SystemPool2SasiTablePipe);
    return SystemPool2SasiTablePipe;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  min-height: 60px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <section class=\"content-header\">\n    <H1><i class=\"fa fa-bell-o\"></i> Alerts (Last 24 Hours)</H1>\n  </section>\n  <section class=\"content\">\n    <h4>Performance</h4>\n    <div *ngFor=\"let alert of alerts;let i = index\">\n      <div *ngIf=\"containsType(alert.type, alertsPerformance)\" class=\"col-xs-6 col-sm-4 col-md-3 col-lg-3\">\n        <app-info-box [value]=\"alert.occurence.length\" [data]=\"alert.occurence\" [context]=\"getLinkContext(alert.type)\"\n                      [label]=\"getAlertLabel(alert.type)\" [icon]=\"getAlertIcon(alert.type)\"></app-info-box>\n      </div>\n    </div>\n  </section>\n  <section class=\"content\">\n    <h4>Operations</h4>\n    <div *ngFor=\"let alert of alerts;let i = index\" class=\"col-xs-6 col-sm-4 col-md-3 col-lg-3\">\n      <app-info-box *ngIf=\"containsType(alert.type, alertsOperations)\" [value]=\"alert.occurence.length\"\n                    [data]=\"alert.occurence\" [context]=\"getLinkContext(alert.type)\"\n                    [label]=\"getAlertLabel(alert.type)\" [icon]=\"getAlertIcon(alert.type)\"></app-info-box>\n    </div>\n  </section>\n\n\n</div>\n<div class=\"row\">\n  <section class=\"content-header\">\n    <h1><i class=\"fa fa-chart-area\"></i> Infrastructure stats (Last 24 hours)</h1>\n  </section>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-9 col-sm-6\">\n    <div class=\"box pad\">\n      <div class=\"box-body\">\n        <div class=\"row\">\n\n            <div class=\"col-md-8\">\n              <h4>Geo-location of datacenters</h4>\n              <div id=\"world-map-markers\"></div>\n            </div>\n            <div class=\"col-md-4\">\n              <h4>Overload stats</h4>\n              <div class=\"row\">\n                <section class=\"content\" *ngIf=\"metrics.length > 0\">\n                  <div *ngFor=\"let metric of metrics\" class=\"col-md-12 col-xs-6\">\n                    <!-- small box -->\n                    <app-small-box [data]=\"metric\" [label]=\"getMetricLabel(metric.type)\" [icon]=\"getMetricIcon(metric.type)\"\n                                   [color]=\"getMetricColor(metric.type)\"></app-small-box>\n                  </div>\n                </section>\n                <div class=\"col-md-6\">\n                  <app-knob *ngIf=\"datacenters !== undefined\" [label]=\"'Datacenters'\" [sizeType]=\"'small'\"\n                            [metric]=\"datacenters\" [color]=\"getColor(1)\"></app-knob>\n                </div>\n                <div class=\"col-md-6\">\n                  <app-knob *ngIf=\"registeredSystems !== undefined\" [label]=\"'Registered systems'\" [sizeType]=\"'small'\"\n                            [metric]=\"registeredSystems\" [color]=\"getColor(2)\"></app-knob>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _common_models_metrics_Metric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/metrics/Metric */ "./src/app/common/models/metrics/Metric.ts");
/* harmony import */ var _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/metrics/SystemMetricType */ "./src/app/common/models/metrics/SystemMetricType.ts");
/* harmony import */ var _common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/metrics/AlertType */ "./src/app/common/models/metrics/AlertType.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(metricService) {
        this.metricService = metricService;
        this.metricLabels = {};
        this.alertLabels = {};
        this.metrics = [];
        this.alerts = [];
        this.alertsPerformance = [];
        this.alertsOperations = [];
        this.alertIcons = {};
        this.metricIcons = {};
        this.metricColor = {};
        this.linkContext = {};
        this.colors = ['#a09608', '#38a008', '#08a09d', '#421570', '#f56954'];
        this.currentColor = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metricLabels[_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WORKLOAD] = 'Total Workload';
        this.metricLabels[_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TRANSFER] = 'Total Transfer';
        this.alertLabels[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CAPACITY_USAGE] = 'Capacity Usage Events';
        this.alertLabels[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CPU] = 'CPU Utilization Events';
        this.alertLabels[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].DISBALANCE_EVENTS] = 'CHA Pair Disbalance Events';
        this.alertLabels[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].HDD] = 'HDD Utilization Events';
        this.alertLabels[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].RESPONSE] = 'Latency Events';
        this.alertLabels[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].SLA_EVENTS] = 'Out of SLA Events';
        this.alertLabels[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].WRITE_PENDING] = 'Cache Write Pending Events';
        this.alertIcons[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CAPACITY_USAGE] = 'fa-pie-chart';
        this.alertIcons[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CPU] = 'fa-dashboard';
        this.alertIcons[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].DISBALANCE_EVENTS] = 'fa-random';
        this.alertIcons[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].HDD] = 'fa-hdd-o';
        this.alertIcons[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].RESPONSE] = 'fa-line-chart';
        this.alertIcons[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].SLA_EVENTS] = 'fa-bell-o';
        this.alertIcons[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].WRITE_PENDING] = 'fa-bar-chart';
        this.metricIcons[_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WORKLOAD] = 'fa fa-chart-bar';
        this.metricIcons[_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TRANSFER] = 'fa fa-exchange';
        this.metricColor[_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WORKLOAD] = 'bg-maroon';
        this.metricColor[_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TRANSFER] = 'bg-primary';
        this.linkContext[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CAPACITY_USAGE] = 'capacity';
        this.linkContext[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CPU] = 'performance';
        this.linkContext[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].DISBALANCE_EVENTS] = 'adapters';
        this.linkContext[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].HDD] = 'performance';
        this.linkContext[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].RESPONSE] = 'performance';
        this.linkContext[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].SLA_EVENTS] = 'dp-sla';
        this.linkContext[_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].WRITE_PENDING] = 'capacity';
        this.alertsPerformance.push(_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CPU, _common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].HDD, _common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].WRITE_PENDING, _common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].RESPONSE);
        this.alertsOperations.push(_common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CAPACITY_USAGE, _common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].SLA_EVENTS, _common_models_metrics_AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].DISBALANCE_EVENTS);
        this.metricService.getInfrastructureStats().subscribe(function (stats) {
            _this.metrics = stats.metrics;
            _this.alerts = stats.alerts;
        });
        this.metricService.getDatacenters().subscribe(function (data) {
            _this.datacenters = new _common_models_metrics_Metric__WEBPACK_IMPORTED_MODULE_2__["Metric"]();
            _this.datacenters.value = data.datacenters.length;
            _this.datacenters.unit = '';
            _this.registeredSystems = new _common_models_metrics_Metric__WEBPACK_IMPORTED_MODULE_2__["Metric"]();
            _this.registeredSystems.unit = '';
            _this.registeredSystems.value = data.datacenters.reduce(function (previousValue, currentValue) {
                return previousValue + currentValue.systems.length;
            }, 0);
        });
        this.getMap();
    };
    DashboardComponent.prototype.containsType = function (alertType, types) {
        return types.find(function (type) { return type === alertType; }) !== undefined;
    };
    DashboardComponent.prototype.getAlertIcon = function (type) {
        return this.alertIcons[type];
    };
    DashboardComponent.prototype.getMetricIcon = function (type) {
        return this.metricIcons[type];
    };
    DashboardComponent.prototype.getMetricLabel = function (type) {
        return this.metricLabels[type];
    };
    DashboardComponent.prototype.getMetricColor = function (type) {
        return this.metricColor[type];
    };
    DashboardComponent.prototype.getLinkContext = function (type) {
        return this.linkContext[type];
    };
    DashboardComponent.prototype.getAlertLabel = function (type) {
        return this.alertLabels[type];
    };
    DashboardComponent.prototype.getColor = function (colorIndex) {
        this.currentColor += 1;
        return this.colors[colorIndex % this.colors.length];
    };
    DashboardComponent.prototype.getMap = function () {
        $(function () {
            $('#world-map-markers').vectorMap({
                map: 'world_mill_en',
                scaleColors: ['#C8EEFF', '#0071A4'],
                normalizeFunction: 'polynomial',
                hoverOpacity: 0.7,
                hoverColor: false,
                markerStyle: {
                    initial: {
                        fill: '#F8E23B',
                        stroke: '#383f47',
                    }
                },
                markerLabelStyle: {
                    initial: {
                        display: 'inline'
                    }
                },
                backgroundColor: '#3c8dbc',
                markers: [
                    { latLng: [50.05, 14.48], name: 'CZ_Sitel' },
                    { latLng: [50.07, 14.44], name: 'CZ_Chodov' },
                    { latLng: [2.9, 101.65], name: 'MY_Cyberjaja' },
                    { latLng: [3.14, 101.70], name: 'MY_AIMS' },
                    { latLng: [39.04, -77.48], name: 'US_Ashburn' },
                    { latLng: [40.21, -77.00], name: 'US_Mechanigsburg' },
                ]
            });
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  /*background-color: #1ABB9C;*/\n\n  border-bottom: 2px #1ABB9C solid;\n}\n\n.btn {\n  padding-bottom: 13px;\n  padding-top: 13px;\n}\n\n.sa-logo {\n  height: 50px;\n}\n\n.logo-title {\n  width: 200px;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7O0VBRTlCLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7Q0FDbkI7O0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMUFCQjlDOyovXG5cbiAgYm9yZGVyLWJvdHRvbTogMnB4ICMxQUJCOUMgc29saWQ7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgcGFkZGluZy10b3A6IDEzcHg7XG59XG4uc2EtbG9nbyB7XG4gIGhlaWdodDogNTBweDtcbn1cbi5sb2dvLXRpdGxlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n\n  <!-- Logo -->\n  <a href=\"\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><b>S</b>an</span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><b>Storage Analytics</b></span>\n  </a>\n\n\n  <!-- Header Navbar -->\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n      <i class=\"fa fa-bars\"></i>\n      <span class=\"sr-only\">Toggle navigation</span>\n    </a>\n\n    <ul [@openClose]=\"enable ? 'true' : 'false'\"\n        (@openClose.start)=\"onAnimationEvent($event)\"\n        class=\"nav navbar-nav navbar-left\">\n      <li [class.active]=\"isCurrentPeriod(0)\"><a class=\"btn\" (click)=\"setCurrentPeriod(0)\">Last Day</a></li>\n      <li [class.active]=\"isCurrentPeriod(1)\"><a class=\"btn\" (click)=\"setCurrentPeriod(1)\">Last Week</a></li>\n      <li [class.active]=\"isCurrentPeriod(2)\"><a class=\"btn\" (click)=\"setCurrentPeriod(2)\">Last Month</a></li>\n    </ul>\n    <div class=\"logo-title\">\n      <img [src]=\"logoUrl\" class=\"sa-logo pull-left\"/>\n    </div>\n  </nav>\n\n\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _period_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../period.service */ "./src/app/period.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(periodService) {
        this.periodService = periodService;
        this.enable = false;
        this.logoUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].logoUrl;
        this.currentPeriod = _metric_service__WEBPACK_IMPORTED_MODULE_1__["PeriodType"].DAY;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.periodService.periodEnableAnnouncement.subscribe(function (value) { return _this.enable = value; });
    };
    HeaderComponent.prototype.setCurrentPeriod = function (period) {
        this.currentPeriod = period;
        this.periodService.announcePeriod(period);
    };
    HeaderComponent.prototype.isCurrentPeriod = function (period) {
        return period === this.currentPeriod;
    };
    HeaderComponent.prototype.onAnimationEvent = function (event) {
        this.periodService.announcePeriod(this.currentPeriod);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('openClose', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        // display: 'block'
                        transform: 'translateY(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        // display: 'none',
                        transform: 'translateY(-100%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('true => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('false => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s')
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_period_service__WEBPACK_IMPORTED_MODULE_2__["PeriodService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/iframe/iframe.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/iframe/iframe.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaWZyYW1lL2lmcmFtZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/iframe/iframe.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/iframe/iframe.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe name=\"main-content\" class=\"main-content\" [src]=\"url\" id=\"form-iframe\" style=\"margin:0; width: 100%; border:none; overflow:scroll;\"></iframe>\n"

/***/ }),

/***/ "./src/app/components/iframe/iframe.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/iframe/iframe.component.ts ***!
  \*******************************************************/
/*! exports provided: IframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeComponent", function() { return IframeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IframeComponent = /** @class */ (function () {
    function IframeComponent(route, router, sanitizer) {
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
    }
    IframeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.url = _this.sanitizer.bypassSecurityTrustResourceUrl(atob(params.get('url')));
        });
    };
    IframeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iframe',
            template: __webpack_require__(/*! ./iframe.component.html */ "./src/app/components/iframe/iframe.component.html"),
            styles: [__webpack_require__(/*! ./iframe.component.css */ "./src/app/components/iframe/iframe.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], IframeComponent);
    return IframeComponent;
}());



/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-menu .treeview-menu>li>a.active, .skin-blue .sidebar-menu .treeview-menu>li>a:hover {\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLW1lbnUgLnRyZWV2aWV3LW1lbnU+bGk+YS5hY3RpdmUsIC5za2luLWJsdWUgLnNpZGViYXItbWVudSAudHJlZXZpZXctbWVudT5saT5hOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<script src=\"../../../../WEB/sub-content-loader.js\"></script>-->\n<aside class=\"main-sidebar\">\n\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n    <div class=\"top-part-menu\">\n      <ul id=\"dash-link\" class=\"sidebar-menu\">\n        <li><a href=\"\"><i class=\"fa fa-home\"></i><span>Main dashboard</span></a></li>\n      </ul>\n      <!-- Sidebar Menu.ts -->\n      <ul id=\"dash-menu\" class=\"sidebar-menu\" data-widget=\"tree\">\n\n        <li class=\"treeview\">\n          <a href=\"#\"><i class=\"fa fa-chart-area\"></i><span>Global Statistics</span>\n            <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li *ngFor=\"let globalLink of globalStatisticsLinks\"\n            ><a [routerLink]=\"[globalLink.linkPart]\" routerLinkActive=\"active\">{{globalLink.name}}</a></li>\n          </ul>\n        </li>\n\n      </ul>\n    </div>\n    <div class=\"central-part-menu\">\n      <ul id=\"main-menu\" class=\"sidebar-menu\" data-widget=\"tree\">\n        <li class=\"header\">STORAGE ARRAYS</li>\n        <!-- search form (Optional) -->\n        <form action=\"#\" method=\"get\" class=\"sidebar-form\" autocomplete=\"off\">\n          <div class=\"input-group\">\n            <input [(ngModel)]=\"searchExpression\" (input)=\"search()\" type=\"text\" name=\"searchExp\" class=\"form-control\" placeholder=\"Search...\" id=\"menu-search-input\" />\n            <span class=\"input-group-btn\">\n              <button type=\"button\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n              </button>\n            </span>\n          </div>\n        </form>\n        <!-- /.search form -->\n        <li *ngFor=\"let menuItem of filteredItems\" class=\"treeview\">\n          <a href=\"#\"><i class=\"fa fa-cogs\"></i><span>{{menuItem.label}}</span>\n            <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li *ngFor=\"let link of menuItem.items\" class=\"treeview\">\n              <a href=\"#\"><i class=\"fa fa-cogs\"></i><span>{{link.name}}</span>\n                <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n              </a>\n              <ul class=\"treeview-menu\">\n                <li *ngFor=\"let poolLink of poolMetricLinks\"><a [routerLink]=\"link.id | iframeUrlCreator:poolLink.linkPart\" routerLinkActive=\"active\">{{poolLink.name}}</a></li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    <div class=\"bottom-part-menu\">\n\n    </div>\n    <!-- /.sidebar-menu -->\n  </section>\n  <!-- /.sidebar -->\n</aside>\n"

/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_MenuTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/MenuTree */ "./src/app/common/models/MenuTree.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _common_models_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/MenuItem */ "./src/app/common/models/MenuItem.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent(metricService) {
        this.metricService = metricService;
        this.poolMetricLinks = [
            { id: 1, linkPart: 'dashboard', name: 'Dashboard' },
            { id: 2, linkPart: 'serverBoard', name: 'Server board' },
            { id: 3, linkPart: 'dpSla', name: 'DP Pool Board and SLA' },
            { id: 4, linkPart: 'deepAnalysis', name: 'Deep Analysis' },
            { id: 5, linkPart: 'cache', name: 'Cache Board' },
            { id: 6, linkPart: 'adapters', name: 'CHA Adapters Board' },
            { id: 7, linkPart: 'trends', name: 'Trends' }
        ];
        this.globalStatisticsLinks = [];
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metricService.getDatacenters().subscribe(function (data) {
            _this.items = _this.convertMenu(data.datacenters);
            _this.setDefaultDataCenter(data.datacenters);
            _this.filteredItems = _this.items;
        });
    };
    SideMenuComponent.prototype.setDefaultDataCenter = function (dataCenters) {
        if (dataCenters.length > 0) {
            this.defaultDataCenter = dataCenters[0].id;
            this.setGlobalStatisticsLinks();
        }
    };
    SideMenuComponent.prototype.setGlobalStatisticsLinks = function () {
        this.globalStatisticsLinks = [
            { id: 1, linkPart: "/global-statistics/performance", name: 'Performance Statistics' },
            { id: 2, linkPart: "/global-statistics/physical-capacity", name: 'Physical Capacity Statistics' },
            { id: 3, linkPart: "/global-statistics/logical-capacity", name: 'Logical Capacity Statistics' },
            { id: 4, linkPart: "/global-statistics/dp-sla", name: 'DP SLA Statistics' },
            { id: 5, linkPart: "/global-statistics/adapters", name: 'Adapters Statistics' }
        ];
    };
    SideMenuComponent.prototype.search = function () {
        if (this.searchExpression === '') {
            this.filteredItems = this.items;
            return;
        }
        var filteredTree = null;
        this.filteredItems = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var tree = _a[_i];
            for (var _b = 0, _c = tree.items; _b < _c.length; _b++) {
                var item = _c[_b];
                if (item.name.indexOf(this.searchExpression) > -1) {
                    if (filteredTree === null) {
                        filteredTree = new _common_models_MenuTree__WEBPACK_IMPORTED_MODULE_1__["MenuTree"](tree.label, []);
                    }
                    filteredTree.items.push(item);
                }
            }
            if (filteredTree !== null) {
                this.filteredItems.push(filteredTree);
            }
            filteredTree = null;
        }
    };
    SideMenuComponent.prototype.convertMenu = function (data) {
        var menu = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var dataCenter = data_1[_i];
            var items = [];
            for (var _a = 0, _b = dataCenter.systems; _a < _b.length; _a++) {
                var system = _b[_a];
                items.push(new _common_models_MenuItem__WEBPACK_IMPORTED_MODULE_3__["MenuItem"](system.id, system.name));
            }
            menu.push(new _common_models_MenuTree__WEBPACK_IMPORTED_MODULE_1__["MenuTree"](dataCenter.label, items));
        }
        return menu;
    };
    SideMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! ./side-menu.component.html */ "./src/app/components/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.css */ "./src/app/components/side-menu/side-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_metric_service__WEBPACK_IMPORTED_MODULE_2__["MetricService"]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/AlertRule.ts":
/*!************************************************!*\
  !*** ./src/app/global-statistics/AlertRule.ts ***!
  \************************************************/
/*! exports provided: AlertRule, Threshold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertRule", function() { return AlertRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Threshold", function() { return Threshold; });
var AlertRule = /** @class */ (function () {
    function AlertRule(type, threshold) {
        this.threshold = threshold;
        this.type = type;
    }
    return AlertRule;
}());

var Threshold = /** @class */ (function () {
    function Threshold(alertType, min, max) {
        this.alertType = alertType;
        this.min = min;
        this.max = max;
    }
    return Threshold;
}());



/***/ }),

/***/ "./src/app/global-statistics/adapters/adapters.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/global-statistics/adapters/adapters.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col {\n  width: 35.75% !important;\n}\n.col-label {\n  width: 25% !important;\n}\n.sorting {\n  font-size:13px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvYWRhcHRlcnMvYWRhcHRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtDQUMxQjtBQUNEO0VBQ0Usc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsaUNBQXlCO1VBQXpCLHlCQUF5QjtDQUMxQiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2FkYXB0ZXJzL2FkYXB0ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sIHtcbiAgd2lkdGg6IDM1Ljc1JSAhaW1wb3J0YW50O1xufVxuLmNvbC1sYWJlbCB7XG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcbn1cbi5zb3J0aW5nIHtcbiAgZm9udC1zaXplOjEzcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/global-statistics/adapters/adapters.component.html":
/*!********************************************************************!*\
  !*** ./src/app/global-statistics/adapters/adapters.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\n  <div class=\"container-fluid\">\n    <div class=\"row col-md-8\">\n      <app-sasi-table [data]=\"data | systemPool2SasiGroupTable\" [tableOptions]=\"options\"></app-sasi-table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/adapters/adapters.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/global-statistics/adapters/adapters.component.ts ***!
  \******************************************************************/
/*! exports provided: AdaptersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdaptersComponent", function() { return AdaptersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _period_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../period.service */ "./src/app/period.service.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/metrics/SystemMetricType */ "./src/app/common/models/metrics/SystemMetricType.ts");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bus.service */ "./src/app/global-statistics/bus.service.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../route-link-formatter/route-link-formatter.component */ "./src/app/global-statistics/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../alert-formatter/alert-formatter.component */ "./src/app/global-statistics/alert-formatter/alert-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _utils_SumValueServiceImpl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/SumValueServiceImpl */ "./src/app/global-statistics/utils/SumValueServiceImpl.ts");
/* harmony import */ var _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/components/sasi-table/group-sort-impl */ "./src/app/common/components/sasi-table/group-sort-impl.ts");
/* harmony import */ var _emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../emph-formatter/emph-formatter.component */ "./src/app/global-statistics/emph-formatter/emph-formatter.component.ts");
/* harmony import */ var _disbalance_formatter_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../disbalance-formatter/disbalance-formatter.component */ "./src/app/global-statistics/disbalance-formatter/disbalance-formatter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














// TODO separate components, pipes, utils to own directories
var AdaptersComponent = /** @class */ (function () {
    function AdaptersComponent(route, router, periodService, metricService, bus) {
        this.route = route;
        this.router = router;
        this.periodService = periodService;
        this.metricService = metricService;
        this.bus = bus;
        this.types = [
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].IMBALANCE_EVENTS,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].IMBALANCE_PERC
        ];
        this.currentPeriod = _metric_service__WEBPACK_IMPORTED_MODULE_3__["PeriodType"].DAY;
        this.options = new _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiTableOptions"]();
        this.data = [];
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex('name')
            .withLabel('System')
            .withComponent(_emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_12__["EmphFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].IMBALANCE_EVENTS)
            .withLabel('Imbalance events')
            .withComponent(_emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_12__["EmphFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].IMBALANCE_PERC)
            .withLabel('Info')
            .withComponent(_disbalance_formatter_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_13__["DisbalanceFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.colControlFormatter = _alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_8__["AlertFormatterComponent"];
        this.options.rowComponentFormatter = _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_9__["RowGroupTableComponent"];
        this.options.grIndexComponentFormatter = _route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_7__["RouteLinkFormatterComponent"];
        this.options.isDataGrouped = true;
        this.options.highlightRow = true;
        this.options.highlightColumn = false;
        this.options.labelColumnWidth = '25';
        this.options.valueColumnWidth = '35.75';
        this.options.aggregateValuesService = new _utils_SumValueServiceImpl__WEBPACK_IMPORTED_MODULE_10__["SumValueServiceImpl"]();
        this.options.sortService = new _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_11__["GroupSortImpl"]();
    }
    AdaptersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = +params.get('id');
            _this.bus.announceDatacenter(id);
            _this.bus.announceContext('adapters');
            _this.getTableData(id); // TODO initInternal removed, check collapse/select behavior
        });
        this.periodService.periodAnnouncement$.subscribe(function (period) {
            _this.currentPeriod = period;
            _this.getTableData(_this.currentDataCenterId);
        });
        this.periodService.announceEnablePeriod(true);
    };
    AdaptersComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.currentDataCenterId = id;
        this.metricService.getAdaptersStatistics(id, this.currentPeriod).subscribe(function (data) {
            _this.data = data.systems;
        }, function (error) {
            console.log(error);
            _this.data = [];
        });
        return this.data;
    };
    AdaptersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adapters',
            template: __webpack_require__(/*! ./adapters.component.html */ "./src/app/global-statistics/adapters/adapters.component.html"),
            styles: [__webpack_require__(/*! ./adapters.component.css */ "./src/app/global-statistics/adapters/adapters.component.css"), __webpack_require__(/*! ../global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _period_service__WEBPACK_IMPORTED_MODULE_2__["PeriodService"],
            _metric_service__WEBPACK_IMPORTED_MODULE_3__["MetricService"],
            _bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"]])
    ], AdaptersComponent);
    return AdaptersComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/aggragated-statistics/aggragated-statistics.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/global-statistics/aggragated-statistics/aggragated-statistics.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Aggregated values widget ***/\ndiv.agg-vals {\n  margin-top: 25px;\n}\n.agg-vals > .col {\n  border: 1px #5C91A8 solid;\n  font-weight: bold;\n  text-align: center;\n\n}\n.agg-name {\n  background-color: #3c8dbc;\n  color: white;\n  font-size: 11px;\n  padding: 5px;\n}\n.agg-vals .agg-value {\n  padding: 5px;\n  font-size: 12px;\n  background-color: white;\n  /*color: white;*/\n}\n.col-control {\n  width: 3.5%;\n  display: inline-block;\n  vertical-align: middle;\n}\n.col {\n  width: 6.66%;\n  display:inline-block;\n}\n.col-label {\n  width: 13%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvYWdncmFnYXRlZC1zdGF0aXN0aWNzL2FnZ3JhZ2F0ZWQtc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtDQUFrQztBQUNsQztFQUNFLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixtQkFBbUI7O0NBRXBCO0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0NBQ2Q7QUFFRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7QUFDRDtFQUNFLGFBQWE7RUFDYixxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2FnZ3JhZ2F0ZWQtc3RhdGlzdGljcy9hZ2dyYWdhdGVkLXN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiogQWdncmVnYXRlZCB2YWx1ZXMgd2lkZ2V0ICoqKi9cbmRpdi5hZ2ctdmFscyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5hZ2ctdmFscyA+IC5jb2wge1xuICBib3JkZXI6IDFweCAjNUM5MUE4IHNvbGlkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5hZ2ctbmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzhkYmM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hZ2ctdmFscyAuYWdnLXZhbHVlIHtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvKmNvbG9yOiB3aGl0ZTsqL1xufVxuLmNvbC1jb250cm9sIHtcbiAgd2lkdGg6IDMuNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jb2wge1xuICB3aWR0aDogNi42NiU7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuLmNvbC1sYWJlbCB7XG4gIHdpZHRoOiAxMyU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/global-statistics/aggragated-statistics/aggragated-statistics.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/global-statistics/aggragated-statistics/aggragated-statistics.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--AGGREGATED VALUES-->\n<div class=\"agg-vals\" *ngIf=\"result !== null\">\n  <div class=\"col-val col-control\"></div>\n  <div class=\"col-val col-control\"></div>\n  <div class=\"col col-label\">\n    <div class=\"agg-name\"># Selected</div>\n    <div class=\"agg-value\">{{getSelectedCount()}}</div>\n  </div>\n  <div class=\"col\" *ngFor=\"let type of aggregatedTypes\">\n    <div class=\"agg-name\">{{type.label}}</div>\n    <div class=\"agg-value\"><span\n      *ngIf=\"result.getValue(type.index) !== undefined\">{{result.getValue(type.index).toFixed(2)}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/aggragated-statistics/aggragated-statistics.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/global-statistics/aggragated-statistics/aggragated-statistics.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AggragatedStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggragatedStatisticsComponent", function() { return AggragatedStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var _utils_SasiWeightedArithmeticMean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/SasiWeightedArithmeticMean */ "./src/app/global-statistics/utils/SasiWeightedArithmeticMean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AggragatedStatisticsComponent = /** @class */ (function () {
    function AggragatedStatisticsComponent(localStorageService) {
        this.localStorageService = localStorageService;
    }
    AggragatedStatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aggregate();
        this.localStorageService.observe(this.prefix + '_selected').subscribe(function (data) {
            _this.selectedRows = data.newValue;
            _this.aggregate();
        });
    };
    AggragatedStatisticsComponent.prototype.aggregate = function () {
        this.selectedRows = this.localStorageService.get(this.prefix + '_selected');
        if (this.selectedRows === null) {
            this.selectedRows = [];
        }
        var mean = new _utils_SasiWeightedArithmeticMean__WEBPACK_IMPORTED_MODULE_2__["SasiWeightedArithmeticMean"]();
        this.result = mean.computeSummaries(this.data, this.selectedRows, null);
    };
    AggragatedStatisticsComponent.prototype.getSelectedCount = function () {
        var _this = this;
        var filteredByData = this.selectedRows.filter(function (key) {
            var row = _this.data.find(function (groupRow) { return groupRow.groupRow.getCell('name').value === key.groupName; });
            if (row === undefined) {
                return false;
            }
            return row.rows.find(function (dataRow) { return dataRow.getCell('name').value === key.rowName; });
        });
        return filteredByData.length;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AggragatedStatisticsComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AggragatedStatisticsComponent.prototype, "aggregatedTypes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AggragatedStatisticsComponent.prototype, "prefix", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AggragatedStatisticsComponent.prototype, "selectedRows", void 0);
    AggragatedStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aggragated-statistics',
            template: __webpack_require__(/*! ./aggragated-statistics.component.html */ "./src/app/global-statistics/aggragated-statistics/aggragated-statistics.component.html"),
            styles: [__webpack_require__(/*! ./aggragated-statistics.component.css */ "./src/app/global-statistics/aggragated-statistics/aggragated-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], AggragatedStatisticsComponent);
    return AggragatedStatisticsComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/alert-formatter/alert-formatter.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/global-statistics/alert-formatter/alert-formatter.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  font-size: 11px;\n}\n\n.text-alert-yellow {\n  color: #ffd829;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvYWxlcnQtZm9ybWF0dGVyL2FsZXJ0LWZvcm1hdHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2FsZXJ0LWZvcm1hdHRlci9hbGVydC1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImkge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi50ZXh0LWFsZXJ0LXllbGxvdyB7XG4gIGNvbG9yOiAjZmZkODI5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/global-statistics/alert-formatter/alert-formatter.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/global-statistics/alert-formatter/alert-formatter.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i *ngIf=\"isAlert()\" tooltip=\"Warning for one or more metrics\" class=\"fa fa-exclamation-triangle\" [ngClass]=\"getDecoratorClass()\"></i>\n"

/***/ }),

/***/ "./src/app/global-statistics/alert-formatter/alert-formatter.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/global-statistics/alert-formatter/alert-formatter.component.ts ***!
  \********************************************************************************/
/*! exports provided: AlertFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertFormatterComponent", function() { return AlertFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _utils_ConditionEvaluate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ConditionEvaluate */ "./src/app/global-statistics/utils/ConditionEvaluate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertFormatterComponent = /** @class */ (function () {
    function AlertFormatterComponent() {
    }
    AlertFormatterComponent.prototype.ngOnInit = function () {
    };
    AlertFormatterComponent.prototype.isAlert = function () {
        var _this = this;
        return this.options.cellDecoratorRules.find(function (rule) {
            var cell = _this.data.getCell(rule.type);
            return cell != null ? _utils_ConditionEvaluate__WEBPACK_IMPORTED_MODULE_2__["ConditionEvaluate"].eval(cell.value, rule) : false;
        }) !== undefined;
    };
    AlertFormatterComponent.prototype.getDecoratorClass = function () {
        var _this = this;
        var alertDef = this.options.cellDecoratorRules.find(function (rule) {
            var cell = _this.data.getCell(rule.type);
            return cell != null ? _utils_ConditionEvaluate__WEBPACK_IMPORTED_MODULE_2__["ConditionEvaluate"].eval(cell.value, rule) : false;
        });
        if (alertDef !== null) {
            return alertDef.threshold.alertType;
        }
        return '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiRow"])
    ], AlertFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlertFormatterComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiTableOptions"])
    ], AlertFormatterComponent.prototype, "options", void 0);
    AlertFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert-formatter',
            template: __webpack_require__(/*! ./alert-formatter.component.html */ "./src/app/global-statistics/alert-formatter/alert-formatter.component.html"),
            styles: [__webpack_require__(/*! ./alert-formatter.component.css */ "./src/app/global-statistics/alert-formatter/alert-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertFormatterComponent);
    return AlertFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/bus.service.ts":
/*!**************************************************!*\
  !*** ./src/app/global-statistics/bus.service.ts ***!
  \**************************************************/
/*! exports provided: BusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusService", function() { return BusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BusService = /** @class */ (function () {
    function BusService() {
        // Observable string sources
        this.datacenterAnnoucement = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.contextAnnoucement = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable string streams
        this.datacenterAnnouncement$ = this.datacenterAnnoucement.asObservable();
        this.contextAnnouncement$ = this.contextAnnoucement.asObservable();
    }
    // Service message commands
    BusService.prototype.announceDatacenter = function (id) {
        this.datacenterAnnoucement.next(id);
    };
    BusService.prototype.announceContext = function (contextName) {
        this.contextAnnoucement.next(contextName);
    };
    BusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], BusService);
    return BusService;
}());



/***/ }),

/***/ "./src/app/global-statistics/disbalance-formatter/disbalance-formatter.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/global-statistics/disbalance-formatter/disbalance-formatter.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  font-size: 11px;\n}\n\n.text-alert-yellow {\n  color: #ffd829;\n}\n\n.metric-value {\n  font-style: italic;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZGlzYmFsYW5jZS1mb3JtYXR0ZXIvZGlzYmFsYW5jZS1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy9kaXNiYWxhbmNlLWZvcm1hdHRlci9kaXNiYWxhbmNlLWZvcm1hdHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnRleHQtYWxlcnQteWVsbG93IHtcbiAgY29sb3I6ICNmZmQ4Mjk7XG59XG4ubWV0cmljLXZhbHVlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/global-statistics/disbalance-formatter/disbalance-formatter.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/global-statistics/disbalance-formatter/disbalance-formatter.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data != null && data.value > 0 && isVisible()\" class=\"metric-value\">\n  <i class=\"fa fa-exclamation-triangle text-alert-yellow\"></i>&nbsp;<span class=\"text-red\">{{getInfoMessage()}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/disbalance-formatter/disbalance-formatter.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/global-statistics/disbalance-formatter/disbalance-formatter.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DisbalanceFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisbalanceFormatterComponent", function() { return DisbalanceFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_SystemMetric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/metrics/SystemMetric */ "./src/app/common/models/metrics/SystemMetric.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/metrics/SystemMetricType */ "./src/app/common/models/metrics/SystemMetricType.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisbalanceFormatterComponent = /** @class */ (function () {
    function DisbalanceFormatterComponent() {
    }
    DisbalanceFormatterComponent.prototype.ngOnInit = function () {
    };
    DisbalanceFormatterComponent.prototype.getInfoMessage = function () {
        return "Warning: Channel Adapter Pair Imbalance \"" + this.data.value + "%\" (" + this.resolveAbsoluteDisbalance() + " [MB/s])";
    };
    DisbalanceFormatterComponent.prototype.resolveAbsoluteDisbalance = function () {
        if (this.rowData !== undefined && this.rowData.getCell(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].IMBALANCE_ABSOLUT) != null) {
            return this.rowData.getCell(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].IMBALANCE_ABSOLUT).value;
        }
    };
    DisbalanceFormatterComponent.prototype.isVisible = function () {
        if (this.rowData !== undefined && parseInt(this.rowData.getCell(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].IMBALANCE_EVENTS).value, 10) > 0) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DisbalanceFormatterComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_metrics_SystemMetric__WEBPACK_IMPORTED_MODULE_1__["SystemMetric"])
    ], DisbalanceFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumn"])
    ], DisbalanceFormatterComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiRow"])
    ], DisbalanceFormatterComponent.prototype, "rowData", void 0);
    DisbalanceFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disbalance-formatter',
            template: __webpack_require__(/*! ./disbalance-formatter.component.html */ "./src/app/global-statistics/disbalance-formatter/disbalance-formatter.component.html"),
            styles: [__webpack_require__(/*! ./disbalance-formatter.component.css */ "./src/app/global-statistics/disbalance-formatter/disbalance-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisbalanceFormatterComponent);
    return DisbalanceFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/dp-sla/dp-sla-2.component.html":
/*!******************************************************************!*\
  !*** ./src/app/global-statistics/dp-sla/dp-sla-2.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\n  <div class=\"container-fluid\">\n    <div class=\"row col-md-6\">\n      <app-sasi-table [data]=\"data | systemPool2SasiGroupTable\" [tableOptions]=\"options\"></app-sasi-table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/dp-sla/dp-sla.component.css":
/*!***************************************************************!*\
  !*** ./src/app/global-statistics/dp-sla/dp-sla.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col {\n  width: 35.75% !important;\n}\n.col-label {\n  width: 25% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZHAtc2xhL2RwLXNsYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0NBQzFCO0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy9kcC1zbGEvZHAtc2xhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sIHtcbiAgd2lkdGg6IDM1Ljc1JSAhaW1wb3J0YW50O1xufVxuLmNvbC1sYWJlbCB7XG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/global-statistics/dp-sla/dp-sla.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/global-statistics/dp-sla/dp-sla.component.ts ***!
  \**************************************************************/
/*! exports provided: DpSlaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DpSlaComponent", function() { return DpSlaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _period_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../period.service */ "./src/app/period.service.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/metrics/SystemMetricType */ "./src/app/common/models/metrics/SystemMetricType.ts");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bus.service */ "./src/app/global-statistics/bus.service.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../route-link-formatter/route-link-formatter.component */ "./src/app/global-statistics/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../alert-formatter/alert-formatter.component */ "./src/app/global-statistics/alert-formatter/alert-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../simple-formatter/simple-formatter.component */ "./src/app/global-statistics/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _time_formatter_time_formatter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../time-formatter/time-formatter.component */ "./src/app/global-statistics/time-formatter/time-formatter.component.ts");
/* harmony import */ var _utils_SumValueServiceImpl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/SumValueServiceImpl */ "./src/app/global-statistics/utils/SumValueServiceImpl.ts");
/* harmony import */ var _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/components/sasi-table/group-sort-impl */ "./src/app/common/components/sasi-table/group-sort-impl.ts");
/* harmony import */ var _emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../emph-formatter/emph-formatter.component */ "./src/app/global-statistics/emph-formatter/emph-formatter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var DpSlaComponent = /** @class */ (function () {
    function DpSlaComponent(route, router, periodService, metricService, bus) {
        this.route = route;
        this.router = router;
        this.periodService = periodService;
        this.metricService = metricService;
        this.bus = bus;
        this.types = [
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].SLA_EVENTS,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].OUT_OF_SLA_TIME
        ];
        this.currentPeriod = _metric_service__WEBPACK_IMPORTED_MODULE_3__["PeriodType"].DAY;
        this.options = new _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiTableOptions"]();
        this.data = []; // TODO duplicated in all Global statistics - grouped
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex('name')
            .withLabel('System')
            .withComponent(_emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_14__["EmphFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].SLA_EVENTS)
            .withLabel('SLA Events')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].OUT_OF_SLA_TIME)
            .withLabel('Out of SLA Time')
            .withComponent(_time_formatter_time_formatter_component__WEBPACK_IMPORTED_MODULE_11__["TimeFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.colControlFormatter = _alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_8__["AlertFormatterComponent"];
        this.options.rowComponentFormatter = _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_9__["RowGroupTableComponent"];
        this.options.grIndexComponentFormatter = _route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_7__["RouteLinkFormatterComponent"];
        this.options.isDataGrouped = true;
        this.options.highlightRow = true;
        this.options.highlightColumn = false;
        this.options.labelColumnWidth = '25';
        this.options.valueColumnWidth = '35.75';
        this.options.aggregateValuesService = new _utils_SumValueServiceImpl__WEBPACK_IMPORTED_MODULE_12__["SumValueServiceImpl"]();
        this.options.sortService = new _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_13__["GroupSortImpl"]();
    }
    DpSlaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = +params.get('id');
            _this.bus.announceDatacenter(id);
            _this.bus.announceContext('dp-sla');
            _this.getTableData(id); // TODO initInternal removed, check collapse/select behavior
        });
        this.periodService.periodAnnouncement$.subscribe(function (period) {
            _this.currentPeriod = period;
            _this.getTableData(_this.currentDataCenterId);
        });
        this.periodService.announceEnablePeriod(true);
    };
    DpSlaComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.currentDataCenterId = id;
        this.metricService.getDpSlaStatistics(id, this.currentPeriod).subscribe(function (data) {
            _this.data = data.systems;
        }, function (error) {
            console.log(error);
            _this.data = [];
        });
        return this.data;
    };
    DpSlaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dp-sla',
            template: __webpack_require__(/*! ./dp-sla-2.component.html */ "./src/app/global-statistics/dp-sla/dp-sla-2.component.html"),
            styles: [__webpack_require__(/*! ./dp-sla.component.css */ "./src/app/global-statistics/dp-sla/dp-sla.component.css"), __webpack_require__(/*! ../global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _period_service__WEBPACK_IMPORTED_MODULE_2__["PeriodService"],
            _metric_service__WEBPACK_IMPORTED_MODULE_3__["MetricService"],
            _bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"]])
    ], DpSlaComponent);
    return DpSlaComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/emph-formatter/emph-formatter.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/global-statistics/emph-formatter/emph-formatter.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".metric-value {\n  font-style: italic;\n  font-weight: normal !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZW1waC1mb3JtYXR0ZXIvZW1waC1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiwrQkFBK0I7Q0FDaEMiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy9lbXBoLWZvcm1hdHRlci9lbXBoLWZvcm1hdHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1ldHJpYy12YWx1ZSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/global-statistics/emph-formatter/emph-formatter.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/global-statistics/emph-formatter/emph-formatter.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data != null\" class=\"metric-value\">\n  <span tooltip=\"{{label}}\" hide-delay=\"0\">{{data.value}} <span\n    class=\"metric-unit\">{{data.unit}}</span></span>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/emph-formatter/emph-formatter.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/global-statistics/emph-formatter/emph-formatter.component.ts ***!
  \******************************************************************************/
/*! exports provided: EmphFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmphFormatterComponent", function() { return EmphFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmphFormatterComponent = /** @class */ (function () {
    function EmphFormatterComponent() {
    }
    EmphFormatterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EmphFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EmphFormatterComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EmphFormatterComponent.prototype, "column", void 0);
    EmphFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emph-formatter',
            template: __webpack_require__(/*! ./emph-formatter.component.html */ "./src/app/global-statistics/emph-formatter/emph-formatter.component.html"),
            styles: [__webpack_require__(/*! ./emph-formatter.component.css */ "./src/app/global-statistics/emph-formatter/emph-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmphFormatterComponent);
    return EmphFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/global-statistics-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/global-statistics/global-statistics-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: GlobalStatisticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStatisticsRoutingModule", function() { return GlobalStatisticsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_statistics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-statistics.component */ "./src/app/global-statistics/global-statistics.component.ts");
/* harmony import */ var _performance_statistics_performance_statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./performance-statistics/performance-statistics.component */ "./src/app/global-statistics/performance-statistics/performance-statistics.component.ts");
/* harmony import */ var _dp_sla_dp_sla_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dp-sla/dp-sla.component */ "./src/app/global-statistics/dp-sla/dp-sla.component.ts");
/* harmony import */ var _adapters_adapters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adapters/adapters.component */ "./src/app/global-statistics/adapters/adapters.component.ts");
/* harmony import */ var _logical_capacity_statistics_logical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logical-capacity-statistics/logical-capacity-statistics.component */ "./src/app/global-statistics/logical-capacity-statistics/logical-capacity-statistics.component.ts");
/* harmony import */ var _physical_capacity_statistics_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./physical-capacity-statistics/physical-capacity-statistics.component */ "./src/app/global-statistics/physical-capacity-statistics/physical-capacity-statistics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'global-statistics',
        component: _global_statistics_component__WEBPACK_IMPORTED_MODULE_2__["GlobalStatisticsComponent"],
        children: [
            { path: 'performance/:id', component: _performance_statistics_performance_statistics_component__WEBPACK_IMPORTED_MODULE_3__["PerformanceStatisticsComponent"] },
            { path: 'performance', redirectTo: 'performance/1', pathMatch: 'full' },
            { path: 'physical-capacity/:id', component: _physical_capacity_statistics_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_7__["PhysicalCapacityStatisticsComponent"] },
            { path: 'physical-capacity', redirectTo: 'physical-capacity/1', pathMatch: 'full' },
            { path: 'logical-capacity/:id', component: _logical_capacity_statistics_logical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_6__["LogicalCapacityStatisticsComponent"] },
            { path: 'logical-capacity', redirectTo: 'logical-capacity/1', pathMatch: 'full' },
            { path: 'dp-sla/:id', component: _dp_sla_dp_sla_component__WEBPACK_IMPORTED_MODULE_4__["DpSlaComponent"] },
            { path: 'dp-sla', redirectTo: 'dp-sla/1', pathMatch: 'full' },
            { path: 'adapters/:id', component: _adapters_adapters_component__WEBPACK_IMPORTED_MODULE_5__["AdaptersComponent"] },
            { path: 'adapters', redirectTo: 'adapters/1', pathMatch: 'full' }
        ]
    }
];
var GlobalStatisticsRoutingModule = /** @class */ (function () {
    function GlobalStatisticsRoutingModule() {
    }
    GlobalStatisticsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GlobalStatisticsRoutingModule);
    return GlobalStatisticsRoutingModule;
}());



/***/ }),

/***/ "./src/app/global-statistics/global-statistics.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/global-statistics/global-statistics.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/****** Behavior *****/\ndiv.collapsed ~ div.collapsable {\n  display: none;\n}\ndiv.table-header > div.col.highlightColumn {\n  -webkit-text-decoration: #334369 underline;\n          text-decoration: #334369 underline;\n}\n.table-data.row:hover, .table-data .highlightColumn {\n  background-color: #b4d1ee !important;\n  color: #3A738C;\n}\n.selectedRow {\n  background-color: #BEECD1 !important;\n  color: #3A738C;\n}\n/*** Layout table ***/\n.col-control {\n  width: 3.5%;\n  display: inline-block;\n  vertical-align: middle;\n}\n.col {\n  /*width: 13.33%;*/\n  display: inline-block;\n  vertical-align: middle;\n}\n.col-label {\n  width: 13%;\n  display: inline-block;\n  /*width: 100%;*/\n}\n.capacity-table .row {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n/*** Table header ***/\ndiv.table-header {\n  border: 3px #EAEAEA solid;\n  background-color: #3C8CBC;\n  font-size: 13px;\n  color: white;\n  font-weight: bolder;\n}\ndiv.table-header > div {\n  border-right: 1px #EAEAEA solid;\n  padding: 10px 0px 10px 0px;\n}\ndiv.table-header > div {\n  text-align: center;\n}\ndiv.table-header > div.col-control {\n  color: #333;\n}\n.table-group-header > div.table-group-label.row > div[class^=\"col\"],\n.table-group-header > div.table-group-label.row > div.ignore > div {\n  text-align: center;\n  border-right: 1px #EAEAEA solid;\n  margin: 2px 0px 2px 0px;\n  /*display: inline-block;*/\n  float: left;\n}\n/**** Data group header ****/\n.table-group-header > .table-group-label,\n.table-data {\n  border-left: 3px solid #EAEAEA;\n  border-right: 3px solid #EAEAEA;\n}\ndiv.table-group-header {\n  margin-bottom: 5px;\n}\n.table-group-header > div:first-child {\n  /*background-color: #BBD9E6;*/\n  color: #35516A;\n  /*padding: 10px 0px 10px 0px;*/\n  border-top: 3px solid #EAEAEA;\n  border-bottom: 3px solid #EAEAEA;\n  /*margin-top: 10px;*/\n}\n.table-group-header > div:first-child > div.col:last-child {\n  border-right: none;\n}\n/**** Table data ****/\n.table-data:last-child {\n  /*margin: 10px 0px 10px 0px;*/\n  border-bottom: 3px solid #EAEAEA;\n}\ndiv.table-data.striped-row:nth-of-type(odd) {\n  background-color: #f3f8fa;\n}\n.table-data > div {\n  text-align: center;\n  border-right: 1px #EAEAEA solid;\n  margin: 2px 0px 2px 0px;\n  display: inline-block;\n  vertical-align: middle;\n  margin: auto;\n}\n.table-data > div i {\n  margin-top: 0.1em;\n}\n/*div.col-control {*/\n/*min-height: 1px;*/\n/*}*/\n.col-control i {\n  font-size: 11px;\n  padding: 3px;\n}\n.table-header .col-control i, .table-header i{\n  color: white\n}\n.col-control:after {\n  content: \"\";\n  font-size: 11px;\n  padding: 3px;\n}\ndiv.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  z-index: 10;\n}\n.expand-collapse {\n  padding-right: 15px;\n}\n.expand-collapse:hover {\n  color: #5C91A8;\n  font-size: 17px;\n}\n.system-name {\n  font-size: 14px;\n  -webkit-text-decoration: #0b3e6f underline;\n          text-decoration: #0b3e6f underline;\n  font-weight: 600;\n}\ndiv.no-border {\n  border-right: 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZ2xvYmFsLXN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBdUI7QUFDdkI7RUFDRSxjQUFjO0NBQ2Y7QUFFRDtFQUNFLDJDQUFtQztVQUFuQyxtQ0FBbUM7Q0FDcEM7QUFFRDtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxxQ0FBcUM7RUFDckMsZUFBZTtDQUNoQjtBQUVELHNCQUFzQjtBQUN0QjtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCO0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4QjtBQUVEO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7Q0FDbEI7QUFFRCxzQkFBc0I7QUFFdEI7RUFDRSwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0NBQzVCO0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLFlBQVk7Q0FDYjtBQUVEOztFQUVFLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixZQUFZO0NBQ2I7QUFFRCw2QkFBNkI7QUFDN0I7O0VBRUUsK0JBQStCO0VBQy9CLGdDQUFnQztDQUNqQztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLCtCQUErQjtFQUMvQiw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLHFCQUFxQjtDQUN0QjtBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQsc0JBQXNCO0FBQ3RCO0VBQ0UsOEJBQThCO0VBQzlCLGlDQUFpQztDQUNsQztBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7Q0FDZDtBQUVEO0VBQ0Usa0JBQWtCO0NBQ25CO0FBRUQscUJBQXFCO0FBQ25CLG9CQUFvQjtBQUN0QixLQUFLO0FBRUw7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkO0FBRUQ7RUFDRSx5QkFBaUI7RUFBakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0NBQ2I7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUVEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJDQUFtQztVQUFuQyxtQ0FBbUM7RUFDbkMsaUJBQWlCO0NBQ2xCO0FBRUQ7RUFDRSw2QkFBNkI7Q0FDOUIiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy9nbG9iYWwtc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKiBCZWhhdmlvciAqKioqKi9cbmRpdi5jb2xsYXBzZWQgfiBkaXYuY29sbGFwc2FibGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYudGFibGUtaGVhZGVyID4gZGl2LmNvbC5oaWdobGlnaHRDb2x1bW4ge1xuICB0ZXh0LWRlY29yYXRpb246ICMzMzQzNjkgdW5kZXJsaW5lO1xufVxuXG4udGFibGUtZGF0YS5yb3c6aG92ZXIsIC50YWJsZS1kYXRhIC5oaWdobGlnaHRDb2x1bW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRkMWVlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjM0E3MzhDO1xufVxuXG4uc2VsZWN0ZWRSb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkVFQ0QxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjM0E3MzhDO1xufVxuXG4vKioqIExheW91dCB0YWJsZSAqKiovXG4uY29sLWNvbnRyb2wge1xuICB3aWR0aDogMy41JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sIHtcbiAgLyp3aWR0aDogMTMuMzMlOyovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbC1sYWJlbCB7XG4gIHdpZHRoOiAxMyU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLyp3aWR0aDogMTAwJTsqL1xufVxuXG4uY2FwYWNpdHktdGFibGUgLnJvdyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4vKioqIFRhYmxlIGhlYWRlciAqKiovXG5cbmRpdi50YWJsZS1oZWFkZXIge1xuICBib3JkZXI6IDNweCAjRUFFQUVBIHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0M4Q0JDO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuZGl2LnRhYmxlLWhlYWRlciA+IGRpdiB7XG4gIGJvcmRlci1yaWdodDogMXB4ICNFQUVBRUEgc29saWQ7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xufVxuXG5kaXYudGFibGUtaGVhZGVyID4gZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYudGFibGUtaGVhZGVyID4gZGl2LmNvbC1jb250cm9sIHtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi50YWJsZS1ncm91cC1oZWFkZXIgPiBkaXYudGFibGUtZ3JvdXAtbGFiZWwucm93ID4gZGl2W2NsYXNzXj1cImNvbFwiXSxcbi50YWJsZS1ncm91cC1oZWFkZXIgPiBkaXYudGFibGUtZ3JvdXAtbGFiZWwucm93ID4gZGl2Lmlnbm9yZSA+IGRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggI0VBRUFFQSBzb2xpZDtcbiAgbWFyZ2luOiAycHggMHB4IDJweCAwcHg7XG4gIC8qZGlzcGxheTogaW5saW5lLWJsb2NrOyovXG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4vKioqKiBEYXRhIGdyb3VwIGhlYWRlciAqKioqL1xuLnRhYmxlLWdyb3VwLWhlYWRlciA+IC50YWJsZS1ncm91cC1sYWJlbCxcbi50YWJsZS1kYXRhIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjRUFFQUVBO1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjRUFFQUVBO1xufVxuXG5kaXYudGFibGUtZ3JvdXAtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udGFibGUtZ3JvdXAtaGVhZGVyID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOUU2OyovXG4gIGNvbG9yOiAjMzU1MTZBO1xuICAvKnBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4OyovXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjRUFFQUVBO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0VBRUFFQTtcbiAgLyptYXJnaW4tdG9wOiAxMHB4OyovXG59XG5cbi50YWJsZS1ncm91cC1oZWFkZXIgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXYuY29sOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi8qKioqIFRhYmxlIGRhdGEgKioqKi9cbi50YWJsZS1kYXRhOmxhc3QtY2hpbGQge1xuICAvKm1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7Ki9cbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNFQUVBRUE7XG59XG5cbmRpdi50YWJsZS1kYXRhLnN0cmlwZWQtcm93Om50aC1vZi10eXBlKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmOGZhO1xufVxuXG4udGFibGUtZGF0YSA+IGRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggI0VBRUFFQSBzb2xpZDtcbiAgbWFyZ2luOiAycHggMHB4IDJweCAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGFibGUtZGF0YSA+IGRpdiBpIHtcbiAgbWFyZ2luLXRvcDogMC4xZW07XG59XG5cbi8qZGl2LmNvbC1jb250cm9sIHsqL1xuICAvKm1pbi1oZWlnaHQ6IDFweDsqL1xuLyp9Ki9cblxuLmNvbC1jb250cm9sIGkge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cbi50YWJsZS1oZWFkZXIgLmNvbC1jb250cm9sIGksIC50YWJsZS1oZWFkZXIgaXtcbiAgY29sb3I6IHdoaXRlXG59XG4uY29sLWNvbnRyb2w6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuZGl2LnN0aWNreSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmV4cGFuZC1jb2xsYXBzZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5leHBhbmQtY29sbGFwc2U6aG92ZXIge1xuICBjb2xvcjogIzVDOTFBODtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uc3lzdGVtLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogIzBiM2U2ZiB1bmRlcmxpbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmRpdi5uby1ib3JkZXIge1xuICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/global-statistics/global-statistics.component.html":
/*!********************************************************************!*\
  !*** ./src/app/global-statistics/global-statistics.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Global Statistics</h2>\n<div class=\"col-md-12\">\n  <div class=\"nav-tabs-custom\">\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"let dataCenter of dataCenters\"\n          [class.active]=\"isCurrentTab(dataCenter.id)\">\n        <a (click)=\"activeTab(dataCenter.id)\"\n           [routerLink]=\"['./' + context, dataCenter.id]\">\n          {{dataCenter.label}}\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <router-outlet></router-outlet>\n    </div>\n    <!-- /.performance-statistics-content -->\n  </div>\n  <!-- /.nav-tabs-custom -->\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/global-statistics/global-statistics.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/global-statistics/global-statistics.component.ts ***!
  \******************************************************************/
/*! exports provided: GlobalStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStatisticsComponent", function() { return GlobalStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bus.service */ "./src/app/global-statistics/bus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalStatisticsComponent = /** @class */ (function () {
    function GlobalStatisticsComponent(metricService, bus) {
        this.metricService = metricService;
        this.bus = bus;
    }
    GlobalStatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bus.datacenterAnnouncement$.subscribe(function (id) { return _this.getDatacenters(id); });
        this.bus.contextAnnouncement$.subscribe(function (context) {
            setTimeout(function () {
                return _this.context = context;
            });
        });
    };
    GlobalStatisticsComponent.prototype.activeTab = function (id) {
        this.currentTab = id;
    };
    GlobalStatisticsComponent.prototype.isCurrentTab = function (id) {
        return id === this.currentTab;
    };
    GlobalStatisticsComponent.prototype.getDatacenters = function (currentTab) {
        var _this = this;
        this.metricService.getDatacenters().subscribe(function (data) {
            _this.dataCenters = data.datacenters;
            _this.currentTab = currentTab;
        });
    };
    GlobalStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-global-statistics',
            template: __webpack_require__(/*! ./global-statistics.component.html */ "./src/app/global-statistics/global-statistics.component.html"),
            styles: [__webpack_require__(/*! ./global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"],
            _bus_service__WEBPACK_IMPORTED_MODULE_2__["BusService"]])
    ], GlobalStatisticsComponent);
    return GlobalStatisticsComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/global-statistics.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/global-statistics/global-statistics.module.ts ***!
  \***************************************************************/
/*! exports provided: GlobalStatisticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStatisticsModule", function() { return GlobalStatisticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _performance_statistics_performance_statistics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./performance-statistics/performance-statistics.component */ "./src/app/global-statistics/performance-statistics/performance-statistics.component.ts");
/* harmony import */ var _physical_capacity_statistics_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physical-capacity-statistics/physical-capacity-statistics.component */ "./src/app/global-statistics/physical-capacity-statistics/physical-capacity-statistics.component.ts");
/* harmony import */ var _global_statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-statistics.component */ "./src/app/global-statistics/global-statistics.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _global_statistics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-statistics-routing.module */ "./src/app/global-statistics/global-statistics-routing.module.ts");
/* harmony import */ var _common_sa_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/sa-common.module */ "./src/app/common/sa-common.module.ts");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");
/* harmony import */ var _dp_sla_dp_sla_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dp-sla/dp-sla.component */ "./src/app/global-statistics/dp-sla/dp-sla.component.ts");
/* harmony import */ var _adapters_adapters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adapters/adapters.component */ "./src/app/global-statistics/adapters/adapters.component.ts");
/* harmony import */ var _route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./route-link-formatter/route-link-formatter.component */ "./src/app/global-statistics/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./unit-formatter/unit-formatter.component */ "./src/app/global-statistics/unit-formatter/unit-formatter.component.ts");
/* harmony import */ var _alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./alert-formatter/alert-formatter.component */ "./src/app/global-statistics/alert-formatter/alert-formatter.component.ts");
/* harmony import */ var _simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./simple-formatter/simple-formatter.component */ "./src/app/global-statistics/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _time_formatter_time_formatter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./time-formatter/time-formatter.component */ "./src/app/global-statistics/time-formatter/time-formatter.component.ts");
/* harmony import */ var _utils_seconds_2_full_time_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/seconds-2-full-time.pipe */ "./src/app/global-statistics/utils/seconds-2-full-time.pipe.ts");
/* harmony import */ var _text_formatter_text_formatter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./text-formatter/text-formatter.component */ "./src/app/global-statistics/text-formatter/text-formatter.component.ts");
/* harmony import */ var _aggragated_statistics_aggragated_statistics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./aggragated-statistics/aggragated-statistics.component */ "./src/app/global-statistics/aggragated-statistics/aggragated-statistics.component.ts");
/* harmony import */ var _emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./emph-formatter/emph-formatter.component */ "./src/app/global-statistics/emph-formatter/emph-formatter.component.ts");
/* harmony import */ var _disbalance_formatter_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./disbalance-formatter/disbalance-formatter.component */ "./src/app/global-statistics/disbalance-formatter/disbalance-formatter.component.ts");
/* harmony import */ var _logical_capacity_statistics_logical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./logical-capacity-statistics/logical-capacity-statistics.component */ "./src/app/global-statistics/logical-capacity-statistics/logical-capacity-statistics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var GlobalStatisticsModule = /** @class */ (function () {
    function GlobalStatisticsModule() {
    }
    GlobalStatisticsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _global_statistics_component__WEBPACK_IMPORTED_MODULE_3__["GlobalStatisticsComponent"],
                _physical_capacity_statistics_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_2__["PhysicalCapacityStatisticsComponent"],
                _performance_statistics_performance_statistics_component__WEBPACK_IMPORTED_MODULE_1__["PerformanceStatisticsComponent"],
                _dp_sla_dp_sla_component__WEBPACK_IMPORTED_MODULE_8__["DpSlaComponent"],
                _adapters_adapters_component__WEBPACK_IMPORTED_MODULE_9__["AdaptersComponent"],
                _route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_10__["RouteLinkFormatterComponent"],
                _unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_11__["UnitFormatterComponent"],
                _alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_12__["AlertFormatterComponent"],
                _simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_13__["SimpleFormatterComponent"],
                _time_formatter_time_formatter_component__WEBPACK_IMPORTED_MODULE_14__["TimeFormatterComponent"],
                _utils_seconds_2_full_time_pipe__WEBPACK_IMPORTED_MODULE_15__["Seconds2FullTimePipe"],
                _text_formatter_text_formatter_component__WEBPACK_IMPORTED_MODULE_16__["TextFormatterComponent"],
                _aggragated_statistics_aggragated_statistics_component__WEBPACK_IMPORTED_MODULE_17__["AggragatedStatisticsComponent"],
                _emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_18__["EmphFormatterComponent"],
                _disbalance_formatter_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_19__["DisbalanceFormatterComponent"],
                _logical_capacity_statistics_logical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_20__["LogicalCapacityStatisticsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _global_statistics_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlobalStatisticsRoutingModule"],
                _common_sa_common_module__WEBPACK_IMPORTED_MODULE_6__["SaCommonModule"],
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]
            ]
        })
    ], GlobalStatisticsModule);
    return GlobalStatisticsModule;
}());



/***/ }),

/***/ "./src/app/global-statistics/logical-capacity-statistics/logical-capacity-statistics.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/global-statistics/logical-capacity-statistics/logical-capacity-statistics.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .col-val {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 2px;\n}\n.alert-red {\n  color:#900020;\n}\n.alert-amber {\n  color:#db8b0b;\n}\n.col {\n  width: 8.88%;\n}\n.pool-name {\n  font-size: 14px;\n  font-style: italic;\n}\n:host /deep/ .groupped-data .metric-value {\n  font-size: 14px;\n  font-weight: bold;\n}\n:host /deep/ .groupped-data .metric-unit {\n  font-size: 8px;\n  margin-left: 3px;\n}\n.sorting {\n  font-size:13px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.sticky-bottom {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  z-index: 10;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvbG9naWNhbC1jYXBhY2l0eS1zdGF0aXN0aWNzL2xvZ2ljYWwtY2FwYWNpdHktc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsY0FBYztDQUNmO0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7QUFFRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGVBQWU7RUFDZixpQ0FBeUI7VUFBekIseUJBQXlCO0NBQzFCO0FBQ0Q7RUFDRSx5QkFBaUI7RUFBakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy9sb2dpY2FsLWNhcGFjaXR5LXN0YXRpc3RpY3MvbG9naWNhbC1jYXBhY2l0eS1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8gLmNvbC12YWwge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG59XG4uYWxlcnQtcmVkIHtcbiAgY29sb3I6IzkwMDAyMDtcbn1cbi5hbGVydC1hbWJlciB7XG4gIGNvbG9yOiNkYjhiMGI7XG59XG4uY29sIHtcbiAgd2lkdGg6IDguODglO1xufVxuXG4ucG9vbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbjpob3N0IC9kZWVwLyAuZ3JvdXBwZWQtZGF0YSAubWV0cmljLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuOmhvc3QgL2RlZXAvIC5ncm91cHBlZC1kYXRhIC5tZXRyaWMtdW5pdCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uc29ydGluZyB7XG4gIGZvbnQtc2l6ZToxM3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4uc3RpY2t5LWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/global-statistics/logical-capacity-statistics/logical-capacity-statistics.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/global-statistics/logical-capacity-statistics/logical-capacity-statistics.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\n  <div class=\"container-fluid\">\n    <div class=\"row col-md-12\">\n      <app-sasi-table [data]=\"data | systemPool2SasiGroupTable\" [tableOptions]=\"options\"></app-sasi-table>\n      <app-aggragated-statistics class='col-md-12 sticky-bottom' [aggregatedTypes]=\"options.getAggregatedColumns()\" [data]=\"data | systemPool2SasiGroupTable\" [selectedRows]=\"selectedRows\" [prefix]=\"options.storageNamePrefix\"></app-aggragated-statistics>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/logical-capacity-statistics/logical-capacity-statistics.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/global-statistics/logical-capacity-statistics/logical-capacity-statistics.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: LogicalCapacityStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicalCapacityStatisticsComponent", function() { return LogicalCapacityStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/metrics/SystemMetricType */ "./src/app/common/models/metrics/SystemMetricType.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _period_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../period.service */ "./src/app/period.service.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _physical_capacity_statistics_aggregated_statistics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../physical-capacity-statistics/aggregated-statistics.service */ "./src/app/global-statistics/physical-capacity-statistics/aggregated-statistics.service.ts");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bus.service */ "./src/app/global-statistics/bus.service.ts");
/* harmony import */ var _emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../emph-formatter/emph-formatter.component */ "./src/app/global-statistics/emph-formatter/emph-formatter.component.ts");
/* harmony import */ var _simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../simple-formatter/simple-formatter.component */ "./src/app/global-statistics/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../route-link-formatter/route-link-formatter.component */ "./src/app/global-statistics/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _utils_SasiWeightedArithmeticMean__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/SasiWeightedArithmeticMean */ "./src/app/global-statistics/utils/SasiWeightedArithmeticMean.ts");
/* harmony import */ var _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/components/sasi-table/group-sort-impl */ "./src/app/common/components/sasi-table/group-sort-impl.ts");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var LogicalCapacityStatisticsComponent = /** @class */ (function () {
    function LogicalCapacityStatisticsComponent(route, router, periodService, metricService, aggregateService, bus, localStorageService) {
        this.route = route;
        this.router = router;
        this.periodService = periodService;
        this.metricService = metricService;
        this.aggregateService = aggregateService;
        this.bus = bus;
        this.localStorageService = localStorageService;
        this.types = [
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].SUBSCRIBED_CAPACITY,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_SUBS_PERC,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_SUBS_PERC,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_SUBS_PERC,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_CAPACITY,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_FREE,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED_PERC,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_CAPACITY,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_FREE,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED_PERC,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_TOTAL,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_FREE,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED_PERC,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].COMPRESS_RATIO,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].DEDUP_RATIO,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].TOTAL_SAVING_EFFECT,
        ];
        this.data = [];
        this.aggregatedStats = new Array();
        this.options = new _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiTableOptions"]();
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex('name')
            .withLabel('System')
            .withComponent(_emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_8__["EmphFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].SUBSCRIBED_CAPACITY)
            .withLabel('Subs. Capacity')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_SUBS_PERC)
            .withLabel('Physical Subs.')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_SUBS_PERC)
            .withLabel('Logical Subs.')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED_PERC)
            .withLabel('Logical Used')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_SUBS_PERC)
            .withLabel('NET Subs.')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_CAPACITY)
            .withLabel('Physical Capacity')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED)
            .withLabel('Physical Used')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_FREE)
            .withLabel('Physical Free')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED_PERC)
            .withLabel('Physical Used')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_CAPACITY)
            .withLabel('Logical Capacity')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED)
            .withLabel('Logical Used')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_FREE)
            .withLabel('Logical Free')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED_PERC)
            .withLabel('Logical Used')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_TOTAL)
            .withLabel('Net Total')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED)
            .withLabel('Net Used')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_FREE)
            .withLabel('Net Free')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED_PERC)
            .withLabel('Net Used')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].COMPRESS_RATIO)
            .withLabel('Comp Ratio')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].DEDUP_RATIO)
            .withLabel('Dedup Ratio')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].TOTAL_SAVING_EFFECT)
            .withLabel('Total Saving Effect')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.rowComponentFormatter = _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_10__["RowGroupTableComponent"];
        this.options.grIndexComponentFormatter = _route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_11__["RouteLinkFormatterComponent"];
        this.options.isDataGrouped = true;
        this.options.highlightRow = true;
        this.options.labelColumnWidth = '13';
        this.options.valueColumnWidth = '4.17';
        this.options.storageNamePrefix = 'logicalCap';
        this.options.selectableRows = true;
        this.options.aggregateValuesService = new _utils_SasiWeightedArithmeticMean__WEBPACK_IMPORTED_MODULE_12__["SasiWeightedArithmeticMean"]();
        this.options.sortService = new _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_13__["GroupSortImpl"]();
    }
    LogicalCapacityStatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = +params.get('id');
            _this.bus.announceDatacenter(id);
            _this.bus.announceContext('logical-capacity');
            _this.getTableData(id);
        });
        this.aggregateService.aggregatedStatistics$.subscribe(function (stats) {
            _this.aggregatedStats = stats;
        });
        this.localStorageService.observe(this.options.storageNamePrefix + '_selected').subscribe(function (data) {
            _this.selectedRows = data.newValue;
        });
        this.periodService.announceEnablePeriod(false);
    };
    LogicalCapacityStatisticsComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.metricService.getCapacityStatistics(id).subscribe(function (data) {
            _this.data = data.systems;
        }, function (error) {
            console.log(error);
            _this.data = [];
        });
        return this.data;
    };
    LogicalCapacityStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-physical-statistics',
            template: __webpack_require__(/*! ./logical-capacity-statistics.component.html */ "./src/app/global-statistics/logical-capacity-statistics/logical-capacity-statistics.component.html"),
            styles: [__webpack_require__(/*! ./logical-capacity-statistics.component.css */ "./src/app/global-statistics/logical-capacity-statistics/logical-capacity-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _period_service__WEBPACK_IMPORTED_MODULE_4__["PeriodService"],
            _metric_service__WEBPACK_IMPORTED_MODULE_5__["MetricService"],
            _physical_capacity_statistics_aggregated_statistics_service__WEBPACK_IMPORTED_MODULE_6__["AggregatedStatisticsService"],
            _bus_service__WEBPACK_IMPORTED_MODULE_7__["BusService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_14__["LocalStorageService"]])
    ], LogicalCapacityStatisticsComponent);
    return LogicalCapacityStatisticsComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/performance-statistics/performance-statistics.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/global-statistics/performance-statistics/performance-statistics.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i.sort-icon-left {\n  margin-right: 5px;\n}\n\ni.sort-icon-right {\n  margin-left: 5px;\n}\n\n.col {\n  width: 13.78%;\n}\n\n.table-data.row {\n  margin: 0px 0px 5px 0px;\n  border: 3px #EAEAEA solid;\n}\n\n.peak-label {\n  color: #c7e1f8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvcGVyZm9ybWFuY2Utc3RhdGlzdGljcy9wZXJmb3JtYW5jZS1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL3BlcmZvcm1hbmNlLXN0YXRpc3RpY3MvcGVyZm9ybWFuY2Utc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaS5zb3J0LWljb24tbGVmdCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5pLnNvcnQtaWNvbi1yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5jb2wge1xuICB3aWR0aDogMTMuNzglO1xufVxuXG4udGFibGUtZGF0YS5yb3cge1xuICBtYXJnaW46IDBweCAwcHggNXB4IDBweDtcbiAgYm9yZGVyOiAzcHggI0VBRUFFQSBzb2xpZDtcbn1cblxuLnBlYWstbGFiZWwge1xuICBjb2xvcjogI2M3ZTFmODtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/global-statistics/performance-statistics/performance-statistics.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/global-statistics/performance-statistics/performance-statistics.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <app-sasi-table [data]=\"data | systemPool2SasiTable\" [tableOptions]=\"options\"></app-sasi-table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/performance-statistics/performance-statistics.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/global-statistics/performance-statistics/performance-statistics.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PerformanceStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceStatisticsComponent", function() { return PerformanceStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/metrics/SystemMetricType */ "./src/app/common/models/metrics/SystemMetricType.ts");
/* harmony import */ var _period_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../period.service */ "./src/app/period.service.ts");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bus.service */ "./src/app/global-statistics/bus.service.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../unit-formatter/unit-formatter.component */ "./src/app/global-statistics/unit-formatter/unit-formatter.component.ts");
/* harmony import */ var _route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../route-link-formatter/route-link-formatter.component */ "./src/app/global-statistics/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../alert-formatter/alert-formatter.component */ "./src/app/global-statistics/alert-formatter/alert-formatter.component.ts");
/* harmony import */ var _AlertRule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../AlertRule */ "./src/app/global-statistics/AlertRule.ts");
/* harmony import */ var _common_components_sasi_table_row_table_row_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/components/sasi-table/row-table/row-table.component */ "./src/app/common/components/sasi-table/row-table/row-table.component.ts");
/* harmony import */ var _common_components_sasi_table_simple_sort_impl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/components/sasi-table/simple-sort-impl */ "./src/app/common/components/sasi-table/simple-sort-impl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PerformanceStatisticsComponent = /** @class */ (function () {
    function PerformanceStatisticsComponent(route, router, metricService, periodService, bus) {
        this.route = route;
        this.router = router;
        this.metricService = metricService;
        this.periodService = periodService;
        this.bus = bus;
        this.currentPeriod = _metric_service__WEBPACK_IMPORTED_MODULE_1__["PeriodType"].DAY;
        this.data = []; // Todo caching data by datacenters
        this.options = new _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiTableOptions"]();
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex('name')
            .withLabel('System')
            .withComponent(_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_8__["RouteLinkFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WORKLOAD)
            .withLabel('Workload')
            .withComponent(_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TRANSFER)
            .withLabel('Transfer')
            .withComponent(_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].RESPONSE)
            .withLabel('Response')
            .withComponent(_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].CPU)
            .withLabel('CPU')
            .withComponent(_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].HDD)
            .withLabel('HDD')
            .withComponent(_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WRITE_PENDING_PERC)
            .withLabel('Write Pending')
            .withComponent(_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.colControlFormatter = _alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_9__["AlertFormatterComponent"];
        this.options.rowComponentFormatter = _common_components_sasi_table_row_table_row_table_component__WEBPACK_IMPORTED_MODULE_11__["RowTableComponent"];
        this.options.labelColumnWidth = '13.78';
        this.options.valueColumnWidth = '13.78';
        this.options.sortService = new _common_components_sasi_table_simple_sort_impl__WEBPACK_IMPORTED_MODULE_12__["SimpleSortImpl"]();
        this.options.altSortColumnName = 'peak';
    }
    PerformanceStatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = +params.get('id');
            _this.bus.announceDatacenter(id);
            _this.bus.announceContext('performance');
            _this.data = _this.getTableData(id);
        });
        this.periodService.periodAnnouncement$.subscribe(function (period) {
            _this.currentPeriod = period;
            _this.getTableData(_this.currentDataCenterId);
        });
        this.periodService.announceEnablePeriod(true);
        this.options.cellDecoratorRules.push(new _AlertRule__WEBPACK_IMPORTED_MODULE_10__["AlertRule"](_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].CPU, new _AlertRule__WEBPACK_IMPORTED_MODULE_10__["Threshold"]('text-orange', 80, 10000)));
        this.options.cellDecoratorRules.push(new _AlertRule__WEBPACK_IMPORTED_MODULE_10__["AlertRule"](_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WRITE_PENDING_PERC, new _AlertRule__WEBPACK_IMPORTED_MODULE_10__["Threshold"]('text-orange', 30, 10000)));
    };
    PerformanceStatisticsComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.currentDataCenterId = id;
        this.metricService.getPerformanceStatistics(id, this.currentPeriod).subscribe(function (data) {
            _this.data = data.systems;
        }, function (error) {
            console.log(error);
            _this.data = [];
        });
        return this.data;
    };
    PerformanceStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab',
            template: __webpack_require__(/*! ./performance-statistics.component.html */ "./src/app/global-statistics/performance-statistics/performance-statistics.component.html"),
            styles: [__webpack_require__(/*! ./performance-statistics.component.css */ "./src/app/global-statistics/performance-statistics/performance-statistics.component.css"), __webpack_require__(/*! ../global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"],
            _period_service__WEBPACK_IMPORTED_MODULE_4__["PeriodService"],
            _bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"]])
    ], PerformanceStatisticsComponent);
    return PerformanceStatisticsComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/physical-capacity-statistics/aggregated-statistics.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/global-statistics/physical-capacity-statistics/aggregated-statistics.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: AggregatedStatisticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggregatedStatisticsService", function() { return AggregatedStatisticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils_WeightedArithmeticMean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/WeightedArithmeticMean */ "./src/app/global-statistics/utils/WeightedArithmeticMean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AggregatedStatisticsService = /** @class */ (function () {
    function AggregatedStatisticsService() {
        // Observable string sources
        this.filterAnnoucement = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.statsAnnoucement = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable string streams
        this.filterAnnouncement$ = this.filterAnnoucement.asObservable();
        this.aggregatedStatistics$ = this.statsAnnoucement.asObservable();
    }
    // Service message commands
    AggregatedStatisticsService.prototype.aggregateStatsBySystems = function (pools, poolMetrics) {
        this.filterAnnoucement.next(pools);
        var mean = new _utils_WeightedArithmeticMean__WEBPACK_IMPORTED_MODULE_2__["WeightedArithmeticMean"]();
        this.announceStatistics(mean.computeSummaries(poolMetrics, pools));
    };
    AggregatedStatisticsService.prototype.announceStatistics = function (statistics) {
        this.statsAnnoucement.next(statistics);
    };
    AggregatedStatisticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AggregatedStatisticsService);
    return AggregatedStatisticsService;
}());



/***/ }),

/***/ "./src/app/global-statistics/physical-capacity-statistics/physical-capacity-statistics.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/global-statistics/physical-capacity-statistics/physical-capacity-statistics.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .col-val {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 2px;\n}\n.alert-red {\n  color:#900020;\n}\n.alert-amber {\n  color:#db8b0b;\n}\n.col {\n  width: 8.88%;\n}\n.pool-name {\n  font-size: 14px;\n  font-style: italic;\n}\n:host /deep/ .groupped-data .metric-value {\n  font-size: 14px;\n  font-weight: bold;\n}\n:host /deep/ .groupped-data .metric-unit {\n  font-size: 8px;\n  margin-left: 3px;\n}\n.sorting {\n  font-size:13px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.sticky-bottom {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  z-index: 10;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvcGh5c2ljYWwtY2FwYWNpdHktc3RhdGlzdGljcy9waHlzaWNhbC1jYXBhY2l0eS1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsY0FBYztDQUNmO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0UsZUFBZTtFQUNmLGlDQUF5QjtVQUF6Qix5QkFBeUI7Q0FDMUI7QUFDRDtFQUNFLHlCQUFpQjtFQUFqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL3BoeXNpY2FsLWNhcGFjaXR5LXN0YXRpc3RpY3MvcGh5c2ljYWwtY2FwYWNpdHktc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgL2RlZXAvIC5jb2wtdmFsIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xufVxuLmFsZXJ0LXJlZCB7XG4gIGNvbG9yOiM5MDAwMjA7XG59XG4uYWxlcnQtYW1iZXIge1xuICBjb2xvcjojZGI4YjBiO1xufVxuLmNvbCB7XG4gIHdpZHRoOiA4Ljg4JTtcbn1cblxuLnBvb2wtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG46aG9zdCAvZGVlcC8gLmdyb3VwcGVkLWRhdGEgLm1ldHJpYy12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjpob3N0IC9kZWVwLyAuZ3JvdXBwZWQtZGF0YSAubWV0cmljLXVuaXQge1xuICBmb250LXNpemU6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLnNvcnRpbmcge1xuICBmb250LXNpemU6MTNweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLnN0aWNreS1ib3R0b20ge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDBweDtcbiAgei1pbmRleDogMTA7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/global-statistics/physical-capacity-statistics/physical-capacity-statistics.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/global-statistics/physical-capacity-statistics/physical-capacity-statistics.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\n  <div class=\"container-fluid\">\n    <div class=\"row col-md-12\">\n      <app-sasi-table [data]=\"data | systemPool2SasiGroupTable\" [tableOptions]=\"options\"></app-sasi-table>\n      <app-aggragated-statistics class='col-md-12 sticky-bottom' [aggregatedTypes]=\"options.getAggregatedColumns()\" [data]=\"data | systemPool2SasiGroupTable\" [selectedRows]=\"selectedRows\" [prefix]=\"options.storageNamePrefix\"></app-aggragated-statistics>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/physical-capacity-statistics/physical-capacity-statistics.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/global-statistics/physical-capacity-statistics/physical-capacity-statistics.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ItemKey, PhysicalCapacityStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemKey", function() { return ItemKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicalCapacityStatisticsComponent", function() { return PhysicalCapacityStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _aggregated_statistics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aggregated-statistics.service */ "./src/app/global-statistics/physical-capacity-statistics/aggregated-statistics.service.ts");
/* harmony import */ var _period_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../period.service */ "./src/app/period.service.ts");
/* harmony import */ var _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/models/metrics/SystemMetricType */ "./src/app/common/models/metrics/SystemMetricType.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bus.service */ "./src/app/global-statistics/bus.service.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../route-link-formatter/route-link-formatter.component */ "./src/app/global-statistics/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../simple-formatter/simple-formatter.component */ "./src/app/global-statistics/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../alert-formatter/alert-formatter.component */ "./src/app/global-statistics/alert-formatter/alert-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _AlertRule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../AlertRule */ "./src/app/global-statistics/AlertRule.ts");
/* harmony import */ var _utils_SasiWeightedArithmeticMean__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/SasiWeightedArithmeticMean */ "./src/app/global-statistics/utils/SasiWeightedArithmeticMean.ts");
/* harmony import */ var _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/components/sasi-table/group-sort-impl */ "./src/app/common/components/sasi-table/group-sort-impl.ts");
/* harmony import */ var _emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../emph-formatter/emph-formatter.component */ "./src/app/global-statistics/emph-formatter/emph-formatter.component.ts");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var ItemKey = /** @class */ (function () {
    function ItemKey() {
    }
    return ItemKey;
}());

var MetricLabels = /** @class */ (function () {
    function MetricLabels() {
    }
    return MetricLabels;
}());
var SelectedItem = /** @class */ (function () {
    function SelectedItem() {
    }
    return SelectedItem;
}());
var PhysicalCapacityStatisticsComponent = /** @class */ (function () {
    function PhysicalCapacityStatisticsComponent(route, router, periodService, metricService, aggregateService, bus, localStorageService) {
        this.route = route;
        this.router = router;
        this.periodService = periodService;
        this.metricService = metricService;
        this.aggregateService = aggregateService;
        this.bus = bus;
        this.localStorageService = localStorageService;
        this.types = [
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PHYSICAL_SUBS_PERC,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PHYSICAL_CAPACITY,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].AVAILABLE_CAPACITY,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].LOGICAL_USED_PERC,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PHYSICAL_USED_PERC,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].COMPRESS_RATIO,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PREDICTION_L1,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PREDICTION_L2,
            _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PREDICTION_L3
        ];
        this.data = []; // Todo caching data by dataCenters
        this.aggregatedStats = new Array();
        this.options = new _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__["SasiTableOptions"]();
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__["SasiColumnBuilder"].getInstance()
            .withIndex('name')
            .withLabel('System')
            .withComponent(_emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_16__["EmphFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PHYSICAL_CAPACITY)
            .withLabel('Physical Capacity')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PHYSICAL_SUBS_PERC)
            .withLabel('Physical Subscription')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].AVAILABLE_CAPACITY)
            .withLabel('Available Capacity')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].LOGICAL_USED_PERC)
            .withLabel('Logical Used')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PHYSICAL_USED_PERC)
            .withLabel('Physical Used')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].COMPRESS_RATIO)
            .withLabel('Compression Ratio')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].CAPACITY_CHANGE_1D)
            .withLabel('Change 1D')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].CAPACITY_CHANGE_1W)
            .withLabel('Change 1W')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].CAPACITY_CHANGE_1M)
            .withLabel('Change 1M')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PREDICTION_L1)
            .withLabel('Reach 80%')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .withTooltipText('Days to reach 80% of "Physical Used"')
            .withInfinity(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PREDICTION_L2)
            .withLabel('Reach 85%')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .withTooltipText('Days to reach 85% of "Physical Used"')
            .withInfinity(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_8__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PREDICTION_L3)
            .withLabel('Reach 88%')
            .withComponent(_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .withTooltipText('Days to reach 88% of "Physical Used"')
            .withInfinity(true)
            .build());
        this.options.colControlFormatter = _alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_11__["AlertFormatterComponent"];
        this.options.rowComponentFormatter = _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_12__["RowGroupTableComponent"];
        this.options.grIndexComponentFormatter = _route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_9__["RouteLinkFormatterComponent"];
        this.options.isDataGrouped = true;
        this.options.highlightRow = true;
        this.options.labelColumnWidth = '13';
        this.options.valueColumnWidth = '6.65';
        this.options.storageNamePrefix = 'physicalCap';
        this.options.selectableRows = true;
        this.options.aggregateValuesService = new _utils_SasiWeightedArithmeticMean__WEBPACK_IMPORTED_MODULE_14__["SasiWeightedArithmeticMean"]();
        this.options.sortService = new _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_15__["GroupSortImpl"]();
        this.options.cellDecoratorRules.push(new _AlertRule__WEBPACK_IMPORTED_MODULE_13__["AlertRule"](_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PHYSICAL_USED_PERC, new _AlertRule__WEBPACK_IMPORTED_MODULE_13__["Threshold"]('text-green', 80, 84.9)));
        this.options.cellDecoratorRules.push(new _AlertRule__WEBPACK_IMPORTED_MODULE_13__["AlertRule"](_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PHYSICAL_USED_PERC, new _AlertRule__WEBPACK_IMPORTED_MODULE_13__["Threshold"]('text-alert-yellow', 85, 88)));
        this.options.cellDecoratorRules.push(new _AlertRule__WEBPACK_IMPORTED_MODULE_13__["AlertRule"](_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_5__["SystemMetricType"].PHYSICAL_USED_PERC, new _AlertRule__WEBPACK_IMPORTED_MODULE_13__["Threshold"]('text-red', 88, 10000)));
    }
    // Todo common with logical stats
    PhysicalCapacityStatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = +params.get('id');
            _this.bus.announceDatacenter(id);
            _this.bus.announceContext('physical-capacity');
            _this.getTableData(id);
        });
        this.aggregateService.aggregatedStatistics$.subscribe(function (stats) {
            _this.aggregatedStats = stats;
        });
        this.periodService.announceEnablePeriod(false);
        this.localStorageService.observe(this.options.storageNamePrefix + '_selected').subscribe(function (data) {
            _this.selectedRows = data.newValue;
        });
    };
    PhysicalCapacityStatisticsComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.metricService.getCapacityStatistics(id).subscribe(function (data) {
            _this.data = data.systems;
        }, function (error) {
            console.log(error);
            _this.data = [];
        });
        return this.data;
    };
    PhysicalCapacityStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-capacity-statistics',
            template: __webpack_require__(/*! ./physical-capacity-statistics.component.html */ "./src/app/global-statistics/physical-capacity-statistics/physical-capacity-statistics.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0px', overflow: 'hidden', margin: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ 'height': '*', overflow: 'hidden', margin: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('500ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('iconRotate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'rotate(0deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ transform: 'rotate(90deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('500ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('500ms'))
                ])
            ],
            styles: [__webpack_require__(/*! ./physical-capacity-statistics.component.css */ "./src/app/global-statistics/physical-capacity-statistics/physical-capacity-statistics.component.css"), __webpack_require__(/*! ../global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _period_service__WEBPACK_IMPORTED_MODULE_4__["PeriodService"],
            _metric_service__WEBPACK_IMPORTED_MODULE_2__["MetricService"],
            _aggregated_statistics_service__WEBPACK_IMPORTED_MODULE_3__["AggregatedStatisticsService"],
            _bus_service__WEBPACK_IMPORTED_MODULE_7__["BusService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_17__["LocalStorageService"]])
    ], PhysicalCapacityStatisticsComponent);
    return PhysicalCapacityStatisticsComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/route-link-formatter/route-link-formatter.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/global-statistics/route-link-formatter/route-link-formatter.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".system-name {\n  font-size: 14px;\n  -webkit-text-decoration: #0b3e6f underline;\n          text-decoration: #0b3e6f underline;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvcm91dGUtbGluay1mb3JtYXR0ZXIvcm91dGUtbGluay1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL3JvdXRlLWxpbmstZm9ybWF0dGVyL3JvdXRlLWxpbmstZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3lzdGVtLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogIzBiM2U2ZiB1bmRlcmxpbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/global-statistics/route-link-formatter/route-link-formatter.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/global-statistics/route-link-formatter/route-link-formatter.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<span [className]=\"getAlertType(pool, type)\">-->\n<span *ngIf=\"data != null\">\n  <span class=\"system-name\"><a [routerLink]=\"data.id | iframeUrlCreator:data.iFrameLink\">{{data.value}}</a></span>\n</span>\n"

/***/ }),

/***/ "./src/app/global-statistics/route-link-formatter/route-link-formatter.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/global-statistics/route-link-formatter/route-link-formatter.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RouteLinkFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteLinkFormatterComponent", function() { return RouteLinkFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouteLinkFormatterComponent = /** @class */ (function () {
    function RouteLinkFormatterComponent() {
    }
    RouteLinkFormatterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RouteLinkFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RouteLinkFormatterComponent.prototype, "label", void 0);
    RouteLinkFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simple-unit-formatter',
            template: __webpack_require__(/*! ./route-link-formatter.component.html */ "./src/app/global-statistics/route-link-formatter/route-link-formatter.component.html"),
            styles: [__webpack_require__(/*! ./route-link-formatter.component.css */ "./src/app/global-statistics/route-link-formatter/route-link-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RouteLinkFormatterComponent);
    return RouteLinkFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/simple-formatter/simple-formatter.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/global-statistics/simple-formatter/simple-formatter.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-alert-yellow {\n  color: #ffd829;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvc2ltcGxlLWZvcm1hdHRlci9zaW1wbGUtZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvc2ltcGxlLWZvcm1hdHRlci9zaW1wbGUtZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1hbGVydC15ZWxsb3cge1xuICBjb2xvcjogI2ZmZDgyOTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/global-statistics/simple-formatter/simple-formatter.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/global-statistics/simple-formatter/simple-formatter.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data != null && data.value != null\" class=\"metric-value\">\n  <span *ngIf=\"isAlert()\" tooltip=\"{{getAlertMessage()}}\" hide-delay=\"0\" > <i class=\"fa fa-exclamation-triangle\" ngClass=\"{{getViolatedRuleClass()}}\"></i> {{data.value % 1 === 0 ? data.value : data.value.toFixed(1)}} </span>\n  <span *ngIf=\"!isAlert()\" tooltip=\"{{getTooltipMessage()}}\" hide-delay=\"0\" [innerHTML]=\"getValue() | safeHtml\"></span>\n  <span class=\"metric-unit\">{{data.unit}}</span>\n\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/simple-formatter/simple-formatter.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/global-statistics/simple-formatter/simple-formatter.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SimpleFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFormatterComponent", function() { return SimpleFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-formatter/unit-formatter.component */ "./src/app/global-statistics/unit-formatter/unit-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimpleFormatterComponent = /** @class */ (function (_super) {
    __extends(SimpleFormatterComponent, _super);
    function SimpleFormatterComponent() {
        return _super.call(this) || this;
    }
    SimpleFormatterComponent.prototype.ngOnInit = function () {
    };
    SimpleFormatterComponent.prototype.getTooltipMessage = function () {
        if (this.column !== undefined) {
            return this.column.tooltipText;
        }
    };
    SimpleFormatterComponent.prototype.getValue = function () {
        if (this.column.isInfinity && this.data.value === -1) {
            return '<i class="fas fa-infinity" style="font-size: 12px"></i> ';
        }
        return this.data.value % 1 === 0 ? this.data.value : this.data.value.toFixed(1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SimpleFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SimpleFormatterComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumn"])
    ], SimpleFormatterComponent.prototype, "column", void 0);
    SimpleFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simple-formatter',
            template: __webpack_require__(/*! ./simple-formatter.component.html */ "./src/app/global-statistics/simple-formatter/simple-formatter.component.html"),
            styles: [__webpack_require__(/*! ./simple-formatter.component.css */ "./src/app/global-statistics/simple-formatter/simple-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleFormatterComponent);
    return SimpleFormatterComponent;
}(_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_1__["UnitFormatterComponent"]));



/***/ }),

/***/ "./src/app/global-statistics/text-formatter/text-formatter.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/global-statistics/text-formatter/text-formatter.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL3RleHQtZm9ybWF0dGVyL3RleHQtZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/global-statistics/text-formatter/text-formatter.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/global-statistics/text-formatter/text-formatter.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data != null\" class=\"metric-value\">\n  <span tooltip=\"{{column.tooltipText}} average\" hide-delay=\"0\">{{data.value}} <span\n    class=\"metric-unit\">{{data.unit}}</span></span>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/text-formatter/text-formatter.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/global-statistics/text-formatter/text-formatter.component.ts ***!
  \******************************************************************************/
/*! exports provided: TextFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFormatterComponent", function() { return TextFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_SystemMetric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/metrics/SystemMetric */ "./src/app/common/models/metrics/SystemMetric.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextFormatterComponent = /** @class */ (function () {
    function TextFormatterComponent() {
    }
    TextFormatterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TextFormatterComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_metrics_SystemMetric__WEBPACK_IMPORTED_MODULE_1__["SystemMetric"])
    ], TextFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumn"])
    ], TextFormatterComponent.prototype, "column", void 0);
    TextFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-formatter',
            template: __webpack_require__(/*! ./text-formatter.component.html */ "./src/app/global-statistics/text-formatter/text-formatter.component.html"),
            styles: [__webpack_require__(/*! ./text-formatter.component.css */ "./src/app/global-statistics/text-formatter/text-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextFormatterComponent);
    return TextFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/time-formatter/time-formatter.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/global-statistics/time-formatter/time-formatter.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL3RpbWUtZm9ybWF0dGVyL3RpbWUtZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/global-statistics/time-formatter/time-formatter.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/global-statistics/time-formatter/time-formatter.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"data != null\">\n  <span class=\"metric-value\" tooltip=\"{{getTooltipMessage()}}\">{{data.value | seconds2FullTime}}</span>\n  <!--<span class=\"metric-unit\">{{data.unit}}</span>-->\n</span>\n"

/***/ }),

/***/ "./src/app/global-statistics/time-formatter/time-formatter.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/global-statistics/time-formatter/time-formatter.component.ts ***!
  \******************************************************************************/
/*! exports provided: TimeFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFormatterComponent", function() { return TimeFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeFormatterComponent = /** @class */ (function () {
    function TimeFormatterComponent() {
    }
    TimeFormatterComponent.prototype.ngOnInit = function () {
    };
    TimeFormatterComponent.prototype.getTooltipMessage = function () {
        if (this.column !== undefined) {
            return this.column.tooltipText;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TimeFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TimeFormatterComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TimeFormatterComponent.prototype, "column", void 0);
    TimeFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time-formatter',
            template: __webpack_require__(/*! ./time-formatter.component.html */ "./src/app/global-statistics/time-formatter/time-formatter.component.html"),
            styles: [__webpack_require__(/*! ./time-formatter.component.css */ "./src/app/global-statistics/time-formatter/time-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimeFormatterComponent);
    return TimeFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/unit-formatter/unit-formatter.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/global-statistics/unit-formatter/unit-formatter.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".peak {\n  display: block;\n  font-size: 12px;\n  font-style: italic;\n}\n.peak i, .metric-value i {\n  margin-right: 5px;\n}\n.peak i {\n  padding:0px;\n  /*border-top-width: 1px;*/\n  /*border-top-style: solid;*/\n  font-size: 12px;\n}\n.metric-value {\n  display: block;\n  font-weight: 600;\n  font-size:14px;\n  /*border-bottom: 2px #00c0ef solid;*/\n  margin-bottom: 2px;\n}\n.text-alert {\n  /*color: #900020;*/\n  color: #db8b0b;\n}\n.metric-value .metric-unit {\n  font-size: 10px;\n}\n.peak .metric-unit {\n  font-size: 9px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvdW5pdC1mb3JtYXR0ZXIvdW5pdC1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7QUFFRDtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL3VuaXQtZm9ybWF0dGVyL3VuaXQtZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVhayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5wZWFrIGksIC5tZXRyaWMtdmFsdWUgaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucGVhayBpIHtcbiAgcGFkZGluZzowcHg7XG4gIC8qYm9yZGVyLXRvcC13aWR0aDogMXB4OyovXG4gIC8qYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7Ki9cbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1ldHJpYy12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6MTRweDtcbiAgLypib3JkZXItYm90dG9tOiAycHggIzAwYzBlZiBzb2xpZDsqL1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi50ZXh0LWFsZXJ0IHtcbiAgLypjb2xvcjogIzkwMDAyMDsqL1xuICBjb2xvcjogI2RiOGIwYjtcbn1cblxuLm1ldHJpYy12YWx1ZSAubWV0cmljLXVuaXQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5wZWFrIC5tZXRyaWMtdW5pdCB7XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/global-statistics/unit-formatter/unit-formatter.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/global-statistics/unit-formatter/unit-formatter.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data != null\" class=\"metric-value\">\n  <span *ngIf=\"isAlert()\" tooltip=\"{{getAlertMessage()}}\" hide-delay=\"0\" ngClass=\"{{getViolatedRuleClass()}}\">{{data.value % 1 === 0 ? data.value : data.value.toFixed(1)}} <span\n    class=\"metric-unit\">{{data.unit}}</span></span>\n  <span *ngIf=\"!isAlert()\" tooltip=\"{{label}} average\" hide-delay=\"0\">{{data.value % 1 === 0 ? data.value : data.value.toFixed(1)}} <span\n    class=\"metric-unit\">{{data.unit}}</span></span>\n</div>\n<div *ngIf=\"data != null\" class=\"peak\">\n  <span tooltip=\"{{label}} peak\" hide-delay=\"0\"><span class=\"text-muted\"><i\n    class=\"fa fa-angle-up text-red\"></i>{{data.peak}} <span\n    class=\"metric-unit\">{{data.unit}}</span></span>\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/unit-formatter/unit-formatter.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/global-statistics/unit-formatter/unit-formatter.component.ts ***!
  \******************************************************************************/
/*! exports provided: UnitFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitFormatterComponent", function() { return UnitFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_SystemMetric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/metrics/SystemMetric */ "./src/app/common/models/metrics/SystemMetric.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _utils_ConditionEvaluate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ConditionEvaluate */ "./src/app/global-statistics/utils/ConditionEvaluate.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UnitFormatterComponent = /** @class */ (function () {
    function UnitFormatterComponent() {
        this.label = '';
    }
    UnitFormatterComponent.prototype.ngOnInit = function () {
    };
    UnitFormatterComponent.prototype.isAlert = function () {
        var _this = this;
        var ruleDefinitions = this.findRulesByType(this.data.type);
        if (ruleDefinitions.length > 0) {
            return ruleDefinitions.find(function (ruleDefinition) { return _utils_ConditionEvaluate__WEBPACK_IMPORTED_MODULE_3__["ConditionEvaluate"].eval(_this.data.value, ruleDefinition); }) !== undefined;
        }
        return false;
    };
    UnitFormatterComponent.prototype.getAlertMessage = function () {
        var ruleDefinition = this.getViolatedRule();
        return this.label + ' is over ' + ruleDefinition.threshold.min + this.data.unit + ' ';
    };
    UnitFormatterComponent.prototype.findRulesByType = function (type) {
        return this.options.cellDecoratorRules.filter(function (rule) { return rule.type === type; });
    };
    UnitFormatterComponent.prototype.getViolatedRule = function () {
        var _this = this;
        var ruleDefinitions = this.findRulesByType(this.data.type);
        if (ruleDefinitions.length > 0) {
            return ruleDefinitions.find(function (ruleDefinition) { return _utils_ConditionEvaluate__WEBPACK_IMPORTED_MODULE_3__["ConditionEvaluate"].eval(_this.data.value, ruleDefinition); });
        }
    };
    UnitFormatterComponent.prototype.getViolatedRuleClass = function () {
        var ruleDefinition = this.getViolatedRule();
        if (ruleDefinition !== undefined && _utils_ConditionEvaluate__WEBPACK_IMPORTED_MODULE_3__["ConditionEvaluate"].eval(this.data.value, ruleDefinition)) {
            return ruleDefinition.threshold.alertType;
        }
        return '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UnitFormatterComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_metrics_SystemMetric__WEBPACK_IMPORTED_MODULE_1__["SystemMetric"])
    ], UnitFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiTableOptions"])
    ], UnitFormatterComponent.prototype, "options", void 0);
    UnitFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unit-formatter',
            template: __webpack_require__(/*! ./unit-formatter.component.html */ "./src/app/global-statistics/unit-formatter/unit-formatter.component.html"),
            styles: [__webpack_require__(/*! ./unit-formatter.component.css */ "./src/app/global-statistics/unit-formatter/unit-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UnitFormatterComponent);
    return UnitFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/utils/ConditionEvaluate.ts":
/*!**************************************************************!*\
  !*** ./src/app/global-statistics/utils/ConditionEvaluate.ts ***!
  \**************************************************************/
/*! exports provided: ConditionEvaluate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionEvaluate", function() { return ConditionEvaluate; });
var ConditionEvaluate = /** @class */ (function () {
    function ConditionEvaluate() {
    }
    ConditionEvaluate.eval = function (value, rule) {
        if (rule.threshold.max != null) {
            return value >= rule.threshold.min && value < rule.threshold.max;
        }
        return value > rule.threshold.min;
    };
    return ConditionEvaluate;
}());



/***/ }),

/***/ "./src/app/global-statistics/utils/SasiWeightedArithmeticMean.ts":
/*!***********************************************************************!*\
  !*** ./src/app/global-statistics/utils/SasiWeightedArithmeticMean.ts ***!
  \***********************************************************************/
/*! exports provided: SystemAggregatedStatistics, SasiWeightedArithmeticMean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemAggregatedStatistics", function() { return SystemAggregatedStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiWeightedArithmeticMean", function() { return SasiWeightedArithmeticMean; });
/* harmony import */ var _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/models/metrics/SystemMetricType */ "./src/app/common/models/metrics/SystemMetricType.ts");

// class AggregatedStatistics implements AggregatedValues {
//   physicalSubstitution = 0;
//   physicalCapacity = 0;
//   availableCapacity = 0;
//   logicalUsed = 0;
//   physicalUsed = 0;
//   compressionRatio = 0;
// }
var SystemAggregatedStatistics = /** @class */ (function () {
    function SystemAggregatedStatistics(systemName) {
        this.system = null;
        this.physicalSubstitution = 0;
        this.physicalCapacity = 0;
        this.availableCapacity = 0;
        this.logicalUsed = 0;
        this.physicalUsed = 0;
        this.compressionRatio = 0;
        this.capacityChanged1D = 0;
        this.capacityChanged1W = 0;
        this.capacityChanged1M = 0;
        this.system = systemName;
    }
    SystemAggregatedStatistics.prototype.getValue = function (name) {
        switch (name) {
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC:
                return this.physicalSubstitution;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY:
                return this.physicalCapacity;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].AVAILABLE_CAPACITY:
                return this.availableCapacity;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED_PERC:
                return this.logicalUsed;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED_PERC:
                return this.physicalUsed;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO:
                return this.compressionRatio;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1D:
                return this.capacityChanged1D;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1W:
                return this.capacityChanged1W;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1M:
                return this.capacityChanged1M;
        }
    };
    return SystemAggregatedStatistics;
}());

var SasiWeightedArithmeticMean = /** @class */ (function () {
    function SasiWeightedArithmeticMean() {
        this.systemSummarizedValues = new Array();
        this.partiallySummarizedValues = new SystemAggregatedStatistics('all');
    }
    SasiWeightedArithmeticMean.prototype.computeSummaries = function (inputRowGroup, filter, options) {
        var _this = this;
        console.log('compute');
        if (filter.length === 0) {
            return null;
        }
        this.systemSummarizedValues = new Array();
        this.partiallySummarizedValues = new SystemAggregatedStatistics('');
        var amendFilter = filter.filter(function (key) {
            var rowGroup = inputRowGroup.find(function (row) { return row.groupRow.getCell('name').value === key.groupName; });
            if (rowGroup === undefined) {
                return null;
            }
            // Todo should be some configuration for Unique id column
            var sasiRow = rowGroup.rows.find(function (row) { return row.getCell('name').value === key.rowName; });
            if (sasiRow === undefined) {
                return null;
            }
            return true;
        });
        if (amendFilter.length === 0) {
            return null;
        }
        amendFilter.forEach(function (key) {
            var rowGroup = inputRowGroup.find(function (row) { return row.groupRow.getCell('name').value === key.groupName; });
            if (rowGroup === undefined) {
                return null;
            }
            // Todo should be some configuration for Unique id column
            var sasiRow = rowGroup.rows.find(function (row) { return row.getCell('name').value === key.rowName; });
            if (sasiRow === undefined) {
                return null;
            }
            var systemStats = _this.partiallySummarizedValues;
            var physicalCapacity = _this.getMetricByName(sasiRow, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY);
            systemStats.physicalCapacity += physicalCapacity;
            systemStats.physicalSubstitution += _this.getMetricByName(sasiRow, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC) * physicalCapacity;
            systemStats.availableCapacity += _this.getMetricByName(sasiRow, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].AVAILABLE_CAPACITY);
            systemStats.logicalUsed += _this.getMetricByName(sasiRow, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED_PERC) * physicalCapacity;
            systemStats.physicalUsed += _this.getMetricByName(sasiRow, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED_PERC) * physicalCapacity;
            systemStats.compressionRatio += _this.getMetricByName(sasiRow, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO) * physicalCapacity;
            systemStats.capacityChanged1D += _this.getMetricByName(sasiRow, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1D) * physicalCapacity;
            systemStats.capacityChanged1W += _this.getMetricByName(sasiRow, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1W) * physicalCapacity;
            systemStats.capacityChanged1M += _this.getMetricByName(sasiRow, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1M) * physicalCapacity;
        });
        return this.summarizeStats(this.partiallySummarizedValues, 'all');
    };
    SasiWeightedArithmeticMean.prototype.summarizeStats = function (values, name) {
        var summarizedValues = new SystemAggregatedStatistics(name);
        summarizedValues.physicalCapacity = values.getValue(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY);
        summarizedValues.physicalSubstitution = values.getValue(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC) / summarizedValues.physicalCapacity;
        summarizedValues.availableCapacity = values.getValue(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].AVAILABLE_CAPACITY);
        summarizedValues.logicalUsed = values.getValue(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED_PERC) / summarizedValues.physicalCapacity;
        summarizedValues.physicalUsed = values.getValue(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED_PERC) / summarizedValues.physicalCapacity;
        summarizedValues.compressionRatio = values.getValue(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO) / summarizedValues.physicalCapacity;
        summarizedValues.capacityChanged1D = values.getValue(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1D) / summarizedValues.physicalCapacity;
        summarizedValues.capacityChanged1W = values.getValue(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1W) / summarizedValues.physicalCapacity;
        summarizedValues.capacityChanged1M = values.getValue(_common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1M) / summarizedValues.physicalCapacity;
        return summarizedValues;
    };
    SasiWeightedArithmeticMean.prototype.getMetricByName = function (metrics, type) {
        var metric = metrics.getCell(type);
        if (metric === null) {
            return null;
        }
        return Number(metric.value);
    };
    return SasiWeightedArithmeticMean;
}());



/***/ }),

/***/ "./src/app/global-statistics/utils/SumValueServiceImpl.ts":
/*!****************************************************************!*\
  !*** ./src/app/global-statistics/utils/SumValueServiceImpl.ts ***!
  \****************************************************************/
/*! exports provided: SumValueServiceImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumValueServiceImpl", function() { return SumValueServiceImpl; });
var SumValue = /** @class */ (function () {
    function SumValue() {
        this.data = {};
    }
    SumValue.prototype.setValue = function (name, value) {
        this.data[name] = value;
    };
    SumValue.prototype.getValue = function (name) {
        return this.data[name];
    };
    return SumValue;
}());
var SumValueServiceImpl = /** @class */ (function () {
    function SumValueServiceImpl() {
    }
    SumValueServiceImpl.prototype.computeSummaries = function (inputRowGroup, filter, options) {
        var aggregatedValues = new SumValue();
        options.getAggregatedColumns().forEach(function (column) {
            var value = inputRowGroup[0].rows.map(function (row) {
                return row.getCellValue(column);
            }).reduce(function (valueA, valueB) { return valueA + valueB; });
            aggregatedValues.setValue(column.index, value);
        });
        return aggregatedValues;
    };
    return SumValueServiceImpl;
}());



/***/ }),

/***/ "./src/app/global-statistics/utils/WeightedArithmeticMean.ts":
/*!*******************************************************************!*\
  !*** ./src/app/global-statistics/utils/WeightedArithmeticMean.ts ***!
  \*******************************************************************/
/*! exports provided: SystemAggregatedStatistics, WeightedArithmeticMean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemAggregatedStatistics", function() { return SystemAggregatedStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightedArithmeticMean", function() { return WeightedArithmeticMean; });
/* harmony import */ var _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/models/metrics/SystemMetricType */ "./src/app/common/models/metrics/SystemMetricType.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AggregatedStatistics = /** @class */ (function () {
    function AggregatedStatistics() {
        this.physicalSubstitution = 0;
        this.physicalCapacity = 0;
        this.availableCapacity = 0;
        this.logicalUsed = 0;
        this.physicalUsed = 0;
        this.compressionRatio = 0;
        this.capacityChanged1D = 0;
        this.capacityChanged1W = 0;
        this.capacityChanged1M = 0;
    }
    return AggregatedStatistics;
}());
var SystemAggregatedStatistics = /** @class */ (function (_super) {
    __extends(SystemAggregatedStatistics, _super);
    function SystemAggregatedStatistics(systemName) {
        var _this = _super.call(this) || this;
        _this.system = null;
        _this.physicalSubstitution = 0;
        _this.physicalCapacity = 0;
        _this.availableCapacity = 0;
        _this.logicalUsed = 0;
        _this.physicalUsed = 0;
        _this.compressionRatio = 0;
        _this.capacityChanged1D = 0;
        _this.capacityChanged1W = 0;
        _this.capacityChanged1M = 0;
        _this.system = systemName;
        return _this;
    }
    SystemAggregatedStatistics.prototype.getValue = function (name) {
        switch (name) {
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC:
                return this.physicalSubstitution;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY:
                return this.physicalCapacity;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].AVAILABLE_CAPACITY:
                return this.availableCapacity;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED_PERC:
                return this.logicalUsed;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED_PERC:
                return this.physicalUsed;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO:
                return this.compressionRatio;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1D:
                return this.capacityChanged1D;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1W:
                return this.capacityChanged1W;
            case _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1M:
                return this.capacityChanged1M;
        }
    };
    return SystemAggregatedStatistics;
}(AggregatedStatistics));

var WeightedArithmeticMean = /** @class */ (function () {
    function WeightedArithmeticMean() {
        this.systemSummarizedValues = new Array();
        this.partiallySummarizedValues = [];
    }
    WeightedArithmeticMean.prototype.computeSummaries = function (inputMetrics, filter) {
        var _this = this;
        if (filter.length === 0) {
            return [];
        }
        this.systemSummarizedValues = new Array();
        this.partiallySummarizedValues = [];
        filter.forEach(function (key) {
            var metrics = inputMetrics[key.poolName];
            var systemStats = _this.getSystemStatistics(key.systemName);
            if (systemStats === undefined) {
                systemStats = new SystemAggregatedStatistics(key.systemName);
                _this.partiallySummarizedValues.push(systemStats);
            }
            var physicalCapacity = _this.getMetricByName(metrics, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY);
            systemStats.physicalCapacity += physicalCapacity;
            systemStats.physicalSubstitution += _this.getMetricByName(metrics, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC) * physicalCapacity;
            systemStats.availableCapacity += _this.getMetricByName(metrics, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].AVAILABLE_CAPACITY);
            systemStats.logicalUsed += _this.getMetricByName(metrics, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED_PERC) * physicalCapacity;
            systemStats.physicalUsed += _this.getMetricByName(metrics, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED_PERC) * physicalCapacity;
            systemStats.compressionRatio += _this.getMetricByName(metrics, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO) * physicalCapacity;
            systemStats.capacityChanged1D += _this.getMetricByName(metrics, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1D) * physicalCapacity;
            systemStats.capacityChanged1W += _this.getMetricByName(metrics, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1W) * physicalCapacity;
            systemStats.capacityChanged1M += _this.getMetricByName(metrics, _common_models_metrics_SystemMetricType__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1M) * physicalCapacity;
        });
        filter.forEach(function (key) {
            var systemStats = _this.getSystemStatistics(key.systemName);
            if (systemStats === undefined) {
                return;
            }
            _this.systemSummarizedValues.push(_this.summarizeStats([systemStats], key.systemName));
        });
        this.systemSummarizedValues.push(this.summarizeStats(this.partiallySummarizedValues, 'all'));
        return this.systemSummarizedValues;
    };
    WeightedArithmeticMean.prototype.summarizeStats = function (values, name) {
        var summarizedValues = new SystemAggregatedStatistics(name);
        summarizedValues.physicalCapacity = this.sum(values, 'physicalCapacity');
        summarizedValues.physicalSubstitution = this.sum(values, 'physicalSubstitution') / summarizedValues.physicalCapacity;
        summarizedValues.availableCapacity = this.sum(values, 'availableCapacity');
        summarizedValues.logicalUsed = this.sum(values, 'logicalUsed') / summarizedValues.physicalCapacity;
        summarizedValues.physicalUsed = this.sum(values, 'physicalUsed') / summarizedValues.physicalCapacity;
        summarizedValues.compressionRatio = this.sum(values, 'compressionRatio') / summarizedValues.physicalCapacity;
        summarizedValues.capacityChanged1D = this.sum(values, 'capacityChanged1D') / summarizedValues.physicalCapacity;
        summarizedValues.capacityChanged1W = this.sum(values, 'capacityChanged1W') / summarizedValues.physicalCapacity;
        summarizedValues.capacityChanged1M = this.sum(values, 'capacityChanged1M') / summarizedValues.physicalCapacity;
        return summarizedValues;
    };
    WeightedArithmeticMean.prototype.sum = function (values, statisticsName) {
        return values
            .reduce(function (previousValue, currentValue) {
            return previousValue + currentValue[statisticsName];
        }, 0);
    };
    WeightedArithmeticMean.prototype.getSystemStatistics = function (systemName) {
        return this.partiallySummarizedValues.find(function (stats) { return stats.system === systemName; });
    };
    WeightedArithmeticMean.prototype.getMetricByName = function (metrics, type) {
        var metric = metrics.find(function (item) { return item.type === type; });
        if (metric === undefined) {
            return null;
        }
        return metric.value;
    };
    return WeightedArithmeticMean;
}());



/***/ }),

/***/ "./src/app/global-statistics/utils/seconds-2-full-time.pipe.ts":
/*!*********************************************************************!*\
  !*** ./src/app/global-statistics/utils/seconds-2-full-time.pipe.ts ***!
  \*********************************************************************/
/*! exports provided: Seconds2FullTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seconds2FullTimePipe", function() { return Seconds2FullTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Seconds2FullTimePipe = /** @class */ (function () {
    function Seconds2FullTimePipe() {
    }
    Seconds2FullTimePipe_1 = Seconds2FullTimePipe;
    Seconds2FullTimePipe.prototype.transform = function (value) {
        var hours = Math.floor(value / Seconds2FullTimePipe_1.SECONDS_IN_HOUR);
        var minutes = Math.floor((value - (hours * Seconds2FullTimePipe_1.SECONDS_IN_HOUR)) / Seconds2FullTimePipe_1.SECONDS_IN_MINUTE);
        var seconds = value - (hours * Seconds2FullTimePipe_1.SECONDS_IN_HOUR) - (minutes * Seconds2FullTimePipe_1.SECONDS_IN_MINUTE);
        return hours.toFixed(0).padStart(2, '0') +
            ':' + minutes.toFixed(0).padStart(2, '0') +
            ':' + seconds.toFixed(0).padStart(2, '0');
    };
    var Seconds2FullTimePipe_1;
    Seconds2FullTimePipe.SECONDS_IN_HOUR = 3600;
    Seconds2FullTimePipe.SECONDS_IN_MINUTE = 60;
    Seconds2FullTimePipe = Seconds2FullTimePipe_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'seconds2FullTime'
        })
    ], Seconds2FullTimePipe);
    return Seconds2FullTimePipe;
}());



/***/ }),

/***/ "./src/app/metric.service.ts":
/*!***********************************!*\
  !*** ./src/app/metric.service.ts ***!
  \***********************************/
/*! exports provided: PeriodType, MetricService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodType", function() { return PeriodType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricService", function() { return MetricService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PeriodType;
(function (PeriodType) {
    PeriodType[PeriodType["DAY"] = 0] = "DAY";
    PeriodType[PeriodType["WEEK"] = 1] = "WEEK";
    PeriodType[PeriodType["MONTH"] = 2] = "MONTH";
})(PeriodType || (PeriodType = {}));
var MetricService = /** @class */ (function () {
    function MetricService(http) {
        this.http = http;
        this.currentDate = new Date();
        this.getDatacenters();
    }
    MetricService.prototype.getInfrastructureStats = function () {
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/infrastructureMetric.json');
        return this.http.get(url);
    };
    MetricService.prototype.getDatacenters = function () {
        var _this = this;
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters');
        var dtoObservable = this.http.get(url);
        dtoObservable.subscribe(function (dto) { return _this.infrastructure = dto.datacenters; });
        return dtoObservable;
    };
    MetricService.prototype.getSystemName = function (datacenterId, systemId) {
        var datacenterObj = this.infrastructure.find(function (datacenter) { return datacenter.id.toString() === datacenterId; });
        if (datacenterObj === undefined) {
            return '';
        }
        var systemObj = datacenterObj.systems.find(function (system) { return system.id.toString() === systemId; });
        if (systemObj === undefined) {
            return '';
        }
        return datacenterObj.systems.find(function (system) { return system.id.toString() === systemId; }).name;
    };
    MetricService.prototype.getPerformanceStatistics = function (id, period) {
        if (id !== undefined) {
            var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters/' + id + '/performance');
            return this.http.get(url);
        }
    };
    MetricService.prototype.getCapacityStatistics = function (id) {
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters/' + id + '/capacity');
        return this.http.get(url);
    };
    MetricService.prototype.getDpSlaStatistics = function (id, period) {
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters/' + id + '/sla');
        return this.http.get(url);
    };
    MetricService.prototype.getAdaptersStatistics = function (id, period) {
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters/' + id + '/adapters');
        return this.http.get(url);
    };
    MetricService.prototype.getSuffix = function (period) {
        var suffix = '';
        switch (period) {
            case PeriodType.WEEK:
                suffix = '_week';
                break;
            case PeriodType.MONTH:
                suffix = '_month';
                break;
            default:
                suffix = '_day';
        }
        return suffix;
    };
    MetricService.prototype.buildUrl = function (baseUrl, basePath) {
        return baseUrl + basePath + '?t=' + this.generateSaltValue() + '&date=' + this.generateDate();
    };
    MetricService.prototype.generateSaltValue = function () {
        return Math.random().toString(36).substring(2, 15);
    };
    MetricService.prototype.generateDate = function () {
        var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US');
        return pipe.transform(this.currentDate, 'yyyy-MM-dd');
        // return '2019-06-18';
    };
    MetricService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MetricService);
    return MetricService;
}());



/***/ }),

/***/ "./src/app/period.service.ts":
/*!***********************************!*\
  !*** ./src/app/period.service.ts ***!
  \***********************************/
/*! exports provided: PeriodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodService", function() { return PeriodService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PeriodService = /** @class */ (function () {
    function PeriodService() {
        // Observable string sources
        this.periodAnnoucement = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.periodEnableAnnoucement = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable string streams
        this.periodAnnouncement$ = this.periodAnnoucement.asObservable();
        this.periodEnableAnnouncement = this.periodEnableAnnoucement.asObservable();
    }
    // Service message commands
    PeriodService.prototype.announcePeriod = function (id) {
        this.periodAnnoucement.next(id);
    };
    PeriodService.prototype.announceEnablePeriod = function (enable) {
        this.periodEnableAnnoucement.next(enable);
    };
    PeriodService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], PeriodService);
    return PeriodService;
}());



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
var environment = {
    production: false,
    iframeBaseUrl: 'http://static-web.local/',
    metricsBaseUrl: 'http://localhost:3000/api',
    logoUrl: 'http://pluspng.com/img-png/dhl-png-file-dhl-logo-svg-1280.png'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ivan/www/sa-new-ui-ts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map