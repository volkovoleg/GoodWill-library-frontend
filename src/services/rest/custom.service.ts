import { Injectable } from "@angular/core";
import { BaseService } from "../service-base";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth/auth.service";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RestService extends BaseService{
    private url: string;

    constructor(http: HttpClient ,private authService: AuthService){
        super(http);
        this.url = AppSettings.API_ENDPOINT + "/SalesAPI/api/rest";
    }

    public getVolume(): Observable<any>{
        return super.getRequest<any>(this.url + '/getvolume');
    }

    public GetRestDifferences(): Observable<any>{
        return super.getRequest<any>(this.url + '/getdifferences');
    }

    public getPartnerRests(): Observable<any>{
        return super.getRequest<any>(this.url + '/getpartnerrests');
    }
}