import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth/auth.service";
import { BaseService } from "../service-base";
import { HttpClient } from "@angular/common/http";
export declare class StatisticService extends BaseService {
    protected http: HttpClient;
    private authService;
    private url;
    private statistic;
    constructor(http: HttpClient, authService: AuthService);
    getLastSales(): Observable<any[]>;
    getSalesByManager(): Observable<any[]>;
    getPayments(): Observable<any[]>;
    getDebts(date: Date): Observable<any[]>;
    getGroupSales(): Observable<any[]>;
}
