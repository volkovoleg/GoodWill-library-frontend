import { Injectable } from "@angular/core";
import { ShortEnterance, Enterance, EnteranceLine, AdditionalCost, EnteranceType, PriceList, ManufactoringOrder, Delivery } from "../../models/index";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth/auth.service";
import { BaseService } from "../service-base";
import { AppSettings } from "../appsetting";
import { Service } from "../service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PlanService extends BaseService{
    private url: string;
    
    constructor(http: HttpClient){
        super(http);
        this.url = AppSettings.API_ENDPOINT + "/PurchasingAPI/api/plan";
    }

    public getPlan(): Observable<any[]>{
        return super.getRequest<any[]>(this.url);
    }

    public getPlanInfo(): Observable<any>{
        return super.getRequest<any>(this.url + "/info")
    }
}

/**
 * Сервис поступлений на склад
 */
@Injectable()
export class EnteranceService extends BaseService{
    private url: string;
    
    constructor(http: HttpClient, private authService: AuthService){
        super(http);
        this.url = AppSettings.API_ENDPOINT + "/PurchasingAPI/api/enterance";
    }

    private extractEnterance(res: Enterance) {
        let enteranceLines: EnteranceLine[] = [];
        for(let i = 0; i < res.EnteranceLines.length; i++){
            let currentLine = res.EnteranceLines[i];
            enteranceLines.push(new EnteranceLine(currentLine.EnteranceLineID, currentLine.EnteranceID, currentLine.TypeID,
                currentLine.ProductID, currentLine.Code, currentLine.ProductCount, currentLine.StoreCount,
                currentLine.PriceFob, currentLine.PriceRub, currentLine.PriceUsd, currentLine.PriceRubOld, 
                currentLine.PriceUsdOld, currentLine.AverageUsd, currentLine.Margin, currentLine.Usd, currentLine.Check, currentLine.PriceUsdInput));
        }

        let additionals: AdditionalCost[] = [];
        for(let i = 0; i< res.AdditionalCosts.length; i++){
            let additional = res.AdditionalCosts[i];
            additionals.push(new AdditionalCost(0, additional.Name, 0, additional.PriceRub));
        }
        let enterance = new Enterance(res.EnteranceID, res.EnteranceTypeID, res.SupplierID, res.EnteranceStateID, 
            res.Name, res.Usd, res.UsdAdditional, res.Margin, res.Gtd, res.CreationDate, enteranceLines, additionals);
        return enterance;
    }

    /**
     * Получить список поступлений
     */
    public getEnterances(): Observable<ShortEnterance[]>{
        return super.getRequest<ShortEnterance[]>(this.url);
    }

    /**
     * Получить типы постплений
     */
    public getTypes(): Observable<EnteranceType[]>{
        return super.getRequest<EnteranceType[]>(this.url + "/types");
    }

    /** Получить готовые к отгрузке на склад продукты */
    public GetSupplierRests(): Observable<any[]>{
        return super.getRequest<any[]>(this.url + "/supplierrests");
    }

    /**
     * Получить график поставок
     */
    public getSupplyShedule(): Observable<any[]>{
        return super.getRequest<any[]>(this.url + "/supplyshedule");
    }

    /**
     * Получить поступление
     * @param id идентификатор поступления
     */
    public getEnteranceById(id: number): Observable<Enterance>{
        return super.getRequestWithExtractFunc(this.url + "/" + id, this.extractEnterance);
        //return this.http.get(this.url + "/" + id).map(this.extractEnterance).catch(this.handleError);
    }

    /**
     * Создать новое поступление
     * @param enterance поступление
     */
    public create(enterance: Enterance): Observable<any>{
        return super.post<Enterance>(enterance, this.url).catch(this.handleError);
    }

