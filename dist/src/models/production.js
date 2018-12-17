var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Brand = /** @class */ (function () {
    function Brand(BrandID, Name, Description, IsShown) {
        this.BrandID = BrandID;
        this.Name = Name;
        this.Description = Description;
        this.IsShown = IsShown;
    }
    return Brand;
}());
export { Brand };
var Category = /** @class */ (function () {
    function Category(CategoryID, ParentID, Name, Description, Code, GtdNum) {
        this.CategoryID = CategoryID;
        this.ParentID = ParentID;
        this.Name = Name;
        this.Description = Description;
        this.Code = Code;
        this.GtdNum = GtdNum;
    }
    return Category;
}());
export { Category };
var ProductForm = /** @class */ (function () {
    function ProductForm(ProductFormID, Name) {
        this.ProductFormID = ProductFormID;
        this.Name = Name;
    }
    return ProductForm;
}());
export { ProductForm };
var ProductState = /** @class */ (function () {
    function ProductState(ProductStateID, Name) {
        this.ProductStateID = ProductStateID;
        this.Name = Name;
    }
    return ProductState;
}());
export { ProductState };
var Product = /** @class */ (function () {
    function Product(ProductID, BrandID, CategoryID, FormID, ProductStateID, Code, Code1C, Name, Aplicability, Analog, ChangeGw, Oem, PackageCount, Volume, Weight, AParam, BParam, BpParam, CParam, DParam, EParam, FParam, GParam, HParam, NrParam, IsShown, Image, Video, Specification, CreationDate, BarCode) {
        this.ProductID = ProductID;
        this.BrandID = BrandID;
        this.CategoryID = CategoryID;
        this.FormID = FormID;
        this.ProductStateID = ProductStateID;
        this.Code = Code;
        this.Code1C = Code1C;
        this.Name = Name;
        this.Aplicability = Aplicability;
        this.Analog = Analog;
        this.ChangeGw = ChangeGw;
        this.Oem = Oem;
        this.PackageCount = PackageCount;
        this.Volume = Volume;
        this.Weight = Weight;
        this.AParam = AParam;
        this.BParam = BParam;
        this.BpParam = BpParam;
        this.CParam = CParam;
        this.DParam = DParam;
        this.EParam = EParam;
        this.FParam = FParam;
        this.GParam = GParam;
        this.HParam = HParam;
        this.NrParam = NrParam;
        this.IsShown = IsShown;
        this.Image = Image;
        this.Video = Video;
        this.Specification = Specification;
        this.CreationDate = CreationDate;
        this.BarCode = BarCode;
    }
    return Product;
}());
export { Product };
var ShortProduct = /** @class */ (function () {
    function ShortProduct(ProductID, Code, BrandName, CategoryName, PackageCount, Volume, Weight, Name, Aplicability, Oem, FreeCount, Price) {
        this.ProductID = ProductID;
        this.Code = Code;
        this.BrandName = BrandName;
        this.CategoryName = CategoryName;
        this.PackageCount = PackageCount;
        this.Volume = Volume;
        this.Weight = Weight;
        this.Name = Name;
        this.Aplicability = Aplicability;
        this.Oem = Oem;
        this.FreeCount = FreeCount;
        this.Price = Price;
    }
    return ShortProduct;
}());
export { ShortProduct };
var ProductSearch = /** @class */ (function () {
    function ProductSearch(Code, BrandID, CategoryID, PartnerID) {
        this.Code = Code;
        this.BrandID = BrandID;
        this.CategoryID = CategoryID;
        this.PartnerID = PartnerID;
    }
    return ProductSearch;
}());
export { ProductSearch };
var VenycleType = /** @class */ (function () {
    function VenycleType(VenycleTypeID, Name, IsShown) {
        this.VenycleTypeID = VenycleTypeID;
        this.Name = Name;
        this.IsShown = IsShown;
    }
    return VenycleType;
}());
export { VenycleType };
var Manufactor = /** @class */ (function () {
    function Manufactor(ManufactorID, VenycleTypeID, Name, IsShown) {
        this.ManufactorID = ManufactorID;
        this.VenycleTypeID = VenycleTypeID;
        this.Name = Name;
        this.IsShown = IsShown;
    }
    return Manufactor;
}());
export { Manufactor };
var CarModel = /** @class */ (function () {
    function CarModel(CarModelID, ManufactorID, Name, IsShown) {
        this.CarModelID = CarModelID;
        this.ManufactorID = ManufactorID;
        this.Name = Name;
        this.IsShown = IsShown;
    }
    return CarModel;
}());
export { CarModel };
var Motor = /** @class */ (function () {
    function Motor(MotorID, CarModelID, Name, Engine, IsShown) {
        this.MotorID = MotorID;
        this.CarModelID = CarModelID;
        this.Name = Name;
        this.Engine = Engine;
        this.IsShown = IsShown;
    }
    return Motor;
}());
export { Motor };
var RegularMotor = /** @class */ (function (_super) {
    __extends(RegularMotor, _super);
    function RegularMotor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RegularMotor;
}(Motor));
export { RegularMotor };
var ProductsAndMotor = /** @class */ (function () {
    function ProductsAndMotor(ProductAndMotorID, ProductID, MotorID, Comment) {
        this.ProductAndMotorID = ProductAndMotorID;
        this.ProductID = ProductID;
        this.MotorID = MotorID;
        this.Comment = Comment;
    }
    return ProductsAndMotor;
}());
export { ProductsAndMotor };
var OeBrand = /** @class */ (function () {
    function OeBrand(OeBrandID, Name, Description, IsShown, IsOriginal) {
        this.OeBrandID = OeBrandID;
        this.Name = Name;
        this.Description = Description;
        this.IsShown = IsShown;
        this.IsOriginal = IsOriginal;
    }
    return OeBrand;
}());
export { OeBrand };
var OriginalElement = /** @class */ (function () {
    function OriginalElement(OeID, OeBrandID, Name, IsShown) {
        this.OeID = OeID;
        this.OeBrandID = OeBrandID;
        this.Name = Name;
        this.IsShown = IsShown;
    }
    return OriginalElement;
}());
export { OriginalElement };
var ProductAndOe = /** @class */ (function () {
    function ProductAndOe(ProductAndOeID, ProductID, OeID) {
        this.ProductAndOeID = ProductAndOeID;
        this.ProductID = ProductID;
        this.OeID = OeID;
    }
    return ProductAndOe;
}());
export { ProductAndOe };
var RegularOe = /** @class */ (function () {
    function RegularOe(OeID, OeBrand, Name) {
        this.OeID = OeID;
        this.OeBrand = OeBrand;
        this.Name = Name;
    }
    return RegularOe;
}());
export { RegularOe };
var RegularProductAndOe = /** @class */ (function () {
    function RegularProductAndOe(ProductAndOeID, Name, OeBrand, InPrice) {
        this.ProductAndOeID = ProductAndOeID;
        this.Name = Name;
        this.OeBrand = OeBrand;
        this.InPrice = InPrice;
    }
    return RegularProductAndOe;
}());
export { RegularProductAndOe };
var ProductAnalog = /** @class */ (function () {
    function ProductAnalog(ProductAnalogID, ProductID, AnalogID) {
        this.ProductAnalogID = ProductAnalogID;
        this.ProductID = ProductID;
        this.AnalogID = AnalogID;
    }
    return ProductAnalog;
}());
export { ProductAnalog };
var PrimaryAndSecondaryElement = /** @class */ (function () {
    function PrimaryAndSecondaryElement(PrimaryID, SecondaryID, Comment) {
        this.PrimaryID = PrimaryID;
        this.SecondaryID = SecondaryID;
        this.Comment = Comment;
    }
    return PrimaryAndSecondaryElement;
}());
export { PrimaryAndSecondaryElement };
//# sourceMappingURL=production.js.map