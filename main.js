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

module.exports = "<app-header></app-header>\n<app-side-menu></app-side-menu>\n<ngx-spinner\n  bdColor=\"rgba(34, 45, 50, 0.5)\"\n  size=\"medium\"\n  color=\"#3c8dbc\"\n  type=\"line-scale\"\n  [fullScreen]=\"false\"\n  fullScreen=\"false\"\n>\n  <p style=\"color: #3c8dbc\"> Loading... </p>\n</ngx-spinner>\n<div class=\"content-wrapper\">\n  <section class=\"container-fluid\">\n    <router-outlet></router-outlet>\n  </section>\n</div>\n\n"

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
/*! exports provided: httpInterceptorProviders, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/side-menu/side-menu.component */ "./src/app/components/side-menu/side-menu.component.ts");
/* harmony import */ var _components_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/iframe/iframe.component */ "./src/app/components/iframe/iframe.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _global_statistics_global_statistics_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global-statistics/global-statistics.module */ "./src/app/global-statistics/global-statistics.module.ts");
/* harmony import */ var _common_sa_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/sa-common.module */ "./src/app/common/sa-common.module.ts");
/* harmony import */ var _common_utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/utils/system-pool-2-sasi-group-table.pipe */ "./src/app/common/utils/system-pool-2-sasi-group-table.pipe.ts");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
/* harmony import */ var _components_dashboard_charts_region_donut_region_donut_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dashboard/charts/region-donut/region-donut.component */ "./src/app/components/dashboard/charts/region-donut/region-donut.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_dashboard_charts_history_chart_history_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboard/charts/history-chart/history-chart.component */ "./src/app/components/dashboard/charts/history-chart/history-chart.component.ts");
/* harmony import */ var _components_dashboard_charts_capacity_history_chart_capacity_history_chart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/dashboard/charts/capacity-history-chart/capacity-history-chart.component */ "./src/app/components/dashboard/charts/capacity-history-chart/capacity-history-chart.component.ts");
/* harmony import */ var _components_dashboard_charts_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/dashboard/charts/bar-chart/bar-chart.component */ "./src/app/components/dashboard/charts/bar-chart/bar-chart.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _http_loading_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./http-loading.interceptor */ "./src/app/http-loading.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _http_loading_interceptor__WEBPACK_IMPORTED_MODULE_21__["HttpLoading"], multi: true },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_6__["SideMenuComponent"],
                _components_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_7__["IframeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _components_dashboard_charts_region_donut_region_donut_component__WEBPACK_IMPORTED_MODULE_13__["RegionDonutComponent"],
                _components_dashboard_charts_history_chart_history_chart_component__WEBPACK_IMPORTED_MODULE_17__["HistoryChartComponent"],
                _components_dashboard_charts_capacity_history_chart_capacity_history_chart_component__WEBPACK_IMPORTED_MODULE_18__["CapacityHistoryChartComponent"],
                _components_dashboard_charts_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_19__["BarChartComponent"],
            ],
            imports: [
                _global_statistics_global_statistics_module__WEBPACK_IMPORTED_MODULE_9__["GlobalStatisticsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_store__WEBPACK_IMPORTED_MODULE_15__["WebStorageModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _common_sa_common_module__WEBPACK_IMPORTED_MODULE_10__["SaCommonModule"],
                ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__["NgApexchartsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"],
            ],
            providers: [_common_utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_11__["SystemPool2SasiGroupTablePipe"], httpInterceptorProviders],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/components/info-box/alert-info-box.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/common/components/info-box/alert-info-box.component.ts ***!
  \************************************************************************/
/*! exports provided: AlertInfoBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertInfoBoxComponent", function() { return AlertInfoBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/metrics/entity-type.enum */ "./src/app/common/models/metrics/entity-type.enum.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _models_metrics_alert_vo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/metrics/alert.vo */ "./src/app/common/models/metrics/alert.vo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlertInfoBoxComponent = /** @class */ (function () {
    function AlertInfoBoxComponent(route, router, metric) {
        this.route = route;
        this.router = router;
        this.metric = metric;
        this.minValue = 0;
        this.maxValue = 0;
        this.threshold = 0;
        this.icon = '';
        this.data = [];
        this.entityType = _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__["EntityType"];
        this.modalState = 'close';
    }
    AlertInfoBoxComponent.prototype.ngOnInit = function () {
        if (this.data.length > 0) {
            var result = this.data.sort(function (occurence1, occurrence2) {
                return occurrence2.value - occurence1.value;
            });
        }
        this.value = this.alert.occurrences.length;
        this.data = this.alert.occurrences;
        this.minValue = this.alert.minValue;
        this.maxValue = this.alert.maxValue;
        this.infoBoxTooltip = this.getThresholdMessage(this.alert.type, this.alert.minValue, this.alert.maxValue, this.alert.unit);
    };
    AlertInfoBoxComponent.prototype.isOverThreshold = function () {
        return this.value > this.threshold;
    };
    AlertInfoBoxComponent.prototype.openModal = function () {
        this.modalState = 'open';
    };
    AlertInfoBoxComponent.prototype.closeModal = function () {
        this.modalState = 'close';
    };
    AlertInfoBoxComponent.prototype.isModalOpened = function () {
        return this.modalState === 'open';
    };
    AlertInfoBoxComponent.prototype.getIframeLink = function (entityType) {
        switch (entityType) {
            case _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__["EntityType"].ADAPTER:
                return 'adapters';
            case _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__["EntityType"].POOL:
                return 'capacityAnalysis';
            case _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__["EntityType"].SYSTEM:
                return 'dashboard';
        }
    };
    AlertInfoBoxComponent.prototype.getThresholdMessage = function (type, minValue, maxValue, unit) {
        if (maxValue == null && minValue == null) {
            return 'Everything works right!';
        }
        var sanitizeUnit = unit;
        if (sanitizeUnit == null) {
            sanitizeUnit = '';
        }
        if (maxValue == null) {
            return this.label + " over " + minValue + sanitizeUnit;
        }
        if (minValue == null) {
            return this.label + " under " + maxValue + sanitizeUnit;
        }
        return this.label + " between " + minValue + sanitizeUnit + " and " + maxValue + sanitizeUnit;
    };
    AlertInfoBoxComponent.prototype.getContext = function (entityType) {
        switch (entityType) {
            case _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__["EntityType"].ADAPTER:
            case _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__["EntityType"].PORT:
                return 'adapters';
            case _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__["EntityType"].POOL:
                return 'capacityAnalysis';
            case _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__["EntityType"].SYSTEM:
                return 'dashboard';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AlertInfoBoxComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AlertInfoBoxComponent.prototype, "context", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlertInfoBoxComponent.prototype, "threshold", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlertInfoBoxComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_metrics_alert_vo__WEBPACK_IMPORTED_MODULE_4__["Alert"])
    ], AlertInfoBoxComponent.prototype, "alert", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AlertInfoBoxComponent.prototype, "infoBoxTooltip", void 0);
    AlertInfoBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert-info-box',
            template: __webpack_require__(/*! ./info-box.component.html */ "./src/app/common/components/info-box/info-box.component.html"),
            styles: [__webpack_require__(/*! ./info-box.component.css */ "./src/app/common/components/info-box/info-box.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _metric_service__WEBPACK_IMPORTED_MODULE_3__["MetricService"]])
    ], AlertInfoBoxComponent);
    return AlertInfoBoxComponent;
}());



/***/ }),

/***/ "./src/app/common/components/info-box/info-box.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/common/components/info-box/info-box.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.modal.open {\n  display: block;\n  padding-right: 15px;\n}\n\n.info-box-number {\n  font-size: 25px;\n}\n\n.info-box-text {\n  font-size: 17px;\n}\n\n.cut-text {\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: 80%;\n  height: 1.2em;\n  white-space: nowrap;\n}\n\n.modal-content {\n  overflow: scroll;\n  height: 700px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.cursor {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvaW5mby1ib3gvaW5mby1ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2luZm8tYm94L2luZm8tYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubW9kYWwub3BlbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uaW5mby1ib3gtbnVtYmVyIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaW5mby1ib3gtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmN1dC10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIGhlaWdodDogMS4yZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/common/components/info-box/info-box.component.html":
/*!********************************************************************!*\
  !*** ./src/app/common/components/info-box/info-box.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-box\">\n\n  <span *ngIf=\"isOverThreshold()\" [tooltip]=\"infoBoxTooltip\" class=\"info-box-icon bg-orange info-box-icon cursor\"\n        (click)=\"openModal()\">\n    <i class=\"fa fa-exclamation-triangle\"></i>\n  </span>\n  <span *ngIf=\"!isOverThreshold()\" class=\"info-box-icon bg-green\">\n    <i class=\"fa {{icon}}\"></i>\n  </span>\n\n  <div class=\"info-box-content\">\n    <span class=\"info-box-text\">{{label}}</span>\n    <span class=\"info-box-number\">{{value}}<small></small></span>\n    <div class=\"cut-text\">\n    <span *ngIf=\"data.length > 0\">\n      |<span *ngFor=\"let occurence of data; let i = index;\">\n        <span *ngIf=\"i < 10\"><a [routerLink]=\"'/global-statistics/' + context + '/' + occurence.datacenterId\">\n          {{metric.getSystemName(occurence.datacenterId, occurence.systemId)}}</a> |\n          </span>\n      </span>\n    </span>\n    </div>\n    <span *ngIf=\"data.length > 2\"><a class=\"small-box-footer\" href=\"#\" [class.hidden]=\"!isOverThreshold()\"\n                                     (click)=\"openModal()\"> >>> </a> </span>\n  </div>\n  <!-- /.info-box-content -->\n</div>\n<div class=\"modal fade in\" id=\"modal-default\" [class.open]=\"isModalOpened()\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" (click)=\"closeModal()\">×</span></button>\n        <h4 class=\"modal-title\">{{label}}</h4>\n      </div>\n      <div class=\"modal-body\" *ngIf=\"data.length > 0\">\n        <table class=\"table table-bordered\">\n          <thead>\n          <tr>\n            <th>System</th>\n            <th *ngIf=\"data[0].entityType === entityType.POOL\">Pool</th>\n            <th *ngIf=\"data[0].entityType === entityType.ADAPTER || data[0].middleEntityType === entityType.ADAPTER\">\n              Adapter\n            </th>\n            <th *ngIf=\"data[0].entityType === entityType.PORT\">Port</th>\n            <th>Value</th>\n          </tr>\n          </thead>\n          <tr *ngFor=\"let occurence of data\">\n            <td *ngIf=\"occurence.entityType !== null\">\n              <span><a [routerLink]=\"'/global-statistics/' + context + '/' + occurence.datacenterId\">\n                {{metric.getSystemName(occurence.datacenterId, occurence.systemId)}}</a>\n              </span>\n            </td>\n            <td *ngIf=\"occurence.entityType === entityType.POOL || occurence.entityType === entityType.ADAPTER \">\n              <span><a [routerLink]=\"'/global-statistics/' + context + '/' + occurence.datacenterId\">\n                {{occurence.name}}</a>\n              </span>\n            </td>\n            <td *ngIf=\"occurence.middleEntityType === entityType.ADAPTER\">\n              <span><a [routerLink]=\"'/global-statistics/' + context + '/' + occurence.datacenterId\">\n                {{occurence.middleEntityName}}</a>\n              </span>\n            </td>\n            <td *ngIf=\"occurence.entityType === entityType.PORT\">\n              <span><a [routerLink]=\"'/global-statistics/' + context + '/' + occurence.datacenterId\">\n                {{occurence.name}}</a>\n              </span>\n            </td>\n            <td>\n              {{occurence.value}} {{occurence.unit}}\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default pull-left\" data-dismiss=\"modal\" (click)=\"closeModal()\">Close\n        </button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n"

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
/* harmony import */ var _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/metrics/entity-type.enum */ "./src/app/common/models/metrics/entity-type.enum.ts");
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
        this.minValue = 0;
        this.maxValue = 0;
        this.threshold = 0;
        this.icon = '';
        this.data = [];
        this.entityType = _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__["EntityType"];
        this.modalState = 'close';
    }
    InfoBoxComponent.prototype.ngOnInit = function () {
        if (this.data.length > 0) {
            this.data.sort(function (occurence1, occurrence2) {
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
    InfoBoxComponent.prototype.getIframeLink = function (entityType) {
        switch (entityType) {
            case _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__["EntityType"].ADAPTER:
            case _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__["EntityType"].PORT:
                return 'adapters';
            case _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__["EntityType"].POOL:
                return 'capacityAnalysis';
            case _models_metrics_entity_type_enum__WEBPACK_IMPORTED_MODULE_2__["EntityType"].SYSTEM:
                return 'dashboard';
        }
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
    ], InfoBoxComponent.prototype, "minValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoBoxComponent.prototype, "maxValue", void 0);
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InfoBoxComponent.prototype, "infoBoxTooltip", void 0);
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
/* harmony import */ var _models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/metrics/metric.vo */ "./src/app/common/models/metrics/metric.vo.ts");
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
        __metadata("design:type", _models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_1__["Metric"])
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

/***/ "./src/app/common/components/route-link-formatter/route-link-formatter.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/common/components/route-link-formatter/route-link-formatter.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".system-name {\n  font-size: 14px;\n  -webkit-text-decoration: #0b3e6f underline;\n          text-decoration: #0b3e6f underline;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvcm91dGUtbGluay1mb3JtYXR0ZXIvcm91dGUtbGluay1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL3JvdXRlLWxpbmstZm9ybWF0dGVyL3JvdXRlLWxpbmstZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3lzdGVtLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogIzBiM2U2ZiB1bmRlcmxpbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/common/components/route-link-formatter/route-link-formatter.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/common/components/route-link-formatter/route-link-formatter.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<span [className]=\"getAlertType(pool, type)\">-->\n<span *ngIf=\"data != null\">\n  <span class=\"system-name\"><a\n    [routerLink]=\"data.id | iframeUrlCreator: {iframeLink:data.iFrameLink, anchor: data.value}\">{{data.value}}</a></span>\n</span>\n"

/***/ }),

/***/ "./src/app/common/components/route-link-formatter/route-link-formatter.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/common/components/route-link-formatter/route-link-formatter.component.ts ***!
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
            selector: 'app-route-link-formatter',
            template: __webpack_require__(/*! ./route-link-formatter.component.html */ "./src/app/common/components/route-link-formatter/route-link-formatter.component.html"),
            styles: [__webpack_require__(/*! ./route-link-formatter.component.css */ "./src/app/common/components/route-link-formatter/route-link-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RouteLinkFormatterComponent);
    return RouteLinkFormatterComponent;
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
            template: '<ng-template appFormatterHost></ng-template>',
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

/***/ "./src/app/common/components/sasi-table/group-sort-aggregate-value.impl.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/group-sort-aggregate-value.impl.ts ***!
  \*********************************************************************************/
/*! exports provided: GroupSortAggregateValueImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSortAggregateValueImpl", function() { return GroupSortAggregateValueImpl; });
/* harmony import */ var _simple_sort_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-sort-impl */ "./src/app/common/components/sasi-table/simple-sort-impl.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GroupSortAggregateValueImpl = /** @class */ (function (_super) {
    __extends(GroupSortAggregateValueImpl, _super);
    function GroupSortAggregateValueImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupSortAggregateValueImpl.prototype.sort = function (data, column, sortType, sortByRawValue) {
        var _this = this;
        data.forEach(function (groupRow) { return groupRow.rows = _super.prototype.sort.call(_this, groupRow.rows, column, sortType, sortByRawValue, function (row, columnIndex) {
            if (row !== undefined) {
                return row.getCellValue(columnIndex);
            }
            return null;
        }); });
        if (column.index === 'name') {
            return _super.prototype.sort.call(this, data, column, sortType, sortByRawValue, function (row, columnIndex) {
                if (row !== undefined) {
                    return row.groupRow.getCellValue(columnIndex);
                }
                return null;
            });
        }
        else {
            return _super.prototype.sort.call(this, data, column, sortType, sortByRawValue, function (row, columnIndex) {
                if (row !== undefined && row.rows[0] !== undefined) {
                    return row.aggregatedValues.getValue(columnIndex.index).value;
                }
                return null;
            });
        }
    };
    return GroupSortAggregateValueImpl;
}(_simple_sort_impl__WEBPACK_IMPORTED_MODULE_0__["SimpleSortImpl"]));



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
    };
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
        data.forEach(function (groupRow) { return groupRow.rows = _super.prototype.sort.call(_this, groupRow.rows, column, sortType, sortByRawValue, function (row, columnIndex) {
            if (row !== undefined) {
                return row.getCellValue(columnIndex);
            }
            return null;
        }); });
        if (column.index === 'name') {
            return _super.prototype.sort.call(this, data, column, sortType, sortByRawValue, function (row, columnIndex) {
                if (row !== undefined) {
                    return row.groupRow.getCellValue(columnIndex);
                }
                return null;
            });
        }
        else {
            return _super.prototype.sort.call(this, data, column, sortType, sortByRawValue, function (row, columnIndex) {
                if (row !== undefined && row.rows[0] !== undefined) {
                    return row.rows[0].getCellValue(columnIndex);
                }
                return null;
            });
        }
    };
    return GroupSortImpl;
}(_simple_sort_impl__WEBPACK_IMPORTED_MODULE_0__["SimpleSortImpl"]));



/***/ }),

/***/ "./src/app/common/components/sasi-table/highlight-column.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/highlight-column.service.ts ***!
  \**************************************************************************/
/*! exports provided: HighlightColumnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightColumnService", function() { return HighlightColumnService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HighlightColumnService = /** @class */ (function () {
    function HighlightColumnService() {
        // Observable string sources
        this.highlightColumn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable string streams
        this.highlightColumn$ = this.highlightColumn.asObservable();
    }
    // Service message commands
    HighlightColumnService.prototype.setHighlightColumn = function (value) {
        // console.log('Highlight column: ' + value);
        this.highlightColumn.next(value);
    };
    HighlightColumnService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], HighlightColumnService);
    return HighlightColumnService;
}());



/***/ }),

/***/ "./src/app/common/components/sasi-table/on-select.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/common/components/sasi-table/on-select.service.ts ***!
  \*******************************************************************/
/*! exports provided: OnSelectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnSelectService", function() { return OnSelectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OnSelectService = /** @class */ (function () {
    function OnSelectService() {
        // Observable string sources
        this.selectAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable string streams
        this.selectAll$ = this.selectAll.asObservable();
    }
    // Service message commands
    OnSelectService.prototype.announceSelectAll = function (value) {
        this.selectAll.next(value);
    };
    OnSelectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], OnSelectService);
    return OnSelectService;
}());



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
        componentRef.instance.selectedRows = this.selectedRows;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RowDynamicComponent.prototype, "selectedRows", void 0);
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

