import { Injectable } from "@angular/core";
import { Supplier, ReturnDomainModel, DeffectDomainModel, ProductGroup, ShelfTime } from "../../models/index";
import { Service } from "../service";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";

/**
 * Сервис поставщиков
 */
@Injectable()
export class SupplierService extends Service<Supplier>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/supplier");
    }
}

/**
 * Сервис возвратов
 */
@Injectable()
export class ReturnService extends Service<ReturnDomainModel>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/return");
    }
}

@Injectable()
export class DeffectService extends Service<DeffectDomainModel>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/deffect");
    }
}

@Injectable()
export class ProductGroupService extends Service<ProductGroup>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/productgroup");
    }
}

@Injectable()
export class ShelfTimeService extends Service<ShelfTime>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/PurchasingAPI/api/shelftime");
    }
}