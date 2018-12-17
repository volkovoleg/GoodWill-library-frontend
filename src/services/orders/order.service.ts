import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { DeliveryType, DeliveryOrder, DeliveryError, ShortOrder, Order, OrderSearch, OrderLine, OrderResponse, ReservesSearch, OrderState } from "../../models/index";
import { AuthService } from "../auth/auth.service";
import { BaseService } from "../service-base";
import { AppSettings } from "../appsetting";
import { SalesReport, SalesReportResponse } from "../../models/safestorage";
import { HttpClient, HttpParams } from "@angular/common/http";
import "../../../rx-js.operators";

@Injectable()
export class OrderService extends BaseService{

    private url: string;
    
    constructor(protected http: HttpClient, private authService: AuthService){
        super(http);
        this.url = AppSettings.API_ENDPOINT + "/SalesAPI/api/order";
        this.order = new Order(0, 0, 0, 0, 0, 0, "", "", "", "", 0, 0, "", "", "", "", "", "", "", false, false, true, true, "", null, null, null, null, []);
    }

    public order: Order;


    public clearOrder(){
        this.order = new Order(0, 0, 0, 0, 0, 0, "", "", "", "", 0, 0, "", "", "", "", "", "", "", false, false, true, true, "", null, null, null, null, []);
    }

    //#region HttpGet

    /**
     * Получить список заказов
     * @param search - параметры запроса
     */
    public getOrders(search?: OrderSearch): Observable<ShortOrder[]>{
        if (search) {
            let params = new HttpParams();
            params = params.append("Code1C", search.Code1C == null ? "": search.Code1C.toString());
            params = params.append("CustomerName", search.CustomerName == null ? "": search.CustomerName.toString());
            params = params.append("OrderID", search.OrderID == null ? "": search.OrderID.toString());
            params = params.append("CustomerID", search.CustomerID == null ? "": search.CustomerID.toString());
            params = params.append("SupplierID", search.SupplierID == null ? "": search.SupplierID.toString());
            params = params.append("CuratorID", search.CuratorID == null ? "": search.CuratorID.toString());
            params = params.append("OrderStateID", search.OrderStateID == null ? "": search.OrderStateID.toString());
            params = params.append("DeliveryTypeID", search.DeliveryTypeID == null ? "": search.DeliveryTypeID.toString());
            params = params.append("PartnerStateID", search.PartnerStateID == null ? "": search.PartnerStateID.toString());
            params = params.append("StartDate", search.StartDate == null ? "": search.StartDate.toDateString());
            params = params.append("EndDate", search.EndDate == null ? "": search.EndDate.toDateString());
            return super.getRequest<ShortOrder[]>(this.url + "/orders", { params: params });
        }
        else
            return super.getRequest<ShortOrder[]>(this.url + "/orders");
    }

    /**
     * Получить список статусов заказа
     */
    public getOrderStates(): Observable<OrderState[]>{
        return super.getRequest<OrderState[]>(this.url + "/states");       
    }

    /**
     * Получить лист развора на определенную дату
     * @param date дата
     */
    public getDelivery(date: Date): Observable<DeliveryOrder[]>{
        return super.getRequest<DeliveryOrder[]>(this.url + "/delivery?date=" + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +date.getDate());       
    }
    
    /**
     * Получить список недоставленных заказов на определенную дату
     * @param date дата
     */
    public getDeliveryErrors(date: Date): Observable<any[]>{
        return super.getRequest<any[]>(this.url + "/deliveryerrors?date=" + + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +date.getDate());
    }

    /**
     * Получить список типов доставки
     */
    public getDeliveryTypes(): Observable<DeliveryType[]>{
        return super.getRequest<DeliveryType[]>(this.url + "/deliverytypes");
    }

    /**
     * Получить заказ по идентификатору
     * @param id - идентификатор заказа
     */
    public getOrderById(id: number): Observable<Order>{
        return super.getRequest<Order>(this.url + "/getorder/" + id);
    }

    /**
     * Получить список заказов для объединения с определенным заказом
     * @param id - идентификатор заказа
     */
    public getOrdersForCombine(id: number): Observable<number[]>{
        return super.getRequest<number[]>(this.url + "/forcombine/" + id);
    }

    /**
     * Получить список заказов, которые содержат определенную позицию
     * @param search - параметры поиска
     */
    public getReserves(search: ReservesSearch): Observable<any[]>{
        let params = new HttpParams();
        params = params.append("Code", search.Code == null ? "" : search.Code.toString());
        params = params.append("ProductID", search.ProductID == null ? "" : search.ProductID.toString());
        params = params.append("BrandID", search.BrandID == null ? "" : search.BrandID.toString());
        params = params.append("CategoryID", search.CategoryID == null ? "" : search.CategoryID.toString());
        params = params.append("ProductStateID", search.ProductStateID == null ? "" : search.ProductStateID.toString());
        params = params.append("InPrice", search.InPrice == null ? "true" : search.InPrice.toString());
        params = params.append("StartDate", search.StartDate == null ? "" : search.StartDate.toDateString());
        params = params.append("EndDate", search.EndDate == null ? "" : search.EndDate.toDateString());
        return super.getRequest<any[]>(this.url + "/reserves", { params: params });
    }