module.exports = ".col-control {\n  width: 3.5%;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.col {\n  /*width: 13.33%;*/\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.col-control i {\n  font-size: 11px;\n  padding: 5px;\n}\n\n.col-control:after {\n  content: \"\";\n  font-size: 11px;\n  padding: 3px;\n}\n\n/**** Data group header ****/\n\n.table-group-header > div.table-group-label > div[class^=\"col\"],\n.table-group-header > div.table-group-label > div.ignore > div {\n  /*text-align: center;*/\n  border-right: 1px #EAEAEA solid;\n  margin: 2px 0px 2px 0px;\n  font-weight: bold;\n}\n\n.table-group-header > div:first-child {\n  /*background-color: #BBD9E6;*/\n  color: #35516A;\n  /*padding: 10px 0px 10px 0px;*/\n  /*border-top: 3px solid #EAEAEA;*/\n  border-bottom: 3px solid #EAEAEA;\n  /*margin-top: 10px;*/\n}\n\n.table-group-header > div:first-child > div.col:last-child {\n  border-right: none;\n}\n\napp-row-table {\n  display: block;\n}\n\napp-row-table.striped-row:nth-of-type(odd) {\n  background-color: #f3f8fa;\n}\n\n.col-label {\n  display: inline-block;\n  text-align: center;\n  /*width: 100%;*/\n}\n\n.highlightColumn {\n  background-color: #b4d1ee !important;\n  color: #3A738C;\n  /*padding:0px;*/\n}\n\n.text-alert-yellow {\n  color: #ffd829;\n}\n\n.table-group-header > div.table-group-label > div.alt-border {\n  /*border-left: 2px dotted darkgrey;*/\n  border-right: 2px dotted darkgrey;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvc2FzaS10YWJsZS9yb3ctZ3JvdXAtdGFibGUvcm93LWdyb3VwLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUdBLDRCQUE0Qjs7QUFDNUI7O0VBRUUsc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY29tcG9uZW50cy9zYXNpLXRhYmxlL3Jvdy1ncm91cC10YWJsZS9yb3ctZ3JvdXAtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtY29udHJvbCB7XG4gIHdpZHRoOiAzLjUlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jb2wge1xuICAvKndpZHRoOiAxMy4zMyU7Ki9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sLWNvbnRyb2wgaSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uY29sLWNvbnRyb2w6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuXG4vKioqKiBEYXRhIGdyb3VwIGhlYWRlciAqKioqL1xuLnRhYmxlLWdyb3VwLWhlYWRlciA+IGRpdi50YWJsZS1ncm91cC1sYWJlbCA+IGRpdltjbGFzc149XCJjb2xcIl0sXG4udGFibGUtZ3JvdXAtaGVhZGVyID4gZGl2LnRhYmxlLWdyb3VwLWxhYmVsID4gZGl2Lmlnbm9yZSA+IGRpdiB7XG4gIC8qdGV4dC1hbGlnbjogY2VudGVyOyovXG4gIGJvcmRlci1yaWdodDogMXB4ICNFQUVBRUEgc29saWQ7XG4gIG1hcmdpbjogMnB4IDBweCAycHggMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhYmxlLWdyb3VwLWhlYWRlciA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI0JCRDlFNjsqL1xuICBjb2xvcjogIzM1NTE2QTtcbiAgLypwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDsqL1xuICAvKmJvcmRlci10b3A6IDNweCBzb2xpZCAjRUFFQUVBOyovXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRUFFQUVBO1xuICAvKm1hcmdpbi10b3A6IDEwcHg7Ki9cbn1cblxuLnRhYmxlLWdyb3VwLWhlYWRlciA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdi5jb2w6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuYXBwLXJvdy10YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5hcHAtcm93LXRhYmxlLnN0cmlwZWQtcm93Om50aC1vZi10eXBlKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmOGZhO1xufVxuXG4uY29sLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qd2lkdGg6IDEwMCU7Ki9cbn1cblxuLmhpZ2hsaWdodENvbHVtbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGQxZWUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzQTczOEM7XG4gIC8qcGFkZGluZzowcHg7Ki9cbn1cblxuLnRleHQtYWxlcnQteWVsbG93IHtcbiAgY29sb3I6ICNmZmQ4Mjk7XG59XG5cbi50YWJsZS1ncm91cC1oZWFkZXIgPiBkaXYudGFibGUtZ3JvdXAtbGFiZWwgPiBkaXYuYWx0LWJvcmRlciB7XG4gIC8qYm9yZGVyLWxlZnQ6IDJweCBkb3R0ZWQgZGFya2dyZXk7Ki9cbiAgYm9yZGVyLXJpZ2h0OiAycHggZG90dGVkIGRhcmtncmV5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/row-group-table/row-group-table.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n          SYSTEM PART\n        -->\n<div class=\"table-group-header\">\n  <!--\n    SYSTEM LABEL\n  -->\n  <div class=\"table-group-label\">\n    <div class=\"col-val col-control text-center\">\n      <i class=\"fa expand-collapse\"\n         [@iconRotate]=\"isCollapsed(data.groupRow.getCell('name').value)\"\n         [ngClass]=\"'fa-angle-down'\"\n         (click)=\"addCollapsed(data.groupRow.getCell('name').value)\"\n         [tooltip]=\"isCollapsed(data.groupRow.getCell('name').value) ? 'Expand':'Collapse'\"></i>\n\n    </div>\n    <div class=\"col-val col-control text-center\" *ngIf=\"options.isDataGrouped && options.cellDecoratorRules.length > 0\">\n      <span *ngFor=\"let alertSum of alertSummary\">\n        <span [ngClass]=\"alertSum.type\"><i tooltip=\"Warning for one or more metrics\" class=\"fa fa-exclamation-triangle\"\n                                           [ngClass]=\"alertSum.type\"></i></span>\n      </span>\n    </div>\n    <div class=\"col-val col-label\" [style.width.%]=\"options.getColumnWidth(options.columns[0].index)\"\n         (mouseout)=\"setHighlightedColumn(-1)\"\n         (mouseover)=\"setHighlightedColumn(0)\"\n         [class.highlightColumn]=\"isColumnHighlighted(0)\">\n      <app-cell-table\n        [componentFormatter]=\"options.grIndexComponentFormatter\" [data]=\"data.groupRow.getCell('name').rawData\"\n        [label]=\"''\"\n        [options]=\"options\"\n\n      ></app-cell-table>\n    </div>\n    <div class=\"col-val col aggregated-data\" *ngFor=\"let column of options.getDataColumns(); let colIndex=index\"\n         [style.width.%]=\"options.getColumnWidth(column.index)\"\n         (mouseout)=\"setHighlightedColumn(-1)\"\n         (mouseover)=\"setHighlightedColumn(colIndex+1)\"\n         [class.highlightColumn]=\"isColumnHighlighted(colIndex+1)\"\n         [class.text-right]=\"options.columnAlign === 'right'\"\n         [class.text-center]=\"options.columnAlign !== 'right'\"\n         [class.alt-border]=\"column.altBorder\"\n\n    >\n      <app-cell-table *ngIf=\"aggregatedValues[column.index] !== undefined\" [componentFormatter]=\"column.aggComponent\"\n                      [data]=\"getAggregatedValue(column.index)\" [column]=\"column\"\n                      [label]=\"column.label\" [options]=\"options\"\n      ></app-cell-table>\n    </div>\n  </div>\n  <!---->\n  <!--POOL ROWS-->\n  <!---->\n  <div class=\"groupped-data\" [@slideInOut]=\"isCollapsed(data.groupRow.getCell('name').value)\">\n    <app-row-table *ngFor=\"let row of data.rows\"\n                   [class.striped-row]=\"options.isDataGrouped\" [data]=\"row\" [options]=\"options\"\n                   [groupName]=\"data.groupRow.getCell('name').value\"\n                   (selectEmit)=\"onSelectRow($event)\"\n    ></app-row-table>\n  </div>\n</div>\n"

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
/* harmony import */ var _global_statistics_utils_condition_evaluate_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global-statistics/utils/condition-evaluate.utils */ "./src/app/global-statistics/utils/condition-evaluate.utils.ts");
/* harmony import */ var _highlight_column_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../highlight-column.service */ "./src/app/common/components/sasi-table/highlight-column.service.ts");
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
    function RowGroupTableComponent(localStorageService, highlightColumnService, cd) {
        this.localStorageService = localStorageService;
        this.highlightColumnService = highlightColumnService;
        this.cd = cd;
        this.columnHighlightEnable = false;
        this.highlightedColumn = -1;
        this.aggregatedValues = {};
        this.collapsedRows = [];
        this.alertSummary = [];
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
        this.highlightColumnService.highlightColumn$.subscribe(function (columnIndex) {
            // console.log('Setting in row: ' + columnIndex);
            _this.highlightedColumn = columnIndex;
            _this.cd.markForCheck();
        });
        this.selectedRows = this.localStorageService.get(this.options.storageNamePrefix + '_selected');
        this.collapsedRows = this.localStorageService.get(this.options.storageNamePrefix + '_collapsed');
        if (this.selectedRows == null) {
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
        this.highlightColumnService.setHighlightColumn(column);
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
            this.options.getAggregatedColumns().forEach(function (column) { return result[column.index] = {
                value: values.getValue(column.index).value,
                unit: values.getValue(column.index).unit
            }; });
        }
        this.data.aggregatedValues = values;
        this.aggregatedValues = result;
    };
    RowGroupTableComponent.prototype.summarizeAlerts = function () {
        var _this = this;
        this.initializeSummaryAlerts();
        this.options.cellDecoratorRules.forEach(function (rule) {
            var filteredData = _this.data.rows.filter(function (row) {
                var cell = row.getCell(rule.type);
                return cell != null ? _global_statistics_utils_condition_evaluate_utils__WEBPACK_IMPORTED_MODULE_4__["ConditionEvaluateUtils"].eval(cell.value, rule) : false;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RowGroupTableComponent.prototype, "selectedRows", void 0);
    RowGroupTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-row-group-table',
            template: __webpack_require__(/*! ./row-group-table.component.html */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.html"),
            animations: _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["slideInOutAnimation"],
            styles: [__webpack_require__(/*! ./row-group-table.component.css */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_store__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _highlight_column_service__WEBPACK_IMPORTED_MODULE_5__["HighlightColumnService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
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

module.exports = "/*** Layout table ***/\n.col-control {\n  width: 3.5%;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n}\n.col {\n  /*width: 13.33%;*/\n  display: inline-block;\n  vertical-align: middle;\n}\n.col-control i {\n  font-size: 11px;\n  padding: 3px;\n  cursor: pointer;\n}\n.col-control:after {\n  content: \"\";\n  font-size: 11px;\n  padding: 3px;\n}\n/**** Table data ****/\n.table-data {\n  width: 100%;\n}\n.table-data > div {\n  /*text-align: center;*/\n  border-right: 1px #EAEAEA solid;\n  display: inline-block;\n  vertical-align: middle;\n  margin: auto;\n}\n.selectedRow {\n  background-color: #BEECD1;\n  color: #3A738C;\n}\n.table-data .highlightColumn {\n  background-color: #b4d1ee !important;\n  color: #3A738C;\n}\n.highlight-row:hover {\n  background-color: #b4d1ee !important;\n  color: #3A738C;\n}\n.table-data div.alt-border {\n  /*border-left: 1px solid black;*/\n  border-right: 2px dotted darkgrey;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvc2FzaS10YWJsZS9yb3ctdGFibGUvcm93LXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGlDQUFpQztBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL3Nhc2ktdGFibGUvcm93LXRhYmxlL3Jvdy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBMYXlvdXQgdGFibGUgKioqL1xuLmNvbC1jb250cm9sIHtcbiAgd2lkdGg6IDMuNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sIHtcbiAgLyp3aWR0aDogMTMuMzMlOyovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbC1jb250cm9sIGkge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29sLWNvbnRyb2w6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLyoqKiogVGFibGUgZGF0YSAqKioqL1xuLnRhYmxlLWRhdGEge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRhYmxlLWRhdGEgPiBkaXYge1xuICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xuICBib3JkZXItcmlnaHQ6IDFweCAjRUFFQUVBIHNvbGlkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNlbGVjdGVkUm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JFRUNEMTtcbiAgY29sb3I6ICMzQTczOEM7XG59XG5cbi50YWJsZS1kYXRhIC5oaWdobGlnaHRDb2x1bW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRkMWVlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjM0E3MzhDO1xufVxuXG4uaGlnaGxpZ2h0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGQxZWUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzQTczOEM7XG59XG5cbi50YWJsZS1kYXRhIGRpdi5hbHQtYm9yZGVyIHtcbiAgLypib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrOyovXG4gIGJvcmRlci1yaWdodDogMnB4IGRvdHRlZCBkYXJrZ3JleTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/common/components/sasi-table/row-table/row-table.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/row-table/row-table.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-data \" [class.selectedRow]=\"isSelectedRow(data.getCell('name').value)\"\n     [class.highlight-row]=\"options.highlightRow\">\n  <div class=\"col-val col-control\" *ngIf=\"options.selectableRows\">\n    <i\n      [ngClass]=\"isSelectedRow(data.getCell('name').value) ? 'fa-check-square' : 'fa-square'\" class=\"far fa-fw\"\n      (click)=\"selectRow(data.getCell('name').value)\"></i>\n  </div>\n  <div *ngIf=\"options.colControlFormatter != null\" class=\"col-val col-control\">\n    <app-cell-table [componentFormatter]=\"options.colControlFormatter\" [data]=\"data\" [label]=\"''\"\n                    [options]=\"options\"\n    ></app-cell-table>\n  </div>\n  <div [ngClass]=\"'col-val col'\" [style.width.%]=\"options.getColumnWidth(column.index)\"\n       *ngFor=\"let column of options.columns; let colIndex = index\"\n       (mouseout)=\"setHighlightedColumn(-1)\"\n       (mouseover)=\"setHighlightedColumn(colIndex)\"\n       [class.highlightColumn]=\"isColumnHighlighted(colIndex)\"\n       [class.text-right]=\"colIndex > 0 && options.columnAlign === 'right'\"\n       [class.text-center]=\"colIndex <= 0 || options.columnAlign !== 'right'\"\n       [class.alt-border]=\"column.altBorder\"\n  >\n    <app-cell-table [componentFormatter]=\"column.component\" [data]=\"data.getCellRawData(column)\" [label]=\"column.label\"\n                    [rowData]=\"data\"\n                    [options]=\"options\" [column]=\"column\"></app-cell-table>\n  </div>\n</div>\n"

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
/* harmony import */ var _on_select_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../on-select.service */ "./src/app/common/components/sasi-table/on-select.service.ts");
/* harmony import */ var _highlight_column_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../highlight-column.service */ "./src/app/common/components/sasi-table/highlight-column.service.ts");
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
    function RowTableComponent(localStorageService, onSelectService, highlightColumnService, cd) {
        this.localStorageService = localStorageService;
        this.onSelectService = onSelectService;
        this.highlightColumnService = highlightColumnService;
        this.cd = cd;
        this.columnHighlightEnable = false;
        this.selectEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.highlightedColumn = -1;
    }
    RowTableComponent.prototype.ngOnDestroy = function () {
        if (this.subscription !== undefined) {
            this.subscription.unsubscribe();
        }
    };
    RowTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.onSelectService.selectAll$.subscribe(function (value) { return _this.selectRow(_this.data.getCell('name').value, value); });
        this.selectedRows = this.localStorageService.get(this.options.storageNamePrefix + '_selected');
        if (this.selectedRows === null) {
            this.selectedRows = [];
        }
        this.highlightColumnService.highlightColumn$.subscribe(function (columnIndex) {
            // console.log('Setting in row: ' + columnIndex);
            _this.highlightedColumn = columnIndex;
            _this.cd.markForCheck();
        });
    };
    /* HIGHLIGHTNING */
    RowTableComponent.prototype.isColumnHighlighted = function (column) {
        if (!this.options.highlightColumn) {
            return false;
        }
        // console.log(column);
        // console.log(this.highlightedColumn);
        return column === this.highlightedColumn;
    };
    RowTableComponent.prototype.setHighlightedColumn = function (column) {
        this.highlightColumnService.setHighlightColumn(column);
    };
    RowTableComponent.prototype.isSelectedRow = function (name) {
        return this.findIndex(name) > -1;
    };
    RowTableComponent.prototype.selectRow = function (name, ignore) {
        this.selectedRows = this.localStorageService.get(this.options.storageNamePrefix + '_selected');
        if (this.selectedRows === null) {
            this.selectedRows = [];
        }
        var index = this.findIndex(name);
        if (index > -1 && !ignore) {
            this.selectedRows.splice(index, 1);
        }
        if (index < 0) {
            this.selectedRows.push(new _selected_row__WEBPACK_IMPORTED_MODULE_3__["SelectedRow"](this.groupName, name));
        }
        // @ts-ignore
        this.localStorageService.set(this.options.storageNamePrefix + '_selected', this.selectedRows);
        this.selectEmit.emit(this.selectedRows);
    };
    RowTableComponent.prototype.findIndex = function (name) {
        var _this = this;
        if (this.selectedRows === undefined) {
            return -1;
        }
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
    RowTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-row-table',
            template: __webpack_require__(/*! ./row-table.component.html */ "./src/app/common/components/sasi-table/row-table/row-table.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./row-table.component.css */ "./src/app/common/components/sasi-table/row-table/row-table.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_store__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _on_select_service__WEBPACK_IMPORTED_MODULE_4__["OnSelectService"],
            _highlight_column_service__WEBPACK_IMPORTED_MODULE_5__["HighlightColumnService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
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

module.exports = "/****** Behavior *****/\ndiv.collapsed ~ div.collapsable {\n  display: none;\n}\ndiv.table-header > div.col.highlightColumn {\n  -webkit-text-decoration: #334369 underline;\n          text-decoration: #334369 underline;\n}\n.selectedRow {\n  background-color: #BEECD1 !important;\n  color: #3A738C;\n}\n/*** Layout table ***/\n.col-control {\n  width: 3.5%;\n  display: inline-block;\n  vertical-align: middle;\n}\n.col {\n  /*width: 13.33%;*/\n  display: inline-block;\n  vertical-align: middle;\n}\n.col-label {\n  width: 13%;\n  display: inline-block;\n\n  /*width: 100%;*/\n}\n.capacity-table .row {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n/*** Table header ***/\ndiv.table-header {\n  border: 3px #EAEAEA solid;\n  background-color: #3C8CBC;\n  font-size: 13px;\n  color: white;\n  font-weight: bolder;\n}\ndiv.table-header > div {\n  border-right: 1px #EAEAEA solid;\n  padding: 10px 0px 10px 0px;\n}\ndiv.table-header > div {\n  text-align: center;\n}\ndiv.table-header > div.col-control {\n  color: #333;\n}\n/**** Table data ****/\napp-row-dynamic-table {\n  display: block;\n  margin: 0 0 5px;\n  border: 3px solid #eaeaea;\n}\napp-row-dynamic-table.striped-row:nth-of-type(odd) {\n  background-color: #f3f8fa;\n}\napp-row-dynamic-table.highlight-row:hover {\n  background-color: #b4d1ee !important;\n  color: #3A738C;\n}\n.col-control i {\n  font-size: 11px;\n  padding: 3px;\n}\n.table-header .col-control i, .table-header i {\n  color: white\n}\n.col-control:after {\n  content: \"\";\n  font-size: 11px;\n  padding: 3px;\n}\ndiv.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n}\ndiv.sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 50px;\n  z-index: 10;\n}\n.expand-collapse {\n  padding-right: 15px;\n}\n.expand-collapse:hover {\n  color: #5C91A8;\n  font-size: 17px;\n}\ndiv.no-border {\n  border-right: 0px !important;\n}\ni.sort-icon-left {\n  margin-right: 5px;\n}\ni.sort-icon-right {\n  margin-left: 5px;\n}\n.table-data.row {\n  margin: 0px 0px 5px 0px;\n  border: 3px #EAEAEA solid;\n}\n.peak-label {\n  color: #c7e1f8;\n}\napp-row-dynamic-table {\n  width: 100%;\n}\n.sorting {\n  font-size: 10px;\n}\n.col span.link {\n  color: white;\n  cursor: pointer;\n\n}\n.col span.link:hover {\n  color: white;\n  cursor: pointer;\n  -webkit-text-decoration: white underline;\n          text-decoration: white underline;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvc2FzaS10YWJsZS9zYXNpLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSwwQ0FBa0M7VUFBbEMsa0NBQWtDO0FBQ3BDO0FBR0E7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjs7RUFFckIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUVBLHFCQUFxQjtBQUVyQjtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFO0FBQ0Y7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7O0FBRWpCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY29tcG9uZW50cy9zYXNpLXRhYmxlL3Nhc2ktdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKiogQmVoYXZpb3IgKioqKiovXG5kaXYuY29sbGFwc2VkIH4gZGl2LmNvbGxhcHNhYmxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2LnRhYmxlLWhlYWRlciA+IGRpdi5jb2wuaGlnaGxpZ2h0Q29sdW1uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiAjMzM0MzY5IHVuZGVybGluZTtcbn1cblxuXG4uc2VsZWN0ZWRSb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkVFQ0QxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjM0E3MzhDO1xufVxuXG4vKioqIExheW91dCB0YWJsZSAqKiovXG4uY29sLWNvbnRyb2wge1xuICB3aWR0aDogMy41JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sIHtcbiAgLyp3aWR0aDogMTMuMzMlOyovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbC1sYWJlbCB7XG4gIHdpZHRoOiAxMyU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAvKndpZHRoOiAxMDAlOyovXG59XG5cbi5jYXBhY2l0eS10YWJsZSAucm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi8qKiogVGFibGUgaGVhZGVyICoqKi9cblxuZGl2LnRhYmxlLWhlYWRlciB7XG4gIGJvcmRlcjogM3B4ICNFQUVBRUEgc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzhDQkM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5kaXYudGFibGUtaGVhZGVyID4gZGl2IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggI0VBRUFFQSBzb2xpZDtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XG59XG5cbmRpdi50YWJsZS1oZWFkZXIgPiBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmRpdi50YWJsZS1oZWFkZXIgPiBkaXYuY29sLWNvbnRyb2wge1xuICBjb2xvcjogIzMzMztcbn1cblxuLyoqKiogVGFibGUgZGF0YSAqKioqL1xuYXBwLXJvdy1keW5hbWljLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAwIDVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2VhZWFlYTtcbn1cblxuYXBwLXJvdy1keW5hbWljLXRhYmxlLnN0cmlwZWQtcm93Om50aC1vZi10eXBlKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmOGZhO1xufVxuXG5hcHAtcm93LWR5bmFtaWMtdGFibGUuaGlnaGxpZ2h0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGQxZWUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzQTczOEM7XG59XG5cbi5jb2wtY29udHJvbCBpIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi50YWJsZS1oZWFkZXIgLmNvbC1jb250cm9sIGksIC50YWJsZS1oZWFkZXIgaSB7XG4gIGNvbG9yOiB3aGl0ZVxufVxuXG4uY29sLWNvbnRyb2w6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuZGl2LnN0aWNreSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG59XG5cbmRpdi5zdGlja3ktdG9wIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA1MHB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmV4cGFuZC1jb2xsYXBzZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5leHBhbmQtY29sbGFwc2U6aG92ZXIge1xuICBjb2xvcjogIzVDOTFBODtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5kaXYubm8tYm9yZGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuaS5zb3J0LWljb24tbGVmdCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5pLnNvcnQtaWNvbi1yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi50YWJsZS1kYXRhLnJvdyB7XG4gIG1hcmdpbjogMHB4IDBweCA1cHggMHB4O1xuICBib3JkZXI6IDNweCAjRUFFQUVBIHNvbGlkO1xufVxuXG4ucGVhay1sYWJlbCB7XG4gIGNvbG9yOiAjYzdlMWY4O1xufVxuXG5hcHAtcm93LWR5bmFtaWMtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNvcnRpbmcge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jb2wgc3Bhbi5saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbn1cblxuLmNvbCBzcGFuLmxpbms6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB3aGl0ZSB1bmRlcmxpbmU7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/common/components/sasi-table/sasi-table.component.html":
/*!************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/sasi-table.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"capacity-table sticky col-md-12\">\n  <!--\n    TOP TABLE ROW\n  -->\n  <div class=\"row table-header sticky-top\">\n    <div class=\"col-control\">\n      <i *ngIf=\"options.isDataGrouped\" class=\"fa expand-collapse\"\n         [@iconRotate]=\"isCollapseAll()\"\n         [ngClass]=\"'fa-angle-down'\"\n         (click)=\"collapseAll()\"\n         [tooltip]=\"isCollapseAll() ? 'Expand All':'Collapse All'\"></i>\n      <i *ngIf=\"options.selectableRows && isSelectedAll()\" class=\"far fa-check-square\" (click)=\"selectAll()\"></i>\n      <i *ngIf=\"options.selectableRows && isPartiallySelected() && !isSelectedAll()\" class=\"far fa-fw fa-minus-square\"\n         (click)=\"selectAll()\"></i>\n      <i *ngIf=\"options.selectableRows && (!isPartiallySelected()) && (!isSelectedAll())\" class=\"far fa-fw fa-square\"\n         (click)=\"selectAll()\"></i>\n    </div>\n    <div class=\"col-val col-control\" *ngIf=\"options.isDataGrouped && options.cellDecoratorRules.length > 0\">\n      <i tooltip=\"Alerts\" class=\"fa fa-exclamation-triangle text-orange\"></i>\n    </div>\n    <div class=\"col\" [style.width.%]=\"options.getColumnWidth(columnOption.index)\"\n         *ngFor=\"let columnOption of options.columns\">\n      <span class=\"link\" (click)=\"setSort(columnOption, false)\">{{getColumnLabel(columnOption.index)}} <i\n        class=\"text-muted sorting sort-icon-right\"\n        [ngClass]=\"getSortIconClass(columnOption.index, false)\"></i>\n      </span>\n      <!-- [class.highlightColumn]=\"isColumnHighlighted(column)\" -->\n      <br/>\n      <span *ngIf=\"columnOption.altSortEnable === true\" (click)=\"setSort(columnOption, true)\" class=\"link\"><i\n        class=\"fa fa-angle-up text-red sort-icon-left\"></i>\n        <span class=\"peak-label\">Peak</span> <i\n          class='sorting sort-icon-right' [ngClass]=\"getSortIconClass(columnOption.index, true)\"\n        ></i></span>\n    </div>\n  </div>\n  <!--POOL ROWS-->\n  <!---->\n  <div class=\"row\" *ngIf=\"selectedRows !== undefined\">\n    <!--<div  [class.highlight-row]=\"options.highlightRow\">-->\n    <app-row-dynamic-table *ngFor=\"let row of data\"\n                           [class.highlight-row]=\"options.highlightRow && !options.isDataGrouped\"\n                           [class.striped-row]=\"!options.isDataGrouped\"\n                           [componentFormatter]=\"options.rowComponentFormatter\" [data]=\"row\"\n                           [options]=\"options\"></app-row-dynamic-table>\n    <!--</div>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/components/sasi-table/sasi-table.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/common/components/sasi-table/sasi-table.component.ts ***!
  \**********************************************************************/
/*! exports provided: SasiColumnBuilder, SasiColumn, SasiCell, SasiExternal, SasiRow, SasiGroupRow, SasiTableOptions, SasiSortType, slideInOutAnimation, SasiTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiColumnBuilder", function() { return SasiColumnBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiColumn", function() { return SasiColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiCell", function() { return SasiCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiExternal", function() { return SasiExternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiRow", function() { return SasiRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiGroupRow", function() { return SasiGroupRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiTableOptions", function() { return SasiTableOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiSortType", function() { return SasiSortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInOutAnimation", function() { return slideInOutAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiTableComponent", function() { return SasiTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _on_select_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-select.service */ "./src/app/common/components/sasi-table/on-select.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        this.altBorder = false;
        this.columnWidth = null;
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
    SasiColumnBuilder.prototype.withAltLabel = function (label) {
        this.altLabel = label;
        return this;
    };
    SasiColumnBuilder.prototype.withComponent = function (component) {
        this.component = component;
        return this;
    };
    SasiColumnBuilder.prototype.withAggComponent = function (component) {
        this.aggComponent = component;
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
    SasiColumnBuilder.prototype.withAltBorder = function (altBorder) {
        this.altBorder = altBorder;
        return this;
    };
    SasiColumnBuilder.prototype.withColumnWidth = function (width) {
        this.columnWidth = width;
        return this;
    };
    SasiColumnBuilder.prototype.build = function () {
        return new SasiColumn(this.index, this.label, this.component, this.aggComponent === undefined ? this.component : this.aggComponent, this.altSortEnable, this.isAggregated, this.tooltipText === null ? this.label : this.tooltipText, this.infinity, this.altLabel, this.altBorder, this.columnWidth);
    };
    SasiColumnBuilder.prototype.withInfinity = function (isInfinity) {
        this.infinity = isInfinity;
        return this;
    };
    return SasiColumnBuilder;
}());

var SasiColumn = /** @class */ (function () {
    function SasiColumn(index, label, component, aggComponent, altSortEnable, isAggragated, tooltipText, isInfinity, altLabel, altBorder, columnWidth) {
        this.index = index;
        this.label = label;
        this.component = component;
        this.aggComponent = aggComponent;
        this.altSortEnable = altSortEnable;
        this.isAggregated = isAggragated;
        this.tooltipText = tooltipText;
        this.isInfinity = isInfinity;
        this.altLabel = altLabel;
        this.altBorder = altBorder;
        this.columnWidth = columnWidth;
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

var SasiExternal = /** @class */ (function () {
    function SasiExternal(type, value) {
        this.type = type;
        this.value = value;
    }
    return SasiExternal;
}());

/**
 * SasiRow is data model for row in the table
 */
var SasiRow = /** @class */ (function () {
    function SasiRow() {
        this.subRows = [];
        this.cells = [];
        this.externals = [];
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
        var columnOption = this.columns.find(function (column) { return column.index === name; });
        if (columnOption !== undefined && columnOption.columnWidth !== null) {
            return columnOption.columnWidth;
        }
        if (name === 'name') {
            return this.labelColumnWidth;
        }
        return this.valueColumnWidth;
    };
    SasiTableOptions.prototype.getAggregatedColumns = function () {
        return this.columns.filter(function (column) { return column.isAggregated; });
    };
    SasiTableOptions.prototype.getDataColumns = function () {
        return this.columns.filter(function (column) { return column.index !== 'name'; });
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
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*', overflow: 'hidden', margin: '0' })),
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
    function SasiTableComponent(localStorageService, onSelectService) {
        this.localStorageService = localStorageService;
        this.onSelectService = onSelectService;
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
            columnAlign: 'center',
            getColumnWidth: function (name) {
                var columnOption = this.columns.find(function (column) { return column.index === name; });
                if (columnOption !== undefined && columnOption.columnWidth !== null) {
                    return columnOption.columnWidth;
                }
                if (name === 'name') {
                    return this.labelColumnWidth;
                }
                return this.valueColumnWidth;
            },
            getAggregatedColumns: function () {
                return this.columns.filter(function (column) { return column.isAggregated; });
            },
            getDataColumns: function () {
                return this.columns.filter(function (column) { return column.index !== 'name'; });
            }
        };
        this.altSort = false;
    }
    SasiTableComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.options = Object.assign(this.defaultOptions, this.tableOptions);
                        this.localStorageService.observe(this.options.storageNamePrefix + '_selected').subscribe(function (data) { return _this.selectedRows = data.newValue; });
                        this.localStorageService.observe(this.options.storageNamePrefix + '_collapsed').subscribe(function (data) {
                            _this.collapsedRows = data.newValue;
                        });
                        _a = this;
                        return [4 /*yield*/, this.localStorageService.get(this.options.storageNamePrefix + '_selected')];
                    case 1:
                        _a.selectedRows = _b.sent();
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
                        return [2 /*return*/];
                }
            });
        });
    };
    SasiTableComponent.prototype.getColumnLabel = function (type) {
        var column = this.options.columns.find(function (optionColumn) { return optionColumn.index === type; });
        if (column === undefined) {
            return '';
        }
        return column.altLabel !== undefined ? column.altLabel : column.label;
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
            this.options.sortType = SasiSortType.DESC;
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
        if (this.collapsedRows === undefined) {
            return false;
        }
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
        if (this.selectedRows === undefined) {
            return false;
        }
        return d.every(
        // @ts-ignore
        function (rowGroup) { return rowGroup.rows.every(function (row) { return _this.selectedRows.find(function (selectedRow) { return _this.isSelected(row, selectedRow, rowGroup); }) !== undefined; }); });
    };
    SasiTableComponent.prototype.isSelected = function (row, selectedRow, rowGroup) {
        return selectedRow.rowName === row.getCell('name').value && selectedRow.groupName === rowGroup.groupRow.getCell('name').value;
    };
    SasiTableComponent.prototype.isPartiallySelected = function () {
        var _this = this;
        if (!this.options.isDataGrouped) {
            return false;
        }
        // @ts-ignore
        var d = this.data;
        if (this.selectedRows === undefined) {
            return false;
        }
        return d.find(
        // @ts-ignore
        function (rowGroup) { return rowGroup.rows.find(function (row) { return _this.selectedRows.find(function (selectedRow) { return _this.isSelected(row, selectedRow, rowGroup); }) !== undefined; }); }) !== undefined;
    };
    SasiTableComponent.prototype.selectAll = function () {
        // // @ts-ignore
        // const d = <SasiGroupRow[]>this.data;
        if (!this.isSelectedAll()) {
            this.onSelectService.announceSelectAll(true);
        }
        else {
            this.onSelectService.announceSelectAll(false);
        }
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
        __metadata("design:paramtypes", [ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"],
            _on_select_service__WEBPACK_IMPORTED_MODULE_3__["OnSelectService"]])
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

/***/ "./src/app/common/models/datacenter.vo.ts":
/*!************************************************!*\
  !*** ./src/app/common/models/datacenter.vo.ts ***!
  \************************************************/
/*! exports provided: Datacenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datacenter", function() { return Datacenter; });
var Datacenter = /** @class */ (function () {
    function Datacenter() {
    }
    return Datacenter;
}());



/***/ }),

/***/ "./src/app/common/models/dtos/region-metric.dto.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/models/dtos/region-metric.dto.ts ***!
  \*********************************************************/
/*! exports provided: RegionMetricDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionMetricDto", function() { return RegionMetricDto; });
var RegionMetricDto = /** @class */ (function () {
    function RegionMetricDto() {
        this.metrics = [];
    }
    return RegionMetricDto;
}());



/***/ }),

/***/ "./src/app/common/models/dtos/region.enum.ts":
/*!***************************************************!*\
  !*** ./src/app/common/models/dtos/region.enum.ts ***!
  \***************************************************/
/*! exports provided: Region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
var Region;
(function (Region) {
    Region[Region["EUROPE"] = 0] = "EUROPE";
    Region[Region["ASIA"] = 1] = "ASIA";
    Region[Region["AMERICA"] = 2] = "AMERICA";
})(Region || (Region = {}));


/***/ }),

/***/ "./src/app/common/models/menu-item.vo.ts":
/*!***********************************************!*\
  !*** ./src/app/common/models/menu-item.vo.ts ***!
  \***********************************************/
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

/***/ "./src/app/common/models/menu-tree.vo.ts":
/*!***********************************************!*\
  !*** ./src/app/common/models/menu-tree.vo.ts ***!
  \***********************************************/
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

/***/ "./src/app/common/models/metrics/alert-type.enum.ts":
/*!**********************************************************!*\
  !*** ./src/app/common/models/metrics/alert-type.enum.ts ***!
  \**********************************************************/
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
    AlertType["PORT_DISBALANCE_EVENTS"] = "port_disbalance_events";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/common/models/metrics/alert.vo.ts":
/*!***************************************************!*\
  !*** ./src/app/common/models/metrics/alert.vo.ts ***!
  \***************************************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
var Alert = /** @class */ (function () {
    function Alert() {
    }
    return Alert;
}());



/***/ }),

/***/ "./src/app/common/models/metrics/entity-type.enum.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/models/metrics/entity-type.enum.ts ***!
  \***********************************************************/
/*! exports provided: EntityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return EntityType; });
var EntityType;
(function (EntityType) {
    EntityType["POOL"] = "pool";
    EntityType["SYSTEM"] = "system";
    EntityType["ADAPTER"] = "adapter";
    EntityType["PORT"] = "port";
})(EntityType || (EntityType = {}));


/***/ }),

/***/ "./src/app/common/models/metrics/metric.vo.ts":
/*!****************************************************!*\
  !*** ./src/app/common/models/metrics/metric.vo.ts ***!
  \****************************************************/
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

/***/ "./src/app/common/models/metrics/system-metric-type.enum.ts":
/*!******************************************************************!*\
  !*** ./src/app/common/models/metrics/system-metric-type.enum.ts ***!
  \******************************************************************/
/*! exports provided: SystemMetricType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemMetricType", function() { return SystemMetricType; });
var SystemMetricType;
(function (SystemMetricType) {
    SystemMetricType["SELECTED_COUNT"] = "SELECTED_COUNT";
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
    SystemMetricType["IMBALANCE_EVENTS"] = "IMBALANCE_EVENTS";
    SystemMetricType["PREDICTION_L1"] = "PREDICTION_L1";
    SystemMetricType["PREDICTION_L2"] = "PREDICTION_L2";
    SystemMetricType["PREDICTION_L3"] = "PREDICTION_L3";
    SystemMetricType["CAPACITY_CHANGE_1D"] = "CHANGE_DAY";
    SystemMetricType["CAPACITY_CHANGE_1W"] = "CHANGE_WEEK";
    SystemMetricType["CAPACITY_CHANGE_1M"] = "CHANGE_MONTH";
    SystemMetricType["IMBALANCE_PERC"] = "IMBALANCE_PERC";
    SystemMetricType["IMBALANCE_ABSOLUT"] = "IMBALANCE_ABSOLUT";
    SystemMetricType["NET_SUBS_PERC"] = "NET_SUBS_PERC";
    SystemMetricType["LOGICAL_SUBS_PERC"] = "LOGICAL_SUBS_PERC";
    SystemMetricType["SUBSCRIBED_CAPACITY"] = "SUBSCRIBED_CAPACITY";
    SystemMetricType["PORT_IMBALANCE_EVENTS"] = "PORT_IMBALANCE_EVENTS";
    SystemMetricType["PORT_IMBALANCE_PERC"] = "PORT_IMBALANCE_PERC";
    SystemMetricType["PORT_IMBALANCE_ABSOLUT"] = "PORT_IMBALANCE_ABSOLUT";
    // Counted in SA UI
    SystemMetricType["LOGICAL_CHANGE_1M"] = "LOGICAL_CHANGE_MONTH";
    // Mocked extarnal type for metric type,
    SystemMetricType["TIER"] = "TIER";
})(SystemMetricType || (SystemMetricType = {}));


/***/ }),

/***/ "./src/app/common/models/metrics/system-metric.vo.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/models/metrics/system-metric.vo.ts ***!
  \***********************************************************/
