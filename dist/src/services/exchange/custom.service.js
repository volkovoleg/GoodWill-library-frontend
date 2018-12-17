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
import "../../../rx-js.operators";
/**
 * Сервис контрагентов
 */
var ExchangeService = /** @class */ (function (_super) {
    __extends(ExchangeService, _super);
    function ExchangeService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/SalesAPI/api/exchange") || this;
    }
    /**
     * Получить возможные состояния задач обмена
     */
    ExchangeService.prototype.getExchangeStates = function () {
        return _super.prototype.getRequest.call(this, this.url + "/getstates");
    };
    /**
     * Получить возможные типы задач обмена
     */
    ExchangeService.prototype.getExchangeSourses = function () {
        return _super.prototype.getRequest.call(this, this.url + "/getsourses");
    };
    /**
     * Получить документы реализации
     * @param id идентификатор заказа
     */
    ExchangeService.prototype.createRealization = function (id) {
        return this.http.get(this.url + "/createrealization/" + id).catch(this.handleError);
    };
    /**
     * Получить счет на заказ
     * @param id идентификатор заказа
     */
    ExchangeService.prototype.getBill = function (id) {
        return this.http.get(this.url + "/getbill/" + id).catch(this.handleError);
    };
    ExchangeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ExchangeService);
    return ExchangeService;
}(Service));
export { ExchangeService };
//# sourceMappingURL=custom.service.js.map