import { Injectable } from "@angular/core";
import { Additional, SalesTarget } from "../../models/index";
import { Service } from "../service";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";

/**
 * Сервис дополнительных выплат
 */
@Injectable()
export class AdditionalService extends Service<Additional>{
    constructor(http: HttpClient){
        super(http,  AppSettings.API_ENDPOINT + "/SalaryAPI/api/salaryadditional")
    }
}

/**
 * Сервис задач базового плана
 */
@Injectable()
export class SalesTargetService extends Service<SalesTarget>{
    constructor(http: HttpClient){
        super(http,  AppSettings.API_ENDPOINT + "/SalaryAPI/api/salestarget")
    }
}