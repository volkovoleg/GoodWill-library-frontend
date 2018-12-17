import { Exchange } from "../../models/index";
import { Service } from "../service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import "../../../rx-js.operators";
/**
 * Сервис контрагентов
 */
export declare class ExchangeService extends Service<Exchange> {
    constructor(http: HttpClient);
    /**
     * Получить возможные состояния задач обмена
     */
    getExchangeStates(): Observable<any[]>;
    /**
     * Получить возможные типы задач обмена
     */
    getExchangeSourses(): Observable<any[]>;
    /**
     * Получить документы реализации
     * @param id идентификатор заказа
     */
    createRealization(id: number): Observable<any>;
    /**
     * Получить счет на заказ
     * @param id идентификатор заказа
     */
    getBill(id: number): Observable<any>;
}
