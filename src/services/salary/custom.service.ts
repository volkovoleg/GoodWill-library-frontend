import { Injectable } from "@angular/core";
import { EmployeeSalesTarget, Salary, SalaryTask, SalaryAdditional } from "../../models/index";
import { Service } from "../service";
import { BaseService } from "../service-base";
import { Observable } from "rxjs/Observable";
import { AppSettings } from "../appsetting";
import { AuthService } from "../auth/auth.service";
import { HttpClient } from "@angular/common/http";

/**
 * Сервис плана продаж сотрудников
 */
@Injectable()
export class EmployeeSalesTargetService extends Service<EmployeeSalesTarget>{
    constructor(http: HttpClient){
        super(http,  AppSettings.API_ENDPOINT + "/SalaryAPI/api/employeesalestarget")
    }

    /**
     * Установить базовый план указанному сотруднику
     * @param id идентификатор сотрудника
     */
    public setPlan(id: number): Observable<any>{
        return super.put<number>(id, this.url + "/setplan");
    }
}

/**
 * Сервис ЗП менеджерам
 */
@Injectable()
export class SalaryService extends BaseService{
    private url: string;
    constructor(protected http: HttpClient, private authService: AuthService){
        super(http);
        this.url = AppSettings.API_ENDPOINT + "/SalaryAPI/api/salary";
    }

    private extractSalary(res: Salary): Salary{
        let additionals: SalaryAdditional[] = [];
        for(let i = 0; i < res.Additionals.length; i++)
            additionals.push(new SalaryAdditional(res.Additionals[i].SalaryAdditionalID, res.Additionals[i].SalaryID,
                res.Additionals[i].AdditionalID, res.Additionals[i].Value));

        let tasks: SalaryTask[] = [];
        for(let i = 0; i < res.SalaryTasks.length; i++)
            tasks.push(new SalaryTask(res.SalaryTasks[i].SalaryTaskID, 
                res.SalaryTasks[i].SalaryID, res.SalaryTasks[i].SalesTargetID, res.SalaryTasks[i].Expected, res.SalaryTasks[i].Real));

        return new Salary(res.SalaryID, res.EmployeeID, res.Inpayment, res.Debt, res.Mulct, res.BaseCoef, res.DebtCoef, res.BaseSalary, 
            res.TotalSalary, res.TotalPlanRealization, tasks, additionals);
    }


    /**
     * Получить итоги ЗП
     */
    public getSalaries(): Observable<Salary[]>{
        return super.getRequest<Salary[]>(this.url);
    }

    /**
     * Получить список годов, в которых есть рассчитаные ЗП
     */
    public getYears(): Observable<number[]>{
        return super.getRequest<number[]>(this.url + "/years");
    }

    /**
     * Получить список месяцев указанного года, в которых есть рассчитанные ЗП
     * @param year год
     */
    public getMonthes(year: number): Observable<number[]>{
        return super.getRequest<number[]>(this.url + "/monthes/" + year);        
    }

    /**
     * Получить ЗП указанного сотрудника за выбранный месяц
     * @param year год 
     * @param month месяц
     * @param userID идентификатор сотрудника
     */
    public getSalary(year: number, month: number, userID: number): Observable<Salary>{
        return this.http.get(this.url + "?year=" + year + "&month=" + month + "&userID=" + userID)
            .map(this.extractSalary).catch(this.handleError);
    }

    /**
     * Сохранить расчет ЗП
     * @param salary ЗП
     */
    public saveSalary(salary:Salary): Observable<Salary>{
        return super.put<Salary>(salary, this.url);
    }
}