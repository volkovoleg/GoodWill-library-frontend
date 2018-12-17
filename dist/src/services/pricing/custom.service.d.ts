import { EconomicItem } from "../../models/index";
import { Observable } from "rxjs/Observable";
import { BaseService } from "../service-base";
import { HttpClient } from "@angular/common/http";
/**
 * Сервис экономического расчета
 */
export declare class EconomicService extends BaseService {
    private url;
    constructor(http: HttpClient);
    private extractEconomic;
    /**
     * Получить данные для экономического расчета
     */
    get(): Observable<EconomicItem[]>;
    /**
     * Получить прайс в шаблонном файле
     */
    getPrice(): Observable<any>;
    /**
     * Получить актуальный курс доллара
     */
    getUsd(): Observable<number>;
    /**
     * Получить изменения цен
     */
    getPriceChanges(): Observable<any>;
    /**
     * Обновить комментарий, средние продажи и остатки на складе поставщика
     * @param item позиция
     */
    update(item: EconomicItem): Observable<EconomicItem>;
    /**
     * Зафиксировать изменения цен
     * @param items позиции с измененными ценами
     */
    updatePrices(items: EconomicItem[]): Observable<EconomicItem[]>;
}
