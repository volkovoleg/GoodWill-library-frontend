export declare class PersonalPrice {
    PersonalPriceID: number;
    PartnerID: number;
    ProductID: number;
    Price: number;
    StartDate: Date;
    EndDate: Date;
    constructor(PersonalPriceID: number, PartnerID: number, ProductID: number, Price: number, StartDate: Date, EndDate: Date);
}
export declare class SpecialPrice {
    SpecialPriceID: number;
    ProductID: number;
    Price: number;
    StartDate: Date;
    EndDate: Date;
    constructor(SpecialPriceID: number, ProductID: number, Price: number, StartDate: Date, EndDate: Date);
}
export declare class EconomicItem {
    ProductID: number;
    Category: string;
    Code: string;
    StoreCount: number;
    FreeCount: number;
    PriceUsd: number;
    PriceTdOld: number;
    PriceTdNew: number;
    AverageSales: number;
    Supplier: string;
    Comment: string;
    UsdNew: number;
    UsdOld: number;
    Choi: number;
    constructor(ProductID: number, Category: string, Code: string, StoreCount: number, FreeCount: number, PriceUsd: number, PriceTdOld: number, PriceTdNew: number, AverageSales: number, Supplier: string, Comment: string, UsdNew: number, UsdOld: number, Choi: number);
    readonly InputPriceRubOld: number;
    readonly InputPriceRubNew: number;
    readonly ProfitOld: number;
    readonly ProfitNew: number;
    readonly PriceChanges: number;
    readonly PriceWithProfit: number;
    readonly ReservedCount: number;
}
