(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<app-side-menu></app-side-menu>\r\n<ngx-spinner\r\n  bdColor=\"rgba(34, 45, 50, 0.5)\"\r\n  size=\"medium\"\r\n  color=\"#3c8dbc\"\r\n  type=\"line-scale\"\r\n  [fullScreen]=\"false\"\r\n  fullScreen=\"false\"\r\n>\r\n  <p style=\"color: #3c8dbc\"> Loading... </p>\r\n</ngx-spinner>\r\n<div class=\"content-wrapper\">\r\n <a> <app-breadcrumb></app-breadcrumb></a>\r\n  <section class=\"container-fluid\">\r\n    <router-outlet></router-outlet>\r\n  </section>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/info-box/info-box.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/info-box/info-box.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"info-box\">\r\n\r\n  <span *ngIf=\"isOverThreshold()\" [tooltip]=\"infoBoxTooltip\" class=\"info-box-icon bg-orange info-box-icon cursor\"\r\n        (click)=\"openModal()\">\r\n    <i class=\"fa fa-exclamation-triangle\"></i>\r\n  </span>\r\n  <span *ngIf=\"!isOverThreshold()\" class=\"info-box-icon bg-green\">\r\n    <i class=\"fa {{icon}}\"></i>\r\n  </span>\r\n\r\n  <div class=\"info-box-content\">\r\n    <span class=\"info-box-text\">{{label}}</span>\r\n    <span class=\"info-box-number\">{{value}}<small></small></span>\r\n    <div class=\"cut-text\">\r\n    <span *ngIf=\"data.length > 0\">\r\n      |<span *ngFor=\"let occurence of data; let i = index;\">\r\n        <span *ngIf=\"i < 10\"><a [routerLink]=\"'/global-statistics/' + context + '/' + occurence.datacenterId\">\r\n          {{metric.getSystemName(occurence.datacenterId, occurence.systemId)}}</a> |\r\n          </span>\r\n      </span>\r\n    </span>\r\n    </div>\r\n    <span *ngIf=\"data.length > 2\"><a class=\"small-box-footer\" href=\"#\" [class.hidden]=\"!isOverThreshold()\"\r\n                                     (click)=\"openModal()\"> >>> </a> </span>\r\n  </div>\r\n  <!-- /.info-box-content -->\r\n</div>\r\n<div class=\"modal fade in\" id=\"modal-default\" [class.open]=\"isModalOpened()\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" (click)=\"closeModal()\">&#735;</span></button>\r\n        <h4 class=\"modal-title\">{{label}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\" *ngIf=\"data.length > 0\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n          <tr>\r\n            <th>System</th>\r\n            <th *ngIf=\"data[0].entityType === entityType.POOL\">Pool</th>\r\n            <th *ngIf=\"data[0].entityType === entityType.ADAPTER || data[0].middleEntityType === entityType.ADAPTER\">\r\n              Adapter\r\n            </th>\r\n            <th *ngIf=\"data[0].entityType === entityType.PORT\">Port</th>\r\n            <th>Value</th>\r\n          </tr>\r\n          </thead>\r\n          <tr *ngFor=\"let occurence of data\">\r\n            <td *ngIf=\"occurence.entityType !== null\">\r\n              <span><a [routerLink]=\"'/global-statistics/' + context + '/' + occurence.datacenterId\">\r\n                {{metric.getSystemName(occurence.datacenterId, occurence.systemId)}}</a>\r\n              </span>\r\n            </td>\r\n            <td *ngIf=\"occurence.entityType === entityType.POOL || occurence.entityType === entityType.ADAPTER \">\r\n              <span><a [routerLink]=\"'/global-statistics/' + context + '/' + occurence.datacenterId\">\r\n                {{occurence.name}}</a>\r\n              </span>\r\n            </td>\r\n            <td *ngIf=\"occurence.middleEntityType === entityType.ADAPTER\">\r\n              <span><a [routerLink]=\"'/global-statistics/' + context + '/' + occurence.datacenterId\">\r\n                {{occurence.middleEntityName}}</a>\r\n              </span>\r\n            </td>\r\n            <td *ngIf=\"occurence.entityType === entityType.PORT\">\r\n              <span><a [routerLink]=\"'/global-statistics/' + context + '/' + occurence.datacenterId\">\r\n                {{occurence.name}}</a>\r\n              </span>\r\n            </td>\r\n            <td>\r\n              {{occurence.value}} {{occurence.unit}}\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default pull-left\" data-dismiss=\"modal\" (click)=\"closeModal()\">Close\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/knob/knob-sa.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/knob/knob-sa.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-knob-label workload-knob-label\">{{label}}</div>\r\n<div appUiKnob *ngIf=\"metric !== undefined\" [value]=\"metric.value\" [options]=\"knOptions\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/route-link-formatter/route-link-formatter.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/route-link-formatter/route-link-formatter.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<span [className]=\"getAlertType(pool, type)\">-->\r\n<span *ngIf=\"data != null\">\r\n  <span class=\"system-name\"><a\r\n    [routerLink]=\"data.id | iframeUrlCreator: {iframeLink:data.iFrameLink, anchor: data.value}\">{{data.value}}</a></span>\r\n</span>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/sasi-table/column/column.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/sasi-table/column/column.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n     (mouseout)=\"setHighlightedColumn(-1)\"\r\n     (mouseover)=\"setHighlightedColumn(colIndex)\"\r\n     [class.highlightColumn]=\"isColumnHighlighted(colIndex)\"\r\n     [class.alt-border]=\"column.altBorder\"\r\n     [class.alt-border-left]=\"column.altBorderLeft\"\r\n     [class.text-right]=\"colIndex >= 1 && options.columnAlign === 'right'\"\r\n     [class.text-center]=\"options.columnAlign !== 'right'\"\r\n     [class.center-margin]=\"colIndex == 0 && options.columnAlign === 'right'\"\r\n     class=\"sasi-table-item sasi-table-data\"\r\n     [@slideInOut]=\"isCollapsed\">\r\n\r\n\r\n  <div\r\n     class=\"sasi-table-cell\"\r\n>\r\n  <app-cell-table [componentFormatter]=\"column.component\" [data]=\"data.getCellRawData(column)\" [label]=\"column.label\"\r\n                  [rowData]=\"data\"\r\n                  [options]=\"options\" [column]=\"column\"></app-cell-table>\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/sasi-table/row-group-table/row-group-table.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/sasi-table/row-group-table/row-group-table.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sasi-table-item sasi-table-controls\">\r\n  <i class=\"fa expand-collapse\"\r\n     [@iconRotate]=\"isCollapsed(data.groupRow.getCell('name').value)\"\r\n     [ngClass]=\"'fa-angle-down'\"\r\n     (click)=\"addCollapsed(data.groupRow.getCell('name').value)\"\r\n     [tooltip]=\"isCollapsed(data.groupRow.getCell('name').value) ? 'Expand':'Collapse'\"></i>\r\n</div>\r\n<div class=\"sasi-table-item sasi-table-alerts\" *ngIf=\"options.isDataGrouped && options.cellDecoratorRules.length > 0\">\r\n      <span *ngFor=\"let alertSum of alertSummary\">\r\n        <span [ngClass]=\"alertSum.type\"><i tooltip=\"Warning for one or more metrics\" class=\"fa fa-exclamation-triangle\"\r\n                                           [ngClass]=\"alertSum.type\"></i></span>\r\n      </span>\r\n</div>\r\n<div class=\"sasi-table-item sasi-table-data text-center\"\r\n     (mouseout)=\"setHighlightedColumn(-1)\"\r\n     (mouseover)=\"setHighlightedColumn(0)\"\r\n     [class.highlightColumn]=\"isColumnHighlighted(0)\"\r\n     [class.alt-border]=\"options.columns[0].altBorder\"\r\n>\r\n  <div class=\"sasi-table-cell\">\r\n\r\n    <app-cell-table\r\n      [componentFormatter]=\"options.grIndexComponentFormatter\" [data]=\"data.groupRow.getCell('name').rawData\"\r\n      [label]=\"''\"\r\n      [options]=\"options\"\r\n    ></app-cell-table>\r\n  </div>\r\n</div>\r\n<div *ngFor=\"let column of options.getDataColumns(); let colIndex=index\"\r\n     [class.alt-border]=\"column.altBorder\"\r\n     [class.highlightColumn]=\"isColumnHighlighted(colIndex+1)\"\r\n     (mouseout)=\"setHighlightedColumn(-1)\"\r\n     (mouseover)=\"setHighlightedColumn(colIndex+1)\"\r\n     [class.text-right]=\"options.columnAlign === 'right'\"\r\n     [class.text-center]=\"options.columnAlign !== 'right'\"\r\n     class=\"sasi-table-item sasi-table-data\">\r\n  <div class=\"sasi-table-cell\">\r\n    <app-cell-table *ngIf=\"aggregatedValues[column.index] !== undefined\" [componentFormatter]=\"column.aggComponent\"\r\n                    [data]=\"getAggregatedValue(column.index)\" [column]=\"column\"\r\n                    [label]=\"column.label\" [options]=\"options\"\r\n\r\n\r\n    ></app-cell-table>\r\n  </div>\r\n  <div *ngIf=\"aggregatedValues[column.index] == undefined\"></div>\r\n</div>\r\n<app-row-table *ngFor=\"let row of data.rows\"\r\n               [class.striped-row]=\"options.isDataGrouped\" [data]=\"row\" [options]=\"options\"\r\n               [groupName]=\"data.groupRow.getCell('name').value\"\r\n               (selectEmit)=\"onSelectRow($event)\"\r\n               [isCollapsed]=\"isCollapsed(data.groupRow.getCell('name').value)\"\r\n></app-row-table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/sasi-table/row-table/row-table.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/sasi-table/row-table/row-table.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sasi-table-item sasi-table-controls\"\r\n     *ngIf=\"options.selectableRows\"\r\n     [@slideInOut]=\"isCollapsed\">\r\n  <i\r\n    [ngClass]=\"isSelectedRow(data.getCell('name').value) ? 'fa-check-square' : 'fa-square'\" class=\"far fa-fw\"\r\n    (click)=\"selectRow(data.getCell('name').value)\"></i>\r\n</div>\r\n<div *ngIf=\"options.colControlFormatter != null\"\r\n     class=\"sasi-table-item sasi-table-alerts\"\r\n     [@slideInOut]=\"isCollapsed\">\r\n  <app-cell-table [componentFormatter]=\"options.colControlFormatter\" [data]=\"data\" [label]=\"''\"\r\n                  [options]=\"options\"\r\n  ></app-cell-table>\r\n</div>\r\n\r\n<app-column *ngFor=\"let column of options.columns; let colIndex=index\"\r\n            [data]=\"data\"\r\n            [options]=\"options\"\r\n            [column]=\"column\"\r\n            [colIndex]=\"colIndex\"\r\n            [isCollapsed]=\"isCollapsed\"\r\n>\r\n</app-column>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/sasi-table/sasi-table.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/sasi-table/sasi-table.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sasi-table-container\"\r\n     [style]=\"style\">\r\n  <div class=\"sasi-table-header\">\r\n    <!--    <div class=\"sasi-table-item sasi-table-controls\"-->\r\n    <!--    style=\"grid-column-start: 1\"></div>-->\r\n    <!--    <div class=\"sasi-table-item sasi-table-alerts\"></div>-->\r\n    <div *ngFor=\"let headerGroup of options.headerGroups; let i = index;\"\r\n         class=\"sasi-table-item sasi-table-data sasi-table-header-group\"\r\n         [style]=\"getHeaderGridStyle(i)\">\r\n      {{headerGroup.name}}\r\n    </div>\r\n    <!-- Labels -->\r\n    <div class=\"sasi-table-item sasi-table-controls\">\r\n      <i *ngIf=\"options.isDataGrouped\" class=\"fa expand-collapse\"\r\n         [@iconRotate]=\"isCollapseAll()\"\r\n         [ngClass]=\"'fa-angle-down'\"\r\n         (click)=\"collapseAll()\"\r\n         [tooltip]=\"isCollapseAll() ? 'Expand All':'Collapse All'\"></i>\r\n      <i *ngIf=\"options.selectableRows && isSelectedAll()\" class=\"far fa-check-square\" (click)=\"selectAll()\"></i>\r\n      <i *ngIf=\"options.selectableRows && isPartiallySelected() && !isSelectedAll()\" class=\"far fa-fw fa-minus-square\"\r\n         (click)=\"selectAll()\"></i>\r\n      <i *ngIf=\"options.selectableRows && (!isPartiallySelected()) && (!isSelectedAll())\" class=\"far fa-fw fa-square\"\r\n         (click)=\"selectAll()\"></i>\r\n    </div>\r\n    <div *ngIf=\"options.isDataGrouped && options.cellDecoratorRules.length > 0\"\r\n         class=\"sasi-table-item sasi-table-alerts\">\r\n      <i tooltip=\"Alerts\" class=\"fa fa-exclamation-triangle text-orange\"></i>\r\n    </div>\r\n    <!--\r\n      Non-Group header\r\n    -->\r\n\r\n    <div [tooltip]=\"getColumnTooltipText(columnOption.index)\"\r\n         *ngFor=\"let columnOption of getColumns()\"\r\n         class=\"sasi-table-item sasi-table-data\">\r\n\r\n      <span>\r\n        <span (click)=\"setSort(columnOption, false)\"\r\n              class=\"link sasi-header-label\">{{getColumnLabel(columnOption.index)}}</span>\r\n        <span class=\"sasi-header-icon\">\r\n          <i [ngClass]=\"getSortIconClass(columnOption.index, false)\"\r\n             class=\"text-muted sorting sort-icon-right\"></i>\r\n        </span>\r\n      </span>\r\n\r\n      <span *ngIf=\"columnOption.altSortEnable === true\"\r\n            (click)=\"setSort(columnOption, true)\"\r\n            class=\"link sasi-header-icon\">\r\n        <i class=\"fa fa-angle-up text-red sort-icon-left\"></i>\r\n        <span class=\"peak-label\">Peak</span>\r\n        <i class='sorting sort-icon-right'\r\n           [ngClass]=\"getSortIconClass(columnOption.index, true)\"></i>\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <app-row-dynamic-table *ngFor=\"let row of data\"\r\n                         [class.highlight-row]=\"options.highlightRow && !options.isDataGrouped\"\r\n                         [class.striped-row]=\"!options.isDataGrouped\"\r\n                         [class.not-data-grouped]=\"!options.isDataGrouped\"\r\n                         [componentFormatter]=\"options.rowComponentFormatter\" [data]=\"row\"\r\n                         [options]=\"options\">\r\n  </app-row-dynamic-table>\r\n</div>\r\n\r\n<!--<div class=\"capacity-table sticky col-md-12\">-->\r\n<!--  &lt;!&ndash;-->\r\n<!--    TOP TABLE ROW-->\r\n<!--  &ndash;&gt;-->\r\n<!--  <div class=\"row table-header sticky-top\">-->\r\n<!--    <div class=\"col-control col\">-->\r\n<!--      <i *ngIf=\"options.isDataGrouped\" class=\"fa expand-collapse\"-->\r\n<!--         [@iconRotate]=\"isCollapseAll()\"-->\r\n<!--         [ngClass]=\"'fa-angle-down'\"-->\r\n<!--         (click)=\"collapseAll()\"-->\r\n<!--         [tooltip]=\"isCollapseAll() ? 'Expand All':'Collapse All'\"></i>-->\r\n<!--      <i *ngIf=\"options.selectableRows && isSelectedAll()\" class=\"far fa-check-square\" (click)=\"selectAll()\"></i>-->\r\n<!--      <i *ngIf=\"options.selectableRows && isPartiallySelected() && !isSelectedAll()\" class=\"far fa-fw fa-minus-square\"-->\r\n<!--         (click)=\"selectAll()\"></i>-->\r\n<!--      <i *ngIf=\"options.selectableRows && (!isPartiallySelected()) && (!isSelectedAll())\" class=\"far fa-fw fa-square\"-->\r\n<!--         (click)=\"selectAll()\"></i>-->\r\n<!--    </div>-->\r\n<!--    <div class=\"col-control\" *ngIf=\"options.isDataGrouped && options.cellDecoratorRules.length > 0\">-->\r\n<!--      <i tooltip=\"Alerts\" class=\"fa fa-exclamation-triangle text-orange\"></i>-->\r\n<!--    </div>-->\r\n<!--  </div>-->\r\n<!--  &lt;!&ndash;POOL ROWS&ndash;&gt;-->\r\n<!--  &lt;!&ndash;&ndash;&gt;-->\r\n<!--<div class=\"row\" *ngIf=\"selectedRows !== undefined\">-->\r\n<!--  &lt;!&ndash;<div  [class.highlight-row]=\"options.highlightRow\">&ndash;&gt;-->\r\n<!--  <app-row-dynamic-table *ngFor=\"let row of data\"-->\r\n<!--                         [class.highlight-row]=\"options.highlightRow && !options.isDataGrouped\"-->\r\n<!--                         [class.striped-row]=\"!options.isDataGrouped\"-->\r\n<!--                         [componentFormatter]=\"options.rowComponentFormatter\" [data]=\"row\"-->\r\n<!--                         [options]=\"options\"></app-row-dynamic-table>-->\r\n<!--  &lt;!&ndash;</div>&ndash;&gt;-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/small-box/small-box.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/small-box/small-box.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"small-box\" ngClass=\"{{color}}\">\r\n  <div class=\"inner\">\r\n    <h3>{{data.value | localeNumberFormat}} <span>{{data.unit}}</span></h3>\r\n\r\n    <p>{{label}}</p>\r\n  </div>\r\n  <div class=\"icon\">\r\n\r\n    <i ngClass=\"{{icon}}\"></i>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/breadcrumb/breadcrumb.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/breadcrumb/breadcrumb.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb\">\r\n  <li *ngFor=\"let breadcrumb of breadcrumbs\">\r\n      <span [routerLink]=\"breadcrumb.url\" routerLinkActive=\"router-link-active\">\r\n      <a> {{ breadcrumb.label }} </a>\r\n      </span>\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/charts/bar-chart/bar-chart.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/charts/bar-chart/bar-chart.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<apx-chart [chart]=\"chart\" [series]=\"series\" [title]=\"title\" [labels]=\"labels\" [tooltip]=\"tooltip\"\r\n           [plotOptions]=\"plotOptions\" [dataLabels]=\"dataLabels\" [yaxis]=\"yaxis\" [xaxis]=\"xaxis\"\r\n           [colors]=\"colors\"></apx-chart>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/charts/capacity-history-chart/capacity-history-chart.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/charts/capacity-history-chart/capacity-history-chart.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<apx-chart [series]=\"series\" [chart]=\"chart\" [colors]=\"fill\" [xaxis]=\"xaxis\" [yaxis]=\"yaxis\" [legend]=\"legend\"\r\n           [dataLabels]=\"dataLabels\" [title]=\"title\"></apx-chart>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/charts/history-chart/history-chart.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/charts/history-chart/history-chart.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<apx-chart [series]=\"series\" [chart]=\"chart\" [colors]=\"fill\" [xaxis]=\"xaxis\" [yaxis]=\"yaxis\" [legend]=\"legend\"\r\n           [dataLabels]=\"dataLabels\" [title]=\"title\"></apx-chart>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/charts/region-donut/region-donut.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/charts/region-donut/region-donut.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<apx-chart [chart]=\"chart\" [series]=\"series\" [title]=\"title\" [labels]=\"labels\" [tooltip]=\"tooltip\"\r\n           [plotOptions]=\"plotOptions\" [dataLabels]=\"dataLabels\"></apx-chart>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"alerts.length > 0\">\r\n  <section class=\"content-header\">\r\n    <H1><i class=\"fa fa-bell\"></i> Alerts (Last 24 Hours)</H1>\r\n  </section>\r\n  <section class=\"content\">\r\n    <h4>Performance</h4>\r\n    <div *ngFor=\"let alertType of alertsPerformance;let i = index\">\r\n      <div class=\"col-xs-6 col-sm-4 col-md-3 col-lg-3\">\r\n        <app-alert-info-box [alert]=\"getAlert(alertType)\"\r\n                            [context]=\"getLinkContext(alertType)\"\r\n                            [label]=\"getAlertLabel(alertType)\"\r\n                            [icon]=\"getAlertIcon(alertType)\"></app-alert-info-box>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"content\">\r\n    <h4>Operations</h4>\r\n    <div *ngFor=\"let alertType of alertsOperations;let i = index\" class=\"col-xs-6 col-sm-4 col-md-3 col-lg-3\">\r\n      <app-alert-info-box [alert]=\"getAlert(alertType)\"\r\n                          [context]=\"getLinkContext(alertType)\"\r\n                          [label]=\"getAlertLabel(alertType)\"\r\n                          [icon]=\"getAlertIcon(alertType)\"></app-alert-info-box>\r\n    </div>\r\n  </section>\r\n\r\n\r\n</div>\r\n<div class=\"row\" *ngIf=\"metrics.length > 0\">\r\n  <section class=\"content-header\">\r\n    <h1><i class=\"fa fa-chart-area\"></i> Infrastructure stats</h1>\r\n  </section>\r\n</div>\r\n<div class=\"row\">\r\n\r\n\r\n  <section class=\"content\" *ngIf=\"metrics.length > 0\">\r\n    <h4>Total load (Last 24 hours)</h4>\r\n    <div *ngFor=\"let type of perfMetricsType\" class=\"col-12 col-sm-6 col-md-6 col-lg-4\">\r\n      <app-region-donut [data]=\"getMetricValueInRegions(type, regionOrder)\" [regionLabels]=\"getRegionLabels()\"\r\n                        [title]=\"{text: getMetricLabel(type)}\" [unit]=\"findUnitInMetric(type)\"\r\n                        [useKFormatter]=\"isKFormatterUsed(type)\"></app-region-donut>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"box pad\">\r\n        <div class=\"box-header\">\r\n          <h3 class=\"box-title\">Total Workload and Transfer History</h3>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <app-history-chart [series]=\"perfGraphSeries\"></app-history-chart>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </section>\r\n\r\n</div>\r\n<div class=\"row\">\r\n  <section class=\"content\" *ngIf=\"metrics.length > 0\">\r\n    <h3>Total capacity</h3>\r\n    <div *ngFor=\"let type of displayCapacityType\" class=\"col-12 col-sm-6 col-md-6 col-lg-4\">\r\n      <app-region-donut [data]=\"getMetricValueInRegions(type, regionOrder)\" [regionLabels]=\"getRegionLabels()\"\r\n                        [title]=\"{text: getMetricLabel(type)}\" [unit]=\"findUnitInMetric(type)\"\r\n                        [useKFormatter]=\"isKFormatterUsed(type)\"></app-region-donut>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"box pad\">\r\n        <div class=\"box-header\">\r\n          <h3 class=\"box-title\">Total Capacity History</h3>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <app-capacity-history-chart [series]=\"capacityGraphSeries\"></app-capacity-history-chart>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"box pad\">\r\n      <div class=\"box-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\" *ngIf=\"metrics.length > 0\">\r\n            <app-bar-chart [data]=\"getMetricValueInRegions(logicalChangeType, regionOrder)\"\r\n                           [regionLabels]=\"getRegionLabels()\"\r\n                           [title]=\"{text: getMetricLabel(logicalChangeType)}\"\r\n                           [unit]=\"findUnitInMetric(logicalChangeType)\"\r\n                           [useKFormatter]=\"isKFormatterUsed(logicalChangeType)\"></app-bar-chart>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--  <section class=\"content\">-->\r\n  <div class=\"col-md-6\">\r\n    <div class=\"box pad\">\r\n      <div class=\"box-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4 col-lg-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                <app-small-box *ngIf=\"datacenters !== undefined\" [label]=\"'Datacenters'\"\r\n                               [data]=\"datacenters\" [color]=\"'bg-green'\" [icon]=\"'fas fa-building'\"></app-small-box>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                <app-small-box *ngIf=\"registeredSystems !== undefined\" [label]=\"'Registered systems'\"\r\n                               [data]=\"registeredSystems\" [color]=\"'bg-blue'\" [icon]=\"'fas fa-cubes'\"></app-small-box>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-8 col-lg-8\">\r\n            <h4>Geo-location of datacenters</h4>\r\n            <div id=\"world-map-markers\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--  </section>-->\r\n  <!--  <section class=\"content\">-->\r\n\r\n  <!--  </section>-->\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"main-header\">\r\n\r\n  <!-- Logo -->\r\n  <a href=\"\" class=\"logo\">\r\n    <!-- mini logo for sidebar mini 50x50 pixels -->\r\n    <span class=\"logo-mini\"><b>S</b>an</span>\r\n    <!-- logo for regular state and mobile devices -->\r\n    <span class=\"logo-lg\"><b>Storage Analytics</b></span>\r\n  </a>\r\n\r\n\r\n  <!-- Header Navbar -->\r\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\r\n    <!-- Sidebar toggle button-->\r\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\r\n      <i class=\"fa fa-bars\"></i>\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n    </a>\r\n\r\n    <ul [@openClose]=\"enable ? 'true' : 'false'\"\r\n        (@openClose.start)=\"onAnimationEvent($event)\"\r\n        class=\"nav navbar-nav navbar-left\">\r\n      <li [class.active]=\"isCurrentPeriod(periodType.DAY)\"><a class=\"btn\" (click)=\"setCurrentPeriod(periodType.DAY)\">Last\r\n        Day</a></li>\r\n      <li [class.active]=\"isCurrentPeriod(periodType.WEEK)\"><a class=\"btn\" (click)=\"setCurrentPeriod(periodType.WEEK)\">Last\r\n        Week</a></li>\r\n      <li [class.active]=\"isCurrentPeriod(periodType.MONTH)\"><a class=\"btn\"\r\n                                                                (click)=\"setCurrentPeriod(periodType.MONTH)\">Last\r\n        Month</a></li>\r\n    </ul>\r\n    <div class=\"logo-title\">\r\n      <img [src]=\"logoUrl\" class=\"sa-logo pull-left\"/>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/iframe/iframe.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/iframe/iframe.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<iframe name=\"main-content\" class=\"main-content\" [src]=\"url\" id=\"form-iframe\"\r\n        style=\"margin:0; width: 100%; border:none; overflow:scroll;\"></iframe>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-menu/side-menu.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-menu/side-menu.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<script src=\"../../../../WEB/sub-content-loader.js\"></script>-->\r\n<aside class=\"main-sidebar\">\r\n\r\n  <!-- sidebar: style can be found in sidebar.less -->\r\n  <section class=\"sidebar\">\r\n    <div class=\"top-part-menu\">\r\n      <ul id=\"dash-link\" class=\"sidebar-menu\">\r\n        <li><a href=\"\"><i class=\"fa fa-home\"></i><span>Main dashboard</span></a></li>\r\n      </ul>\r\n      <!-- Sidebar Menu.ts -->\r\n      <ul id=\"dash-menu\" class=\"sidebar-menu\" data-widget=\"tree\">\r\n\r\n        <li class=\"treeview\">\r\n          <a href=\"#\"><i class=\"fa fa-chart-area\"></i><span>Global Statistics</span>\r\n            <span class=\"pull-right-container\">\r\n                <i class=\"fa fa-angle-left pull-right\"></i>\r\n              </span>\r\n          </a>\r\n          <ul class=\"treeview-menu\">\r\n            <li *ngFor=\"let globalLink of globalStatisticsLinks\"\r\n            ><a [routerLink]=\"[globalLink.linkPart]\" routerLinkActive=\"active\">{{globalLink.name}}</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"treeview\">\r\n          <a href=\"#\"><i class=\"fa fa-chart-area\"></i><span>Storage configuration</span>\r\n            <span class=\"pull-right-container\">\r\n                <i class=\"fa fa-angle-left pull-right\"></i>\r\n              </span>\r\n          </a>\r\n          <ul class=\"treeview-menu\">\r\n            <li *ngFor=\"let globalLink of storageConfigurationLinks\"\r\n            ><a [routerLink]=\"[globalLink.linkPart]\" routerLinkActive=\"active\">{{globalLink.name}}</a></li>\r\n          </ul>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n    <div class=\"central-part-menu\">\r\n      <ul id=\"main-menu\" class=\"sidebar-menu\" data-widget=\"tree\">\r\n        <li class=\"header\">STORAGE ARRAYS</li>\r\n        <!-- search form (Optional) -->\r\n        <form action=\"#\" method=\"get\" class=\"sidebar-form\" autocomplete=\"off\">\r\n          <div class=\"input-group\">\r\n            <input [(ngModel)]=\"searchExpression\" (input)=\"search()\" type=\"text\" name=\"searchExp\" class=\"form-control\"\r\n                   placeholder=\"Search...\" id=\"menu-search-input\"/>\r\n            <span class=\"input-group-btn\">\r\n              <button type=\"button\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\r\n              </button>\r\n            </span>\r\n          </div>\r\n        </form>\r\n        <!-- /.search form -->\r\n        <li *ngFor=\"let menuItem of filteredItems\" class=\"treeview\">\r\n          <a href=\"#\"><i class=\"fa fa-cogs\"></i><span>{{menuItem.label}}</span>\r\n            <span class=\"pull-right-container\">\r\n                <i class=\"fa fa-angle-left pull-right\"></i>\r\n              </span>\r\n          </a>\r\n          <ul class=\"treeview-menu\">\r\n            <li *ngFor=\"let link of menuItem.items\" class=\"treeview\">\r\n              <a href=\"#\"><i class=\"fa fa-cogs\"></i><span>{{link.name}}</span>\r\n                <span class=\"pull-right-container\">\r\n                <i class=\"fa fa-angle-left pull-right\"></i>\r\n              </span>\r\n              </a>\r\n              <ul class=\"treeview-menu\">\r\n                <li *ngFor=\"let poolLink of poolMetricLinks\"><a\r\n                  [routerLink]=\"link.name | iframeUrlCreator:{iframeLink: poolLink.linkPart}\"\r\n                  routerLinkActive=\"active\">{{poolLink.name}}</a></li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"bottom-part-menu\">\r\n\r\n    </div>\r\n    <!-- /.sidebar-menu -->\r\n  </section>\r\n  <!-- /.sidebar -->\r\n</aside>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--AGGREGATED VALUES-->\r\n<table *ngIf=\"result != null\">\r\n  <thead>\r\n  <tr class=\"agg-names\">\r\n    <td *ngFor=\"let type of aggregatedTypes\" class=\"col agg-name\">{{getLabelByType(type)}}</td>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr class=\"agg-vals\">\r\n    <td *ngFor=\"let type of aggregatedTypes\" class=\"col agg-value\">\r\n        <span\r\n          *ngIf=\"getMetricByType(type) != undefined\">{{toFixed(type, getMetricByType(type).value, 1) | formatThousands}}\r\n          <span\r\n            class=\"agg-unit\">{{getMetricByType(type).unit}}</span></span>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggregated-statistics.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggregated-statistics.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--AGGREGATED VALUES-->\r\n<table *ngIf=\"result != null\">\r\n  <thead>\r\n  <tr class=\"agg-names\">\r\n    <td *ngFor=\"let group of groupTypes\" class=\"agg-name\">{{getGroupLabelByType(group)}}</td>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr class=\"agg-vals\">\r\n    <td *ngFor=\"let group of groupTypes\" class=\"agg-value\"\r\n        [class.col]=\"types[group].length > 1\"\r\n        [class.col-smaller]=\"types[group].length === 1\"\r\n    >\r\n      <div *ngFor=\"let type of types[group]\">\r\n        <div *ngIf=\"types[group].length > 1\">\r\n          <div class=\"text-left col-md-5\">{{getLabelByType(type)}}:</div>\r\n          <div class=\"text-right col-md-push-6\">\r\n            <span\r\n              *ngIf=\"getMetricByType(type) !== undefined && getMetricByType(type) != null\">{{toFixed(type, getMetricByType(type).value, 1) | formatThousands}}\r\n              <span class=\"agg-unit\">{{getMetricByType(type).unit}}</span></span>\r\n            <span class='text-gray'\r\n                  *ngIf=\"getMetricByType(type) === undefined || getMetricByType(type) == null\">No value</span>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"types[group].length === 1\">\r\n        <span\r\n          *ngIf=\"getMetricByType(type) !== undefined && getMetricByType(type) != null\">{{toFixed(type, getMetricByType(type).value, 1) | formatThousands}}\r\n          <span class=\"agg-unit\">{{getMetricByType(type).unit}}</span></span>\r\n          <span class='text-gray'\r\n                *ngIf=\"getMetricByType(type) === undefined || getMetricByType(type) == null\">No value</span>\r\n        </div>\r\n      </div>\r\n\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"formatter-wrapper\">\r\n  <div class=\"component-name col-xs-12 col-sm-12 col-md-12\">\r\n    <span class=\"badge bg-black\">{{getName()}}</span>\r\n  </div>\r\n  <div *ngIf=\"data != null && data.value > 0 && isVisible()\" class=\"progress progress-sm col-xs-12 col-sm-12 col-md-12\">\r\n    <div class=\"progress-value\">{{resolveRelativeDisbalance() + ' %'}}</div>\r\n    <div class=\"progress-bar progress-bar-danger\" [ngStyle]=\"{width:resolveRelativeDisbalance() + '%'}\"></div>\r\n  </div>\r\n  <div *ngIf=\"data != null && data.value > 0 && isVisible()\" class=\"absolute-value-badge col-xs-12 col-sm-12 col-md-12\">\r\n    <span class=\"badge bg-red\">{{resolveAbsoluteDisbalance() + 'MBps'}}</span>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<i *ngIf=\"isAlert()\" tooltip=\"Warning for one or more metrics\" class=\"fa fa-exclamation-triangle\"\r\n   [ngClass]=\"getDecoratorClass()\"></i>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/emph-formatter/emph-formatter.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/emph-formatter/emph-formatter.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"data != null\" class=\"metric-value\">\r\n  <span tooltip=\"{{label}}\" hide-delay=\"0\">{{data.value}} <span\r\n    class=\"metric-unit\">{{data.unit}}</span></span>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let row of subData\">\r\n  <div class=\"row\">\r\n    <app-adapter-disbalance-formatter [data]=\"row.getCell(imbalanceEvents)\" [rowData]=\"row\"\r\n                                      [isPortMetric]=\"true\"></app-adapter-disbalance-formatter>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"data != null && data.value != null\" class=\"metric-value\">\r\n  <span *ngIf=\"isAlert()\" tooltip=\"{{getAlertMessage()}}\" hide-delay=\"0\"> <i class=\"fa fa-exclamation-triangle\"\r\n                                                                             ngClass=\"{{getViolatedRuleClass()}}\"></i> {{data.value % 1 === 0 ? data.value : data.value.toFixed(1) | formatThousands}} </span>\r\n  <span *ngIf=\"!isAlert()\" tooltip=\"{{getTooltipMessage()}}\" hide-delay=\"0\"\r\n        [innerHTML]=\"getValue() | formatThousands | safeHtml\"></span>\r\n  <span class=\"metric-unit\">{{data.unit}}</span>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/text-formatter/text-formatter.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/text-formatter/text-formatter.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"data != null\" class=\"metric-value\">\r\n  <span tooltip=\"{{column.tooltipText}} average\" hide-delay=\"0\">{{data.value}} <span\r\n    class=\"metric-unit\">{{data.unit}}</span></span>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isHidden()\" class=\"col-val col\">\r\n  <span *ngFor=\"let tier of getTierNameString(); index as i\" [class]=\"getTierColor(tier)\"\r\n        tooltip=\"{{label}}\">{{tier}}</span>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/time-formatter/time-formatter.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/time-formatter/time-formatter.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span *ngIf=\"data != null\">\r\n  <span class=\"metric-value\" tooltip=\"{{getTooltipMessage()}}\">{{data.value | seconds2FullTime}}</span>\r\n  <!--<span class=\"metric-unit\">{{data.unit}}</span>-->\r\n</span>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"data != null\" class=\"metric-value\">\r\n  <span *ngIf=\"isAlert()\" tooltip=\"{{getAlertMessage()}}\" hide-delay=\"0\"\r\n        ngClass=\"{{getViolatedRuleClass()}}\">{{getValue() | formatThousands}} <span\r\n    class=\"metric-unit\">{{data.unit}}</span></span>\r\n  <span *ngIf=\"!isAlert()\" tooltip=\"{{label}} average\" hide-delay=\"0\">{{getValue() | formatThousands}} <span\r\n    class=\"metric-unit\">{{data.unit}}</span></span>\r\n</div>\r\n<div *ngIf=\"data != null\" class=\"peak\">\r\n  <span tooltip=\"{{label}} peak\" hide-delay=\"0\"><span class=\"text-muted\"><i\r\n    class=\"fa fa-angle-up text-red\"></i>{{data.peak | formatThousands}} <span\r\n    class=\"metric-unit\">{{data.unit}}</span></span>\r\n  </span>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/global-statistics.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/global-statistics.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<h2>{{getTitle()}}</h2>\r\n<div *ngIf=\"context === 'physical-capacity'\" class=\"global-stats col-md-12\">\r\n  <h3>Overall Datacenters Physical Capacity</h3>\r\n  <app-infrastructure-statistics></app-infrastructure-statistics>\r\n</div>\r\n<div *ngIf=\"context === 'logical-capacity'\" class=\"global-stats col-md-12\">\r\n  <h3>Overall Datacenters Logical Capacity</h3>\r\n  <app-global-logical-statistics></app-global-logical-statistics>\r\n</div>\r\n<div *ngIf=\"context === 'host-group-capacity'\" class=\"global-stats col-md-12\">\r\n  <h3>Overall Datacenters VMware Capacity</h3>\r\n  <app-global-host-group-capacity></app-global-host-group-capacity>\r\n</div>\r\n<div class=\"col-md-12\">\r\n  <h3>{{getTabTitle()}}</h3>\r\n</div>\r\n<div class=\"col-md-12\">\r\n  <div class=\"nav-tabs-custom\">\r\n    <ul class=\"nav nav-tabs\">\r\n      <li *ngFor=\"let dataCenter of dataCenters\"\r\n          [class.active]=\"isCurrentTab(dataCenter.id)\">\r\n        <a (click)=\"activeTab(dataCenter.id)\"\r\n           [routerLink]=\"['./' + context, dataCenter.id]\">\r\n          {{dataCenter.label}}\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"tab-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- /.performance-statistics-content -->\r\n  </div>\r\n  <!-- /.nav-tabs-custom -->\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/adapters/adapters.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/adapters/adapters.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n\r\n        <app-sasi-table [data]=\"data | systemPool2SasiGroupTable: 'adapters'\" [tableOptions]=\"options\"></app-sasi-table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/block-size-latency.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/block-size-latency.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <app-filter-list *ngIf=\"dates !== undefined\"\r\n                       [valueList]=\"dates\"\r\n                       title=\"Dates\"\r\n                       (valueListChange)=\"onDatesChanged($event)\"></app-filter-list>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n\r\n      <app-filter-list *ngIf=\"systems !== undefined\"\r\n                       [valueList]=\"systems\"\r\n                       [selectedValues]=\"selectedSystems\"\r\n                       title=\"Systems\"\r\n                       (valueListChange)=\"onSystemChanged($event)\"></app-filter-list>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n\r\n      <app-filter-list *ngIf=\"pools !== undefined\"\r\n                       [valueList]=\"pools\"\r\n                       [selectedValues]=\"selectedPools\"\r\n                       title=\"Pools\"\r\n                       (valueListChange)=\"onPoolChanged($event)\"></app-filter-list>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"box\">\r\n        <div class=\"box-header with-border\">\r\n          <h3 class=\"box-title\">SLA Filters</h3>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <div class=\"col-md-3\" *ngFor=\"let item of predefinedFilters;let i = index;\">\r\n            <button class=\"btn btn-sm {{filterColors[i]}}\" [class.active]=\"isSelected(i)\" [class.disabled]=\"!isSelected(i)\"\r\n                    (click)=\"onSelectFilter(i)\">{{filtersName[i]}}</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n\r\n      <app-filter-list *ngIf=\"blockSizes !== undefined\"\r\n                       [valueList]=\"blockSizes\"\r\n                       [selectedValues]=\"selectedBlockSizes\"\r\n                       title=\"Block Size\"\r\n                       (valueListChange)=\"onBlockSizeChange($event)\"></app-filter-list>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n\r\n      <app-filter-list *ngIf=\"latencies !== undefined\"\r\n                       [valueList]=\"latencies\"\r\n                       [selectedValues]=\"selectedLatencies\"\r\n                       title=\"Latency\"\r\n                       (valueListChange)=\"onLatenciesChanged($event)\"></app-filter-list>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"box pad\">\r\n        <div class=\"box-header\">\r\n          <h3 class=\"box-title\">Workload History</h3>\r\n        </div>\r\n        <div class=\"box-body\">\r\n          <app-bubble-chart [dates]=\"selectedDates\" [poolIds]=\"selectedPools\" [blockSizes]=\"selectedBlockSizes\"\r\n                            [latencies]=\"selectedLatencies\"></app-bubble-chart>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/bubble-chart.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/bubble-chart.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"bubble\" class=\"col-md-12\" xmlns:xhtml=\"http://www.w3.org/1999/xhtml\">\r\n\r\n  <svg [attr.width]=\"optionsGraphic.width\" [attr.height]=\"optionsGraphic.height\" xmlns=\"http://www.w3.org/2000/svg\"\r\n       version=\"1.2\">\r\n    <g id=\"data\">\r\n      <g *ngFor=\"let serie of chartData.series;index as i\" [attr.id]=\"serie.name\">\r\n        <g *ngIf=\"isSelectedSerie(serie.name)\">\r\n\r\n          <circle class=\"value\" stroke=\"#ffffff\" [attr.fill]=\"getColor(i)\"\r\n                  *ngFor=\"let circle of serie.data\" [attr.cx]=\"circle.coordinates[0]\" [attr.cy]=\"circle.coordinates[1]\"\r\n                  [attr.r]=\"circle.coordinates[2]\" (mousemove)=\"displayPopup($event, circle, serie.name)\"\r\n                  (mouseout)=\"displayClose($event)\"></circle>\r\n        </g>\r\n      </g>\r\n    </g>\r\n    <g id=\"legend\">\r\n      <foreignObject x=\"50%\" y=\"95%\" width=\"50%\" height=\"30\" text-anchor=\"middle\">\r\n        <xhtml:div app-legend [series]=\"chartData.series\" [colors]=\"chartData.colors\"\r\n                   (selectedSeriesEmit)=\"filterSeries($event)\"/>\r\n      </foreignObject>\r\n<!--      <foreignObject *ngIf=\"displayedPopup\" [attr.x]=\"popupDetail.positionX\" [attr.y]=\"popupDetail.positionY\"-->\r\n<!--                     width=\"50%\" height=\"100\" text-anchor=\"middle\">-->\r\n<!--        -->\r\n<!--      </foreignObject>-->\r\n    </g>\r\n    <g id=\"quadrant-axis\">\r\n      <svg:g app-xaxis #xaxis [labels]=\"this.chartData.xlabels\" [canvas]=\"optionsGraphic\" [chartData]=\"chartData\"/>\r\n      <svg:g app-yaxis #yaxis [labels]=\"this.chartData.ylabels\" [canvas]=\"optionsGraphic\" [chartData]=\"chartData\"/>\r\n    </g>\r\n  </svg>\r\n  <app-popup-data [displayed]=\"displayedPopup\" [config]=\"popupDetail\"></app-popup-data>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/legend/legend.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/legend/legend.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"series.length != 0\">\r\n  <div class=\"legend-item\" *ngFor=\"let serie of series; index as i\" (click)=\"toggle(serie.name)\"\r\n       [class.disabled]=\"!isToggled(serie.name)\"><i class=\"fa fa-circle\" [style.color]=\"getColor(i)\"></i>{{serie.name}}\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/popup-data/popup-data.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/popup-data/popup-data.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='popup-data' *ngIf=\"displayed\" [style.top.px]=\"config.positionY\" [style.left.px]=\"config.positionX + 15\">\r\n  <div class=\"popup-header\">Operation: {{config.serieName}}</div>\r\n  <div class=\"popup-body\">\r\n    <div>Block: {{config.value.x}} KB</div>\r\n    <div>Latency: {{config.value.y}} ms</div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/xaxis/xaxis.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/xaxis/xaxis.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg>\r\n  <line [attr.x1]=\"x1\" [attr.y1]=\"y1\" [attr.x2]=\"y2\"\r\n        [attr.y2]=\"y1\" style=\"stroke:rgb(0,0,0);stroke-width:0.4px\"></line>\r\n\r\n  <line *ngFor=\"let label of labels;index as i\" [attr.x1]=\"getLabelPosition(i)\"\r\n        [attr.y1]=\"y1\"\r\n        [attr.x2]=\"getLabelPosition(i)\" [attr.y2]=\"markerEnds\"\r\n        style=\"stroke:rgb(0,0,0);stroke-width:0.4px\">\r\n  </line>\r\n  <text class=\"axis-value\" *ngFor=\"let label of labels;index as i\" [attr.text-anchor]=\"textAnchor\"\r\n        [attr.x]=\"getLabelPosition(i)\" [attr.y]=\"y1 + textOffset\">{{formatLabel(label, i)}}</text>\r\n  <text class=\"axis-label\" [attr.x]=\"10\" [attr.y]=\"y1\"\r\n        [attr.transform]=\"'rotate(-90 ' + 10 + ' ' + y1 + ')'\">{{chartData.xlabel}}</text>\r\n</svg>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/yaxis/yaxis.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/yaxis/yaxis.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg class=\"yaxis\">\r\n  <line [attr.x1]=\"x1\" [attr.y1]=\"y1\" [attr.x2]=\"x1\"\r\n        [attr.y2]=\"y2\" style=\"stroke:rgb(0,0,0);stroke-width:0.4px\"></line>\r\n  <line *ngFor=\"let label of labels;index as i\" [attr.x1]=\"x1\"\r\n        [attr.y1]=\"getLabelPosition(i)\"\r\n        [attr.x2]=\"markerEnds\" [attr.y2]=\"getLabelPosition(i)\"\r\n        style=\"stroke:rgb(0,0,0);stroke-width:0.4px\">\r\n  </line>\r\n  <text class=\"axis-value\" *ngFor=\"let label of labels;index as i\" [attr.x]=\"x1 - textOffset\"\r\n        [attr.text-anchor]=\"textAnchor\" [attr.y]=\"getLabelPosition(i) + 4\">{{formatLabel(label, i)}}</text>\r\n  <text class=\"axis-label\" [attr.x]=\"x1\" [attr.y]=\"10\">{{chartData.ylabel}}</text>\r\n\r\n</svg>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/filter-list/filter-list.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/filter-list/filter-list.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\">\r\n  <div class=\"box-header with-border\">\r\n    <h3 class=\"box-title\">{{title}}</h3>\r\n    <div class=\"pull-right\">\r\n      <button type=\"button\" class=\"btn btn-block btn-xs\" (click)=\"selectAll()\" placement=\"left\">Select All</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <ng-select\r\n      #ngSelect\r\n      [items]=\"valueList\"\r\n      [multiple]=\"true\"\r\n      [closeOnSelect]=\"false\"\r\n      [hideSelected]=\"false\"\r\n      bindLabel=\"name\"\r\n      bindValue=\"id\"\r\n      placeholder=\"Select\"\r\n      [(ngModel)]=\"selectedValues\"\r\n      (change)=\"selectValue($event)\"\r\n    (clear)=\"clear()\">\r\n      <ng-template ng-multi-label-tmp let-items=\"items\" let-clear=\"clear\">\r\n        <div class=\"ng-value\" *ngFor=\"let item of items | slice:0:2\">\r\n          <span class=\"ng-value-label\">{{item.name}}</span>\r\n          <span class=\"ng-value-icon right\" (click)=\"clear(item)\" aria-hidden=\"true\">×</span>\r\n        </div>\r\n        <div class=\"ng-value\" *ngIf=\"items.length > 2\">\r\n          <span class=\"ng-value-label\">{{items.length - 2}} more...</span>\r\n        </div>\r\n      </ng-template>\r\n    </ng-select>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/dp-sla/dp-sla-2.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/dp-sla/dp-sla-2.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row col-md-6\">\r\n      <app-sasi-table [data]=\"data | systemPool2SasiGroupTable: 'dpSla'\" [tableOptions]=\"options\"></app-sasi-table>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/host-groups-capacity/host-groups-capacity.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/host-groups-capacity/host-groups-capacity.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row col-md-12\">\r\n      <app-sasi-table class=\"table-right\" [data]=\"data | systemPool2SasiGroupTable: 'hostGroups'\"\r\n                      [tableOptions]=\"options\"></app-sasi-table>\r\n      <app-aggregated-statistics class='col-md-12 sticky-bottom' [aggregatedColumns]=\"options.getAggregatedColumns()\"\r\n                                 [data]=\"data | systemPool2SasiGroupTable\" [selectedRows]=\"selectedRows\"\r\n                                 [prefix]=\"options.storageNamePrefix\"></app-aggregated-statistics>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <app-sasi-table [data]=\"data | systemPool2SasiGroupTable: 'capacityAnalysis'\"\r\n                      [tableOptions]=\"options\"></app-sasi-table>\r\n      <app-grouped-aggregated-statistics class='col-md-12 sticky-bottom' [data]=\"data | systemPool2SasiGroupTable\"\r\n                                         [selectedRows]=\"selectedRows\"\r\n                                         [prefix]=\"options.storageNamePrefix\"></app-grouped-aggregated-statistics>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/performance-statistics/performance-statistics.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/performance-statistics/performance-statistics.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <app-sasi-table [data]=\"data | systemPool2SasiTable: 'dashboard'\" [tableOptions]=\"options\"></app-sasi-table>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/physical-capacity-statistics/physical-capacity-statistics.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/physical-capacity-statistics/physical-capacity-statistics.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tab-pane\" *ngIf=\"data.length > 0\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <app-sasi-table class=\"table-right\" [data]=\"data | systemPool2SasiGroupTable: 'capacityAnalysis'\"\r\n                      [tableOptions]=\"options\"></app-sasi-table>\r\n      <app-aggregated-statistics class='col-md-12 sticky-bottom' [aggregatedColumns]=\"options.getAggregatedColumns()\"\r\n                                 [data]=\"data | systemPool2SasiGroupTable\" [selectedRows]=\"selectedRows\"\r\n                                 [prefix]=\"options.storageNamePrefix\"></app-aggregated-statistics>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storage-configuration/se-text-formatter/se-text-formatter.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storage-configuration/se-text-formatter/se-text-formatter.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"open-form col-md-12\" (click)=\"openForm()\">\r\n\r\n  <div *ngIf=\"data != null && data != undefined\" class=\"metric-value\" >\r\n    <span >{{getValue()}}</span>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storage-configuration/serial-number-formatter/serial-number-formatter.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storage-configuration/serial-number-formatter/serial-number-formatter.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"open-form col-md-12\" (click)=\"openForm()\">\r\n  <div *ngIf=\"data != null && data != undefined\" class=\"metric-value\">\r\n    <span>{{getValue()}}</span>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storage-configuration/storage-entity-form/storage-entity-form.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storage-configuration/storage-entity-form/storage-entity-form.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"displayForm\" class=\"modal fade in\" id=\"modal-default\" style=\"display: block; padding-right: 15px;\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" (click)=\"closeForm()\">&#735;</span></button>\r\n        <h4 class=\"modal-title\" *ngIf=\"data.type === staticType.SYSTEM\">Add / Edit System</h4>\r\n        <h4 class=\"modal-title\" *ngIf=\"data.type === staticType.DATACENTER\">Add / Edit Datacenter</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div *ngIf=\"httpErrorDisplayed\" class=\"col-md-12 http-error-box\">\r\n          {{httpError}}\r\n        </div>\r\n        <form role=\"form\" [formGroup]=\"form\">\r\n          <div class=\"box-body\">\r\n            <div class=\"col-md-12 form-group\" *ngIf=\"data.type !== staticType.DATACENTER\"\r\n                 [class.has-error]=\"dataCenter.invalid && (dataCenter.dirty || dataCenter.touched || submitted)\">\r\n              <label for=\"datacenter\">Datacenter:</label>\r\n              <ng-select id=\"datacenter\" [items]=\"dataCenterList\"\r\n                         bindValue=\"value\" formControlName=\"datacenter\">\r\n              </ng-select>\r\n              <span *ngIf=\"dataCenter.invalid && (dataCenter.dirty || dataCenter.touched || submitted)\"\r\n                    class=\"help-block\">Datacenter must be chosen</span>\r\n            </div>\r\n            <div class=\"col-md-12 form-group\"\r\n                 [class.has-error]=\"name.invalid && (name.dirty || name.touched || submitted)\">\r\n              <label for=\"name\" *ngIf=\"data.type === staticType.SYSTEM\">System Name: </label>\r\n              <label for=\"name\" *ngIf=\"data.type === staticType.DATACENTER\">Datacenter Name: </label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n              <span *ngIf=\"name.invalid && (name.dirty || name.touched || submitted)\" class=\"help-block\">Name must be set</span>\r\n            </div>\r\n            <div *ngIf=\"data.type !== staticType.DATACENTER\">\r\n\r\n              <div class=\"col-md-12 form-group\" *ngIf=\"data.type !== staticType.DATACENTER\">\r\n                <div class=\"\">\r\n                  <label for=\"serial\">Physical Serial Number: </label>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                  <input id=\"prefix\" class=\"form-control\" type=\"text\" formControlName=\"prefixReferenceId\"/>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                  <input id=\"serial\" class=\"form-control\" type=\"text\" formControlName=\"serialNumber\"\r\n                         name=\"serialNumber\"/>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12 form-group\">\r\n                <label for=\"model\">Array Model: </label>\r\n                <input id=\"model\" class=\"form-control\" type=\"text\" formControlName=\"arrayModel\">\r\n              </div>\r\n              <div class=\"col-md-12 form-group\">\r\n                <label for=\"dkc\">Virtual DKCs: </label>\r\n                <input id=\"dkc\" class=\"form-control\" type=\"text\" formControlName=\"dkc\">\r\n              </div>\r\n              <div class=\"col-md-12 form-group\"\r\n                   [class.has-error]=\"room.invalid && (room.dirty || room.touched || submitted)\">\r\n                <label for=\"room\">Room: </label>\r\n                <input id=\"room\" class=\"form-control\" type=\"text\" formControlName=\"room\">\r\n                <span *ngIf=\"room.invalid && room.errors.maxlength !== null\" class=\"help-block\">Length must be less than 32 characters</span>\r\n              </div>\r\n              <div class=\"col-md-12 form-group\"\r\n                   [class.has-error]=\"rack.invalid && (rack.dirty || rack.touched || submitted)\">\r\n                <label for=\"rack\">Rack: </label>\r\n                <input id=\"rack\" class=\"form-control\" type=\"text\" formControlName=\"rack\">\r\n                <span *ngIf=\"rack.invalid && rack.errors.maxlength !== null\" class=\"help-block\">Length must be less than 32 characters</span>\r\n              </div>\r\n              <div class=\"col-md-12 form-group\">\r\n                <label for=\"managementIp\">Management IP: </label>\r\n                <input id=\"managementIp\" class=\"form-control\" type=\"text\" formControlName=\"managementIp\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--           /.box-body -->\r\n        </form>\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default pull-left\" (click)=\"closeForm()\">Close</button>\r\n\r\n        <div class=\"btn-group\">\r\n          <button [class.disabled]=\"form.invalid\" type=\"button\" class=\"btn btn-primary\"\r\n                  (click)=\"form.valid ? saveChanges() : submitted = true\">Save changes\r\n          </button>\r\n          <button type=\"button\" [class.disabled]=\"form.invalid\" class=\"btn btn-primary dropdown-toggle\"\r\n                  data-toggle=\"dropdown\" aria-expanded=\"true\">\r\n            <span class=\"caret\"></span>\r\n            <span class=\"sr-only\">Toggle Dropdown</span>\r\n          </button>\r\n          <ul class=\"dropdown-menu\" role=\"menu\">\r\n            <li><a (click)=\"form.valid ? saveChanges(true) : submitted = true\">Save as new</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storage-configuration/storage-location/storage-location.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storage-configuration/storage-location/storage-location.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\" *ngIf=\"data.length > 0\">\r\n  <div class=\"box-header\">\r\n    <h3 class=\"box-title\">Storage Locations</h3>\r\n  </div>\r\n\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <app-sasi-table [data]=\"data | storageEntity2SasiGroupTable: 'dc'\" [tableOptions]=\"options\"></app-sasi-table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"openForm(type.SYSTEM)\">\r\n            Add system\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"openForm(type.DATACENTER)\">\r\n            Add datacenter\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-storage-entity-form [dataCenterList]=\"datacenterList\"\r\n                             (dataSaved)=\"loadData($event)\"></app-storage-entity-form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./global-statistics/global-statistics.module": "./src/app/global-statistics/global-statistics.module.ts",
	"./storage-configuration/storage-configuration.module": "./src/app/storage-configuration/storage-configuration.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var routes = [
    {
        path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
            breadcrumb: 'Dashboard'
        },
    },
    { path: 'iframe/:url', component: _components_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_2__["IframeComponent"] },
    {
        path: 'storage-config',
        loadChildren: './storage-configuration/storage-configuration.module#StorageConfigurationModule',
        data: {
            breadcrumb: 'Storage Configuration'
        }
    },
    {
        path: 'global-statistics',
        loadChildren: './global-statistics/global-statistics.module#GlobalStatisticsModule',
    },
    {
        path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], data: {
            breadcrumb: 'Dashboard'
        }
    },
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sa-admin-ts';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _storage_configuration_storage_configuration_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./storage-configuration/storage-configuration.module */ "./src/app/storage-configuration/storage-configuration.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_22__["BreadcrumbComponent"],
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
                _storage_configuration_storage_configuration_module__WEBPACK_IMPORTED_MODULE_23__["StorageConfigurationModule"]
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
    AlertInfoBoxComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_3__["MetricService"] }
    ]; };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./info-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/info-box/info-box.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./info-box.component.css */ "./src/app/common/components/info-box/info-box.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.modal.open {\r\n  display: block;\r\n  padding-right: 15px;\r\n}\r\n\r\n.info-box-number {\r\n  font-size: 25px;\r\n}\r\n\r\n.info-box-text {\r\n  font-size: 17px;\r\n}\r\n\r\n.cut-text {\r\n  display: inline-block;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  max-width: 80%;\r\n  height: 1.2em;\r\n  white-space: nowrap;\r\n}\r\n\r\n.modal-content {\r\n  overflow: scroll;\r\n  height: 700px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.cursor {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvaW5mby1ib3gvaW5mby1ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2luZm8tYm94L2luZm8tYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubW9kYWwub3BlbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmluZm8tYm94LW51bWJlciB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uaW5mby1ib3gtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uY3V0LXRleHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIGhlaWdodDogMS4yZW07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmN1cnNvciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
    InfoBoxComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_3__["MetricService"] }
    ]; };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./info-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/info-box/info-box.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./info-box.component.css */ "./src/app/common/components/info-box/info-box.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2tub2Iva25vYi1zYS5jb21wb25lbnQuY3NzIn0= */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./knob-sa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/knob/knob-sa.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./knob-sa.component.css */ "./src/app/common/components/knob/knob-sa.component.css")).default]
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
    Ng2KnobDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".system-name {\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvcm91dGUtbGluay1mb3JtYXR0ZXIvcm91dGUtbGluay1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY29tcG9uZW50cy9yb3V0ZS1saW5rLWZvcm1hdHRlci9yb3V0ZS1saW5rLWZvcm1hdHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN5c3RlbS1uYW1lIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiJdfQ== */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./route-link-formatter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/route-link-formatter/route-link-formatter.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./route-link-formatter.component.css */ "./src/app/common/components/route-link-formatter/route-link-formatter.component.css")).default]
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
    CellTableComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
    ]; };
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_formatter_host_directive__WEBPACK_IMPORTED_MODULE_1__["FormatterHostDirective"], { static: true }),
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

