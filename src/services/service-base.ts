import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Injectable()
export abstract class BaseService{
    constructor(protected http: HttpClient){}

    /**
     * Общая форма GET-запроса. Параметр <T> указывает, в какой тип возвращаемого 
     * значения будет преобразован ответ от сервера в случае удачного выполнения запроса
     * @param url - URL-адрес
     * @param options - параметры запроса (заголовки и т.п.)
     */
    protected getRequest<T>(url: string, options?: { headers?: HttpHeaders; 
        observe?: 'body'; params?: HttpParams; reportProgress?: boolean; 
        responseType?: 'json'; withCredentials?: boolean; }): Observable<T>{
        return this.http.get(url, options).catch(this.handleError);
    }

    /**
     * Форма GET-запроса, когда необхоидмо нестандартное преобразование данных, полученных с сервера
     * @param url - URL-адрес
     * @param extractFunc - функция преобразования данных с сервера
     * @param options - параметры запроса (заголовки и т.п.)
     */
    protected getRequestWithExtractFunc<T>(url: string, extractFunc, options?: { headers?: HttpHeaders; 
        observe?: 'body'; params?: HttpParams; reportProgress?: boolean; 
        responseType?: 'json'; withCredentials?: boolean; }){
        return this.http.get(url, options).map(extractFunc).catch(this.handleError);
    }

    /**
     * Общая форма POST-запроса.
     * @param obj - тело запроса
     * @param url - URL-адрес
     */
    protected post<T>(obj: T, url: string): Observable<any>{
        return this.http.post(url, obj).catch(this.handleError);
    }

    /**
     * Общая форма PUT-запроса
     * @param obj 
     * @param url 
     */
    protected put<T>(obj: T, url: string): Observable<any>{
        return this.http.put(url, obj).catch(this.handleError);
    }

    protected delete(url: string){
        return this.http.delete(url).catch(this.handleError);
    }

    protected handleError(response: any, cought: Observable<any>): ErrorObservable{
        let message = null;
        if (response instanceof HttpErrorResponse) {
            let errorData;
            let modelErrors = '';
            try { 
                errorData = response.error.Message || '';
                if (response.error.ModelState)
                    Object.getOwnPropertyNames(response.error.ModelState).forEach(name => { 
                        modelErrors += `${name}:`;
                        response.error.ModelState[name].forEach(error => modelErrors += ` ${error}`);
                        modelErrors += ';';
                    });
            } 
            catch (e) { }
            message = { status: response.status, statusText: response.statusText, errorData: errorData, modelErrors: modelErrors };
        } else {
            message = { errorData: response.message ? response.message : response.toString() };
        }
        return Observable.throw(message);
    }
}