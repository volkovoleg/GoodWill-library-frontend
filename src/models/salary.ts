export class Additional{
    constructor(
        public AdditionalID: number,
        public Name: string
    ){}
}

export class SalaryAdditional{
    constructor(
        public SalaryAdditionalID: number,
        public SalaryID: number,
        public AdditionalID: number,
        public Value: number
    ){}
}

export class SalesTarget{
    constructor(
        public SalesTargetID: number,
        public Name: string,
    ){}
}

export class EmployeeSalesTarget{
    constructor(
        public EmployeeSalesTargetID: number,
        public EmployeeID: number,
        public SalesTargetID: number,
        public Expected: number
    ){}
}

export class SalaryTask{
    constructor(
        public SalaryTaskID: number,
        public SalaryID: number,
        public SalesTargetID: number,
        public Expected: number,
        public Real: number
    ){}
}

export class Salary{
    constructor(
        public SalaryID: number,
        public EmployeeID: number,
        public Inpayment: number,
        public Debt: number,
        public Mulct: number,
        public BaseCoef: number,
        public DebtCoef: number,
        public BaseSalary: number,
        public TotalSalary: number,
        public TotalPlanRealization: number,
        public SalaryTasks: SalaryTask[],
        public Additionals: SalaryAdditional[]
    ){}

    get BaseBonus(): number{
        return this.Inpayment * this.BaseCoef / 100;
    }

    get DebtMulct(): number{
        return this.Debt * this.DebtCoef / 100;
    }

    get AverageResults(): number{
        let resultsSum: number = 0;
        for(let i = 0; i < this.SalaryTasks.length; i++){
            resultsSum += this.SalaryTasks[i].Real/this.SalaryTasks[i].Expected;
        }
        return resultsSum / this.SalaryTasks.length;
    }

    get SalaryCoef(): number{
        return this.AverageResults - 1;
    }

    get SalaryResult(): number{
        return this.BaseSalary + this.BaseBonus + this.SalaryCoef * this.BaseBonus  - this.DebtMulct;
    }

    get TotalResult(): number{
        return this.SalaryResult - this.BaseSalary + this.AdditionalSum;
    }

    get AdditionalSum(): number{
        let additionalsSum: number = 0;
        for(let i = 0; i < this.Additionals.length; i++){
            additionalsSum += this.Additionals[i].Value;
        }
        return additionalsSum;
    }

}