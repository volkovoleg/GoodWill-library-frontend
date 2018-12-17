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
 * Сервис специальных цен (акция)
 */
var SpecialPriceService = /** @class */ (function (_super) {
    __extends(SpecialPriceService, _super);
    function SpecialPriceService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/SalesAPI/api/specialprice") || this;
    }
    SpecialPriceService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], SpecialPriceService);
    return SpecialPriceService;
}(Service));
export { SpecialPriceService };
/**
 * Сервис персональных цен
 */
var PersonalPriceService = /** @class */ (function (_super) {
    __extends(PersonalPriceService, _super);
    function PersonalPriceService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/SalesAPI/api/personalprice") || this;
    }
    PersonalPriceService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], PersonalPriceService);
    return PersonalPriceService;
}(Service));
export { PersonalPriceService };
//# sourceMappingURL=standart.service.js.map