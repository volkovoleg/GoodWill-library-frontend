var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { UserInfo } from "../../models/index";
import { AppSettings } from "../appsetting";
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/observable/of';
Injectable();
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.tokensEndpoint = AppSettings.API_ENDPOINT + "/AuthService/auth/token";
        this.accessTokenKey = "access_token";
        this.refreshTokenKey = "refresh_token";
        this.jwtHelper = new JwtHelper();
    }
    /** Метод возвращает закодированный URI */
    AuthService.prototype.encodeParams = function (params) {
        var body = "";
        for (var key in params) {
            if (body.length) {
                body += "&";
            }
            body += key + "=";
            body += encodeURIComponent(params[key]);
        }
        return body;
    };
    /** Метод обновляет данные токенов */
    AuthService.prototype.updateTokens = function (response) {
        var body = response.json();
        if (typeof body.access_token !== 'undefined' && typeof body.refresh_token !== 'undefined') {
            localStorage.setItem(this.accessTokenKey, body.access_token);
            localStorage.setItem(this.refreshTokenKey, body.refresh_token);
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.renewTokens = function () {
        var _this = this;
        var accessToken = localStorage.getItem(this.accessTokenKey);
        if (accessToken != null && this.isTokenExpired(accessToken)) {
            var refreshToken = localStorage.getItem(this.refreshTokenKey);
            var params = { grant_type: "refresh_token", refresh_token: refreshToken };
            var body = this.encodeParams(params);
            return this.http.post(this.tokensEndpoint, body).do(function (response) { return _this.updateTokens(response); });
        }
        return Observable.of(null);
    };
    /** Метод проверяет истёк ли срок жизни токена */
    AuthService.prototype.isTokenExpired = function (token) {
        if (token) {
            var expiratonDate = this.jwtHelper.getTokenExpirationDate(token);
            var nowDate = new Date(new Date().getTime() + 180000);
            return (nowDate.getTime() > expiratonDate.getTime());
        }
        return true;
    };
    AuthService.prototype.isAuthentificated = function () {
        var accessToken = localStorage.getItem(this.accessTokenKey);
        return accessToken != null;
    };
    AuthService.prototype.isInRoles = function (roles) {
        var accessToken = localStorage.getItem(this.accessTokenKey);
        if (accessToken != null) {
            var role = this.jwtHelper.decodeToken(accessToken)['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            if (roles.indexOf(role) !== -1)
                return true;
        }
        return false;
    };
    AuthService.prototype.getCurrentUser = function () {
        var accessToken = localStorage.getItem(this.accessTokenKey);
        if (accessToken != null) {
            var decodedAccessToken = this.jwtHelper.decodeToken(accessToken);
            var user = new UserInfo(decodedAccessToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'], decodedAccessToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'], decodedAccessToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'], decodedAccessToken['fio']);
            return user;
        }
        return null;
    };
    AuthService.prototype.admin = function () {
        return this.isAuthentificated() && this.isInRoles(["admin", "director"]);
    };
    AuthService.prototype.moderator = function () {
        return this.isAuthentificated() && this.isInRoles(["moderator"]);
    };
    AuthService.prototype.finDirector = function () {
        return this.isAuthentificated() && this.isInRoles(["financial_director"]);
    };
    AuthService.prototype.manager = function () {
        return this.isAuthentificated() && this.isInRoles(["manager"]);
    };
    AuthService.prototype.storeAdmin = function () {
        return this.isAuthentificated() && this.isInRoles(["store_admin"]);
    };
    AuthService.prototype.buh = function () {
        return this.isAuthentificated() && this.isInRoles(["buh"]);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var params = {
            grant_type: "password",
            username: username,
            password: password
        };
        var body = this.encodeParams(params);
        return this.http.post(this.tokensEndpoint, body)
            .map(function (response) {
            return _this.updateTokens(response);
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem(this.accessTokenKey);
        localStorage.removeItem(this.refreshTokenKey);
    };
    AuthService = __decorate([
        __param(0, Inject(Http)),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map