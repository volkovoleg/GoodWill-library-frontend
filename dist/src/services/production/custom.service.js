/**
 * Данный файл содержит все нестандартные сервисы раздела товары
 * Нестандартным считается сервис, который наследуется от Service<T>, обеспечивая базовый файнкионал
 * для конкретного объекта и расширяет его, либо не наследуется от Service<T>
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
import { HttpClient, HttpParams } from "@angular/common/http";
/**
 * Сервис двигателей
 */
var MotorService = /** @class */ (function (_super) {
    __extends(MotorService, _super);
    function MotorService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/motor") || this;
    }
    /**
     * Получить двигатели, для которых применим указанный товар
     * @param id идентификатор товара
     */
    MotorService.prototype.getMotorsByProduct = function (id) {
        return _super.prototype.getRequest.call(this, this.url + "/getbyproduct/" + id);
    };
    MotorService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], MotorService);
    return MotorService;
}(Service));
export { MotorService };
/**
 * Сервис OEM
 */
var OeService = /** @class */ (function (_super) {
    __extends(OeService, _super);
    function OeService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/oe") || this;
    }
    OeService.prototype.getOes = function () {
        return _super.prototype.getRequest.call(this, this.url + "/getoes");
    };
    /**
     * Получить OEM указанного производителя
     * @param id идентификатор производителя OEM
     */
    OeService.prototype.getOesByBrand = function (id) {
        return _super.prototype.getRequest.call(this, this.url + "/" + id);
    };
    /**
     * Создать несколько оригинальных запчастей
     * @param models массив оригинальных запчастей
     */
    OeService.prototype.createMany = function (models) {
        return _super.prototype.post.call(this, models, this.url + "/createmany");
    };
    OeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], OeService);
    return OeService;
}(Service));
export { OeService };
/**
 * Сервис привязок (применимости)
 */
var ProductsAndMotorService = /** @class */ (function (_super) {
    __extends(ProductsAndMotorService, _super);
    function ProductsAndMotorService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/productandmotor") || this;
    }
    /**
     * Создать несколько привязок
     * @param models массив привязок
     */
    ProductsAndMotorService.prototype.createMany = function (models) {
        return _super.prototype.post.call(this, models, this.url + "/createmany");
    };
    /**
     * Удалить несколько привязок
     * @param models массив привязок
     */
    ProductsAndMotorService.prototype.remove = function (models) {
        return _super.prototype.post.call(this, models, this.url + "/delete");
    };
    ProductsAndMotorService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ProductsAndMotorService);
    return ProductsAndMotorService;
}(Service));
export { ProductsAndMotorService };
/**
 * Сервис кроссов
 */
var ProductAndOeService = /** @class */ (function (_super) {
    __extends(ProductAndOeService, _super);
    function ProductAndOeService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/cross") || this;
    }
    /**
     * Добавить несколько кроссировок
     * @param models массив привязок
     */
    ProductAndOeService.prototype.createMany = function (models) {
        return _super.prototype.post.call(this, models, this.url + "/createmany");
    };
    /**
     * Удалить несколько кроссировок
     * @param models массив привязок
     */
    ProductAndOeService.prototype.remove = function (models) {
        return _super.prototype.post.call(this, models, this.url + "/delete");
    };
    ProductAndOeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ProductAndOeService);
    return ProductAndOeService;
}(Service));
export { ProductAndOeService };
/**
 * Сервис товаров
 */
var ProductService = /** @class */ (function (_super) {
    __extends(ProductService, _super);
    function ProductService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/product") || this;
    }
    /**
     * Получить все товары
     */
    ProductService.prototype.getProducts = function () {
        return _super.prototype.getRequest.call(this, this.url);
    };
    /**
     * Получить массив товаров для автоподсказок
     */
    ProductService.prototype.getProductsForAutoComplete = function () {
        return _super.prototype.getRequest.call(this, this.url + "/autocomplete");
    };
    /**
     * Поиск товаров с фильтрацией на сервере
     * @param search параметры поиска
     */
    ProductService.prototype.getShortProducts = function (search) {
        var params = new HttpParams();
        params = params.append("Code", search.Code == null ? "" : search.Code.toString());
        params = params.append("BrandID", search.BrandID == null ? "" : search.BrandID.toString());
        params = params.append("CategoryID", search.CategoryID == null ? "" : search.CategoryID.toString());
        params = params.append("PartnerID", search.PartnerID == null ? "" : search.PartnerID.toString());
        return _super.prototype.getRequest.call(this, this.url + "/details", { params: params });
    };
    /**
     * Получить статусы товаров
     */
    ProductService.prototype.getStates = function () {
        return _super.prototype.getRequest.call(this, this.url + "/productstate");
    };
    ProductService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ProductService);
    return ProductService;
}(Service));
export { ProductService };
//# sourceMappingURL=custom.service.js.map