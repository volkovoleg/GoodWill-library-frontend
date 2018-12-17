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
import { AuthService } from "./auth/auth.service";
import { BaseService } from "./service-base";
import { HttpClient } from "@angular/common/http";
/**
 * Обобщенный сервис
 */
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service(http, url) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.url = url;
        _this.authService = new AuthService(http);
        return _this;
    }
    Service.prototype.get = function () {
        return _super.prototype.getRequest.call(this, this.url);
    };
    /**
     * GET-запрос
     * Получение объекта по идентификатору
     */
    Service.prototype.getById = function (id) {
        return _super.prototype.getRequest.call(this, this.url + "/" + id);
    };
    /**
     * POST-запрос
     */
    Service.prototype.add = function (obj) {
        return _super.prototype.post.call(this, obj, this.url);
    };
    /**
     * PUT-запрос
     */
    Service.prototype.update = function (obj) {
        return _super.prototype.put.call(this, obj, this.url);
    };
    Service = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, String])
    ], Service);
    return Service;
}(BaseService));
export { Service };
//# sourceMappingURL=service.js.map