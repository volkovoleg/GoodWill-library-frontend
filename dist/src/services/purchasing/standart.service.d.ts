import { Supplier, ReturnDomainModel, DeffectDomainModel, ProductGroup, ShelfTime } from "../../models/index";
import { Service } from "../service";
import { HttpClient } from "@angular/common/http";
/**
 * Сервис поставщиков
 */
export declare class SupplierService extends Service<Supplier> {
    constructor(http: HttpClient);
}
/**
 * Сервис возвратов
 */
export declare class ReturnService extends Service<ReturnDomainModel> {
    constructor(http: HttpClient);
}
export declare class DeffectService extends Service<DeffectDomainModel> {
    constructor(http: HttpClient);
}
export declare class ProductGroupService extends Service<ProductGroup> {
    constructor(http: HttpClient);
}
export declare class ShelfTimeService extends Service<ShelfTime> {
    constructor(http: HttpClient);
}
