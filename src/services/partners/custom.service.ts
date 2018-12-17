import { Injectable } from "@angular/core";
import { Partner, User, PartnerAndCategory, ShortPartner } from "../../models/index";
import { Service } from "../service";
import { Observable } from "rxjs/Observable";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";

/**
 * Сервис контрагентов
 */
@Injectable()
export class PartnerService extends Service<PartnerProfile>{

    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/SalesAPI/api/partner");
    }

    /**
     * Получить варианты рассылки остатков
     */
    public getRestTypes(): Observable<any[]>{
        return super.getRequest<any[]>(this.url + "/resttypes");
    }

    /**
     * Получить типы блокировки партнёра
     */
    public getBlockTypes(): Observable<any[]>{
        return super.getRequest<any[]>(this.url + "/blocktypes");
    }
    
    /**
     * Получить список контрагентов
     */
    public getPartners(): Observable<ShortPartner[]>{
        return super.getRequest<ShortPartner[]>(this.url);
    }

    /**
     * Получить статусы контрагента
     */
    public getPartnerStates(): Observable<any[]>{
        return super.getRequest<any[]>(this.url + "/states");
    }

    public getRest(id:number):Observable<any>{
        return super.post<number>(id, this.url + "/rest");
        //return this.http.post(this.url + "/rest", id).catch(this.handleError);
    }

    public sendRest(id:number):Observable<any>{
        return super.post<number>(id, this.url + "/sendrest");
        //return this.http.post(this.url + "/sendrest", id).catch(this.handleError);
    }
}

export class PartnerProfile{
    constructor(
        public PartnerInfo: Partner,
        public ContactInfo: User,
        public Prices: PartnerAndCategory[]
    ){}
}