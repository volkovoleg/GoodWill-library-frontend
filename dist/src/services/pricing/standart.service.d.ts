import { SpecialPrice, PersonalPrice } from "../../models/index";
import { Service } from "../service";
import { HttpClient } from "@angular/common/http";
/**
 * Сервис специальных цен (акция)
 */
export declare class SpecialPriceService extends Service<SpecialPrice> {
    constructor(http: HttpClient);
}
/**
 * Сервис персональных цен
 */
export declare class PersonalPriceService extends Service<PersonalPrice> {
    constructor(http: HttpClient);
}
