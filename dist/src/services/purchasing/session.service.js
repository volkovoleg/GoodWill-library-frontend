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
var SessionService = /** @class */ (function () {
    function SessionService(NEW_ITEMS, ITEMS_FOR_DELETE) {
        this.NEW_ITEMS = NEW_ITEMS;
        this.ITEMS_FOR_DELETE = ITEMS_FOR_DELETE;
    }
    SessionService.prototype.get = function (name) {
        var items = JSON.parse(localStorage.getItem(name));
        if (!items || items === null) {
            items = [];
            this.set(items, name);
        }
        return items;
    };
    SessionService.prototype.set = function (newItems, name) {
        localStorage.setItem(name, JSON.stringify(newItems));
    };
    SessionService.prototype.clear = function (name) {
        localStorage.removeItem(name);
    };
    SessionService.prototype.clearNewItems = function () {
        this.clear(this.NEW_ITEMS);
    };
    SessionService.prototype.clearItemsForDelete = function () {
        this.clear(this.ITEMS_FOR_DELETE);
    };
    SessionService.prototype.getNewItems = function () {
        return this.get(this.NEW_ITEMS);
    };
    SessionService.prototype.getItemsForDelete = function () {
        return this.get(this.ITEMS_FOR_DELETE);
    };
    SessionService.prototype.setNewItems = function (newItems) {
        this.set(newItems, this.NEW_ITEMS);
    };
    SessionService.prototype.setItemsForDelete = function (itemsForDelete) {
        this.set(itemsForDelete, this.ITEMS_FOR_DELETE);
    };
    SessionService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Object, Object])
    ], SessionService);
    return SessionService;
}());
export { SessionService };
var DeliverySessionService = /** @class */ (function (_super) {
    __extends(DeliverySessionService, _super);
    function DeliverySessionService() {
        return _super.call(this, "new_deliveries", "deliveries_for_delete") || this;
    }
    DeliverySessionService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], DeliverySessionService);
    return DeliverySessionService;
}(SessionService));
export { DeliverySessionService };
var OrderSessionService = /** @class */ (function (_super) {
    __extends(OrderSessionService, _super);
    function OrderSessionService() {
        return _super.call(this, "new_orders", "orders_for_delete") || this;
    }
    OrderSessionService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], OrderSessionService);
    return OrderSessionService;
}(SessionService));
export { OrderSessionService };
//# sourceMappingURL=session.service.js.map