/***/ "./src/app/common/components/sasi-table/column/column.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/column/column.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sasi-table-item.alt-border {\r\n  border-right: 3px double darkgrey;\r\n}\r\n.sasi-table-item.text-right {\r\n  -webkit-box-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n.sasi-table-item.text-center {\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n.sasi-table-item.center-margin {\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  padding-left: 30px;\r\n}\r\n.sasi-table-cell {\r\n  min-width: 100%;\r\n}\r\n.highlightColumn {\r\n  background-color: #b4d1ee !important;\r\n  color: #3A738C;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvc2FzaS10YWJsZS9jb2x1bW4vY29sdW1uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLHFCQUF5QjtVQUF6Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL3Nhc2ktdGFibGUvY29sdW1uL2NvbHVtbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhc2ktdGFibGUtaXRlbS5hbHQtYm9yZGVyIHtcclxuICBib3JkZXItcmlnaHQ6IDNweCBkb3VibGUgZGFya2dyZXk7XHJcbn1cclxuLnNhc2ktdGFibGUtaXRlbS50ZXh0LXJpZ2h0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5zYXNpLXRhYmxlLWl0ZW0udGV4dC1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zYXNpLXRhYmxlLWl0ZW0uY2VudGVyLW1hcmdpbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG4uc2FzaS10YWJsZS1jZWxsIHtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuLmhpZ2hsaWdodENvbHVtbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0ZDFlZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjM0E3MzhDO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/common/components/sasi-table/column/column.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/common/components/sasi-table/column/column.component.ts ***!
  \*************************************************************************/
