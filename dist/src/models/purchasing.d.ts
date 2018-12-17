export declare class Supplier {
    SupplierID: number;
    TypeID: number;
    FirmID: number;
    DeliveryTime: number;
    PriceCoef: number;
    Name: string;
    Country: string;
    Code1C: string;
    IsShown: boolean;
    constructor(SupplierID: number, TypeID: number, FirmID: number, DeliveryTime: number, PriceCoef: number, Name: string, Country: string, Code1C: string, IsShown: boolean);
}
export declare class PriceList {
    PriceListID: number;
    ProductID: number;
    SupplierID: number;
    Price: number;
    Moq: number;
    ProductionTime: number;
    StoreCount: number;
    Comment: string;
    SupplierProductName: string;
    constructor(PriceListID: number, ProductID: number, SupplierID: number, Price: number, Moq: number, ProductionTime: number, StoreCount: number, Comment: string, SupplierProductName: string);
}
export declare class Delivery {
    DeliveryID: number;
    ProductID: number;
    SupplierID: number;
    ProductCount: number;
    DeliveryCount: number;
    CreationDate: Date;
    constructor(DeliveryID: number, ProductID: number, SupplierID: number, ProductCount: number, DeliveryCount: number, CreationDate: Date);
}
export declare class ManufactoringOrder {
    ManufactoringOrderID: number;
    ProductGroupID: number;
    ProductID: number;
    SupplierID: number;
    ProductCount: number;
    ProduceCount: number;
    ProductionTime: number;
    Price: number;
    CreationDate: Date;
    BuildDate?: Date;
    constructor(ManufactoringOrderID: number, ProductGroupID: number, ProductID: number, SupplierID: number, ProductCount: number, ProduceCount: number, ProductionTime: number, Price: number, CreationDate: Date, BuildDate?: Date);
    readonly NotProduceCount: number;
    readonly OrderSum: number;
    readonly DeliveryDate: Date;
    readonly Delay: number;
}
export declare class ProductGroup {
    ProductGroupID: number;
    Name: string;
    PlanDays: number;
    StoreDays: number;
    ProductsCount: number;
    ExistCount: number;
    ExistPart: number;
    constructor(ProductGroupID: number, Name: string, PlanDays: number, StoreDays: number, ProductsCount: number, ExistCount: number, ExistPart: number);
}
export declare class ShortEnterance {
    EnteranceID: number;
    EnteranceStateID: number;
    EnteranceTypeID: number;
    FirmID: number;
    SupplierID: number;
    Name: string;
    CreationDate: Date;
    IsConfirm: boolean;
    constructor(EnteranceID: number, EnteranceStateID: number, EnteranceTypeID: number, FirmID: number, SupplierID: number, Name: string, CreationDate: Date, IsConfirm: boolean);
}
export declare class AdditionalCost {
    EnteranceAdditionalCostID: number;
    Name: string;
    Usd: number;
    PriceRub: number;
    constructor(EnteranceAdditionalCostID: number, Name: string, Usd: number, PriceRub: number);
    readonly PriceUsd: number;
}
export declare class EnteranceLine {
    EnteranceLineID: number;
    EnteranceID: number;
    TypeID: number;
    ProductID: number;
    Code: string;
    ProductCount: number;
    StoreCount: number;
    PriceFob: number;
    PriceRub: number;
    PriceUsd: number;
    PriceRubOld: number;
    PriceUsdOld: number;
    AverageUsd: number;
    Margin: number;
    Usd: number;
    Check: boolean;
    PriceUsdInput: number;
    constructor(EnteranceLineID: number, EnteranceID: number, TypeID: number, ProductID: number, Code: string, ProductCount: number, StoreCount: number, PriceFob: number, PriceRub: number, PriceUsd: number, PriceRubOld: number, PriceUsdOld: number, AverageUsd: number, Margin: number, Usd: number, Check: boolean, PriceUsdInput: number);
    readonly PriceFobUsd: number;
    readonly InputPriceUsd: number;
    readonly InputPriceRub: number;
    readonly Average: number;
    readonly LotSumUsd: number;
    readonly LotSumRub: number;
    readonly LotSumUsdWithMargin: number;
    readonly LotSumRubWithMargin: number;
    readonly AveragePriceChange: number;
}
export declare class Enterance {
    EnteranceID: number;
    EnteranceTypeID: number;
    SupplierID: number;
    EnteranceStateID: number;
    Name: string;
    Usd: number;
    UsdAdditional: number;
    Margin: number;
    Gtd: string;
    CreationDate: Date;
    EnteranceLines: EnteranceLine[];
    AdditionalCosts: AdditionalCost[];
    constructor(EnteranceID: number, EnteranceTypeID: number, SupplierID: number, EnteranceStateID: number, Name: string, Usd: number, UsdAdditional: number, Margin: number, Gtd: string, CreationDate: Date, EnteranceLines: EnteranceLine[], AdditionalCosts: AdditionalCost[]);
}
export declare class EnteranceType {
    EnteranceTypeID: number;
    Name: string;
    constructor(EnteranceTypeID: number, Name: string);
}
export declare class EnteranceResponce {
    EnteranceStatus: string;
    ErrorLines: string[];
    constructor(EnteranceStatus: string, ErrorLines: string[]);
}
export declare class ReturnLine {
    ReturnLineID: number;
    ReturnID: number;
    ProductID: number;
    InputPrice: number;
    PriceUsd: number;
    ProductCount: number;
    constructor(ReturnLineID: number, ReturnID: number, ProductID: number, InputPrice: number, PriceUsd: number, ProductCount: number);
}
export declare class ReturnDomainModel {
    ReturnID: number;
    PartnerID: number;
    CreationDate: Date;
    Usd: number;
    Cause: string;
    Comment: string;
    ReturnLines: ReturnLine[];
    constructor(ReturnID: number, PartnerID: number, CreationDate: Date, Usd: number, Cause: string, Comment: string, ReturnLines: ReturnLine[]);
}
export declare class DeffectDomainModel {
    DeffectID: number;
    ProductID: number;
    SupplierID: number;
    ProductCount: number;
    PriceFob: number;
    CreationDate: Date;
    Cause: string;
    SerialNumber: string;
    HideRest: boolean;
    Complete: boolean;
    constructor(DeffectID: number, ProductID: number, SupplierID: number, ProductCount: number, PriceFob: number, CreationDate: Date, Cause: string, SerialNumber: string, HideRest: boolean, Complete: boolean);
}
export declare class ShelfTime {
    ShelfTimeID: number;
    SupplierID: number;
    ProductGroupID: number;
    PlanDays: number;
    StoreDays: number;
    constructor(ShelfTimeID: number, SupplierID: number, ProductGroupID: number, PlanDays: number, StoreDays: number);
}
export declare class OrderChange {
    SupplierID: number;
    FullOrderedCount: number;
    SupplierOrderedCount: number;
    ProduceCountChange: number;
    constructor(SupplierID: number, FullOrderedCount: number, SupplierOrderedCount: number, ProduceCountChange: number);
}
export declare class ProductPurchasePlan {
    PriceListID: number;
    ProductID: number;
    SupplierID: number;
    TypeID: number;
    Usd: number;
    DeliveryTime: number;
    Code: string;
    CodeForGroup: string;
    Comment: string;
    DeliveryCount: number;
    DeliveryInstCount: number;
    Demand: number;
    DemandMonth: number;
    FreeCount: number;
    FullDeliveryCount: number;
    FullDeliveryInstCount: number;
    FullOrderedCount: number;
    GroupID: number;
    Moq: number;
    OrderedCount: number;
    PlanDays: number;
    Price: number;
    PriceCoef: number;
    ProductionTime: number;
    Sales: number;
    SalesRub: number;
    StoreCount: number;
    StoreDays: number;
    SuppliersCount: number;
    Volume: number;
    constructor(PriceListID: number, ProductID: number, SupplierID: number, TypeID: number, Usd: number, DeliveryTime: number, Code: string, CodeForGroup: string, Comment: string, DeliveryCount: number, DeliveryInstCount: number, Demand: number, DemandMonth: number, FreeCount: number, FullDeliveryCount: number, FullDeliveryInstCount: number, FullOrderedCount: number, GroupID: number, Moq: number, OrderedCount: number, PlanDays: number, Price: number, PriceCoef: number, ProductionTime: number, Sales: number, SalesRub: number, StoreCount: number, StoreDays: number, SuppliersCount: number, Volume: number);
    readonly Stock: number;
    readonly NeedToOrder: number;
    readonly NeedToDelivery: number;
    readonly PriceFobUsd: number;
    readonly PriceFobRub: number;
    readonly InputPriceUsd: number;
    readonly InputPriceRub: number;
}
