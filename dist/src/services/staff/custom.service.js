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
import { User } from "../../models/index";
import { Service } from "../service";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";
/**
 * Сервис пользователей
 */
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/SalesAPI/api/user") || this;
    }
    UserService.prototype.extractUsers = function (response) {
        var users = [];
        for (var i = 0; i < response.length; i++) {
            var current = response[i];
            users.push(new User(current.UserID, current.PartnerID, current.RoleID, current.Login, current.FirstName, current.LastName, current.MiddleName, current.Phone, current.Email, current.CreationDate, current.FireDate, current.IsActive));
        }
        return users;
    };
    UserService.prototype.get = function () {
        return _super.prototype.get.call(this).map(this.extractUsers);
    };
    /**
     * Получить список ролей пользователей
     */
    UserService.prototype.getRoles = function () {
        return _super.prototype.getRequest.call(this, this.url + "/roles");
    };
    UserService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}(Service));
export { UserService };
/**
 * Сервис сотрудников склада
 */
var StoreEmployeeService = /** @class */ (function (_super) {
    __extends(StoreEmployeeService, _super);
    function StoreEmployeeService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/SalesAPI/api/storeemployee") || this;
    }
    /**
     * Получить типы сотрудников склада
     */
    StoreEmployeeService.prototype.getTypes = function () {
        return _super.prototype.getRequest.call(this, this.url + "/types");
    };
    StoreEmployeeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], StoreEmployeeService);
    return StoreEmployeeService;
}(Service));
export { StoreEmployeeService };
//# sourceMappingURL=custom.service.js.map