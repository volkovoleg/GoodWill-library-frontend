import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth/auth.service";
import { BaseService } from "./service-base";
import { HttpClient } from "@angular/common/http";

/**
 * Обобщенный сервис
 */
@Injectable()
export abstract class Service<T> extends BaseService {
    protected authService: AuthService;
    constructor(protected http: HttpClient, protected url: string){ 
        super(http);
        this.authService = new AuthService(http);
    }

    public get(): Observable<T[]>{
        return super.getRequest<T[]>(this.url);
    }

    /**
     * GET-запрос
     * Получение объекта по идентификатору
     */
    public getById(id: number): Observable<any>{
        return super.getRequest<any>(this.url + "/" + id);
    }

    /**
     * POST-запрос
     */
    public add(obj: T): Observable<T>{
        return super.post<T>(obj, this.url);
    }

    /**
     * PUT-запрос
     */
    public update(obj: T): Observable<T>{
        return super.put<T>(obj, this.url);
    }
}