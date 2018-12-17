import { BaseService } from "../service-base";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth/auth.service";
import { HttpClient } from "@angular/common/http";
export declare class RestService extends BaseService {
    private authService;
    private url;
    constructor(http: HttpClient, authService: AuthService);
    getVolume(): Observable<any>;
    GetRestDifferences(): Observable<any>;
    getPartnerRests(): Observable<any>;
}
