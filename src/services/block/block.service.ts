import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BaseService } from "../service-base";
import { AuthService } from "../auth/auth.service";
import { AppSettings } from "../appsetting";
import { BlockExchange } from "../../models";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BlockService extends BaseService{
    private url: string;
    constructor(protected http: HttpClient, private authService: AuthService){
        super(http);
        this.url = AppSettings.API_ENDPOINT + "/SalesAPI/api/blockexchange";
    }

    //#region HttpGet

    public get(): Observable<BlockExchange>{
        return super.getRequest<BlockExchange>(this.url);
    }

    public isBlocked(): Observable<boolean>{
        return super.getRequest<boolean>(this.url + "/isBlock");
    }
    
    //#endregion

    //#region HttpPut

    public update(block: BlockExchange){
        return super.put<BlockExchange>(block, this.url);
    }

    //#endregion
}