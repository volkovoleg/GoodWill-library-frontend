/**
 * Данный файл содержит все нестандартные сервисы раздела товары
 * Нестандартным считается сервис, который наследуется от Service<T>, обеспечивая базовый файнкионал
 * для конкретного объекта и расширяет его, либо не наследуется от Service<T>
 */

import { Injectable } from "@angular/core";
import { Motor, RegularMotor, RegularOe, Product, OriginalElement, 
    ProductAndOe, ProductsAndMotor, RegularProductAndOe, ShortProduct, ProductSearch, ProductState } from "../../models/index";
import { Service } from "../service";
import { Observable } from "rxjs/Observable";
import { AppSettings } from "../appsetting";
import { HttpClient, HttpParams } from "@angular/common/http";



/**
 * Сервис двигателей
 */
@Injectable()
export class MotorService extends Service<Motor>{

    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/motor");
    }

    /**
     * Получить двигатели, для которых применим указанный товар
     * @param id идентификатор товара
     */
    public getMotorsByProduct(id: number): Observable<RegularMotor[]>{
        return super.getRequest<RegularMotor[]>(this.url + "/getbyproduct/" + id);
    }
}

/**
 * Сервис OEM
 */
@Injectable()
export class OeService extends Service<OriginalElement> {

    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/oe");
    }

    public getOes(): Observable<RegularOe[]>{
        return super.getRequest<RegularOe[]>(this.url + "/getoes");
    }

    /**
     * Получить OEM указанного производителя
     * @param id идентификатор производителя OEM
     */
    public getOesByBrand(id: number): Observable<OriginalElement[]>{
        return super.getRequest<OriginalElement[]>(this.url + "/" + id);
    }

    /**
     * Создать несколько оригинальных запчастей
     * @param models массив оригинальных запчастей
     */
    public createMany(models: OriginalElement[]): Observable<OriginalElement[]>{
        return super.post<OriginalElement[]>(models, this.url + "/createmany");
    }
}

/**
 * Сервис привязок (применимости)
 */
@Injectable()
export class ProductsAndMotorService extends Service<ProductsAndMotor>{

    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/productandmotor");
    }

    /**
     * Создать несколько привязок
     * @param models массив привязок
     */
    public createMany(models: ProductsAndMotor[]): Observable<ProductsAndMotor[]>{
        return super.post<ProductsAndMotor[]>(models, this.url + "/createmany");
    }

    /**
     * Удалить несколько привязок
     * @param models массив привязок
     */
    public remove(models: RegularMotor[]): Observable<RegularMotor[]>{
        return super.post<RegularMotor[]>(models, this.url + "/delete");
    }
}

/**
 * Сервис кроссов
 */
@Injectable()
export class ProductAndOeService extends Service<ProductAndOe> {

    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/cross");
    }

    /**
     * Добавить несколько кроссировок
     * @param models массив привязок
     */
    public createMany(models: ProductAndOe[]): Observable<ProductAndOe[]>{
        return super.post<ProductAndOe[]>(models, this.url + "/createmany");
    }

    /**
     * Удалить несколько кроссировок
     * @param models массив привязок
     */
    public remove(models: RegularProductAndOe[]): Observable<RegularProductAndOe[]>{
        return super.post<RegularProductAndOe[]>(models, this.url + "/delete");
    }
}

/**
 * Сервис товаров
 */
@Injectable()
export class ProductService extends Service<Product>{

    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/CatalogAPI/api/product")
    }

    /**
     * Получить все товары
     */
    public getProducts(): Observable<Product[]>{
        return super.getRequest<Product[]>(this.url);
    }

    /**
     * Получить массив товаров для автоподсказок
     */
    public getProductsForAutoComplete(): Observable<Product[]>{
        return super.getRequest<Product[]>(this.url + "/autocomplete");
    }

    /**
     * Поиск товаров с фильтрацией на сервере
     * @param search параметры поиска
     */
    public getShortProducts(search: ProductSearch): Observable<ShortProduct[]>{
        let params = new HttpParams();
        params = params.append("Code", search.Code == null ? "": search.Code.toString());
        params = params.append("BrandID", search.BrandID == null ? "": search.BrandID.toString());
        params = params.append("CategoryID", search.CategoryID == null ? "": search.CategoryID.toString());
        params = params.append("PartnerID", search.PartnerID == null ? "": search.PartnerID.toString());
        return super.getRequest<ShortProduct[]>(this.url + "/details", { params: params });
    }

    /**
     * Получить статусы товаров
     */
    public getStates(): Observable<ProductState[]>{
        return super.getRequest<ProductState[]>(this.url + "/productstate");
    }
}