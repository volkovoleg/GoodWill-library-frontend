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
import { Enterance, EnteranceLine, AdditionalCost, ManufactoringOrder } from "../../models/index";
import { AuthService } from "../auth/auth.service";
import { BaseService } from "../service-base";
import { AppSettings } from "../appsetting";
import { Service } from "../service";
import { HttpClient } from "@angular/common/http";
var PlanService = /** @class */ (function (_super) {
    __extends(PlanService, _super);
    function PlanService(http) {
        var _this = _super.call(this, http) || this;
        _this.url = AppSettings.API_ENDPOINT + "/PurchasingAPI/api/plan";
        return _this;
    }
    PlanService.prototype.getPlan = function () {
        return _super.prototype.getRequest.call(this, this.url);
    };
    PlanService.prototype.getPlanInfo = function () {
        return _super.prototype.getRequest.call(this, this.url + "/info");
    };
    PlanService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], PlanService);
    return PlanService;
}(BaseService));
export { PlanService };
/**
 * Сервис поступлений на склад
 */
var EnteranceService = /** @class */ (function (_super) {
    __extends(EnteranceService, _super);
    function EnteranceService(http, authService) {
        var _this = _super.call(this, http) || this;
        _this.authService = authService;
        _this.url = AppSettings.API_ENDPOINT + "/PurchasingAPI/api/enterance";
        return _this;
    }
    EnteranceService.prototype.extractEnterance = function (res) {
        var enteranceLines = [];
        for (var i = 0; i < res.EnteranceLines.length; i++) {
            var currentLine = res.EnteranceLines[i];
            enteranceLines.push(new EnteranceLine(currentLine.EnteranceLineID, currentLine.EnteranceID, currentLine.TypeID, currentLine.ProductID, currentLine.Code, currentLine.ProductCount, currentLine.StoreCount, currentLine.PriceFob, currentLine.PriceRub, currentLine.PriceUsd, currentLine.PriceRubOld, currentLine.PriceUsdOld, currentLine.AverageUsd, currentLine.Margin, currentLine.Usd, currentLine.Check, currentLine.PriceUsdInput));
        }
        var additionals = [];
        for (var i = 0; i < res.AdditionalCosts.length; i++) {
            var additional = res.AdditionalCosts[i];
            additionals.push(new AdditionalCost(0, additional.Name, 0, additional.PriceRub));
        }
        var enterance = new Enterance(res.EnteranceID, res.EnteranceTypeID, res.SupplierID, res.EnteranceStateID, res.Name, res.Usd, res.UsdAdditional, res.Margin, res.Gtd, res.CreationDate, enteranceLines, additionals);
        return enterance;
    };
    /**
     * Получить список поступлений
     */
    EnteranceService.prototype.getEnterances = function () {
        return _super.prototype.getRequest.call(this, this.url);
    };
    /**
     * Получить типы постплений
     */
    EnteranceService.prototype.getTypes = function () {
        return _super.prototype.getRequest.call(this, this.url + "/types");
    };
    /** Получить готовые к отгрузке на склад продукты */
    EnteranceService.prototype.GetSupplierRests = function () {
        return _super.prototype.getRequest.call(this, this.url + "/supplierrests");
    };
    /**
     * Получить график поставок
     */
    EnteranceService.prototype.getSupplyShedule = function () {
        return _super.prototype.getRequest.call(this, this.url + "/supplyshedule");
    };
    /**
     * Получить поступление
     * @param id идентификатор поступления
     */
    EnteranceService.prototype.getEnteranceById = function (id) {
        return _super.prototype.getRequestWithExtractFunc.call(this, this.url + "/" + id, this.extractEnterance);
        //return this.http.get(this.url + "/" + id).map(this.extractEnterance).catch(this.handleError);
    };
    /**
     * Создать новое поступление
     * @param enterance поступление
     */
    EnteranceService.prototype.create = function (enterance) {
        return _super.prototype.post.call(this, enterance, this.url).catch(this.handleError);
    };
    /**
     * Подтвердить количество товара позиций постпуления
     * @param id идентификатор поступления
     */
    EnteranceService.prototype.confirmCount = function (id) {
        return _super.prototype.put.call(this, id, this.url + "/confirmcount");
        //return this.http.put(this.url + "/confirmcount", id).catch(this.handleError);
    };
    /**
     * Сохранить экономический расчет поступления
     * @param enterance поступление
     */
    EnteranceService.prototype.confirm = function (enterance) {
        return _super.prototype.put.call(this, enterance, this.url);
    };
    /**
     * Обновить позицию поступления
     * @param line позиция поступления
     */
    EnteranceService.prototype.updateLine = function (line) {
        return _super.prototype.put.call(this, line, this.url + "/updateline");
    };
    /** Обновить дату создания поступления @param enterance поступление */
    EnteranceService.prototype.updateDate = function (enterance) {
        return _super.prototype.put.call(this, enterance, this.url + "/updateDate");
    };
    EnteranceService.prototype.deleteEnterance = function (id) {
        return _super.prototype.delete.call(this, this.url + "/" + id);
    };
    EnteranceService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, AuthService])
    ], EnteranceService);
    return EnteranceService;
}(BaseService));
export { EnteranceService };
/**
 * Сервис прайс-листа поставщиков
 */
