import { Injectable, Inject } from "@angular/core";
import { Http, Response } from '@angular/http';  
import { Observable } from "rxjs/Observable";
import { UserInfo } from "../../models/index";
import { AppSettings } from "../appsetting";
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/observable/of';

Injectable()
export class AuthService{
    
    private tokensEndpoint = AppSettings.API_ENDPOINT + "/AuthService/auth/token";
    private accessTokenKey = "access_token";
    private refreshTokenKey = "refresh_token";
    private jwtHelper: JwtHelper;

    constructor(@Inject(Http) private http: HttpClient){
        this.jwtHelper = new JwtHelper();
    }

    /** Метод возвращает закодированный URI */
    private encodeParams(params: any): string{  
        let body: string = "";  
        for (let key in params) {  
            if (body.length) {  
                body += "&";  
            }  
            body += key + "=";  
            body += encodeURIComponent(params[key]);  
        }  
        return body;  
    }

    /** Метод обновляет данные токенов */
    private updateTokens(response: Response): boolean{
        let body = response.json();
        if (typeof body.access_token !== 'undefined' && typeof body.refresh_token !== 'undefined') { 
            localStorage.setItem(this.accessTokenKey, body.access_token);
            localStorage.setItem(this.refreshTokenKey, body.refresh_token); 
            return true;
        } else {
            return false;
        }
    }

    public renewTokens(): Observable<any>{
        let accessToken = localStorage.getItem(this.accessTokenKey);
        if (accessToken != null && this.isTokenExpired(accessToken)) {
            let refreshToken = localStorage.getItem(this.refreshTokenKey);
            let params: any = { grant_type: "refresh_token", refresh_token: refreshToken };  
            let body: string = this.encodeParams(params);
            return this.http.post(this.tokensEndpoint, body).do(
                (response: Response) => this.updateTokens(response)
            );
        }
        return Observable.of(null);
    }

    /** Метод проверяет истёк ли срок жизни токена */
    public isTokenExpired(token: string): boolean {
        if (token) {
            let expiratonDate = this.jwtHelper.getTokenExpirationDate(token);
            let nowDate = new Date(new Date().getTime() + 180000);
            return (nowDate.getTime() > expiratonDate.getTime());
        }
        return true;
    }

    isAuthentificated(): boolean{
        let accessToken = localStorage.getItem(this.accessTokenKey);
        return accessToken != null;
    }

    isInRoles(roles: string[]): boolean{
        let accessToken = localStorage.getItem(this.accessTokenKey);
        if (accessToken != null) {
            let role = this.jwtHelper.decodeToken(accessToken)['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            if (roles.indexOf(role) !== -1) 
                return true;
        }
        return false;
    }

    getCurrentUser(): UserInfo{
        let accessToken = localStorage.getItem(this.accessTokenKey);
        if (accessToken != null) {
            let decodedAccessToken = this.jwtHelper.decodeToken(accessToken);
            let user = new UserInfo(decodedAccessToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'], 
                                    decodedAccessToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'], 
                                    decodedAccessToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'], 
                                    decodedAccessToken['fio']);
            return user;
        }
        return null;
    }

    admin(): boolean{
        return this.isAuthentificated() && this.isInRoles(["admin", "director"]);
    }

    moderator(): boolean{
        return this.isAuthentificated() && this.isInRoles(["moderator"]);
    }
    
    finDirector(): boolean{
        return this.isAuthentificated() && this.isInRoles(["financial_director"]);
    }

    manager(): boolean{
        return this.isAuthentificated() && this.isInRoles(["manager"]);
    }

    storeAdmin(): boolean{
        return this.isAuthentificated() && this.isInRoles(["store_admin"]);
    }

    buh(): boolean{
        return this.isAuthentificated() && this.isInRoles(["buh"]);
    }

    login(username: string, password: string): Observable<boolean>{
        let params: any = {  
            grant_type: "password",  
            username: username,  
            password: password
        };  
        let body: string = this.encodeParams(params);  
        return this.http.post(this.tokensEndpoint, body)  
            .map((response: Response) => { 
                return this.updateTokens(response); 
            });
    }

    logout(): void{
        localStorage.removeItem(this.accessTokenKey);
        localStorage.removeItem(this.refreshTokenKey);
    }
}