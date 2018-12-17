import { Injectable } from "@angular/core";
import { Exchange } from "../../models/index";
import { Service } from "../service";
import { Observable } from "rxjs/Observable";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";
import "../../../rx-js.operators";

/**
 * Сервис контрагентов
 */
@Injectable()
export class ExchangeService extends Service<Exchange>{

    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/SalesAPI/api/exchange");
    }

    /**
     * Получить возможные состояния задач обмена
     */
    public getExchangeStates(): Observable<any[]>{
        return super.getRequest<any[]>(this.url + "/getstates");
    }

    /**
     * Получить возможные типы задач обмена
     */
    public getExchangeSourses(): Observable<any[]>{
        return super.getRequest<any[]>(this.url + "/getsourses");
    }

    /**
     * Получить документы реализации
     * @param id идентификатор заказа
     */
    public createRealization(id: number): Observable<any>{
        return this.http.get(this.url + "/createrealization/" + id).catch(this.handleError);
    }

    /**
     * Получить счет на заказ
     * @param id идентификатор заказа
     */
    public getBill(id: number){
        return this.http.get(this.url + "/getbill/" + id).catch(this.handleError);
    }
}