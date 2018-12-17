/**
 * Данный файл содержит все стандартные сервисы раздела товары
 * Стандартным считается сервис, который наследуется от Service<T>, обеспечивая базовый файнкионал
 * для конкретного объекта и ничем его не расширяет
 */

import { Injectable } from "@angular/core";
import { Brand, Category, OeBrand, ProductAnalog, PrimaryAndSecondaryElement, VenycleType, ProductForm, CarModel, Manufactor } from "../../models/index";
import { Service } from "../service";
import { AuthService } from "../auth/auth.service";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CarModelService extends Service<CarModel>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/carmodel");
    }
}

@Injectable()
export class ManufactorService extends Service<Manufactor>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/manufactor");
    }
}

/**
 * Сервис производителей
 */
@Injectable()
export class BrandService extends Service<Brand> {
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/brand");
    }
}

/**
 * Сервис катагорий товаров
 */
@Injectable()
export class CategoryService extends Service<Category> {
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/category");
    }
}

/**
 * Сервис производителей OEM
 */
@Injectable()
export class OeBrandService extends Service<OeBrand> {
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/oebrand");
    }
}

/**
 * Сервис аналогов (соответствий)
 */
@Injectable()
export class ProductAnalogService extends Service<ProductAnalog> {
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/productanalog");
    }
}

/**
 * Сервис первичных/вторичных элементов
 */
@Injectable()
export class PrimaryAndSecondaryService extends Service<PrimaryAndSecondaryElement> {
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/primaryandsecondaryelement");
    }
}

/**
 * Сервис типов ТС
 */
@Injectable()
export class VenycleTypeService extends Service<VenycleType>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/venycle");
    }
}

/**
 * Сервис форм товаров
 */
@Injectable()
export class ProductFormService extends Service<ProductForm>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/productform");
    }
}