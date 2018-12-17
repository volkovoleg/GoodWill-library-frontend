var Additional = /** @class */ (function () {
    function Additional(AdditionalID, Name) {
        this.AdditionalID = AdditionalID;
        this.Name = Name;
    }
    return Additional;
}());
export { Additional };
var SalaryAdditional = /** @class */ (function () {
    function SalaryAdditional(SalaryAdditionalID, SalaryID, AdditionalID, Value) {
        this.SalaryAdditionalID = SalaryAdditionalID;
        this.SalaryID = SalaryID;
        this.AdditionalID = AdditionalID;
        this.Value = Value;
    }
    return SalaryAdditional;
}());
export { SalaryAdditional };
var SalesTarget = /** @class */ (function () {
    function SalesTarget(SalesTargetID, Name) {
        this.SalesTargetID = SalesTargetID;
        this.Name = Name;
    }
    return SalesTarget;
}());
export { SalesTarget };
var EmployeeSalesTarget = /** @class */ (function () {
    function EmployeeSalesTarget(EmployeeSalesTargetID, EmployeeID, SalesTargetID, Expected) {
        this.EmployeeSalesTargetID = EmployeeSalesTargetID;
        this.EmployeeID = EmployeeID;
        this.SalesTargetID = SalesTargetID;
        this.Expected = Expected;
    }
    return EmployeeSalesTarget;
}());
export { EmployeeSalesTarget };
var SalaryTask = /** @class */ (function () {
    function SalaryTask(SalaryTaskID, SalaryID, SalesTargetID, Expected, Real) {
        this.SalaryTaskID = SalaryTaskID;
        this.SalaryID = SalaryID;
        this.SalesTargetID = SalesTargetID;
        this.Expected = Expected;
        this.Real = Real;
    }
    return SalaryTask;
}());
export { SalaryTask };
var Salary = /** @class */ (function () {
    function Salary(SalaryID, EmployeeID, Inpayment, Debt, Mulct, BaseCoef, DebtCoef, BaseSalary, TotalSalary, TotalPlanRealization, SalaryTasks, Additionals) {
        this.SalaryID = SalaryID;
        this.EmployeeID = EmployeeID;
        this.Inpayment = Inpayment;
        this.Debt = Debt;
        this.Mulct = Mulct;
        this.BaseCoef = BaseCoef;
        this.DebtCoef = DebtCoef;
        this.BaseSalary = BaseSalary;
        this.TotalSalary = TotalSalary;
        this.TotalPlanRealization = TotalPlanRealization;
        this.SalaryTasks = SalaryTasks;
        this.Additionals = Additionals;
    }
    Object.defineProperty(Salary.prototype, "BaseBonus", {
        get: function () {
            return this.Inpayment * this.BaseCoef / 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salary.prototype, "DebtMulct", {
        get: function () {
            return this.Debt * this.DebtCoef / 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salary.prototype, "AverageResults", {
        get: function () {
            var resultsSum = 0;
            for (var i = 0; i < this.SalaryTasks.length; i++) {
                resultsSum += this.SalaryTasks[i].Real / this.SalaryTasks[i].Expected;
            }
            return resultsSum / this.SalaryTasks.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salary.prototype, "SalaryCoef", {
        get: function () {
            return this.AverageResults - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salary.prototype, "SalaryResult", {
        get: function () {
            return this.BaseSalary + this.BaseBonus + this.SalaryCoef * this.BaseBonus - this.DebtMulct;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salary.prototype, "TotalResult", {
        get: function () {
            return this.SalaryResult - this.BaseSalary + this.AdditionalSum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salary.prototype, "AdditionalSum", {
        get: function () {
            var additionalsSum = 0;
            for (var i = 0; i < this.Additionals.length; i++) {
                additionalsSum += this.Additionals[i].Value;
            }
            return additionalsSum;
        },
        enumerable: true,
        configurable: true
    });
    return Salary;
}());
export { Salary };
//# sourceMappingURL=salary.js.map