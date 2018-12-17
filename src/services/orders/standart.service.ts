import { Injectable } from "@angular/core";
import { Firm } from "../../models/index";
import { Service } from "../service";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FirmService extends Service<Firm>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/SalesAPI/api/firm");
    }
}