/*! exports provided: ColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnComponent", function() { return ColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _highlight_column_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../highlight-column.service */ "./src/app/common/components/sasi-table/highlight-column.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ColumnComponent = /** @class */ (function () {
    function ColumnComponent(highlightColumnService, cd) {
        this.highlightColumnService = highlightColumnService;
        this.cd = cd;
        this.colIndex = -1;
        this.isCollapsed = false;
        this.highlightedColumn = -1;
    }
    ColumnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.highLightSubscription = this.highlightColumnService.highlightColumn$.subscribe(function (columnIndex) {
            if (_this.highlightedColumn === _this.colIndex || columnIndex === _this.colIndex) {
                // this.highlightedColumn = columnIndex;
                _this.cd.markForCheck();
            }
            _this.highlightedColumn = columnIndex;
        });
    };
    ColumnComponent.prototype.ngOnDestroy = function () {
        this.highLightSubscription.unsubscribe();
    };
    ColumnComponent.prototype.isColumnHighlighted = function (column) {
        if (!this.options.highlightColumn) {
            return false;
        }
        return column === this.highlightedColumn;
    };
    ColumnComponent.prototype.setHighlightedColumn = function (column) {
        this.highlightColumnService.setHighlightColumn(column);
    };
    ColumnComponent.ctorParameters = function () { return [
        { type: _highlight_column_service__WEBPACK_IMPORTED_MODULE_2__["HighlightColumnService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiTableOptions"])
    ], ColumnComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiColumn"])
    ], ColumnComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ColumnComponent.prototype, "colIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiRow"])
    ], ColumnComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ColumnComponent.prototype, "isCollapsed", void 0);
    ColumnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-column',
            template: __importDefault(__webpack_require__(/*! raw-loader!./column.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/sasi-table/column/column.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            animations: _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["slideInOutAnimation"],
            styles: [__importDefault(__webpack_require__(/*! ./column.component.css */ "./src/app/common/components/sasi-table/column/column.component.css")).default]
        }),
        __metadata("design:paramtypes", [_highlight_column_service__WEBPACK_IMPORTED_MODULE_2__["HighlightColumnService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ColumnComponent);
    return ColumnComponent;
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FormatterHostDirective = /** @class */ (function () {
    function FormatterHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    FormatterHostDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
    ]; };
    FormatterHostDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appFormatterHost]',
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
    RowDynamicComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
    ]; };
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_formatter_host_directive__WEBPACK_IMPORTED_MODULE_1__["FormatterHostDirective"], { static: true }),
        __metadata("design:type", _formatter_host_directive__WEBPACK_IMPORTED_MODULE_1__["FormatterHostDirective"])
    ], RowDynamicComponent.prototype, "adHost", void 0);
    RowDynamicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-row-dynamic-table',
            template: '<ng-template appFormatterHost></ng-template>',
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host /deep/ .sasi-table-item {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: stretch;\r\n          align-items: stretch;\r\n}\r\n\r\n:host /deep/ .sasi-table-data {\r\n  -webkit-box-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n\r\n:host /deep/ .sasi-table-cell {\r\n  align-self: center;\r\n}\r\n\r\n:host /deep/ .sasi-table-controls,\r\n:host /deep/ .sasi-table-alerts\r\n{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: stretch;\r\n          align-items: stretch;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n:host /deep/ .sasi-table-controls i,\r\n:host /deep/ .sasi-table-alerts i{\r\n  font-size: 1.1rem;\r\n  align-self: center;\r\n}\r\n\r\n/**** Appearance ***/\r\n\r\n.sasi-table-item {\r\n  border-top: 3px solid #EAEAEA;\r\n  border-bottom: 3px solid #EAEAEA;\r\n}\r\n\r\n.sasi-table-item.alt-border {\r\n    border-right: 3px double darkgrey;\r\n}\r\n\r\n.sasi-table-item.text-right {\r\n  -webkit-box-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n\r\n.sasi-table-item.text-center {\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.highlightColumn {\r\n  background-color: #b4d1ee !important;\r\n  color: #3A738C;\r\n}\r\n\r\n.text-alert-yellow {\r\n  color: #ffd829;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvc2FzaS10YWJsZS9yb3ctZ3JvdXAtdGFibGUvcm93LWdyb3VwLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiwwQkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTs7O0VBR0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsMEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0Esb0JBQW9COztBQUNwQjtFQUNFLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7O0FBQ0E7RUFDRSxxQkFBeUI7VUFBekIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL3Nhc2ktdGFibGUvcm93LWdyb3VwLXRhYmxlL3Jvdy1ncm91cC10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgL2RlZXAvIC5zYXNpLXRhYmxlLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuc2FzaS10YWJsZS1kYXRhIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnNhc2ktdGFibGUtY2VsbCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbjpob3N0IC9kZWVwLyAuc2FzaS10YWJsZS1jb250cm9scyxcclxuOmhvc3QgL2RlZXAvIC5zYXNpLXRhYmxlLWFsZXJ0c1xyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5zYXNpLXRhYmxlLWNvbnRyb2xzIGksXHJcbjpob3N0IC9kZWVwLyAuc2FzaS10YWJsZS1hbGVydHMgaXtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLyoqKiogQXBwZWFyYW5jZSAqKiovXHJcbi5zYXNpLXRhYmxlLWl0ZW0ge1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjRUFFQUVBO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRUFFQUVBO1xyXG59XHJcbi5zYXNpLXRhYmxlLWl0ZW0uYWx0LWJvcmRlciB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDNweCBkb3VibGUgZGFya2dyZXk7XHJcbn1cclxuLnNhc2ktdGFibGUtaXRlbS50ZXh0LXJpZ2h0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5zYXNpLXRhYmxlLWl0ZW0udGV4dC1jZW50ZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0Q29sdW1uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRkMWVlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMzQTczOEM7XHJcbn1cclxuXHJcbi50ZXh0LWFsZXJ0LXllbGxvdyB7XHJcbiAgY29sb3I6ICNmZmQ4Mjk7XHJcbn1cclxuIl19 */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
        if (this.options.aggregateValuesService !== undefined && this.options.aggregateValuesService !== null) {
            this.aggregateValues(this.selectedRows);
        }
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
        if (this.options.aggregateValuesService !== undefined && this.options.aggregateValuesService !== null) {
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
    RowGroupTableComponent.ctorParameters = function () { return [
        { type: ngx_store__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
        { type: _highlight_column_service__WEBPACK_IMPORTED_MODULE_5__["HighlightColumnService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./row-group-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/sasi-table/row-group-table/row-group-table.component.html")).default,
            animations: _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["slideInOutAnimation"],
            styles: [__importDefault(__webpack_require__(/*! ./row-group-table.component.css */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host /deep/ .sasi-table-item {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: stretch;\r\n          align-items: stretch;\r\n  /*justify-content: center;*/\r\n}\r\n:host /deep/ .sasi-table-cell {\r\n  align-self: center;\r\n}\r\n/**\r\n  TODO this is duplicated in row-group-table. Each grid item should be as separete component and content should be dynamically rendered\r\n */\r\n.highlightColumn {\r\n  background-color: #b4d1ee !important;\r\n  color: #3A738C;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvc2FzaS10YWJsZS9yb3ctdGFibGUvcm93LXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiwwQkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUU7QUFDRjtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvc2FzaS10YWJsZS9yb3ctdGFibGUvcm93LXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8gLnNhc2ktdGFibGUtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAvKmp1c3RpZnktY29udGVudDogY2VudGVyOyovXHJcbn1cclxuOmhvc3QgL2RlZXAvIC5zYXNpLXRhYmxlLWNlbGwge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4vKipcclxuICBUT0RPIHRoaXMgaXMgZHVwbGljYXRlZCBpbiByb3ctZ3JvdXAtdGFibGUuIEVhY2ggZ3JpZCBpdGVtIHNob3VsZCBiZSBhcyBzZXBhcmV0ZSBjb21wb25lbnQgYW5kIGNvbnRlbnQgc2hvdWxkIGJlIGR5bmFtaWNhbGx5IHJlbmRlcmVkXHJcbiAqL1xyXG4uaGlnaGxpZ2h0Q29sdW1uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjRkMWVlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMzQTczOEM7XHJcbn1cclxuIl19 */");

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var RowTableComponent = /** @class */ (function () {
    function RowTableComponent(localStorageService, onSelectService) {
        this.localStorageService = localStorageService;
        this.onSelectService = onSelectService;
        this.columnHighlightEnable = false;
        this.isCollapsed = false;
        this.selectEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RowTableComponent.prototype.ngDoCheck = function () {
    };
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
    };
    /* HIGHLIGHTNING */
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
    RowTableComponent.ctorParameters = function () { return [
        { type: ngx_store__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
        { type: _on_select_service__WEBPACK_IMPORTED_MODULE_4__["OnSelectService"] }
    ]; };
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RowTableComponent.prototype, "isCollapsed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RowTableComponent.prototype, "selectEmit", void 0);
    RowTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-row-table',
            template: __importDefault(__webpack_require__(/*! raw-loader!./row-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/sasi-table/row-table/row-table.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            animations: _sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["slideInOutAnimation"],
            styles: [__importDefault(__webpack_require__(/*! ./row-table.component.css */ "./src/app/common/components/sasi-table/row-table/row-table.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_store__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _on_select_service__WEBPACK_IMPORTED_MODULE_4__["OnSelectService"]])
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/********\r\n * sasi-table-container - is grid\r\n * sasi-table-item - is grid item\r\n * sasi-table-data\r\n * sasi-table-header - is wrapper element for header\r\n * sasi-table-controls - is wrapper for control elements like select and collapse\r\n * sasi-table-alerts - is wrapper for alerting elements(mostly icons)\r\n */\r\n/******** LAYOUT ***********/\r\n.sasi-table-container {\r\n  display: grid;\r\n  /*grid-template-columns: 40px 120px repeat(19, 1fr);*/\r\n  grid-template-rows: minmax(25px, -webkit-max-content);\r\n  grid-template-rows: minmax(25px, max-content);\r\n  grid-auto-rows: minmax(20px, -webkit-max-content);\r\n  grid-auto-rows: minmax(20px, max-content);\r\n}\r\n/*\r\n Remove parent elements which contains elements for grid\r\n*/\r\n:host /deep/ app-row-group-table,\r\n:host /deep/ app-row-table,\r\n:host /deep/ app-column,\r\napp-row-dynamic-table,\r\n.sasi-table-header {\r\n  display: contents;\r\n}\r\n/** TODO this should be used only when data are align to right **/\r\n:host /deep/ .sasi-table-cell {\r\n  padding-right: 5px;\r\n}\r\n/********* Appearance *************/\r\n.sasi-table-container {\r\n  border: 3px #EAEAEA solid;\r\n}\r\n.sasi-table-header > .sasi-table-item {\r\n  border-right: 1px #EAEAEA solid;\r\n  background-color: #3C8CBC;\r\n  font-size: 1.1rem;\r\n  font-weight: bolder;\r\n  color: white;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: column;\r\n  flex-wrap: wrap;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  align-content: center;\r\n  text-align: center;\r\n}\r\n.sasi-table-header > .sasi-table-item.sasi-table-controls {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row;\r\n}\r\n.sasi-table-header > .sasi-table-header-group {\r\n  border-bottom: 1px #EAEAEA solid;\r\n}\r\n:host /deep/ app-row-dynamic-table.striped-row:nth-of-type(odd) .sasi-table-item,\r\n:host /deep/ app-row-table.striped-row:nth-of-type(odd) .sasi-table-item {\r\n  background-color: #f3f8fa;\r\n}\r\n/** Table header **/\r\n.sasi-table-header > .sasi-table-item {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 50px;\r\n  z-index: 10;\r\n}\r\n.sasi-table-header > .sasi-table-item i {\r\n  color: white;\r\n}\r\n.sasi-table-header .sorting {\r\n  font-size: 0.9rem;\r\n}\r\n.sasi-table-header .peak-label {\r\n  color: #c7e1f8;\r\n}\r\n.sasi-table-header i.sort-icon-left {\r\n  margin-right: 5px;\r\n}\r\n.sasi-table-header i.sort-icon-right {\r\n  margin-left: 5px;\r\n}\r\n.sasi-table-header span.link {\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n.sasi-table-header span.link:hover {\r\n  color: white;\r\n  cursor: pointer;\r\n  -webkit-text-decoration: white underline;\r\n          text-decoration: white underline;\r\n}\r\n/** Table header end **/\r\n:host /deep/ app-row-dynamic-table .sasi-table-item {\r\n  border-right: 1px #EAEAEA solid;\r\n}\r\n:host /deep/ app-row-table:hover .sasi-table-item {\r\n  background-color: #b4d1ee !important;\r\n  color: #3A738C;\r\n}\r\n:host /deep/ .not-data-grouped app-row-table .sasi-table-item,\r\n:host /deep/ .not-data-grouped app-row-table app-column > .sasi-table-item {\r\n  margin-bottom: 2px;\r\n  border-top: 3px solid #EAEAEA;\r\n  border-bottom: 3px solid #EAEAEA;\r\n}\r\n/*app-row-dynamic-table.highlight-row:hover {*/\r\n/*  background-color: #b4d1ee !important;*/\r\n/*  color: #3A738C;*/\r\n/*}*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvc2FzaS10YWJsZS9zYXNpLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7RUFPRTtBQUNGLDRCQUE0QjtBQUM1QjtFQUNFLGFBQWE7RUFDYixxREFBcUQ7RUFDckQscURBQTZDO0VBQTdDLDZDQUE2QztFQUM3QyxpREFBeUM7RUFBekMseUNBQXlDO0FBQzNDO0FBRUE7O0NBRUM7QUFDRDs7Ozs7RUFLRSxpQkFBaUI7QUFDbkI7QUFFQSxpRUFBaUU7QUFDakU7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw4QkFBYztFQUFkLDZCQUFjO1VBQWQsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7O0VBRUUseUJBQXlCO0FBQzNCO0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEM7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSwrQkFBK0I7QUFDakM7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7QUFDQSw4Q0FBOEM7QUFDOUMsMENBQTBDO0FBQzFDLG9CQUFvQjtBQUNwQixJQUFJIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvc2FzaS10YWJsZS9zYXNpLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKipcclxuICogc2FzaS10YWJsZS1jb250YWluZXIgLSBpcyBncmlkXHJcbiAqIHNhc2ktdGFibGUtaXRlbSAtIGlzIGdyaWQgaXRlbVxyXG4gKiBzYXNpLXRhYmxlLWRhdGFcclxuICogc2FzaS10YWJsZS1oZWFkZXIgLSBpcyB3cmFwcGVyIGVsZW1lbnQgZm9yIGhlYWRlclxyXG4gKiBzYXNpLXRhYmxlLWNvbnRyb2xzIC0gaXMgd3JhcHBlciBmb3IgY29udHJvbCBlbGVtZW50cyBsaWtlIHNlbGVjdCBhbmQgY29sbGFwc2VcclxuICogc2FzaS10YWJsZS1hbGVydHMgLSBpcyB3cmFwcGVyIGZvciBhbGVydGluZyBlbGVtZW50cyhtb3N0bHkgaWNvbnMpXHJcbiAqL1xyXG4vKioqKioqKiogTEFZT1VUICoqKioqKioqKioqL1xyXG4uc2FzaS10YWJsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLypncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMTIwcHggcmVwZWF0KDE5LCAxZnIpOyovXHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMjVweCwgbWF4LWNvbnRlbnQpO1xyXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjBweCwgbWF4LWNvbnRlbnQpO1xyXG59XHJcblxyXG4vKlxyXG4gUmVtb3ZlIHBhcmVudCBlbGVtZW50cyB3aGljaCBjb250YWlucyBlbGVtZW50cyBmb3IgZ3JpZFxyXG4qL1xyXG46aG9zdCAvZGVlcC8gYXBwLXJvdy1ncm91cC10YWJsZSxcclxuOmhvc3QgL2RlZXAvIGFwcC1yb3ctdGFibGUsXHJcbjpob3N0IC9kZWVwLyBhcHAtY29sdW1uLFxyXG5hcHAtcm93LWR5bmFtaWMtdGFibGUsXHJcbi5zYXNpLXRhYmxlLWhlYWRlciB7XHJcbiAgZGlzcGxheTogY29udGVudHM7XHJcbn1cclxuXHJcbi8qKiBUT0RPIHRoaXMgc2hvdWxkIGJlIHVzZWQgb25seSB3aGVuIGRhdGEgYXJlIGFsaWduIHRvIHJpZ2h0ICoqL1xyXG46aG9zdCAvZGVlcC8gLnNhc2ktdGFibGUtY2VsbCB7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4vKioqKioqKioqIEFwcGVhcmFuY2UgKioqKioqKioqKioqKi9cclxuLnNhc2ktdGFibGUtY29udGFpbmVyIHtcclxuICBib3JkZXI6IDNweCAjRUFFQUVBIHNvbGlkO1xyXG59XHJcblxyXG4uc2FzaS10YWJsZS1oZWFkZXIgPiAuc2FzaS10YWJsZS1pdGVtIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCAjRUFFQUVBIHNvbGlkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzhDQkM7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zYXNpLXRhYmxlLWhlYWRlciA+IC5zYXNpLXRhYmxlLWl0ZW0uc2FzaS10YWJsZS1jb250cm9scyB7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbn1cclxuXHJcbi5zYXNpLXRhYmxlLWhlYWRlciA+IC5zYXNpLXRhYmxlLWhlYWRlci1ncm91cCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICNFQUVBRUEgc29saWQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIGFwcC1yb3ctZHluYW1pYy10YWJsZS5zdHJpcGVkLXJvdzpudGgtb2YtdHlwZShvZGQpIC5zYXNpLXRhYmxlLWl0ZW0sXHJcbjpob3N0IC9kZWVwLyBhcHAtcm93LXRhYmxlLnN0cmlwZWQtcm93Om50aC1vZi10eXBlKG9kZCkgLnNhc2ktdGFibGUtaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjhmYTtcclxufVxyXG5cclxuLyoqIFRhYmxlIGhlYWRlciAqKi9cclxuLnNhc2ktdGFibGUtaGVhZGVyID4gLnNhc2ktdGFibGUtaXRlbSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDUwcHg7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5zYXNpLXRhYmxlLWhlYWRlciA+IC5zYXNpLXRhYmxlLWl0ZW0gaSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2FzaS10YWJsZS1oZWFkZXIgLnNvcnRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uc2FzaS10YWJsZS1oZWFkZXIgLnBlYWstbGFiZWwge1xyXG4gIGNvbG9yOiAjYzdlMWY4O1xyXG59XHJcblxyXG4uc2FzaS10YWJsZS1oZWFkZXIgaS5zb3J0LWljb24tbGVmdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5zYXNpLXRhYmxlLWhlYWRlciBpLnNvcnQtaWNvbi1yaWdodCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnNhc2ktdGFibGUtaGVhZGVyIHNwYW4ubGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNhc2ktdGFibGUtaGVhZGVyIHNwYW4ubGluazpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IHdoaXRlIHVuZGVybGluZTtcclxufVxyXG5cclxuLyoqIFRhYmxlIGhlYWRlciBlbmQgKiovXHJcbjpob3N0IC9kZWVwLyBhcHAtcm93LWR5bmFtaWMtdGFibGUgLnNhc2ktdGFibGUtaXRlbSB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggI0VBRUFFQSBzb2xpZDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIGFwcC1yb3ctdGFibGU6aG92ZXIgLnNhc2ktdGFibGUtaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0ZDFlZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjM0E3MzhDO1xyXG59XHJcbjpob3N0IC9kZWVwLyAubm90LWRhdGEtZ3JvdXBlZCBhcHAtcm93LXRhYmxlIC5zYXNpLXRhYmxlLWl0ZW0sXHJcbjpob3N0IC9kZWVwLyAubm90LWRhdGEtZ3JvdXBlZCBhcHAtcm93LXRhYmxlIGFwcC1jb2x1bW4gPiAuc2FzaS10YWJsZS1pdGVtIHtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNFQUVBRUE7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNFQUVBRUE7XHJcbn1cclxuLyphcHAtcm93LWR5bmFtaWMtdGFibGUuaGlnaGxpZ2h0LXJvdzpob3ZlciB7Ki9cclxuLyogIGJhY2tncm91bmQtY29sb3I6ICNiNGQxZWUgIWltcG9ydGFudDsqL1xyXG4vKiAgY29sb3I6ICMzQTczOEM7Ki9cclxuLyp9Ki9cclxuIl19 */");

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





/**
 * SasiColumn is metadata object for columns.
 */
var SasiColumnBuilder = /** @class */ (function () {
    function SasiColumnBuilder() {
        this.altSortEnable = false;
        this.isAggregated = false;
        this.tooltipText = null;
        this.columnTooltipText = null;
        this.infinity = true;
        this.altBorder = false;
        this.altBorderLeft = false;
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
    SasiColumnBuilder.prototype.withAltBorderLeft = function (altBorder) {
        this.altBorderLeft = altBorder;
        return this;
    };
    SasiColumnBuilder.prototype.withColumnWidth = function (width) {
        this.columnWidth = width;
        return this;
    };
    SasiColumnBuilder.prototype.withColumnTooltipText = function (text) {
        this.columnTooltipText = text;
        return this;
    };
    SasiColumnBuilder.prototype.build = function () {
        return new SasiColumn(this.index, this.label, this.component, this.aggComponent === undefined ? this.component : this.aggComponent, this.altSortEnable, this.isAggregated, this.tooltipText === null ? this.label : this.tooltipText, this.infinity, this.altLabel, this.altBorder, this.altBorderLeft, this.columnWidth, this.columnTooltipText, this.shortLabel === undefined ? this.label : this.shortLabel);
    };
    SasiColumnBuilder.prototype.withInfinity = function (isInfinity) {
        this.infinity = isInfinity;
        return this;
    };
    SasiColumnBuilder.prototype.withShortLabel = function (shortLabel) {
        this.shortLabel = shortLabel;
        return this;
    };
    return SasiColumnBuilder;
}());

var SasiColumn = /** @class */ (function () {
    function SasiColumn(index, label, component, aggComponent, altSortEnable, isAggragated, tooltipText, isInfinity, altLabel, altBorder, altBorderLeft, columnWidth, columnTooltipText, shortLabel) {
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
        this.altBorderLeft = altBorderLeft;
        this.columnWidth = columnWidth;
        this.columnTooltipText = columnTooltipText;
        this.shortLabel = shortLabel;
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
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ display: 'none' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ display: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-in')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-out'))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('iconRotate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(0deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(90deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms'))
    ])
];
var SasiTableComponent = /** @class */ (function () {
    function SasiTableComponent(localStorageService, onSelectService, domSanitizer) {
        this.localStorageService = localStorageService;
        this.onSelectService = onSelectService;
        this.domSanitizer = domSanitizer;
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
            controlColumnSize: '30px',
            alertColumnSize: '40px',
            nameColumnSize: '130px',
            headerGroups: [],
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
                        this.sortData(this.data);
                        this.style = this.domSanitizer.bypassSecurityTrustStyle('grid-template-columns: ' + this.getColControlSize() + ' ' + this.getAlertColumnSize() +
                            ' ' + this.getNameColumnSize() + ' repeat(' + this.getGridColumnCount() + ', 1fr);');
                        return [2 /*return*/];
                }
            });
        });
    };
    SasiTableComponent.prototype.ngOnChanges = function (changes) {
        this.sortData(changes.data.currentValue);
    };
    SasiTableComponent.prototype.sortData = function (changes) {
        var _this = this;
        if (this.options !== undefined && this.options.sortColumnName !== undefined) {
            this.data = this.options.sortService.sort(changes, this.getColumns().find(function (column) { return column.index === _this.options.sortColumnName; }), this.options.sortType, this.altSort ? this.options.altSortColumnName : null, (function (row, column1) { return row.getCellValue(column1); }));
        }
    };
    SasiTableComponent.prototype.getGridColumnCount = function () {
        return this.options.columns.length - 1;
    };
    SasiTableComponent.prototype.getNameColumnSize = function () {
        return this.options.nameColumnSize;
    };
    SasiTableComponent.prototype.getColControlSize = function () {
        return this.options.controlColumnSize;
    };
    SasiTableComponent.prototype.getAlertColumnSize = function () {
        return this.options.isDataGrouped && this.options.cellDecoratorRules.length > 0 ? this.options.alertColumnSize : '';
    };
    SasiTableComponent.prototype.getColumnLabel = function (type) {
        var column = this.options.columns.find(function (optionColumn) { return optionColumn.index === type; });
        if (column === undefined) {
            return '';
        }
        if (this.options.headerGroups.length > 0) {
            return column.shortLabel;
        }
        return column.altLabel !== undefined ? column.altLabel : column.label;
    };
    SasiTableComponent.prototype.getColumnTooltipText = function (type) {
        var column = this.options.columns.find(function (optionColumn) { return optionColumn.index === type; });
        if (column === undefined) {
            return '';
        }
        return column.columnTooltipText !== null ? column.columnTooltipText : this.getColumnLabel(type);
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
    SasiTableComponent.prototype.getColumns = function () {
        // if (this.options.headerGroups.length > 0) {
        //   return this.options.headerGroups;
        // }
        return this.options.columns;
    };
    SasiTableComponent.prototype.getHeaderGridStyle = function (i) {
        var offsetPosition = 1;
        var groupsBefore = this.options.headerGroups.slice(0, i);
        var startPosition = groupsBefore.reduce(function (previousValue, currentValue) { return previousValue + currentValue.columns.length; }, offsetPosition);
        var headerGroup = this.options.headerGroups[i];
        var endPosition = startPosition + headerGroup.columns.length;
        return this.domSanitizer.bypassSecurityTrustStyle('grid-column-start: ' + startPosition + ';' +
            'grid-column-end: ' + endPosition + ';' +
            'grid-row-start: 1;');
    };
    SasiTableComponent.ctorParameters = function () { return [
        { type: ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] },
        { type: _on_select_service__WEBPACK_IMPORTED_MODULE_3__["OnSelectService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./sasi-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/sasi-table/sasi-table.component.html")).default,
            animations: slideInOutAnimation,
            styles: [__importDefault(__webpack_require__(/*! ./sasi-table.component.css */ "./src/app/common/components/sasi-table/sasi-table.component.css")).default]
        })
        /**
         * Storage analytics simple interactive table
         */
        ,
        __metadata("design:paramtypes", [ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"],
            _on_select_service__WEBPACK_IMPORTED_MODULE_3__["OnSelectService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

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
        var a = valueA || '';
        var b = valueB || '';
        if (a > b) {
            return 1;
        }
        else if (a < b) {
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL3NtYWxsLWJveC9zbWFsbC1ib3guY29tcG9uZW50LmNzcyJ9 */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./small-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/small-box/small-box.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./small-box.component.css */ "./src/app/common/components/small-box/small-box.component.css")).default]
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Datacenter = /** @class */ (function () {
    function Datacenter() {
    }
    Datacenter.of = function (dto) {
        var dc = new Datacenter();
        dc.label = dto.storageEntity.name;
        dc.id = dto.storageEntity.id;
        return dc;
    };
    return Datacenter;
}());



/***/ }),

/***/ "./src/app/common/models/dtos/owner.dto.ts":
/*!*************************************************!*\
  !*** ./src/app/common/models/dtos/owner.dto.ts ***!
  \*************************************************/
/*! exports provided: StorageEntityType, Owner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageEntityType", function() { return StorageEntityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Owner", function() { return Owner; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var StorageEntityType;
(function (StorageEntityType) {
    StorageEntityType[StorageEntityType["DATACENTER"] = 1] = "DATACENTER";
    StorageEntityType[StorageEntityType["SYSTEM"] = 2] = "SYSTEM";
    StorageEntityType[StorageEntityType["POOL"] = 3] = "POOL";
    StorageEntityType[StorageEntityType["ADAPTER"] = 4] = "ADAPTER";
    StorageEntityType[StorageEntityType["PORT"] = 5] = "PORT";
    StorageEntityType[StorageEntityType["HOST_GROUP"] = 6] = "HOST_GROUP";
})(StorageEntityType || (StorageEntityType = {}));
var Owner = /** @class */ (function () {
    function Owner() {
    }
    return Owner;
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Region;
(function (Region) {
    Region[Region["EUROPE"] = 0] = "EUROPE";
    Region[Region["ASIA"] = 1] = "ASIA";
    Region[Region["AMERICA"] = 2] = "AMERICA";
})(Region || (Region = {}));


/***/ }),

/***/ "./src/app/common/models/dtos/storage-entity-detail-request.dto.ts":
/*!*************************************************************************!*\
  !*** ./src/app/common/models/dtos/storage-entity-detail-request.dto.ts ***!
  \*************************************************************************/
/*! exports provided: StorageEntityDetailRequestDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageEntityDetailRequestDto", function() { return StorageEntityDetailRequestDto; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var StorageEntityDetailRequestDto = /** @class */ (function () {
    function StorageEntityDetailRequestDto() {
    }
    return StorageEntityDetailRequestDto;
}());



/***/ }),

/***/ "./src/app/common/models/dtos/storage-entity-request.dto.ts":
/*!******************************************************************!*\
  !*** ./src/app/common/models/dtos/storage-entity-request.dto.ts ***!
  \******************************************************************/
/*! exports provided: StorageEntityRequestDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageEntityRequestDto", function() { return StorageEntityRequestDto; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var StorageEntityRequestDto = /** @class */ (function () {
    function StorageEntityRequestDto() {
    }
    return StorageEntityRequestDto;
}());



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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Metric = /** @class */ (function () {
    function Metric() {
    }
    return Metric;
}());



/***/ }),

/***/ "./src/app/common/models/metrics/operation-type.enum.ts":
/*!**************************************************************!*\
  !*** ./src/app/common/models/metrics/operation-type.enum.ts ***!
  \**************************************************************/
/*! exports provided: OperationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationType", function() { return OperationType; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var OperationType;
(function (OperationType) {
    OperationType[OperationType["READ"] = 1] = "READ";
    OperationType[OperationType["WRITE"] = 2] = "WRITE";
})(OperationType || (OperationType = {}));


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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

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
/* harmony import */ var _components_sasi_table_column_column_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/sasi-table/column/column.component */ "./src/app/common/components/sasi-table/column/column.component.ts");
/* harmony import */ var _utils_storage_entity_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./utils/storage-entity-2-sasi-group-table.pipe */ "./src/app/common/utils/storage-entity-2-sasi-group-table.pipe.ts");
/* harmony import */ var _utils_storage_entity_detail_2_sasi_table_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./utils/storage-entity-detail-2-sasi-table.pipe */ "./src/app/common/utils/storage-entity-detail-2-sasi-table.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
                _utils_storage_entity_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_34__["StorageEntity2SasiGroupTablePipe"],
                _utils_storage_entity_detail_2_sasi_table_pipe__WEBPACK_IMPORTED_MODULE_35__["StorageEntityDetail2SasiTablePipe"],
                _components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_16__["RowGroupTableComponent"],
                _components_knob_knob_sa_component__WEBPACK_IMPORTED_MODULE_2__["KnobSaComponent"],
                _components_knob_ng_2_knob_directive__WEBPACK_IMPORTED_MODULE_19__["Ng2KnobDirective"],
                _components_small_box_locale_number_format_pipe__WEBPACK_IMPORTED_MODULE_20__["LocaleNumberFormatPipe"],
                _utils_safe_html_pipe__WEBPACK_IMPORTED_MODULE_24__["SafeHtmlPipe"],
                _utils_format_thousands_pipe__WEBPACK_IMPORTED_MODULE_26__["FormatThousandsPipe"],
                _components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_27__["RouteLinkFormatterComponent"],
                _storage_convert_pipe__WEBPACK_IMPORTED_MODULE_28__["StorageConvertPipe"],
                _components_info_box_alert_info_box_component__WEBPACK_IMPORTED_MODULE_31__["AlertInfoBoxComponent"],
                _components_sasi_table_column_column_component__WEBPACK_IMPORTED_MODULE_33__["ColumnComponent"]
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
                _utils_storage_entity_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_34__["StorageEntity2SasiGroupTablePipe"],
                _utils_storage_entity_detail_2_sasi_table_pipe__WEBPACK_IMPORTED_MODULE_35__["StorageEntityDetail2SasiTablePipe"],
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var StorageConvertPipe = /** @class */ (function () {
    function StorageConvertPipe() {
    }
    StorageConvertPipe_1 = StorageConvertPipe;
    StorageConvertPipe.prototype.transform = function (metric, args) {
        if (StorageConvertPipe_1.unitOrder[metric.type] === undefined) {
            return metric;
        }
        var startingValue = StorageConvertPipe_1.unitOrder[metric.type].findIndex(function (unit) { return unit === metric.unit; });
        var convertedValue = null;
        if (args !== undefined && args.targetedUnitIndex !== undefined) {
            convertedValue = this.convertToMaximumUnit(metric.value, startingValue, args.targetedUnitIndex);
        }
        else {
            convertedValue = this.convertValue(metric.value, startingValue, StorageConvertPipe_1.unitOrder[metric.type].length - 1);
        }
        var result = new _models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_1__["Metric"]();
        result.value = convertedValue.value;
        result.type = metric.type;
        result.unit = StorageConvertPipe_1.unitOrder[metric.type][convertedValue.countedOrder];
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
    StorageConvertPipe.prototype.convertToMaximumUnit = function (value, startingOrder, maximumOrder) {
        var countedOrder = startingOrder;
        var countedValue = value;
        while (countedOrder < maximumOrder) {
            countedValue = (countedValue / 1024);
            countedOrder++;
        }
        return { value: countedValue, countedOrder: countedOrder };
    };
    var StorageConvertPipe_1;
    StorageConvertPipe.unitOrder = {
        'CAPACITY': ['MB', 'GB', 'TB', 'PB'],
        'TRANSFER': ['MBps', 'GBps', 'TBps'],
        'LOGICAL_CAPACITY': ['MB', 'GB', 'TB'],
        'LOGICAL_CHANGE_MONTH': ['MB', 'GB', 'TB'],
        'SUBSCRIBED_CAPACITY': ['MB', 'GB', 'TB'],
        'CHANGE_MONTH': ['MB', 'GB', 'TB', 'PB'],
    };
    StorageConvertPipe = StorageConvertPipe_1 = __decorate([
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
        this.mapSystemToDirectory['XP7_G11_58417'] = '01';
        this.mapSystemToDirectory['XP7_G12_58416'] = '02';
        this.mapSystemToDirectory['XP7_G13_58734'] = '03';
        this.mapSystemToDirectory['XP7_G14_10560'] = '04';
        this.mapSystemToDirectory['XP7_G15_20028'] = '05';
        this.mapSystemToDirectory['XP7_G16_20359'] = '06';
        // this.mapToDirectory[7] = '';
        this.mapSystemToDirectory['XP7_B12_58678'] = '22';
        this.mapSystemToDirectory['XP7_B13_59006'] = '23';
        this.mapSystemToDirectory['XP7_B14_10554'] = '24';
        this.mapSystemToDirectory['XP7_B15_10640'] = '25';
        this.mapSystemToDirectory['XP7_B16_11114'] = '26';
        // this.mapToDirectory[13] = '';
        this.mapSystemToDirectory['XP7_STL2_10558'] = '62';
        this.mapSystemToDirectory['XP7_CBJ2_57216'] = '41';
        this.mapSystemToDirectory['XP7_CBJ3_57222'] = '42';
        this.mapSystemToDirectory['XP7_CBJ4_20575'] = '43';
        this.mapSystemToDirectory['XP7_CBJ5_56053'] = '44';
        this.mapSystemToDirectory['XP7_AIMS1_20627'] = '81';
        this.mapSystemToDirectory['XP7_QAS1_20610'] = '51';
        this.mapSystemToDirectory['XP7_QAS2_56139'] = '52';
        // this.mapSystemToDirectory[22] = '71';
        this.mapSystemToDirectory['XP7_MEG2_20725'] = '72';
        this.mapSystemToDirectory['XP7_B17_50225'] = '27';
        this.mapSystemToDirectory['XP7_STL3_58634'] = '63';
        this.mapSystemToDirectory['XP8_G22_30738'] = '12';
        this.mapSystemToDirectory['XP8_G23_30739'] = '13';
        this.mapSystemToDirectory['XP8_G21_30759'] = '11';
        this.mapSystemToDirectory['XP8_B22_30754'] = '32';
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
        // throw new Error(`ID: ${id} not found in mapping`);
    };
    IframeUrlCreatorPipe.prototype.normalizeAnchor = function (value) {
        if (value != null) {
            return value.replace(/[#\-\s,]+/g, '_');
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    SafeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/common/utils/storage-entity-2-sasi-group-table.pipe.ts":
/*!************************************************************************!*\
  !*** ./src/app/common/utils/storage-entity-2-sasi-group-table.pipe.ts ***!
  \************************************************************************/
/*! exports provided: StorageEntity2SasiGroupTablePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageEntity2SasiGroupTablePipe", function() { return StorageEntity2SasiGroupTablePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _storage_entity_detail_2_sasi_table_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-entity-detail-2-sasi-table.pipe */ "./src/app/common/utils/storage-entity-detail-2-sasi-table.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var StorageEntity2SasiGroupTablePipe = /** @class */ (function () {
    function StorageEntity2SasiGroupTablePipe(rowPipe) {
        this.rowPipe = rowPipe;
    }
    StorageEntity2SasiGroupTablePipe.prototype.transform = function (systems, context) {
        var _this = this;
        return systems.map(function (storageEntity) {
            var row = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiGroupRow"]();
            var groupRow = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiRow"]();
            var data = storageEntity.storageEntity;
            groupRow.cells['name'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiCell"](data.name, { id: data.name, iFrameLink: context, value: data.name, dbId: data.id });
            row.groupRow = groupRow;
            row.rows = _this.rowPipe.transform(data.children, data);
            return row;
        });
    };
    StorageEntity2SasiGroupTablePipe.ctorParameters = function () { return [
        { type: _storage_entity_detail_2_sasi_table_pipe__WEBPACK_IMPORTED_MODULE_2__["StorageEntityDetail2SasiTablePipe"] }
    ]; };
    StorageEntity2SasiGroupTablePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'storageEntity2SasiGroupTable'
        }),
        __metadata("design:paramtypes", [_storage_entity_detail_2_sasi_table_pipe__WEBPACK_IMPORTED_MODULE_2__["StorageEntityDetail2SasiTablePipe"]])
    ], StorageEntity2SasiGroupTablePipe);
    return StorageEntity2SasiGroupTablePipe;
}());



/***/ }),

/***/ "./src/app/common/utils/storage-entity-detail-2-sasi-table.pipe.ts":
/*!*************************************************************************!*\
  !*** ./src/app/common/utils/storage-entity-detail-2-sasi-table.pipe.ts ***!
  \*************************************************************************/
/*! exports provided: StorageEntityDetail2SasiTablePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageEntityDetail2SasiTablePipe", function() { return StorageEntityDetail2SasiTablePipe; });
/* harmony import */ var _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var StorageEntityDetail2SasiTablePipe = /** @class */ (function () {
    function StorageEntityDetail2SasiTablePipe() {
    }
    StorageEntityDetail2SasiTablePipe.prototype.transform = function (systems, parent) {
        return systems.map(function (system) {
            var row = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_0__["SasiRow"]();
            row.cells['name'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_0__["SasiCell"](system.name, { value: system.name });
            row.cells['id'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_0__["SasiCell"](system.id, { value: system.id });
            row.cells['parentId'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_0__["SasiCell"](parent.id, { value: parent.id });
            if (system.detail !== undefined) {
                var detail = system.detail;
                row.cells['arrayModel'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_0__["SasiCell"](detail.arrayModel, { value: detail.arrayModel });
                row.cells['managementIp'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_0__["SasiCell"](detail.managementIp, { value: detail.managementIp });
                row.cells['dkc'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_0__["SasiCell"](detail.dkc, { value: detail.dkc });
                row.cells['rack'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_0__["SasiCell"](detail.rack, { value: detail.rack });
                row.cells['room'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_0__["SasiCell"](detail.room, { value: detail.room });
                row.cells['prefixReferenceId'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_0__["SasiCell"](detail.prefixReferenceId, { value: detail.prefixReferenceId });
                row.cells['serialNumber'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_0__["SasiCell"](system.serialNumber, { value: detail.serialNumber });
            }
            return row;
        });
    };
    StorageEntityDetail2SasiTablePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'StorageEntityDetail2SasiTablePipe'
        })
    ], StorageEntityDetail2SasiTablePipe);
    return StorageEntityDetail2SasiTablePipe;
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            groupRow.cells['name'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiCell"](system.name, { id: system.name, iFrameLink: context, value: system.name });
            row.groupRow = groupRow;
            row.rows = _this.rowPipe.transform(system.children, context, system.name);
            return row;
        });
    };
    SystemPool2SasiGroupTablePipe.ctorParameters = function () { return [
        { type: _system_pool_2_sasi_table_pipe__WEBPACK_IMPORTED_MODULE_2__["SystemPool2SasiTablePipe"] }
    ]; };
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




// TODO move to the global statistics module
var SystemPool2SasiTablePipe = /** @class */ (function () {
    function SystemPool2SasiTablePipe() {
    }
    SystemPool2SasiTablePipe.prototype.transform = function (systems, context, linkId) {
        var _this = this;
        return systems.map(function (system) {
            var row = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiRow"]();
            var linkIdInput = system.name;
            if (linkId != null) {
                linkIdInput = linkId;
            }
            row.cells['name'] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiCell"](system.name, { id: linkIdInput, iFrameLink: context, value: system.name });
            if (system.metrics !== undefined) {
                system.metrics.forEach(function (metric) { return row.cells[metric.type] = new _components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_1__["SasiCell"](metric.value, metric); });
            }
            if (system.children !== undefined && system.children.length > 0) {
                row.subRows = _this.transform(system.children, null, null);
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var UrlCreator = /** @class */ (function () {
    function UrlCreator() {
    }
    UrlCreator.hrefEncode = function (url) {
        return '/iframe/' + btoa(url);
    };
    UrlCreator.url = function (systemId, linkPart) {
        if (systemId !== undefined) {
            var systemPrefix = systemId.toString().length === 1 ? '0' + systemId : systemId;
            return this.hrefEncode(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].iframeBaseUrl + systemPrefix + linkPart);
        }
        return '';
    };
    return UrlCreator;
}());



/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".breadcrumb {\r\n    background: white;\r\n    font-size: 1em;\r\n    margin: 0;\r\n    height: 30px;\r\n    text-align: center;\r\n    }\r\n    a,\r\n    span {\r\n      color: grey;\r\n      margin-bottom: 5px;\r\n    }\r\n    a:hover,\r\n    span:hover {\r\n      color: black;\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n    }\r\n    li {\r\n      list-style: none;\r\n      float: left;\r\n      margin-bottom: 5px;\r\n    }\r\n    li:last-child {\r\n      margin-right: 20px;\r\n    }\r\n    li::after {\r\n      color: darkgrey;\r\n    }\r\n    ol {\r\n      margin: 0;\r\n    }\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7SUFDbEI7SUFDQTs7TUFFRSxXQUFXO01BQ1gsa0JBQWtCO0lBQ3BCO0lBQ0E7O01BRUUsWUFBWTtNQUNaLHFCQUFxQjtNQUNyQixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0Usa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxTQUFTO0lBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGEsXHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICAgIGE6aG92ZXIsXHJcbiAgICBzcGFuOmhvdmVyIHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICAgIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBsaTo6YWZ0ZXIge1xyXG4gICAgICBjb2xvcjogZGFya2dyZXk7XHJcbiAgICB9XHJcbiAgICBvbCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.ts ***!
  \***************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _common_models_datacenter_vo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/datacenter.vo */ "./src/app/common/models/datacenter.vo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, activatedRoute, metricService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.metricService = metricService;
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function () {
            _this.metricService.getDataCenters().subscribe(function (dto) {
                _this.dataCenters = dto.map(_common_models_datacenter_vo__WEBPACK_IMPORTED_MODULE_4__["Datacenter"].of);
                _this.breadcrumbs = _this.buildBreadCrumb(_this.activatedRoute.root);
            });
        });
    };
    BreadcrumbComponent.prototype.buildBreadCrumb = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var previousBreadCrumb = null;
        var newBreadcrumbs = [];
        var data = route.routeConfig && route.routeConfig.data ? route.routeConfig.data : null;
        var label = data ? data.breadcrumb : '';
        var path = data ? route.routeConfig.path : '';
        var lastRoutePart = path.split('/').pop();
        var isDynamicRoute = lastRoutePart.startsWith(':');
        if (isDynamicRoute && !!route.snapshot) {
            var splittedPart = lastRoutePart.split(':');
            var paramName = splittedPart[1];
            path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
            if (route.snapshot.params[paramName] === '-1') {
                label = 'All';
            }
            else {
                label = this.getDatacenterName(parseInt(route.snapshot.params[paramName], 10));
            }
            previousBreadCrumb = {
                label: data.breadcrumb,
                url: url + "/" + path.split('/')[0]
            };
        }
        var nextUrl = path ? url + "/" + path : url;
        var breadcrumb = {
            label: label,
            url: this.resolveUrl(data, nextUrl),
        };
        if (previousBreadCrumb) {
            newBreadcrumbs = breadcrumb.label ? breadcrumbs.concat([previousBreadCrumb, breadcrumb]) : breadcrumbs.slice();
        }
        else {
            newBreadcrumbs = breadcrumb.label ? breadcrumbs.concat([breadcrumb]) : breadcrumbs.slice();
        }
        if (route.firstChild) {
            return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
        }
        return newBreadcrumbs;
    };
    BreadcrumbComponent.prototype.getDatacenterName = function (idDatacenter) {
        var datacenterObj = this.dataCenters.find(function (datacenter) { return datacenter.id === idDatacenter; });
        if (datacenterObj === undefined) {
            return '';
        }
        return datacenterObj.label;
    };
    BreadcrumbComponent.prototype.resolveUrl = function (data, nextUrl) {
        if (data !== null && data.url !== undefined) {
            return data.url;
        }
        return nextUrl;
    };
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_3__["MetricService"] }
    ]; };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __importDefault(__webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/breadcrumb/breadcrumb.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./breadcrumb.component.css */ "./src/app/components/breadcrumb/breadcrumb.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _metric_service__WEBPACK_IMPORTED_MODULE_3__["MetricService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/charts/bar-chart/bar-chart.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/charts/bar-chart/bar-chart.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NoYXJ0cy9iYXItY2hhcnQvYmFyLWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
        this.plotOptions = {
            bar: {
                horizontal: true,
            },
        };
        this.colors = ['rgb(0, 143, 251)', 'rgb(0, 227, 150)', 'rgb(254, 176, 25)'];
        this.yaxis = {
            title: {},
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./bar-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/charts/bar-chart/bar-chart.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./bar-chart.component.css */ "./src/app/components/dashboard/charts/bar-chart/bar-chart.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NoYXJ0cy9jYXBhY2l0eS1oaXN0b3J5LWNoYXJ0L2NhcGFjaXR5LWhpc3RvcnktY2hhcnQuY29tcG9uZW50LmNzcyJ9 */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./capacity-history-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/charts/capacity-history-chart/capacity-history-chart.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./capacity-history-chart.component.css */ "./src/app/components/dashboard/charts/capacity-history-chart/capacity-history-chart.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NoYXJ0cy9oaXN0b3J5LWNoYXJ0L2hpc3RvcnktY2hhcnQuY29tcG9uZW50LmNzcyJ9 */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./history-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/charts/history-chart/history-chart.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./history-chart.component.css */ "./src/app/components/dashboard/charts/history-chart/history-chart.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NoYXJ0cy9yZWdpb24tZG9udXQvcmVnaW9uLWRvbnV0LmNvbXBvbmVudC5jc3MifQ== */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./region-donut.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/charts/region-donut/region-donut.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./region-donut.component.css */ "./src/app/components/dashboard/charts/region-donut/region-donut.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\r\n  min-height: 60px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _period_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../period.service */ "./src/app/period.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(metricService, periodService) {
        this.metricService = metricService;
        this.periodService = periodService;
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
        this.metricService.getDataCenters().subscribe(function (data) {
            _this.datacenters = new _common_models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_2__["Metric"]();
            _this.datacenters.value = data.length;
            _this.datacenters.unit = '';
            _this.registeredSystems = new _common_models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_2__["Metric"]();
            _this.registeredSystems.unit = '';
            _this.registeredSystems.value = data.reduce(function (previousValue, currentValue) {
                return previousValue + currentValue.storageEntity.children.length;
            }, 0);
        });
        this.metricService.getGraphData([_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TRANSFER, _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WORKLOAD]).subscribe(function (dto) {
            _this.perfGraphSeries = dto.data.map(function (serie) {
                return { name: serie.type, data: serie.data };
            });
        });
        this.metricService.getCapacityGraphData([
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].SUBSCRIBED_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_CAPACITY
        ]).subscribe(function (dto) {
            _this.capacityGraphSeries = dto.data.map(function (serie) {
                return { name: serie.type, data: serie.data };
            });
        });
        this.getMap();
        this.periodService.announceEnablePeriod(false);
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
        var metricsInAllRegions = [];
        regionOrder.forEach(function (region) {
            var regionData = _this.metrics.find(function (metrics) { return metrics.region === region; });
            if (regionData === undefined) {
                console.error('Cannot find ' + region + ' in capacity statistics');
                return;
            }
            var metric = _this.findMetricInRegion(regionData, type);
            metricsInAllRegions.push(metric);
        });
        return this.convertMetricsToSameUnit(metricsInAllRegions, type);
    };
    DashboardComponent.prototype.convertMetricsToSameUnit = function (metrics, metricType) {
        var _this = this;
        if (metrics.length === 0) {
            return [];
        }
        var transformer = new _common_storage_convert_pipe__WEBPACK_IMPORTED_MODULE_7__["StorageConvertPipe"]();
        var units = _common_storage_convert_pipe__WEBPACK_IMPORTED_MODULE_7__["StorageConvertPipe"].unitOrder[metricType];
        if (units === undefined) {
            return metrics.map(function (metric) { return _this.roundNumber(metric.value); });
        }
        var targetUnit = metrics.map(function (metric) { return units.findIndex(function (unit) { return unit === metric.unit; }); })
            .reduce(function (previousValue, currentValue) { return previousValue > currentValue ? previousValue : currentValue; });
        return metrics.map(function (metric) { return transformer.transform(metric, { targetedUnitIndex: targetUnit }); }).map(function (metric) { return _this.roundNumber(metric.value); });
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
        return parseFloat(value.toFixed(1));
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
    DashboardComponent.ctorParameters = function () { return [
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"] },
        { type: _period_service__WEBPACK_IMPORTED_MODULE_8__["PeriodService"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")).default]
        }),
        __metadata("design:paramtypes", [_metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"],
            _period_service__WEBPACK_IMPORTED_MODULE_8__["PeriodService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active {\r\n  background-color: rgba(30, 40, 44, 0.7);\r\n\r\n  border-bottom: 4px #1ABB9C solid;\r\n  /*box-shadow: 0 15px 15px rgba(145, 92, 182, .4);*/\r\n}\r\n\r\n.btn {\r\n  padding-bottom: 11px;\r\n  padding-top: 13px;\r\n}\r\n\r\n.sa-logo {\r\n  height: 50px;\r\n}\r\n\r\n.logo-title {\r\n  width: 200px;\r\n  margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7O0VBRXZDLGdDQUFnQztFQUNoQyxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgNDAsIDQ0LCAwLjcpO1xyXG5cclxuICBib3JkZXItYm90dG9tOiA0cHggIzFBQkI5QyBzb2xpZDtcclxuICAvKmJveC1zaGFkb3c6IDAgMTVweCAxNXB4IHJnYmEoMTQ1LCA5MiwgMTgyLCAuNCk7Ki9cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgcGFkZGluZy1ib3R0b206IDExcHg7XHJcbiAgcGFkZGluZy10b3A6IDEzcHg7XHJcbn1cclxuXHJcbi5zYS1sb2dvIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5sb2dvLXRpdGxlIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
    HeaderComponent.ctorParameters = function () { return [
        { type: _period_service__WEBPACK_IMPORTED_MODULE_2__["PeriodService"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
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
            styles: [__importDefault(__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaWZyYW1lL2lmcmFtZS5jb21wb25lbnQuY3NzIn0= */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            console.log(atob(params.get('url')));
        });
    };
    IframeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    IframeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iframe',
            template: __importDefault(__webpack_require__(/*! raw-loader!./iframe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/iframe/iframe.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./iframe.component.css */ "./src/app/components/iframe/iframe.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar-menu .treeview-menu > li > a.active, .skin-blue .sidebar-menu .treeview-menu > li > a:hover {\r\n  color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLW1lbnUgLnRyZWV2aWV3LW1lbnUgPiBsaSA+IGEuYWN0aXZlLCAuc2tpbi1ibHVlIC5zaWRlYmFyLW1lbnUgLnRyZWV2aWV3LW1lbnUgPiBsaSA+IGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
        this.storageConfigurationLinks = [];
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metricService.getDataCenters().subscribe(function (data) {
            _this.items = _this.convertMenu(data);
            _this.setDefaultDataCenter(data);
            _this.filteredItems = _this.items;
        });
    };
    SideMenuComponent.prototype.setDefaultDataCenter = function (dataCenters) {
        if (dataCenters.length > 0) {
            this.defaultDataCenter = dataCenters[0].storageEntity.id;
            this.setGlobalStatisticsLinks();
            this.setSystemConfigurationLinks();
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
            { id: 7, linkPart: "/global-statistics/latency", name: 'Latency Analysis' },
        ];
    };
    SideMenuComponent.prototype.setSystemConfigurationLinks = function () {
        this.storageConfigurationLinks = [
            { id: 1, linkPart: "/storage-config/locations", name: 'Systems by locations' },
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
            for (var _a = 0, _b = dataCenter.storageEntity.children; _a < _b.length; _a++) {
                var system = _b[_a];
                items.push(new _common_models_menu_item_vo__WEBPACK_IMPORTED_MODULE_3__["MenuItem"](system.id, system.name));
            }
            menu.push(new _common_models_menu_tree_vo__WEBPACK_IMPORTED_MODULE_1__["MenuTree"](dataCenter.storageEntity.name, items));
        }
        return menu;
    };
    SideMenuComponent.ctorParameters = function () { return [
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_2__["MetricService"] }
    ]; };
    SideMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-menu',
            template: __importDefault(__webpack_require__(/*! raw-loader!./side-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/side-menu/side-menu.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./side-menu.component.css */ "./src/app/components/side-menu/side-menu.component.css")).default]
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*** Aggregated values widget ***/\r\ndiv.agg-vals {\r\n  margin-top: 25px;\r\n}\r\ntable {\r\n  border-collapse: separate;\r\n  border-spacing: 2px 0px;\r\n  width: 100%;\r\n}\r\n.agg-value, .agg-name {\r\n  margin-right: 5px;\r\n}\r\n.agg-vals > .agg-value, .agg-names > .agg-name {\r\n  border: 1px #5C91A8 solid;\r\n  font-weight: bold;\r\n  text-align: center;\r\n\r\n}\r\n.agg-name {\r\n  background-color: #3c8dbc;\r\n  color: white;\r\n  font-size: 10px;\r\n  padding: 5px;\r\n}\r\n.agg-vals .agg-value {\r\n  padding: 5px;\r\n  font-size: 12px;\r\n  background-color: white;\r\n  /*color: white;*/\r\n}\r\n.agg-unit {\r\n  font-size: 10px;\r\n}\r\n.col-control {\r\n  width: 3.5%;\r\n  vertical-align: middle;\r\n}\r\n.col {\r\n  width: 6.66%;\r\n}\r\n.col-label {\r\n  width: 8%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvY29tcG9uZW50cy9hZ2dyZWdhdGVkLXN0YXRpc3RpY3MvYWdncmVnYXRlZC1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2NvbXBvbmVudHMvYWdncmVnYXRlZC1zdGF0aXN0aWNzL2FnZ3JlZ2F0ZWQtc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBBZ2dyZWdhdGVkIHZhbHVlcyB3aWRnZXQgKioqL1xyXG5kaXYuYWdnLXZhbHMge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAycHggMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWdnLXZhbHVlLCAuYWdnLW5hbWUge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYWdnLXZhbHMgPiAuYWdnLXZhbHVlLCAuYWdnLW5hbWVzID4gLmFnZy1uYW1lIHtcclxuICBib3JkZXI6IDFweCAjNUM5MUE4IHNvbGlkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5hZ2ctbmFtZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjOGRiYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFnZy12YWxzIC5hZ2ctdmFsdWUge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLypjb2xvcjogd2hpdGU7Ki9cclxufVxyXG5cclxuLmFnZy11bml0IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5jb2wtY29udHJvbCB7XHJcbiAgd2lkdGg6IDMuNSU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgd2lkdGg6IDYuNjYlO1xyXG59XHJcblxyXG4uY29sLWxhYmVsIHtcclxuICB3aWR0aDogOCU7XHJcbn1cclxuIl19 */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
    AggregatedStatisticsComponent.ctorParameters = function () { return [
        { type: ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] }
    ]; };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./aggregated-statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./aggregated-statistics.component.css */ "./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.css")).default]
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            data.forEach(function (system) { return system.children.forEach(function (pool) {
                var row = new _common_components_sasi_table_row_table_selected_row__WEBPACK_IMPORTED_MODULE_5__["SelectedRow"](system.name, pool.name);
                filter.push(row);
            }); });
            _this.result = average.computeSummaries(_this.transformer.transform(data, ''), filter);
            console.log(_this.result);
        }, function (error) {
            console.log(error);
            _this.result = null;
        });
        return this.result;
    };
    GlobalHostGroupCapacityComponent.ctorParameters = function () { return [
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_2__["MetricService"] },
        { type: _common_utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_3__["SystemPool2SasiGroupTablePipe"] }
    ]; };
    GlobalHostGroupCapacityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-global-host-group-capacity',
            template: __importDefault(__webpack_require__(/*! raw-loader!./aggregated-statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./aggregated-statistics.component.css */ "./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.css")).default]
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].TOTAL_SAVING_EFFECT,
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
        _this.labels[_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_2__["SystemMetricType"].TOTAL_SAVING_EFFECT] = 'Total Savings';
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
            data.forEach(function (system) { return system.children.forEach(function (pool) {
                var row = new _common_components_sasi_table_row_table_selected_row__WEBPACK_IMPORTED_MODULE_5__["SelectedRow"](system.name, pool.name);
                filter.push(row);
            }); });
            _this.result = average.computeSummaries(_this.transformer.transform(data, ''), filter);
            console.log(_this.result);
        }, function (error) {
            console.log(error);
            _this.result = null;
        });
        return this.result;
    };
    GlobalPhysicalCapacityStatisticsComponent.ctorParameters = function () { return [
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"] },
        { type: _common_utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_3__["SystemPool2SasiGroupTablePipe"] }
    ]; };
    GlobalPhysicalCapacityStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infrastructure-statistics',
            template: __importDefault(__webpack_require__(/*! raw-loader!./aggregated-statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./aggregated-statistics.component.css */ "./src/app/global-statistics/components/aggregated-statistics/aggregated-statistics.component.css")).default]
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
        _this.groupLabel.push('Subscribed');
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
            data.forEach(function (system) { return system.children.forEach(function (pool) {
                var row = new _common_components_sasi_table_row_table_selected_row__WEBPACK_IMPORTED_MODULE_4__["SelectedRow"](system.name, pool.name);
                filter.push(row);
            }); });
            _this.result = average.computeSummaries(_this.transformer.transform(data, ''), filter);
            console.log(_this.result);
        }, function (error) {
            console.log(error);
            _this.data = null;
        });
        return this.data;
    };
    GlobalLogicalStatisticsComponent.prototype.getGroupLabelByType = function (type) {
        return this.groupLabel[type] != null ? this.groupLabel[type] : null;
    };
    GlobalLogicalStatisticsComponent.ctorParameters = function () { return [
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_2__["MetricService"] },
        { type: _common_utils_system_pool_2_sasi_group_table_pipe__WEBPACK_IMPORTED_MODULE_5__["SystemPool2SasiGroupTablePipe"] }
    ]; };
    GlobalLogicalStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-global-logical-statistics',
            template: __importDefault(__webpack_require__(/*! raw-loader!./grouped-aggregated-statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggregated-statistics.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./grouped-aggragated-statistics.component.css */ "./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggragated-statistics.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*** Aggregated values widget ***/\r\ndiv.agg-vals {\r\n  margin-top: 25px;\r\n}\r\ntable {\r\n  border-collapse: separate;\r\n  border-spacing: 2px 0px;\r\n}\r\n.agg-value, .agg-name {\r\n  margin-right: 5px;\r\n}\r\n.agg-vals > .agg-value, .agg-names > .agg-name {\r\n  border: 1px #5C91A8 solid;\r\n  font-weight: bold;\r\n  text-align: center;\r\n\r\n}\r\n.agg-name {\r\n  background-color: #3c8dbc;\r\n  color: white;\r\n  font-size: 10px;\r\n  padding: 5px;\r\n}\r\n.agg-vals .agg-value {\r\n  padding: 5px;\r\n  font-size: 12px;\r\n  background-color: white;\r\n  /*color: white;*/\r\n}\r\n.agg-unit {\r\n  font-size: 10px;\r\n}\r\n.col-control {\r\n  width: 3.5%;\r\n  vertical-align: middle;\r\n}\r\n.col {\r\n  width: 6.66%;\r\n}\r\n.col-label {\r\n  width: 8%;\r\n}\r\n.col-smaller {\r\n  width: 2%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvY29tcG9uZW50cy9ncm91cGVkLWFnZ3JlZ2F0ZWQtc3RhdGlzdGljcy9ncm91cGVkLWFnZ3JhZ2F0ZWQtc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQztFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvY29tcG9uZW50cy9ncm91cGVkLWFnZ3JlZ2F0ZWQtc3RhdGlzdGljcy9ncm91cGVkLWFnZ3JhZ2F0ZWQtc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBBZ2dyZWdhdGVkIHZhbHVlcyB3aWRnZXQgKioqL1xyXG5kaXYuYWdnLXZhbHMge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAycHggMHB4O1xyXG59XHJcblxyXG4uYWdnLXZhbHVlLCAuYWdnLW5hbWUge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYWdnLXZhbHMgPiAuYWdnLXZhbHVlLCAuYWdnLW5hbWVzID4gLmFnZy1uYW1lIHtcclxuICBib3JkZXI6IDFweCAjNUM5MUE4IHNvbGlkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5hZ2ctbmFtZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjOGRiYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFnZy12YWxzIC5hZ2ctdmFsdWUge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLypjb2xvcjogd2hpdGU7Ki9cclxufVxyXG5cclxuLmFnZy11bml0IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5jb2wtY29udHJvbCB7XHJcbiAgd2lkdGg6IDMuNSU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgd2lkdGg6IDYuNjYlO1xyXG59XHJcblxyXG4uY29sLWxhYmVsIHtcclxuICB3aWR0aDogOCU7XHJcbn1cclxuXHJcbi5jb2wtc21hbGxlciB7XHJcbiAgd2lkdGg6IDIlO1xyXG59XHJcbiJdfQ== */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
        _this.groupLabel.push('Subscribed');
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
    GroupedAggregatedStatisticsComponent.ctorParameters = function () { return [
        { type: ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] }
    ]; };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./grouped-aggregated-statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggregated-statistics.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./grouped-aggragated-statistics.component.css */ "./src/app/global-statistics/components/grouped-aggregated-statistics/grouped-aggragated-statistics.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-progress-color {\r\n  background-color: #f94343;\r\n  color: white;\r\n}\r\n\r\n.formatter-wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n}\r\n\r\ndiv.progress {\r\n  /*width: 90%;*/\r\n  /*float:left;*/\r\n  padding: 0px;\r\n  border: 1px solid darkgrey;\r\n  margin: 3px auto 3px auto;\r\n  height: 20px;\r\n  min-width: 130px;\r\n  -webkit-box-flex: 2;\r\n          flex-grow: 2;\r\n}\r\n\r\ndiv.progress-bar {\r\n  text-align: center;\r\n}\r\n\r\n.progress-value {\r\n  float: left;\r\n  position: absolute;\r\n  width: 100%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  font-weight: bolder;\r\n\r\n}\r\n\r\n.component-name, .absolute-value-badge {\r\n  margin: 2px 0 3px 0;\r\n  -webkit-box-flex: 1;\r\n          flex-grow: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy9hZGFwdGVyLWRpc2JhbGFuY2UtZm9ybWF0dGVyL2FkYXB0ZXItZGlzYmFsYW5jZS1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBNkI7VUFBN0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFZO1VBQVosWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFZO1VBQVosWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy9hZGFwdGVyLWRpc2JhbGFuY2UtZm9ybWF0dGVyL2FkYXB0ZXItZGlzYmFsYW5jZS1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1wcm9ncmVzcy1jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NDM0MztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtYXR0ZXItd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuZGl2LnByb2dyZXNzIHtcclxuICAvKndpZHRoOiA5MCU7Ki9cclxuICAvKmZsb2F0OmxlZnQ7Ki9cclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XHJcbiAgbWFyZ2luOiAzcHggYXV0byAzcHggYXV0bztcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWluLXdpZHRoOiAxMzBweDtcclxuICBmbGV4LWdyb3c6IDI7XHJcbn1cclxuXHJcbmRpdi5wcm9ncmVzcy1iYXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2dyZXNzLXZhbHVlIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblxyXG59XHJcblxyXG4uY29tcG9uZW50LW5hbWUsIC5hYnNvbHV0ZS12YWx1ZS1iYWRnZSB7XHJcbiAgbWFyZ2luOiAycHggMCAzcHggMDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuIl19 */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./adapter-disbalance-formatter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./adapter-disbalance-formatter.component.css */ "./src/app/global-statistics/formatters/adapter-disbalance-formatter/adapter-disbalance-formatter.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {\r\n  font-size: 11px;\r\n}\r\n\r\n.text-alert-yellow {\r\n  color: #ffd829;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy9hbGVydC1mb3JtYXR0ZXIvYWxlcnQtZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2Zvcm1hdHRlcnMvYWxlcnQtZm9ybWF0dGVyL2FsZXJ0LWZvcm1hdHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaSB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4udGV4dC1hbGVydC15ZWxsb3cge1xyXG4gIGNvbG9yOiAjZmZkODI5O1xyXG59XHJcbiJdfQ== */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./alert-formatter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./alert-formatter.component.css */ "./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".metric-value {\r\n  font-style: italic;\r\n  font-weight: normal !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy9lbXBoLWZvcm1hdHRlci9lbXBoLWZvcm1hdHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2Zvcm1hdHRlcnMvZW1waC1mb3JtYXR0ZXIvZW1waC1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXRyaWMtdmFsdWUge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./emph-formatter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/emph-formatter/emph-formatter.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./emph-formatter.component.css */ "./src/app/global-statistics/formatters/emph-formatter/emph-formatter.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2Zvcm1hdHRlcnMvZW1wdHktZm9ybWF0dGVyL2VtcHR5LWZvcm1hdHRlci5jb21wb25lbnQuY3NzIn0= */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./empty-formatter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./empty-formatter.component.css */ "./src/app/global-statistics/formatters/empty-formatter/empty-formatter.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2Zvcm1hdHRlcnMvcG9ydC1kaXNiYWxhbmNlLWZvcm1hdHRlci9wb3J0LWRpc2JhbGFuY2UtZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MifQ== */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./port-disbalance-formatter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./port-disbalance-formatter.component.css */ "./src/app/global-statistics/formatters/port-disbalance-formatter/port-disbalance-formatter.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-alert-yellow {\r\n  color: #ffd829;\r\n}\r\n\r\n.metric-value {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy9zaW1wbGUtZm9ybWF0dGVyL3NpbXBsZS1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy9mb3JtYXR0ZXJzL3NpbXBsZS1mb3JtYXR0ZXIvc2ltcGxlLWZvcm1hdHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYWxlcnQteWVsbG93IHtcclxuICBjb2xvcjogI2ZmZDgyOTtcclxufVxyXG5cclxuLm1ldHJpYy12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuIl19 */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./simple-formatter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./simple-formatter.component.css */ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2Zvcm1hdHRlcnMvdGV4dC1mb3JtYXR0ZXIvdGV4dC1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJ9 */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./text-formatter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/text-formatter/text-formatter.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./text-formatter.component.css */ "./src/app/global-statistics/formatters/text-formatter/text-formatter.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2Zvcm1hdHRlcnMvdGllci1mb3JtYXR0ZXIvdGllci1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcyJ9 */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./tier-formatter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./tier-formatter.component.css */ "./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".metric-value {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy90aW1lLWZvcm1hdHRlci90aW1lLWZvcm1hdHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy90aW1lLWZvcm1hdHRlci90aW1lLWZvcm1hdHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1ldHJpYy12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuIl19 */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./time-formatter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/time-formatter/time-formatter.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./time-formatter.component.css */ "./src/app/global-statistics/formatters/time-formatter/time-formatter.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".peak {\r\n  display: block;\r\n  font-size: 12px;\r\n  font-style: italic;\r\n}\r\n\r\n.peak i, .metric-value i {\r\n  margin-right: 5px;\r\n}\r\n\r\n.peak i {\r\n  padding: 0px;\r\n  /*border-top-width: 1px;*/\r\n  /*border-top-style: solid;*/\r\n  font-size: 12px;\r\n}\r\n\r\n.metric-value {\r\n  display: block;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  /*border-bottom: 2px #00c0ef solid;*/\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.text-alert {\r\n  /*color: #900020;*/\r\n  color: #db8b0b;\r\n}\r\n\r\n.metric-value .metric-unit {\r\n  font-size: 10px;\r\n}\r\n\r\n.peak .metric-unit {\r\n  font-size: 9px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZm9ybWF0dGVycy91bml0LWZvcm1hdHRlci91bml0LWZvcm1hdHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy9mb3JtYXR0ZXJzL3VuaXQtZm9ybWF0dGVyL3VuaXQtZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVhayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnBlYWsgaSwgLm1ldHJpYy12YWx1ZSBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnBlYWsgaSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC8qYm9yZGVyLXRvcC13aWR0aDogMXB4OyovXHJcbiAgLypib3JkZXItdG9wLXN0eWxlOiBzb2xpZDsqL1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm1ldHJpYy12YWx1ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLypib3JkZXItYm90dG9tOiAycHggIzAwYzBlZiBzb2xpZDsqL1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuLnRleHQtYWxlcnQge1xyXG4gIC8qY29sb3I6ICM5MDAwMjA7Ki9cclxuICBjb2xvcjogI2RiOGIwYjtcclxufVxyXG5cclxuLm1ldHJpYy12YWx1ZSAubWV0cmljLXVuaXQge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLnBlYWsgLm1ldHJpYy11bml0IHtcclxuICBmb250LXNpemU6IDlweDtcclxufVxyXG4iXX0= */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./unit-formatter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./unit-formatter.component.css */ "./src/app/global-statistics/formatters/unit-formatter/unit-formatter.component.css")).default]
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
/* harmony import */ var _views_block_size_latency_block_size_latency_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/block-size-latency/block-size-latency.component */ "./src/app/global-statistics/views/block-size-latency/block-size-latency.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










var routes = [
    {
        path: 'global-statistics/latency',
        component: _views_block_size_latency_block_size_latency_component__WEBPACK_IMPORTED_MODULE_9__["BlockSizeLatencyComponent"],
        data: {
            breadcrumb: 'Workload Structure'
        }
    },
    {
        path: 'global-statistics',
        component: _global_statistics_component__WEBPACK_IMPORTED_MODULE_2__["GlobalStatisticsComponent"], data: {
            breadcrumb: 'Global Statistics',
            url: '/'
        },
        children: [
            {
                path: 'performance/:id',
                component: _views_performance_statistics_performance_statistics_component__WEBPACK_IMPORTED_MODULE_3__["PerformanceStatisticsComponent"],
                data: {
                    breadcrumb: 'Performance Statistics'
                }
            },
            {
                path: 'performance',
                redirectTo: 'performance/-1',
                pathMatch: 'full'
            },
            {
                path: 'physical-capacity/:id',
                component: _views_physical_capacity_statistics_physical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_7__["PhysicalCapacityStatisticsComponent"],
                data: {
                    breadcrumb: 'Physical Capacity'
                }
            },
            {
                path: 'physical-capacity',
                redirectTo: 'physical-capacity/-1',
                pathMatch: 'full'
            },
            {
                path: 'logical-capacity/:id',
                component: _views_logical_capacity_statistics_logical_capacity_statistics_component__WEBPACK_IMPORTED_MODULE_6__["LogicalCapacityStatisticsComponent"],
                data: {
                    breadcrumb: 'Logical Capacity'
                }
            },
            {
                path: 'logical-capacity',
                redirectTo: 'logical-capacity/-1',
                pathMatch: 'full'
            },
            {
                path: 'dp-sla/:id',
                component: _views_dp_sla_dp_sla_component__WEBPACK_IMPORTED_MODULE_4__["DpSlaComponent"],
                data: {
                    breadcrumb: 'SLA Events'
                }
            },
            {
                path: 'dp-sla',
                redirectTo: 'dp-sla/-1',
                pathMatch: 'full'
            },
            {
                path: 'adapters/:id',
                component: _views_adapters_adapters_component__WEBPACK_IMPORTED_MODULE_5__["AdaptersComponent"],
                data: {
                    breadcrumb: 'CHA & Port Imbalances '
                }
            },
            {
                path: 'adapters',
                redirectTo: 'adapters/-1',
                pathMatch: 'full'
            },
            {
                path: 'host-group-capacity/:id',
                component: _views_host_groups_capacity_host_groups_capacity_component__WEBPACK_IMPORTED_MODULE_8__["HostGroupsCapacityComponent"],
                data: {
                    breadcrumb: 'VMWare Capacity'
                }
            },
            {
                path: 'host-group-capacity',
                redirectTo: 'host-group-capacity/-1',
                pathMatch: 'full',
                data: {
                    breadcrumb: ' '
                }
            }
        ]
    },
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/****** Behavior *****/\r\ndiv.collapsed ~ div.collapsable {\r\n  display: none;\r\n}\r\ndiv.table-header > div.col.highlightColumn {\r\n  -webkit-text-decoration: #334369 underline;\r\n          text-decoration: #334369 underline;\r\n}\r\n.table-data.row:hover, .table-data .highlightColumn {\r\n  background-color: #b4d1ee !important;\r\n  color: #3A738C;\r\n}\r\n.selectedRow {\r\n  background-color: #BEECD1 !important;\r\n  color: #3A738C;\r\n}\r\n/*** Layout table ***/\r\n.col-control {\r\n  width: 3.5%;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.col {\r\n  /*width: 13.33%;*/\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.col-label {\r\n  width: 13%;\r\n  display: inline-block;\r\n  /*width: 100%;*/\r\n}\r\n.capacity-table .row {\r\n  margin-right: 0px;\r\n  margin-left: 0px;\r\n}\r\n/*** Table header ***/\r\ndiv.table-header {\r\n  border: 3px #EAEAEA solid;\r\n  background-color: #3C8CBC;\r\n  font-size: 13px;\r\n  color: white;\r\n  font-weight: bolder;\r\n}\r\ndiv.table-header > div {\r\n  border-right: 1px #EAEAEA solid;\r\n  padding: 10px 0px 10px 0px;\r\n}\r\ndiv.table-header > div {\r\n  text-align: center;\r\n}\r\ndiv.table-header > div.col-control {\r\n  color: #333;\r\n}\r\n.table-group-header > div.table-group-label.row > div[class^=\"col\"],\r\n.table-group-header > div.table-group-label.row > div.ignore > div {\r\n  text-align: center;\r\n  border-right: 1px #EAEAEA solid;\r\n  margin: 2px 0px 2px 0px;\r\n  /*display: inline-block;*/\r\n  float: left;\r\n}\r\n/**** Data group header ****/\r\n.table-group-header > .table-group-label,\r\n.table-data {\r\n  border-left: 3px solid #EAEAEA;\r\n  border-right: 3px solid #EAEAEA;\r\n}\r\ndiv.table-group-header {\r\n  margin-bottom: 5px;\r\n}\r\n.table-group-header > div:first-child {\r\n  /*background-color: #BBD9E6;*/\r\n  color: #35516A;\r\n  /*padding: 10px 0px 10px 0px;*/\r\n  border-top: 3px solid #EAEAEA;\r\n  border-bottom: 3px solid #EAEAEA;\r\n  /*margin-top: 10px;*/\r\n}\r\n.table-group-header > div:first-child > div.col:last-child {\r\n  border-right: none;\r\n}\r\n/**** Table data ****/\r\n.table-data:last-child {\r\n  /*margin: 10px 0px 10px 0px;*/\r\n  border-bottom: 3px solid #EAEAEA;\r\n}\r\ndiv.table-data.striped-row:nth-of-type(odd) {\r\n  background-color: #f3f8fa;\r\n}\r\n.table-data > div {\r\n  text-align: center;\r\n  border-right: 1px #EAEAEA solid;\r\n  margin: 2px 0px 2px 0px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin: auto;\r\n}\r\n.table-data > div i {\r\n  margin-top: 0.1em;\r\n}\r\n/*div.col-control {*/\r\n/*min-height: 1px;*/\r\n/*}*/\r\n.col-control i {\r\n  font-size: 11px;\r\n  padding: 3px;\r\n}\r\n.table-header .col-control i, .table-header i {\r\n  color: white\r\n}\r\n.col-control:after {\r\n  content: \"\";\r\n  font-size: 11px;\r\n  padding: 3px;\r\n}\r\ndiv.sticky {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  bottom: 0px;\r\n  z-index: 10;\r\n}\r\n.expand-collapse {\r\n  padding-right: 15px;\r\n}\r\n.expand-collapse:hover {\r\n  color: #5C91A8;\r\n  font-size: 17px;\r\n}\r\n.system-name {\r\n  font-size: 14px;\r\n  -webkit-text-decoration: #0b3e6f underline;\r\n          text-decoration: #0b3e6f underline;\r\n  font-weight: 600;\r\n}\r\ndiv.no-border {\r\n  border-right: 0px !important;\r\n}\r\n.global-stats {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3MvZ2xvYmFsLXN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLDBDQUFrQztVQUFsQyxrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBRUEscUJBQXFCO0FBRXJCO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUEsNEJBQTRCO0FBQzVCOztFQUVFLDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFDakM7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsSUFBSTtBQUVKO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0U7QUFDRjtBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLDBDQUFrQztVQUFsQyxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL2dsb2JhbC1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqIEJlaGF2aW9yICoqKioqL1xyXG5kaXYuY29sbGFwc2VkIH4gZGl2LmNvbGxhcHNhYmxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5kaXYudGFibGUtaGVhZGVyID4gZGl2LmNvbC5oaWdobGlnaHRDb2x1bW4ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogIzMzNDM2OSB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50YWJsZS1kYXRhLnJvdzpob3ZlciwgLnRhYmxlLWRhdGEgLmhpZ2hsaWdodENvbHVtbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0ZDFlZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjM0E3MzhDO1xyXG59XHJcblxyXG4uc2VsZWN0ZWRSb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCRUVDRDEgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzNBNzM4QztcclxufVxyXG5cclxuLyoqKiBMYXlvdXQgdGFibGUgKioqL1xyXG4uY29sLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAzLjUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uY29sIHtcclxuICAvKndpZHRoOiAxMy4zMyU7Ki9cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmNvbC1sYWJlbCB7XHJcbiAgd2lkdGg6IDEzJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLyp3aWR0aDogMTAwJTsqL1xyXG59XHJcblxyXG4uY2FwYWNpdHktdGFibGUgLnJvdyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLyoqKiBUYWJsZSBoZWFkZXIgKioqL1xyXG5cclxuZGl2LnRhYmxlLWhlYWRlciB7XHJcbiAgYm9yZGVyOiAzcHggI0VBRUFFQSBzb2xpZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0M4Q0JDO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuZGl2LnRhYmxlLWhlYWRlciA+IGRpdiB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggI0VBRUFFQSBzb2xpZDtcclxuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcclxufVxyXG5cclxuZGl2LnRhYmxlLWhlYWRlciA+IGRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5kaXYudGFibGUtaGVhZGVyID4gZGl2LmNvbC1jb250cm9sIHtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLnRhYmxlLWdyb3VwLWhlYWRlciA+IGRpdi50YWJsZS1ncm91cC1sYWJlbC5yb3cgPiBkaXZbY2xhc3NePVwiY29sXCJdLFxyXG4udGFibGUtZ3JvdXAtaGVhZGVyID4gZGl2LnRhYmxlLWdyb3VwLWxhYmVsLnJvdyA+IGRpdi5pZ25vcmUgPiBkaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmlnaHQ6IDFweCAjRUFFQUVBIHNvbGlkO1xyXG4gIG1hcmdpbjogMnB4IDBweCAycHggMHB4O1xyXG4gIC8qZGlzcGxheTogaW5saW5lLWJsb2NrOyovXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi8qKioqIERhdGEgZ3JvdXAgaGVhZGVyICoqKiovXHJcbi50YWJsZS1ncm91cC1oZWFkZXIgPiAudGFibGUtZ3JvdXAtbGFiZWwsXHJcbi50YWJsZS1kYXRhIHtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNFQUVBRUE7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI0VBRUFFQTtcclxufVxyXG5cclxuZGl2LnRhYmxlLWdyb3VwLWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4udGFibGUtZ3JvdXAtaGVhZGVyID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAvKmJhY2tncm91bmQtY29sb3I6ICNCQkQ5RTY7Ki9cclxuICBjb2xvcjogIzM1NTE2QTtcclxuICAvKnBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4OyovXHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNFQUVBRUE7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNFQUVBRUE7XHJcbiAgLyptYXJnaW4tdG9wOiAxMHB4OyovXHJcbn1cclxuXHJcbi50YWJsZS1ncm91cC1oZWFkZXIgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXYuY29sOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLyoqKiogVGFibGUgZGF0YSAqKioqL1xyXG4udGFibGUtZGF0YTpsYXN0LWNoaWxkIHtcclxuICAvKm1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7Ki9cclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0VBRUFFQTtcclxufVxyXG5cclxuZGl2LnRhYmxlLWRhdGEuc3RyaXBlZC1yb3c6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjhmYTtcclxufVxyXG5cclxuLnRhYmxlLWRhdGEgPiBkaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmlnaHQ6IDFweCAjRUFFQUVBIHNvbGlkO1xyXG4gIG1hcmdpbjogMnB4IDBweCAycHggMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnRhYmxlLWRhdGEgPiBkaXYgaSB7XHJcbiAgbWFyZ2luLXRvcDogMC4xZW07XHJcbn1cclxuXHJcbi8qZGl2LmNvbC1jb250cm9sIHsqL1xyXG4vKm1pbi1oZWlnaHQ6IDFweDsqL1xyXG4vKn0qL1xyXG5cclxuLmNvbC1jb250cm9sIGkge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi50YWJsZS1oZWFkZXIgLmNvbC1jb250cm9sIGksIC50YWJsZS1oZWFkZXIgaSB7XHJcbiAgY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbi5jb2wtY29udHJvbDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG5kaXYuc3RpY2t5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uZXhwYW5kLWNvbGxhcHNlIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uZXhwYW5kLWNvbGxhcHNlOmhvdmVyIHtcclxuICBjb2xvcjogIzVDOTFBODtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5zeXN0ZW0tbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogIzBiM2U2ZiB1bmRlcmxpbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuZGl2Lm5vLWJvcmRlciB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdsb2JhbC1zdGF0cyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4iXX0= */");

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var GlobalStatisticsComponent = /** @class */ (function () {
    function GlobalStatisticsComponent(metricService, bus) {
        this.metricService = metricService;
        this.bus = bus;
        this.dataCenters = [];
    }
    GlobalStatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bus.datacenterAnnouncement$.subscribe(function (id) { return _this.getDataCenters(id); });
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
    GlobalStatisticsComponent.prototype.getDataCenters = function (currentTab) {
        var _this = this;
        this.metricService.getDataCenters().subscribe(function (data) {
            _this.dataCenters = [];
            var defaultDatacenter = new _common_models_datacenter_vo__WEBPACK_IMPORTED_MODULE_1__["Datacenter"]();
            defaultDatacenter.label = 'All';
            defaultDatacenter.id = -1;
            _this.dataCenters.push(defaultDatacenter);
            _this.dataCenters = _this.dataCenters.concat(data.map(_common_models_datacenter_vo__WEBPACK_IMPORTED_MODULE_1__["Datacenter"].of));
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
    GlobalStatisticsComponent.ctorParameters = function () { return [
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_2__["MetricService"] },
        { type: _bus_service__WEBPACK_IMPORTED_MODULE_3__["BusService"] }
    ]; };
    GlobalStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-global-statistics',
            template: __importDefault(__webpack_require__(/*! raw-loader!./global-statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/global-statistics.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")).default]
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
/* harmony import */ var _views_block_size_latency_block_size_latency_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/block-size-latency/block-size-latency.component */ "./src/app/global-statistics/views/block-size-latency/block-size-latency.component.ts");
/* harmony import */ var _views_block_size_latency_bubble_chart_bubble_chart_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/block-size-latency/bubble-chart/bubble-chart.component */ "./src/app/global-statistics/views/block-size-latency/bubble-chart/bubble-chart.component.ts");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
/* harmony import */ var _views_block_size_latency_filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/block-size-latency/filter-list/filter-list.component */ "./src/app/global-statistics/views/block-size-latency/filter-list/filter-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
/* harmony import */ var _views_block_size_latency_bubble_chart_xaxis_xaxis_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./views/block-size-latency/bubble-chart/xaxis/xaxis.component */ "./src/app/global-statistics/views/block-size-latency/bubble-chart/xaxis/xaxis.component.ts");
/* harmony import */ var _views_block_size_latency_bubble_chart_yaxis_yaxis_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./views/block-size-latency/bubble-chart/yaxis/yaxis.component */ "./src/app/global-statistics/views/block-size-latency/bubble-chart/yaxis/yaxis.component.ts");
/* harmony import */ var _views_block_size_latency_bubble_chart_legend_legend_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./views/block-size-latency/bubble-chart/legend/legend.component */ "./src/app/global-statistics/views/block-size-latency/bubble-chart/legend/legend.component.ts");
/* harmony import */ var _views_block_size_latency_bubble_chart_popup_data_popup_data_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./views/block-size-latency/bubble-chart/popup-data/popup-data.component */ "./src/app/global-statistics/views/block-size-latency/bubble-chart/popup-data/popup-data.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
                _formatters_empty_formatter_empty_formatter_component__WEBPACK_IMPORTED_MODULE_27__["EmptyFormatterComponent"],
                _views_block_size_latency_block_size_latency_component__WEBPACK_IMPORTED_MODULE_28__["BlockSizeLatencyComponent"],
                _views_block_size_latency_bubble_chart_bubble_chart_component__WEBPACK_IMPORTED_MODULE_29__["BubbleChartComponent"],
                _views_block_size_latency_filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_31__["FilterListComponent"],
                _views_block_size_latency_bubble_chart_xaxis_xaxis_component__WEBPACK_IMPORTED_MODULE_34__["XaxisComponent"],
                _views_block_size_latency_bubble_chart_yaxis_yaxis_component__WEBPACK_IMPORTED_MODULE_35__["YaxisComponent"],
                _views_block_size_latency_bubble_chart_legend_legend_component__WEBPACK_IMPORTED_MODULE_36__["LegendComponent"],
                _views_block_size_latency_bubble_chart_popup_data_popup_data_component__WEBPACK_IMPORTED_MODULE_37__["PopupDataComponent"]
            ],
            exports: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _global_statistics_routing_module__WEBPACK_IMPORTED_MODULE_5__["GlobalStatisticsRoutingModule"],
                _common_sa_common_module__WEBPACK_IMPORTED_MODULE_6__["SaCommonModule"],
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
                ng_apexcharts__WEBPACK_IMPORTED_MODULE_30__["NgApexchartsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_33__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormsModule"]
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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

/***/ "./src/app/global-statistics/utils/metric-handler.utils.ts":
/*!*****************************************************************!*\
  !*** ./src/app/global-statistics/utils/metric-handler.utils.ts ***!
  \*****************************************************************/
/*! exports provided: MetricHandlerUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricHandlerUtils", function() { return MetricHandlerUtils; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var MetricHandlerUtils = /** @class */ (function () {
    function MetricHandlerUtils() {
    }
    MetricHandlerUtils.success = function (data) {
        return data.reduce(function (previousValue, currentValue) { return previousValue.concat(currentValue.children); }, []);
    };
    MetricHandlerUtils.error = function (error) {
        console.log(error);
        return [];
    };
    return MetricHandlerUtils;
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


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
        if (value === null || value === undefined) {
            return;
        }
        if (this.values[type] === undefined) {
            var metric = new _common_models_metrics_metric_vo__WEBPACK_IMPORTED_MODULE_1__["Metric"]();
            metric.type = type;
            metric.unit = unit;
            metric.value = 0;
            this.setMetric(type, metric);
        }
        else {
            if (this.values[type].unit === null && unit != null) {
                this.values[type].unit = unit;
            }
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
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY, sasiRow, _this.partiallySummarizedValues);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].SUBSCRIBED_CAPACITY, sasiRow, _this.partiallySummarizedValues);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_CAPACITY, sasiRow, _this.partiallySummarizedValues);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].AVAILABLE_CAPACITY, sasiRow, _this.partiallySummarizedValues);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED, sasiRow, _this.partiallySummarizedValues);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_FREE, sasiRow, _this.partiallySummarizedValues);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED, sasiRow, _this.partiallySummarizedValues);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_FREE, sasiRow, _this.partiallySummarizedValues);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_TOTAL, sasiRow, _this.partiallySummarizedValues);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED, sasiRow, _this.partiallySummarizedValues);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_FREE, sasiRow, _this.partiallySummarizedValues);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC, sasiRow, _this.partiallySummarizedValues, physicalCapacity);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_SUBS_PERC, sasiRow, _this.partiallySummarizedValues, physicalCapacity);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_SUBS_PERC, sasiRow, _this.partiallySummarizedValues, physicalCapacity);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED_PERC, sasiRow, _this.partiallySummarizedValues, physicalCapacity);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED_PERC, sasiRow, _this.partiallySummarizedValues, physicalCapacity);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED_PERC, sasiRow, _this.partiallySummarizedValues, netTotal);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO, sasiRow, _this.partiallySummarizedValues, physicalCapacity, 0);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1D, sasiRow, _this.partiallySummarizedValues);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1W, sasiRow, _this.partiallySummarizedValues);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1M, sasiRow, _this.partiallySummarizedValues);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].DEDUP_RATIO, sasiRow, _this.partiallySummarizedValues, physicalCapacity, 0);
            _this.setPartialValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].TOTAL_SAVING_EFFECT, sasiRow, _this.partiallySummarizedValues, physicalCapacity, 1);
        });
        var result = this.summarizeStats(this.partiallySummarizedValues, 'all');
        result.setValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].SELECTED_COUNT, amendFilter.length, '');
        return result;
    };
    SasiWeightedArithmeticMeanUtils.prototype.summarizeStats = function (values, name) {
        var summarizedValues = new SystemAggregatedStatistics(name);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].SUBSCRIBED_CAPACITY, values, summarizedValues);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY, values, summarizedValues);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_CAPACITY, values, summarizedValues);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].AVAILABLE_CAPACITY, values, summarizedValues);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED, values, summarizedValues);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_FREE, values, summarizedValues);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED, values, summarizedValues);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_FREE, values, summarizedValues);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_TOTAL, values, summarizedValues);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED, values, summarizedValues);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_FREE, values, summarizedValues);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1D, values, summarizedValues);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1W, values, summarizedValues);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].CAPACITY_CHANGE_1M, values, summarizedValues);
        var physicalCapacitySummarized = this.getSafeValue(summarizedValues.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_CAPACITY));
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_SUBS_PERC, values, summarizedValues, physicalCapacitySummarized);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_SUBS_PERC, values, summarizedValues, physicalCapacitySummarized);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_SUBS_PERC, values, summarizedValues, physicalCapacitySummarized);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].LOGICAL_USED_PERC, values, summarizedValues, physicalCapacitySummarized);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].PHYSICAL_USED_PERC, values, summarizedValues, physicalCapacitySummarized);
        var netTotalSummarized = this.getSafeValue(summarizedValues.getValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_TOTAL));
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].NET_USED_PERC, values, summarizedValues, netTotalSummarized);
        var compRatio = (this.physicalCapacityCompRatio === 0 ? 1 : this.physicalCapacityCompRatio);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO, values, summarizedValues, compRatio);
        var dedupRatio = (this.physicalCapacityDedupRatio === 0 ? 1 : this.physicalCapacityDedupRatio);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].DEDUP_RATIO, values, summarizedValues, dedupRatio);
        var totalSaving = (this.physicalCapacityTotalSaving === 0 ? 1 : this.physicalCapacityTotalSaving);
        this.setSummarizeValue(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].TOTAL_SAVING_EFFECT, values, summarizedValues, totalSaving);
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
    SasiWeightedArithmeticMeanUtils.prototype.setPartialValue = function (metricType, values, summarizeValue, meanValue, minimalValue) {
        if (meanValue === void 0) { meanValue = 1; }
        if (minimalValue === void 0) { minimalValue = null; }
        var metric = this.getMetricByName(values, metricType);
        var computedValue = 0;
        if (metric !== null) {
            if (minimalValue === null || metric.value > minimalValue) {
                if (metricType === _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].COMPRESS_RATIO) {
                    this.physicalCapacityCompRatio += meanValue;
                }
                if (metricType === _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].DEDUP_RATIO) {
                    this.physicalCapacityDedupRatio += meanValue;
                }
                if (metricType === _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_0__["SystemMetricType"].TOTAL_SAVING_EFFECT) {
                    this.physicalCapacityTotalSaving += meanValue;
                }
                computedValue = Number(metric.value) * meanValue;
            }
            else {
                computedValue = 0;
            }
            summarizeValue.setValue(metricType, computedValue, metric.rawData.unit);
        }
    };
    SasiWeightedArithmeticMeanUtils.prototype.setSummarizeValue = function (metricType, values, summarizedValue, meanValue) {
        if (meanValue === void 0) { meanValue = null; }
        var metric = values.getValue(metricType);
        if (metric !== undefined) {
            if (meanValue != null) {
                summarizedValue.setValue(metricType, metric.value / meanValue, metric.unit);
            }
            else {
                summarizedValue.setValue(metricType, metric.value, metric.unit);
            }
        }
    };
    SasiWeightedArithmeticMeanUtils.prototype.getSafeValue = function (metric) {
        if (metric === undefined) {
            return 0;
        }
        return metric.value;
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col {\r\n  width: 35.75% !important;\r\n}\r\n\r\n.col-label {\r\n  width: 25% !important;\r\n}\r\n\r\n.sorting {\r\n  font-size: 13px;\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n}\r\n\r\n:host /deep/ .groupped-data .metric-value {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n:host /deep/ .aggregated-data .metric-value {\r\n  font-style: italic;\r\n  font-weight: 600;\r\n}\r\n\r\n:host /deep/ .groupped-data .metric-unit {\r\n  font-size: 8px;\r\n  margin-left: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvYWRhcHRlcnMvYWRhcHRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBd0I7VUFBeEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy92aWV3cy9hZGFwdGVycy9hZGFwdGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbCB7XHJcbiAgd2lkdGg6IDM1Ljc1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sLWxhYmVsIHtcclxuICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zb3J0aW5nIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmdyb3VwcGVkLWRhdGEgLm1ldHJpYy12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuYWdncmVnYXRlZC1kYXRhIC5tZXRyaWMtdmFsdWUge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmdyb3VwcGVkLWRhdGEgLm1ldHJpYy11bml0IHtcclxuICBmb250LXNpemU6IDhweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/metric-handler.utils */ "./src/app/global-statistics/utils/metric-handler.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            .withColumnTooltipText('Count of Channel Adapater Pair imbalances. Treshold definition = 10% imbalance AND 20MB/s')
            .withComponent(_formatters_adapter_disbalance_formatter_adapter_disbalance_formatter_component__WEBPACK_IMPORTED_MODULE_14__["AdapterDisbalanceFormatterComponent"])
            .withAggComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_12__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            // .withColumnWidth('12')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].PORT_IMBALANCE_EVENTS)
            .withLabel('Port Imbalances')
            .withColumnTooltipText('Count of FE Port Pair Imbalances. Treshold definition = 10% imbalance AND 20MB/s')
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
        this.options.sortColumnName = 'name';
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
            if (_this.currentPeriod !== period) {
                _this.currentPeriod = period;
                _this.getTableData(_this.currentDataCenterId);
            }
        });
        this.periodService.announceEnablePeriod(true);
        this.periodService.announcePeriod(this.currentPeriod);
    };
    AdaptersComponent.prototype.ngOnDestroy = function () {
        this.periodService.announceEnablePeriod(false);
    };
    AdaptersComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.currentDataCenterId = id;
        this.metricService.getAdaptersStatistics(id, this.currentPeriod).subscribe(function (data) {
            _this.data = _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_16__["MetricHandlerUtils"].success(data);
            // TODO change this filtering. checking first metric for non-null is not good, and make it as some named function for readability
            _this.data.forEach(function (system) { return system.children.forEach(function (pool) { return pool.children = pool.children.filter(function (port) { return port.metrics.length > 0 && port.metrics[0].value > 0; }); }); });
            _this.data.forEach(function (system) { return system.children = system.children.filter(function (pool) { return (pool.metrics.length > 0 && pool.metrics[0].value > 0) || pool.children.length > 0; }); });
        }, function (error) { return _this.data = _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_16__["MetricHandlerUtils"].error(error); });
        return this.data;
    };
    AdaptersComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _period_service__WEBPACK_IMPORTED_MODULE_2__["PeriodService"] },
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_3__["MetricService"] },
        { type: _bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"] }
    ]; };
    AdaptersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adapters',
            template: __importDefault(__webpack_require__(/*! raw-loader!./adapters.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/adapters/adapters.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./adapters.component.css */ "./src/app/global-statistics/views/adapters/adapters.component.css")).default, __importDefault(__webpack_require__(/*! ../../global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")).default]
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

/***/ "./src/app/global-statistics/views/block-size-latency/block-size-latency.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/block-size-latency.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\r\n  /*width: 100%;*/\r\n  border-right-width: 2px;\r\n}\r\nbutton.disabled:hover {\r\n  cursor: pointer !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvYmxvY2stc2l6ZS1sYXRlbmN5L2Jsb2NrLXNpemUtbGF0ZW5jeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvYmxvY2stc2l6ZS1sYXRlbmN5L2Jsb2NrLXNpemUtbGF0ZW5jeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAvKndpZHRoOiAxMDAlOyovXHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAycHg7XHJcbn1cclxuYnV0dG9uLmRpc2FibGVkOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/global-statistics/views/block-size-latency/block-size-latency.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/block-size-latency.component.ts ***!
  \********************************************************************************************/
/*! exports provided: BlockSizeLatencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSizeLatencyComponent", function() { return BlockSizeLatencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _filter_list_data_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-list-data.utils */ "./src/app/global-statistics/views/block-size-latency/filter-list-data.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var Quadrant;
(function (Quadrant) {
    Quadrant[Quadrant["ONE"] = 0] = "ONE";
    Quadrant[Quadrant["TWO"] = 1] = "TWO";
    Quadrant[Quadrant["THREE"] = 2] = "THREE";
    Quadrant[Quadrant["FOUR"] = 3] = "FOUR";
})(Quadrant || (Quadrant = {}));
var BlockSizeLatencyComponent = /** @class */ (function () {
    function BlockSizeLatencyComponent(metricService) {
        this.metricService = metricService;
        this.latencies = [];
        this.blockSizes = [];
        this.dates = [];
        this.systems = [];
        this.pools = [];
        this.selectedDates = [];
        this.selectedSystems = [];
        this.selectedPools = [];
        this.selectedLatencies = [];
        this.selectedBlockSizes = [];
        this.selectedFilters = [];
        this.predefinedFilters = [];
        this.filtersName = [];
        this.filterColors = [];
        this.predefinedFilters[Quadrant.ONE] = { blockSize: [0.5, 1, 2, 4, 8, 16, 32], latency: [0.0625, 0.125, 0.25, 0.5, 1] };
        this.predefinedFilters[Quadrant.TWO] = { blockSize: [64, 128, 256, 512, 1024], latency: [0.0625, 0.125, 0.25, 0.5, 1] };
        this.predefinedFilters[Quadrant.THREE] = { blockSize: [64, 128, 256, 512, 1024], latency: [2, 4, 8, 16, 32, 64, 128, 256] };
        this.predefinedFilters[Quadrant.FOUR] = { blockSize: [0.5, 1, 2, 4, 8, 16, 32], latency: [2, 4, 8, 16, 32, 64, 128, 256] };
        this.filtersName[Quadrant.ONE] = 'SLA-OK-CUS';
        this.filtersName[Quadrant.TWO] = 'SLA-OK-SUP';
        this.filtersName[Quadrant.THREE] = 'BREACH-CUS';
        this.filtersName[Quadrant.FOUR] = 'BREACH-SUP';
        this.filterColors[Quadrant.ONE] = 'btn-success';
        this.filterColors[Quadrant.TWO] = 'btn-success';
        this.filterColors[Quadrant.THREE] = 'btn-danger';
        this.filterColors[Quadrant.FOUR] = 'btn-danger';
        this.latencies = this.setNumberValues([0.0625, 0.125, 0.25, 0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256]);
        this.blockSizes = this.setNumberValues([0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]);
        this.selectedBlockSizes = this.blockSizes.map(function (value) { return value.id; });
        this.selectedLatencies = this.latencies.map(function (value) { return value.id; });
    }
    BlockSizeLatencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metricService.getLatencyMetadata().subscribe(function (data) {
            _this.dates = _filter_list_data_utils__WEBPACK_IMPORTED_MODULE_2__["FilterListDataUtils"].sort(_this.setDatesFilters(data), _filter_list_data_utils__WEBPACK_IMPORTED_MODULE_2__["SortType"].DESC);
            _this.systems = _filter_list_data_utils__WEBPACK_IMPORTED_MODULE_2__["FilterListDataUtils"].sort(_this.setSystemFilters(data), _filter_list_data_utils__WEBPACK_IMPORTED_MODULE_2__["SortType"].ASC);
            _this.pools = _filter_list_data_utils__WEBPACK_IMPORTED_MODULE_2__["FilterListDataUtils"].sort(_this.setPoolFilters(data), _filter_list_data_utils__WEBPACK_IMPORTED_MODULE_2__["SortType"].ASC);
        });
    };
    BlockSizeLatencyComponent.prototype.setNumberValues = function (data) {
        return data.map(function (value) {
            return { id: value, name: value.toString(), systemId: null };
        });
    };
    BlockSizeLatencyComponent.prototype.setDatesFilters = function (data) {
        return data.dates.map(function (date) {
            return { id: date, name: date, systemId: null };
        });
    };
    BlockSizeLatencyComponent.prototype.setSystemFilters = function (data) {
        return data.systems.map(function (system) {
            return { id: system.id, name: system.name, systemId: null };
        });
    };
    BlockSizeLatencyComponent.prototype.setPoolFilters = function (data) {
        return data.systems.map(function (system) { return system.children.map(function (pool) {
            return { id: pool.id, name: pool.name + '@' + system.name, systemId: system.id };
        }); }).reduce(function (previousValue, currentValue) { return previousValue.concat.apply(previousValue, currentValue); });
    };
    BlockSizeLatencyComponent.prototype.onDatesChanged = function (selectedDates) {
        this.selectedDates = selectedDates.map(function (val) { return val; });
    };
    BlockSizeLatencyComponent.prototype.onLatenciesChanged = function (selectedValues) {
        this.selectedLatencies = selectedValues.map(function (val) { return val; });
    };
    BlockSizeLatencyComponent.prototype.onBlockSizeChange = function (selectedValues) {
        this.selectedBlockSizes = selectedValues.map(function (val) { return val; });
    };
    BlockSizeLatencyComponent.prototype.onSystemChanged = function (selectedSystems) {
        var _this = this;
        this.selectedSystems = selectedSystems.map(function (val) { return parseInt(val, 10); });
        this.selectedPools = [];
        this.selectedSystems.forEach(function (system) { return _this.selectedPools = _this.selectedPools.concat(_this.pools.filter(function (pool) { return pool.systemId === system; })
            .map(function (pool) { return pool.id; })); });
    };
    BlockSizeLatencyComponent.prototype.onSelectFilter = function (quadrant) {
        var _this = this;
        if (!this.selectedFilters.includes(quadrant)) {
            this.selectedFilters.push(quadrant);
        }
        else {
            this.selectedFilters = this.selectedFilters.filter(function (value) { return value !== quadrant; });
        }
        this.selectedLatencies = [];
        this.selectedBlockSizes = [];
        this.selectedFilters.forEach(function (filter) {
            _this.selectedLatencies = _this.selectedLatencies.concat(_this.predefinedFilters[filter].latency);
            _this.selectedBlockSizes = _this.selectedBlockSizes.concat(_this.predefinedFilters[filter].blockSize);
        });
        console.log(this.selectedFilters);
        console.log(this.selectedLatencies);
        console.log(this.selectedBlockSizes);
    };
    BlockSizeLatencyComponent.prototype.onPoolChanged = function (selectedPools) {
        var _this = this;
        this.selectedPools = selectedPools.map(function (val) { return val; }) || [];
        this.selectedSystems = this.systems.filter(function (systems) { return _this.isAnyPoolSelected(systems.id); }).map(function (system) { return system.id; });
    };
    BlockSizeLatencyComponent.prototype.isSelected = function (quadrant) {
        return this.selectedFilters.includes(quadrant);
    };
    BlockSizeLatencyComponent.prototype.isAnyPoolSelected = function (id) {
        var _this = this;
        var allPools = this.pools.filter(function (pool) { return pool.systemId === id; });
        return allPools.some(function (pool) { return _this.selectedPools.includes(pool.id); });
    };
    BlockSizeLatencyComponent.ctorParameters = function () { return [
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"] }
    ]; };
    BlockSizeLatencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-size-latency',
            template: __importDefault(__webpack_require__(/*! raw-loader!./block-size-latency.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/block-size-latency.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./block-size-latency.component.css */ "./src/app/global-statistics/views/block-size-latency/block-size-latency.component.css")).default]
        }),
        __metadata("design:paramtypes", [_metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"]])
    ], BlockSizeLatencyComponent);
    return BlockSizeLatencyComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/views/block-size-latency/bubble-chart/bubble-chart.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/bubble-chart/bubble-chart.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("circle.value {\r\n  stroke: white;\r\n  stroke-width: 3;\r\n  stroke-opacity: 0.8;\r\n  fill-opacity: 0.8;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvYmxvY2stc2l6ZS1sYXRlbmN5L2J1YmJsZS1jaGFydC9idWJibGUtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL3ZpZXdzL2Jsb2NrLXNpemUtbGF0ZW5jeS9idWJibGUtY2hhcnQvYnViYmxlLWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjaXJjbGUudmFsdWUge1xyXG4gIHN0cm9rZTogd2hpdGU7XHJcbiAgc3Ryb2tlLXdpZHRoOiAzO1xyXG4gIHN0cm9rZS1vcGFjaXR5OiAwLjg7XHJcbiAgZmlsbC1vcGFjaXR5OiAwLjg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/global-statistics/views/block-size-latency/bubble-chart/bubble-chart.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/bubble-chart/bubble-chart.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: BubbleChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleChartComponent", function() { return BubbleChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _common_models_metrics_operation_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/models/metrics/operation-type.enum */ "./src/app/common/models/metrics/operation-type.enum.ts");
/* harmony import */ var _xaxis_xaxis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xaxis/xaxis.component */ "./src/app/global-statistics/views/block-size-latency/bubble-chart/xaxis/xaxis.component.ts");
/* harmony import */ var _yaxis_yaxis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./yaxis/yaxis.component */ "./src/app/global-statistics/views/block-size-latency/bubble-chart/yaxis/yaxis.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var BubbleChartComponent = /** @class */ (function () {
    function BubbleChartComponent(metricService) {
        this.metricService = metricService;
        this.poolIds = [];
        this.dates = []; // TODO should be date
        this.operations = ['READ', 'WRITE']; // TODO should be OperationType
        this.displayedPopup = false;
        this.chartData = {
            series: [],
            xlabels: [0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
            ylabels: [0.0625, 0.125, 0.25, 0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256],
            crossing: { x: 32, y: 1 },
            xlabel: 'Block Size [KB]',
            ylabel: 'Latency [ms]',
            colors: ['#008FFB', '#00E396'],
            xFormatter: function (value, index) { return value + ' KB'; },
            yFormatter: function (value, index) { return value + ' ms'; },
        };
        this.optionsGraphic = {
            width: 900,
            height: 500,
            biggestValueSize: 70,
        };
    }
    BubbleChartComponent.prototype.ngOnInit = function () {
    };
    BubbleChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.poolIds.length > 0 && this.dates.length > 0) {
            this.metricService.getLatencyData(this.poolIds, this.dates, this.operations, this.blockSizes, this.latencies).subscribe(function (data) {
                _this.chartData.series = _this.transformData(data);
                _this.selectedSeries = _this.chartData.series.map(function (serie) { return serie.name; });
            });
        }
        else {
            this.chartData.series = [];
            this.selectedSeries = [];
        }
    };
    BubbleChartComponent.prototype.ngAfterViewInit = function () {
        this.coordinatesX = this.xaxis.getCoordinates();
        this.coordinatesY = this.yaxis.getCoordinates();
        this.xaxis.setOffSetCoordinates(this.coordinatesY);
        this.yaxis.setOffSetCoordinates(this.coordinatesX);
    };
    BubbleChartComponent.prototype.transformData = function (data) {
        var _this = this;
        var returned = data.map(function (operationData) {
            var min = _this.min(operationData.values);
            var max = _this.max(operationData.values);
            return {
                name: _common_models_metrics_operation_type_enum__WEBPACK_IMPORTED_MODULE_2__["OperationType"][operationData.operation],
                data: operationData.values
                    .filter(function (value) { return value.z > 0; })
                    .map(function (value) {
                    return { coordinates: _this.mapToCoordinates(value, min, max), values: _this.mapToValues(value) };
                })
            };
        });
        return returned;
    };
    BubbleChartComponent.prototype.countCircleSize = function (value, min, max) {
        return (value / max) * this.optionsGraphic.biggestValueSize;
    };
    BubbleChartComponent.prototype.max = function (data) {
        return data.filter(function (value) { return value.z > 0; }).reduce(function (previousValue, currentValue) {
            return previousValue.z < currentValue.z ? currentValue : previousValue;
        }, { z: 0 }).z;
    };
    BubbleChartComponent.prototype.min = function (data) {
        return data.filter(function (value) { return value.z > 0; }).reduce(function (previousValue, currentValue) {
            return previousValue.z > currentValue.z ? currentValue : previousValue;
        }, { z: Number.MAX_SAFE_INTEGER }).z;
    };
    BubbleChartComponent.prototype.mapToCoordinates = function (value, min, max) {
        return [
            this.xaxis.getCoordinateByLabel(value.x).x,
            this.yaxis.getCoordinateByLabel(value.y).y,
            this.countCircleSize(value.z, min, max)
        ];
    };
    BubbleChartComponent.prototype.getColor = function (index) {
        return this.chartData.colors[index];
    };
    BubbleChartComponent.prototype.filterSeries = function (selectedSeries) {
        this.selectedSeries = selectedSeries;
    };
    BubbleChartComponent.prototype.isSelectedSerie = function (serieName) {
        return this.selectedSeries.some(function (selectedSerie) { return selectedSerie === serieName; });
    };
    BubbleChartComponent.prototype.displayPopup = function ($event, circle, serieName) {
        this.displayedPopup = true;
        this.popupDetail = { positionX: $event.layerX, positionY: $event.layerY, value: circle.values, serieName: serieName };
    };
    BubbleChartComponent.prototype.displayClose = function ($event) {
        this.displayedPopup = false;
        this.popupDetail = { positionX: $event.screenX, positionY: $event.screenY, value: null, serieName: null };
    };
    BubbleChartComponent.prototype.mapToValues = function (value) {
        return { x: value.x, y: value.y, z: value.z };
    };
    BubbleChartComponent.ctorParameters = function () { return [
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bubble', { static: false }),
        __metadata("design:type", BubbleChartComponent)
    ], BubbleChartComponent.prototype, "bubbleChart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('xaxis', { static: false }),
        __metadata("design:type", _xaxis_xaxis_component__WEBPACK_IMPORTED_MODULE_3__["XaxisComponent"])
    ], BubbleChartComponent.prototype, "xaxis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('yaxis', { static: false }),
        __metadata("design:type", _yaxis_yaxis_component__WEBPACK_IMPORTED_MODULE_4__["YaxisComponent"])
    ], BubbleChartComponent.prototype, "yaxis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BubbleChartComponent.prototype, "poolIds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BubbleChartComponent.prototype, "dates", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BubbleChartComponent.prototype, "operations", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BubbleChartComponent.prototype, "blockSizes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BubbleChartComponent.prototype, "latencies", void 0);
    BubbleChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bubble-chart',
            template: __importDefault(__webpack_require__(/*! raw-loader!./bubble-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/bubble-chart.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./bubble-chart.component.css */ "./src/app/global-statistics/views/block-size-latency/bubble-chart/bubble-chart.component.css")).default]
        }),
        __metadata("design:paramtypes", [_metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"]])
    ], BubbleChartComponent);
    return BubbleChartComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/views/block-size-latency/bubble-chart/legend/legend.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/bubble-chart/legend/legend.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.legend-item {\r\n  float: left;\r\n  margin: 0.5rem;\r\n  cursor: pointer;\r\n  cursor: pointer;\r\n}\r\n\r\ndiv.legend-item.disabled {\r\n  opacity: 0.5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvYmxvY2stc2l6ZS1sYXRlbmN5L2J1YmJsZS1jaGFydC9sZWdlbmQvbGVnZW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvYmxvY2stc2l6ZS1sYXRlbmN5L2J1YmJsZS1jaGFydC9sZWdlbmQvbGVnZW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubGVnZW5kLWl0ZW0ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMC41cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmRpdi5sZWdlbmQtaXRlbS5kaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/global-statistics/views/block-size-latency/bubble-chart/legend/legend.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/bubble-chart/legend/legend.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: LegendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendComponent", function() { return LegendComponent; });
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LegendComponent = /** @class */ (function () {
    function LegendComponent() {
        this.colors = [];
        this.selectedSeriesEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedSeries = [];
    }
    LegendComponent.prototype.ngOnInit = function () {
        this.seriesInit = this.series.map(function (serie) { return serie.name; });
        this.selectedSeries = this.seriesInit;
    };
    LegendComponent.prototype.getColor = function (index) {
        return this.colors[index];
    };
    LegendComponent.prototype.toggle = function (serieName) {
        var index = this.selectedSeries.findIndex(function (selectedSerie) { return selectedSerie === serieName; });
        if (index > -1) {
            this.selectedSeries.splice(index, 1);
        }
        else {
            this.selectedSeries.push(serieName);
        }
        this.selectedSeriesEmit.emit(this.selectedSeries);
    };
    LegendComponent.prototype.ngOnChanges = function (changes) {
        this.seriesInit = this.series.map(function (serie) { return serie.name; });
        this.selectedSeries = this.seriesInit;
    };
    LegendComponent.prototype.isToggled = function (serieName) {
        return this.selectedSeries.some(function (serie) { return serie === serieName; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LegendComponent.prototype, "series", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LegendComponent.prototype, "colors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LegendComponent.prototype, "selectedSeriesEmit", void 0);
    LegendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-legend]',
            template: __importDefault(__webpack_require__(/*! raw-loader!./legend.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/legend/legend.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./legend.component.css */ "./src/app/global-statistics/views/block-size-latency/bubble-chart/legend/legend.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LegendComponent);
    return LegendComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/views/block-size-latency/bubble-chart/popup-data/popup-data.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/bubble-chart/popup-data/popup-data.component.css ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.popup-data {\r\n  position: absolute;\r\n  z-index: 1000;\r\n  background-color: white;\r\n  border-radius: 5px;\r\n  border: 1px solid #b1b1b1;\r\n}\r\ndiv.popup-header {\r\n  background-color: #b1b1b1;\r\n  padding: 2px 10px 0px 10px;\r\n  border-radius: 5px 5px 0 0;\r\n}\r\ndiv.popup-body{\r\n  padding: 5px 10px 5px 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvYmxvY2stc2l6ZS1sYXRlbmN5L2J1YmJsZS1jaGFydC9wb3B1cC1kYXRhL3BvcHVwLWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy92aWV3cy9ibG9jay1zaXplLWxhdGVuY3kvYnViYmxlLWNoYXJ0L3BvcHVwLWRhdGEvcG9wdXAtZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnBvcHVwLWRhdGEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjFiMWIxO1xyXG59XHJcbmRpdi5wb3B1cC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMWIxYjE7XHJcbiAgcGFkZGluZzogMnB4IDEwcHggMHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbn1cclxuZGl2LnBvcHVwLWJvZHl7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/global-statistics/views/block-size-latency/bubble-chart/popup-data/popup-data.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/bubble-chart/popup-data/popup-data.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: PopupDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupDataComponent", function() { return PopupDataComponent; });
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PopupDataComponent = /** @class */ (function () {
    function PopupDataComponent() {
        this.displayed = false;
        this.config = null;
    }
    PopupDataComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PopupDataComponent.prototype, "positionX", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PopupDataComponent.prototype, "displayed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PopupDataComponent.prototype, "config", void 0);
    PopupDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup-data',
            template: __importDefault(__webpack_require__(/*! raw-loader!./popup-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/popup-data/popup-data.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./popup-data.component.css */ "./src/app/global-statistics/views/block-size-latency/bubble-chart/popup-data/popup-data.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PopupDataComponent);
    return PopupDataComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/views/block-size-latency/bubble-chart/xaxis/xaxis.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/bubble-chart/xaxis/xaxis.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".axis-label {\r\n  font: italic 1.3rem 'Source Sans Pro', sans-serif;\r\n  text-anchor: middle;\r\n}\r\n\r\n.axis-value {\r\n  font: normal 1.0rem 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvYmxvY2stc2l6ZS1sYXRlbmN5L2J1YmJsZS1jaGFydC94YXhpcy94YXhpcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaURBQWlEO0VBQ2pELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRCIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL3ZpZXdzL2Jsb2NrLXNpemUtbGF0ZW5jeS9idWJibGUtY2hhcnQveGF4aXMveGF4aXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5heGlzLWxhYmVsIHtcclxuICBmb250OiBpdGFsaWMgMS4zcmVtICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5heGlzLXZhbHVlIHtcclxuICBmb250OiBub3JtYWwgMS4wcmVtICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/global-statistics/views/block-size-latency/bubble-chart/xaxis/xaxis.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/bubble-chart/xaxis/xaxis.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: XaxisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XaxisComponent", function() { return XaxisComponent; });
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var XaxisComponent = /** @class */ (function () {
    function XaxisComponent() {
        this.markerLength = 5;
        this.marginSize = 30;
        this.textAnchor = 'middle';
        this.textOffset = 20;
        this.labelsCoordinates = [];
    }
    XaxisComponent.prototype.ngOnInit = function () {
        this.x1 = this.marginSize;
        this.y1 = (this.canvas.height - (2 * this.marginSize)) / 2;
        this.setUpAxis();
    };
    XaxisComponent.prototype.setUpAxis = function () {
        var _this = this;
        this.markerEnds = this.y1 + this.markerLength;
        this.axisLength = this.canvas.width - (2 * this.marginSize);
        this.y2 = this.axisLength + this.marginSize;
        this.coordinates = { x: this.getLabelPosition(this.labels.findIndex(function (label) { return label === _this.chartData.crossing.x; })), y: this.y1 };
        this.labels.forEach(function (label, index) {
            _this.labelsCoordinates[index] = { x: _this.getLabelPosition(index), y: _this.y1 };
        });
    };
    XaxisComponent.prototype.getCoordinates = function () {
        return this.coordinates;
    };
    XaxisComponent.prototype.setOffSetCoordinates = function (coordinates) {
        this.coordinates = coordinates;
        this.y1 = coordinates.y;
        this.setUpAxis();
    };
    XaxisComponent.prototype.getLabelPosition = function (index) {
        if (index === 0) {
            return this.marginSize;
        }
        return ((this.axisLength / (this.labels.length - 1)) * index) + this.marginSize;
    };
    XaxisComponent.prototype.getCoordinateByLabel = function (label) {
        var index = this.labels.findIndex(function (l) { return l === label; });
        return this.labelsCoordinates[index];
    };
    XaxisComponent.prototype.formatLabel = function (label, index) {
        return this.chartData.xFormatter.call(this, label, index) || label;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], XaxisComponent.prototype, "labels", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XaxisComponent.prototype, "canvas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], XaxisComponent.prototype, "chartData", void 0);
    XaxisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-xaxis]',
            template: __importDefault(__webpack_require__(/*! raw-loader!./xaxis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/xaxis/xaxis.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./xaxis.component.css */ "./src/app/global-statistics/views/block-size-latency/bubble-chart/xaxis/xaxis.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], XaxisComponent);
    return XaxisComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/views/block-size-latency/bubble-chart/yaxis/yaxis.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/bubble-chart/yaxis/yaxis.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".axis-label {\r\n  font: italic 1.3rem 'Source Sans Pro', sans-serif;\r\n  text-anchor: middle;\r\n}\r\n\r\n.axis-value {\r\n  font: normal 1.0rem 'Source Sans Pro', sans-serif;\r\n}\r\n\r\nline {\r\n  z-index: 50;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvYmxvY2stc2l6ZS1sYXRlbmN5L2J1YmJsZS1jaGFydC95YXhpcy95YXhpcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaURBQWlEO0VBQ2pELG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL3ZpZXdzL2Jsb2NrLXNpemUtbGF0ZW5jeS9idWJibGUtY2hhcnQveWF4aXMveWF4aXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5heGlzLWxhYmVsIHtcclxuICBmb250OiBpdGFsaWMgMS4zcmVtICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5heGlzLXZhbHVlIHtcclxuICBmb250OiBub3JtYWwgMS4wcmVtICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5saW5lIHtcclxuICB6LWluZGV4OiA1MDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/global-statistics/views/block-size-latency/bubble-chart/yaxis/yaxis.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/bubble-chart/yaxis/yaxis.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: YaxisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YaxisComponent", function() { return YaxisComponent; });
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var YaxisComponent = /** @class */ (function () {
    function YaxisComponent() {
        this.markerLength = 5;
        this.marginSize = 30;
        this.textAnchor = 'end';
        this.textOffset = 10;
        this.labelsCoordinates = [];
    }
    YaxisComponent.prototype.ngOnInit = function () {
        this.x1 = this.canvas.width / 2;
        this.y1 = this.marginSize;
        this.setUpAxis();
    };
    YaxisComponent.prototype.setUpAxis = function () {
        var _this = this;
        this.markerEnds = this.x1 - this.markerLength;
        this.axisLength = this.canvas.height - (2 * this.marginSize);
        this.y2 = this.axisLength + this.marginSize;
        this.coordinates = { x: this.x1, y: this.getLabelPosition(this.labels.findIndex(function (label) { return label === _this.chartData.crossing.y; })) };
        this.labels.forEach(function (label, index) {
            _this.labelsCoordinates[index] = { x: _this.x1, y: _this.getLabelPosition(index) };
        });
    };
    YaxisComponent.prototype.getLabelPosition = function (index) {
        if (index === 0) {
            return this.y2;
        }
        return this.y2 - ((this.axisLength / (this.labels.length - 1)) * index);
    };
    YaxisComponent.prototype.getCoordinates = function () {
        return this.coordinates;
    };
    YaxisComponent.prototype.setOffSetCoordinates = function (coordinates) {
        this.coordinates = coordinates;
        this.x1 = coordinates.x;
        this.setUpAxis();
    };
    YaxisComponent.prototype.getCoordinateByLabel = function (label) {
        var index = this.labels.findIndex(function (l) { return l === label; });
        return this.labelsCoordinates[index];
    };
    YaxisComponent.prototype.formatLabel = function (label, index) {
        return this.chartData.yFormatter.call(this, label, index) || label;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], YaxisComponent.prototype, "labels", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], YaxisComponent.prototype, "canvas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], YaxisComponent.prototype, "chartData", void 0);
    YaxisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-yaxis]',
            template: __importDefault(__webpack_require__(/*! raw-loader!./yaxis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/bubble-chart/yaxis/yaxis.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./yaxis.component.css */ "./src/app/global-statistics/views/block-size-latency/bubble-chart/yaxis/yaxis.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], YaxisComponent);
    return YaxisComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/views/block-size-latency/filter-list-data.utils.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/filter-list-data.utils.ts ***!
  \**************************************************************************************/
/*! exports provided: SortType, FilterListDataUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterListDataUtils", function() { return FilterListDataUtils; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var SortType;
(function (SortType) {
    SortType[SortType["ASC"] = 0] = "ASC";
    SortType[SortType["DESC"] = 1] = "DESC";
})(SortType || (SortType = {}));
var FilterListDataUtils = /** @class */ (function () {
    function FilterListDataUtils() {
    }
    FilterListDataUtils.sort = function (data, type) {
        return data.sort(function (itemA, itemB) {
            if (isNaN(itemA.name.charCodeAt(Number('@')))) {
                return FilterListDataUtils.compare(itemA, itemB, type);
            }
            else {
                var splitA = itemA.name.split('@');
                var splitB = itemB.name.split('@');
                var compareResult = FilterListDataUtils.compare(splitA[0], splitB[0], type);
                if (compareResult === 0) {
                    return FilterListDataUtils.compare(splitA[1], splitB[1], type);
                }
                return compareResult;
            }
        });
    };
    FilterListDataUtils.compare = function (valueA, valueB, type) {
        if (type === SortType.ASC) {
            if (valueA > valueB) {
                return 1;
            }
            else if (valueA === valueB) {
                return 0;
            }
            return -1;
        }
        else {
            if (valueA > valueB) {
                return -1;
            }
            else if (valueA === valueB) {
                return 0;
            }
            return 1;
        }
    };
    return FilterListDataUtils;
}());



/***/ }),

/***/ "./src/app/global-statistics/views/block-size-latency/filter-list/filter-list.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/filter-list/filter-list.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL3ZpZXdzL2Jsb2NrLXNpemUtbGF0ZW5jeS9maWx0ZXItbGlzdC9maWx0ZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/global-statistics/views/block-size-latency/filter-list/filter-list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/block-size-latency/filter-list/filter-list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FilterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterListComponent", function() { return FilterListComponent; });
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FilterListComponent = /** @class */ (function () {
    function FilterListComponent() {
        this.selectedValues = [];
        this.valueListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FilterListComponent.prototype.ngOnInit = function () {
    };
    FilterListComponent.prototype.selectValue = function (value) {
        this.valueListChange.emit(this.selectedValues);
    };
    FilterListComponent.prototype.selectAll = function () {
        this.selectedValues = this.valueList.map(function (value) { return value.id; });
        this.valueListChange.emit(this.selectedValues);
    };
    FilterListComponent.prototype.clear = function () {
        this.valueListChange.emit(this.selectedValues);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterListComponent.prototype, "valueList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FilterListComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterListComponent.prototype, "selectedValues", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FilterListComponent.prototype, "valueListChange", void 0);
    FilterListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./filter-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/block-size-latency/filter-list/filter-list.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./filter-list.component.css */ "./src/app/global-statistics/views/block-size-latency/filter-list/filter-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FilterListComponent);
    return FilterListComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/views/dp-sla/dp-sla.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/global-statistics/views/dp-sla/dp-sla.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col {\r\n  width: 35.75% !important;\r\n}\r\n\r\n.col-label {\r\n  width: 25% !important;\r\n}\r\n\r\n:host /deep/ .groupped-data .metric-value {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n:host /deep/ .aggregated-data .metric-value {\r\n  font-style: italic;\r\n  font-weight: 600;\r\n}\r\n\r\n:host /deep/ .groupped-data .metric-unit {\r\n  font-size: 8px;\r\n  margin-left: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvZHAtc2xhL2RwLXNsYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy92aWV3cy9kcC1zbGEvZHAtc2xhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sIHtcclxuICB3aWR0aDogMzUuNzUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2wtbGFiZWwge1xyXG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5ncm91cHBlZC1kYXRhIC5tZXRyaWMtdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmFnZ3JlZ2F0ZWQtZGF0YSAubWV0cmljLXZhbHVlIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5ncm91cHBlZC1kYXRhIC5tZXRyaWMtdW5pdCB7XHJcbiAgZm9udC1zaXplOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG4iXX0= */");

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
/* harmony import */ var _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/metric-handler.utils */ "./src/app/global-statistics/utils/metric-handler.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            .withColumnTooltipText('Count of breach SLA occuracnces per DP Pool. SLA treshold = >1ms write response time for at least 10mins time period')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_10__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_4__["SystemMetricType"].OUT_OF_SLA_TIME)
            .withLabel('Out of SLA Time')
            .withColumnTooltipText('Total time of breach SLA occuracnces per DP Pool.')
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
        this.options.sortColumnName = 'name';
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
            if (_this.currentPeriod !== period) {
                _this.currentPeriod = period;
                _this.getTableData(_this.currentDataCenterId);
            }
        });
        this.periodService.announceEnablePeriod(true);
        this.periodService.announcePeriod(this.currentPeriod);
    };
    DpSlaComponent.prototype.ngOnDestroy = function () {
        this.periodService.announceEnablePeriod(false);
    };
    DpSlaComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.currentDataCenterId = id;
        this.metricService.getDpSlaStatistics(id, this.currentPeriod).subscribe(function (data) { return _this.data = _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_14__["MetricHandlerUtils"].success(data); }, function (error) { return _this.data = _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_14__["MetricHandlerUtils"].error(error); });
        return this.data;
    };
    DpSlaComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _period_service__WEBPACK_IMPORTED_MODULE_2__["PeriodService"] },
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_3__["MetricService"] },
        { type: _bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"] }
    ]; };
    DpSlaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dp-sla',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dp-sla-2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/dp-sla/dp-sla-2.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dp-sla.component.css */ "./src/app/global-statistics/views/dp-sla/dp-sla.component.css")).default, __importDefault(__webpack_require__(/*! ../../global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host /deep/ .col-val {\r\n  /*padding-top: 5px;*/\r\n  /*padding-bottom: 5px;*/\r\n  padding-right: 2px;\r\n}\r\n\r\n.alert-red {\r\n  /*color: #900020;*/\r\n}\r\n\r\n.alert-amber {\r\n  color: #db8b0b;\r\n}\r\n\r\n.col {\r\n  width: 8.88%;\r\n}\r\n\r\n/* TODO duplicated css definitions in all statistics component*/\r\n\r\n:host /deep/ .metric-value,\r\n:host /deep/ .metric-value {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n:host /deep/ .metric-unit,\r\n:host /deep/ .metric-unit {\r\n  font-size: 8px;\r\n  margin-left: 3px;\r\n}\r\n\r\n.sorting {\r\n  font-size: 13px;\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n}\r\n\r\n.sticky-bottom {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  bottom: 0px;\r\n  z-index: 10;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvaG9zdC1ncm91cHMtY2FwYWNpdHkvaG9zdC1ncm91cHMtY2FwYWNpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSwrREFBK0Q7O0FBQy9EOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy92aWV3cy9ob3N0LWdyb3Vwcy1jYXBhY2l0eS9ob3N0LWdyb3Vwcy1jYXBhY2l0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgL2RlZXAvIC5jb2wtdmFsIHtcclxuICAvKnBhZGRpbmctdG9wOiA1cHg7Ki9cclxuICAvKnBhZGRpbmctYm90dG9tOiA1cHg7Ki9cclxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5hbGVydC1yZWQge1xyXG4gIC8qY29sb3I6ICM5MDAwMjA7Ki9cclxufVxyXG5cclxuLmFsZXJ0LWFtYmVyIHtcclxuICBjb2xvcjogI2RiOGIwYjtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgd2lkdGg6IDguODglO1xyXG59XHJcblxyXG4vKiBUT0RPIGR1cGxpY2F0ZWQgY3NzIGRlZmluaXRpb25zIGluIGFsbCBzdGF0aXN0aWNzIGNvbXBvbmVudCovXHJcbjpob3N0IC9kZWVwLyAubWV0cmljLXZhbHVlLFxyXG46aG9zdCAvZGVlcC8gLm1ldHJpYy12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubWV0cmljLXVuaXQsXHJcbjpob3N0IC9kZWVwLyAubWV0cmljLXVuaXQge1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuXHJcbi5zb3J0aW5nIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcblxyXG4uc3RpY2t5LWJvdHRvbSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBib3R0b206IDBweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuIl19 */");

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
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../bus.service */ "./src/app/global-statistics/bus.service.ts");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var _formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../formatters/simple-formatter/simple-formatter.component */ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/components/route-link-formatter/route-link-formatter.component */ "./src/app/common/components/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/sasi-weighted-arithmetic-mean.utils */ "./src/app/global-statistics/utils/sasi-weighted-arithmetic-mean.utils.ts");
/* harmony import */ var _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/components/sasi-table/group-sort-impl */ "./src/app/common/components/sasi-table/group-sort-impl.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _formatters_tier_formatter_tier_formatter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../formatters/tier-formatter/tier-formatter.component */ "./src/app/global-statistics/formatters/tier-formatter/tier-formatter.component.ts");
/* harmony import */ var _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/metric-handler.utils */ "./src/app/global-statistics/utils/metric-handler.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};















var HostGroupsCapacityComponent = /** @class */ (function () {
    function HostGroupsCapacityComponent(route, router, metricService, bus, localStorageService) {
        this.route = route;
        this.router = router;
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
            .withComponent(_common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_9__["RouteLinkFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].TIER)
            .withLabel('Tier')
            .withColumnTooltipText('Tier label - internal number of the Tier where VMware farm (HostGroup) is stored (reflects DP pool Tier)')
            .withComponent(_formatters_tier_formatter_tier_formatter_component__WEBPACK_IMPORTED_MODULE_13__["TierFormatterComponent"])
            .withTooltipText('Tier')
            .withColumnWidth('6')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_TOTAL)
            .withLabel('Provisioned Capacity')
            .withColumnTooltipText('Total provisioned capacity to servers (to Host Group)')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Provisioned Capacity')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED)
            .withLabel('Used Capacity')
            .withColumnTooltipText('Used capacity of servers in TB')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Used Capacity')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED_PERC)
            .withLabel('Used Capacity [%}')
            .withColumnTooltipText('Used capacity of servers in percentage')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Used Capacity')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1D)
            .withLabel('Last Day Change')
            .withColumnTooltipText('Calculated change in GB [Today]-[Yesterday] of USED capacity')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('One Day Change')
            .withInfinity(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1W)
            .withLabel('Last Week Change')
            .withColumnTooltipText('Calculated change in GB [Today]-[7 Days Back] of USED capacity')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('One Week Change')
            .withInfinity(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].CAPACITY_CHANGE_1M)
            .withLabel('Last Month Change')
            .withColumnTooltipText('Calculated change in GB [Today]-[30 Days Back] of USED capacity')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('One Month Change')
            .withInfinity(false)
            .build());
        this.options.rowComponentFormatter = _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_8__["RowGroupTableComponent"];
        this.options.grIndexComponentFormatter = _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_9__["RouteLinkFormatterComponent"];
        this.options.isDataGrouped = true;
        this.options.highlightRow = true;
        this.options.labelColumnWidth = '13';
        this.options.valueColumnWidth = '12.9';
        this.options.storageNamePrefix = 'hostGroupCap';
        this.options.selectableRows = true;
        this.options.aggregateValuesService = new _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_10__["SasiWeightedArithmeticMeanUtils"]();
        this.options.sortService = new _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_11__["GroupSortImpl"]();
        this.options.sortColumnName = 'name';
        this.options.columnAlign = 'right';
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
        this.localStorageService.observe(this.options.storageNamePrefix + '_selected').subscribe(function (data) {
            _this.selectedRows = data.newValue;
        });
    };
    HostGroupsCapacityComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.metricService.getHostGroupCapacityStatistics(id).subscribe(function (data) { return _this.data = _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_14__["MetricHandlerUtils"].success(data); }, function (error) { return _this.data = _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_14__["MetricHandlerUtils"].error(error); });
        return this.data;
    };
    HostGroupsCapacityComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_4__["MetricService"] },
        { type: _bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"] },
        { type: ngx_store__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }
    ]; };
    HostGroupsCapacityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-host-groups-capacity',
            template: __importDefault(__webpack_require__(/*! raw-loader!./host-groups-capacity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/host-groups-capacity/host-groups-capacity.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ height: '0px', overflow: 'hidden', margin: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ 'height': '*', overflow: 'hidden', margin: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('500ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('iconRotate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ transform: 'rotate(0deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ transform: 'rotate(90deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('500ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('0ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('0ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('500ms'))
                ])
            ],
            styles: [__importDefault(__webpack_require__(/*! ./host-groups-capacity.component.css */ "./src/app/global-statistics/views/host-groups-capacity/host-groups-capacity.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _metric_service__WEBPACK_IMPORTED_MODULE_4__["MetricService"],
            _bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]])
    ], HostGroupsCapacityComponent);
    return HostGroupsCapacityComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.css ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alert-red {\r\n  color: #900020;\r\n}\r\n\r\n.alert-amber {\r\n  color: #db8b0b;\r\n}\r\n\r\n:host /deep/ .metric-value {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n:host /deep/ .metric-unit {\r\n  font-size: 8px;\r\n  margin-left: 3px;\r\n}\r\n\r\n.sorting {\r\n  font-size: 13px;\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n}\r\n\r\n.sticky-bottom {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  bottom: 0px;\r\n  z-index: 10;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvbG9naWNhbC1jYXBhY2l0eS1zdGF0aXN0aWNzL2xvZ2ljYWwtY2FwYWNpdHktc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtc3RhdGlzdGljcy92aWV3cy9sb2dpY2FsLWNhcGFjaXR5LXN0YXRpc3RpY3MvbG9naWNhbC1jYXBhY2l0eS1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtcmVkIHtcclxuICBjb2xvcjogIzkwMDAyMDtcclxufVxyXG5cclxuLmFsZXJ0LWFtYmVyIHtcclxuICBjb2xvcjogI2RiOGIwYjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5tZXRyaWMtdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm1ldHJpYy11bml0IHtcclxuICBmb250LXNpemU6IDhweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcblxyXG4uc29ydGluZyB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLnN0aWNreS1ib3R0b20ge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbiJdfQ== */");

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
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../bus.service */ "./src/app/global-statistics/bus.service.ts");
/* harmony import */ var _formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../formatters/simple-formatter/simple-formatter.component */ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/components/route-link-formatter/route-link-formatter.component */ "./src/app/common/components/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/sasi-weighted-arithmetic-mean.utils */ "./src/app/global-statistics/utils/sasi-weighted-arithmetic-mean.utils.ts");
/* harmony import */ var _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/components/sasi-table/group-sort-impl */ "./src/app/common/components/sasi-table/group-sort-impl.ts");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/metric-handler.utils */ "./src/app/global-statistics/utils/metric-handler.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













var LogicalCapacityStatisticsComponent = /** @class */ (function () {
    function LogicalCapacityStatisticsComponent(route, router, metricService, bus, localStorageService) {
        this.route = route;
        this.router = router;
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
            .withShortLabel('System')
            .withComponent(_common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_8__["RouteLinkFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .withAltBorder(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].SUBSCRIBED_CAPACITY)
            .withLabel('Total')
            .withColumnTooltipText('Total Subscribed capacity (TB) of the DP Pool.')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Subscribed Capacity')
            .withAltBorder(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_SUBS_PERC)
            .withLabel('Physical Subs.')
            .withColumnTooltipText('Physical Subscribed capacity (%) of the DP Pool.')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Physical Subscription')
            .withShortLabel('Physical')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_SUBS_PERC)
            .withLabel('Logical Subs.')
            .withColumnTooltipText('Logical Subscribed capacity (%) of the DP Pool.')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Logical Subscription')
            .withShortLabel('Logical')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_SUBS_PERC)
            .withLabel('Net Subs.')
            .withColumnTooltipText('NET Subscribed capacity (%) of the DP Pool.')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Net Subscription')
            .withShortLabel('Net')
            .withAltBorder(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_CAPACITY)
            .withLabel('Total')
            .withColumnTooltipText('Total physical capacity (TB) of the DP Pool. Physical capacity = capacity of the real HW components (HDDs/FMDs/Spindles).')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Physical Capacity (Physical data occupation on HDD/FMD/SSD)')
            .withShortLabel('Total')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED)
            .withLabel('Physical Used')
            .withColumnTooltipText('Physically used capacity (TB) of the DP Pool. Meaning what is the physical occupation of data on HW components (HDDs/FMDs/Spindles) (so after compression and deduplication)')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Physical Used')
            .withShortLabel('Used')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_FREE)
            .withLabel('Physical Free')
            .withColumnTooltipText('Physically free capacity (TB) of the DP Pool. Meaning what is the physical free space on HW components (HDDs/FMDs/Spindles)')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Physical Free')
            .withShortLabel('Free')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED_PERC)
            .withLabel('Physical Used')
            .withColumnTooltipText('Capacity which is physically stored on DP Pool HDD\'s in %')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Physical Used')
            .withAltBorder(true)
            .withShortLabel('Used')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_CAPACITY)
            .withLabel('Total')
            .withColumnTooltipText('Logical capacity (TB) of the DP Pool. Logical capacity is "virtual" capacity for non-spindle disk pools. It is calculated as [physical capacity] x [constant]. In common cases [constant] is set to 2 (because of default compression on FMDs)')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Logical Capacity')
            .withShortLabel('Total')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED)
            .withLabel('Logical Used')
            .withColumnTooltipText('\tLogical Used capacity (TB) of the DP Pool. Logical capacity is "virtual" capacity for non-spindle disk pools. It is calculated as [physical capacity] x [constant]. In common cases [constant] is set to 2')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Logical Used')
            .withShortLabel('Used')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_FREE)
            .withLabel('Logical Free')
            .withColumnTooltipText('Logical Free capacity (TB) of the DP Pool. Logical capacity is "virtual" capacity for non-spindle disk pools. It is calculated as [physical capacity] x [constant]. In common cases [constant] is set to 2')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Logical Free')
            .withShortLabel('Free')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED_PERC)
            .withLabel('Logical Used')
            .withColumnTooltipText('Logical Used capacity (%) of the DP Pool. Logical capacity is "virtual" capacity for non-spindle disk pools.')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Logical Used')
            .withAltBorder(true)
            .withShortLabel('Used')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_TOTAL)
            .withLabel('Net Capacity')
            .withColumnTooltipText('NET capacity = Capacity without any saving mechanism (Dedup/Compression). Calculated as [Physical Capacity] x [Total Saving Effect]')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Net Capacity (Virtual capacity without any saving mechanism)')
            .withShortLabel('Total')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED)
            .withLabel('Net Used')
            .withColumnTooltipText('NET capacity = Capacity without any saving mechanism (Dedup/Compression). Calculated as [Physical Used] x [Total Saving Effect]')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Net Used')
            .withShortLabel('Used')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_FREE)
            .withLabel('Net Free')
            .withColumnTooltipText('NET capacity = Capacity without any saving mechanism (Dedup/Compression). Calculated as [Physical Free] x [Total Saving Effect]')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Net Free')
            .withShortLabel('Free')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED_PERC)
            .withLabel('Net Used')
            .withColumnTooltipText('NET capacity = Capacity without any saving mechanism (Dedup/Compression).')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Net Used')
            .withShortLabel('Used')
            .withAltBorder(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].COMPRESS_RATIO)
            .withLabel('Comp Ratio')
            .withColumnTooltipText('Compression Ratio of the FMD\'s in the DP Pool. Summary calculation is performed on pools with compression ration >0')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Compression Ratio')
            .withShortLabel('Comp')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].DEDUP_RATIO)
            .withLabel('Dedup Ratio')
            .withColumnTooltipText('Deduplication Ratio of the DP Pool. Summmary calculation is performed on pools with dedup ration >0)')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Deduplication Ratio')
            .withShortLabel('Dedup')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].TOTAL_SAVING_EFFECT)
            .withLabel('Saving effect')
            .withColumnTooltipText('Total saving effect of Deduplication (SW feature) + Compression (FMD\'s). Summmary calculation is performed on pools with total saving effect >1)')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Total Saving Effect')
            .withShortLabel('Total')
            .build());
        this.options.rowComponentFormatter = _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_7__["RowGroupTableComponent"];
        this.options.grIndexComponentFormatter = _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_8__["RouteLinkFormatterComponent"];
        this.options.isDataGrouped = true;
        this.options.highlightRow = true;
        this.options.labelColumnWidth = '10.5';
        this.options.valueColumnWidth = '4.52';
        this.options.storageNamePrefix = 'logicalCap';
        this.options.selectableRows = true;
        this.options.aggregateValuesService = new _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_9__["SasiWeightedArithmeticMeanUtils"]();
        this.options.sortService = new _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_10__["GroupSortImpl"]();
        this.options.sortColumnName = 'name';
        this.options.columnAlign = 'right';
        this.options.headerGroups = [
            {
                name: '',
                columns: ['controls']
            },
            {
                name: '',
                columns: ['name']
            },
            {
                name: 'Subscription',
                columns: [
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].SUBSCRIBED_CAPACITY,
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_SUBS_PERC,
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_SUBS_PERC,
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_SUBS_PERC
                ]
            },
            {
                name: 'Physical',
                columns: [
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_CAPACITY,
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED,
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_FREE,
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].PHYSICAL_USED
                ]
            },
            {
                name: 'Logical',
                columns: [
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_CAPACITY,
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED,
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_FREE,
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].LOGICAL_USED
                ]
            },
            {
                name: 'Net',
                columns: [
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_TOTAL,
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_USED,
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_FREE,
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].NET_SUBS_PERC
                ]
            },
            {
                name: 'Savings',
                columns: [
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].COMPRESS_RATIO,
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].DEDUP_RATIO,
                    _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_1__["SystemMetricType"].TOTAL_SAVING_EFFECT
                ]
            },
        ];
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
    };
    LogicalCapacityStatisticsComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.metricService.getCapacityStatistics(id).subscribe(function (data) { return _this.data = _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_12__["MetricHandlerUtils"].success(data); }, function (error) { return _this.data = _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_12__["MetricHandlerUtils"].error(error); });
        return this.data;
    };
    LogicalCapacityStatisticsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_4__["MetricService"] },
        { type: _bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"] },
        { type: ngx_store__WEBPACK_IMPORTED_MODULE_11__["LocalStorageService"] }
    ]; };
    LogicalCapacityStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-physical-statistics',
            template: __importDefault(__webpack_require__(/*! raw-loader!./logical-capacity-statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./logical-capacity-statistics.component.css */ "./src/app/global-statistics/views/logical-capacity-statistics/logical-capacity-statistics.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _metric_service__WEBPACK_IMPORTED_MODULE_4__["MetricService"],
            _bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_11__["LocalStorageService"]])
    ], LogicalCapacityStatisticsComponent);
    return LogicalCapacityStatisticsComponent;
}());



