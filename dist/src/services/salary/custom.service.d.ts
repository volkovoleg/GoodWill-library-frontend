import { EmployeeSalesTarget, Salary } from "../../models/index";
import { Service } from "../service";
import { BaseService } from "../service-base";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth/auth.service";
import { HttpClient } from "@angular/common/http";
/**
 * Сервис плана продаж сотрудников
 */
export declare class EmployeeSalesTargetService extends Service<EmployeeSalesTarget> {
    constructor(http: HttpClient);
    /**
     * Установить базовый план указанному сотруднику
     * @param id идентификатор сотрудника
     */
    setPlan(id: number): Observable<any>;
}
/**
 * Сервис ЗП менеджерам
 */
export declare class SalaryService extends BaseService {
    protected http: HttpClient;
    private authService;
    private url;
    constructor(http: HttpClient, authService: AuthService);
    private extractSalary;
    /**
     * Получить итоги ЗП
     */
    getSalaries(): Observable<Salary[]>;
    /**
     * Получить список годов, в которых есть рассчитаные ЗП
     */
    getYears(): Observable<number[]>;
    /**
     * Получить список месяцев указанного года, в которых есть рассчитанные ЗП
     * @param year год
     */
    getMonthes(year: number): Observable<number[]>;
    /**
     * Получить ЗП указанного сотрудника за выбранный месяц
     * @param year год
     * @param month месяц
     * @param userID идентификатор сотрудника
     */
    getSalary(year: number, month: number, userID: number): Observable<Salary>;
    /**
     * Сохранить расчет ЗП
     * @param salary ЗП
     */
    saveSalary(salary: Salary): Observable<Salary>;
}