/*! exports provided: SystemMetric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemMetric", function() { return SystemMetric; });
/* harmony import */ var _metric_vo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metric.vo */ "./src/app/common/models/metrics/metric.vo.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
}(_metric_vo__WEBPACK_IMPORTED_MODULE_0__["Metric"]));



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
/* harmony import */ var _global_statistics_formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global-statistics/formatters/unit-formatter/unit-formatter.component */ "./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.ts");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");
/* harmony import */ var _components_sasi_table_row_table_row_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sasi-table/row-table/row-table.component */ "./src/app/common/components/sasi-table/row-table/row-table.component.ts");
/* harmony import */ var _global_statistics_formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../global-statistics/formatters/alert-formatter/alert-formatter.component */ "./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.ts");
/* harmony import */ var _components_small_box_small_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/small-box/small-box.component */ "./src/app/common/components/small-box/small-box.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/system-pool-2-sasi-group-table.pipe */ "./src/app/common/utils/system-pool-2-sasi-group-table.pipe.ts");
/* harmony import */ var _components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _components_sasi_table_row_dynamic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sasi-table/row-dynamic.component */ "./src/app/common/components/sasi-table/row-dynamic.component.ts");
/* harmony import */ var _global_statistics_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../global-statistics/formatters/simple-formatter/simple-formatter.component */ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _components_knob_ng_2_knob_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/knob/ng-2-knob.directive */ "./src/app/common/components/knob/ng-2-knob.directive.ts");
/* harmony import */ var _components_small_box_locale_number_format_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/small-box/locale-number-format.pipe */ "./src/app/common/components/small-box/locale-number-format.pipe.ts");
/* harmony import */ var _global_statistics_formatters_time_formatter_time_formatter_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../global-statistics/formatters/time-formatter/time-formatter.component */ "./src/app/global-statistics/formatters/time-formatter/time-formatter.component.ts");
/* harmony import */ var _global_statistics_formatters_text_formatter_text_formatter_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../global-statistics/formatters/text-formatter/text-formatter.component */ "./src/app/global-statistics/formatters/text-formatter/text-formatter.component.ts");
/* harmony import */ var _global_statistics_formatters_emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../global-statistics/formatters/emph-formatter/emph-formatter.component */ "./src/app/global-statistics/formatters/emph-formatter/emph-formatter.component.ts");
/* harmony import */ var _utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils/safe-html.pipe */ "./src/app/common/utils/safe-html.pipe.ts");
/* harmony import */ var _global_statistics_formatters_port_disbalance_formatter_port_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component */ "./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.ts");
/* harmony import */ var _utils_format_thousands_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utils/format-thousands.pipe */ "./src/app/common/utils/format-thousands.pipe.ts");
/* harmony import */ var _components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/route-link-formatter/route-link-formatter.component */ "./src/app/common/components/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _storage_convert_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./storage-convert.pipe */ "./src/app/common/storage-convert.pipe.ts");
/* harmony import */ var _global_statistics_formatters_tier_formatter_tier_formatter_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../global-statistics/formatters/tier-formatter/tier-formatter.component */ "./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.ts");
/* harmony import */ var _global_statistics_formatters_adapter_disbalance_formatter_adapter_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component */ "./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.ts");
/* harmony import */ var _components_info_box_alert_info_box_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/info-box/alert-info-box.component */ "./src/app/common/components/info-box/alert-info-box.component.ts");
/* harmony import */ var _global_statistics_formatters_empty_formatter_empty_formatter_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../global-statistics/formatters/empty-formatter/empty-formatter.component */ "./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.ts");
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
                _components_sasi_table_row_table_row_table_component__WEBPACK_IMPORTED_MODULE_11__["RowTableComponent"],
                _components_sasi_table_row_dynamic_component__WEBPACK_IMPORTED_MODULE_17__["RowDynamicComponent"],
                _components_small_box_small_box_component__WEBPACK_IMPORTED_MODULE_13__["SmallBoxComponent"],
                _utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_15__["SystemPool2SasiGroupTablePipe"],
                _components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_16__["RowGroupTableComponent"],
                _components_knob_knob_sa_component__WEBPACK_IMPORTED_MODULE_2__["KnobSaComponent"],
                _components_knob_ng_2_knob_directive__WEBPACK_IMPORTED_MODULE_19__["Ng2KnobDirective"],
                _components_small_box_locale_number_format_pipe__WEBPACK_IMPORTED_MODULE_20__["LocaleNumberFormatPipe"],
                _utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_24__["SafeHtmlPipe"],
                _utils_format_thousands_pipe__WEBPACK_IMPORTED_MODULE_26__["FormatThousandsPipe"],
                _components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_27__["RouteLinkFormatterComponent"],
                _storage_convert_pipe__WEBPACK_IMPORTED_MODULE_28__["StorageConvertPipe"],
                _components_info_box_alert_info_box_component__WEBPACK_IMPORTED_MODULE_31__["AlertInfoBoxComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
            ],
            exports: [
                _utils_iframe_url_creator_pipe__WEBPACK_IMPORTED_MODULE_3__["IframeUrlCreatorPipe"],
                _components_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_4__["InfoBoxComponent"],
                _utils_system_pool_2_sasi_table_pipe__WEBPACK_IMPORTED_MODULE_5__["SystemPool2SasiTablePipe"],
                _utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_15__["SystemPool2SasiGroupTablePipe"],
                _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiTableComponent"],
                _components_knob_knob_sa_component__WEBPACK_IMPORTED_MODULE_2__["KnobSaComponent"],
                _components_small_box_small_box_component__WEBPACK_IMPORTED_MODULE_13__["SmallBoxComponent"],
                _components_knob_ng_2_knob_directive__WEBPACK_IMPORTED_MODULE_19__["Ng2KnobDirective"],
                _utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_24__["SafeHtmlPipe"],
                _utils_format_thousands_pipe__WEBPACK_IMPORTED_MODULE_26__["FormatThousandsPipe"],
                _components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_27__["RouteLinkFormatterComponent"],
                _storage_convert_pipe__WEBPACK_IMPORTED_MODULE_28__["StorageConvertPipe"],
                _components_info_box_alert_info_box_component__WEBPACK_IMPORTED_MODULE_31__["AlertInfoBoxComponent"],
            ],
            entryComponents: [
                _global_statistics_formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_9__["UnitFormatterComponent"],
                _global_statistics_formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_12__["AlertFormatterComponent"],
                _global_statistics_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_18__["SimpleFormatterComponent"],
                _components_sasi_table_row_table_row_table_component__WEBPACK_IMPORTED_MODULE_11__["RowTableComponent"],
                _components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_16__["RowGroupTableComponent"],
                _global_statistics_formatters_time_formatter_time_formatter_component__WEBPACK_IMPORTED_MODULE_21__["TimeFormatterComponent"],
                _global_statistics_formatters_text_formatter_text_formatter_component__WEBPACK_IMPORTED_MODULE_22__["TextFormatterComponent"],
                _global_statistics_formatters_emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_23__["EmphFormatterComponent"],
                _global_statistics_formatters_port_disbalance_formatter_port_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_25__["PortDisbalanceFormatterComponent"],
                _components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_27__["RouteLinkFormatterComponent"],
                _global_statistics_formatters_tier_formatter_tier_formatter_component__WEBPACK_IMPORTED_MODULE_29__["TierFormatterComponent"],
                _global_statistics_formatters_adapter_disbalance_formatter_adapter_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_30__["AdapterDisbalanceFormatterComponent"],
                _global_statistics_formatters_empty_formatter_empty_formatter_component__WEBPACK_IMPORTED_MODULE_32__["EmptyFormatterComponent"]
            ]
        })
    ], SaCommonModule);
    return SaCommonModule;
}());



/***/ }),

/***/ "./src/app/common/storage-convert.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/common/storage-convert.pipe.ts ***!
  \************************************************/
/*! exports provided: StorageConvertPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageConvertPipe", function() { return StorageConvertPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/metrics/metric.vo */ "./src/app/common/models/metrics/metric.vo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StorageConvertPipe = /** @class */ (function () {
    function StorageConvertPipe() {
        this.unitOrder = {
            'CAPACITY': ['MB', 'GB', 'TB', 'PB'],
            'TRANSFER': ['MBps', 'GBps', 'TBps'],
            'LOGICAL_CAPACITY': ['MB', 'GB', 'TB'],
            'LOGICAL_CHANGE_MONTH': ['MB', 'GB', 'TB'],
            'SUBSCRIBED_CAPACITY': ['MB', 'GB', 'TB'],
            'CHANGE_MONTH': ['MB', 'GB', 'TB', 'PB'],
        };
    }
    StorageConvertPipe.prototype.transform = function (metric, args) {
        if (this.unitOrder[metric.type] === undefined) {
            return metric;
        }
        var startingValue = this.unitOrder[metric.type].findIndex(function (unit) { return unit === metric.unit; });
        var convertedValue = this.convertValue(metric.value, startingValue, this.unitOrder[metric.type].length - 1);
        var result = new _models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_1__["Metric"]();
        result.value = convertedValue.value;
        result.type = metric.type;
        result.unit = this.unitOrder[metric.type][convertedValue.countedOrder];
        return result;
    };
    StorageConvertPipe.prototype.convertValue = function (value, startingOrder, maximumOrder) {
        var countedOrder = startingOrder;
        var countedValue = value;
        while ((Math.abs(countedValue) / 1024) > 1 && countedOrder < maximumOrder) {
            countedValue = (countedValue / 1024);
            countedOrder++;
        }
        return { value: countedValue, countedOrder: countedOrder };
    };
    StorageConvertPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'storageConvert'
        })
    ], StorageConvertPipe);
    return StorageConvertPipe;
}());



/***/ }),

/***/ "./src/app/common/utils/array-utils.ts":
/*!*********************************************!*\
  !*** ./src/app/common/utils/array-utils.ts ***!
  \*********************************************/
/*! exports provided: ArrayUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayUtils", function() { return ArrayUtils; });
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    ArrayUtils.min = function (data) {
        return data.reduce(function (previousValue, currentValue) { return previousValue < currentValue ? previousValue : currentValue; });
    };
    ArrayUtils.max = function (data) {
        return data.reduce(function (previousValue, currentValue) { return previousValue > currentValue ? previousValue : currentValue; });
    };
    return ArrayUtils;
}());



/***/ }),

/***/ "./src/app/common/utils/format-thousands.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/utils/format-thousands.pipe.ts ***!
  \*******************************************************/
