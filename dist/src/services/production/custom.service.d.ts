/**
 * Данный файл содержит все нестандартные сервисы раздела товары
 * Нестандартным считается сервис, который наследуется от Service<T>, обеспечивая базовый файнкионал
 * для конкретного объекта и расширяет его, либо не наследуется от Service<T>
 */
import { Motor, RegularMotor, RegularOe, Product, OriginalElement, ProductAndOe, ProductsAndMotor, RegularProductAndOe, ShortProduct, ProductSearch, ProductState } from "../../models/index";
import { Service } from "../service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
/**
 * Сервис двигателей
 */
export declare class MotorService extends Service<Motor> {
    constructor(http: HttpClient);
    /**
     * Получить двигатели, для которых применим указанный товар
     * @param id идентификатор товара
     */
    getMotorsByProduct(id: number): Observable<RegularMotor[]>;
}
/**
 * Сервис OEM
 */
export declare class OeService extends Service<OriginalElement> {
    constructor(http: HttpClient);
    getOes(): Observable<RegularOe[]>;
    /**
     * Получить OEM указанного производителя
     * @param id идентификатор производителя OEM
     */
    getOesByBrand(id: number): Observable<OriginalElement[]>;
    /**
     * Создать несколько оригинальных запчастей
     * @param models массив оригинальных запчастей
     */
    createMany(models: OriginalElement[]): Observable<OriginalElement[]>;
}
/**
 * Сервис привязок (применимости)
 */
export declare class ProductsAndMotorService extends Service<ProductsAndMotor> {
    constructor(http: HttpClient);
    /**
     * Создать несколько привязок
     * @param models массив привязок
     */
    createMany(models: ProductsAndMotor[]): Observable<ProductsAndMotor[]>;
    /**
     * Удалить несколько привязок
     * @param models массив привязок
     */
    remove(models: RegularMotor[]): Observable<RegularMotor[]>;
}
/**
 * Сервис кроссов
 */
export declare class ProductAndOeService extends Service<ProductAndOe> {
    constructor(http: HttpClient);
    /**
     * Добавить несколько кроссировок
     * @param models массив привязок
     */
    createMany(models: ProductAndOe[]): Observable<ProductAndOe[]>;
    /**
     * Удалить несколько кроссировок
     * @param models массив привязок
     */
    remove(models: RegularProductAndOe[]): Observable<RegularProductAndOe[]>;
}
/**
 * Сервис товаров
 */
export declare class ProductService extends Service<Product> {
    constructor(http: HttpClient);
    /**
     * Получить все товары
     */
    getProducts(): Observable<Product[]>;
    /**
     * Получить массив товаров для автоподсказок
     */
    getProductsForAutoComplete(): Observable<Product[]>;
    /**
     * Поиск товаров с фильтрацией на сервере
     * @param search параметры поиска
     */
    getShortProducts(search: ProductSearch): Observable<ShortProduct[]>;
    /**
     * Получить статусы товаров
     */
    getStates(): Observable<ProductState[]>;
}
