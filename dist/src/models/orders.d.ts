export declare class DeliveryType {
    DeliveryTypeID: number;
    Name: string;
    constructor(DeliveryTypeID: number, Name: string);
}
export declare class Firm {
    FirmID: number;
    Name: string;
    Code1C: string;
    PayTypeName: string;
    IsShown: boolean;
    constructor(FirmID: number, Name: string, Code1C: string, PayTypeName: string, IsShown: boolean);
}
export declare class OrderLine {
    OrderLineID: number;
    OrderID: number;
    ProductID: number;
    Code: string;
    PackageCount: number;
    ProductCount: number;
    ChangeCount: number;
    FreeCount: number;
    Volume: number;
    Weight: number;
    Price: number;
    constructor(OrderLineID: number, OrderID: number, ProductID: number, Code: string, PackageCount: number, ProductCount: number, ChangeCount: number, FreeCount: number, Volume: number, Weight: number, Price: number);
}
export declare class OrderLineChanges {
    Code: string;
    OrderedCount: number;
    FreeCount: number;
    constructor(Code: string, OrderedCount: number, FreeCount: number);
}
export declare class Order {
    OrderID: number;
    CustomerID: number;
    CuratorID: number;
    SupplierID: number;
    OrderStateID: number;
    DeliveryTypeID: number;
    RealizeNum: string;
    Customer: string;
    Curator: string;
    OrderState: string;
    DebtBankFull: number;
    DebtBankOverdue: number;
    TransportAddress: string;
    TransportName: string;
    TransportPhone: string;
    RecieverAddress: string;
    RecieverName: string;
    RecieverPhone: string;
    Comment: string;
    IsBlock: boolean;
    IsSafeStorage: boolean;
    CanDelete: boolean;
    CreateEmptyOrder: boolean;
    GoodWillPrice: string;
    LoaderID?: number;
    DriverID?: number;
    DeliveryDate?: Date;
    ReservationDate?: Date;
    OrderLines?: OrderLine[];
    constructor(OrderID: number, CustomerID: number, CuratorID: number, SupplierID: number, OrderStateID: number, DeliveryTypeID: number, RealizeNum: string, Customer: string, Curator: string, OrderState: string, DebtBankFull: number, DebtBankOverdue: number, TransportAddress: string, TransportName: string, TransportPhone: string, RecieverAddress: string, RecieverName: string, RecieverPhone: string, Comment: string, IsBlock: boolean, IsSafeStorage: boolean, CanDelete: boolean, CreateEmptyOrder: boolean, GoodWillPrice: string, LoaderID?: number, DriverID?: number, DeliveryDate?: Date, ReservationDate?: Date, OrderLines?: OrderLine[]);
}
export declare class OrderState {
    OrderStateID: string;
    Name: string;
    constructor(OrderStateID: string, Name: string);
}
export declare class OrderSearch {
    Code1C: string;
    CustomerName: string;
    OrderID?: number;
    CustomerID?: number;
    SupplierID?: number;
    CuratorID?: number;
    OrderStateID?: number;
    DeliveryTypeID?: number;
    PartnerStateID?: number;
    StartDate?: Date;
    EndDate?: Date;
    constructor(Code1C: string, CustomerName: string, OrderID?: number, CustomerID?: number, SupplierID?: number, CuratorID?: number, OrderStateID?: number, DeliveryTypeID?: number, PartnerStateID?: number, StartDate?: Date, EndDate?: Date);
}
export declare class ShortOrder {
    OrderID: number;
    Code1C: string;
    CustomerName: string;
    ManagerName: string;
    CustomerState: string;
    PositionCount: number;
    Volume: number;
    Sum: number;
    OrderState: string;
    DeliveryType: string;
    IsSafeStorage: boolean;
    CanDelete: boolean;
    CreationDate: Date;
    DevileryDate: Date;
    constructor(OrderID: number, Code1C: string, CustomerName: string, ManagerName: string, CustomerState: string, PositionCount: number, Volume: number, Sum: number, OrderState: string, DeliveryType: string, IsSafeStorage: boolean, CanDelete: boolean, CreationDate: Date, DevileryDate: Date);
}
export declare class OrderResponse {
    OrderStatus: string;
    Details: string;
    Changes: OrderLineChanges[];
    Errors: string[];
    OrderNum?: number;
    constructor(OrderStatus: string, Details: string, Changes: OrderLineChanges[], Errors: string[], OrderNum?: number);
}
export declare class DeliveryOrder {
    OrderID: number;
    DeliveryTypeID: number;
    OrderStateID: number;
    DeliveryInfo: string;
    Name: string;
    Manager: string;
    DeliveryType: string;
    PayTypeName: string;
    RealizeNum: string;
    Status: string;
    OrderSum: number;
    OrderVolume: number;
    OrderWeight: number;
    EnableEdit: boolean;
    Cause: string;
    DriverID?: number;
    AssemblyDate?: Date;
    CreationDate?: Date;
    DeliveryDate?: Date;
    LoadingDate?: Date;
    constructor(OrderID: number, DeliveryTypeID: number, OrderStateID: number, DeliveryInfo: string, Name: string, Manager: string, DeliveryType: string, PayTypeName: string, RealizeNum: string, Status: string, OrderSum: number, OrderVolume: number, OrderWeight: number, EnableEdit: boolean, Cause: string, DriverID?: number, AssemblyDate?: Date, CreationDate?: Date, DeliveryDate?: Date, LoadingDate?: Date);
}
export declare class DeliveryError {
    OrderID: number;
    Cause: string;
    constructor(OrderID: number, Cause: string);
}
export declare class ReservesSearch {
    Code: string;
    ProductID: number;
    BrandID: number;
    CategoryID: number;
    ProductStateID: number;
    InPrice: boolean;
    StartDate: Date;
    EndDate: Date;
    constructor(Code: string, ProductID: number, BrandID: number, CategoryID: number, ProductStateID: number, InPrice: boolean, StartDate: Date, EndDate: Date);
}
