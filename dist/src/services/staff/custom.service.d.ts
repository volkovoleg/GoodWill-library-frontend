import { User, UserRole, StoreEmployee, StoreEmployeeType } from "../../models/index";
import { Service } from "../service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
/**
 * Сервис пользователей
 */
export declare class UserService extends Service<User> {
    constructor(http: HttpClient);
    private extractUsers;
    get(): Observable<User[]>;
    /**
     * Получить список ролей пользователей
     */
    getRoles(): Observable<UserRole[]>;
}
/**
 * Сервис сотрудников склада
 */
export declare class StoreEmployeeService extends Service<StoreEmployee> {
    constructor(http: HttpClient);
    /**
     * Получить типы сотрудников склада
     */
    getTypes(): Observable<StoreEmployeeType[]>;
}