/*! exports provided: FormatThousandsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatThousandsPipe", function() { return FormatThousandsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatThousandsPipe = /** @class */ (function () {
    function FormatThousandsPipe() {
    }
    FormatThousandsPipe_1 = FormatThousandsPipe;
    FormatThousandsPipe.prototype.transform = function (value, args) {
        if (!parseFloat(value)) {
            return value;
        }
        var currentValue = value.toString();
        var result = '';
        var decimalPart = '';
        var matchOccurenceIndex = currentValue.lastIndexOf('.');
        if (matchOccurenceIndex !== -1) {
            decimalPart = currentValue.substring(matchOccurenceIndex, currentValue.length);
            currentValue = currentValue.substring(0, matchOccurenceIndex);
        }
        while (currentValue.length > FormatThousandsPipe_1.LENGTH_OF_THOUSANDS) {
            if (result === '') {
                result = currentValue.substr(-FormatThousandsPipe_1.LENGTH_OF_THOUSANDS, FormatThousandsPipe_1.LENGTH_OF_THOUSANDS);
            }
            else {
                result = currentValue.substr(-FormatThousandsPipe_1.LENGTH_OF_THOUSANDS, FormatThousandsPipe_1.LENGTH_OF_THOUSANDS) + FormatThousandsPipe_1.THOUSANDS_DELIMITER + result;
            }
            currentValue = currentValue.substr(0, currentValue.length - FormatThousandsPipe_1.LENGTH_OF_THOUSANDS);
        }
        result = currentValue + (result === '' ? '' : FormatThousandsPipe_1.THOUSANDS_DELIMITER) + result + decimalPart;
        return result;
    };
    var FormatThousandsPipe_1;
    FormatThousandsPipe.THOUSANDS_DELIMITER = ' ';
    FormatThousandsPipe.LENGTH_OF_THOUSANDS = 3;
    FormatThousandsPipe = FormatThousandsPipe_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'formatThousands'
        })
    ], FormatThousandsPipe);
    return FormatThousandsPipe;
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
/* harmony import */ var _url_creatot_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-creatot.utils */ "./src/app/common/utils/url-creatot.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IframeUrlCreatorPipe = /** @class */ (function () {
    function IframeUrlCreatorPipe() {
        this.iFrameLinks = {
            dashboard: '1%20Dash%20Board/index.html',
            serverBoard: '2%20Server%20Board/index.html',
            dpSla: '4%20DP%20Pool%20Board%20and%20SLA/index.html',
            deepAnalysis: '7%20Deep%20Analysis/index.html',
            cache: '8%20Cache%20Board/index.html',
            adapters: '8%20CHA%20Adapters%20Board/index.html',
            trends: '8%20Trends/index.html',
            capacityAnalysis: '9%20Capacity%20Analysis/index.html',
            hostGroups: '9%20Capacity%20Analysis/VM%20Capacity%20Analysis.html',
        };
        this.mapSystemToDirectory = [];
        this.mapSystemToDirectory[1] = '01';
        this.mapSystemToDirectory[2] = '02';
        this.mapSystemToDirectory[3] = '03';
        this.mapSystemToDirectory[4] = '04';
        this.mapSystemToDirectory[5] = '05';
        this.mapSystemToDirectory[6] = '06';
        // this.mapToDirectory[7] = '';
        this.mapSystemToDirectory[8] = '22';
        this.mapSystemToDirectory[9] = '23';
        this.mapSystemToDirectory[10] = '24';
        this.mapSystemToDirectory[11] = '25';
        this.mapSystemToDirectory[12] = '26';
        // this.mapToDirectory[13] = '';
        this.mapSystemToDirectory[14] = '62';
        this.mapSystemToDirectory[15] = '41';
        this.mapSystemToDirectory[16] = '42';
        this.mapSystemToDirectory[17] = '43';
        this.mapSystemToDirectory[18] = '44';
        this.mapSystemToDirectory[19] = '81';
        this.mapSystemToDirectory[20] = '51';
        this.mapSystemToDirectory[21] = '52';
        // this.mapSystemToDirectory[22] = '71';
        this.mapSystemToDirectory[23] = '72';
        this.mapSystemToDirectory[24] = '27';
        this.mapSystemToDirectory[25] = '63';
    }
    IframeUrlCreatorPipe.prototype.transform = function (value, args) {
        var anchorParam = '';
        if (args.anchor != null) {
            anchorParam = "#" + this.normalizeAnchor(args.anchor);
        }
        return _url_creatot_utils__WEBPACK_IMPORTED_MODULE_1__["UrlCreator"].url(this.mapToDirectory(value), this.iFrameLinks[args.iframeLink] + anchorParam);
    };
    IframeUrlCreatorPipe.prototype.mapToDirectory = function (id) {
        if (this.mapSystemToDirectory[id] !== undefined) {
            return this.mapSystemToDirectory[id];
        }
        throw new Error("ID: " + id + " not found in mapping");
    };
    IframeUrlCreatorPipe.prototype.normalizeAnchor = function (value) {
        if (value != null) {
            return value.replace(/[#\-\s\,]+/g, '_');
        }
        return '';
    };
    IframeUrlCreatorPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'iframeUrlCreator'
        }),
        __metadata("design:paramtypes", [])
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
    SystemPool2SasiGroupTablePipe.prototype.transform = function (systems, context) {
        var _this = this;
        return systems.map(function (system) {
            var row = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiGroupRow"]();
            var groupRow = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiRow"]();
            groupRow.cells['name'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiCell"](system.name, { id: system.id, iFrameLink: context, value: system.name });
            row.groupRow = groupRow;
            row.rows = _this.rowPipe.transform(system.pools, context, system.id);
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
/* harmony import */ var _models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
/* harmony import */ var _models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/metrics/metric.vo */ "./src/app/common/models/metrics/metric.vo.ts");
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
    SystemPool2SasiTablePipe.prototype.transform = function (systems, context, linkId) {
        var _this = this;
        return systems.map(function (system) {
            var row = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiRow"]();
            var linkIdInput = system.id;
            if (linkId != null) {
                linkIdInput = linkId;
            }
            row.cells['name'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiCell"](system.name, { id: linkIdInput, iFrameLink: context, value: system.name });
            system.metrics.forEach(function (metric) { return row.cells[metric.type] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiCell"](metric.value, metric); });
            if (system.ports !== undefined) {
                row.subRows = _this.transform(system.ports, null, null);
                var metric = new _models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_3__["Metric"]();
                metric.value = _this.countPortImbalances(row.subRows);
                metric.type = _models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].PORT_IMBALANCE_EVENTS;
                row.cells[_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].PORT_IMBALANCE_EVENTS] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiCell"](metric.value, metric);
            }
            if (system.externals !== undefined) {
                row.externals = system.externals;
            }
            return row;
        });
    };
    SystemPool2SasiTablePipe.prototype.countPortImbalances = function (rows) {
        return rows.filter(function (row) { return parseInt(row.getCell(_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].PORT_IMBALANCE_EVENTS).value, 10) > 0; }).length;
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

/***/ "./src/app/common/utils/url-creatot.utils.ts":
/*!***************************************************!*\
  !*** ./src/app/common/utils/url-creatot.utils.ts ***!
  \***************************************************/
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

/***/ "./src/app/components/dashboard/charts/bar-chart/bar-chart.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/charts/bar-chart/bar-chart.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NoYXJ0cy9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/charts/bar-chart/bar-chart.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/dashboard/charts/bar-chart/bar-chart.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<apx-chart [chart]=\"chart\" [series]=\"series\" [title]=\"title\" [labels]=\"labels\" [tooltip]=\"tooltip\"\n           [plotOptions]=\"plotOptions\" [dataLabels]=\"dataLabels\" [yaxis]=\"yaxis\" [xaxis]=\"xaxis\"\n           [colors]=\"colors\"></apx-chart>\n"

/***/ }),

/***/ "./src/app/components/dashboard/charts/bar-chart/bar-chart.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/dashboard/charts/bar-chart/bar-chart.component.ts ***!
  \******************************************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
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

var BarChartComponent = /** @class */ (function () {
    function BarChartComponent() {
        this.chart = {
            type: 'bar',
            animations: { enabled: false },
            height: '300px',
        };
        this.xaxis = {
            categories: [],
            title: {
            // text: 'TB'
            },
            labels: {
                formatter: function (val) {
                    return Math.abs(Math.round(val)) + 'TB';
                }
            }
        };
        this.series = [{
                name: 'Europe',
                data: [78, -15, 33]
            }];
        this.regionLabels = [];
        this.title = { text: 'Region', unit: '', useKFormatter: false }; // small hack for exposing unit attribute in formatters
        this.unit = '';
        this.useKFormatter = false;
        this.dataLabels = {
            enabled: true,
            formatter: function (value, _a) {
                var seriesIndex = _a.seriesIndex, dataPointIndex = _a.dataPointIndex, w = _a.w;
                return (Math.round(value)) + ' TB';
            }
        };
        // plotOptions = {
        //   pie: {
        //     donut: {
        //       labels: {
        //         show: true,
        //         name: {
        //           show: true,
        //           offsetY: -20,
        //           fontSize: '12px'
        //         },
        //         value: {
        //           offsetY: -10,
        //         },
        //         total: {
        //           show: true,
        //           showAlways: true,
        //           offsetY: -10,
        //           formatter: function (w) {
        //             const aggValue = w.globals.seriesTotals.reduce((a, b) => {
        //               return a + b;
        //             }, 0);
        //             return NumberFormatter.kFormat(parseFloat(aggValue).toFixed(0), w.config.labels.useKFormatter) + ' ' + w.config.labels.unit;
        //           }
        //         }
        //       }
        //     }
        //   }
        // };
        this.plotOptions = {
            bar: {
                horizontal: true,
            },
        };
        this.colors = ['rgb(0, 143, 251)', 'rgb(0, 227, 150)', 'rgb(254, 176, 25)'];
        this.yaxis = {
            // range: 1,
            title: {
            // text: 'Age',
            },
        };
    }
    BarChartComponent.prototype.ngOnInit = function () {
        this.series = this.convertToMoreSeries(this.data);
        this.xaxis.categories = [''];
        this.labels = this.regionLabels;
        this.labels.unit = this.unit;
        this.labels.useKFormatter = this.useKFormatter;
        this.title.text = this.title.text + (" (" + this.labels.unit + ")");
        this.tooltip = {
            y: {
                formatter: function (value, w) {
                    return value + ' TB';
                    // let unit = '';
                    // let useKformatter = false;
                    // if (w !== undefined && w.config !== undefined) {
                    //   unit = w.config.labels.unit;
                    //   useKformatter = w.config.labels.useKFormatter;
                    // }
                    // return NumberFormatter.kFormat(parseFloat(value).toFixed(0), useKformatter) + ' ' + unit;
                }
            }
        };
    };
    BarChartComponent.prototype.convertToMoreSeries = function (data) {
        var convertData = [];
        // tslint:disable-next-line:forin
        for (var i in this.regionLabels) {
            var emptyZeroArray = new Array(this.regionLabels.length).fill(0);
            emptyZeroArray[i] = data[i];
            convertData.push({ name: this.regionLabels[i], data: emptyZeroArray });
        }
        return convertData;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "regionLabels", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "unit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "useKFormatter", void 0);
    BarChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-chart',
            template: __webpack_require__(/*! ./bar-chart.component.html */ "./src/app/components/dashboard/charts/bar-chart/bar-chart.component.html"),
            styles: [__webpack_require__(/*! ./bar-chart.component.css */ "./src/app/components/dashboard/charts/bar-chart/bar-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BarChartComponent);
    return BarChartComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/charts/capacity-history-chart/capacity-history-chart.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/dashboard/charts/capacity-history-chart/capacity-history-chart.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NoYXJ0cy9jYXBhY2l0eS1oaXN0b3J5LWNoYXJ0L2NhcGFjaXR5LWhpc3RvcnktY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashboard/charts/capacity-history-chart/capacity-history-chart.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/dashboard/charts/capacity-history-chart/capacity-history-chart.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<apx-chart [series]=\"series\" [chart]=\"chart\" [colors]=\"fill\" [xaxis]=\"xaxis\" [yaxis]=\"yaxis\" [legend]=\"legend\"\n           [dataLabels]=\"dataLabels\" [title]=\"title\"></apx-chart>\n"

/***/ }),

/***/ "./src/app/components/dashboard/charts/capacity-history-chart/capacity-history-chart.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/dashboard/charts/capacity-history-chart/capacity-history-chart.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CapacityHistoryChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacityHistoryChartComponent", function() { return CapacityHistoryChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_utils_format_thousands_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/utils/format-thousands.pipe */ "./src/app/common/utils/format-thousands.pipe.ts");
/* harmony import */ var _common_utils_array_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/utils/array-utils */ "./src/app/common/utils/array-utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CapacityHistoryChartComponent = /** @class */ (function () {
    function CapacityHistoryChartComponent() {
        this.series = [];
        this.chart = { type: 'area', height: '300' };
        this.xaxis = { type: 'datetime', labels: { format: 'yyyy-MM-dd' } };
        this.colors = ['#a09608', '#38a008', '#08a09d', '#421570', '#f56954'];
        this.dataLabels = { enabled: false };
        this.title = {};
        this.yaxis = [
            {
                forceNiceScale: true,
                labels: {
                    formatter: function (value) {
                        var pipe = new _common_utils_format_thousands_pipe__WEBPACK_IMPORTED_MODULE_1__["FormatThousandsPipe"]();
                        return pipe.transform(value.toString()) + ' TB';
                    }
                }
            },
        ];
        this.legend = {
            formatter: function (value, _a) {
                var seriesIndex = _a.seriesIndex, w = _a.w;
                var labels = ['Subscribed Capacity (TB)', 'Logical Capacity (TB)', 'Physical Capacity (TB)'];
                return labels[seriesIndex];
            }
        };
    }
    CapacityHistoryChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.yaxis[0].min = _common_utils_array_utils__WEBPACK_IMPORTED_MODULE_2__["ArrayUtils"].min(this.series.map(function (serie) { return _this.findMinimum(serie); }));
    };
    CapacityHistoryChartComponent.prototype.findMinimum = function (serie) {
        var yValues = serie.data.map(function (value) { return value.y; });
        return _common_utils_array_utils__WEBPACK_IMPORTED_MODULE_2__["ArrayUtils"].min(yValues);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CapacityHistoryChartComponent.prototype, "series", void 0);
    CapacityHistoryChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-capacity-history-chart',
            template: __webpack_require__(/*! ./capacity-history-chart.component.html */ "./src/app/components/dashboard/charts/capacity-history-chart/capacity-history-chart.component.html"),
            styles: [__webpack_require__(/*! ./capacity-history-chart.component.css */ "./src/app/components/dashboard/charts/capacity-history-chart/capacity-history-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CapacityHistoryChartComponent);
    return CapacityHistoryChartComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/charts/history-chart/history-chart.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/charts/history-chart/history-chart.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NoYXJ0cy9oaXN0b3J5LWNoYXJ0L2hpc3RvcnktY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashboard/charts/history-chart/history-chart.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/dashboard/charts/history-chart/history-chart.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<apx-chart [series]=\"series\" [chart]=\"chart\" [colors]=\"fill\" [xaxis]=\"xaxis\" [yaxis]=\"yaxis\" [legend]=\"legend\"\n           [dataLabels]=\"dataLabels\" [title]=\"title\"></apx-chart>\n"

/***/ }),

/***/ "./src/app/components/dashboard/charts/history-chart/history-chart.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/dashboard/charts/history-chart/history-chart.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HistoryChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryChartComponent", function() { return HistoryChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_utils_format_thousands_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/utils/format-thousands.pipe */ "./src/app/common/utils/format-thousands.pipe.ts");
/* harmony import */ var _common_utils_array_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/utils/array-utils */ "./src/app/common/utils/array-utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryChartComponent = /** @class */ (function () {
    function HistoryChartComponent() {
        this.series = [];
        this.chart = { type: 'area', height: '300' };
        this.xaxis = { type: 'datetime', labels: { format: 'yyyy-MM-dd' } };
        this.colors = ['#a09608', '#38a008', '#08a09d', '#421570', '#f56954'];
        this.dataLabels = { enabled: false };
        this.title = {};
        this.yaxis = [
            {
                seriesName: 'TRANSFER',
                labels: {
                    formatter: function (value) {
                        var pipe = new _common_utils_format_thousands_pipe__WEBPACK_IMPORTED_MODULE_1__["FormatThousandsPipe"]();
                        return pipe.transform(value.toString()) + ' MBps';
                    }
                },
                forceNiceScale: true,
            },
            {
                seriesName: 'WORKLOAD',
                opposite: true,
                forceNiceScale: true,
                labels: {
                    formatter: function (value) {
                        var pipe = new _common_utils_format_thousands_pipe__WEBPACK_IMPORTED_MODULE_1__["FormatThousandsPipe"]();
                        return pipe.transform(value.toString()) + ' IOPS';
                    }
                }
            }
        ];
        this.legend = {
            formatter: function (value, _a) {
                var seriesIndex = _a.seriesIndex, w = _a.w;
                var labels = ['Transfer (MBps)', 'Workload (IOPS)'];
                return labels[seriesIndex];
            }
        };
    }
    HistoryChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.series.forEach(function (serie) { return _this.setMinimum(serie); });
        this.series.forEach(function (serie) { return _this.setMaximum(serie); });
    };
    HistoryChartComponent.prototype.setMinimum = function (serie) {
        var yaxis = this.yaxis.find(function (y) { return y.seriesName === serie.name; });
        var yValues = serie.data.map(function (value) { return value.y; });
        yaxis.min = _common_utils_array_utils__WEBPACK_IMPORTED_MODULE_2__["ArrayUtils"].min(yValues);
    };
    HistoryChartComponent.prototype.setMaximum = function (serie) {
        var yaxis = this.yaxis.find(function (y) { return y.seriesName === serie.name; });
        var yValues = serie.data.map(function (value) { return value.y; });
        yaxis.max = _common_utils_array_utils__WEBPACK_IMPORTED_MODULE_2__["ArrayUtils"].max(yValues);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HistoryChartComponent.prototype, "series", void 0);
    HistoryChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history-chart',
            template: __webpack_require__(/*! ./history-chart.component.html */ "./src/app/components/dashboard/charts/history-chart/history-chart.component.html"),
            styles: [__webpack_require__(/*! ./history-chart.component.css */ "./src/app/components/dashboard/charts/history-chart/history-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HistoryChartComponent);
    return HistoryChartComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/charts/region-donut/region-donut.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/charts/region-donut/region-donut.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NoYXJ0cy9yZWdpb24tZG9udXQvcmVnaW9uLWRvbnV0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/charts/region-donut/region-donut.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/dashboard/charts/region-donut/region-donut.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<apx-chart [chart]=\"chart\" [series]=\"series\" [title]=\"title\" [labels]=\"labels\" [tooltip]=\"tooltip\"\n           [plotOptions]=\"plotOptions\" [dataLabels]=\"dataLabels\"></apx-chart>\n"

/***/ }),

/***/ "./src/app/components/dashboard/charts/region-donut/region-donut.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/dashboard/charts/region-donut/region-donut.component.ts ***!
  \************************************************************************************/
/*! exports provided: RegionDonutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionDonutComponent", function() { return RegionDonutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_statistics_utils_number_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../global-statistics/utils/number.formatter */ "./src/app/global-statistics/utils/number.formatter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegionDonutComponent = /** @class */ (function () {
    function RegionDonutComponent() {
        this.chart = {
            type: 'donut',
            animations: { enabled: false },
            height: '220px'
        };
        this.regionLabels = [];
        this.title = { text: 'Region', unit: '', useKFormatter: false }; // small hack for exposing unit attribute in formatters
        this.unit = '';
        this.useKFormatter = false;
        this.dataLabels = {
            enabled: true,
            formatter: function (value, _a) {
                var seriesIndex = _a.seriesIndex, dataPointIndex = _a.dataPointIndex, w = _a.w;
                var serieValue = w.config.series[seriesIndex];
                return _global_statistics_utils_number_formatter__WEBPACK_IMPORTED_MODULE_1__["NumberFormatter"].kFormat(parseFloat(serieValue).toFixed(0), w.config.labels.useKFormatter);
            }
        };
        this.plotOptions = {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: -20,
                            fontSize: '12px'
                        },
                        value: {
                            offsetY: -10,
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            offsetY: -10,
                            formatter: function (w) {
                                var aggValue = w.globals.seriesTotals.reduce(function (a, b) {
                                    return a + b;
                                }, 0);
                                return _global_statistics_utils_number_formatter__WEBPACK_IMPORTED_MODULE_1__["NumberFormatter"].kFormat(parseFloat(aggValue).toFixed(0), w.config.labels.useKFormatter) + ' ' + w.config.labels.unit;
                            }
                        }
                    }
                }
            }
        };
    }
    RegionDonutComponent.prototype.ngOnInit = function () {
        this.series = this.data;
        this.labels = this.regionLabels;
        this.labels.unit = this.unit;
        this.labels.useKFormatter = this.useKFormatter;
        this.title.text = this.title.text + (" (" + this.labels.unit + ")");
        this.tooltip = {
            y: {
                formatter: function (value, w) {
                    var unit = '';
                    var useKformatter = false;
                    if (w !== undefined && w.config !== undefined) {
                        unit = w.config.labels.unit;
                        useKformatter = w.config.labels.useKFormatter;
                    }
                    return _global_statistics_utils_number_formatter__WEBPACK_IMPORTED_MODULE_1__["NumberFormatter"].kFormat(parseFloat(value).toFixed(0), useKformatter) + ' ' + unit;
                }
            }
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegionDonutComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegionDonutComponent.prototype, "regionLabels", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegionDonutComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegionDonutComponent.prototype, "unit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RegionDonutComponent.prototype, "useKFormatter", void 0);
    RegionDonutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-region-donut',
            template: __webpack_require__(/*! ./region-donut.component.html */ "./src/app/components/dashboard/charts/region-donut/region-donut.component.html"),
            styles: [__webpack_require__(/*! ./region-donut.component.css */ "./src/app/components/dashboard/charts/region-donut/region-donut.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegionDonutComponent);
    return RegionDonutComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  min-height: 60px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"alerts.length > 0\">\n  <section class=\"content-header\">\n    <H1><i class=\"fa fa-bell\"></i> Alerts (Last 24 Hours)</H1>\n  </section>\n  <section class=\"content\">\n    <h4>Performance</h4>\n    <div *ngFor=\"let alertType of alertsPerformance;let i = index\">\n      <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-3\">\n        <app-alert-info-box [alert]=\"getAlert(alertType)\"\n                            [context]=\"getLinkContext(alertType)\"\n                            [label]=\"getAlertLabel(alertType)\"\n                            [icon]=\"getAlertIcon(alertType)\"></app-alert-info-box>\n      </div>\n    </div>\n  </section>\n  <section class=\"content\">\n    <h4>Operations</h4>\n    <div *ngFor=\"let alertType of alertsOperations;let i = index\" class=\"col-xs-6 col-sm-4 col-md-3 col-lg-3\">\n      <app-alert-info-box [alert]=\"getAlert(alertType)\"\n                          [context]=\"getLinkContext(alertType)\"\n                          [label]=\"getAlertLabel(alertType)\"\n                          [icon]=\"getAlertIcon(alertType)\"></app-alert-info-box>\n    </div>\n  </section>\n\n\n</div>\n<div class=\"row\" *ngIf=\"metrics.length > 0\">\n  <section class=\"content-header\">\n    <h1><i class=\"fa fa-chart-area\"></i> Infrastructure stats</h1>\n  </section>\n</div>\n<div class=\"row\">\n\n\n  <section class=\"content\" *ngIf=\"metrics.length > 0\">\n    <h4>Total load (Last 24 hours)</h4>\n    <div *ngFor=\"let type of perfMetricsType\" class=\"col-12 col-sm-6 col-md-6 col-lg-4\">\n      <app-region-donut [data]=\"getMetricValueInRegions(type, regionOrder)\" [regionLabels]=\"getRegionLabels()\"\n                        [title]=\"{text: getMetricLabel(type)}\" [unit]=\"findUnitInMetric(type)\"\n                        [useKFormatter]=\"isKFormatterUsed(type)\"></app-region-donut>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"box pad\">\n        <div class=\"box-header\">\n          <h3 class=\"box-title\">Total Workload and Transfer History</h3>\n        </div>\n        <div class=\"box-body\">\n          <app-history-chart [series]=\"perfGraphSeries\"></app-history-chart>\n        </div>\n      </div>\n    </div>\n\n  </section>\n\n</div>\n<div class=\"row\">\n  <section class=\"content\" *ngIf=\"metrics.length > 0\">\n    <h3>Total capacity</h3>\n    <div *ngFor=\"let type of displayCapacityType\" class=\"col-12 col-sm-6 col-md-6 col-lg-4\">\n      <app-region-donut [data]=\"getMetricValueInRegions(type, regionOrder)\" [regionLabels]=\"getRegionLabels()\"\n                        [title]=\"{text: getMetricLabel(type)}\" [unit]=\"findUnitInMetric(type)\"\n                        [useKFormatter]=\"isKFormatterUsed(type)\"></app-region-donut>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"box pad\">\n        <div class=\"box-header\">\n          <h3 class=\"box-title\">Total Capacity History</h3>\n        </div>\n        <div class=\"box-body\">\n          <app-capacity-history-chart [series]=\"capacityGraphSeries\"></app-capacity-history-chart>\n        </div>\n      </div>\n    </div>\n  </section>\n\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"box pad\">\n      <div class=\"box-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\" *ngIf=\"metrics.length > 0\">\n            <app-bar-chart [data]=\"getMetricValueInRegions(logicalChangeType, regionOrder)\"\n                           [regionLabels]=\"getRegionLabels()\"\n                           [title]=\"{text: getMetricLabel(logicalChangeType)}\"\n                           [unit]=\"findUnitInMetric(logicalChangeType)\"\n                           [useKFormatter]=\"isKFormatterUsed(logicalChangeType)\"></app-bar-chart>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--  <section class=\"content\">-->\n  <div class=\"col-md-6\">\n    <div class=\"box pad\">\n      <div class=\"box-body\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-lg-4\">\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <app-small-box *ngIf=\"datacenters !== undefined\" [label]=\"'Datacenters'\"\n                               [data]=\"datacenters\" [color]=\"'bg-green'\" [icon]=\"'fas fa-building'\"></app-small-box>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <app-small-box *ngIf=\"registeredSystems !== undefined\" [label]=\"'Registered systems'\"\n                               [data]=\"registeredSystems\" [color]=\"'bg-blue'\" [icon]=\"'fas fa-cubes'\"></app-small-box>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-8 col-lg-8\">\n            <h4>Geo-location of datacenters</h4>\n            <div id=\"world-map-markers\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--  </section>-->\n  <!--  <section class=\"content\">-->\n\n  <!--  </section>-->\n</div>\n\n"

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
/* harmony import */ var _common_models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/metrics/metric.vo */ "./src/app/common/models/metrics/metric.vo.ts");
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
/* harmony import */ var _common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/metrics/alert-type.enum */ "./src/app/common/models/metrics/alert-type.enum.ts");
/* harmony import */ var _common_models_dtos_region_metric_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/models/dtos/region-metric.dto */ "./src/app/common/models/dtos/region-metric.dto.ts");
/* harmony import */ var _common_models_dtos_region_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/models/dtos/region.enum */ "./src/app/common/models/dtos/region.enum.ts");
/* harmony import */ var _common_storage_convert_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/storage-convert.pipe */ "./src/app/common/storage-convert.pipe.ts");
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
        this.linkContext = {};
        this.colors = ['#a09608', '#38a008', '#08a09d', '#421570', '#f56954'];
        this.currentColor = 0;
        this.perfGraphSeries = [];
        this.capacityGraphSeries = [];
        this.perfMetricsType = [_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WORKLOAD, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TRANSFER];
        this.logicalChangeType = _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_CHANGE_1M;
        // TODO refactor to have only one of this 2 following arrays
        this.capacityMetricsType = [
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].SUBSCRIBED_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_CHANGE_1M
        ];
        this.displayCapacityType = [
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].SUBSCRIBED_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_CAPACITY,
        ];
        this.capacityMetricSimple = [
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].SUBSCRIBED_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WORKLOAD,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TRANSFER
        ];
        this.regionOrder = [_common_models_dtos_region_enum__WEBPACK_IMPORTED_MODULE_6__["Region"].EUROPE, _common_models_dtos_region_enum__WEBPACK_IMPORTED_MODULE_6__["Region"].AMERICA, _common_models_dtos_region_enum__WEBPACK_IMPORTED_MODULE_6__["Region"].ASIA];
        this.allMetricType = this.perfMetricsType.concat(this.capacityMetricsType);
        this.useKFormatter = [_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WORKLOAD];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metricLabels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WORKLOAD] = 'Total Workload';
        this.metricLabels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TRANSFER] = 'Total Transfer';
        this.metricLabels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_CAPACITY] = 'Logical Capacity';
        this.metricLabels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_CAPACITY] = 'Physical Capacity';
        this.metricLabels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].SUBSCRIBED_CAPACITY] = 'Subscribed Capacity';
        this.metricLabels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_CHANGE_1M] = 'Monthly Changed (logical)';
        this.alertLabels[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CAPACITY_USAGE] = 'Capacity Usage Events';
        this.alertLabels[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CPU] = 'CPU Utilization Events';
        this.alertLabels[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].DISBALANCE_EVENTS] = 'CHA Pair Imbalances';
        this.alertLabels[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].PORT_DISBALANCE_EVENTS] = 'FE Port Imbalances';
        this.alertLabels[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].HDD] = 'HDD Utilization Events';
        this.alertLabels[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].RESPONSE] = 'Latency Events';
        this.alertLabels[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].SLA_EVENTS] = 'Out of SLA Events';
        this.alertLabels[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].WRITE_PENDING] = 'Cache Write Pending Events';
        this.alertIcons[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CAPACITY_USAGE] = 'fa-chart-pie';
        this.alertIcons[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CPU] = 'fa-tachometer-alt';
        this.alertIcons[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].DISBALANCE_EVENTS] = 'fa-random';
        this.alertIcons[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].PORT_DISBALANCE_EVENTS] = 'fa-random';
        this.alertIcons[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].HDD] = 'fa-hdd';
        this.alertIcons[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].RESPONSE] = 'fa-chart-line';
        this.alertIcons[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].SLA_EVENTS] = 'fa-bell';
        this.alertIcons[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].WRITE_PENDING] = 'fa-chart-bar';
        this.linkContext[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CAPACITY_USAGE] = 'physical-capacity';
        this.linkContext[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CPU] = 'performance';
        this.linkContext[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].DISBALANCE_EVENTS] = 'adapters';
        this.linkContext[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].PORT_DISBALANCE_EVENTS] = 'adapters';
        this.linkContext[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].HDD] = 'performance';
        this.linkContext[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].RESPONSE] = 'performance';
        this.linkContext[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].SLA_EVENTS] = 'dp-sla';
        this.linkContext[_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].WRITE_PENDING] = 'physical-capacity';
        this.alertsPerformance.push(_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CPU, _common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].HDD, _common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].WRITE_PENDING, _common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].RESPONSE);
        this.alertsOperations.push(_common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].CAPACITY_USAGE, _common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].DISBALANCE_EVENTS, _common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].PORT_DISBALANCE_EVENTS, _common_models_metrics_alert_type_enum__WEBPACK_IMPORTED_MODULE_4__["AlertType"].SLA_EVENTS);
        this.metricService.getInfrastructureStats().subscribe(function (stats) {
            _this.alerts = stats.alerts;
            _this.metrics = _this.transformCapacityMetrics(stats.metrics);
        });
        this.metricService.getDatacenters().subscribe(function (data) {
            _this.datacenters = new _common_models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_2__["Metric"]();
            _this.datacenters.value = data.datacenters.length;
            _this.datacenters.unit = '';
            _this.registeredSystems = new _common_models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_2__["Metric"]();
            _this.registeredSystems.unit = '';
            _this.registeredSystems.value = data.datacenters.reduce(function (previousValue, currentValue) {
                return previousValue + currentValue.systems.length;
            }, 0);
        });
        this.metricService.getGraphData([_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TRANSFER, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WORKLOAD]).subscribe(function (dto) {
            dto.data.forEach(function (serie) {
                _this.perfGraphSeries.push({ name: serie.type, data: serie.data });
            });
        });
        this.metricService.getCapacityGraphData([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].SUBSCRIBED_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_CAPACITY
        ]).subscribe(function (dto) {
            dto.data.forEach(function (serie) {
                _this.capacityGraphSeries.push({ name: serie.type, data: serie.data });
            });
        });
        this.getMap();
    };
    DashboardComponent.prototype.transformCapacityMetrics = function (regionData) {
        var _this = this;
        var transformer = new _common_storage_convert_pipe__WEBPACK_IMPORTED_MODULE_7__["StorageConvertPipe"]();
        return regionData.map(function (region) {
            var mappedRegion = new _common_models_dtos_region_metric_dto__WEBPACK_IMPORTED_MODULE_5__["RegionMetricDto"]();
            mappedRegion.region = region.region;
            _this.allMetricType.forEach(function (type) {
                var metric;
                if (_this.isSimpleChartMetric(type)) {
                    metric = _this.findMetricInRegion(region, type);
                }
                else { // here should be switch for specific type and also throw exception if unknown type
                    var changeMetric = _this.findMetricInRegion(region, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].CAPACITY_CHANGE_1M);
                    var totalSaving = _this.findMetricInRegion(region, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TOTAL_SAVING_EFFECT);
                    metric = new _common_models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_2__["Metric"]();
                    metric.unit = 'GB';
                    metric.type = _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_CHANGE_1M;
                    metric.value = changeMetric.value * totalSaving.value;
                }
                if (metric === undefined) {
                    console.error('Cannot find ' + type + ' in ' + region);
                }
                var translatedMetric = transformer.transform(metric);
                mappedRegion.metrics.push(translatedMetric);
            });
            return mappedRegion;
        });
    };
    DashboardComponent.prototype.getMetricValueInRegions = function (type, regionOrder) {
        var _this = this;
        var mappedValues = [];
        regionOrder.forEach(function (region) {
            var regionData = _this.metrics.find(function (metrics) { return metrics.region === region; });
            if (regionData === undefined) {
                console.error('Cannot find ' + region + ' in capacity statistics');
                return;
            }
            var metricValue = _this.findMetricInRegion(regionData, type).value;
            mappedValues.push(_this.roundNumber(metricValue));
        });
        return mappedValues;
    };
    DashboardComponent.prototype.findMetricInRegion = function (regionData, type) {
        return regionData.metrics.find(function (metric) { return metric.type === type; });
    };
    DashboardComponent.prototype.isSimpleChartMetric = function (type) {
        return this.capacityMetricSimple.some(function (simpleType) { return simpleType === type; });
    };
    DashboardComponent.prototype.roundNumber = function (value) {
        if (value === undefined) {
            return 0;
        }
        return parseFloat(value.toFixed(2));
    };
    DashboardComponent.prototype.findUnitInMetric = function (type) {
        var foundUnit = '';
        this.metrics.forEach(function (region) {
            var foundMetric = region.metrics.find(function (metric) { return metric.type === type; });
            if (foundMetric !== undefined) {
                foundUnit = foundMetric.unit;
            }
        });
        return foundUnit;
    };
    DashboardComponent.prototype.getAlertIcon = function (type) {
        return this.alertIcons[type];
    };
    DashboardComponent.prototype.getMetricLabel = function (type) {
        return this.metricLabels[type];
    };
    DashboardComponent.prototype.getLinkContext = function (type) {
        return this.linkContext[type];
    };
    DashboardComponent.prototype.getAlertLabel = function (type) {
        return this.alertLabels[type];
    };
    DashboardComponent.prototype.getAlert = function (type) {
        return this.alerts.find(function (searchAlert) { return searchAlert.type === type; });
    };
    DashboardComponent.prototype.getRegionLabels = function () {
        return ['Europe', 'America', 'Asia'];
    };
    DashboardComponent.prototype.isKFormatterUsed = function (type) {
        return this.useKFormatter.some(function (kType) { return kType === type; });
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

module.exports = ".active {\n  background-color: rgba(30, 40, 44, 0.7);\n\n  border-bottom: 4px #1ABB9C solid;\n  /*box-shadow: 0 15px 15px rgba(145, 92, 182, .4);*/\n}\n\n.btn {\n  padding-bottom: 11px;\n  padding-top: 13px;\n}\n\n.sa-logo {\n  height: 50px;\n}\n\n.logo-title {\n  width: 200px;\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7O0VBRXZDLGdDQUFnQztFQUNoQyxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDQwLCA0NCwgMC43KTtcblxuICBib3JkZXItYm90dG9tOiA0cHggIzFBQkI5QyBzb2xpZDtcbiAgLypib3gtc2hhZG93OiAwIDE1cHggMTVweCByZ2JhKDE0NSwgOTIsIDE4MiwgLjQpOyovXG59XG5cbi5idG4ge1xuICBwYWRkaW5nLWJvdHRvbTogMTFweDtcbiAgcGFkZGluZy10b3A6IDEzcHg7XG59XG5cbi5zYS1sb2dvIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubG9nby10aXRsZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n\n  <!-- Logo -->\n  <a href=\"\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><b>S</b>an</span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><b>Storage Analytics</b></span>\n  </a>\n\n\n  <!-- Header Navbar -->\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n      <i class=\"fa fa-bars\"></i>\n      <span class=\"sr-only\">Toggle navigation</span>\n    </a>\n\n    <ul [@openClose]=\"enable ? 'true' : 'false'\"\n        (@openClose.start)=\"onAnimationEvent($event)\"\n        class=\"nav navbar-nav navbar-left\">\n      <li [class.active]=\"isCurrentPeriod(periodType.DAY)\"><a class=\"btn\" (click)=\"setCurrentPeriod(periodType.DAY)\">Last\n        Day</a></li>\n      <li [class.active]=\"isCurrentPeriod(periodType.WEEK)\"><a class=\"btn\" (click)=\"setCurrentPeriod(periodType.WEEK)\">Last\n        Week</a></li>\n      <li [class.active]=\"isCurrentPeriod(periodType.MONTH)\"><a class=\"btn\"\n                                                                (click)=\"setCurrentPeriod(periodType.MONTH)\">Last\n        Month</a></li>\n    </ul>\n    <div class=\"logo-title\">\n      <img [src]=\"logoUrl\" class=\"sa-logo pull-left\"/>\n    </div>\n  </nav>\n\n\n</header>\n"

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
        this.periodType = _metric_service__WEBPACK_IMPORTED_MODULE_1__["PeriodType"];
        this.currentPeriod = _metric_service__WEBPACK_IMPORTED_MODULE_1__["PeriodType"].WEEK;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.periodService.periodEnableAnnouncement.subscribe(function (value) { return _this.enable = value; });
        this.periodService.periodAnnouncement$.subscribe(function (value) { return _this.currentPeriod = value; });
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

module.exports = "<iframe name=\"main-content\" class=\"main-content\" [src]=\"url\" id=\"form-iframe\"\n        style=\"margin:0; width: 100%; border:none; overflow:scroll;\"></iframe>\n"

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

module.exports = ".sidebar-menu .treeview-menu > li > a.active, .skin-blue .sidebar-menu .treeview-menu > li > a:hover {\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLW1lbnUgLnRyZWV2aWV3LW1lbnUgPiBsaSA+IGEuYWN0aXZlLCAuc2tpbi1ibHVlIC5zaWRlYmFyLW1lbnUgLnRyZWV2aWV3LW1lbnUgPiBsaSA+IGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/side-menu/side-menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<script src=\"../../../../WEB/sub-content-loader.js\"></script>-->\n<aside class=\"main-sidebar\">\n\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n    <div class=\"top-part-menu\">\n      <ul id=\"dash-link\" class=\"sidebar-menu\">\n        <li><a href=\"\"><i class=\"fa fa-home\"></i><span>Main dashboard</span></a></li>\n      </ul>\n      <!-- Sidebar Menu.ts -->\n      <ul id=\"dash-menu\" class=\"sidebar-menu\" data-widget=\"tree\">\n\n        <li class=\"treeview\">\n          <a href=\"#\"><i class=\"fa fa-chart-area\"></i><span>Global Statistics</span>\n            <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li *ngFor=\"let globalLink of globalStatisticsLinks\"\n            ><a [routerLink]=\"[globalLink.linkPart]\" routerLinkActive=\"active\">{{globalLink.name}}</a></li>\n          </ul>\n        </li>\n\n      </ul>\n    </div>\n    <div class=\"central-part-menu\">\n      <ul id=\"main-menu\" class=\"sidebar-menu\" data-widget=\"tree\">\n        <li class=\"header\">STORAGE ARRAYS</li>\n        <!-- search form (Optional) -->\n        <form action=\"#\" method=\"get\" class=\"sidebar-form\" autocomplete=\"off\">\n          <div class=\"input-group\">\n            <input [(ngModel)]=\"searchExpression\" (input)=\"search()\" type=\"text\" name=\"searchExp\" class=\"form-control\"\n                   placeholder=\"Search...\" id=\"menu-search-input\"/>\n            <span class=\"input-group-btn\">\n              <button type=\"button\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n              </button>\n            </span>\n          </div>\n        </form>\n        <!-- /.search form -->\n        <li *ngFor=\"let menuItem of filteredItems\" class=\"treeview\">\n          <a href=\"#\"><i class=\"fa fa-cogs\"></i><span>{{menuItem.label}}</span>\n            <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li *ngFor=\"let link of menuItem.items\" class=\"treeview\">\n              <a href=\"#\"><i class=\"fa fa-cogs\"></i><span>{{link.name}}</span>\n                <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n              </a>\n              <ul class=\"treeview-menu\">\n                <li *ngFor=\"let poolLink of poolMetricLinks\"><a\n                  [routerLink]=\"link.id | iframeUrlCreator:{iframeLink:poolLink.linkPart}\"\n                  routerLinkActive=\"active\">{{poolLink.name}}</a></li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    <div class=\"bottom-part-menu\">\n\n    </div>\n    <!-- /.sidebar-menu -->\n  </section>\n  <!-- /.sidebar -->\n</aside>\n"

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
/* harmony import */ var _common_models_menu_tree_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/menu-tree.vo */ "./src/app/common/models/menu-tree.vo.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _common_models_menu_item_vo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/menu-item.vo */ "./src/app/common/models/menu-item.vo.ts");
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
            { id: 7, linkPart: 'trends', name: 'Trends' },
            { id: 8, linkPart: 'capacityAnalysis', name: 'Capacity Analysis' }
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
            { id: 2, linkPart: "/global-statistics/physical-capacity", name: 'Physical Capacity' },
            { id: 3, linkPart: "/global-statistics/logical-capacity", name: 'Logical Capacity' },
            { id: 4, linkPart: "/global-statistics/dp-sla", name: 'SLA Events' },
            { id: 5, linkPart: "/global-statistics/adapters", name: 'CHA&Port Imbalances' },
            { id: 6, linkPart: "/global-statistics/host-group-capacity", name: 'VMware Capacity' },
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
                        filteredTree = new _common_models_menu_tree_vo__WEBPACK_IMPORTED_MODULE_1__["MenuTree"](tree.label, []);
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
                items.push(new _common_models_menu_item_vo__WEBPACK_IMPORTED_MODULE_3__["MenuItem"](system.id, system.name));
            }
            menu.push(new _common_models_menu_tree_vo__WEBPACK_IMPORTED_MODULE_1__["MenuTree"](dataCenter.label, items));
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

/***/ "./src/app/global-statistics/alert-rule.ts":
/*!*************************************************!*\
  !*** ./src/app/global-statistics/alert-rule.ts ***!
  \*************************************************/
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

/***/ "./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Aggregated values widget ***/\ndiv.agg-vals {\n  margin-top: 25px;\n}\ntable {\n  border-collapse: separate;\n  border-spacing: 2px 0px;\n  width: 100%;\n}\n.agg-value, .agg-name {\n  margin-right: 5px;\n}\n.agg-vals > .agg-value, .agg-names > .agg-name {\n  border: 1px #5C91A8 solid;\n  font-weight: bold;\n  text-align: center;\n\n}\n.agg-name {\n  background-color: #3c8dbc;\n  color: white;\n  font-size: 10px;\n  padding: 5px;\n}\n.agg-vals .agg-value {\n  padding: 5px;\n  font-size: 12px;\n  background-color: white;\n  /*color: white;*/\n}\n.agg-unit {\n  font-size: 10px;\n}\n.col-control {\n  width: 3.5%;\n  vertical-align: middle;\n}\n.col {\n  width: 6.66%;\n}\n.col-label {\n  width: 8%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvY29tcG9uZW50cy9hZ2dyZWdhdGVkLXN0YXRpc3RpY3MvYWdncmVnYXRlZC1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2NvbXBvbmVudHMvYWdncmVnYXRlZC1zdGF0aXN0aWNzL2FnZ3JlZ2F0ZWQtc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBBZ2dyZWdhdGVkIHZhbHVlcyB3aWRnZXQgKioqL1xuZGl2LmFnZy12YWxzIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMnB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZ2ctdmFsdWUsIC5hZ2ctbmFtZSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uYWdnLXZhbHMgPiAuYWdnLXZhbHVlLCAuYWdnLW5hbWVzID4gLmFnZy1uYW1lIHtcbiAgYm9yZGVyOiAxcHggIzVDOTFBOCBzb2xpZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4uYWdnLW5hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M4ZGJjO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYWdnLXZhbHMgLmFnZy12YWx1ZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLypjb2xvcjogd2hpdGU7Ki9cbn1cblxuLmFnZy11bml0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY29sLWNvbnRyb2wge1xuICB3aWR0aDogMy41JTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbCB7XG4gIHdpZHRoOiA2LjY2JTtcbn1cblxuLmNvbC1sYWJlbCB7XG4gIHdpZHRoOiA4JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--AGGREGATED VALUES-->\n<table *ngIf=\"result != null\">\n  <thead>\n  <tr class=\"agg-names\">\n    <td *ngFor=\"let type of aggregatedTypes\" class=\"col agg-name\">{{getLabelByType(type)}}</td>\n  </tr>\n  </thead>\n  <tbody>\n  <tr class=\"agg-vals\">\n    <td *ngFor=\"let type of aggregatedTypes\" class=\"col agg-value\">\n        <span\n          *ngIf=\"getMetricByType(type) != undefined\">{{toFixed(type, getMetricByType(type).value, 1) | formatThousands}}\n          <span\n            class=\"agg-unit\">{{getMetricByType(type).unit}}</span></span>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AggregatedStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AggregatedStatisticsComponent", function() { return AggregatedStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/sasi-weighted-arithmetic-mean.utils */ "./src/app/global-statistics/utils/sasi-weighted-arithmetic-mean.utils.ts");
/* harmony import */ var _global_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-physical-capacity-statistics.component */ "./src/app/global-statistics/components/aggregated-statistics/global-physical-capacity-statistics.component.ts");
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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





var AggregatedStatisticsComponent = /** @class */ (function (_super) {
    __extends(AggregatedStatisticsComponent, _super);
    function AggregatedStatisticsComponent(localStorageService) {
        var _this = _super.call(this) || this;
        _this.localStorageService = localStorageService;
        return _this;
    }
    AggregatedStatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aggregatedTypes = [
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].SELECTED_COUNT
        ].concat(this.aggregatedColumns.map(function (type) { return type.index; }));
        this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].SELECTED_COUNT] = '# Selected';
        this.aggregatedColumns.forEach(function (type) { return _this.labels[type.index] = type.label; });
        this.typesIntValue = [
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].SELECTED_COUNT,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PHYSICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PHYSICAL_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].AVAILABLE_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].LOGICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PHYSICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].CAPACITY_CHANGE_1D,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].CAPACITY_CHANGE_1W,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].CAPACITY_CHANGE_1M
        ];
        this.aggregate();
        this.localStorageService.observe(this.prefix + '_selected').subscribe(function (data) {
            _this.selectedRows = data.newValue;
            _this.aggregate();
        });
    };
    AggregatedStatisticsComponent.prototype.aggregate = function () {
        this.selectedRows = this.localStorageService.get(this.prefix + '_selected');
        if (this.selectedRows === null) {
            this.selectedRows = [];
        }
        var mean = new _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_2__["SasiWeightedArithmeticMeanUtils"]();
        this.result = mean.computeSummaries(this.data, this.selectedRows);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AggregatedStatisticsComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AggregatedStatisticsComponent.prototype, "aggregatedColumns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AggregatedStatisticsComponent.prototype, "prefix", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AggregatedStatisticsComponent.prototype, "selectedRows", void 0);
    AggregatedStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aggregated-statistics',
            template: __webpack_require__(/*! ./aggregated-statistics.component.html */ "./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.html"),
            styles: [__webpack_require__(/*! ./aggregated-statistics.component.css */ "./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], AggregatedStatisticsComponent);
    return AggregatedStatisticsComponent;
}(_global_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_3__["CommonAggregatedStats"]));



/***/ }),

/***/ "./src/app/global-statistics/components/aggregated-statistics/global-host-group-capacity.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/global-statistics/components/aggregated-statistics/global-host-group-capacity.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: GlobalHostGroupCapacityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalHostGroupCapacityComponent", function() { return GlobalHostGroupCapacityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _common_utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/utils/system-pool-2-sasi-group-table.pipe */ "./src/app/common/utils/system-pool-2-sasi-group-table.pipe.ts");
/* harmony import */ var _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/sasi-weighted-arithmetic-mean.utils */ "./src/app/global-statistics/utils/sasi-weighted-arithmetic-mean.utils.ts");
/* harmony import */ var _common_components_sasi_table_row_table_selected_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/components/sasi-table/row-table/selected-row */ "./src/app/common/components/sasi-table/row-table/selected-row.ts");
/* harmony import */ var _global_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global-physical-capacity-statistics.component */ "./src/app/global-statistics/components/aggregated-statistics/global-physical-capacity-statistics.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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







