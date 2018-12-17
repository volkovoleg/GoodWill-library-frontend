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
 * Сервис поставщиков
 */
var SupplierService = /** @class */ (function (_super) {
    __extends(SupplierService, _super);
    function SupplierService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/supplier") || this;
    }
    SupplierService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], SupplierService);
    return SupplierService;
}(Service));
export { SupplierService };
/**
 * Сервис возвратов
 */
var ReturnService = /** @class */ (function (_super) {
    __extends(ReturnService, _super);
    function ReturnService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/return") || this;
    }
    ReturnService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ReturnService);
    return ReturnService;
}(Service));
export { ReturnService };
var DeffectService = /** @class */ (function (_super) {
    __extends(DeffectService, _super);
    function DeffectService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/deffect") || this;
    }
    DeffectService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DeffectService);
    return DeffectService;
}(Service));
export { DeffectService };
var ProductGroupService = /** @class */ (function (_super) {
    __extends(ProductGroupService, _super);
    function ProductGroupService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/productgroup") || this;
    }
    ProductGroupService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ProductGroupService);
    return ProductGroupService;
}(Service));
export { ProductGroupService };
var ShelfTimeService = /** @class */ (function (_super) {
    __extends(ShelfTimeService, _super);
    function ShelfTimeService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/shelftime") || this;
    }
    ShelfTimeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ShelfTimeService);
    return ShelfTimeService;
}(Service));
export { ShelfTimeService };
//# sourceMappingURL=standart.service.js.map