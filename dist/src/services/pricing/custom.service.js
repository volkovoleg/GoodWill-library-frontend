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
import { EconomicItem } from "../../models/index";
import { BaseService } from "../service-base";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";
/**
 * Сервис экономического расчета
 */
var EconomicService = /** @class */ (function (_super) {
    __extends(EconomicService, _super);
    function EconomicService(http) {
        var _this = _super.call(this, http) || this;
        _this.url = AppSettings.API_ENDPOINT + "/SalesAPI/api/economic";
        return _this;
    }
    EconomicService.prototype.extractEconomic = function (res) {
        var items = [];
        for (var i = 0; i < res.length; i++)
            items.push(new EconomicItem(res[i].ProductID, res[i].Category, res[i].Code, res[i].StoreCount, res[i].FreeCount, res[i].PriceUsd, res[i].PriceTdOld, res[i].PriceTdNew, res[i].AverageSales, res[i].Supplier, res[i].Comment, 0, 0, res[i].Choi));
        return items;
    };
    /**
     * Получить данные для экономического расчета
     */
    EconomicService.prototype.get = function () {
        return _super.prototype.getRequestWithExtractFunc.call(this, this.url, this.extractEconomic);
        //return this.http.get(this.url).map(this.extractEconomic).catch(this.handleError);
    };
    /**
     * Получить прайс в шаблонном файле
     */
    EconomicService.prototype.getPrice = function () {
        return this.http.get(this.url + "/price").catch(this.handleError);
    };
    /**
     * Получить актуальный курс доллара
     */
    EconomicService.prototype.getUsd = function () {
        return _super.prototype.getRequest.call(this, this.url + "/usd/");
    };
    /**
     * Получить изменения цен
     */
    EconomicService.prototype.getPriceChanges = function () {
        return this.http.get(this.url + "/pricechanges").catch(this.handleError);
    };
    /**
     * Обновить комментарий, средние продажи и остатки на складе поставщика
     * @param item позиция
     */
    EconomicService.prototype.update = function (item) {
        return _super.prototype.put.call(this, item, this.url);
    };
    /**
     * Зафиксировать изменения цен
     * @param items позиции с измененными ценами
     */
    EconomicService.prototype.updatePrices = function (items) {
        return _super.prototype.post.call(this, items, this.url);
    };
    EconomicService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], EconomicService);
    return EconomicService;
}(BaseService));
export { EconomicService };
//# sourceMappingURL=custom.service.js.map