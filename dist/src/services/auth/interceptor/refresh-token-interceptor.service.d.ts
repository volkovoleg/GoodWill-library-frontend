import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injector } from "@angular/core";
import 'rxjs/add/operator/finally';
export declare class RefreshTokenInterceptorService implements HttpInterceptor {
    private injector;
    private http;
    private authService;
    /** Массив отклонённых запросов */
    private requests;
    /** Поле состояния обновления */
    private refreshInProgress;
    constructor(injector: Injector);
    /** Метод повторяет отклонённые запросы с новыми данными заголовка Authorization */
    private repeatFailedRequests;
    private repeatRequest;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private handleUnauthorizedError;
}