/***/ }),

/***/ "./src/app/global-statistics/views/performance-statistics/performance-statistics.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/global-statistics/views/performance-statistics/performance-statistics.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL3ZpZXdzL3BlcmZvcm1hbmNlLXN0YXRpc3RpY3MvcGVyZm9ybWFuY2Utc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/metric-handler.utils */ "./src/app/global-statistics/utils/metric-handler.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
            .withColumnTooltipText('Average/(Peak) value of transactions per second (IOPS) for selected time period (Last Day / Last Week / Last Month)')
            .withComponent(_formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TRANSFER)
            .withLabel('Transfer')
            .withColumnTooltipText('Average/(Peak) value of transferred data blocks per second (MB/s) for selected time period (Last Day / Last Week / Last Month)')
            .withComponent(_formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].RESPONSE)
            .withLabel('Response')
            .withColumnTooltipText('Average/(Peak) value of latency on all LDEVs (both - read and write) for selected time period (Last Day / Last Week / Last Month)')
            .withComponent(_formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].CPU)
            .withLabel('CPU')
            .withColumnTooltipText('Average/(Peak) value of utilization on all system processors (MPBs) for selected time period (Last Day / Last Week / Last Month)')
            .withComponent(_formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].HDD)
            .withLabel('HDD')
            .withColumnTooltipText('Average/(Peak) value of utilization on all hard disk drives / FMDs / SSD used in DP Pools for selected time period (Last Day / Last Week / Last Month)')
            .withComponent(_formatters_unit_formatter_unit_formatter_component__WEBPACK_IMPORTED_MODULE_7__["UnitFormatterComponent"])
            .withAltSortEnable(true)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WRITE_PENDING_PERC)
            .withLabel('Write Pending')
            .withColumnTooltipText('Average/(Peak) value of Cache Write Pending rate on all cache modules for selected time period (Last Day / Last Week / Last Month)')
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
        this.options.sortColumnName = 'name';
        this.options.sortType = _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiSortType"].ASC;
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
            if (_this.currentPeriod !== period) {
                _this.currentPeriod = period;
                _this.getTableData(_this.currentDataCenterId);
            }
        });
        this.periodService.announceEnablePeriod(true);
        this.periodService.announcePeriod(this.currentPeriod);
        this.options.cellDecoratorRules.push(new _alert_rule__WEBPACK_IMPORTED_MODULE_10__["AlertRule"](_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].CPU, new _alert_rule__WEBPACK_IMPORTED_MODULE_10__["Threshold"]('text-orange', 80, 10000)));
        this.options.cellDecoratorRules.push(new _alert_rule__WEBPACK_IMPORTED_MODULE_10__["AlertRule"](_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].WRITE_PENDING_PERC, new _alert_rule__WEBPACK_IMPORTED_MODULE_10__["Threshold"]('text-orange', 30, 10000)));
    };
    PerformanceStatisticsComponent.prototype.ngOnDestroy = function () {
        this.periodService.announceEnablePeriod(false);
    };
    PerformanceStatisticsComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.currentDataCenterId = id;
        this.metricService.getPerformanceStatistics(id, this.currentPeriod).subscribe(function (data) { return _this.data = _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_13__["MetricHandlerUtils"].success(data); }, function (error) { return _this.data = _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_13__["MetricHandlerUtils"].error(error); });
        return this.data;
    };
    PerformanceStatisticsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"] },
        { type: _period_service__WEBPACK_IMPORTED_MODULE_4__["PeriodService"] },
        { type: _bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"] }
    ]; };
    PerformanceStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab',
            template: __importDefault(__webpack_require__(/*! raw-loader!./performance-statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/performance-statistics/performance-statistics.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./performance-statistics.component.css */ "./src/app/global-statistics/views/performance-statistics/performance-statistics.component.css")).default, __importDefault(__webpack_require__(/*! ../../global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")).default]
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alert-red {\r\n  color: #900020;\r\n}\r\n\r\n.alert-amber {\r\n  color: #db8b0b;\r\n}\r\n\r\n:host /deep/ .metric-value {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n:host /deep/ .metric-unit {\r\n  font-size: 8px;\r\n  margin-left: 3px;\r\n}\r\n\r\n.sorting {\r\n  font-size: 13px;\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n}\r\n\r\n.sticky-bottom {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  bottom: 0px;\r\n  z-index: 10;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLXN0YXRpc3RpY3Mvdmlld3MvcGh5c2ljYWwtY2FwYWNpdHktc3RhdGlzdGljcy9waHlzaWNhbC1jYXBhY2l0eS1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1zdGF0aXN0aWNzL3ZpZXdzL3BoeXNpY2FsLWNhcGFjaXR5LXN0YXRpc3RpY3MvcGh5c2ljYWwtY2FwYWNpdHktc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LXJlZCB7XHJcbiAgY29sb3I6ICM5MDAwMjA7XHJcbn1cclxuXHJcbi5hbGVydC1hbWJlciB7XHJcbiAgY29sb3I6ICNkYjhiMGI7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubWV0cmljLXZhbHVlIHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5tZXRyaWMtdW5pdCB7XHJcbiAgZm9udC1zaXplOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG5cclxuLnNvcnRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuXHJcbi5zdGlja3ktYm90dG9tIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4iXX0= */");

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
/* harmony import */ var _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/models/metrics/system-metric-type.enum */ "./src/app/common/models/metrics/system-metric-type.enum.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../bus.service */ "./src/app/global-statistics/bus.service.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/components/route-link-formatter/route-link-formatter.component */ "./src/app/common/components/route-link-formatter/route-link-formatter.component.ts");
/* harmony import */ var _formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../formatters/simple-formatter/simple-formatter.component */ "./src/app/global-statistics/formatters/simple-formatter/simple-formatter.component.ts");
/* harmony import */ var _formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../formatters/alert-formatter/alert-formatter.component */ "./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _alert_rule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../alert-rule */ "./src/app/global-statistics/alert-rule.ts");
/* harmony import */ var _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/sasi-weighted-arithmetic-mean.utils */ "./src/app/global-statistics/utils/sasi-weighted-arithmetic-mean.utils.ts");
/* harmony import */ var _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/components/sasi-table/group-sort-impl */ "./src/app/common/components/sasi-table/group-sort-impl.ts");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm5/ngx-store.js");
/* harmony import */ var _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/metric-handler.utils */ "./src/app/global-statistics/utils/metric-handler.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
















