import { Injectable } from "@angular/core";
import { PartnerCategory } from "../../models/index";
import { Service } from "../service";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PriceService extends Service<PartnerCategory>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/SalesAPI/api/price");
    }
}