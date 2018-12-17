import { Injectable } from "@angular/core";
import { User, UserRole, StoreEmployee, StoreEmployeeType } from  "../../models/index";
import { Service } from "../service";
import { Observable } from "rxjs/Observable";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";

/**
 * Сервис пользователей
 */
@Injectable()
export class UserService extends Service<User>{

    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/SalesAPI/api/user")
    }

    private extractUsers(response: User[]): User[]{
        let users: User[] = [];
        for(let i = 0; i < response.length; i++){
            let current: User = response[i];
            users.push(new User(current.UserID, current.PartnerID, current.RoleID, 
                                current.Login, current.FirstName, current.LastName, 
                                current.MiddleName, current.Phone, current.Email, 
                                current.CreationDate, current.FireDate, current.IsActive));
        }
        return users;
    }

    public get(): Observable<User[]>{
        return super.get().map(this.extractUsers);
    }

    /**
     * Получить список ролей пользователей
     */
    public getRoles(): Observable<UserRole[]>{
        return super.getRequest<UserRole[]>(this.url + "/roles");
    }
}

/**
 * Сервис сотрудников склада
 */
@Injectable()
export class StoreEmployeeService extends Service<StoreEmployee>{

    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + "/SalesAPI/api/storeemployee")
    }

    /**
     * Получить типы сотрудников склада
     */
    public getTypes(): Observable<StoreEmployeeType[]>{
        return super.getRequest<StoreEmployeeType[]>(this.url + "/types");
    }
}