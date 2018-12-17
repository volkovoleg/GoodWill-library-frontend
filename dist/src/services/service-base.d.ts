import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
export declare abstract class BaseService {
    protected http: HttpClient;
    constructor(http: HttpClient);
    /**
     * Общая форма GET-запроса. Параметр <T> указывает, в какой тип возвращаемого
     * значения будет преобразован ответ от сервера в случае удачного выполнения запроса
     * @param url - URL-адрес
     * @param options - параметры запроса (заголовки и т.п.)
     */
    protected getRequest<T>(url: string, options?: {
        headers?: HttpHeaders;
        observe?: 'body';
        params?: HttpParams;
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
    /**
     * Форма GET-запроса, когда необхоидмо нестандартное преобразование данных, полученных с сервера
     * @param url - URL-адрес
     * @param extractFunc - функция преобразования данных с сервера
     * @param options - параметры запроса (заголовки и т.п.)
     */
    protected getRequestWithExtractFunc<T>(url: string, extractFunc: any, options?: {
        headers?: HttpHeaders;
        observe?: 'body';
        params?: HttpParams;
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<any>;
    /**
     * Общая форма POST-запроса.
     * @param obj - тело запроса
     * @param url - URL-адрес
     */
    protected post<T>(obj: T, url: string): Observable<any>;
    /**
     * Общая форма PUT-запроса
     * @param obj
     * @param url
     */
    protected put<T>(obj: T, url: string): Observable<any>;
    protected delete(url: string): Observable<any>;
    protected handleError(response: any, cought: Observable<any>): ErrorObservable;
}
