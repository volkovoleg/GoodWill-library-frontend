import { Observable } from "rxjs/Observable";
import { BaseService } from "../service-base";
import { AuthService } from "../auth/auth.service";
import { BlockExchange } from "../../models";
import { HttpClient } from "@angular/common/http";
export declare class BlockService extends BaseService {
    protected http: HttpClient;
    private authService;
    private url;
    constructor(http: HttpClient, authService: AuthService);
    get(): Observable<BlockExchange>;
    isBlocked(): Observable<boolean>;
    update(block: BlockExchange): Observable<any>;
}