var GlobalHostGroupCapacityComponent = /** @class */ (function (_super) {
    __extends(GlobalHostGroupCapacityComponent, _super);
    function GlobalHostGroupCapacityComponent(metricService, transformer) {
        var _this = _super.call(this) || this;
        _this.metricService = metricService;
        _this.transformer = transformer;
        _this.aggregatedTypes = [
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_TOTAL,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1D,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1W,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1M
        ];
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_TOTAL] = 'Provisioned Capacity';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED] = 'Used Capacity';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED_PERC] = 'Used Capacity';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1D] = 'Last Day Change';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1W] = 'Last Week Change';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1M] = 'Last Month Change';
        return _this;
    }
    GlobalHostGroupCapacityComponent.prototype.ngOnInit = function () {
        this.getTableData();
    };
    GlobalHostGroupCapacityComponent.prototype.getTableData = function () {
        var _this = this;
        this.metricService.getGlobalHostGroupCapacityStatistics().subscribe(function (data) {
            var average = new _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_4__["SasiWeightedArithmeticMeanUtils"]();
            var filter = [];
            data.systems.forEach(function (system) { return system.pools.forEach(function (pool) {
                var row = new _common_components_sasi_table_row_table_selected_row__WEBPACK_IMPORTED_MODULE_5__["SelectedRow"](system.name, pool.name);
                filter.push(row);
            }); });
            _this.result = average.computeSummaries(_this.transformer.transform(data.systems, ''), filter);
        }, function (error) {
            console.log(error);
            _this.result = null;
        });
        return this.result;
    };
    GlobalHostGroupCapacityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-global-host-group-capacity',
            template: __webpack_require__(/*! ./aggregated-statistics.component.html */ "./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.html"),
            styles: [__webpack_require__(/*! ./aggregated-statistics.component.css */ "./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_metric_service__WEBPACK_IMPORTED_MODULE_2__["MetricService"],
            _common_utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_3__["SystemPool2SasiGroupTablePipe"]])
    ], GlobalHostGroupCapacityComponent);
    return GlobalHostGroupCapacityComponent;
}(_global_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_6__["CommonAggregatedStats"]));



/***/ }),

/***/ "./src/app/global-statistics/components/aggregated-statistics/global-physical-capacity-statistics.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/global-statistics/components/aggregated-statistics/global-physical-capacity-statistics.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: CommonAggregatedStats, GlobalPhysicalCapacityStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAggregatedStats", function() { return CommonAggregatedStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPhysicalCapacityStatisticsComponent", function() { return GlobalPhysicalCapacityStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
/* harmony import */ var _common_utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/utils/system-pool-2-sasi-group-table.pipe */ "./src/app/common/utils/system-pool-2-sasi-group-table.pipe.ts");
/* harmony import */ var _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/sasi-weighted-arithmetic-mean.utils */ "./src/app/global-statistics/utils/sasi-weighted-arithmetic-mean.utils.ts");
/* harmony import */ var _common_components_sasi_table_row_table_selected_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/components/sasi-table/row-table/selected-row */ "./src/app/common/components/sasi-table/row-table/selected-row.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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






var CommonAggregatedStats = /** @class */ (function () {
    function CommonAggregatedStats() {
        this.aggregatedTypes = [];
        this.labels = [];
        this.typesIntValue = [];
    }
    CommonAggregatedStats.prototype.getMetricByType = function (type) {
        if (this.result.getValue(type) !== undefined) {
            return this.result.getValue(type);
        }
        return null;
    };
    CommonAggregatedStats.prototype.getLabelByType = function (type) {
        return this.labels[type] != null ? this.labels[type] : null;
    };
    CommonAggregatedStats.prototype.toFixed = function (type, value, position) {
        if (value == null) {
            return 'No value';
        }
        if (this.typesIntValue.some(function (item) { return item === type; })) {
            return parseFloat(value).toFixed(0);
        }
        return parseFloat(value).toFixed(position);
    };
    return CommonAggregatedStats;
}());

var GlobalPhysicalCapacityStatisticsComponent = /** @class */ (function (_super) {
    __extends(GlobalPhysicalCapacityStatisticsComponent, _super);
    function GlobalPhysicalCapacityStatisticsComponent(metricService, transformer) {
        var _this = _super.call(this) || this;
        _this.metricService = metricService;
        _this.transformer = transformer;
        _this.aggregatedTypes = [
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].PHYSICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].PHYSICAL_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].AVAILABLE_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].LOGICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].PHYSICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].COMPRESS_RATIO,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].CAPACITY_CHANGE_1D,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].CAPACITY_CHANGE_1W,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].CAPACITY_CHANGE_1M,
        ];
        _this.typesIntValue = [
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].PHYSICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].PHYSICAL_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].AVAILABLE_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].LOGICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].PHYSICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].CAPACITY_CHANGE_1D,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].CAPACITY_CHANGE_1W,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].CAPACITY_CHANGE_1M,
        ];
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].PHYSICAL_CAPACITY] = 'Physical Capacity';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].PHYSICAL_SUBS_PERC] = 'Physical Subs';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].AVAILABLE_CAPACITY] = 'Available Capacity';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].LOGICAL_USED_PERC] = 'Logical Used';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].PHYSICAL_USED_PERC] = 'Physical Used';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].COMPRESS_RATIO] = 'Comp. Ratio';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].CAPACITY_CHANGE_1D] = 'Daily Change';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].CAPACITY_CHANGE_1W] = 'Weekly Change';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].CAPACITY_CHANGE_1M] = 'Monthly Change';
        return _this;
    }
    GlobalPhysicalCapacityStatisticsComponent.prototype.ngOnInit = function () {
        this.getTableData();
    };
    GlobalPhysicalCapacityStatisticsComponent.prototype.getTableData = function () {
        var _this = this;
        this.metricService.getGlobalCapacityStatistics().subscribe(function (data) {
            var average = new _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_4__["SasiWeightedArithmeticMeanUtils"]();
            var filter = [];
            data.systems.forEach(function (system) { return system.pools.forEach(function (pool) {
                var row = new _common_components_sasi_table_row_table_selected_row__WEBPACK_IMPORTED_MODULE_5__["SelectedRow"](system.name, pool.name);
                filter.push(row);
            }); });
            _this.result = average.computeSummaries(_this.transformer.transform(data.systems, ''), filter);
        }, function (error) {
            console.log(error);
            _this.result = null;
        });
        return this.result;
    };
    GlobalPhysicalCapacityStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infrastructure-statistics',
            template: __webpack_require__(/*! ./aggregated-statistics.component.html */ "./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.html"),
            styles: [__webpack_require__(/*! ./aggregated-statistics.component.css */ "./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"],
            _common_utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_3__["SystemPool2SasiGroupTablePipe"]])
    ], GlobalPhysicalCapacityStatisticsComponent);
    return GlobalPhysicalCapacityStatisticsComponent;
}(CommonAggregatedStats));



/***/ }),

/***/ "./src/app/global-statistics/components/grouped-aggregated-statistics/global-logical-statistics.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/global-statistics/components/grouped-aggregated-statistics/global-logical-statistics.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: GlobalLogicalStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalLogicalStatisticsComponent", function() { return GlobalLogicalStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/sasi-weighted-arithmetic-mean.utils */ "./src/app/global-statistics/utils/sasi-weighted-arithmetic-mean.utils.ts");
/* harmony import */ var _common_components_sasi_table_row_table_selected_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/components/sasi-table/row-table/selected-row */ "./src/app/common/components/sasi-table/row-table/selected-row.ts");
/* harmony import */ var _common_utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/utils/system-pool-2-sasi-group-table.pipe */ "./src/app/common/utils/system-pool-2-sasi-group-table.pipe.ts");
/* harmony import */ var _aggregated_statistics_global_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../aggregated-statistics/global-physical-capacity-statistics.component */ "./src/app/global-statistics/components/aggregated-statistics/global-physical-capacity-statistics.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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







var GlobalLogicalStatisticsComponent = /** @class */ (function (_super) {
    __extends(GlobalLogicalStatisticsComponent, _super);
    function GlobalLogicalStatisticsComponent(metricService, transformer) {
        var _this = _super.call(this) || this;
        _this.metricService = metricService;
        _this.transformer = transformer;
        _this.data = null;
        _this.types = [];
        _this.groupTypes = [0, 1, 2, 3, 4, 5, 6];
        _this.groupLabel = [];
        _this.typesIntValue = [
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_FREE,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_TOTAL,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_FREE,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_FREE,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].SUBSCRIBED_CAPACITY
        ];
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].SUBSCRIBED_CAPACITY
        ]);
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_SUBS_PERC
        ]);
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED_PERC
        ]);
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_FREE,
        ]);
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_FREE
        ]);
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_TOTAL,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_FREE
        ]);
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].COMPRESS_RATIO,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].DEDUP_RATIO,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].TOTAL_SAVING_EFFECT
        ]);
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_SUBS_PERC] = 'Physical';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_SUBS_PERC] = 'Logical';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_SUBS_PERC] = 'Net';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED_PERC] = 'Physical';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED_PERC] = 'Logical';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED_PERC] = 'Net';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_CAPACITY] = 'Capacity';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED] = 'Used';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_FREE] = 'Free';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_CAPACITY] = 'Capacity';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED] = 'Used';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_FREE] = 'Free';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_TOTAL] = 'Capacity';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED] = 'Used';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_FREE] = 'Free';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].COMPRESS_RATIO] = 'Comp';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].DEDUP_RATIO] = 'Dedup';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].TOTAL_SAVING_EFFECT] = 'Savings';
        _this.groupLabel.push('Subscribed capacity');
        _this.groupLabel.push('Subscription');
        _this.groupLabel.push('Utilization');
        _this.groupLabel.push('Physical Capacity');
        _this.groupLabel.push('Logical Capacity');
        _this.groupLabel.push('Net Capacity');
        _this.groupLabel.push('Savings');
        return _this;
    }
    GlobalLogicalStatisticsComponent.prototype.ngOnInit = function () {
        this.getTableData();
    };
    GlobalLogicalStatisticsComponent.prototype.getTableData = function () {
        var _this = this;
        this.metricService.getGlobalCapacityStatistics().subscribe(function (data) {
            var average = new _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_3__["SasiWeightedArithmeticMeanUtils"]();
            var filter = [];
            data.systems.forEach(function (system) { return system.pools.forEach(function (pool) {
                var row = new _common_components_sasi_table_row_table_selected_row__WEBPACK_IMPORTED_MODULE_4__["SelectedRow"](system.name, pool.name);
                filter.push(row);
            }); });
            _this.result = average.computeSummaries(_this.transformer.transform(data.systems, ''), filter);
        }, function (error) {
            console.log(error);
            _this.data = null;
        });
        return this.data;
    };
    GlobalLogicalStatisticsComponent.prototype.getGroupLabelByType = function (type) {
        return this.groupLabel[type] != null ? this.groupLabel[type] : null;
    };
    GlobalLogicalStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-global-logical-statistics',
            template: __webpack_require__(/*! ./grouped-aggregated-statistics.component.html */ "./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggregated-statistics.component.html"),
            styles: [__webpack_require__(/*! ./grouped-aggragated-statistics.component.css */ "./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggragated-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_metric_service__WEBPACK_IMPORTED_MODULE_2__["MetricService"],
            _common_utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_5__["SystemPool2SasiGroupTablePipe"]])
    ], GlobalLogicalStatisticsComponent);
    return GlobalLogicalStatisticsComponent;
}(_aggregated_statistics_global_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_6__["CommonAggregatedStats"]));



/***/ }),

/***/ "./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggragated-statistics.component.css":
/*!************************************************************************************************************************!*\
  !*** ./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggragated-statistics.component.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Aggregated values widget ***/\ndiv.agg-vals {\n  margin-top: 25px;\n}\ntable {\n  border-collapse: separate;\n  border-spacing: 2px 0px;\n}\n.agg-value, .agg-name {\n  margin-right: 5px;\n}\n.agg-vals > .agg-value, .agg-names > .agg-name {\n  border: 1px #5C91A8 solid;\n  font-weight: bold;\n  text-align: center;\n\n}\n.agg-name {\n  background-color: #3c8dbc;\n  color: white;\n  font-size: 10px;\n  padding: 5px;\n}\n.agg-vals .agg-value {\n  padding: 5px;\n  font-size: 12px;\n  background-color: white;\n  /*color: white;*/\n}\n.agg-unit {\n  font-size: 10px;\n}\n.col-control {\n  width: 3.5%;\n  vertical-align: middle;\n}\n.col {\n  width: 6.66%;\n}\n.col-label {\n  width: 8%;\n}\n.col-smaller {\n  width: 2%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvY29tcG9uZW50cy9ncm91cGVkLWFnZ3JlZ2F0ZWQtc3RhdGlzdGljcy9ncm91cGVkLWFnZ3JhZ2F0ZWQtc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQztFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvY29tcG9uZW50cy9ncm91cGVkLWFnZ3JlZ2F0ZWQtc3RhdGlzdGljcy9ncm91cGVkLWFnZ3JhZ2F0ZWQtc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBBZ2dyZWdhdGVkIHZhbHVlcyB3aWRnZXQgKioqL1xuZGl2LmFnZy12YWxzIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMnB4IDBweDtcbn1cblxuLmFnZy12YWx1ZSwgLmFnZy1uYW1lIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5hZ2ctdmFscyA+IC5hZ2ctdmFsdWUsIC5hZ2ctbmFtZXMgPiAuYWdnLW5hbWUge1xuICBib3JkZXI6IDFweCAjNUM5MUE4IHNvbGlkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5hZ2ctbmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzhkYmM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hZ2ctdmFscyAuYWdnLXZhbHVlIHtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvKmNvbG9yOiB3aGl0ZTsqL1xufVxuXG4uYWdnLXVuaXQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jb2wtY29udHJvbCB7XG4gIHdpZHRoOiAzLjUlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sIHtcbiAgd2lkdGg6IDYuNjYlO1xufVxuXG4uY29sLWxhYmVsIHtcbiAgd2lkdGg6IDglO1xufVxuXG4uY29sLXNtYWxsZXIge1xuICB3aWR0aDogMiU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggregated-statistics.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggregated-statistics.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--AGGREGATED VALUES-->\n<table *ngIf=\"result != null\">\n  <thead>\n  <tr class=\"agg-names\">\n    <td *ngFor=\"let group of groupTypes\" class=\"agg-name\">{{getGroupLabelByType(group)}}</td>\n  </tr>\n  </thead>\n  <tbody>\n  <tr class=\"agg-vals\">\n    <td *ngFor=\"let group of groupTypes\" class=\"agg-value\"\n        [class.col]=\"types[group].length > 1\"\n        [class.col-smaller]=\"types[group].length === 1\"\n    >\n      <div *ngFor=\"let type of types[group]\">\n        <div *ngIf=\"types[group].length > 1\">\n          <div class=\"text-left col-md-5\">{{getLabelByType(type)}}:</div>\n          <div class=\"text-right col-md-push-6\">\n            <span\n              *ngIf=\"getMetricByType(type) !== undefined && getMetricByType(type) != null\">{{toFixed(type, getMetricByType(type).value, 1) | formatThousands}}\n              <span class=\"agg-unit\">{{getMetricByType(type).unit}}</span></span>\n            <span class='text-gray'\n                  *ngIf=\"getMetricByType(type) === undefined || getMetricByType(type) == null\">No value</span>\n          </div>\n        </div>\n        <div *ngIf=\"types[group].length === 1\">\n        <span\n          *ngIf=\"getMetricByType(type) !== undefined && getMetricByType(type) != null\">{{toFixed(type, getMetricByType(type).value, 1) | formatThousands}}\n          <span class=\"agg-unit\">{{getMetricByType(type).unit}}</span></span>\n          <span class='text-gray'\n                *ngIf=\"getMetricByType(type) === undefined || getMetricByType(type) == null\">No value</span>\n        </div>\n      </div>\n\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggregated-statistics.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggregated-statistics.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: GroupedAggregatedStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedAggregatedStatisticsComponent", function() { return GroupedAggregatedStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/sasi-weighted-arithmetic-mean.utils */ "./src/app/global-statistics/utils/sasi-weighted-arithmetic-mean.utils.ts");
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
/* harmony import */ var _aggregated_statistics_global_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../aggregated-statistics/global-physical-capacity-statistics.component */ "./src/app/global-statistics/components/aggregated-statistics/global-physical-capacity-statistics.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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





var GroupedAggregatedStatisticsComponent = /** @class */ (function (_super) {
    __extends(GroupedAggregatedStatisticsComponent, _super);
    function GroupedAggregatedStatisticsComponent(localStorageService) {
        var _this = _super.call(this) || this;
        _this.localStorageService = localStorageService;
        _this.types = [];
        _this.groupTypes = [0, 1, 2, 3, 4, 5, 6, 7];
        _this.groupLabel = [];
        _this.typesIntValue = [
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].SELECTED_COUNT,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].SUBSCRIBED_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_FREE,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_FREE,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_TOTAL,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_FREE,
        ];
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].SELECTED_COUNT
        ]);
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].SUBSCRIBED_CAPACITY
        ]);
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_SUBS_PERC
        ]);
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_USED_PERC
        ]);
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_FREE,
        ]);
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_FREE
        ]);
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_TOTAL,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_FREE
        ]);
        _this.types.push([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].COMPRESS_RATIO,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].DEDUP_RATIO,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TOTAL_SAVING_EFFECT
        ]);
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_SUBS_PERC] = 'Physical';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_SUBS_PERC] = 'Logical';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_SUBS_PERC] = 'Net';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_USED_PERC] = 'Physical';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_USED_PERC] = 'Logical';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_USED_PERC] = 'Net';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_CAPACITY] = 'Capacity';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_USED] = 'Used';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_FREE] = 'Free';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_CAPACITY] = 'Capacity';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_USED] = 'Used';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_FREE] = 'Free';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_TOTAL] = 'Capacity';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_USED] = 'Used';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].NET_FREE] = 'Free';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].COMPRESS_RATIO] = 'Comp';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].DEDUP_RATIO] = 'Dedup';
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TOTAL_SAVING_EFFECT] = 'Savings';
        _this.groupLabel.push('# Selected');
        _this.groupLabel.push('Subscribed capacity');
        _this.groupLabel.push('Subscription');
        _this.groupLabel.push('Utilization');
        _this.groupLabel.push('Physical Capacity');
        _this.groupLabel.push('Logical Capacity');
        _this.groupLabel.push('Net Capacity');
        _this.groupLabel.push('Savings');
        return _this;
    }
    GroupedAggregatedStatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aggregate();
        this.localStorageService.observe(this.prefix + '_selected').subscribe(function (data) {
            _this.selectedRows = data.newValue;
            _this.aggregate();
        });
    };
    GroupedAggregatedStatisticsComponent.prototype.aggregate = function () {
        this.selectedRows = this.localStorageService.get(this.prefix + '_selected');
        if (this.selectedRows === null) {
            this.selectedRows = [];
        }
        var mean = new _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_2__["SasiWeightedArithmeticMeanUtils"]();
        this.result = mean.computeSummaries(this.data, this.selectedRows);
    };
    GroupedAggregatedStatisticsComponent.prototype.getGroupLabelByType = function (type) {
        return this.groupLabel[type] != null ? this.groupLabel[type] : null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GroupedAggregatedStatisticsComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GroupedAggregatedStatisticsComponent.prototype, "prefix", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GroupedAggregatedStatisticsComponent.prototype, "selectedRows", void 0);
    GroupedAggregatedStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grouped-aggregated-statistics',
            template: __webpack_require__(/*! ./grouped-aggregated-statistics.component.html */ "./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggregated-statistics.component.html"),
            styles: [__webpack_require__(/*! ./grouped-aggragated-statistics.component.css */ "./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggragated-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], GroupedAggregatedStatisticsComponent);
    return GroupedAggregatedStatisticsComponent;
}(_aggregated_statistics_global_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_4__["CommonAggregatedStats"]));



/***/ }),

/***/ "./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-progress-color {\n  background-color: #f94343;\n  color: white;\n}\n\ndiv.progress {\n  /*width: 90%;*/\n  /*float:left;*/\n  padding: 0px;\n  border: 1px solid darkgrey;\n  margin: 3px auto 3px auto;\n  height: 20px;\n}\n\ndiv.progress-bar {\n  text-align: center;\n}\n\n.progress-value {\n  float: left;\n  position: absolute;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  font-weight: bolder;\n\n}\n\n.component-name, .absolute-value-badge {\n  margin: 2px 0 3px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy9hZGFwdGVyLWRpc2JhbGFuY2UtZm9ybWF0dGVyL2FkYXB0ZXItZGlzYmFsYW5jZS1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2Zvcm1hdHRlcnMvYWRhcHRlci1kaXNiYWxhbmNlLWZvcm1hdHRlci9hZGFwdGVyLWRpc2JhbGFuY2UtZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctcHJvZ3Jlc3MtY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk0MzQzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmRpdi5wcm9ncmVzcyB7XG4gIC8qd2lkdGg6IDkwJTsqL1xuICAvKmZsb2F0OmxlZnQ7Ki9cbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcbiAgbWFyZ2luOiAzcHggYXV0byAzcHggYXV0bztcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG5kaXYucHJvZ3Jlc3MtYmFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZ3Jlc3MtdmFsdWUge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcblxufVxuXG4uY29tcG9uZW50LW5hbWUsIC5hYnNvbHV0ZS12YWx1ZS1iYWRnZSB7XG4gIG1hcmdpbjogMnB4IDAgM3B4IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"component-name col-xs-4 col-sm-4 col-md-4\">\n    <span class=\"badge bg-black\">{{getName()}}</span>\n  </div>\n  <div *ngIf=\"data != null && data.value > 0 && isVisible()\" class=\"progress progress-sm col-xs-4 col-sm-4 col-md-4\">\n    <div class=\"progress-value\">{{resolveRelativeDisbalance() + ' %'}}</div>\n    <div class=\"progress-bar progress-bar-danger\" [ngStyle]=\"{width:resolveRelativeDisbalance() + '%'}\"></div>\n  </div>\n  <div *ngIf=\"data != null && data.value > 0 && isVisible()\" class=\"absolute-value-badge col-xs-4 col-sm-4 col-md-4\">\n    <span class=\"badge bg-red\">{{resolveAbsoluteDisbalance() + 'MBps'}}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: AdapterDisbalanceFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdapterDisbalanceFormatterComponent", function() { return AdapterDisbalanceFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric.vo */ "./src/app/common/models/metrics/system-metric.vo.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdapterDisbalanceFormatterComponent = /** @class */ (function () {
    function AdapterDisbalanceFormatterComponent() {
        this.isPortMetric = false;
        this.absolutType = _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].IMBALANCE_ABSOLUT;
        this.percType = _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].IMBALANCE_PERC;
        this.eventsType = _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].IMBALANCE_EVENTS;
    }
    AdapterDisbalanceFormatterComponent.prototype.ngOnInit = function () {
        if (this.isPortMetric) {
            this.absolutType = _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PORT_IMBALANCE_ABSOLUT;
            this.percType = _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PORT_IMBALANCE_PERC;
            this.eventsType = _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PORT_IMBALANCE_EVENTS;
        }
    };
    AdapterDisbalanceFormatterComponent.prototype.getInfoMessage = function () {
        return "(" + this.resolveAbsoluteDisbalance() + " [MB/s] -> " + this.data.value + "%";
    };
    AdapterDisbalanceFormatterComponent.prototype.resolveAbsoluteDisbalance = function () {
        return this.resolveDisbalance(this.absolutType);
    };
    AdapterDisbalanceFormatterComponent.prototype.resolveRelativeDisbalance = function () {
        return this.resolveDisbalance(this.percType);
    };
    AdapterDisbalanceFormatterComponent.prototype.resolveDisbalance = function (type) {
        if (this.rowData !== undefined && this.rowData.getCell(type) != null) {
            return this.rowData.getCell(type).value;
        }
    };
    AdapterDisbalanceFormatterComponent.prototype.isVisible = function () {
        if (this.rowData !== undefined && parseInt(this.rowData.getCell(this.eventsType).value, 10) > 0) {
            return true;
        }
        return false;
    };
    AdapterDisbalanceFormatterComponent.prototype.getName = function () {
        return this.rowData.getCell('name').value;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdapterDisbalanceFormatterComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__["SystemMetric"])
    ], AdapterDisbalanceFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumn"])
    ], AdapterDisbalanceFormatterComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiRow"])
    ], AdapterDisbalanceFormatterComponent.prototype, "rowData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdapterDisbalanceFormatterComponent.prototype, "isPortMetric", void 0);
    AdapterDisbalanceFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adapter-disbalance-formatter',
            template: __webpack_require__(/*! ./adapter-disbalance-formatter.component.html */ "./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.html"),
            styles: [__webpack_require__(/*! ./adapter-disbalance-formatter.component.css */ "./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdapterDisbalanceFormatterComponent);
    return AdapterDisbalanceFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  font-size: 11px;\n}\n\n.text-alert-yellow {\n  color: #ffd829;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy9hbGVydC1mb3JtYXR0ZXIvYWxlcnQtZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2Zvcm1hdHRlcnMvYWxlcnQtZm9ybWF0dGVyL2FsZXJ0LWZvcm1hdHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnRleHQtYWxlcnQteWVsbG93IHtcbiAgY29sb3I6ICNmZmQ4Mjk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i *ngIf=\"isAlert()\" tooltip=\"Warning for one or more metrics\" class=\"fa fa-exclamation-triangle\"\n   [ngClass]=\"getDecoratorClass()\"></i>\n"

/***/ }),

/***/ "./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AlertFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertFormatterComponent", function() { return AlertFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _utils_condition_evaluate_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/condition-evaluate.utils */ "./src/app/global-statistics/utils/condition-evaluate.utils.ts");
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
            return cell != null ? _utils_condition_evaluate_utils__WEBPACK_IMPORTED_MODULE_2__["ConditionEvaluateUtils"].eval(cell.value, rule) : false;
        }) !== undefined;
    };
    AlertFormatterComponent.prototype.getDecoratorClass = function () {
        var _this = this;
        var alertDef = this.options.cellDecoratorRules.find(function (rule) {
            var cell = _this.data.getCell(rule.type);
            return cell != null ? _utils_condition_evaluate_utils__WEBPACK_IMPORTED_MODULE_2__["ConditionEvaluateUtils"].eval(cell.value, rule) : false;
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
            template: __webpack_require__(/*! ./alert-formatter.component.html */ "./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./alert-formatter.component.css */ "./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertFormatterComponent);
    return AlertFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/formatters/emph-formatter/emph-formatter.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/emph-formatter/emph-formatter.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".metric-value {\n  font-style: italic;\n  font-weight: normal !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy9lbXBoLWZvcm1hdHRlci9lbXBoLWZvcm1hdHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2Zvcm1hdHRlcnMvZW1waC1mb3JtYXR0ZXIvZW1waC1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXRyaWMtdmFsdWUge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/global-statistics/formatters/emph-formatter/emph-formatter.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/emph-formatter/emph-formatter.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data != null\" class=\"metric-value\">\n  <span tooltip=\"{{label}}\" hide-delay=\"0\">{{data.value}} <span\n    class=\"metric-unit\">{{data.unit}}</span></span>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/formatters/emph-formatter/emph-formatter.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/emph-formatter/emph-formatter.component.ts ***!
  \*****************************************************************************************/
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
            template: __webpack_require__(/*! ./emph-formatter.component.html */ "./src/app/global-statistics/formatters/emph-formatter/emph-formatter.component.html"),
            styles: [__webpack_require__(/*! ./emph-formatter.component.css */ "./src/app/global-statistics/formatters/emph-formatter/emph-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmphFormatterComponent);
    return EmphFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2Zvcm1hdHRlcnMvZW1wdHktZm9ybWF0dGVyL2VtcHR5LWZvcm1hdHRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EmptyFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyFormatterComponent", function() { return EmptyFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric.vo */ "./src/app/common/models/metrics/system-metric.vo.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmptyFormatterComponent = /** @class */ (function () {
    function EmptyFormatterComponent() {
    }
    EmptyFormatterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EmptyFormatterComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__["SystemMetric"])
    ], EmptyFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumn"])
    ], EmptyFormatterComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiRow"])
    ], EmptyFormatterComponent.prototype, "rowData", void 0);
    EmptyFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empty-formatter',
            template: __webpack_require__(/*! ./empty-formatter.component.html */ "./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.html"),
            styles: [__webpack_require__(/*! ./empty-formatter.component.css */ "./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmptyFormatterComponent);
    return EmptyFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  margin: 2px;\n  border: 2px solid #EAEAEA;\n}\n\ntable thead {\n  background-color: #3C8CBC;\n  color: white;\n}\n\ntable td {\n  font-size: 11px;\n  padding: 2px;\n  border: 2px solid #EAEAEA;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy9wb3J0LWRpc2JhbGFuY2UtZm9ybWF0dGVyL3BvcnQtZGlzYmFsYW5jZS1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7O0FBRTNCIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy9wb3J0LWRpc2JhbGFuY2UtZm9ybWF0dGVyL3BvcnQtZGlzYmFsYW5jZS1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgbWFyZ2luOiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFQUVBRUE7XG59XG5cbnRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNDOENCQztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG50YWJsZSB0ZCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRUFFQUVBO1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let row of subData\">\n  <div class=\"row\">\n    <app-adapter-disbalance-formatter [data]=\"row.getCell(imbalanceEvents)\" [rowData]=\"row\"\n                                      [isPortMetric]=\"true\"></app-adapter-disbalance-formatter>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PortDisbalanceFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortDisbalanceFormatterComponent", function() { return PortDisbalanceFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric.vo */ "./src/app/common/models/metrics/system-metric.vo.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortDisbalanceFormatterComponent = /** @class */ (function () {
    function PortDisbalanceFormatterComponent() {
        this.subData = [];
        this.imbalanceEvents = _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PORT_IMBALANCE_EVENTS;
    }
    PortDisbalanceFormatterComponent_1 = PortDisbalanceFormatterComponent;
    PortDisbalanceFormatterComponent.isVisible = function (row) {
        if (row !== undefined && row.getCell(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PORT_IMBALANCE_EVENTS) !== null && parseInt(row.getCell(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PORT_IMBALANCE_EVENTS).value, 10) > 0) {
            return true;
        }
        return false;
    };
    PortDisbalanceFormatterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.rowData !== undefined) {
            this.rowData.subRows.filter(function (subRow) { return PortDisbalanceFormatterComponent_1.isVisible(subRow); }).forEach(function (subRow) { return _this.subData.push(subRow); });
        }
    };
    PortDisbalanceFormatterComponent.prototype.resolveAbsoluteDisbalance = function () {
        if (this.rowData !== undefined && this.rowData.getCell(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PORT_IMBALANCE_ABSOLUT) != null) {
            return this.rowData.getCell(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PORT_IMBALANCE_ABSOLUT).value;
        }
    };
    PortDisbalanceFormatterComponent.prototype.getCellValue = function (row, type) {
        var metric = row.getCell(type);
        if (metric === null) {
            return '';
        }
        return metric.value;
    };
    PortDisbalanceFormatterComponent.prototype.getUnit = function (row, type) {
        var metric = row.getCell(type);
        if (metric === null) {
            return '';
        }
        return metric.rawData.unit;
    };
    var PortDisbalanceFormatterComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PortDisbalanceFormatterComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__["SystemMetric"])
    ], PortDisbalanceFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumn"])
    ], PortDisbalanceFormatterComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiRow"])
    ], PortDisbalanceFormatterComponent.prototype, "rowData", void 0);
    PortDisbalanceFormatterComponent = PortDisbalanceFormatterComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-port-disbalance-formatter',
            template: __webpack_require__(/*! ./port-disbalance-formatter.component.html */ "./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.html"),
            styles: [__webpack_require__(/*! ./port-disbalance-formatter.component.css */ "./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortDisbalanceFormatterComponent);
    return PortDisbalanceFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-alert-yellow {\n  color: #ffd829;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy9zaW1wbGUtZm9ybWF0dGVyL3NpbXBsZS1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy9mb3JtYXR0ZXJzL3NpbXBsZS1mb3JtYXR0ZXIvc2ltcGxlLWZvcm1hdHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYWxlcnQteWVsbG93IHtcbiAgY29sb3I6ICNmZmQ4Mjk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data != null && data.value != null\" class=\"metric-value\">\n  <span *ngIf=\"isAlert()\" tooltip=\"{{getAlertMessage()}}\" hide-delay=\"0\"> <i class=\"fa fa-exclamation-triangle\"\n                                                                             ngClass=\"{{getViolatedRuleClass()}}\"></i> {{data.value % 1 === 0 ? data.value : data.value.toFixed(1) | formatThousands}} </span>\n  <span *ngIf=\"!isAlert()\" tooltip=\"{{getTooltipMessage()}}\" hide-delay=\"0\"\n        [innerHTML]=\"getValue() | formatThousands | safeHtml\"></span>\n  <span class=\"metric-unit\">{{data.unit}}</span>\n\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SimpleFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleFormatterComponent", function() { return SimpleFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-formatter/unit-formatter.component */ "./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
        if (this.column.isInfinity === true && this.data.value === -1) {
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
            template: __webpack_require__(/*! ./simple-formatter.component.html */ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./simple-formatter.component.css */ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleFormatterComponent);
    return SimpleFormatterComponent;
}(_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_1__["UnitFormatterComponent"]));



/***/ }),