var PhysicalCapacityStatisticsComponent = /** @class */ (function () {
    function PhysicalCapacityStatisticsComponent(route, router, metricService, bus, localStorageService) {
        this.route = route;
        this.router = router;
        this.metricService = metricService;
        this.bus = bus;
        this.localStorageService = localStorageService;
        this.types = [
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_SUBS_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].AVAILABLE_CAPACITY,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_USED_PERC,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].COMPRESS_RATIO,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PREDICTION_L1,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PREDICTION_L2,
            _common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PREDICTION_L3
        ];
        this.data = []; // Todo caching data by dataCenters
        this.aggregatedStats = new Array();
        this.options = new _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiTableOptions"]();
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex('name')
            .withLabel('Pool')
            .withAltLabel('System')
            .withComponent(_common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_7__["RouteLinkFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .withAltBorder(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_CAPACITY)
            .withLabel('Physical\nCapacity')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withColumnTooltipText('Total physical capacity (TB) of the DP Pool. Physical capacity = capacity of the real HW components (HDDs/FMDs/Spindles).')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_SUBS_PERC)
            .withLabel('Physical Subs.')
            .withColumnTooltipText('Physical Subscribed capacity (%) of the DP Pool.')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].AVAILABLE_CAPACITY)
            .withLabel('Available\n' +
            'Capacity')
            .withColumnTooltipText('Physically free capacity (TB) of the DP Pool. Meaning what is the physical free space on HW components (HDDs/FMDs/Spindles)')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].LOGICAL_USED_PERC)
            .withLabel('Logical Used')
            .withColumnTooltipText('Logical Used capacity (%) of the DP Pool. Logical capacity is "virtual" capacity for non-spindle disk pools. It is calculated as [physical capacity] x [constant]. In common cases [constant] is set to 2')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_USED_PERC)
            .withLabel('Physical Used')
            .withColumnTooltipText('Capacity which is physically stored on DP Pool HDD\'s in %')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].TOTAL_SAVING_EFFECT)
            .withLabel('Total Savings')
            .withColumnTooltipText('Total saving effect of Deduplication (SW feature) + Compression (FMD\'s). Summmary calculation is performed on pools with total saving effect >1)')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('Total Saving Effect')
            .withShortLabel('Total')
            .withAltBorder(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PREDICTION_L1)
            .withLabel('Reach 80%')
            .withColumnTooltipText('Prediction how many days left before reaching 80% treshold of "Physical Used [%]" metric.')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .withTooltipText('Days to reach 80% of "Physical Used"')
            .withInfinity(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PREDICTION_L2)
            .withLabel('Reach 85%')
            .withColumnTooltipText('Prediction how many days left before reaching 85% treshold of "Physical Used [%]" metric.')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .withTooltipText('Days to reach 85% of "Physical Used"')
            .withInfinity(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PREDICTION_L3)
            .withLabel('Reach 88%')
            .withColumnTooltipText('Prediction how many days left before reaching 88% treshold of "Physical Used [%]" metric.')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .withTooltipText('Days to reach 88% of "Physical Used"')
            .withInfinity(true)
            .withAltBorder(true)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].CAPACITY_CHANGE_1D)
            .withLabel('Change 1D')
            .withColumnTooltipText('Calculated change of "Physical Capacity" in GB [Today]-[Yesterday] of the DP Pool')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withInfinity(false)
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withTooltipText('One Day Change')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].CAPACITY_CHANGE_1W)
            .withLabel('Change 1W')
            .withColumnTooltipText('Calculated change of "Physical Capacity" in GB [Today]-[7 Days Back] of the DP Pool')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withInfinity(false)
            .withTooltipText('One Week Change')
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_6__["SasiColumnBuilder"].getInstance()
            .withIndex(_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].CAPACITY_CHANGE_1M)
            .withLabel('Change 1M')
            .withColumnTooltipText('Calculated change of "Physical Capacity" in GB [Today]-[30 Days Back] of the DP Pool')
            .withComponent(_formatters_simple_formatter_simple_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SimpleFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(true)
            .withInfinity(false)
            .withTooltipText('One Month Change')
            .build());
        this.options.colControlFormatter = _formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_9__["AlertFormatterComponent"];
        this.options.rowComponentFormatter = _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_10__["RowGroupTableComponent"];
        this.options.grIndexComponentFormatter = _common_components_route_link_formatter_route_link_formatter_component__WEBPACK_IMPORTED_MODULE_7__["RouteLinkFormatterComponent"];
        this.options.isDataGrouped = true;
        this.options.highlightRow = true;
        this.options.labelColumnWidth = '13';
        this.options.valueColumnWidth = '6.65';
        this.options.storageNamePrefix = 'physicalCap';
        this.options.selectableRows = true;
        this.options.aggregateValuesService = new _utils_sasi_weighted_arithmetic_mean_utils__WEBPACK_IMPORTED_MODULE_12__["SasiWeightedArithmeticMeanUtils"]();
        this.options.sortService = new _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_13__["GroupSortImpl"]();
        this.options.sortColumnName = 'name';
        this.options.columnAlign = 'right';
        this.options.cellDecoratorRules.push(new _alert_rule__WEBPACK_IMPORTED_MODULE_11__["AlertRule"](_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_USED_PERC, new _alert_rule__WEBPACK_IMPORTED_MODULE_11__["Threshold"]('text-green', 80, 84.9)));
        this.options.cellDecoratorRules.push(new _alert_rule__WEBPACK_IMPORTED_MODULE_11__["AlertRule"](_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_USED_PERC, new _alert_rule__WEBPACK_IMPORTED_MODULE_11__["Threshold"]('text-alert-yellow', 85, 88)));
        this.options.cellDecoratorRules.push(new _alert_rule__WEBPACK_IMPORTED_MODULE_11__["AlertRule"](_common_models_metrics_system_metric_type_enum__WEBPACK_IMPORTED_MODULE_3__["SystemMetricType"].PHYSICAL_USED_PERC, new _alert_rule__WEBPACK_IMPORTED_MODULE_11__["Threshold"]('text-red', 88, 10000)));
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
        this.localStorageService.observe(this.options.storageNamePrefix + '_selected').subscribe(function (data) {
            _this.selectedRows = data.newValue;
        });
    };
    PhysicalCapacityStatisticsComponent.prototype.getTableData = function (id) {
        var _this = this;
        this.metricService.getCapacityStatistics(id).subscribe(function (data) { return _this.data = _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_15__["MetricHandlerUtils"].success(data); }, function (error) { return _this.data = _utils_metric_handler_utils__WEBPACK_IMPORTED_MODULE_15__["MetricHandlerUtils"].error(error); });
        return this.data;
    };
    PhysicalCapacityStatisticsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_2__["MetricService"] },
        { type: _bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"] },
        { type: ngx_store__WEBPACK_IMPORTED_MODULE_14__["LocalStorageService"] }
    ]; };
    PhysicalCapacityStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-capacity-statistics',
            template: __importDefault(__webpack_require__(/*! raw-loader!./physical-capacity-statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/global-statistics/views/physical-capacity-statistics/physical-capacity-statistics.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', overflow: 'hidden', margin: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ 'height': '*', overflow: 'hidden', margin: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('iconRotate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(0deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'rotate(90deg)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms'))
                ])
            ],
            styles: [__importDefault(__webpack_require__(/*! ./physical-capacity-statistics.component.css */ "./src/app/global-statistics/views/physical-capacity-statistics/physical-capacity-statistics.component.css")).default, __importDefault(__webpack_require__(/*! ../../global-statistics.component.css */ "./src/app/global-statistics/global-statistics.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _metric_service__WEBPACK_IMPORTED_MODULE_2__["MetricService"],
            _bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_14__["LocalStorageService"]])
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
    HttpLoading.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
    ]; };
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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
        this.dataCenterObservable = null;
        this.currentDate = new Date();
        this.getDataCenters();
    }
    MetricService.prototype.getInfrastructureStats = function () {
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/infrastructure/alerts');
        return this.http.get(url);
    };
    MetricService.prototype.getDataCenters = function () {
        var _this = this;
        if (this.dataCenterObservable !== null) {
            return this.dataCenterObservable;
        }
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/datacenters');
        this.dataCenterObservable = this.http.get(url);
        this.dataCenterObservable.subscribe(function (dto) { return _this.infrastructure = dto; });
        return this.dataCenterObservable;
    };
    MetricService.prototype.getSystemName = function (datacenterId, systemId) {
        var datacenterObj = this.infrastructure.find(function (datacenter) { return datacenter.storageEntity.id === datacenterId; });
        if (datacenterObj === undefined) {
            return '';
        }
        var systemObj = datacenterObj.storageEntity.children.find(function (system) { return system.id === systemId; });
        if (systemObj === undefined) {
            return '';
        }
        return systemObj.name;
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
    MetricService.prototype.getLatencyData = function (poolIdsIn, datesIn, operationTypes, blockSizes, latencies) {
        var request = {
            operations: operationTypes,
            dates: datesIn,
            poolIds: poolIdsIn,
            latencies: latencies,
            blockSizes: blockSizes
        };
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/latency/data');
        var headersParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, request, { headers: headersParams });
    };
    MetricService.prototype.getSystemsDetail = function () {
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v2/storage-entities');
        return this.http.get(url);
    };
    MetricService.prototype.getLatencyMetadata = function () {
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v1/latency/metadata');
        return this.http.get(url);
    };
    MetricService.prototype.createStorageEntity = function (dto) {
        var url = this.buildUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl, '/v2/storage-entities');
        return this.http.post(url, dto);
    };
    MetricService.prototype.updateStorageEntity = function (id, dto) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].metricsBaseUrl + '/v2/storage-entities/' + id;
        return this.http.put(url, dto);
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
    MetricService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
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

