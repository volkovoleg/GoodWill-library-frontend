var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Service } from "../service";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";
/**
 * Сервис дополнительных выплат
 */
var AdditionalService = /** @class */ (function (_super) {
    __extends(AdditionalService, _super);
    function AdditionalService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/SalaryAPI/api/salaryadditional") || this;
    }
    AdditionalService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], AdditionalService);
    return AdditionalService;
}(Service));
export { AdditionalService };
/**
 * Сервис задач базового плана
 */
var SalesTargetService = /** @class */ (function (_super) {
    __extends(SalesTargetService, _super);
    function SalesTargetService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/SalaryAPI/api/salestarget") || this;
    }
    SalesTargetService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], SalesTargetService);
    return SalesTargetService;
}(Service));
export { SalesTargetService };
//# sourceMappingURL=standart.service.js.map