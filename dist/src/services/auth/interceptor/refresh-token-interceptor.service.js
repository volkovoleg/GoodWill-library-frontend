var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth.service";
import { Observable } from "rxjs/Observable";
import { Injectable, Injector } from "@angular/core";
import 'rxjs/add/operator/finally';
var RefreshTokenInterceptorService = /** @class */ (function () {
    function RefreshTokenInterceptorService(injector) {
        this.injector = injector;
        /** Массив отклонённых запросов */
        this.requests = [];
        this.authService = injector.get(AuthService);
    }
    /** Метод повторяет отклонённые запросы с новыми данными заголовка Authorization */
    RefreshTokenInterceptorService.prototype.repeatFailedRequests = function () {
        var _this = this;
        this.requests.forEach(function (request) {
            var newRequest = request.failedRequest.clone({ setHeaders: { Authorization: 'Bearer ' + localStorage.getItem("access_token") } });
            _this.repeatRequest(newRequest, request.subscriber);
        });
        this.requests = [];
    };
    RefreshTokenInterceptorService.prototype.repeatRequest = function (request, subscriber) {
        var _this = this;
        //Инжекция HttpClient происходит здесь, чтобы предотвратить переполнение стэка вызовов при инициализации приложения
        this.http = this.injector.get(HttpClient);
        request['repeat'] = true;
        this.http.request(request).subscribe(
        //Оповещаем в инициатор (success) ответ от сервера 
        function (event) { return subscriber.next(event); }, function (error) {
            if (error.status === 401)
                _this.authService.logout();
            //Оповещаем в инициатор (error) ответ от сервера 
            subscriber.error(error);
        }, 
        //Complete запроса, отрабатывает finally инициатора
        function () { return subscriber.complete(); });
    };
    RefreshTokenInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        if (!req.url.includes('/api/') || req['repeat'])
            return next.handle(req);
        //Оборачиваем Observable из вызывающего кода своим, внутренним Observable
        var observable = new Observable(function (subscriber) {
            //Как только вызывающий код сделает подписку мы попадаем сюда и 
            //подписываемся на наш HttpRequest (выполняем оригинальный запрос)
            var originalRequestSubscription = next.handle(req).subscribe(
            //Оповещаем в инициатор (success) ответ от сервера 
            function (response) { return subscriber.next(response); }, function (error) {
                if (error.status === 401)
                    _this.handleUnauthorizedError(subscriber, req);
                //Оповещаем в инициатор (error) ответ от сервера 
                else
                    subscriber.error(error);
            }, 
            //Complete запроса, отрабатывает finally инициатора
            function () { return subscriber.complete(); });
            //На случай если в вызывающем коде произведена отписка от запроса, 
            //если не сделать отписку и здесь, в dev tools браузера не увидим 
            //отмены запросов, т.к. инициатор (например Controller) делает отписку 
            //от нашего враппера, а не от исходного запроса
            return function () { return originalRequestSubscription.unsubscribe(); };
        });
        //Возвращаем вызывающему коду Observable, который под нашим контролем здесь
        return observable;
    };
    RefreshTokenInterceptorService.prototype.handleUnauthorizedError = function (subscriber, req) {
        var _this = this;
        //Сохраняем запрос в массив
        this.requests.push({ subscriber: subscriber, failedRequest: req });
        if (!this.refreshInProgress) {
            this.refreshInProgress = true;
            this.authService.renewTokens().finally(function () { return _this.refreshInProgress = false; }).subscribe(function (response) { return _this.repeatFailedRequests(); }, function (error) { return _this.authService.logout(); });
        }
    };
    RefreshTokenInterceptorService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Injector])
    ], RefreshTokenInterceptorService);
    return RefreshTokenInterceptorService;
}());
export { RefreshTokenInterceptorService };
//# sourceMappingURL=refresh-token-interceptor.service.js.map