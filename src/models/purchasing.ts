export class Supplier{
    constructor(
        public SupplierID: number,
        public TypeID: number,
        public FirmID: number,
        public DeliveryTime: number,
        public PriceCoef: number,
        public Name: string,
        public Country: string,
        public Code1C: string,
        public IsShown: boolean
    ){}
}

export class PriceList{
    constructor(
        public PriceListID: number,
        public ProductID: number,
        public SupplierID: number,
        public Price: number,
        public Moq: number,
        public ProductionTime: number,
        public StoreCount: number,
        public Comment: string,
        public SupplierProductName: string
    ){}
}

export class Delivery{
    constructor(
        public DeliveryID: number,
        public ProductID: number,
        public SupplierID: number,
        public ProductCount: number,
        public DeliveryCount: number,
        public CreationDate: Date
    ){}
}

export class ManufactoringOrder{
    constructor(
        public ManufactoringOrderID: number,
        public ProductGroupID: number,
        public ProductID: number,
        public SupplierID: number,
        public ProductCount: number,
        public ProduceCount: number,
        public ProductionTime: number,
        public Price: number,
        public CreationDate: Date,
        public BuildDate?: Date
    ){}

    get NotProduceCount(): number{
        return this.ProductCount - this.ProduceCount;
    }

    get OrderSum(): number{
        return this.NotProduceCount * this.Price;
    }

    get DeliveryDate(): Date{
        let creationDate = new Date(this.CreationDate);
        let deliveryDate = new Date(creationDate.setDate(creationDate.getDate() + this.ProductionTime));
        return deliveryDate;
    }

    get Delay(): number{
        let creationDate = new Date(this.CreationDate);
        let deliveryDate = new Date(creationDate.setDate(creationDate.getDate() + this.ProductionTime));
        let currentDate = new Date();
        return Math.round((currentDate.getTime() - deliveryDate.getTime()) / 86400000);
    }
}

export class ProductGroup{
    constructor(
        public ProductGroupID: number,
        public Name: string,
        public PlanDays: number,
        public StoreDays: number,
        public ProductsCount: number,
        public ExistCount: number,
        public ExistPart: number
    ){}
}

export class ShortEnterance{
    constructor(
        public EnteranceID: number,
        public EnteranceStateID: number,
        public EnteranceTypeID: number,
        public FirmID: number,
        public SupplierID: number,
        public Name: string,
        public CreationDate: Date,
        public IsConfirm: boolean
    ){}
}

export class AdditionalCost{
    constructor(public EnteranceAdditionalCostID: number,
        public Name: string,
        public Usd: number,
        public PriceRub: number
    ){}

    get PriceUsd(): number{
        return this.PriceRub / this.Usd;
    }
}

export class EnteranceLine{
    constructor(
        public EnteranceLineID: number,
        public EnteranceID: number,
        public TypeID: number,
        public ProductID: number,
        public Code: string,
        public ProductCount: number,
        public StoreCount: number,
        public PriceFob: number,
        public PriceRub: number,
        public PriceUsd: number,
        public PriceRubOld: number,
        public PriceUsdOld: number,
        public AverageUsd: number,
        public Margin: number,
        public Usd: number,
        public Check: boolean,
        public PriceUsdInput: number
    ){}

    get PriceFobUsd(): number{
        let priceFobUsd = 0;
        if(this.TypeID === 1) 
            priceFobUsd = this.PriceFob;
        else if(this.TypeID === 2)
            priceFobUsd = (this.PriceFob / this.Usd);
        return priceFobUsd;
    }

    get InputPriceUsd(): number{
        return this.PriceFobUsd * this.Margin;
    }

    get InputPriceRub(): number{
        return this.InputPriceUsd * this.Usd;
    }

    get Average(): number{
        return ((this.ProductCount * this.InputPriceUsd + 
            this.StoreCount * this.PriceUsdOld)/(this.ProductCount + this.StoreCount));
    }

    get LotSumUsd(): number{         
        return this.PriceFobUsd * this.ProductCount;
    }

    get LotSumRub(): number{
        return this.PriceFobUsd * this.Usd * this.ProductCount;
    }

    get LotSumUsdWithMargin(): number{
        return this.InputPriceUsd * this.ProductCount;
    }

