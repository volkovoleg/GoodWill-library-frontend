var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Order } from "../../models/index";
import { AuthService } from "../auth/auth.service";
import { BaseService } from "../service-base";
import { AppSettings } from "../appsetting";
import { HttpClient, HttpParams } from "@angular/common/http";
import "../../../rx-js.operators";
var OrderService = /** @class */ (function (_super) {
    __extends(OrderService, _super);
    function OrderService(http, authService) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.authService = authService;
        _this.url = AppSettings.API_ENDPOINT + "/SalesAPI/api/order";
        _this.order = new Order(0, 0, 0, 0, 0, 0, "", "", "", "", 0, 0, "", "", "", "", "", "", "", false, false, true, true, "", null, null, null, null, []);
        return _this;
    }
    OrderService.prototype.clearOrder = function () {
        this.order = new Order(0, 0, 0, 0, 0, 0, "", "", "", "", 0, 0, "", "", "", "", "", "", "", false, false, true, true, "", null, null, null, null, []);
    };
    //#region HttpGet
    /**
     * Получить список заказов
     * @param search - параметры запроса
     */
    OrderService.prototype.getOrders = function (search) {
        if (search) {
            var params = new HttpParams();
            params = params.append("Code1C", search.Code1C == null ? "" : search.Code1C.toString());
            params = params.append("CustomerName", search.CustomerName == null ? "" : search.CustomerName.toString());
            params = params.append("OrderID", search.OrderID == null ? "" : search.OrderID.toString());
            params = params.append("CustomerID", search.CustomerID == null ? "" : search.CustomerID.toString());
            params = params.append("SupplierID", search.SupplierID == null ? "" : search.SupplierID.toString());
            params = params.append("CuratorID", search.CuratorID == null ? "" : search.CuratorID.toString());
            params = params.append("OrderStateID", search.OrderStateID == null ? "" : search.OrderStateID.toString());
            params = params.append("DeliveryTypeID", search.DeliveryTypeID == null ? "" : search.DeliveryTypeID.toString());
            params = params.append("PartnerStateID", search.PartnerStateID == null ? "" : search.PartnerStateID.toString());
            params = params.append("StartDate", search.StartDate == null ? "" : search.StartDate.toDateString());
            params = params.append("EndDate", search.EndDate == null ? "" : search.EndDate.toDateString());
            return _super.prototype.getRequest.call(this, this.url + "/orders", { params: params });
        }
        else
            return _super.prototype.getRequest.call(this, this.url + "/orders");
    };
    /**
     * Получить список статусов заказа
     */
    OrderService.prototype.getOrderStates = function () {
        return _super.prototype.getRequest.call(this, this.url + "/states");
    };
    /**
     * Получить лист развора на определенную дату
     * @param date дата
     */
    OrderService.prototype.getDelivery = function (date) {
        return _super.prototype.getRequest.call(this, this.url + "/delivery?date=" + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    };
    /**
     * Получить список недоставленных заказов на определенную дату
     * @param date дата
     */
    OrderService.prototype.getDeliveryErrors = function (date) {
        return _super.prototype.getRequest.call(this, this.url + "/deliveryerrors?date=" + +date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    };
    /**
     * Получить список типов доставки
     */
    OrderService.prototype.getDeliveryTypes = function () {
        return _super.prototype.getRequest.call(this, this.url + "/deliverytypes");
    };
    /**
     * Получить заказ по идентификатору
     * @param id - идентификатор заказа
     */
    OrderService.prototype.getOrderById = function (id) {
        return _super.prototype.getRequest.call(this, this.url + "/getorder/" + id);
    };
    /**
     * Получить список заказов для объединения с определенным заказом
     * @param id - идентификатор заказа
     */
    OrderService.prototype.getOrdersForCombine = function (id) {
        return _super.prototype.getRequest.call(this, this.url + "/forcombine/" + id);
    };
    /**
     * Получить список заказов, которые содержат определенную позицию
     * @param search - параметры поиска
     */
    OrderService.prototype.getReserves = function (search) {
        var params = new HttpParams();
        params = params.append("Code", search.Code == null ? "" : search.Code.toString());
        params = params.append("ProductID", search.ProductID == null ? "" : search.ProductID.toString());
        params = params.append("BrandID", search.BrandID == null ? "" : search.BrandID.toString());
        params = params.append("CategoryID", search.CategoryID == null ? "" : search.CategoryID.toString());
        params = params.append("ProductStateID", search.ProductStateID == null ? "" : search.ProductStateID.toString());
        params = params.append("InPrice", search.InPrice == null ? "true" : search.InPrice.toString());
        params = params.append("StartDate", search.StartDate == null ? "" : search.StartDate.toDateString());
        params = params.append("EndDate", search.EndDate == null ? "" : search.EndDate.toDateString());
        return _super.prototype.getRequest.call(this, this.url + "/reserves", { params: params });
    };
    /**
     * Запрос на экспорт заказа в Excel
     * @param id - идентификатор заказа
     */
    OrderService.prototype.orderExport = function (id) {
        return this.http.get(this.url + "/export/" + id).catch(this.handleError);
    };
    //#endregion
    //#region HttpPost
    /**
     * Создать заказ
     * @param order - заказ
     */
    OrderService.prototype.createOrder = function (order) {
        return _super.prototype.post.call(this, order, this.url);
    };
    /**
     * Загрузить отчет по продажам
     * @param realization - модель отчета
     */
    OrderService.prototype.uploadSalesReport = function (realization) {
        return this.http.post(this.url + "/uploadsalesreport", realization).catch(this.handleError);
    };
    /**
     * Добавить позицию в заказ
     * @param orderLine - позиция заказа
     */
    OrderService.prototype.addToOrder = function (orderLine) {
        return _super.prototype.post.call(this, orderLine, this.url + "/addtoorder");
    };
    /**
     * Удалить позицию из заказа
     * @param orderLine - позиция заказа
     */
    OrderService.prototype.deleteOrderLine = function (orderLine) {
        return _super.prototype.post.call(this, orderLine, this.url + "/delete");
    };
    //#endregion
    //#region HttpPut
    /**
     * Обновить позицию заказа
     * @param orderLine - позиция заказа
     */
    OrderService.prototype.updateOrderLine = function (orderLine) {
        return _super.prototype.put.call(this, orderLine, this.url + "/updateorderline");
    };
    /**
     * Отправить заказ на сборку
     * @param id - идентификатор заказа
     */
    OrderService.prototype.sendToStore = function (id) {
        return _super.prototype.put.call(this, id, this.url + "/sendtostore");
        //return this.http.put(this.url + "/sendtostore", id).catch(this.handleError);
    };
    /**
     * Объединить заказы
     * @param mainOrderId - основной заказ
     * @param orderForCombineId - заказ для объединения
     */
    OrderService.prototype.combineOrders = function (mainOrderId, orderForCombineId) {
        return _super.prototype.put.call(this, orderForCombineId, this.url + "/combine/" + mainOrderId);
        //return this.http.put(this.url + "/combine/" + mainOrderId, orderForCombineId).catch(this.handleError);
    };
    /**
     * Установить актуальные цены для всех позиций определенного заказа
     * @param id - идентификатор заказа
     */
    OrderService.prototype.setActualPrices = function (id) {
        return _super.prototype.put.call(this, id, this.url + "/actual");
        //return this.http.put(this.url + "/actual", id).catch(this.handleError);
    };
    /**
     * Подтвердить сборку заказа
     * @param order - заказ
     */
    OrderService.prototype.confirmOrder = function (order) {
        return _super.prototype.post.call(this, order, this.url + "/confirm");
    };
    /**
     * Обновить заказ (информацию о доставке)
     * @param order - заказ
     */
    OrderService.prototype.updateOrder = function (order) {
        return _super.prototype.put.call(this, order, this.url + "/update");
    };
    /**
     * Изменить контрагента в определенном заказе
     * @param order - заказ
     */
    OrderService.prototype.updateCustomer = function (order) {
        return _super.prototype.put.call(this, order, this.url + "/customeredit");
    };
    /**
     * Отметить, что заказ загружен в транспорт
     * @param id - идентификатор заказа
     */
    OrderService.prototype.loadOrder = function (id) {
        return _super.prototype.put.call(this, id, this.url + "/load");
        //return this.http.put(this.url + "/load", id).catch(this.handleError);
    };
    /**
     * Отметить, что заказ доставлен/выдан контрагенту
     * @param id - идентификатор заказа
     */
    OrderService.prototype.success = function (id) {
        return _super.prototype.put.call(this, id, this.url + "/success");
        //return this.http.put(this.url + "/success", id).catch(this.handleError);
    };
    /**
     * Отметить ошибку при доставке заказа
     * @param error - ошибка
     */
    OrderService.prototype.error = function (error) {
        return _super.prototype.post.call(this, error, this.url + "/error");
        //return this.http.post(this.url + "/error", error).catch(this.handleError);
    };
    /**
     *
     * @param order
     */
    OrderService.prototype.updateDelivery = function (order) {
        return _super.prototype.put.call(this, order, this.url + "/deliveryedit");
    };
    //#endregion
    //#region HttpDelete
    /**
     * Удалить заказ
     * @param id - идентификатор заказа
     */
    OrderService.prototype.deleteOrder = function (id) {
        return this.http.delete(this.url + "/" + id).catch(this.handleError);
    };
    OrderService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, AuthService])
    ], OrderService);
    return OrderService;
}(BaseService));
export { OrderService };
//# sourceMappingURL=order.service.js.map