var PriceListService = /** @class */ (function (_super) {
    __extends(PriceListService, _super);
    function PriceListService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/pricelist") || this;
    }
    /**
     * Получить список товаров, для которых не установлен ни один поставщик
     */
    PriceListService.prototype.getProductsWithoutSupplier = function () {
        return _super.prototype.getRequest.call(this, this.url + "/withoutsupplier");
    };
    /**
     * Создать несколько цен запчастей для поставщика
     * @param models массив цен запчастей поставщика
     */
    PriceListService.prototype.createMany = function (models) {
        return _super.prototype.post.call(this, models, this.url + "/supplierpricelistupload");
    };
    PriceListService.prototype.updateRests = function (models) {
        return _super.prototype.post.call(this, models, this.url + "/updaterest");
    };
    PriceListService.prototype.deletePriceList = function (id) {
        return _super.prototype.delete.call(this, this.url + "/" + id);
    };
    PriceListService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], PriceListService);
    return PriceListService;
}(Service));
export { PriceListService };
var DeliveryService = /** @class */ (function (_super) {
    __extends(DeliveryService, _super);
    function DeliveryService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/delivery") || this;
    }
    DeliveryService.prototype.getRealDeliveries = function (id) {
        return _super.prototype.getRequest.call(this, this.url + "/real/" + id);
    };
    DeliveryService.prototype.getDeliveriesExport = function () {
        return this.http.get(this.url + "/export");
    };
    DeliveryService.prototype.createMany = function (models) {
        return _super.prototype.post.call(this, models, this.url + "/createmany");
    };
    DeliveryService.prototype.delete = function (id) {
        return _super.prototype.delete.call(this, this.url + "/" + id);
    };
    DeliveryService.prototype.deleteMany = function (models) {
        return _super.prototype.post.call(this, models, this.url + "/deletemany");
    };
    DeliveryService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DeliveryService);
    return DeliveryService;
}(Service));
export { DeliveryService };
var ManufactoringOrderService = /** @class */ (function (_super) {
    __extends(ManufactoringOrderService, _super);
    function ManufactoringOrderService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/order") || this;
    }
    ManufactoringOrderService.prototype.extractOrders = function (res) {
        var orders = [];
        for (var i = 0; i < res.length; i++) {
            orders.push(new ManufactoringOrder(res[i].ManufactoringOrderID, res[i].ProductGroupID, res[i].ProductID, res[i].SupplierID, res[i].ProductCount, res[i].ProduceCount, res[i].ProductionTime, res[i].Price, res[i].CreationDate, res[i].BuildDate));
        }
        return orders;
    };
    ManufactoringOrderService.prototype.get = function () {
        return _super.prototype.getRequestWithExtractFunc.call(this, this.url, this.extractOrders);
        //return this.http.get(this.url).map(this.extractOrders).catch(this.handleError);
    };
    ManufactoringOrderService.prototype.getOrdersExport = function () {
        return this.http.get(this.url + "/export");
    };
    ManufactoringOrderService.prototype.createMany = function (models) {
        return _super.prototype.post.call(this, models, this.url + "/createmany");
    };
    ManufactoringOrderService.prototype.updateOrder = function (order) {
        return _super.prototype.put.call(this, order, this.url);
    };
    ManufactoringOrderService.prototype.updateOrders = function (models) {
        return _super.prototype.put.call(this, models, this.url + "/updateorders");
    };
    ManufactoringOrderService.prototype.delete = function (id) {
        return _super.prototype.delete.call(this, this.url + "/" + id);
    };
    ManufactoringOrderService.prototype.deleteMany = function (models) {
        return _super.prototype.post.call(this, models, this.url + "/deletemany");
    };
    ManufactoringOrderService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ManufactoringOrderService);
    return ManufactoringOrderService;
}(Service));
export { ManufactoringOrderService };
//# sourceMappingURL=custom.service.js.map