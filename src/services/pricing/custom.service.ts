import { Injectable } from "@angular/core";
import { EconomicItem } from "../../models/index";
import { Observable } from "rxjs/Observable";
import { BaseService } from "../service-base";
import { AuthService } from "../auth/auth.service";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";

/**
 * Сервис экономического расчета
 */
@Injectable()
export class EconomicService extends BaseService{

    private url: string;
    constructor(http: HttpClient){
        super(http);
        this.url = AppSettings.API_ENDPOINT + "/SalesAPI/api/economic";
    }    

    private extractEconomic(res: EconomicItem[]): EconomicItem[]{
        let items: EconomicItem[] = [];
        for(let i = 0; i < res.length; i++)
            items.push(new EconomicItem(res[i].ProductID, res[i].Category,
                res[i].Code, res[i].StoreCount, res[i].FreeCount, res[i].PriceUsd,
                res[i].PriceTdOld, res[i].PriceTdNew, res[i].AverageSales,
                res[i].Supplier, res[i].Comment, 0, 0, res[i].Choi));
        return items;
    }

    /**
     * Получить данные для экономического расчета
     */
    public get(): Observable<EconomicItem[]>{
        return super.getRequestWithExtractFunc(this.url, this.extractEconomic);   
        //return this.http.get(this.url).map(this.extractEconomic).catch(this.handleError);
    }

    /**
     * Получить прайс в шаблонном файле
     */
    public getPrice(){
        return this.http.get(this.url + "/price").catch(this.handleError);
    }

    /**
     * Получить актуальный курс доллара
     */
    public getUsd(): Observable<number>{
        return super.getRequest<number>(this.url + "/usd/");
    }

    /**
     * Получить изменения цен
     */
    public getPriceChanges(){
        return this.http.get(this.url + "/pricechanges").catch(this.handleError);
    }

    /**
     * Обновить комментарий, средние продажи и остатки на складе поставщика
     * @param item позиция
     */
    public update(item: EconomicItem): Observable<EconomicItem>{
        return super.put<EconomicItem>(item, this.url);
    }

    /**
     * Зафиксировать изменения цен
     * @param items позиции с измененными ценами
     */
    public updatePrices(items: EconomicItem[]): Observable<EconomicItem[]>{
        return super.post<EconomicItem[]>(items, this.url);
    }
}