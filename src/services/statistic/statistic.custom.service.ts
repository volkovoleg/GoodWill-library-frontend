import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth/auth.service";
import { BaseService } from "../service-base";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class StatisticService extends BaseService{
    
    private url: string;
    private statistic: string;

    constructor(protected http: HttpClient, private authService: AuthService){
        super(http);
        this.url = AppSettings.API_ENDPOINT + "/StatisticsAPI/api/sales";
        this.statistic = AppSettings.API_ENDPOINT + "/SalesAPI/api/statistic";
    }

    public getLastSales(): Observable<any[]>{
        return super.getRequest<any[]>(this.url); 
    }

    public getSalesByManager(): Observable<any[]>{
        return super.getRequest<any[]>(this.url + "/manager");
    }

    public getPayments(): Observable<any[]>{
        return super.getRequest<any[]>(this.statistic + "/payments");
    }

    public getDebts(date: Date): Observable<any[]>{
        return super.getRequest<any[]>(this.statistic + "/debts?date=" + date);
    }

    public getGroupSales(): Observable<any[]>{
        return super.getRequest<any>(this.url + "/group");
    }
}