    get LotSumRubWithMargin(): number{
        return this.InputPriceRub * this.ProductCount;
    }

    get AveragePriceChange(): number{
        return this.Average / this.PriceUsdOld - 1;
    }
}

export class Enterance{
    constructor(
        public EnteranceID: number,
        public EnteranceTypeID: number,
        public SupplierID: number,
        public EnteranceStateID: number,
        public Name: string,
        public Usd: number,
        public UsdAdditional: number,
        public Margin: number,
        public Gtd: string,
        public CreationDate: Date,
        public EnteranceLines: EnteranceLine[],
        public AdditionalCosts: AdditionalCost[]
    ){}
}

export class EnteranceType{
    constructor(
        public EnteranceTypeID: number,
        public Name: string,
    ){}
}

export class EnteranceResponce{
    constructor(
        public EnteranceStatus: string,
        public ErrorLines: string[]
    ){}
}

export class ReturnLine{
    constructor(
        public ReturnLineID: number,
        public ReturnID: number,
        public ProductID: number,
        public InputPrice: number,
        public PriceUsd: number,
        public ProductCount: number
    ){}
}

export class ReturnDomainModel{
    constructor(
        public ReturnID: number,
        public PartnerID: number,
        public CreationDate: Date,
        public Usd: number,
        public Cause: string,
        public Comment: string, 
        public ReturnLines: ReturnLine[]
    ){}
}

export class DeffectDomainModel{
    constructor(
        public DeffectID: number,
        public ProductID: number,
        public SupplierID: number,
        public ProductCount: number,
        public PriceFob: number,
        public CreationDate: Date,
        public Cause: string,
        public SerialNumber: string,
        public HideRest: boolean,
        public Complete: boolean
    ){}
}

export class ShelfTime{
    constructor(public ShelfTimeID: number,
        public SupplierID: number,
        public ProductGroupID: number,
        public PlanDays: number,
        public StoreDays: number){}
}

export class OrderChange{
    constructor(public SupplierID: number,
        public FullOrderedCount: number,
        public SupplierOrderedCount: number,
        public ProduceCountChange: number){}
}

export class ProductPurchasePlan{
    constructor(public PriceListID: number,
        public ProductID: number,
        public SupplierID: number,
        public TypeID: number,
        public Usd: number,
        public DeliveryTime: number,
        public Code: string,
        public CodeForGroup: string,
        public Comment: string,
        public DeliveryCount: number,
        public DeliveryInstCount: number,
        public Demand: number,
        public DemandMonth: number,
        public FreeCount: number,
        public FullDeliveryCount: number,
        public FullDeliveryInstCount: number,
        public FullOrderedCount: number,
        public GroupID: number,
        public Moq: number,
        public OrderedCount: number,
        public PlanDays: number,
        public Price: number,
        public PriceCoef: number,
        public ProductionTime: number,
        public Sales: number,
        public SalesRub: number,
        public StoreCount: number,
        public StoreDays: number,
        public SuppliersCount: number,
        public Volume: number){}

    get Stock(): number{
        return this.Demand === 0 ? 0: (this.FreeCount + this.DeliveryCount) / this.DemandMonth;
    }

    get NeedToOrder(): number{
        return Math.ceil(this.Demand * (this.PlanDays + this.ProductionTime + this.DeliveryTime) - this.FreeCount - this.FullDeliveryCount - this.SuppliersCount - this.FullOrderedCount);  
    }

    get NeedToDelivery(): number{
        let needForDelivery = Math.ceil(this.Demand * (this.StoreDays + this.DeliveryTime + this.ProductionTime) - this.FreeCount - this.FullDeliveryCount - this.FullDeliveryInstCount);
        return needForDelivery < this.StoreCount ? needForDelivery : this.StoreCount;
    }

    get PriceFobUsd(): number {
        return this.TypeID == 1? this.Price : this.Price / this.Usd;
    }

    get PriceFobRub(): number {
        return this.PriceFobUsd * this.Usd;
    }

    get InputPriceUsd(): number {
        return this.PriceFobUsd * this.PriceCoef;
    }

    get InputPriceRub(): number{
        return this.InputPriceUsd * this.Usd;
    }
}