    /**
     * Запрос на экспорт заказа в Excel
     * @param id - идентификатор заказа
     */
    public orderExport(id:number){
        return this.http.get(this.url + "/export/" + id).catch(this.handleError);
    }

    //#endregion
 
    //#region HttpPost

    /**
     * Создать заказ
     * @param order - заказ
     */
    public createOrder(order: Order): Observable<OrderResponse>{
        return super.post<Order>(order, this.url);
    }

    /**
     * Загрузить отчет по продажам
     * @param realization - модель отчета
     */
    public uploadSalesReport(realization: SalesReport): Observable<SalesReportResponse>{
        return this.http.post(this.url + "/uploadsalesreport", realization).catch(this.handleError);
    }

    /**
     * Добавить позицию в заказ
     * @param orderLine - позиция заказа
     */
    public addToOrder(orderLine: OrderLine): Observable<OrderLine>{
        return super.post<OrderLine>(orderLine, this.url + "/addtoorder");
    }

    /**
     * Удалить позицию из заказа
     * @param orderLine - позиция заказа
     */
    public deleteOrderLine(orderLine: OrderLine):Observable<OrderLine>{
        return super.post<OrderLine>(orderLine, this.url + "/delete");
    }

    //#endregion

    //#region HttpPut

    /**
     * Обновить позицию заказа
     * @param orderLine - позиция заказа
     */
    public updateOrderLine(orderLine: OrderLine): Observable<OrderLine>{
        return super.put<OrderLine>(orderLine, this.url + "/updateorderline");
    }

    /**
     * Отправить заказ на сборку
     * @param id - идентификатор заказа
     */
    public sendToStore(id:number):Observable<Order>{
        return super.put<number>(id, this.url + "/sendtostore");
        //return this.http.put(this.url + "/sendtostore", id).catch(this.handleError);
    }

    /**
     * Объединить заказы
     * @param mainOrderId - основной заказ
     * @param orderForCombineId - заказ для объединения
     */
    public combineOrders(mainOrderId:number, orderForCombineId: number):Observable<Order>{
        return super.put<number>(orderForCombineId, this.url + "/combine/" + mainOrderId);
        //return this.http.put(this.url + "/combine/" + mainOrderId, orderForCombineId).catch(this.handleError);
    }

    /**
     * Установить актуальные цены для всех позиций определенного заказа
     * @param id - идентификатор заказа
     */
    public setActualPrices(id:number):Observable<Order>{
        return super.put<number>(id, this.url + "/actual");
        //return this.http.put(this.url + "/actual", id).catch(this.handleError);
    }

    /**
     * Подтвердить сборку заказа
     * @param order - заказ
     */
    public confirmOrder(order: Order): Observable<Order>{
        return super.post<Order>(order, this.url + "/confirm");
    }

    /**
     * Обновить заказ (информацию о доставке)
     * @param order - заказ
     */
    public updateOrder(order: Order): Observable<Order>{
        return super.put<Order>(order, this.url + "/update");
    }

    /**
     * Изменить контрагента в определенном заказе
     * @param order - заказ
     */
    public updateCustomer(order:Order):Observable<Order>{
        return super.put<Order>(order, this.url + "/customeredit");
    }

    /**
     * Отметить, что заказ загружен в транспорт
     * @param id - идентификатор заказа
     */
    public loadOrder(id: number): Observable<Order>{
        return super.put<number>(id, this.url + "/load");
        //return this.http.put(this.url + "/load", id).catch(this.handleError);
    }

    /**
     * Отметить, что заказ доставлен/выдан контрагенту
     * @param id - идентификатор заказа
     */
    public success(id: number): Observable<Order>{
        return super.put<number>(id, this.url + "/success");
        //return this.http.put(this.url + "/success", id).catch(this.handleError);
    }

    /**
     * Отметить ошибку при доставке заказа
     * @param error - ошибка
     */
    public error(error: DeliveryError): Observable<DeliveryError>{
        return super.post<DeliveryError>(error, this.url + "/error");
        //return this.http.post(this.url + "/error", error).catch(this.handleError);
    }

    /**
     * 
     * @param order 
     */
    public updateDelivery(order: DeliveryOrder): Observable<DeliveryOrder>{
        return super.put<DeliveryOrder>(order, this.url + "/deliveryedit");
    }
    
    //#endregion

    //#region HttpDelete

    /**
     * Удалить заказ
     * @param id - идентификатор заказа
     */
    public deleteOrder(id: number): Observable<number>{
        return this.http.delete(this.url + "/" + id).catch(this.handleError);
    }

    //#endregion
}