/***/ "./src/app/global-statistics/formatters/text-formatter/text-formatter.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/text-formatter/text-formatter.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2Zvcm1hdHRlcnMvdGV4dC1mb3JtYXR0ZXIvdGV4dC1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/global-statistics/formatters/text-formatter/text-formatter.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/text-formatter/text-formatter.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data != null\" class=\"metric-value\">\n  <span tooltip=\"{{column.tooltipText}} average\" hide-delay=\"0\">{{data.value}} <span\n    class=\"metric-unit\">{{data.unit}}</span></span>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/formatters/text-formatter/text-formatter.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/text-formatter/text-formatter.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TextFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFormatterComponent", function() { return TextFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric.vo */ "./src/app/common/models/metrics/system-metric.vo.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
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
        __metadata("design:type", _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__["SystemMetric"])
    ], TextFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumn"])
    ], TextFormatterComponent.prototype, "column", void 0);
    TextFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-formatter',
            template: __webpack_require__(/*! ./text-formatter.component.html */ "./src/app/global-statistics/formatters/text-formatter/text-formatter.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./text-formatter.component.css */ "./src/app/global-statistics/formatters/text-formatter/text-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextFormatterComponent);
    return TextFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2Zvcm1hdHRlcnMvdGllci1mb3JtYXR0ZXIvdGllci1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isHidden()\" class=\"col-val col\">\n  <span *ngFor=\"let tier of getTierNameString(); index as i\" [class]=\"getTierColor(tier)\"\n        tooltip=\"{{label}}\">{{tier}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TierFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TierFormatterComponent", function() { return TierFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric.vo */ "./src/app/common/models/metrics/system-metric.vo.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TierFormatterComponent = /** @class */ (function () {
    function TierFormatterComponent() {
        this.colorMapping = [];
    }
    TierFormatterComponent.prototype.ngOnInit = function () {
        this.colorMapping['T0'] = 'bg-red';
        this.colorMapping['T1'] = 'bg-light-blue';
        this.colorMapping['T2'] = 'bg-green';
        this.colorMapping['T3'] = 'bg-yellow';
        this.colorMapping['T4'] = 'bg-teal';
        this.colorMapping['T5'] = 'bg-purple';
        this.colorMapping['T6'] = 'bg-maroon';
    };
    TierFormatterComponent.prototype.isHidden = function () {
        return this.rowData.externals.length > 0;
    };
    TierFormatterComponent.prototype.getTierNameString = function () {
        return this.rowData.externals.map(function (external) { return external.value; })
            .sort();
    };
    TierFormatterComponent.prototype.getTierColor = function (name) {
        return 'badge ' + this.colorMapping[name];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TierFormatterComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__["SystemMetric"])
    ], TierFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumn"])
    ], TierFormatterComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiRow"])
    ], TierFormatterComponent.prototype, "rowData", void 0);
    TierFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tier-formatter',
            template: __webpack_require__(/*! ./tier-formatter.component.html */ "./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./tier-formatter.component.css */ "./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TierFormatterComponent);
    return TierFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/formatters/time-formatter/time-formatter.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/time-formatter/time-formatter.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2Zvcm1hdHRlcnMvdGltZS1mb3JtYXR0ZXIvdGltZS1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/global-statistics/formatters/time-formatter/time-formatter.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/time-formatter/time-formatter.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"data != null\">\n  <span class=\"metric-value\" tooltip=\"{{getTooltipMessage()}}\">{{data.value | seconds2FullTime}}</span>\n  <!--<span class=\"metric-unit\">{{data.unit}}</span>-->\n</span>\n"

/***/ }),

/***/ "./src/app/global-statistics/formatters/time-formatter/time-formatter.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/time-formatter/time-formatter.component.ts ***!
  \*****************************************************************************************/
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
            template: __webpack_require__(/*! ./time-formatter.component.html */ "./src/app/global-statistics/formatters/time-formatter/time-formatter.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./time-formatter.component.css */ "./src/app/global-statistics/formatters/time-formatter/time-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimeFormatterComponent);
    return TimeFormatterComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".peak {\n  display: block;\n  font-size: 12px;\n  font-style: italic;\n}\n\n.peak i, .metric-value i {\n  margin-right: 5px;\n}\n\n.peak i {\n  padding: 0px;\n  /*border-top-width: 1px;*/\n  /*border-top-style: solid;*/\n  font-size: 12px;\n}\n\n.metric-value {\n  display: block;\n  font-weight: 600;\n  font-size: 14px;\n  /*border-bottom: 2px #00c0ef solid;*/\n  margin-bottom: 2px;\n}\n\n.text-alert {\n  /*color: #900020;*/\n  color: #db8b0b;\n}\n\n.metric-value .metric-unit {\n  font-size: 10px;\n}\n\n.peak .metric-unit {\n  font-size: 9px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy91bml0LWZvcm1hdHRlci91bml0LWZvcm1hdHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy9mb3JtYXR0ZXJzL3VuaXQtZm9ybWF0dGVyL3VuaXQtZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVhayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnBlYWsgaSwgLm1ldHJpYy12YWx1ZSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5wZWFrIGkge1xuICBwYWRkaW5nOiAwcHg7XG4gIC8qYm9yZGVyLXRvcC13aWR0aDogMXB4OyovXG4gIC8qYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7Ki9cbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWV0cmljLXZhbHVlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLypib3JkZXItYm90dG9tOiAycHggIzAwYzBlZiBzb2xpZDsqL1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi50ZXh0LWFsZXJ0IHtcbiAgLypjb2xvcjogIzkwMDAyMDsqL1xuICBjb2xvcjogI2RiOGIwYjtcbn1cblxuLm1ldHJpYy12YWx1ZSAubWV0cmljLXVuaXQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5wZWFrIC5tZXRyaWMtdW5pdCB7XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data != null\" class=\"metric-value\">\n  <span *ngIf=\"isAlert()\" tooltip=\"{{getAlertMessage()}}\" hide-delay=\"0\"\n        ngClass=\"{{getViolatedRuleClass()}}\">{{getValue() | formatThousands}} <span\n    class=\"metric-unit\">{{data.unit}}</span></span>\n  <span *ngIf=\"!isAlert()\" tooltip=\"{{label}} average\" hide-delay=\"0\">{{getValue() | formatThousands}} <span\n    class=\"metric-unit\">{{data.unit}}</span></span>\n</div>\n<div *ngIf=\"data != null\" class=\"peak\">\n  <span tooltip=\"{{label}} peak\" hide-delay=\"0\"><span class=\"text-muted\"><i\n    class=\"fa fa-angle-up text-red\"></i>{{data.peak | formatThousands}} <span\n    class=\"metric-unit\">{{data.unit}}</span></span>\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UnitFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitFormatterComponent", function() { return UnitFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric.vo */ "./src/app/common/models/metrics/system-metric.vo.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _utils_condition_evaluate_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/condition-evaluate.utils */ "./src/app/global-statistics/utils/condition-evaluate.utils.ts");
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
            return ruleDefinitions.find(function (ruleDefinition) { return _utils_condition_evaluate_utils__WEBPACK_IMPORTED_MODULE_3__["ConditionEvaluateUtils"].eval(_this.data.value, ruleDefinition); }) !== undefined;
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
            return ruleDefinitions.find(function (ruleDefinition) { return _utils_condition_evaluate_utils__WEBPACK_IMPORTED_MODULE_3__["ConditionEvaluateUtils"].eval(_this.data.value, ruleDefinition); });
        }
    };
    UnitFormatterComponent.prototype.getViolatedRuleClass = function () {
        var ruleDefinition = this.getViolatedRule();
        if (ruleDefinition !== undefined && _utils_condition_evaluate_utils__WEBPACK_IMPORTED_MODULE_3__["ConditionEvaluateUtils"].eval(this.data.value, ruleDefinition)) {
            return ruleDefinition.threshold.alertType;
        }
        return '';
    };
    UnitFormatterComponent.prototype.getValue = function () {
        return this.data.value % 1 === 0 ? this.data.value : this.data.value.toFixed(1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UnitFormatterComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__["SystemMetric"])
    ], UnitFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiTableOptions"])
    ], UnitFormatterComponent.prototype, "options", void 0);
    UnitFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unit-formatter',
            template: __webpack_require__(/*! ./unit-formatter.component.html */ "./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./unit-formatter.component.css */ "./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UnitFormatterComponent);
    return UnitFormatterComponent;
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
/* harmony import */ var _views_performance_statistics_performance_statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/performance-statistics/performance-statistics.component */ "./src/app/global-statistics/views/performance-statistics/performance-statistics.component.ts");
/* harmony import */ var _views_dp_sla_dp_sla_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/dp-sla/dp-sla.component */ "./src/app/global-statistics/views/dp-sla/dp-sla.component.ts");
/* harmony import */ var _views_adapters_adapters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/adapters/adapters.component */ "./src/app/global-statistics/views/adapters/adapters.component.ts");
/* harmony import */ var _views_logical_capacity_statistics_logical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/logical-capacity-statistics/logical-capacity-statistics.component */ "./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.ts");
/* harmony import */ var _views_physical_capacity_statistics_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/physical-capacity-statistics/physical-capacity-statistics.component */ "./src/app/global-statistics/views/physical-capacity-statistics/physical-capacity-statistics.component.ts");
/* harmony import */ var _views_host_groups_capacity_host_groups_capacity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/host-groups-capacity/host-groups-capacity.component */ "./src/app/global-statistics/views/host-groups-capacity/host-groups-capacity.component.ts");
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
            { path: 'performance/:id', component: _views_performance_statistics_performance_statistics_component__WEBPACK_IMPORTED_MODULE_3__["PerformanceStatisticsComponent"] },
            { path: 'performance', redirectTo: 'performance/1', pathMatch: 'full' },
            { path: 'physical-capacity/:id', component: _views_physical_capacity_statistics_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_7__["PhysicalCapacityStatisticsComponent"] },
            { path: 'physical-capacity', redirectTo: 'physical-capacity/1', pathMatch: 'full' },
            { path: 'logical-capacity/:id', component: _views_logical_capacity_statistics_logical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_6__["LogicalCapacityStatisticsComponent"] },
            { path: 'logical-capacity', redirectTo: 'logical-capacity/1', pathMatch: 'full' },
            { path: 'dp-sla/:id', component: _views_dp_sla_dp_sla_component__WEBPACK_IMPORTED_MODULE_4__["DpSlaComponent"] },
            { path: 'dp-sla', redirectTo: 'dp-sla/1', pathMatch: 'full' },
            { path: 'adapters/:id', component: _views_adapters_adapters_component__WEBPACK_IMPORTED_MODULE_5__["AdaptersComponent"] },
            { path: 'adapters', redirectTo: 'adapters/1', pathMatch: 'full' },
            { path: 'host-group-capacity/:id', component: _views_host_groups_capacity_host_groups_capacity_component__WEBPACK_IMPORTED_MODULE_8__["HostGroupsCapacityComponent"] },
            { path: 'host-group-capacity', redirectTo: 'host-group-capacity/1', pathMatch: 'full' }
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

module.exports = "/****** Behavior *****/\ndiv.collapsed ~ div.collapsable {\n  display: none;\n}\ndiv.table-header > div.col.highlightColumn {\n  -webkit-text-decoration: #334369 underline;\n          text-decoration: #334369 underline;\n}\n.table-data.row:hover, .table-data .highlightColumn {\n  background-color: #b4d1ee !important;\n  color: #3A738C;\n}\n.selectedRow {\n  background-color: #BEECD1 !important;\n  color: #3A738C;\n}\n/*** Layout table ***/\n.col-control {\n  width: 3.5%;\n  display: inline-block;\n  vertical-align: middle;\n}\n.col {\n  /*width: 13.33%;*/\n  display: inline-block;\n  vertical-align: middle;\n}\n.col-label {\n  width: 13%;\n  display: inline-block;\n  /*width: 100%;*/\n}\n.capacity-table .row {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n/*** Table header ***/\ndiv.table-header {\n  border: 3px #EAEAEA solid;\n  background-color: #3C8CBC;\n  font-size: 13px;\n  color: white;\n  font-weight: bolder;\n}\ndiv.table-header > div {\n  border-right: 1px #EAEAEA solid;\n  padding: 10px 0px 10px 0px;\n}\ndiv.table-header > div {\n  text-align: center;\n}\ndiv.table-header > div.col-control {\n  color: #333;\n}\n.table-group-header > div.table-group-label.row > div[class^=\"col\"],\n.table-group-header > div.table-group-label.row > div.ignore > div {\n  text-align: center;\n  border-right: 1px #EAEAEA solid;\n  margin: 2px 0px 2px 0px;\n  /*display: inline-block;*/\n  float: left;\n}\n/**** Data group header ****/\n.table-group-header > .table-group-label,\n.table-data {\n  border-left: 3px solid #EAEAEA;\n  border-right: 3px solid #EAEAEA;\n}\ndiv.table-group-header {\n  margin-bottom: 5px;\n}\n.table-group-header > div:first-child {\n  /*background-color: #BBD9E6;*/\n  color: #35516A;\n  /*padding: 10px 0px 10px 0px;*/\n  border-top: 3px solid #EAEAEA;\n  border-bottom: 3px solid #EAEAEA;\n  /*margin-top: 10px;*/\n}\n.table-group-header > div:first-child > div.col:last-child {\n  border-right: none;\n}\n/**** Table data ****/\n.table-data:last-child {\n  /*margin: 10px 0px 10px 0px;*/\n  border-bottom: 3px solid #EAEAEA;\n}\ndiv.table-data.striped-row:nth-of-type(odd) {\n  background-color: #f3f8fa;\n}\n.table-data > div {\n  text-align: center;\n  border-right: 1px #EAEAEA solid;\n  margin: 2px 0px 2px 0px;\n  display: inline-block;\n  vertical-align: middle;\n  margin: auto;\n}\n.table-data > div i {\n  margin-top: 0.1em;\n}\n/*div.col-control {*/\n/*min-height: 1px;*/\n/*}*/\n.col-control i {\n  font-size: 11px;\n  padding: 3px;\n}\n.table-header .col-control i, .table-header i {\n  color: white\n}\n.col-control:after {\n  content: \"\";\n  font-size: 11px;\n  padding: 3px;\n}\ndiv.sticky {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  z-index: 10;\n}\n.expand-collapse {\n  padding-right: 15px;\n}\n.expand-collapse:hover {\n  color: #5C91A8;\n  font-size: 17px;\n}\n.system-name {\n  font-size: 14px;\n  -webkit-text-decoration: #0b3e6f underline;\n          text-decoration: #0b3e6f underline;\n  font-weight: 600;\n}\ndiv.no-border {\n  border-right: 0px !important;\n}\n.global-stats {\n  margin-bottom: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZ2xvYmFsLXN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLDBDQUFrQztVQUFsQyxrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBRUEscUJBQXFCO0FBRXJCO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUEsNEJBQTRCO0FBQzVCOztFQUVFLDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFDakM7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsSUFBSTtBQUVKO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0U7QUFDRjtBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLDBDQUFrQztVQUFsQyxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2dsb2JhbC1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqIEJlaGF2aW9yICoqKioqL1xuZGl2LmNvbGxhcHNlZCB+IGRpdi5jb2xsYXBzYWJsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdi50YWJsZS1oZWFkZXIgPiBkaXYuY29sLmhpZ2hsaWdodENvbHVtbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogIzMzNDM2OSB1bmRlcmxpbmU7XG59XG5cbi50YWJsZS1kYXRhLnJvdzpob3ZlciwgLnRhYmxlLWRhdGEgLmhpZ2hsaWdodENvbHVtbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGQxZWUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzQTczOEM7XG59XG5cbi5zZWxlY3RlZFJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCRUVDRDEgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzQTczOEM7XG59XG5cbi8qKiogTGF5b3V0IHRhYmxlICoqKi9cbi5jb2wtY29udHJvbCB7XG4gIHdpZHRoOiAzLjUlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jb2wge1xuICAvKndpZHRoOiAxMy4zMyU7Ki9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29sLWxhYmVsIHtcbiAgd2lkdGg6IDEzJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvKndpZHRoOiAxMDAlOyovXG59XG5cbi5jYXBhY2l0eS10YWJsZSAucm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi8qKiogVGFibGUgaGVhZGVyICoqKi9cblxuZGl2LnRhYmxlLWhlYWRlciB7XG4gIGJvcmRlcjogM3B4ICNFQUVBRUEgc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzhDQkM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5kaXYudGFibGUtaGVhZGVyID4gZGl2IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggI0VBRUFFQSBzb2xpZDtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XG59XG5cbmRpdi50YWJsZS1oZWFkZXIgPiBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmRpdi50YWJsZS1oZWFkZXIgPiBkaXYuY29sLWNvbnRyb2wge1xuICBjb2xvcjogIzMzMztcbn1cblxuLnRhYmxlLWdyb3VwLWhlYWRlciA+IGRpdi50YWJsZS1ncm91cC1sYWJlbC5yb3cgPiBkaXZbY2xhc3NePVwiY29sXCJdLFxuLnRhYmxlLWdyb3VwLWhlYWRlciA+IGRpdi50YWJsZS1ncm91cC1sYWJlbC5yb3cgPiBkaXYuaWdub3JlID4gZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmlnaHQ6IDFweCAjRUFFQUVBIHNvbGlkO1xuICBtYXJnaW46IDJweCAwcHggMnB4IDBweDtcbiAgLypkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ki9cbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi8qKioqIERhdGEgZ3JvdXAgaGVhZGVyICoqKiovXG4udGFibGUtZ3JvdXAtaGVhZGVyID4gLnRhYmxlLWdyb3VwLWxhYmVsLFxuLnRhYmxlLWRhdGEge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNFQUVBRUE7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNFQUVBRUE7XG59XG5cbmRpdi50YWJsZS1ncm91cC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi50YWJsZS1ncm91cC1oZWFkZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAvKmJhY2tncm91bmQtY29sb3I6ICNCQkQ5RTY7Ki9cbiAgY29sb3I6ICMzNTUxNkE7XG4gIC8qcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7Ki9cbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNFQUVBRUE7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRUFFQUVBO1xuICAvKm1hcmdpbi10b3A6IDEwcHg7Ki9cbn1cblxuLnRhYmxlLWdyb3VwLWhlYWRlciA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdi5jb2w6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLyoqKiogVGFibGUgZGF0YSAqKioqL1xuLnRhYmxlLWRhdGE6bGFzdC1jaGlsZCB7XG4gIC8qbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDsqL1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0VBRUFFQTtcbn1cblxuZGl2LnRhYmxlLWRhdGEuc3RyaXBlZC1yb3c6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y4ZmE7XG59XG5cbi50YWJsZS1kYXRhID4gZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmlnaHQ6IDFweCAjRUFFQUVBIHNvbGlkO1xuICBtYXJnaW46IDJweCAwcHggMnB4IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50YWJsZS1kYXRhID4gZGl2IGkge1xuICBtYXJnaW4tdG9wOiAwLjFlbTtcbn1cblxuLypkaXYuY29sLWNvbnRyb2wgeyovXG4vKm1pbi1oZWlnaHQ6IDFweDsqL1xuLyp9Ki9cblxuLmNvbC1jb250cm9sIGkge1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLnRhYmxlLWhlYWRlciAuY29sLWNvbnRyb2wgaSwgLnRhYmxlLWhlYWRlciBpIHtcbiAgY29sb3I6IHdoaXRlXG59XG5cbi5jb2wtY29udHJvbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogM3B4O1xufVxuXG5kaXYuc3RpY2t5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uZXhwYW5kLWNvbGxhcHNlIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLmV4cGFuZC1jb2xsYXBzZTpob3ZlciB7XG4gIGNvbG9yOiAjNUM5MUE4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5zeXN0ZW0tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiAjMGIzZTZmIHVuZGVybGluZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuZGl2Lm5vLWJvcmRlciB7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5nbG9iYWwtc3RhdHMge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/global-statistics/global-statistics.component.html":
/*!********************************************************************!*\
  !*** ./src/app/global-statistics/global-statistics.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{getTitle()}}</h2>\n<div *ngIf=\"context === 'physical-capacity'\" class=\"global-stats col-md-12\">\n  <h3>Overall Datacenters Physical Capacity</h3>\n  <app-infrastructure-statistics></app-infrastructure-statistics>\n</div>\n<div *ngIf=\"context === 'logical-capacity'\" class=\"global-stats col-md-12\">\n  <h3>Overall Datacenters Logical Capacity</h3>\n  <app-global-logical-statistics></app-global-logical-statistics>\n</div>\n<div *ngIf=\"context === 'host-group-capacity'\" class=\"global-stats col-md-12\">\n  <h3>Overall Datacenters VMware Capacity</h3>\n  <app-global-host-group-capacity></app-global-host-group-capacity>\n</div>\n<div class=\"col-md-12\">\n  <h3>{{getTabTitle()}}</h3>\n</div>\n<div class=\"col-md-12\">\n  <div class=\"nav-tabs-custom\">\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"let dataCenter of dataCenters\"\n          [class.active]=\"isCurrentTab(dataCenter.id)\">\n        <a (click)=\"activeTab(dataCenter.id)\"\n           [routerLink]=\"['./' + context, dataCenter.id]\">\n          {{dataCenter.label}}\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <router-outlet></router-outlet>\n    </div>\n    <!-- /.performance-statistics-content -->\n  </div>\n  <!-- /.nav-tabs-custom -->\n</div>\n\n\n\n"

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
/* harmony import */ var _common_models_datacenter_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/models/datacenter.vo */ "./src/app/common/models/datacenter.vo.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bus.service */ "./src/app/global-statistics/bus.service.ts");
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
        this.dataCenters = [];
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
            _this.dataCenters = [];
            var defaultDatacenter = new _common_models_datacenter_vo__WEBPACK_IMPORTED_MODULE_1__["Datacenter"]();
            defaultDatacenter.label = 'All';
            defaultDatacenter.id = -1;
            _this.dataCenters.push(defaultDatacenter);
            _this.dataCenters = _this.dataCenters.concat(data.datacenters);
            _this.currentTab = currentTab;
        });
    };
    GlobalStatisticsComponent.prototype.getTitle = function () {
        switch (this.context) {
            case 'performance':
                return 'Performance Statistics';
            case 'physical-capacity':
                return 'Physical Capacity';
            case 'logical-capacity':
                return 'Logical capacity';
            case 'host-group-capacity':
                return 'VMware Capacity';
            case 'dp-sla':
                return 'SLA Events';
            case 'adapters':
                return 'CHA&Port Imbalances';
            default:
                return 'Statistics';
        }
    };
    GlobalStatisticsComponent.prototype.getTabTitle = function () {
        switch (this.context) {
            case 'physical-capacity':
                return 'Physical Capacity by Datacenter';
            case 'logical-capacity':
                return 'Logical Capacity by Datacenter';
            case 'host-group-capacity':
                return 'VMware Capacity by Datacenter';
        }
    };
    GlobalStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-global-statistics',
            template: __webpack_require__(/*! ./global-statistics.component.html */ "./src/app/global-statistics/global-statistics.component.html"),
            styles: [__webpack_require__(/*! ./global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_metric_service__WEBPACK_IMPORTED_MODULE_2__["MetricService"],
            _bus_service__WEBPACK_IMPORTED_MODULE_3__["BusService"]])
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
/* harmony import */ var _views_performance_statistics_performance_statistics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/performance-statistics/performance-statistics.component */ "./src/app/global-statistics/views/performance-statistics/performance-statistics.component.ts");
/* harmony import */ var _views_physical_capacity_statistics_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/physical-capacity-statistics/physical-capacity-statistics.component */ "./src/app/global-statistics/views/physical-capacity-statistics/physical-capacity-statistics.component.ts");
/* harmony import */ var _global_statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-statistics.component */ "./src/app/global-statistics/global-statistics.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _global_statistics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-statistics-routing.module */ "./src/app/global-statistics/global-statistics-routing.module.ts");
/* harmony import */ var _common_sa_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/sa-common.module */ "./src/app/common/sa-common.module.ts");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");
/* harmony import */ var _views_dp_sla_dp_sla_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/dp-sla/dp-sla.component */ "./src/app/global-statistics/views/dp-sla/dp-sla.component.ts");
/* harmony import */ var _views_adapters_adapters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/adapters/adapters.component */ "./src/app/global-statistics/views/adapters/adapters.component.ts");
/* harmony import */ var _formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./formatters/unit-formatter/unit-formatter.component */ "./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.ts");
/* harmony import */ var _formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formatters/alert-formatter/alert-formatter.component */ "./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.ts");
/* harmony import */ var _formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./formatters/simple-formatter/simple-formatter.component */ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _formatters_time_formatter_time_formatter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formatters/time-formatter/time-formatter.component */ "./src/app/global-statistics/formatters/time-formatter/time-formatter.component.ts");
/* harmony import */ var _utils_seconds_2_full_time_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/seconds-2-full-time.pipe */ "./src/app/global-statistics/utils/seconds-2-full-time.pipe.ts");
/* harmony import */ var _formatters_text_formatter_text_formatter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formatters/text-formatter/text-formatter.component */ "./src/app/global-statistics/formatters/text-formatter/text-formatter.component.ts");
/* harmony import */ var _components_aggregated_statistics_aggregated_statistics_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/aggregated-statistics/aggregated-statistics.component */ "./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.ts");
/* harmony import */ var _formatters_emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./formatters/emph-formatter/emph-formatter.component */ "./src/app/global-statistics/formatters/emph-formatter/emph-formatter.component.ts");
/* harmony import */ var _formatters_port_disbalance_formatter_port_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./formatters/port-disbalance-formatter/port-disbalance-formatter.component */ "./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.ts");
/* harmony import */ var _views_logical_capacity_statistics_logical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/logical-capacity-statistics/logical-capacity-statistics.component */ "./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.ts");
/* harmony import */ var _components_aggregated_statistics_global_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/aggregated-statistics/global-physical-capacity-statistics.component */ "./src/app/global-statistics/components/aggregated-statistics/global-physical-capacity-statistics.component.ts");
/* harmony import */ var _components_grouped_aggregated_statistics_global_logical_statistics_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/grouped-aggregated-statistics/global-logical-statistics.component */ "./src/app/global-statistics/components/grouped-aggregated-statistics/global-logical-statistics.component.ts");
/* harmony import */ var _components_grouped_aggregated_statistics_grouped_aggregated_statistics_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/grouped-aggregated-statistics/grouped-aggregated-statistics.component */ "./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggregated-statistics.component.ts");
/* harmony import */ var _views_host_groups_capacity_host_groups_capacity_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/host-groups-capacity/host-groups-capacity.component */ "./src/app/global-statistics/views/host-groups-capacity/host-groups-capacity.component.ts");
/* harmony import */ var _components_aggregated_statistics_global_host_group_capacity_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/aggregated-statistics/global-host-group-capacity.component */ "./src/app/global-statistics/components/aggregated-statistics/global-host-group-capacity.component.ts");
/* harmony import */ var _formatters_tier_formatter_tier_formatter_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./formatters/tier-formatter/tier-formatter.component */ "./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.ts");
/* harmony import */ var _formatters_adapter_disbalance_formatter_adapter_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component */ "./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.ts");
/* harmony import */ var _formatters_empty_formatter_empty_formatter_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./formatters/empty-formatter/empty-formatter.component */ "./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.ts");
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
                _views_physical_capacity_statistics_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_2__["PhysicalCapacityStatisticsComponent"],
                _views_performance_statistics_performance_statistics_component__WEBPACK_IMPORTED_MODULE_1__["PerformanceStatisticsComponent"],
                _views_dp_sla_dp_sla_component__WEBPACK_IMPORTED_MODULE_8__["DpSlaComponent"],
                _views_adapters_adapters_component__WEBPACK_IMPORTED_MODULE_9__["AdaptersComponent"],
                _formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_10__["UnitFormatterComponent"],
                _formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_11__["AlertFormatterComponent"],
                _formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_12__["SimpleFormatterComponent"],
                _formatters_time_formatter_time_formatter_component__WEBPACK_IMPORTED_MODULE_13__["TimeFormatterComponent"],
                _utils_seconds_2_full_time_pipe__WEBPACK_IMPORTED_MODULE_14__["Seconds2FullTimePipe"],
                _formatters_text_formatter_text_formatter_component__WEBPACK_IMPORTED_MODULE_15__["TextFormatterComponent"],
                _components_aggregated_statistics_aggregated_statistics_component__WEBPACK_IMPORTED_MODULE_16__["AggregatedStatisticsComponent"],
                _components_grouped_aggregated_statistics_grouped_aggregated_statistics_component__WEBPACK_IMPORTED_MODULE_22__["GroupedAggregatedStatisticsComponent"],
                _formatters_emph_formatter_emph_formatter_component__WEBPACK_IMPORTED_MODULE_17__["EmphFormatterComponent"],
                _formatters_port_disbalance_formatter_port_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_18__["PortDisbalanceFormatterComponent"],
                _views_logical_capacity_statistics_logical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_19__["LogicalCapacityStatisticsComponent"],
                _components_aggregated_statistics_global_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_20__["GlobalPhysicalCapacityStatisticsComponent"],
                _components_grouped_aggregated_statistics_global_logical_statistics_component__WEBPACK_IMPORTED_MODULE_21__["GlobalLogicalStatisticsComponent"],
                _views_host_groups_capacity_host_groups_capacity_component__WEBPACK_IMPORTED_MODULE_23__["HostGroupsCapacityComponent"],
                _components_aggregated_statistics_global_host_group_capacity_component__WEBPACK_IMPORTED_MODULE_24__["GlobalHostGroupCapacityComponent"],
                _formatters_tier_formatter_tier_formatter_component__WEBPACK_IMPORTED_MODULE_25__["TierFormatterComponent"],
                _formatters_adapter_disbalance_formatter_adapter_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_26__["AdapterDisbalanceFormatterComponent"],
                _formatters_empty_formatter_empty_formatter_component__WEBPACK_IMPORTED_MODULE_27__["EmptyFormatterComponent"]
            ],
            exports: [],
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

