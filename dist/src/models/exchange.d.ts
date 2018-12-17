export declare class BlockExchange {
    IsBlocked: boolean;
    UserID: number;
    constructor(IsBlocked: boolean, UserID: number);
}
export declare class Exchange {
    ExchangeID: number;
    SourseID: number;
    ExchangeStateID: number;
    CreationDate: Date;
    ItemID: number;
    UserID: number;
    constructor(ExchangeID: number, SourseID: number, ExchangeStateID: number, CreationDate: Date, ItemID: number, UserID: number);
}
