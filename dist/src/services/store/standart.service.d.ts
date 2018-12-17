import { Service } from "../service";
import { PartnerStore } from "../../models/rest";
import { HttpClient } from "@angular/common/http";
/** Сервис складов */
export declare class PartnersStoreService extends Service<PartnerStore> {
    constructor(http: HttpClient);
}