/***/ "./src/app/storage-configuration/form-bus.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/storage-configuration/form-bus.service.ts ***!
  \***********************************************************/
/*! exports provided: FormBusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBusService", function() { return FormBusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var FormBusService = /** @class */ (function () {
    function FormBusService() {
        this.storageEntityForm = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.storageEntityFormStream = this.storageEntityForm.asObservable();
    }
    FormBusService.prototype.sendFormData = function (data) {
        this.storageEntityForm.next(data);
    };
    FormBusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FormBusService);
    return FormBusService;
}());



/***/ }),

/***/ "./src/app/storage-configuration/se-text-formatter/se-text-formatter.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/storage-configuration/se-text-formatter/se-text-formatter.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".open-form {\r\n  min-height:15px;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmFnZS1jb25maWd1cmF0aW9uL3NlLXRleHQtZm9ybWF0dGVyL3NlLXRleHQtZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3N0b3JhZ2UtY29uZmlndXJhdGlvbi9zZS10ZXh0LWZvcm1hdHRlci9zZS10ZXh0LWZvcm1hdHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wZW4tZm9ybSB7XHJcbiAgbWluLWhlaWdodDoxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/storage-configuration/se-text-formatter/se-text-formatter.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/storage-configuration/se-text-formatter/se-text-formatter.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SeTextFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeTextFormatterComponent", function() { return SeTextFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/metrics/system-metric.vo */ "./src/app/common/models/metrics/system-metric.vo.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _form_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-bus.service */ "./src/app/storage-configuration/form-bus.service.ts");
/* harmony import */ var _storage_entity_form_storage_entity_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage-entity-form/storage-entity-form.component */ "./src/app/storage-configuration/storage-entity-form/storage-entity-form.component.ts");
/* harmony import */ var _common_models_dtos_owner_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/models/dtos/owner.dto */ "./src/app/common/models/dtos/owner.dto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var SeTextFormatterComponent = /** @class */ (function () {
    function SeTextFormatterComponent(formBus) {
        this.formBus = formBus;
    }
    SeTextFormatterComponent.prototype.ngOnInit = function () {
    };
    SeTextFormatterComponent.prototype.getValue = function () {
        if (this.column === undefined) {
            return this.data['value'];
        }
        return this.data.value;
    };
    SeTextFormatterComponent.prototype.openForm = function () {
        console.log(this.rowData);
        console.log(this.column);
        console.log(this.data);
        var formData = new _storage_entity_form_storage_entity_form_component__WEBPACK_IMPORTED_MODULE_4__["StorageEntityVo"]();
        if (this.column === undefined) {
            formData.id = this.data['dbId'];
            formData.name = this.data['value'].toString();
            formData.type = _common_models_dtos_owner_dto__WEBPACK_IMPORTED_MODULE_5__["StorageEntityType"].DATACENTER;
        }
        else {
            formData.type = _common_models_dtos_owner_dto__WEBPACK_IMPORTED_MODULE_5__["StorageEntityType"].SYSTEM;
            formData.serialNumber = this.getCellValue('serialNumber');
            formData.parentId = this.getCellValue('parentId');
            formData.prefixReferenceId = this.getCellValue('prefixReferenceId');
            formData.name = this.getCellValue('name');
            formData.id = this.getCellValue('id');
            formData.dkc = this.getCellValue('dkc');
            formData.room = this.getCellValue('room');
            formData.rack = this.getCellValue('rack');
            formData.arrayModel = this.getCellValue('arrayModel');
            formData.managementIp = this.getCellValue('managementIp');
        }
        this.formBus.sendFormData(formData);
    };
    SeTextFormatterComponent.prototype.getCellValue = function (valueName) {
        if (this.rowData.cells[valueName] !== undefined) {
            return this.rowData.cells[valueName].value;
        }
        return null;
    };
    SeTextFormatterComponent.ctorParameters = function () { return [
        { type: _form_bus_service__WEBPACK_IMPORTED_MODULE_3__["FormBusService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SeTextFormatterComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__["SystemMetric"])
    ], SeTextFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumn"])
    ], SeTextFormatterComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiRow"])
    ], SeTextFormatterComponent.prototype, "rowData", void 0);
    SeTextFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-se-text-formatter',
            template: __importDefault(__webpack_require__(/*! raw-loader!./se-text-formatter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storage-configuration/se-text-formatter/se-text-formatter.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./se-text-formatter.component.css */ "./src/app/storage-configuration/se-text-formatter/se-text-formatter.component.css")).default]
        }),
        __metadata("design:paramtypes", [_form_bus_service__WEBPACK_IMPORTED_MODULE_3__["FormBusService"]])
    ], SeTextFormatterComponent);
    return SeTextFormatterComponent;
}());



