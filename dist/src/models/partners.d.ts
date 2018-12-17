export declare class Partner {
    PartnerID: number;
    CuratorID: number;
    DeliveryTypeID: number;
    PartnerStateID: number;
    Name: string;
    Code1C: string;
    Code1CNew: string;
    ConsigneeCode1C: string;
    Republic: string;
    Region: string;
    Part: string;
    Activity: string;
    Specialisation: string;
    Site: string;
    IsShown: boolean;
    IsBlock: boolean;
    IsSafeStorage: boolean;
    BlockTypeID: number;
    TransportAddress: string;
    TransportName: string;
    TransportPhone: string;
    RecieverAddress: string;
    RecieverName: string;
    RecieverPhone: string;
    Comment: string;
    ParentPartnerID?: number;
    RestExportTypeID?: number;
    constructor(PartnerID: number, CuratorID: number, DeliveryTypeID: number, PartnerStateID: number, Name: string, Code1C: string, Code1CNew: string, ConsigneeCode1C: string, Republic: string, Region: string, Part: string, Activity: string, Specialisation: string, Site: string, IsShown: boolean, IsBlock: boolean, IsSafeStorage: boolean, BlockTypeID: number, TransportAddress: string, TransportName: string, TransportPhone: string, RecieverAddress: string, RecieverName: string, RecieverPhone: string, Comment: string, ParentPartnerID?: number, RestExportTypeID?: number);
}
export declare class PartnerCategory {
    PartnerCategoryID: number;
    ParentID: number;
    BrandID: number;
    Name: string;
    CriteriaSum: number;
    Coefficient: number;
    IsShown: boolean;
    InPrice: boolean;
    constructor(PartnerCategoryID: number, ParentID: number, BrandID: number, Name: string, CriteriaSum: number, Coefficient: number, IsShown: boolean, InPrice: boolean);
}
export declare class PartnerAndCategory {
    BrandID: number;
    CategoryID: number;
    constructor(BrandID: number, CategoryID: number);
}
export declare class ShortPartner {
    PartnerID: number;
    Name: string;
    PartnerState: string;
    City: string;
    ManagerName: string;
    IsShown: boolean;
    IsSafeStorage: boolean;
    PartnerCategoryName: string;
    DebtBank: number;
    DebtCash: number;
    CreationDate: Date;
    IsBlock: boolean;
    Address: string;
    Email: string;
    Code1C: string;
    Code1cNew: string;
    constructor(PartnerID: number, Name: string, PartnerState: string, City: string, ManagerName: string, IsShown: boolean, IsSafeStorage: boolean, PartnerCategoryName: string, DebtBank: number, DebtCash: number, CreationDate: Date, IsBlock: boolean, Address: string, Email: string, Code1C: string, Code1cNew: string);
}
export declare class BlockType {
    BlockTypeID: number;
    BlockType: string;
}
