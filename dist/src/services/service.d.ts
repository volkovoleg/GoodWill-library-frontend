import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth/auth.service";
import { BaseService } from "./service-base";
import { HttpClient } from "@angular/common/http";
/**
 * Обобщенный сервис
 */
export declare abstract class Service<T> extends BaseService {
    protected http: HttpClient;
    protected url: string;
    protected authService: AuthService;
    constructor(http: HttpClient, url: string);
    get(): Observable<T[]>;
    /**
     * GET-запрос
     * Получение объекта по идентификатору
     */
    getById(id: number): Observable<any>;
    /**
     * POST-запрос
     */
    add(obj: T): Observable<T>;
    /**
     * PUT-запрос
     */
    update(obj: T): Observable<T>;
}
