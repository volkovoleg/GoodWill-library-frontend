var Partner = /** @class */ (function () {
    function Partner(PartnerID, CuratorID, DeliveryTypeID, PartnerStateID, Name, Code1C, Code1CNew, ConsigneeCode1C, Republic, Region, Part, Activity, Specialisation, Site, IsShown, IsBlock, IsSafeStorage, BlockTypeID, TransportAddress, TransportName, TransportPhone, RecieverAddress, RecieverName, RecieverPhone, Comment, ParentPartnerID, RestExportTypeID) {
        this.PartnerID = PartnerID;
        this.CuratorID = CuratorID;
        this.DeliveryTypeID = DeliveryTypeID;
        this.PartnerStateID = PartnerStateID;
        this.Name = Name;
        this.Code1C = Code1C;
        this.Code1CNew = Code1CNew;
        this.ConsigneeCode1C = ConsigneeCode1C;
        this.Republic = Republic;
        this.Region = Region;
        this.Part = Part;
        this.Activity = Activity;
        this.Specialisation = Specialisation;
        this.Site = Site;
        this.IsShown = IsShown;
        this.IsBlock = IsBlock;
        this.IsSafeStorage = IsSafeStorage;
        this.BlockTypeID = BlockTypeID;
        this.TransportAddress = TransportAddress;
        this.TransportName = TransportName;
        this.TransportPhone = TransportPhone;
        this.RecieverAddress = RecieverAddress;
        this.RecieverName = RecieverName;
        this.RecieverPhone = RecieverPhone;
        this.Comment = Comment;
        this.ParentPartnerID = ParentPartnerID;
        this.RestExportTypeID = RestExportTypeID;
    }
    return Partner;
}());
export { Partner };
var PartnerCategory = /** @class */ (function () {
    function PartnerCategory(PartnerCategoryID, ParentID, BrandID, Name, CriteriaSum, Coefficient, IsShown, InPrice) {
        this.PartnerCategoryID = PartnerCategoryID;
        this.ParentID = ParentID;
        this.BrandID = BrandID;
        this.Name = Name;
        this.CriteriaSum = CriteriaSum;
        this.Coefficient = Coefficient;
        this.IsShown = IsShown;
        this.InPrice = InPrice;
    }
    return PartnerCategory;
}());
export { PartnerCategory };
var PartnerAndCategory = /** @class */ (function () {
    function PartnerAndCategory(BrandID, CategoryID) {
        this.BrandID = BrandID;
        this.CategoryID = CategoryID;
    }
    return PartnerAndCategory;
}());
export { PartnerAndCategory };
var ShortPartner = /** @class */ (function () {
    function ShortPartner(PartnerID, Name, PartnerState, City, ManagerName, IsShown, IsSafeStorage, PartnerCategoryName, DebtBank, DebtCash, CreationDate, IsBlock, Address, Email, Code1C, Code1cNew) {
        this.PartnerID = PartnerID;
        this.Name = Name;
        this.PartnerState = PartnerState;
        this.City = City;
        this.ManagerName = ManagerName;
        this.IsShown = IsShown;
        this.IsSafeStorage = IsSafeStorage;
        this.PartnerCategoryName = PartnerCategoryName;
        this.DebtBank = DebtBank;
        this.DebtCash = DebtCash;
        this.CreationDate = CreationDate;
        this.IsBlock = IsBlock;
        this.Address = Address;
        this.Email = Email;
        this.Code1C = Code1C;
        this.Code1cNew = Code1cNew;
    }
    return ShortPartner;
}());
export { ShortPartner };
var BlockType = /** @class */ (function () {
    function BlockType() {
    }
    return BlockType;
}());
export { BlockType };
//# sourceMappingURL=partners.js.map