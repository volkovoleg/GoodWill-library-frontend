import { Observable } from "rxjs/Observable";
import { UserInfo } from "../../models/index";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/observable/of';
export declare class AuthService {
    private http;
    private tokensEndpoint;
    private accessTokenKey;
    private refreshTokenKey;
    private jwtHelper;
    constructor(http: HttpClient);
    /** Метод возвращает закодированный URI */
    private encodeParams;
    /** Метод обновляет данные токенов */
    private updateTokens;
    renewTokens(): Observable<any>;
    /** Метод проверяет истёк ли срок жизни токена */
    isTokenExpired(token: string): boolean;
    isAuthentificated(): boolean;
    isInRoles(roles: string[]): boolean;
    getCurrentUser(): UserInfo;
    admin(): boolean;
    moderator(): boolean;
    finDirector(): boolean;
    manager(): boolean;
    storeAdmin(): boolean;
    buh(): boolean;
    login(username: string, password: string): Observable<boolean>;
    logout(): void;
}
