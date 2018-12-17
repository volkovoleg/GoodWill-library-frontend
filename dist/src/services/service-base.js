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
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
var BaseService = /** @class */ (function () {
    function BaseService(http) {
        this.http = http;
    }
    /**
     * Общая форма GET-запроса. Параметр <T> указывает, в какой тип возвращаемого
     * значения будет преобразован ответ от сервера в случае удачного выполнения запроса
     * @param url - URL-адрес
     * @param options - параметры запроса (заголовки и т.п.)
     */
    BaseService.prototype.getRequest = function (url, options) {
        return this.http.get(url, options).catch(this.handleError);
    };
    /**
     * Форма GET-запроса, когда необхоидмо нестандартное преобразование данных, полученных с сервера
     * @param url - URL-адрес
     * @param extractFunc - функция преобразования данных с сервера
     * @param options - параметры запроса (заголовки и т.п.)
     */
    BaseService.prototype.getRequestWithExtractFunc = function (url, extractFunc, options) {
        return this.http.get(url, options).map(extractFunc).catch(this.handleError);
    };
    /**
     * Общая форма POST-запроса.
     * @param obj - тело запроса
     * @param url - URL-адрес
     */
    BaseService.prototype.post = function (obj, url) {
        return this.http.post(url, obj).catch(this.handleError);
    };
    /**
     * Общая форма PUT-запроса
     * @param obj
     * @param url
     */
    BaseService.prototype.put = function (obj, url) {
        return this.http.put(url, obj).catch(this.handleError);
    };
    BaseService.prototype.delete = function (url) {
        return this.http.delete(url).catch(this.handleError);
    };
    BaseService.prototype.handleError = function (response, cought) {
        var message = null;
        if (response instanceof HttpErrorResponse) {
            var errorData = void 0;
            var modelErrors_1 = '';
            try {
                errorData = response.error.Message || '';
                if (response.error.ModelState)
                    Object.getOwnPropertyNames(response.error.ModelState).forEach(function (name) {
                        modelErrors_1 += name + ":";
                        response.error.ModelState[name].forEach(function (error) { return modelErrors_1 += " " + error; });
                        modelErrors_1 += ';';
                    });
            }
            catch (e) { }
            message = { status: response.status, statusText: response.statusText, errorData: errorData, modelErrors: modelErrors_1 };
        }
        else {
            message = { errorData: response.message ? response.message : response.toString() };
        }
        return Observable.throw(message);
    };
    BaseService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], BaseService);
    return BaseService;
}());
export { BaseService };
//# sourceMappingURL=service-base.js.map