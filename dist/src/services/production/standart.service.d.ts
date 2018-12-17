/**
 * Данный файл содержит все стандартные сервисы раздела товары
 * Стандартным считается сервис, который наследуется от Service<T>, обеспечивая базовый файнкионал
 * для конкретного объекта и ничем его не расширяет
 */
import { Brand, Category, OeBrand, ProductAnalog, PrimaryAndSecondaryElement, VenycleType, ProductForm, CarModel, Manufactor } from "../../models/index";
import { Service } from "../service";
import { HttpClient } from "@angular/common/http";
export declare class CarModelService extends Service<CarModel> {
    constructor(http: HttpClient);
}
export declare class ManufactorService extends Service<Manufactor> {
    constructor(http: HttpClient);
}
/**
 * Сервис производителей
 */
export declare class BrandService extends Service<Brand> {
    constructor(http: HttpClient);
}
/**
 * Сервис катагорий товаров
 */
export declare class CategoryService extends Service<Category> {
    constructor(http: HttpClient);
}
/**
 * Сервис производителей OEM
 */
export declare class OeBrandService extends Service<OeBrand> {
    constructor(http: HttpClient);
}
/**
 * Сервис аналогов (соответствий)
 */
export declare class ProductAnalogService extends Service<ProductAnalog> {
    constructor(http: HttpClient);
}
/**
 * Сервис первичных/вторичных элементов
 */
export declare class PrimaryAndSecondaryService extends Service<PrimaryAndSecondaryElement> {
    constructor(http: HttpClient);
}
/**
 * Сервис типов ТС
 */
export declare class VenycleTypeService extends Service<VenycleType> {
    constructor(http: HttpClient);
}
/**
 * Сервис форм товаров
 */
export declare class ProductFormService extends Service<ProductForm> {
    constructor(http: HttpClient);
}
