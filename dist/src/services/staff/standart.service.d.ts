import { Service } from "../service";
import { UserReplacement } from "../../models/index";
import { HttpClient } from "@angular/common/http";
/**
 * Сервис замещений менеджеров
 */
export declare class ReplacementService extends Service<UserReplacement> {
    constructor(http: HttpClient);
}
