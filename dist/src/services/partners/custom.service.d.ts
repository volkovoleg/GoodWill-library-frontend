import { Partner, User, PartnerAndCategory, ShortPartner } from "../../models/index";
import { Service } from "../service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
/**
 * Сервис контрагентов
 */
export declare class PartnerService extends Service<PartnerProfile> {
    constructor(http: HttpClient);
    /**
     * Получить варианты рассылки остатков
     */
    getRestTypes(): Observable<any[]>;
    /**
     * Получить типы блокировки партнёра
     */
    getBlockTypes(): Observable<any[]>;
    /**
     * Получить список контрагентов
     */
    getPartners(): Observable<ShortPartner[]>;
    /**
     * Получить статусы контрагента
     */
    getPartnerStates(): Observable<any[]>;
    getRest(id: number): Observable<any>;
    sendRest(id: number): Observable<any>;
}
export declare class PartnerProfile {
    PartnerInfo: Partner;
    ContactInfo: User;
    Prices: PartnerAndCategory[];
    constructor(PartnerInfo: Partner, ContactInfo: User, Prices: PartnerAndCategory[]);
}