/***/ "./src/app/global-statistics/utils/condition-evaluate.utils.ts":
/*!*********************************************************************!*\
  !*** ./src/app/global-statistics/utils/condition-evaluate.utils.ts ***!
  \*********************************************************************/
/*! exports provided: ConditionEvaluateUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionEvaluateUtils", function() { return ConditionEvaluateUtils; });
var ConditionEvaluateUtils = /** @class */ (function () {
    function ConditionEvaluateUtils() {
    }
    ConditionEvaluateUtils.eval = function (value, rule) {
        if (rule.threshold.max != null) {
            return value >= rule.threshold.min && value < rule.threshold.max;
        }
        return value > rule.threshold.min;
    };
    return ConditionEvaluateUtils;
}());



/***/ }),

/***/ "./src/app/global-statistics/utils/number.formatter.ts":
/*!*************************************************************!*\
  !*** ./src/app/global-statistics/utils/number.formatter.ts ***!
  \*************************************************************/
/*! exports provided: NumberFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFormatter", function() { return NumberFormatter; });
/* harmony import */ var _common_utils_format_thousands_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/utils/format-thousands.pipe */ "./src/app/common/utils/format-thousands.pipe.ts");

var NumberFormatter = /** @class */ (function () {
    function NumberFormatter() {
    }
    NumberFormatter.kFormat = function (value, useKFormatter) {
        if (!useKFormatter) {
            return NumberFormatter.thousandFormatter.transform(value);
        }
        var num = parseFloat(value);
        var i = -1;
        while (Math.abs(num) > 999 && i < 1) {
            num = Math.sign(num) * (Math.abs(num) / 1000);
            i++;
        }
        return i > -1 ?
            NumberFormatter.thousandFormatter.transform(num.toFixed(NumberFormatter.getCountDecimalPositions(i))) + NumberFormatter.suffixes[i] : (Math.sign(num) * Math.abs(num)).toString();
    };
    NumberFormatter.getCountDecimalPositions = function (dividedTimes) {
        if (dividedTimes === 0) {
            return 0;
        }
        return 1;
    };
    NumberFormatter.suffixes = ['K', 'M'];
    NumberFormatter.thousandFormatter = new _common_utils_format_thousands_pipe__WEBPACK_IMPORTED_MODULE_0__["FormatThousandsPipe"]();
    return NumberFormatter;
}());



/***/ }),

/***/ "./src/app/global-statistics/utils/sasi-weighted-arithmetic-mean.utils.ts":
/*!********************************************************************************!*\
  !*** ./src/app/global-statistics/utils/sasi-weighted-arithmetic-mean.utils.ts ***!
  \********************************************************************************/
/*! exports provided: SystemAggregatedStatistics, SasiWeightedArithmeticMeanUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemAggregatedStatistics", function() { return SystemAggregatedStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SasiWeightedArithmeticMeanUtils", function() { return SasiWeightedArithmeticMeanUtils; });
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
/* harmony import */ var _common_models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/metrics/metric.vo */ "./src/app/common/models/metrics/metric.vo.ts");


// Todo implementation is same also in SumValueServiceImpl
var SystemAggregatedStatistics = /** @class */ (function () {
    function SystemAggregatedStatistics(systemName) {
        this.system = null;
        this.values = [];
        this.system = systemName;
    }
    SystemAggregatedStatistics.prototype.getValue = function (name) {
        return this.values[name];
    };
    SystemAggregatedStatistics.prototype.setMetric = function (type, value) {
        this.values[type] = value;
    };
    SystemAggregatedStatistics.prototype.setValue = function (type, value, unit) {
        if (this.values[type] === undefined) {
            var metric = new _common_models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_1__["Metric"]();
            metric.type = type;
            metric.unit = unit;
            metric.value = 0;
            this.setMetric(type, metric);
        }
        this.values[type].value += value;
    };
    return SystemAggregatedStatistics;
}());

var SasiWeightedArithmeticMeanUtils = /** @class */ (function () {
    function SasiWeightedArithmeticMeanUtils() {
        this.systemSummarizedValues = new Array();
        this.partiallySummarizedValues = new SystemAggregatedStatistics('all');
        this.physicalCapacityCompRatio = 0;
        this.physicalCapacityDedupRatio = 0;
        this.physicalCapacityTotalSaving = 0;
    }
    SasiWeightedArithmeticMeanUtils.prototype.computeSummaries = function (inputRowGroup, filter) {
        var _this = this;
        this.physicalCapacityTotalSaving = 0;
        this.physicalCapacityDedupRatio = 0;
        this.physicalCapacityCompRatio = 0;
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
            var physicalCapacity = _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY);
            var netTotal = _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_TOTAL);
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY), _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].SUBSCRIBED_CAPACITY, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].SUBSCRIBED_CAPACITY), _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].SUBSCRIBED_CAPACITY));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_CAPACITY, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_CAPACITY), _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_CAPACITY));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].AVAILABLE_CAPACITY, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].AVAILABLE_CAPACITY), _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].AVAILABLE_CAPACITY));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED), _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_FREE, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_FREE), _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_FREE));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED), _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_FREE, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_FREE), _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_FREE));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_TOTAL, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_TOTAL), _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_TOTAL));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED), _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_FREE, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_FREE), _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_FREE));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC) * physicalCapacity, _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_SUBS_PERC, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_SUBS_PERC) * physicalCapacity, _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_SUBS_PERC));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_SUBS_PERC, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_SUBS_PERC) * physicalCapacity, _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_SUBS_PERC));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED_PERC, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED_PERC) * physicalCapacity, _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED_PERC));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED_PERC, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED_PERC) * physicalCapacity, _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED_PERC));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED_PERC, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED_PERC) * netTotal, _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED_PERC));
            var compRatio = _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO);
            if (compRatio > 0) {
                _this.physicalCapacityCompRatio += physicalCapacity;
                _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO, compRatio * physicalCapacity, _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO));
            }
            else {
                _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO, 0, _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO));
            }
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1D, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1D), _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1D));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1W, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1W), _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1W));
            _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1M, _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1M), _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1M));
            var dedupRatio = _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].DEDUP_RATIO);
            if (dedupRatio > 0) {
                _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].DEDUP_RATIO, dedupRatio * physicalCapacity, _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].DEDUP_RATIO));
                _this.physicalCapacityDedupRatio += physicalCapacity;
            }
            else {
                _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].DEDUP_RATIO, 0, _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].DEDUP_RATIO));
            }
            var totalSaving = _this.getMetricValueByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].TOTAL_SAVING_EFFECT);
            if (totalSaving > 1) {
                _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].TOTAL_SAVING_EFFECT, totalSaving * physicalCapacity, _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].TOTAL_SAVING_EFFECT));
                _this.physicalCapacityTotalSaving += physicalCapacity;
            }
            else {
                _this.partiallySummarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].TOTAL_SAVING_EFFECT, 0, _this.getUnitByName(sasiRow, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].TOTAL_SAVING_EFFECT));
            }
        });
        var result = this.summarizeStats(this.partiallySummarizedValues, 'all');
        result.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].SELECTED_COUNT, amendFilter.length, '');
        return result;
    };
    SasiWeightedArithmeticMeanUtils.prototype.summarizeStats = function (values, name) {
        var summarizedValues = new SystemAggregatedStatistics(name);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].SUBSCRIBED_CAPACITY, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].SUBSCRIBED_CAPACITY).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].SUBSCRIBED_CAPACITY).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_CAPACITY, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_CAPACITY).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_CAPACITY).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].AVAILABLE_CAPACITY, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].AVAILABLE_CAPACITY).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].AVAILABLE_CAPACITY).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_FREE, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_FREE).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_FREE).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_FREE, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_FREE).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_FREE).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_TOTAL, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_TOTAL).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_TOTAL).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_FREE, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_FREE).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_FREE).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC).value / summarizedValues.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_SUBS_PERC, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_SUBS_PERC).value / summarizedValues.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_SUBS_PERC, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_SUBS_PERC).value / summarizedValues.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED_PERC, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED_PERC).value / summarizedValues.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED_PERC, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED_PERC).value / summarizedValues.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED_PERC, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED_PERC).value / summarizedValues.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_TOTAL).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED_PERC).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1D, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1D).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1D).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1W, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1W).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1W).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1M, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1M).value, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1M).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO).value / (this.physicalCapacityCompRatio === 0 ? 1 : this.physicalCapacityCompRatio), values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].DEDUP_RATIO, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].DEDUP_RATIO).value / (this.physicalCapacityDedupRatio === 0 ? 1 : this.physicalCapacityDedupRatio), values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].DEDUP_RATIO).unit);
        summarizedValues.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].TOTAL_SAVING_EFFECT, values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].TOTAL_SAVING_EFFECT).value / (this.physicalCapacityTotalSaving === 0 ? 1 : this.physicalCapacityTotalSaving), values.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].TOTAL_SAVING_EFFECT).unit);
        return summarizedValues;
    };
    SasiWeightedArithmeticMeanUtils.prototype.getMetricByName = function (metrics, type) {
        var metric = metrics.getCell(type);
        if (metric === null) {
            return null;
        }
        return metric;
    };
    SasiWeightedArithmeticMeanUtils.prototype.getMetricValueByName = function (metrics, type) {
        var metric = this.getMetricByName(metrics, type);
        if (metric == null) {
            return null;
        }
        return Number(metric.value);
    };
    SasiWeightedArithmeticMeanUtils.prototype.getUnitByName = function (metrics, type) {
        var metric = this.getMetricByName(metrics, type);
        if (metric == null || metric.rawData == null) {
            return null;
        }
        return metric.rawData.unit;
    };
    return SasiWeightedArithmeticMeanUtils;
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

/***/ "./src/app/global-statistics/utils/sum-value-service.impl.ts":
/*!*******************************************************************!*\
  !*** ./src/app/global-statistics/utils/sum-value-service.impl.ts ***!
  \*******************************************************************/
/*! exports provided: SumValueServiceImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumValueServiceImpl", function() { return SumValueServiceImpl; });
/* harmony import */ var _common_models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/models/metrics/metric.vo */ "./src/app/common/models/metrics/metric.vo.ts");

var SumValue = /** @class */ (function () {
    function SumValue() {
        this.data = {};
    }
    SumValue.prototype.getValue = function (name) {
        return this.data[name];
    };
    SumValue.prototype.setMetric = function (type, value) {
        this.data[type] = value;
    };
    SumValue.prototype.setValue = function (type, value, unit) {
        if (this.data[type] === undefined) {
            var metric = new _common_models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_0__["Metric"]();
            metric.type = type;
            metric.unit = unit;
            metric.value = 0;
            this.setMetric(type, metric);
        }
        this.data[type].value += value;
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
            }).reduce(function (valueA, valueB) { return valueA + valueB; }, 0);
            aggregatedValues.setValue(column.index, value, null);
        });
        return aggregatedValues;
    };
    return SumValueServiceImpl;
}());



/***/ }),

/***/ "./src/app/global-statistics/views/adapters/adapters.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/global-statistics/views/adapters/adapters.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col {\n  width: 35.75% !important;\n}\n\n.col-label {\n  width: 25% !important;\n}\n\n.sorting {\n  font-size: 13px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n:host /deep/ .groupped-data .metric-value {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n:host /deep/ .groupped-data .metric-unit {\n  font-size: 8px;\n  margin-left: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvYWRhcHRlcnMvYWRhcHRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBd0I7VUFBeEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy92aWV3cy9hZGFwdGVycy9hZGFwdGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbCB7XG4gIHdpZHRoOiAzNS43NSUgIWltcG9ydGFudDtcbn1cblxuLmNvbC1sYWJlbCB7XG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcbn1cblxuLnNvcnRpbmcge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuOmhvc3QgL2RlZXAvIC5ncm91cHBlZC1kYXRhIC5tZXRyaWMtdmFsdWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbjpob3N0IC9kZWVwLyAuZ3JvdXBwZWQtZGF0YSAubWV0cmljLXVuaXQge1xuICBmb250LXNpemU6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/global-statistics/views/adapters/adapters.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/global-statistics/views/adapters/adapters.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <app-sasi-table [data]=\"data | systemPool2SasiGroupTable: 'adapters'\" [tableOptions]=\"options\"></app-sasi-table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/views/adapters/adapters.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/global-statistics/views/adapters/adapters.component.ts ***!
  \************************************************************************/
