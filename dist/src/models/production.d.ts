export declare class Brand {
    BrandID: number;
    Name: string;
    Description: string;
    IsShown: boolean;
    constructor(BrandID: number, Name: string, Description: string, IsShown: boolean);
}
export declare class Category {
    CategoryID: number;
    ParentID: number;
    Name: string;
    Description: string;
    Code: string;
    GtdNum: number;
    constructor(CategoryID: number, ParentID: number, Name: string, Description: string, Code: string, GtdNum: number);
}
export declare class ProductForm {
    ProductFormID: number;
    Name: string;
    constructor(ProductFormID: number, Name: string);
}
export declare class ProductState {
    ProductStateID: number;
    Name: string;
    constructor(ProductStateID: number, Name: string);
}
export declare class Product {
    ProductID: number;
    BrandID: number;
    CategoryID: number;
    FormID: number;
    ProductStateID: number;
    Code: string;
    Code1C: string;
    Name: string;
    Aplicability: string;
    Analog: string;
    ChangeGw: string;
    Oem: string;
    PackageCount: number;
    Volume: number;
    Weight: number;
    AParam: number;
    BParam: number;
    BpParam: number;
    CParam: number;
    DParam: number;
    EParam: number;
    FParam: number;
    GParam: number;
    HParam: number;
    NrParam: number;
    IsShown: boolean;
    Image: string;
    Video: string;
    Specification: string;
    CreationDate: Date;
    BarCode?: number;
    constructor(ProductID: number, BrandID: number, CategoryID: number, FormID: number, ProductStateID: number, Code: string, Code1C: string, Name: string, Aplicability: string, Analog: string, ChangeGw: string, Oem: string, PackageCount: number, Volume: number, Weight: number, AParam: number, BParam: number, BpParam: number, CParam: number, DParam: number, EParam: number, FParam: number, GParam: number, HParam: number, NrParam: number, IsShown: boolean, Image: string, Video: string, Specification: string, CreationDate: Date, BarCode?: number);
}
export declare class ShortProduct {
    ProductID: number;
    Code: string;
    BrandName: string;
    CategoryName: string;
    PackageCount: number;
    Volume: number;
    Weight: number;
    Name: string;
    Aplicability: string;
    Oem: string;
    FreeCount?: number;
    Price?: number;
    constructor(ProductID: number, Code: string, BrandName: string, CategoryName: string, PackageCount: number, Volume: number, Weight: number, Name: string, Aplicability: string, Oem: string, FreeCount?: number, Price?: number);
}
export declare class ProductSearch {
    Code?: string;
    BrandID?: number;
    CategoryID?: number;
    PartnerID?: number;
    constructor(Code?: string, BrandID?: number, CategoryID?: number, PartnerID?: number);
}
export declare class VenycleType {
    VenycleTypeID: number;
    Name: string;
    IsShown: boolean;
    constructor(VenycleTypeID: number, Name: string, IsShown: boolean);
}
export declare class Manufactor {
    ManufactorID: number;
    VenycleTypeID: number;
    Name: string;
    IsShown: boolean;
    constructor(ManufactorID: number, VenycleTypeID: number, Name: string, IsShown: boolean);
}
export declare class CarModel {
    CarModelID: number;
    ManufactorID: number;
    Name: string;
    IsShown: boolean;
    constructor(CarModelID: number, ManufactorID: number, Name: string, IsShown: boolean);
}
export declare class Motor {
    MotorID: number;
    CarModelID: number;
    Name: string;
    Engine: string;
    IsShown: boolean;
    constructor(MotorID: number, CarModelID: number, Name: string, Engine: string, IsShown: boolean);
}
export declare class RegularMotor extends Motor {
    ProductAndMotorID: number;
    Manufactor: string;
    CarModel: string;
}
export declare class ProductsAndMotor {
    ProductAndMotorID: number;
    ProductID: number;
    MotorID: number;
    Comment: string;
    constructor(ProductAndMotorID: number, ProductID: number, MotorID: number, Comment: string);
}
export declare class OeBrand {
    OeBrandID: number;
    Name: string;
    Description: string;
    IsShown: boolean;
    IsOriginal: boolean;
    constructor(OeBrandID: number, Name: string, Description: string, IsShown: boolean, IsOriginal: boolean);
}
export declare class OriginalElement {
    OeID: number;
    OeBrandID: number;
    Name: string;
    IsShown: boolean;
    constructor(OeID: number, OeBrandID: number, Name: string, IsShown: boolean);
}
export declare class ProductAndOe {
    ProductAndOeID: number;
    ProductID: number;
    OeID: number;
    constructor(ProductAndOeID: number, ProductID: number, OeID: number);
}
export declare class RegularOe {
    OeID: number;
    OeBrand: string;
    Name: string;
    constructor(OeID: number, OeBrand: string, Name: string);
}
export declare class RegularProductAndOe {
    ProductAndOeID: number;
    Name: string;
    OeBrand: string;
    InPrice: boolean;
    constructor(ProductAndOeID: number, Name: string, OeBrand: string, InPrice: boolean);
}
export declare class ProductAnalog {
    ProductAnalogID: number;
    ProductID: number;
    AnalogID: number;
    constructor(ProductAnalogID: number, ProductID: number, AnalogID: number);
}
export declare class PrimaryAndSecondaryElement {
    PrimaryID: number;
    SecondaryID: number;
    Comment: string;
    constructor(PrimaryID: number, SecondaryID: number, Comment: string);
}