/***/ }),

/***/ "./src/app/storage-configuration/serial-number-formatter/serial-number-formatter.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/storage-configuration/serial-number-formatter/serial-number-formatter.component.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".open-form {\r\n  min-height:15px;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmFnZS1jb25maWd1cmF0aW9uL3NlcmlhbC1udW1iZXItZm9ybWF0dGVyL3NlcmlhbC1udW1iZXItZm9ybWF0dGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3N0b3JhZ2UtY29uZmlndXJhdGlvbi9zZXJpYWwtbnVtYmVyLWZvcm1hdHRlci9zZXJpYWwtbnVtYmVyLWZvcm1hdHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wZW4tZm9ybSB7XHJcbiAgbWluLWhlaWdodDoxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/storage-configuration/serial-number-formatter/serial-number-formatter.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/storage-configuration/serial-number-formatter/serial-number-formatter.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SerialNumberFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialNumberFormatterComponent", function() { return SerialNumberFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/metrics/system-metric.vo */ "./src/app/common/models/metrics/system-metric.vo.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _form_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-bus.service */ "./src/app/storage-configuration/form-bus.service.ts");
/* harmony import */ var _storage_entity_form_storage_entity_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage-entity-form/storage-entity-form.component */ "./src/app/storage-configuration/storage-entity-form/storage-entity-form.component.ts");
/* harmony import */ var _common_models_dtos_owner_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/models/dtos/owner.dto */ "./src/app/common/models/dtos/owner.dto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var SerialNumberFormatterComponent = /** @class */ (function () {
    function SerialNumberFormatterComponent(formBus) {
        this.formBus = formBus;
    }
    SerialNumberFormatterComponent.prototype.ngOnInit = function () {
    };
    SerialNumberFormatterComponent.prototype.openForm = function () {
        var formData = new _storage_entity_form_storage_entity_form_component__WEBPACK_IMPORTED_MODULE_4__["StorageEntityVo"]();
        formData.type = _common_models_dtos_owner_dto__WEBPACK_IMPORTED_MODULE_5__["StorageEntityType"].SYSTEM;
        formData.serialNumber = this.getCellValue('serialNumber');
        formData.parentId = this.getCellValue('parentId');
        formData.prefixReferenceId = this.getCellValue('prefixReferenceId');
        formData.name = this.getCellValue('name');
        formData.id = this.getCellValue('id');
        formData.dkc = this.getCellValue('dkc');
        formData.room = this.getCellValue('room');
        formData.rack = this.getCellValue('rack');
        formData.arrayModel = this.getCellValue('arrayModel');
        formData.managementIp = this.getCellValue('managementIp');
        this.formBus.sendFormData(formData);
    };
    SerialNumberFormatterComponent.prototype.getValue = function () {
        if (this.rowData.cells['serialNumber'] !== undefined || this.rowData.cells['prefixReferenceId'] !== undefined) {
            return [this.rowData.cells['prefixReferenceId'].value, this.rowData.cells['serialNumber'].value].join(' ');
        }
        return null;
    };
    SerialNumberFormatterComponent.prototype.getCellValue = function (valueName) {
        if (this.rowData.cells[valueName] !== undefined) {
            return this.rowData.cells[valueName].value;
        }
        return null;
    };
    SerialNumberFormatterComponent.ctorParameters = function () { return [
        { type: _form_bus_service__WEBPACK_IMPORTED_MODULE_3__["FormBusService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SerialNumberFormatterComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_models_metrics_system_metric_vo__WEBPACK_IMPORTED_MODULE_1__["SystemMetric"])
    ], SerialNumberFormatterComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumn"])
    ], SerialNumberFormatterComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiRow"])
    ], SerialNumberFormatterComponent.prototype, "rowData", void 0);
    SerialNumberFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-serial-number-formatter',
            template: __importDefault(__webpack_require__(/*! raw-loader!./serial-number-formatter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storage-configuration/serial-number-formatter/serial-number-formatter.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./serial-number-formatter.component.css */ "./src/app/storage-configuration/serial-number-formatter/serial-number-formatter.component.css")).default]
        }),
        __metadata("design:paramtypes", [_form_bus_service__WEBPACK_IMPORTED_MODULE_3__["FormBusService"]])
    ], SerialNumberFormatterComponent);
    return SerialNumberFormatterComponent;
}());



