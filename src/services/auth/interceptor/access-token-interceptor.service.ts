import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class AccessTokenInterceptorService implements HttpInterceptor{

    constructor(){ }
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        if (!req.url.includes('/api/')) 
            return next.handle(req);
        let newRequest = req.clone({ setHeaders: { Authorization: 'Bearer ' + localStorage.getItem("access_token") }});
        return next.handle(newRequest);
    }
}