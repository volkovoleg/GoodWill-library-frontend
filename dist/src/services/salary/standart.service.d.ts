import { Additional, SalesTarget } from "../../models/index";
import { Service } from "../service";
import { HttpClient } from "@angular/common/http";
/**
 * Сервис дополнительных выплат
 */
export declare class AdditionalService extends Service<Additional> {
    constructor(http: HttpClient);
}
/**
 * Сервис задач базового плана
 */
export declare class SalesTargetService extends Service<SalesTarget> {
    constructor(http: HttpClient);
}