/*! exports provided: AdaptersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdaptersComponent", function() { return AdaptersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _period_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../period.service */ "./src/app/period.service.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../bus.service */ "./src/app/global-statistics/bus.service.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/components/route-link-formatter/route-link-formatter.component */ "./src/app/common/components/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../formatters/alert-formatter/alert-formatter.component */ "./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _utils_sum_value_service_impl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/sum-value-service.impl */ "./src/app/global-statistics/utils/sum-value-service.impl.ts");
/* harmony import */ var _formatters_port_disbalance_formatter_port_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../formatters/port-disbalance-formatter/port-disbalance-formatter.component */ "./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.ts");
/* harmony import */ var _formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../formatters/simple-formatter/simple-formatter.component */ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_group_sort_aggregate_value_impl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/components/sasi-table/group-sort-aggregate-value.impl */ "./src/app/common/components/sasi-table/group-sort-aggregate-value.impl.ts");
/* harmony import */ var _formatters_adapter_disbalance_formatter_adapter_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component */ "./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.ts");
/* harmony import */ var _formatters_empty_formatter_empty_formatter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../formatters/empty-formatter/empty-formatter.component */ "./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.ts");
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
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].IMBALANCE_EVENTS,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].IMBALANCE_PERC
        ];
        this.currentPeriod = _metric_service__WEBPACK_IMPORTED_MODULE_3__["PeriodType"].WEEK;
        this.options = new _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiTableOptions"]();
        this.data = [];
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex('name')
            .withAltLabel('System')
            .withLabel('Cha pair')
            .withComponent(_formatters_empty_formatter_empty_formatter_component__WEBPACK_IMPORTED_MODULE_15__["EmptyFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].IMBALANCE_EVENTS)
            .withLabel('Cha Imbalances')
            .withComponent(_formatters_adapter_disbalance_formatter_adapter_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_14__["AdapterDisbalanceFormatterComponent"])
            .withAggComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_12__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            // .withColumnWidth('12')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PORT_IMBALANCE_EVENTS)
            .withLabel('Port Imbalances')
            .withComponent(_formatters_port_disbalance_formatter_port_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_11__["PortDisbalanceFormatterComponent"])
            .withAggComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_12__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.colControlFormatter = _formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_8__["AlertFormatterComponent"];
        this.options.rowComponentFormatter = _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_9__["RowGroupTableComponent"];
        this.options.grIndexComponentFormatter = _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_7__["RouteLinkFormatterComponent"];
        this.options.isDataGrouped = true;
        this.options.highlightRow = true;
        this.options.highlightColumn = false;
        this.options.labelColumnWidth = '23';
        this.options.valueColumnWidth = '36.5';
        this.options.aggregateValuesService = new _utils_sum_value_service_impl__WEBPACK_IMPORTED_MODULE_10__["SumValueServiceImpl"]();
        this.options.sortService = new _common_components_sasi_table_group_sort_aggregate_value_impl__WEBPACK_IMPORTED_MODULE_13__["GroupSortAggregateValueImpl"]();
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
        this.periodService.announcePeriod(this.currentPeriod);
    };
    AdaptersComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.currentDataCenterId = id;
        this.metricService.getAdaptersStatistics(id, this.currentPeriod).subscribe(function (data) {
            _this.data = [];
            data.datacenters.forEach(function (datacenter) { return _this.data = _this.data.concat(datacenter.systems); });
            // TODO change this filtering. checking first metric for non-null is not good, and make it as some named function for readability
            _this.data.forEach(function (system) { return system.pools.forEach(function (pool) { return pool.ports = pool.ports.filter(function (port) { return port.metrics.length > 0 && port.metrics[0].value > 0; }); }); });
            _this.data.forEach(function (system) { return system.pools = system.pools.filter(function (pool) { return (pool.metrics.length > 0 && pool.metrics[0].value > 0) || pool.ports.length > 0; }); });
        }, function (error) {
            console.log(error);
            _this.data = [];
        });
        return this.data;
    };
    AdaptersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adapters',
            template: __webpack_require__(/*! ./adapters.component.html */ "./src/app/global-statistics/views/adapters/adapters.component.html"),
            styles: [__webpack_require__(/*! ./adapters.component.css */ "./src/app/global-statistics/views/adapters/adapters.component.css"), __webpack_require__(/*! ../../global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")]
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

/***/ "./src/app/global-statistics/views/dp-sla/dp-sla-2.component.html":
/*!************************************************************************!*\
  !*** ./src/app/global-statistics/views/dp-sla/dp-sla-2.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\n  <div class=\"container-fluid\">\n    <div class=\"row col-md-6\">\n      <app-sasi-table [data]=\"data | systemPool2SasiGroupTable\" [tableOptions]=\"options\"></app-sasi-table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/views/dp-sla/dp-sla.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/global-statistics/views/dp-sla/dp-sla.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col {\n  width: 35.75% !important;\n}\n\n.col-label {\n  width: 25% !important;\n}\n\n:host /deep/ .groupped-data .metric-value {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n:host /deep/ .groupped-data .metric-unit {\n  font-size: 8px;\n  margin-left: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvZHAtc2xhL2RwLXNsYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy92aWV3cy9kcC1zbGEvZHAtc2xhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sIHtcbiAgd2lkdGg6IDM1Ljc1JSAhaW1wb3J0YW50O1xufVxuXG4uY29sLWxhYmVsIHtcbiAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCAvZGVlcC8gLmdyb3VwcGVkLWRhdGEgLm1ldHJpYy12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuOmhvc3QgL2RlZXAvIC5ncm91cHBlZC1kYXRhIC5tZXRyaWMtdW5pdCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/global-statistics/views/dp-sla/dp-sla.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/global-statistics/views/dp-sla/dp-sla.component.ts ***!
  \********************************************************************/
/*! exports provided: DpSlaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DpSlaComponent", function() { return DpSlaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _period_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../period.service */ "./src/app/period.service.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../bus.service */ "./src/app/global-statistics/bus.service.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/components/route-link-formatter/route-link-formatter.component */ "./src/app/common/components/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../formatters/alert-formatter/alert-formatter.component */ "./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../formatters/simple-formatter/simple-formatter.component */ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _formatters_time_formatter_time_formatter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../formatters/time-formatter/time-formatter.component */ "./src/app/global-statistics/formatters/time-formatter/time-formatter.component.ts");
/* harmony import */ var _utils_sum_value_service_impl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/sum-value-service.impl */ "./src/app/global-statistics/utils/sum-value-service.impl.ts");
/* harmony import */ var _common_components_sasi_table_group_sort_aggregate_value_impl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/components/sasi-table/group-sort-aggregate-value.impl */ "./src/app/common/components/sasi-table/group-sort-aggregate-value.impl.ts");
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
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].SLA_EVENTS,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].OUT_OF_SLA_TIME
        ];
        this.currentPeriod = _metric_service__WEBPACK_IMPORTED_MODULE_3__["PeriodType"].WEEK;
        this.options = new _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiTableOptions"]();
        this.data = []; // TODO duplicated in all Global statistics - grouped
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex('name')
            .withLabel('System')
            .withComponent(_common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_7__["RouteLinkFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].SLA_EVENTS)
            .withLabel('SLA Events')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].OUT_OF_SLA_TIME)
            .withLabel('Out of SLA Time')
            .withComponent(_formatters_time_formatter_time_formatter_component__WEBPACK_IMPORTED_MODULE_11__["TimeFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.colControlFormatter = _formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_8__["AlertFormatterComponent"];
        this.options.rowComponentFormatter = _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_9__["RowGroupTableComponent"];
        this.options.grIndexComponentFormatter = _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_7__["RouteLinkFormatterComponent"];
        this.options.isDataGrouped = true;
        this.options.highlightRow = true;
        this.options.highlightColumn = false;
        this.options.labelColumnWidth = '25';
        this.options.valueColumnWidth = '35.75';
        this.options.aggregateValuesService = new _utils_sum_value_service_impl__WEBPACK_IMPORTED_MODULE_12__["SumValueServiceImpl"]();
        this.options.sortService = new _common_components_sasi_table_group_sort_aggregate_value_impl__WEBPACK_IMPORTED_MODULE_13__["GroupSortAggregateValueImpl"]();
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
        this.periodService.announcePeriod(this.currentPeriod);
    };
    DpSlaComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.currentDataCenterId = id;
        this.metricService.getDpSlaStatistics(id, this.currentPeriod).subscribe(function (data) {
            _this.data = [];
            data.datacenters.forEach(function (datacenter) { return _this.data = _this.data.concat(datacenter.systems); });
        }, function (error) {
            console.log(error);
            _this.data = [];
        });
        return this.data;
    };
    DpSlaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dp-sla',
            template: __webpack_require__(/*! ./dp-sla-2.component.html */ "./src/app/global-statistics/views/dp-sla/dp-sla-2.component.html"),
            styles: [__webpack_require__(/*! ./dp-sla.component.css */ "./src/app/global-statistics/views/dp-sla/dp-sla.component.css"), __webpack_require__(/*! ../../global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")]
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

/***/ "./src/app/global-statistics/views/host-groups-capacity/host-groups-capacity.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/host-groups-capacity/host-groups-capacity.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .col-val {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 2px;\n}\n\n.alert-red {\n  color: #900020;\n}\n\n.alert-amber {\n  color: #db8b0b;\n}\n\n.col {\n  width: 8.88%;\n}\n\n.pool-name {\n  font-size: 14px;\n  font-style: italic;\n}\n\n/* TODO duplicated css definitions in all statistics component*/\n\n:host /deep/ .groupped-data .metric-value,\n:host /deep/ .aggregated-data .metric-value {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n:host /deep/ .groupped-data .metric-unit,\n:host /deep/ .aggregated-data .metric-unit {\n  font-size: 8px;\n  margin-left: 3px;\n}\n\n.sorting {\n  font-size: 13px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.sticky-bottom {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  z-index: 10;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvaG9zdC1ncm91cHMtY2FwYWNpdHkvaG9zdC1ncm91cHMtY2FwYWNpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBLCtEQUErRDs7QUFDL0Q7O0VBRUUsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy92aWV3cy9ob3N0LWdyb3Vwcy1jYXBhY2l0eS9ob3N0LWdyb3Vwcy1jYXBhY2l0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgL2RlZXAvIC5jb2wtdmFsIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xufVxuXG4uYWxlcnQtcmVkIHtcbiAgY29sb3I6ICM5MDAwMjA7XG59XG5cbi5hbGVydC1hbWJlciB7XG4gIGNvbG9yOiAjZGI4YjBiO1xufVxuXG4uY29sIHtcbiAgd2lkdGg6IDguODglO1xufVxuXG4ucG9vbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8qIFRPRE8gZHVwbGljYXRlZCBjc3MgZGVmaW5pdGlvbnMgaW4gYWxsIHN0YXRpc3RpY3MgY29tcG9uZW50Ki9cbjpob3N0IC9kZWVwLyAuZ3JvdXBwZWQtZGF0YSAubWV0cmljLXZhbHVlLFxuOmhvc3QgL2RlZXAvIC5hZ2dyZWdhdGVkLWRhdGEgLm1ldHJpYy12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuOmhvc3QgL2RlZXAvIC5ncm91cHBlZC1kYXRhIC5tZXRyaWMtdW5pdCxcbjpob3N0IC9kZWVwLyAuYWdncmVnYXRlZC1kYXRhIC5tZXRyaWMtdW5pdCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uc29ydGluZyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uc3RpY2t5LWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/global-statistics/views/host-groups-capacity/host-groups-capacity.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/host-groups-capacity/host-groups-capacity.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\n  <div class=\"container-fluid\">\n    <div class=\"row col-md-12\">\n      <app-sasi-table class=\"table-right\" [data]=\"data | systemPool2SasiGroupTable: 'hostGroups'\"\n                      [tableOptions]=\"options\"></app-sasi-table>\n      <app-aggregated-statistics class='col-md-12 sticky-bottom' [aggregatedColumns]=\"options.getAggregatedColumns()\"\n                                 [data]=\"data | systemPool2SasiGroupTable\" [selectedRows]=\"selectedRows\"\n                                 [prefix]=\"options.storageNamePrefix\"></app-aggregated-statistics>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/views/host-groups-capacity/host-groups-capacity.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/host-groups-capacity/host-groups-capacity.component.ts ***!
  \************************************************************************************************/
/*! exports provided: HostGroupsCapacityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostGroupsCapacityComponent", function() { return HostGroupsCapacityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _period_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../period.service */ "./src/app/period.service.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../bus.service */ "./src/app/global-statistics/bus.service.ts");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var _formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../formatters/simple-formatter/simple-formatter.component */ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/components/route-link-formatter/route-link-formatter.component */ "./src/app/common/components/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/sasi-weighted-arithmetic-mean.utils */ "./src/app/global-statistics/utils/sasi-weighted-arithmetic-mean.utils.ts");
/* harmony import */ var _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/components/sasi-table/group-sort-impl */ "./src/app/common/components/sasi-table/group-sort-impl.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _formatters_tier_formatter_tier_formatter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../formatters/tier-formatter/tier-formatter.component */ "./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var HostGroupsCapacityComponent = /** @class */ (function () {
    function HostGroupsCapacityComponent(route, router, periodService, metricService, bus, localStorageService) {
        this.route = route;
        this.router = router;
        this.periodService = periodService;
        this.metricService = metricService;
        this.bus = bus;
        this.localStorageService = localStorageService;
        this.types = [
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_TOTAL,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1D,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1W,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1M
        ];
        this.data = []; // Todo caching data by dataCenters
        this.aggregatedStats = new Array();
        this.options = new _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiTableOptions"]();
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex('name')
            .withLabel('Host-Group')
            .withAltLabel('System')
            .withComponent(_common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_10__["RouteLinkFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].TIER)
            .withLabel('Tier')
            .withComponent(_formatters_tier_formatter_tier_formatter_component__WEBPACK_IMPORTED_MODULE_14__["TierFormatterComponent"])
            .withTooltipText('Tier')
            .withColumnWidth('6')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_TOTAL)
            .withLabel('Provisioned Capacity')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Provisioned Capacity')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED)
            .withLabel('Used Capacity')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Used Capacity')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED_PERC)
            .withLabel('Used Capacity [%}')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Used Capacity')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1D)
            .withLabel('Last Day Change')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('One Day Change')
            .withInfinity(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1W)
            .withLabel('Last Week Change')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('One Week Change')
            .withInfinity(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1M)
            .withLabel('Last Month Change')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('One Month Change')
            .withInfinity(false)
            .build());
        this.options.rowComponentFormatter = _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_9__["RowGroupTableComponent"];
        this.options.grIndexComponentFormatter = _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_10__["RouteLinkFormatterComponent"];
        this.options.isDataGrouped = true;
        this.options.highlightRow = true;
        this.options.labelColumnWidth = '13';
        this.options.valueColumnWidth = '12.9';
        this.options.storageNamePrefix = 'hostGroupCap';
        this.options.selectableRows = true;
        this.options.aggregateValuesService = new _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_11__["SasiWeightedArithmeticMeanUtils"]();
        this.options.sortService = new _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_12__["GroupSortImpl"]();
        this.options.columnAlign = 'right';
        //
        // this.options.cellDecoratorRules.push(new AlertRule(SystemMetricType.PHYSICAL_USED_PERC, new Threshold('text-green', 80, 84.9)));
        // this.options.cellDecoratorRules.push(new AlertRule(SystemMetricType.PHYSICAL_USED_PERC, new Threshold('text-alert-yellow', 85, 88)));
        // this.options.cellDecoratorRules.push(new AlertRule(SystemMetricType.PHYSICAL_USED_PERC, new Threshold('text-red', 88, 10000)));
    }
    // Todo common with logical stats
    HostGroupsCapacityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = +params.get('id');
            _this.bus.announceDatacenter(id);
            _this.bus.announceContext('host-group-capacity');
            _this.getTableData(id);
        });
        this.periodService.announceEnablePeriod(false);
        this.localStorageService.observe(this.options.storageNamePrefix + '_selected').subscribe(function (data) {
            _this.selectedRows = data.newValue;
        });
    };
    HostGroupsCapacityComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.metricService.getHostGroupCapacityStatistics(id).subscribe(function (data) {
            _this.data = [];
            data.datacenters.forEach(function (datacenter) { return _this.data = _this.data.concat(datacenter.systems); });
        }, function (error) {
            console.log(error);
            _this.data = [];
        });
        return this.data;
    };
    HostGroupsCapacityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-host-groups-capacity',
            template: __webpack_require__(/*! ./host-groups-capacity.component.html */ "./src/app/global-statistics/views/host-groups-capacity/host-groups-capacity.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({ height: '0px', overflow: 'hidden', margin: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({ 'height': '*', overflow: 'hidden', margin: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('500ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('iconRotate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({ transform: 'rotate(0deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({ transform: 'rotate(90deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('500ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('0ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('0ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])('500ms'))
                ])
            ],
            styles: [__webpack_require__(/*! ./host-groups-capacity.component.css */ "./src/app/global-statistics/views/host-groups-capacity/host-groups-capacity.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _period_service__WEBPACK_IMPORTED_MODULE_4__["PeriodService"],
            _metric_service__WEBPACK_IMPORTED_MODULE_5__["MetricService"],
            _bus_service__WEBPACK_IMPORTED_MODULE_6__["BusService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]])
    ], HostGroupsCapacityComponent);
    return HostGroupsCapacityComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .col-val {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 2px;\n}\n\n.alert-red {\n  color: #900020;\n}\n\n.alert-amber {\n  color: #db8b0b;\n}\n\n.col {\n  width: 8.88%;\n}\n\n.pool-name {\n  font-size: 14px;\n  font-style: italic;\n}\n\n:host /deep/ .groupped-data .metric-value,\n:host /deep/ .aggregated-data .metric-value {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n:host /deep/ .groupped-data .metric-unit,\n:host /deep/ .aggregated-data .metric-unit {\n  font-size: 8px;\n  margin-left: 3px;\n}\n\n.sorting {\n  font-size: 13px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.sticky-bottom {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  z-index: 10;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvbG9naWNhbC1jYXBhY2l0eS1zdGF0aXN0aWNzL2xvZ2ljYWwtY2FwYWNpdHktc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy92aWV3cy9sb2dpY2FsLWNhcGFjaXR5LXN0YXRpc3RpY3MvbG9naWNhbC1jYXBhY2l0eS1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8gLmNvbC12YWwge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG59XG5cbi5hbGVydC1yZWQge1xuICBjb2xvcjogIzkwMDAyMDtcbn1cblxuLmFsZXJ0LWFtYmVyIHtcbiAgY29sb3I6ICNkYjhiMGI7XG59XG5cbi5jb2wge1xuICB3aWR0aDogOC44OCU7XG59XG5cbi5wb29sLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuOmhvc3QgL2RlZXAvIC5ncm91cHBlZC1kYXRhIC5tZXRyaWMtdmFsdWUsXG46aG9zdCAvZGVlcC8gLmFnZ3JlZ2F0ZWQtZGF0YSAubWV0cmljLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG46aG9zdCAvZGVlcC8gLmdyb3VwcGVkLWRhdGEgLm1ldHJpYy11bml0LFxuOmhvc3QgL2RlZXAvIC5hZ2dyZWdhdGVkLWRhdGEgLm1ldHJpYy11bml0IHtcbiAgZm9udC1zaXplOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi5zb3J0aW5nIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5zdGlja3ktYm90dG9tIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\n  <div class=\"container-fluid\">\n    <div class=\"row col-md-12\">\n      <app-sasi-table [data]=\"data | systemPool2SasiGroupTable: 'capacityAnalysis'\"\n                      [tableOptions]=\"options\"></app-sasi-table>\n      <app-grouped-aggregated-statistics class='col-md-12 sticky-bottom' [data]=\"data | systemPool2SasiGroupTable\"\n                                         [selectedRows]=\"selectedRows\"\n                                         [prefix]=\"options.storageNamePrefix\"></app-grouped-aggregated-statistics>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: LogicalCapacityStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicalCapacityStatisticsComponent", function() { return LogicalCapacityStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _period_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../period.service */ "./src/app/period.service.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../bus.service */ "./src/app/global-statistics/bus.service.ts");
/* harmony import */ var _formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../formatters/simple-formatter/simple-formatter.component */ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/components/route-link-formatter/route-link-formatter.component */ "./src/app/common/components/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/sasi-weighted-arithmetic-mean.utils */ "./src/app/global-statistics/utils/sasi-weighted-arithmetic-mean.utils.ts");
/* harmony import */ var _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/components/sasi-table/group-sort-impl */ "./src/app/common/components/sasi-table/group-sort-impl.ts");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
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
    function LogicalCapacityStatisticsComponent(route, router, periodService, metricService, bus, localStorageService) {
        this.route = route;
        this.router = router;
        this.periodService = periodService;
        this.metricService = metricService;
        this.bus = bus;
        this.localStorageService = localStorageService;
        this.types = [
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].SUBSCRIBED_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_FREE,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_FREE,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_TOTAL,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_FREE,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].COMPRESS_RATIO,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].DEDUP_RATIO,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].TOTAL_SAVING_EFFECT,
        ];
        this.data = [];
        this.aggregatedStats = new Array();
        this.options = new _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiTableOptions"]();
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex('name')
            .withLabel('Pool')
            .withAltLabel('System')
            .withComponent(_common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_9__["RouteLinkFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].SUBSCRIBED_CAPACITY)
            .withLabel('Subs. Capacity')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Subscribed Capacity')
            .withAltBorder(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_SUBS_PERC)
            .withLabel('Physical Subs.')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Physical Subscription')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_SUBS_PERC)
            .withLabel('Logical Subs.')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Logical Subscription')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED_PERC)
            .withLabel('Logical Used')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Logical Used')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_SUBS_PERC)
            .withLabel('Net Subs.')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Net Subscription')
            .withAltBorder(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_CAPACITY)
            .withLabel('Physical Capacity')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Physical Capacity (Physical data occupation on HDD/FMD/SSD)')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED)
            .withLabel('Physical Used')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Physical Used')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_FREE)
            .withLabel('Physical Free')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Physical Free')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED_PERC)
            .withLabel('Physical Used')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Physical Used')
            .withAltBorder(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_CAPACITY)
            .withLabel('Logical Capacity')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Logical Capacity')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED)
            .withLabel('Logical Used')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Logical Used')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_FREE)
            .withLabel('Logical Free')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Logical Free')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED_PERC)
            .withLabel('Logical Used')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Logical Used')
            .withAltBorder(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_TOTAL)
            .withLabel('Net Capacity')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Net Capacity (Virtual capacity without any saving mechanism)')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED)
            .withLabel('Net Used')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Net Used')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_FREE)
            .withLabel('Net Free')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Net Free')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED_PERC)
            .withLabel('Net Used')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Net Used')
            .withAltBorder(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].COMPRESS_RATIO)
            .withLabel('Comp Ratio')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Compression Ratio')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].DEDUP_RATIO)
            .withLabel('Dedup Ratio')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Deduplication Ratio')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].TOTAL_SAVING_EFFECT)
            .withLabel('Total Saving Effect')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Total Saving Effect')
            .build());
        this.options.rowComponentFormatter = _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_8__["RowGroupTableComponent"];
        this.options.grIndexComponentFormatter = _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_9__["RouteLinkFormatterComponent"];
        this.options.isDataGrouped = true;
        this.options.highlightRow = true;
        this.options.labelColumnWidth = '13';
        this.options.valueColumnWidth = '4.17';
        this.options.storageNamePrefix = 'logicalCap';
        this.options.selectableRows = true;
        this.options.aggregateValuesService = new _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_10__["SasiWeightedArithmeticMeanUtils"]();
        this.options.sortService = new _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_11__["GroupSortImpl"]();
        this.options.columnAlign = 'right';
    }
    LogicalCapacityStatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = +params.get('id');
            _this.bus.announceDatacenter(id);
            _this.bus.announceContext('logical-capacity');
            _this.getTableData(id);
        });
        this.localStorageService.observe(this.options.storageNamePrefix + '_selected').subscribe(function (data) {
            _this.selectedRows = data.newValue;
        });
        this.periodService.announceEnablePeriod(false);
    };
    LogicalCapacityStatisticsComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.metricService.getCapacityStatistics(id).subscribe(function (data) {
            _this.data = [];
            data.datacenters.forEach(function (datacenter) { return _this.data = _this.data.concat(datacenter.systems); });
        }, function (error) {
            console.log(error);
            _this.data = [];
        });
        return this.data;
    };
    LogicalCapacityStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-physical-statistics',
            template: __webpack_require__(/*! ./logical-capacity-statistics.component.html */ "./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.html"),
            styles: [__webpack_require__(/*! ./logical-capacity-statistics.component.css */ "./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _period_service__WEBPACK_IMPORTED_MODULE_4__["PeriodService"],
            _metric_service__WEBPACK_IMPORTED_MODULE_5__["MetricService"],
            _bus_service__WEBPACK_IMPORTED_MODULE_6__["BusService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_12__["LocalStorageService"]])
    ], LogicalCapacityStatisticsComponent);
    return LogicalCapacityStatisticsComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/views/performance-statistics/performance-statistics.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/performance-statistics/performance-statistics.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i.sort-icon-left {\n  margin-right: 5px;\n}\n\ni.sort-icon-right {\n  margin-left: 5px;\n}\n\n.col {\n  width: 13.78%;\n}\n\n.table-data.row {\n  margin: 0px 0px 5px 0px;\n  border: 3px #EAEAEA solid;\n}\n\n.peak-label {\n  color: #c7e1f8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvcGVyZm9ybWFuY2Utc3RhdGlzdGljcy9wZXJmb3JtYW5jZS1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL3ZpZXdzL3BlcmZvcm1hbmNlLXN0YXRpc3RpY3MvcGVyZm9ybWFuY2Utc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaS5zb3J0LWljb24tbGVmdCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5pLnNvcnQtaWNvbi1yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5jb2wge1xuICB3aWR0aDogMTMuNzglO1xufVxuXG4udGFibGUtZGF0YS5yb3cge1xuICBtYXJnaW46IDBweCAwcHggNXB4IDBweDtcbiAgYm9yZGVyOiAzcHggI0VBRUFFQSBzb2xpZDtcbn1cblxuLnBlYWstbGFiZWwge1xuICBjb2xvcjogI2M3ZTFmODtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/global-statistics/views/performance-statistics/performance-statistics.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/performance-statistics/performance-statistics.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <app-sasi-table [data]=\"data | systemPool2SasiTable: 'dashboard'\" [tableOptions]=\"options\"></app-sasi-table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/views/performance-statistics/performance-statistics.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/performance-statistics/performance-statistics.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PerformanceStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceStatisticsComponent", function() { return PerformanceStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
/* harmony import */ var _period_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../period.service */ "./src/app/period.service.ts");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../bus.service */ "./src/app/global-statistics/bus.service.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../formatters/unit-formatter/unit-formatter.component */ "./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.ts");
/* harmony import */ var _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/components/route-link-formatter/route-link-formatter.component */ "./src/app/common/components/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../formatters/alert-formatter/alert-formatter.component */ "./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.ts");
/* harmony import */ var _alert_rule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../alert-rule */ "./src/app/global-statistics/alert-rule.ts");
/* harmony import */ var _common_components_sasi_table_row_table_row_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/components/sasi-table/row-table/row-table.component */ "./src/app/common/components/sasi-table/row-table/row-table.component.ts");
/* harmony import */ var _common_components_sasi_table_simple_sort_impl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/components/sasi-table/simple-sort-impl */ "./src/app/common/components/sasi-table/simple-sort-impl.ts");
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
        this.currentPeriod = _metric_service__WEBPACK_IMPORTED_MODULE_1__["PeriodType"].WEEK;
        this.data = []; // Todo caching data by datacenters
        this.options = new _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiTableOptions"]();
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex('name')
            .withLabel('System')
            .withComponent(_common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_8__["RouteLinkFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WORKLOAD)
            .withLabel('Workload')
            .withComponent(_formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TRANSFER)
            .withLabel('Transfer')
            .withComponent(_formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].RESPONSE)
            .withLabel('Response')
            .withComponent(_formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].CPU)
            .withLabel('CPU')
            .withComponent(_formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].HDD)
            .withLabel('HDD')
            .withComponent(_formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WRITE_PENDING_PERC)
            .withLabel('Write Pending')
            .withComponent(_formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.colControlFormatter = _formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_9__["AlertFormatterComponent"];
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
        this.periodService.announcePeriod(this.currentPeriod);
        this.options.cellDecoratorRules.push(new _alert_rule__WEBPACK_IMPORTED_MODULE_10__["AlertRule"](_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].CPU, new _alert_rule__WEBPACK_IMPORTED_MODULE_10__["Threshold"]('text-orange', 80, 10000)));
        this.options.cellDecoratorRules.push(new _alert_rule__WEBPACK_IMPORTED_MODULE_10__["AlertRule"](_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WRITE_PENDING_PERC, new _alert_rule__WEBPACK_IMPORTED_MODULE_10__["Threshold"]('text-orange', 30, 10000)));
    };
    PerformanceStatisticsComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.currentDataCenterId = id;
        this.metricService.getPerformanceStatistics(id, this.currentPeriod).subscribe(function (data) {
            _this.data = [];
            data.datacenters.forEach(function (datacenter) { return _this.data = _this.data.concat(datacenter.systems); });
        }, function (error) {
            console.log(error);
            _this.data = [];
        });
        return this.data;
    };
    PerformanceStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab',
            template: __webpack_require__(/*! ./performance-statistics.component.html */ "./src/app/global-statistics/views/performance-statistics/performance-statistics.component.html"),
            styles: [__webpack_require__(/*! ./performance-statistics.component.css */ "./src/app/global-statistics/views/performance-statistics/performance-statistics.component.css"), __webpack_require__(/*! ../../global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")]
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

/***/ "./src/app/global-statistics/views/physical-capacity-statistics/physical-capacity-statistics.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/physical-capacity-statistics/physical-capacity-statistics.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .col-val {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 2px;\n}\n\n.alert-red {\n  color: #900020;\n}\n\n.alert-amber {\n  color: #db8b0b;\n}\n\n.col {\n  width: 8.88%;\n}\n\n.pool-name {\n  font-size: 14px;\n  font-style: italic;\n}\n\n/* TODO duplicated css definitions in all statistics component*/\n\n:host /deep/ .groupped-data .metric-value,\n:host /deep/ .aggregated-data .metric-value {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n:host /deep/ .groupped-data .metric-unit,\n:host /deep/ .aggregated-data .metric-unit {\n  font-size: 8px;\n  margin-left: 3px;\n}\n\n.sorting {\n  font-size: 13px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.sticky-bottom {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n  z-index: 10;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvcGh5c2ljYWwtY2FwYWNpdHktc3RhdGlzdGljcy9waHlzaWNhbC1jYXBhY2l0eS1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQSwrREFBK0Q7O0FBQy9EOztFQUVFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBd0I7VUFBeEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvcGh5c2ljYWwtY2FwYWNpdHktc3RhdGlzdGljcy9waHlzaWNhbC1jYXBhY2l0eS1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8gLmNvbC12YWwge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG59XG5cbi5hbGVydC1yZWQge1xuICBjb2xvcjogIzkwMDAyMDtcbn1cblxuLmFsZXJ0LWFtYmVyIHtcbiAgY29sb3I6ICNkYjhiMGI7XG59XG5cbi5jb2wge1xuICB3aWR0aDogOC44OCU7XG59XG5cbi5wb29sLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLyogVE9ETyBkdXBsaWNhdGVkIGNzcyBkZWZpbml0aW9ucyBpbiBhbGwgc3RhdGlzdGljcyBjb21wb25lbnQqL1xuOmhvc3QgL2RlZXAvIC5ncm91cHBlZC1kYXRhIC5tZXRyaWMtdmFsdWUsXG46aG9zdCAvZGVlcC8gLmFnZ3JlZ2F0ZWQtZGF0YSAubWV0cmljLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG46aG9zdCAvZGVlcC8gLmdyb3VwcGVkLWRhdGEgLm1ldHJpYy11bml0LFxuOmhvc3QgL2RlZXAvIC5hZ2dyZWdhdGVkLWRhdGEgLm1ldHJpYy11bml0IHtcbiAgZm9udC1zaXplOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi5zb3J0aW5nIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5zdGlja3ktYm90dG9tIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/global-statistics/views/physical-capacity-statistics/physical-capacity-statistics.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/physical-capacity-statistics/physical-capacity-statistics.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\n  <div class=\"container-fluid\">\n    <div class=\"row col-md-12\">\n      <app-sasi-table class=\"table-right\" [data]=\"data | systemPool2SasiGroupTable: 'capacityAnalysis'\"\n                      [tableOptions]=\"options\"></app-sasi-table>\n      <app-aggregated-statistics class='col-md-12 sticky-bottom' [aggregatedColumns]=\"options.getAggregatedColumns()\"\n                                 [data]=\"data | systemPool2SasiGroupTable\" [selectedRows]=\"selectedRows\"\n                                 [prefix]=\"options.storageNamePrefix\"></app-aggregated-statistics>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-statistics/views/physical-capacity-statistics/physical-capacity-statistics.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/physical-capacity-statistics/physical-capacity-statistics.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: PhysicalCapacityStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicalCapacityStatisticsComponent", function() { return PhysicalCapacityStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _period_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../period.service */ "./src/app/period.service.ts");
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../bus.service */ "./src/app/global-statistics/bus.service.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/components/route-link-formatter/route-link-formatter.component */ "./src/app/common/components/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../formatters/simple-formatter/simple-formatter.component */ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../formatters/alert-formatter/alert-formatter.component */ "./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _alert_rule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../alert-rule */ "./src/app/global-statistics/alert-rule.ts");
/* harmony import */ var _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/sasi-weighted-arithmetic-mean.utils */ "./src/app/global-statistics/utils/sasi-weighted-arithmetic-mean.utils.ts");
/* harmony import */ var _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/components/sasi-table/group-sort-impl */ "./src/app/common/components/sasi-table/group-sort-impl.ts");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var PhysicalCapacityStatisticsComponent = /** @class */ (function () {
    function PhysicalCapacityStatisticsComponent(route, router, periodService, metricService, bus, localStorageService) {
        this.route = route;
        this.router = router;
        this.periodService = periodService;
        this.metricService = metricService;
        this.bus = bus;
        this.localStorageService = localStorageService;
        this.types = [
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PHYSICAL_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PHYSICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].AVAILABLE_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].LOGICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PHYSICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].COMPRESS_RATIO,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PREDICTION_L1,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PREDICTION_L2,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PREDICTION_L3
        ];
        this.data = []; // Todo caching data by dataCenters
        this.aggregatedStats = new Array();
        this.options = new _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__["SasiTableOptions"]();
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__["SasiColumnBuilder"].getInstance()
            .withIndex('name')
            .withLabel('Pool')
            .withAltLabel('System')
            .withComponent(_common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_8__["RouteLinkFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PHYSICAL_CAPACITY)
            .withLabel('Physical Capacity')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PHYSICAL_SUBS_PERC)
            .withLabel('Physical Subscription')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].AVAILABLE_CAPACITY)
            .withLabel('Available Capacity')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].LOGICAL_USED_PERC)
            .withLabel('Logical Used')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PHYSICAL_USED_PERC)
            .withLabel('Physical Used')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].COMPRESS_RATIO)
            .withLabel('Compression Ratio')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PREDICTION_L1)
            .withLabel('Reach 80%')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .withTooltipText('Days to reach 80% of "Physical Used"')
            .withInfinity(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PREDICTION_L2)
            .withLabel('Reach 85%')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .withTooltipText('Days to reach 85% of "Physical Used"')
            .withInfinity(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PREDICTION_L3)
            .withLabel('Reach 88%')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .withTooltipText('Days to reach 88% of "Physical Used"')
            .withInfinity(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].CAPACITY_CHANGE_1D)
            .withLabel('Change 1D')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withInfinity(false)
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('One Day Change')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].CAPACITY_CHANGE_1W)
            .withLabel('Change 1W')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withInfinity(false)
            .withTooltipText('One Week Change')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_7__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].CAPACITY_CHANGE_1M)
            .withLabel('Change 1M')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_9__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withInfinity(false)
            .withTooltipText('One Month Change')
            .build());
        this.options.colControlFormatter = _formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_10__["AlertFormatterComponent"];
        this.options.rowComponentFormatter = _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_11__["RowGroupTableComponent"];
        this.options.grIndexComponentFormatter = _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_8__["RouteLinkFormatterComponent"];
        this.options.isDataGrouped = true;
        this.options.highlightRow = true;
        this.options.labelColumnWidth = '13';
        this.options.valueColumnWidth = '6.65';
        this.options.storageNamePrefix = 'physicalCap';
        this.options.selectableRows = true;
        this.options.aggregateValuesService = new _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_13__["SasiWeightedArithmeticMeanUtils"]();
        this.options.sortService = new _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_14__["GroupSortImpl"]();
        this.options.columnAlign = 'right';
        this.options.cellDecoratorRules.push(new _alert_rule__WEBPACK_IMPORTED_MODULE_12__["AlertRule"](_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PHYSICAL_USED_PERC, new _alert_rule__WEBPACK_IMPORTED_MODULE_12__["Threshold"]('text-green', 80, 84.9)));
        this.options.cellDecoratorRules.push(new _alert_rule__WEBPACK_IMPORTED_MODULE_12__["AlertRule"](_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PHYSICAL_USED_PERC, new _alert_rule__WEBPACK_IMPORTED_MODULE_12__["Threshold"]('text-alert-yellow', 85, 88)));
        this.options.cellDecoratorRules.push(new _alert_rule__WEBPACK_IMPORTED_MODULE_12__["AlertRule"](_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PHYSICAL_USED_PERC, new _alert_rule__WEBPACK_IMPORTED_MODULE_12__["Threshold"]('text-red', 88, 10000)));
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
        this.periodService.announceEnablePeriod(false);
        this.localStorageService.observe(this.options.storageNamePrefix + '_selected').subscribe(function (data) {
            _this.selectedRows = data.newValue;
        });
    };
    PhysicalCapacityStatisticsComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.metricService.getCapacityStatistics(id).subscribe(function (data) {
            _this.data = [];
            data.datacenters.forEach(function (datacenter) { return _this.data = _this.data.concat(datacenter.systems); });
        }, function (error) {
            console.log(error);
            _this.data = [];
        });
        return this.data;
    };
    PhysicalCapacityStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-capacity-statistics',
            template: __webpack_require__(/*! ./physical-capacity-statistics.component.html */ "./src/app/global-statistics/views/physical-capacity-statistics/physical-capacity-statistics.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', overflow: 'hidden', margin: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ 'height': '*', overflow: 'hidden', margin: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('500ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('iconRotate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'rotate(0deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'rotate(90deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('500ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('500ms'))
                ])
            ],
            styles: [__webpack_require__(/*! ./physical-capacity-statistics.component.css */ "./src/app/global-statistics/views/physical-capacity-statistics/physical-capacity-statistics.component.css"), __webpack_require__(/*! ../../global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _period_service__WEBPACK_IMPORTED_MODULE_3__["PeriodService"],
            _metric_service__WEBPACK_IMPORTED_MODULE_2__["MetricService"],
            _bus_service__WEBPACK_IMPORTED_MODULE_6__["BusService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_15__["LocalStorageService"]])
    ], PhysicalCapacityStatisticsComponent);
    return PhysicalCapacityStatisticsComponent;
}());



/***/ }),

/***/ "./src/app/http-loading.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/http-loading.interceptor.ts ***!
  \*********************************************/
/*! exports provided: HttpLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoading", function() { return HttpLoading; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpLoading = /** @class */ (function () {
    function HttpLoading(spinnerService) {
        this.spinnerService = spinnerService;
        this.runningCalls = 0;
    }
    HttpLoading.prototype.intercept = function (req, next) {
        var _this = this;
        this.runningCalls++;
        this.spinnerService.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this.runningCalls--;
            if (_this.runningCalls === 0) {
                _this.spinnerService.hide();
            }
        }));
    };
    HttpLoading = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], HttpLoading);
    return HttpLoading;
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
    PeriodType["DAY"] = "DAY";
    PeriodType["WEEK"] = "WEEK";
    PeriodType["MONTH"] = "MONTH";
})(PeriodType || (PeriodType = {}));
var MetricService = /** @class */ (function () {
    function MetricService(http) {
        this.http = http;
        this.currentDate = new Date();
        this.getDatacenters();
    }
    MetricService.prototype.getInfrastructureStats = function () {
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/infrastructure/alerts');
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
        var datacenterObj = this.infrastructure.find(function (datacenter) { return datacenter.id === datacenterId; });
        if (datacenterObj === undefined) {
            return '';
        }
        var systemObj = datacenterObj.systems.find(function (system) { return system.id === systemId; });
        if (systemObj === undefined) {
            return '';
        }
        return datacenterObj.systems.find(function (system) { return system.id === systemId; }).name;
    };
    MetricService.prototype.getPerformanceStatistics = function (id, period) {
        var url;
        if (id !== undefined && id !== -1) {
            url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters/' + id + '/performance', period);
        }
        else {
            url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters/performance', period);
        }
        return this.http.get(url);
    };
    MetricService.prototype.getCapacityStatistics = function (id) {
        var url;
        if (id !== undefined && id !== -1) {
            url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters/' + id + '/capacity');
        }
        else {
            url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters/capacity');
        }
        return this.http.get(url);
    };
    MetricService.prototype.getDpSlaStatistics = function (id, period) {
        var url;
        if (id !== undefined && id !== -1) {
            url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters/' + id + '/sla', period);
        }
        else {
            url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters/sla', period);
        }
        return this.http.get(url);
    };
    MetricService.prototype.getAdaptersStatistics = function (id, period) {
        var url;
        if (id !== undefined && id !== -1) {
            url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters/' + id + '/adapters', period);
        }
        else {
            url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters/adapters', period);
        }
        return this.http.get(url);
    };
    MetricService.prototype.getGlobalCapacityStatistics = function () {
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/infrastructure/capacity');
        return this.http.get(url);
    };
    MetricService.prototype.getGlobalHostGroupCapacityStatistics = function () {
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/infrastructure/host-group-capacity');
        return this.http.get(url);
    };
    MetricService.prototype.getHostGroupCapacityStatistics = function (id) {
        var url;
        if (id !== undefined && id !== -1) {
            url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters/' + id + '/host-groups');
        }
        else {
            url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters/host-groups');
        }
        return this.http.get(url);
    };
    MetricService.prototype.getGraphData = function (types) {
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/infrastructure/performance/graph');
        url = url + this.convertTypeToUrlParams('types', types);
        return this.http.get(url);
    };
    MetricService.prototype.getCapacityGraphData = function (types) {
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/infrastructure/capacity/graph');
        url = url + this.convertTypeToUrlParams('types', types);
        return this.http.get(url);
    };
    MetricService.prototype.buildUrl = function (baseUrl, basePath, period) {
        var periodParam = '';
        if (period != null) {
            periodParam = 'period=' + period + '&';
        }
        return baseUrl + basePath + '?' + periodParam + 't=' + this.generateSaltValue() + '&date=' + this.generateDate();
    };
    MetricService.prototype.generateSaltValue = function () {
        return Math.random().toString(36).substring(2, 15);
    };
    MetricService.prototype.generateDate = function () {
        var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US');
        return pipe.transform(this.currentDate, 'yyyy-MM-dd');
    };
    MetricService.prototype.convertTypeToUrlParams = function (paramName, types) {
        var paramNameUrl = '&' + paramName + '[]=';
        return types.reduce(function (previous, current) {
            return previous + paramNameUrl + current;
        }, '');
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
        // Observable string streams
        this.periodAnnouncement$ = this.periodAnnoucement.asObservable();
        this.periodEnableAnnoucement = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
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
    logoUrl: '/assets/logo.png'
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