/***/ }),

/***/ "./src/app/storage-configuration/storage-configuration-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/storage-configuration/storage-configuration-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: StorageConfigurationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageConfigurationRoutingModule", function() { return StorageConfigurationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_location_storage_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-location/storage-location.component */ "./src/app/storage-configuration/storage-location/storage-location.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var routes = [
    {
        path: 'locations',
        component: _storage_location_storage_location_component__WEBPACK_IMPORTED_MODULE_2__["StorageLocationComponent"],
        data: {
            breadcrumb: 'Locations'
        }
    }
];
var StorageConfigurationRoutingModule = /** @class */ (function () {
    function StorageConfigurationRoutingModule() {
    }
    StorageConfigurationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StorageConfigurationRoutingModule);
    return StorageConfigurationRoutingModule;
}());



/***/ }),

/***/ "./src/app/storage-configuration/storage-configuration.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/storage-configuration/storage-configuration.module.ts ***!
  \***********************************************************************/
/*! exports provided: StorageConfigurationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageConfigurationModule", function() { return StorageConfigurationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _storage_location_storage_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-location/storage-location.component */ "./src/app/storage-configuration/storage-location/storage-location.component.ts");
/* harmony import */ var _storage_configuration_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage-configuration-routing.module */ "./src/app/storage-configuration/storage-configuration-routing.module.ts");
/* harmony import */ var _common_sa_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/sa-common.module */ "./src/app/common/sa-common.module.ts");
/* harmony import */ var _global_statistics_global_statistics_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global-statistics/global-statistics.module */ "./src/app/global-statistics/global-statistics.module.ts");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");
/* harmony import */ var _se_text_formatter_se_text_formatter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./se-text-formatter/se-text-formatter.component */ "./src/app/storage-configuration/se-text-formatter/se-text-formatter.component.ts");
/* harmony import */ var _serial_number_formatter_serial_number_formatter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./serial-number-formatter/serial-number-formatter.component */ "./src/app/storage-configuration/serial-number-formatter/serial-number-formatter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _storage_entity_form_storage_entity_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storage-entity-form/storage-entity-form.component */ "./src/app/storage-configuration/storage-entity-form/storage-entity-form.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var StorageConfigurationModule = /** @class */ (function () {
    function StorageConfigurationModule() {
    }
    StorageConfigurationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _storage_location_storage_location_component__WEBPACK_IMPORTED_MODULE_2__["StorageLocationComponent"],
                _se_text_formatter_se_text_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SeTextFormatterComponent"],
                _serial_number_formatter_serial_number_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SerialNumberFormatterComponent"],
                _storage_entity_form_storage_entity_form_component__WEBPACK_IMPORTED_MODULE_10__["StorageEntityFormComponent"]
            ],
            entryComponents: [
                _se_text_formatter_se_text_formatter_component__WEBPACK_IMPORTED_MODULE_7__["SeTextFormatterComponent"],
                _serial_number_formatter_serial_number_formatter_component__WEBPACK_IMPORTED_MODULE_8__["SerialNumberFormatterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
                _common_sa_common_module__WEBPACK_IMPORTED_MODULE_4__["SaCommonModule"],
                _global_statistics_global_statistics_module__WEBPACK_IMPORTED_MODULE_5__["GlobalStatisticsModule"],
                _storage_configuration_routing_module__WEBPACK_IMPORTED_MODULE_3__["StorageConfigurationRoutingModule"],
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ]
        })
    ], StorageConfigurationModule);
    return StorageConfigurationModule;
}());



/***/ }),

/***/ "./src/app/storage-configuration/storage-entity-form/storage-entity-form.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/storage-configuration/storage-entity-form/storage-entity-form.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".http-error-box {\r\n  background: rgba(246, 165, 163, 0.55);\r\n  border: 2px solid rgba(255,12,0,0.75);\r\n  min-height: 40px;\r\n  color: rgba(94,0,3,0.75);\r\n  padding-top: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmFnZS1jb25maWd1cmF0aW9uL3N0b3JhZ2UtZW50aXR5LWZvcm0vc3RvcmFnZS1lbnRpdHktZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQXFDO0VBQ3JDLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3N0b3JhZ2UtY29uZmlndXJhdGlvbi9zdG9yYWdlLWVudGl0eS1mb3JtL3N0b3JhZ2UtZW50aXR5LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5odHRwLWVycm9yLWJveCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNDYsIDE2NSwgMTYzLCAwLjU1KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwxMiwwLDAuNzUpO1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6IHJnYmEoOTQsMCwzLDAuNzUpO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/storage-configuration/storage-entity-form/storage-entity-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/storage-configuration/storage-entity-form/storage-entity-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: StorageEntityVo, StorageEntityFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageEntityVo", function() { return StorageEntityVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageEntityFormComponent", function() { return StorageEntityFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_models_dtos_owner_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/models/dtos/owner.dto */ "./src/app/common/models/dtos/owner.dto.ts");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _common_models_dtos_storage_entity_request_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/models/dtos/storage-entity-request.dto */ "./src/app/common/models/dtos/storage-entity-request.dto.ts");
/* harmony import */ var _common_models_dtos_storage_entity_detail_request_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/models/dtos/storage-entity-detail-request.dto */ "./src/app/common/models/dtos/storage-entity-detail-request.dto.ts");
/* harmony import */ var _form_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-bus.service */ "./src/app/storage-configuration/form-bus.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var StorageEntityVo = /** @class */ (function () {
    function StorageEntityVo() {
    }
    return StorageEntityVo;
}());

var StorageEntityFormComponent = /** @class */ (function () {
    function StorageEntityFormComponent(metricService, formBusService) {
        this.metricService = metricService;
        this.formBusService = formBusService;
        this.dataSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.submitted = false;
        this.httpErrorDisplayed = false;
        this.httpError = null;
        this.data = new StorageEntityVo();
        this.staticType = _common_models_dtos_owner_dto__WEBPACK_IMPORTED_MODULE_1__["StorageEntityType"];
    }
    StorageEntityFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formBusService.storageEntityFormStream.subscribe(function (data) {
            _this.data = data;
            _this.displayForm = true;
            _this.initFormControls();
        });
        this.initFormControls();
    };
    StorageEntityFormComponent.prototype.initFormControls = function () {
        if (this.data.type !== _common_models_dtos_owner_dto__WEBPACK_IMPORTED_MODULE_1__["StorageEntityType"].DATACENTER) {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                'datacenter': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.data.parentId, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
                'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
                'prefixReferenceId': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.data.prefixReferenceId),
                'serialNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.data.serialNumber),
                'arrayModel': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.data.arrayModel),
                'dkc': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.data.dkc),
                'room': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.data.room, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(32)]),
                'rack': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.data.rack, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(32)]),
                'managementIp': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.data.managementIp),
            });
        }
        else {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            });
        }
    };
    StorageEntityFormComponent.prototype.closeForm = function () {
        this.displayForm = false;
    };
    Object.defineProperty(StorageEntityFormComponent.prototype, "name", {
        get: function () {
            return this.form.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageEntityFormComponent.prototype, "dataCenter", {
        get: function () {
            return this.form.get('datacenter');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageEntityFormComponent.prototype, "room", {
        get: function () {
            return this.form.get('room');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageEntityFormComponent.prototype, "rack", {
        get: function () {
            console.log(this.form.get('rack').errors);
            return this.form.get('rack');
        },
        enumerable: true,
        configurable: true
    });
    StorageEntityFormComponent.prototype.saveChanges = function (forceAsNew) {
        if (forceAsNew === void 0) { forceAsNew = false; }
        var _a = this.transformDataToDto(), dto = _a.dto, detailDto = _a.detailDto;
        if (this.data.id !== undefined && !forceAsNew) {
            this.updateDetails(detailDto);
        }
        else {
            this.saveAsNew(dto, detailDto);
        }
    };
    StorageEntityFormComponent.prototype.updateDetails = function (detailDto) {
        var _this = this;
        this.metricService.updateStorageEntity(this.data.id, detailDto).subscribe(function () { return _this.success(); }, function (error) {
            console.log(error);
        });
    };
    StorageEntityFormComponent.prototype.transformDataToDto = function () {
        var dto = new _common_models_dtos_storage_entity_request_dto__WEBPACK_IMPORTED_MODULE_3__["StorageEntityRequestDto"]();
        dto.name = this.form.value.name;
        dto.type = _common_models_dtos_owner_dto__WEBPACK_IMPORTED_MODULE_1__["StorageEntityType"][this.data.type];
        var detailDto = new _common_models_dtos_storage_entity_detail_request_dto__WEBPACK_IMPORTED_MODULE_4__["StorageEntityDetailRequestDto"]();
        detailDto.name = this.form.value.name;
        if (this.data.type !== _common_models_dtos_owner_dto__WEBPACK_IMPORTED_MODULE_1__["StorageEntityType"].DATACENTER) {
            dto.parentId = this.form.value.datacenter;
            dto.serialNumber = this.form.value.serialNumber;
            detailDto = new _common_models_dtos_storage_entity_detail_request_dto__WEBPACK_IMPORTED_MODULE_4__["StorageEntityDetailRequestDto"]();
            detailDto.arrayModel = this.form.value.arrayModel;
            detailDto.dkc = this.form.value.dkc;
            detailDto.managementIp = this.form.value.managementIp;
            detailDto.prefixReferenceId = this.form.value.prefixReferenceId;
            detailDto.rack = this.form.value.rack;
            detailDto.room = this.form.value.room;
            detailDto.name = this.form.value.name;
            detailDto.serialNumber = this.form.value.serialNumber;
        }
        return { dto: dto, detailDto: detailDto };
    };
    StorageEntityFormComponent.prototype.saveAsNew = function (dto, detailDto) {
        var _this = this;
        this.metricService.createStorageEntity(dto).subscribe(function (response) {
            if (response.storageEntity.id != null && _common_models_dtos_owner_dto__WEBPACK_IMPORTED_MODULE_1__["StorageEntityType"][response.storageEntity.type] !== _common_models_dtos_owner_dto__WEBPACK_IMPORTED_MODULE_1__["StorageEntityType"].DATACENTER) {
                _this.metricService.updateStorageEntity(response.storageEntity.id, detailDto).subscribe(function () { return _this.success(); });
            }
            else {
                _this.success();
            }
        }, 
        // TODO error code as ENUM
        function (response) {
            if (response.error.code === 1002) {
                _this.httpErrorDisplayed = true;
                _this.httpError = 'System already exists under the datacenter.';
                setTimeout(function () { return _this.httpErrorDisplayed = false; }, 10000);
            }
            console.error(response.error);
            console.error('Cannot store the entity: ');
        });
    };
    StorageEntityFormComponent.prototype.success = function () {
        this.closeForm();
        this.dataSaved.emit(true);
    };
    StorageEntityFormComponent.ctorParameters = function () { return [
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_2__["MetricService"] },
        { type: _form_bus_service__WEBPACK_IMPORTED_MODULE_5__["FormBusService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], StorageEntityFormComponent.prototype, "dataCenterList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StorageEntityFormComponent.prototype, "displayForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], StorageEntityFormComponent.prototype, "dataSaved", void 0);
    StorageEntityFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-storage-entity-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./storage-entity-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storage-configuration/storage-entity-form/storage-entity-form.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./storage-entity-form.component.css */ "./src/app/storage-configuration/storage-entity-form/storage-entity-form.component.css")).default]
        }),
        __metadata("design:paramtypes", [_metric_service__WEBPACK_IMPORTED_MODULE_2__["MetricService"],
            _form_bus_service__WEBPACK_IMPORTED_MODULE_5__["FormBusService"]])
    ], StorageEntityFormComponent);
    return StorageEntityFormComponent;
}());



/***/ }),

/***/ "./src/app/storage-configuration/storage-location/storage-location.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/storage-configuration/storage-location/storage-location.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host /deep/ .metric-value {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmFnZS1jb25maWd1cmF0aW9uL3N0b3JhZ2UtbG9jYXRpb24vc3RvcmFnZS1sb2NhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc3RvcmFnZS1jb25maWd1cmF0aW9uL3N0b3JhZ2UtbG9jYXRpb24vc3RvcmFnZS1sb2NhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgL2RlZXAvIC5tZXRyaWMtdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/storage-configuration/storage-location/storage-location.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/storage-configuration/storage-location/storage-location.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StorageLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageLocationComponent", function() { return StorageLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _metric_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../metric.service */ "./src/app/metric.service.ts");
/* harmony import */ var _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/sasi-table/sasi-table.component */ "./src/app/common/components/sasi-table/sasi-table.component.ts");
/* harmony import */ var _global_statistics_formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global-statistics/formatters/alert-formatter/alert-formatter.component */ "./src/app/global-statistics/formatters/alert-formatter/alert-formatter.component.ts");
/* harmony import */ var _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/components/sasi-table/row-group-table/row-group-table.component */ "./src/app/common/components/sasi-table/row-group-table/row-group-table.component.ts");
/* harmony import */ var _se_text_formatter_se_text_formatter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../se-text-formatter/se-text-formatter.component */ "./src/app/storage-configuration/se-text-formatter/se-text-formatter.component.ts");
/* harmony import */ var _serial_number_formatter_serial_number_formatter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../serial-number-formatter/serial-number-formatter.component */ "./src/app/storage-configuration/serial-number-formatter/serial-number-formatter.component.ts");
/* harmony import */ var _form_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-bus.service */ "./src/app/storage-configuration/form-bus.service.ts");
/* harmony import */ var _storage_entity_form_storage_entity_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../storage-entity-form/storage-entity-form.component */ "./src/app/storage-configuration/storage-entity-form/storage-entity-form.component.ts");
/* harmony import */ var _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/components/sasi-table/group-sort-impl */ "./src/app/common/components/sasi-table/group-sort-impl.ts");
/* harmony import */ var _common_models_dtos_owner_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/models/dtos/owner.dto */ "./src/app/common/models/dtos/owner.dto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var StorageLocationComponent = /** @class */ (function () {
    function StorageLocationComponent(metricService, formBus) {
        this.metricService = metricService;
        this.formBus = formBus;
        this.data = [];
        this.options = new _common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiTableOptions"]();
        this.datacenterList = [];
        this.type = _common_models_dtos_owner_dto__WEBPACK_IMPORTED_MODULE_10__["StorageEntityType"];
    }
    StorageLocationComponent.prototype.ngOnInit = function () {
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex('name')
            .withAltLabel('Datacenter / System')
            .withLabel('System')
            .withComponent(_se_text_formatter_se_text_formatter_component__WEBPACK_IMPORTED_MODULE_5__["SeTextFormatterComponent"])
            .withAltSortEnable(false)
            .withIsAggregated(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex('arrayModel')
            .withLabel('Array Model')
            .withComponent(_se_text_formatter_se_text_formatter_component__WEBPACK_IMPORTED_MODULE_5__["SeTextFormatterComponent"])
            .withAltSortEnable(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex('prefixReferenceId')
            .withLabel('Physical Serial Number')
            .withComponent(_serial_number_formatter_serial_number_formatter_component__WEBPACK_IMPORTED_MODULE_6__["SerialNumberFormatterComponent"])
            .withAltSortEnable(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex('dkc')
            .withLabel('Virtual DKCs')
            .withComponent(_se_text_formatter_se_text_formatter_component__WEBPACK_IMPORTED_MODULE_5__["SeTextFormatterComponent"])
            .withAltSortEnable(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex('managementIp')
            .withLabel('Management IP')
            .withComponent(_se_text_formatter_se_text_formatter_component__WEBPACK_IMPORTED_MODULE_5__["SeTextFormatterComponent"])
            .withAltSortEnable(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex('room')
            .withLabel('Room')
            .withComponent(_se_text_formatter_se_text_formatter_component__WEBPACK_IMPORTED_MODULE_5__["SeTextFormatterComponent"])
            .withAltSortEnable(false)
            .build());
        this.options.columns.push(_common_components_sasi_table_sasi_table_component__WEBPACK_IMPORTED_MODULE_2__["SasiColumnBuilder"].getInstance()
            .withIndex('rack')
            .withLabel('Rack')
            .withComponent(_se_text_formatter_se_text_formatter_component__WEBPACK_IMPORTED_MODULE_5__["SeTextFormatterComponent"])
            .withAltSortEnable(false)
            .build());
        this.options.colControlFormatter = _global_statistics_formatters_alert_formatter_alert_formatter_component__WEBPACK_IMPORTED_MODULE_3__["AlertFormatterComponent"];
        this.options.rowComponentFormatter = _common_components_sasi_table_row_group_table_row_group_table_component__WEBPACK_IMPORTED_MODULE_4__["RowGroupTableComponent"];
        this.options.grIndexComponentFormatter = _se_text_formatter_se_text_formatter_component__WEBPACK_IMPORTED_MODULE_5__["SeTextFormatterComponent"];
        this.options.isDataGrouped = true;
        this.options.highlightRow = true;
        this.options.highlightColumn = false;
        // this.options.aggregateValuesService = new SumValueServiceImpl();
        this.options.sortService = new _common_components_sasi_table_group_sort_impl__WEBPACK_IMPORTED_MODULE_9__["GroupSortImpl"]();
        this.options.sortColumnName = 'name';
        this.loadData();
    };
    StorageLocationComponent.prototype.getValue = function (system, property) {
        if (system.detail !== undefined) {
            return system.detail[property];
        }
        return null;
    };
    StorageLocationComponent.prototype.openForm = function (type) {
        var data = new _storage_entity_form_storage_entity_form_component__WEBPACK_IMPORTED_MODULE_8__["StorageEntityVo"]();
        data.type = type;
        this.formBus.sendFormData(data);
    };
    StorageLocationComponent.prototype.loadData = function (force) {
        var _this = this;
        if (force === void 0) { force = true; }
        if (force) {
            this.metricService.getSystemsDetail().subscribe(function (data) {
                _this.data = data;
                _this.datacenterList = _this.data.map(function (datacenter) {
                    return {
                        value: datacenter.storageEntity.id, label: datacenter.storageEntity.name
                    };
                });
            });
        }
    };
    StorageLocationComponent.ctorParameters = function () { return [
        { type: _metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"] },
        { type: _form_bus_service__WEBPACK_IMPORTED_MODULE_7__["FormBusService"] }
    ]; };
    StorageLocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-storage-location',
            template: __importDefault(__webpack_require__(/*! raw-loader!./storage-location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storage-configuration/storage-location/storage-location.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./storage-location.component.css */ "./src/app/storage-configuration/storage-location/storage-location.component.css")).default]
        }),
        __metadata("design:paramtypes", [_metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"],
            _form_bus_service__WEBPACK_IMPORTED_MODULE_7__["FormBusService"]])
    ], StorageLocationComponent);
    return StorageLocationComponent;
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




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

module.exports = __webpack_require__(/*! C:\Apache24\htdocs\sa-new-ui-ts\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map