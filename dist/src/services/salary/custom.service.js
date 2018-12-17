var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Salary, SalaryTask, SalaryAdditional } from "../../models/index";
import { Service } from "../service";
import { BaseService } from "../service-base";
import { AppSettings } from "../appsetting";
import { AuthService } from "../auth/auth.service";
import { HttpClient } from "@angular/common/http";
/**
 * Сервис плана продаж сотрудников
 */
var EmployeeSalesTargetService = /** @class */ (function (_super) {
    __extends(EmployeeSalesTargetService, _super);
    function EmployeeSalesTargetService(http) {
        return _super.call(this, http, AppSettings.API_ENDPOINT + "/SalaryAPI/api/employeesalestarget") || this;
    }
    /**
     * Установить базовый план указанному сотруднику
     * @param id идентификатор сотрудника
     */
    EmployeeSalesTargetService.prototype.setPlan = function (id) {
        return _super.prototype.put.call(this, id, this.url + "/setplan");
    };
    EmployeeSalesTargetService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], EmployeeSalesTargetService);
    return EmployeeSalesTargetService;
}(Service));
export { EmployeeSalesTargetService };
/**
 * Сервис ЗП менеджерам
 */
var SalaryService = /** @class */ (function (_super) {
    __extends(SalaryService, _super);
    function SalaryService(http, authService) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.authService = authService;
        _this.url = AppSettings.API_ENDPOINT + "/SalaryAPI/api/salary";
        return _this;
    }
    SalaryService.prototype.extractSalary = function (res) {
        var additionals = [];
        for (var i = 0; i < res.Additionals.length; i++)
            additionals.push(new SalaryAdditional(res.Additionals[i].SalaryAdditionalID, res.Additionals[i].SalaryID, res.Additionals[i].AdditionalID, res.Additionals[i].Value));
        var tasks = [];
        for (var i = 0; i < res.SalaryTasks.length; i++)
            tasks.push(new SalaryTask(res.SalaryTasks[i].SalaryTaskID, res.SalaryTasks[i].SalaryID, res.SalaryTasks[i].SalesTargetID, res.SalaryTasks[i].Expected, res.SalaryTasks[i].Real));
        return new Salary(res.SalaryID, res.EmployeeID, res.Inpayment, res.Debt, res.Mulct, res.BaseCoef, res.DebtCoef, res.BaseSalary, res.TotalSalary, res.TotalPlanRealization, tasks, additionals);
    };
    /**
     * Получить итоги ЗП
     */
    SalaryService.prototype.getSalaries = function () {
        return _super.prototype.getRequest.call(this, this.url);
    };
    /**
     * Получить список годов, в которых есть рассчитаные ЗП
     */
    SalaryService.prototype.getYears = function () {
        return _super.prototype.getRequest.call(this, this.url + "/years");
    };
    /**
     * Получить список месяцев указанного года, в которых есть рассчитанные ЗП
     * @param year год
     */
    SalaryService.prototype.getMonthes = function (year) {
        return _super.prototype.getRequest.call(this, this.url + "/monthes/" + year);
    };
    /**
     * Получить ЗП указанного сотрудника за выбранный месяц
     * @param year год
     * @param month месяц
     * @param userID идентификатор сотрудника
     */
    SalaryService.prototype.getSalary = function (year, month, userID) {
        return this.http.get(this.url + "?year=" + year + "&month=" + month + "&userID=" + userID)
            .map(this.extractSalary).catch(this.handleError);
    };
    /**
     * Сохранить расчет ЗП
     * @param salary ЗП
     */
    SalaryService.prototype.saveSalary = function (salary) {
        return _super.prototype.put.call(this, salary, this.url);
    };
    SalaryService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, AuthService])
    ], SalaryService);
    return SalaryService;
}(BaseService));
export { SalaryService };
//# sourceMappingURL=custom.service.js.map