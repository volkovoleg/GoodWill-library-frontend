export class PersonalPrice{
    constructor(
        public PersonalPriceID: number,
        public PartnerID: number,
        public ProductID: number,
        public Price: number,
        public StartDate: Date,
        public EndDate: Date
    ){}
}

export class SpecialPrice{
    constructor(
        public SpecialPriceID: number,
        public ProductID: number,
        public Price: number,
        public StartDate: Date,
        public EndDate: Date
    ){}
}

export class EconomicItem{
    constructor(
    public ProductID: number,
    public Category: string,
    public Code: string,
    public StoreCount: number,
    public FreeCount: number,
    public PriceUsd: number,
    public PriceTdOld: number,
    public PriceTdNew: number,
    public AverageSales: number,
    public Supplier: string,
    public Comment: string,
    public UsdNew: number,
    public UsdOld: number,
    public Choi: number){}

    get InputPriceRubOld(): number{
        return Math.round(this.PriceUsd * this.UsdOld);
    }

    get InputPriceRubNew(): number{
        return Math.round(this.PriceUsd * this.UsdNew);
    }

    get ProfitOld(): number{
        return ((this.PriceTdOld/(this.PriceUsd * this.UsdOld)) - 1);
    }

    get ProfitNew(): number{
        return ((this.PriceTdNew/(this.PriceUsd * this.UsdNew)) - 1);
    }

    get PriceChanges(): number{
        return this.PriceTdNew/this.PriceTdOld - 1;
    }

    get PriceWithProfit(): number{
        return ((15/100) + 1) * (this.PriceUsd * this.UsdNew);
    }

    get ReservedCount(): number{
        return this.StoreCount - this.FreeCount;
    }
}