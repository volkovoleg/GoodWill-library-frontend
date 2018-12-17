import { Injectable } from "@angular/core";
import { SpecialPrice, PersonalPrice } from "../../models/index";
import { Service } from "../service";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";

/**
 * Сервис специальных цен (акция)
 */
@Injectable()
export class SpecialPriceService extends Service<SpecialPrice>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/SalesAPI/api/specialprice")
    }    
}

/**
 * Сервис персональных цен
 */
@Injectable()
export class PersonalPriceService extends Service<PersonalPrice>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/SalesAPI/api/personalprice")
    }   
}