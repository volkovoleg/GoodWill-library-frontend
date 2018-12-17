export declare class Additional {
    AdditionalID: number;
    Name: string;
    constructor(AdditionalID: number, Name: string);
}
export declare class SalaryAdditional {
    SalaryAdditionalID: number;
    SalaryID: number;
    AdditionalID: number;
    Value: number;
    constructor(SalaryAdditionalID: number, SalaryID: number, AdditionalID: number, Value: number);
}
export declare class SalesTarget {
    SalesTargetID: number;
    Name: string;
    constructor(SalesTargetID: number, Name: string);
}
export declare class EmployeeSalesTarget {
    EmployeeSalesTargetID: number;
    EmployeeID: number;
    SalesTargetID: number;
    Expected: number;
    constructor(EmployeeSalesTargetID: number, EmployeeID: number, SalesTargetID: number, Expected: number);
}
export declare class SalaryTask {
    SalaryTaskID: number;
    SalaryID: number;
    SalesTargetID: number;
    Expected: number;
    Real: number;
    constructor(SalaryTaskID: number, SalaryID: number, SalesTargetID: number, Expected: number, Real: number);
}
export declare class Salary {
    SalaryID: number;
    EmployeeID: number;
    Inpayment: number;
    Debt: number;
    Mulct: number;
    BaseCoef: number;
    DebtCoef: number;
    BaseSalary: number;
    TotalSalary: number;
    TotalPlanRealization: number;
    SalaryTasks: SalaryTask[];
    Additionals: SalaryAdditional[];
    constructor(SalaryID: number, EmployeeID: number, Inpayment: number, Debt: number, Mulct: number, BaseCoef: number, DebtCoef: number, BaseSalary: number, TotalSalary: number, TotalPlanRealization: number, SalaryTasks: SalaryTask[], Additionals: SalaryAdditional[]);
    readonly BaseBonus: number;
    readonly DebtMulct: number;
    readonly AverageResults: number;
    readonly SalaryCoef: number;
    readonly SalaryResult: number;
    readonly TotalResult: number;
    readonly AdditionalSum: number;
}
