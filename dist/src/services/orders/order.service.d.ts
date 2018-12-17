import { Observable } from "rxjs/Observable";
import { DeliveryType, DeliveryOrder, DeliveryError, ShortOrder, Order, OrderSearch, OrderLine, OrderResponse, ReservesSearch, OrderState } from "../../models/index";
import { AuthService } from "../auth/auth.service";
import { BaseService } from "../service-base";
import { SalesReport, SalesReportResponse } from "../../models/safestorage";
import { HttpClient } from "@angular/common/http";
import "../../../rx-js.operators";
export declare class OrderService extends BaseService {
    protected http: HttpClient;
    private authService;
    private url;
    constructor(http: HttpClient, authService: AuthService);
    order: Order;
    clearOrder(): void;
    /**
     * Получить список заказов
     * @param search - параметры запроса
     */
    getOrders(search?: OrderSearch): Observable<ShortOrder[]>;
    /**
     * Получить список статусов заказа
     */
    getOrderStates(): Observable<OrderState[]>;
    /**
     * Получить лист развора на определенную дату
     * @param date дата
     */
    getDelivery(date: Date): Observable<DeliveryOrder[]>;
    /**
     * Получить список недоставленных заказов на определенную дату
     * @param date дата
     */
    getDeliveryErrors(date: Date): Observable<any[]>;
    /**
     * Получить список типов доставки
     */
    getDeliveryTypes(): Observable<DeliveryType[]>;
    /**
     * Получить заказ по идентификатору
     * @param id - идентификатор заказа
     */
    getOrderById(id: number): Observable<Order>;
    /**
     * Получить список заказов для объединения с определенным заказом
     * @param id - идентификатор заказа
     */
    getOrdersForCombine(id: number): Observable<number[]>;
    /**
     * Получить список заказов, которые содержат определенную позицию
     * @param search - параметры поиска
     */
    getReserves(search: ReservesSearch): Observable<any[]>;
    /**
     * Запрос на экспорт заказа в Excel
     * @param id - идентификатор заказа
     */
    orderExport(id: number): Observable<any>;
    /**
     * Создать заказ
     * @param order - заказ
     */
    createOrder(order: Order): Observable<OrderResponse>;
    /**
     * Загрузить отчет по продажам
     * @param realization - модель отчета
     */
    uploadSalesReport(realization: SalesReport): Observable<SalesReportResponse>;
    /**
     * Добавить позицию в заказ
     * @param orderLine - позиция заказа
     */
    addToOrder(orderLine: OrderLine): Observable<OrderLine>;
    /**
     * Удалить позицию из заказа
     * @param orderLine - позиция заказа
     */
    deleteOrderLine(orderLine: OrderLine): Observable<OrderLine>;
    /**
     * Обновить позицию заказа
     * @param orderLine - позиция заказа
     */
    updateOrderLine(orderLine: OrderLine): Observable<OrderLine>;
    /**
     * Отправить заказ на сборку
     * @param id - идентификатор заказа
     */
    sendToStore(id: number): Observable<Order>;
    /**
     * Объединить заказы
     * @param mainOrderId - основной заказ
     * @param orderForCombineId - заказ для объединения
     */
    combineOrders(mainOrderId: number, orderForCombineId: number): Observable<Order>;
    /**
     * Установить актуальные цены для всех позиций определенного заказа
     * @param id - идентификатор заказа
     */
    setActualPrices(id: number): Observable<Order>;
    /**
     * Подтвердить сборку заказа
     * @param order - заказ
     */
    confirmOrder(order: Order): Observable<Order>;
    /**
     * Обновить заказ (информацию о доставке)
     * @param order - заказ
     */
    updateOrder(order: Order): Observable<Order>;
    /**
     * Изменить контрагента в определенном заказе
     * @param order - заказ
     */
    updateCustomer(order: Order): Observable<Order>;
    /**
     * Отметить, что заказ загружен в транспорт
     * @param id - идентификатор заказа
     */
    loadOrder(id: number): Observable<Order>;
    /**
     * Отметить, что заказ доставлен/выдан контрагенту
     * @param id - идентификатор заказа
     */
    success(id: number): Observable<Order>;
    /**
     * Отметить ошибку при доставке заказа
     * @param error - ошибка
     */
    error(error: DeliveryError): Observable<DeliveryError>;
    /**
     *
     * @param order
     */
    updateDelivery(order: DeliveryOrder): Observable<DeliveryOrder>;
    /**
     * Удалить заказ
     * @param id - идентификатор заказа
     */
    deleteOrder(id: number): Observable<number>;
}