    /**
     * Подтвердить количество товара позиций постпуления
     * @param id идентификатор поступления
     */
    public confirmCount(id: number){
        return super.put<number>(id, this.url + "/confirmcount");
        //return this.http.put(this.url + "/confirmcount", id).catch(this.handleError);
    }

    /**
     * Сохранить экономический расчет поступления
     * @param enterance поступление 
     */
    public confirm(enterance: Enterance): Observable<Enterance>{
        return super.put<Enterance>(enterance, this.url);
    }

    /**
     * Обновить позицию поступления
     * @param line позиция поступления
     */
    public updateLine(line: EnteranceLine){
        return super.put<EnteranceLine>(line, this.url + "/updateline");
    }

    /** Обновить дату создания поступления @param enterance поступление */
    public updateDate(enterance: Enterance){
        return super.put<Enterance>(enterance, this.url + "/updateDate");
    }
    
    public deleteEnterance(id: number){
        return super.delete(this.url + "/" + id)
    }
}

/**
 * Сервис прайс-листа поставщиков
 */
@Injectable()
export class PriceListService extends Service<PriceList>{

    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/pricelist")
    }

    /**
     * Получить список товаров, для которых не установлен ни один поставщик
     */
    public getProductsWithoutSupplier(): Observable<any[]>{
        return super.getRequest<any[]>(this.url + "/withoutsupplier");
    }

    /**
     * Создать несколько цен запчастей для поставщика
     * @param models массив цен запчастей поставщика
     */
    public createMany(models: PriceList[]): Observable<PriceList[]>{
        return super.post<PriceList[]>(models, this.url + "/supplierpricelistupload");
    }

    public updateRests(models: any[]): Observable<any[]>{
        return super.post<any[]>(models, this.url + "/updaterest")
    }

    public deletePriceList(id: number){
        return super.delete(this.url + "/" + id);
    }
}

@Injectable()
export class DeliveryService extends Service<Delivery>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/delivery");
    }

    getRealDeliveries(id: number): Observable<any[]>{
        return super.getRequest<any[]>(this.url + "/real/" + id);
    }

    getDeliveriesExport(): Observable<any>{
        return this.http.get(this.url + "/export");
    }

    createMany(models: Delivery[]){
        return super.post<Delivery[]>(models, this.url + "/createmany")
    }

    delete(id){
        return super.delete(this.url + "/" + id);
    }

    deleteMany(models: any[]){
        return super.post<any[]>(models, this.url + "/deletemany")
    }
}

@Injectable()
export class ManufactoringOrderService extends Service<ManufactoringOrder>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/order");
    }

    private extractOrders(res: ManufactoringOrder[]){
        let orders: ManufactoringOrder[] = [];
        for(let i = 0; i < res.length; i++){
            orders.push(new ManufactoringOrder(res[i].ManufactoringOrderID, res[i].ProductGroupID, res[i].ProductID, res[i].SupplierID, 
                res[i].ProductCount, res[i].ProduceCount, res[i].ProductionTime, res[i].Price, res[i].CreationDate, res[i].BuildDate));
        }
        return orders;
    }

    get(): Observable<ManufactoringOrder[]>{
        return super.getRequestWithExtractFunc<ManufactoringOrder[]>(this.url, this.extractOrders);
        //return this.http.get(this.url).map(this.extractOrders).catch(this.handleError);
    }

    getOrdersExport(): Observable<any>{
        return this.http.get(this.url + "/export");
    }

    createMany(models: ManufactoringOrder[]){
        return super.post<ManufactoringOrder[]>(models, this.url + "/createmany");
    }

    updateOrder(order: ManufactoringOrder){
        return super.put<ManufactoringOrder>(order, this.url);
    }

    updateOrders(models: any[]): Observable<any[]>{
        return super.put<any[]>(models, this.url + "/updateorders");
    }

    delete(id){
        return super.delete(this.url + "/" + id);
    }

    deleteMany(models: any[]){
        return super.post<any[]>(models, this.url + "/deletemany")
    }
}