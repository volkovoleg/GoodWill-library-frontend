/**
 * Данный файл содержит все стандартные сервисы раздела товары
 * Стандартным считается сервис, который наследуется от Service<T>, обеспечивая базовый файнкионал
 * для конкретного объекта и ничем его не расширяет
 */
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
var CarModelService = /** @class */ (function (_super) {
    __extends(CarModelService, _super);
    function CarModelService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/carmodel") || this;
    }
    CarModelService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], CarModelService);
    return CarModelService;
}(Service));
export { CarModelService };
var ManufactorService = /** @class */ (function (_super) {
    __extends(ManufactorService, _super);
    function ManufactorService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/manufactor") || this;
    }
    ManufactorService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ManufactorService);
    return ManufactorService;
}(Service));
export { ManufactorService };
/**
 * Сервис производителей
 */
var BrandService = /** @class */ (function (_super) {
    __extends(BrandService, _super);
    function BrandService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/brand") || this;
    }
    BrandService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], BrandService);
    return BrandService;
}(Service));
export { BrandService };
/**
 * Сервис катагорий товаров
 */
var CategoryService = /** @class */ (function (_super) {
    __extends(CategoryService, _super);
    function CategoryService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/category") || this;
    }
    CategoryService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], CategoryService);
    return CategoryService;
}(Service));
export { CategoryService };
/**
 * Сервис производителей OEM
 */
var OeBrandService = /** @class */ (function (_super) {
    __extends(OeBrandService, _super);
    function OeBrandService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/oebrand") || this;
    }
    OeBrandService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], OeBrandService);
    return OeBrandService;
}(Service));
export { OeBrandService };
/**
 * Сервис аналогов (соответствий)
 */
var ProductAnalogService = /** @class */ (function (_super) {
    __extends(ProductAnalogService, _super);
    function ProductAnalogService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/productanalog") || this;
    }
    ProductAnalogService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ProductAnalogService);
    return ProductAnalogService;
}(Service));
export { ProductAnalogService };
/**
 * Сервис первичных/вторичных элементов
 */
var PrimaryAndSecondaryService = /** @class */ (function (_super) {
    __extends(PrimaryAndSecondaryService, _super);
    function PrimaryAndSecondaryService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/primaryandsecondaryelement") || this;
    }
    PrimaryAndSecondaryService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], PrimaryAndSecondaryService);
    return PrimaryAndSecondaryService;
}(Service));
export { PrimaryAndSecondaryService };
/**
 * Сервис типов ТС
 */
var VenycleTypeService = /** @class */ (function (_super) {
    __extends(VenycleTypeService, _super);
    function VenycleTypeService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/venycle") || this;
    }
    VenycleTypeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], VenycleTypeService);
    return VenycleTypeService;
}(Service));
export { VenycleTypeService };
/**
 * Сервис форм товаров
 */
var ProductFormService = /** @class */ (function (_super) {
    __extends(ProductFormService, _super);
    function ProductFormService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/productform") || this;
    }
    ProductFormService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ProductFormService);
    return ProductFormService;
}(Service));
export { ProductFormService };
//# sourceMappingURL=standart.service.js.map