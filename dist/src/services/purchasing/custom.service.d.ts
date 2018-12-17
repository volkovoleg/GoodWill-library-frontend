import { ShortEnterance, Enterance, EnteranceLine, EnteranceType, PriceList, ManufactoringOrder, Delivery } from "../../models/index";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth/auth.service";
import { BaseService } from "../service-base";
import { Service } from "../service";
import { HttpClient } from "@angular/common/http";
export declare class PlanService extends BaseService {
    private url;
    constructor(http: HttpClient);
    getPlan(): Observable<any[]>;
    getPlanInfo(): Observable<any>;
}
/**
 * Сервис поступлений на склад
 */
export declare class EnteranceService extends BaseService {
    private authService;
    private url;
    constructor(http: HttpClient, authService: AuthService);
    private extractEnterance;
    /**
     * Получить список поступлений
     */
    getEnterances(): Observable<ShortEnterance[]>;
    /**
     * Получить типы постплений
     */
    getTypes(): Observable<EnteranceType[]>;
    /** Получить готовые к отгрузке на склад продукты */
    GetSupplierRests(): Observable<any[]>;
    /**
     * Получить график поставок
     */
    getSupplyShedule(): Observable<any[]>;
    /**
     * Получить поступление
     * @param id идентификатор поступления
     */
    getEnteranceById(id: number): Observable<Enterance>;
    /**
     * Создать новое поступление
     * @param enterance поступление
     */
    create(enterance: Enterance): Observable<any>;
    /**
     * Подтвердить количество товара позиций постпуления
     * @param id идентификатор поступления
     */
    confirmCount(id: number): Observable<any>;
    /**
     * Сохранить экономический расчет поступления
     * @param enterance поступление
     */
    confirm(enterance: Enterance): Observable<Enterance>;
    /**
     * Обновить позицию поступления
     * @param line позиция поступления
     */
    updateLine(line: EnteranceLine): Observable<any>;
    /** Обновить дату создания поступления @param enterance поступление */
    updateDate(enterance: Enterance): Observable<any>;
    deleteEnterance(id: number): Observable<any>;
}
/**
 * Сервис прайс-листа поставщиков
 */
export declare class PriceListService extends Service<PriceList> {
    constructor(http: HttpClient);
    /**
     * Получить список товаров, для которых не установлен ни один поставщик
     */
    getProductsWithoutSupplier(): Observable<any[]>;
    /**
     * Создать несколько цен запчастей для поставщика
     * @param models массив цен запчастей поставщика
     */
    createMany(models: PriceList[]): Observable<PriceList[]>;
    updateRests(models: any[]): Observable<any[]>;
    deletePriceList(id: number): Observable<any>;
}
export declare class DeliveryService extends Service<Delivery> {
    constructor(http: HttpClient);
    getRealDeliveries(id: number): Observable<any[]>;
    getDeliveriesExport(): Observable<any>;
    createMany(models: Delivery[]): Observable<any>;
    delete(id: any): Observable<any>;
    deleteMany(models: any[]): Observable<any>;
}
export declare class ManufactoringOrderService extends Service<ManufactoringOrder> {
    constructor(http: HttpClient);
    private extractOrders;
    get(): Observable<ManufactoringOrder[]>;
    getOrdersExport(): Observable<any>;
    createMany(models: ManufactoringOrder[]): Observable<any>;
    updateOrder(order: ManufactoringOrder): Observable<any>;
    updateOrders(models: any[]): Observable<any[]>;
    delete(id: any): Observable<any>;
    deleteMany(models: any[]): Observable<any>;
}
