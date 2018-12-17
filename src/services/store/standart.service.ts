import { Injectable } from "@angular/core";
import { Service } from "../service";
import { PartnerStore } from "../../models/rest";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";

/** Сервис складов */
@Injectable()
export class PartnersStoreService extends Service<PartnerStore>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/SalesAPI/api/store");
    }
}