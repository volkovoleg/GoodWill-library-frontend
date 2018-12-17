export declare class SalesReport {
    PartnerID: number;
    StartDate: Date;
    EndDate: Date;
    SalesReportLines: SalesReportLine[];
    constructor(PartnerID: number, StartDate: Date, EndDate: Date, SalesReportLines: SalesReportLine[]);
}
export declare class SalesReportLine {
    Code: string;
    ProductCount: number;
    Price: number;
    constructor(Code: string, ProductCount: number, Price: number);
}
export declare class SalesReportResponse {
    OrderNum: number;
    NotExist: ExistError[];
    NotExistOnStore: ExistError[];
    RestErrors: RestError[];
    PriceErrors: PriceError[];
    constructor(OrderNum: number, NotExist: ExistError[], NotExistOnStore: ExistError[], RestErrors: RestError[], PriceErrors: PriceError[]);
}
export declare class RestError {
    Code: string;
    OrderedCount: number;
    StoreCount: number;
    constructor(Code: string, OrderedCount: number, StoreCount: number);
}
export declare class PriceError {
    Code: string;
    Price: number;
    constructor(Code: string, Price: number);
}
export declare class ExistError {
    Code: string;
    constructor(Code: string);
}
