import { Injectable } from "@angular/core";
import { Service } from "../service";
import { UserReplacement } from "../../models/index";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";

/**
 * Сервис замещений менеджеров
 */
@Injectable()
export class ReplacementService extends Service<UserReplacement>{

    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/SalesAPI/api/replacement")
    }
}