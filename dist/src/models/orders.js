var DeliveryType = /** @class */ (function () {
    function DeliveryType(DeliveryTypeID, Name) {
        this.DeliveryTypeID = DeliveryTypeID;
        this.Name = Name;
    }
    return DeliveryType;
}());
export { DeliveryType };
var Firm = /** @class */ (function () {
    function Firm(FirmID, Name, Code1C, PayTypeName, IsShown) {
        this.FirmID = FirmID;
        this.Name = Name;
        this.Code1C = Code1C;
        this.PayTypeName = PayTypeName;
        this.IsShown = IsShown;
    }
    return Firm;
}());
export { Firm };
var OrderLine = /** @class */ (function () {
    function OrderLine(OrderLineID, OrderID, ProductID, Code, PackageCount, ProductCount, ChangeCount, FreeCount, Volume, Weight, Price) {
        this.OrderLineID = OrderLineID;
        this.OrderID = OrderID;
        this.ProductID = ProductID;
        this.Code = Code;
        this.PackageCount = PackageCount;
        this.ProductCount = ProductCount;
        this.ChangeCount = ChangeCount;
        this.FreeCount = FreeCount;
        this.Volume = Volume;
        this.Weight = Weight;
        this.Price = Price;
    }
    return OrderLine;
}());
export { OrderLine };
var OrderLineChanges = /** @class */ (function () {
    function OrderLineChanges(Code, OrderedCount, FreeCount) {
        this.Code = Code;
        this.OrderedCount = OrderedCount;
        this.FreeCount = FreeCount;
    }
    return OrderLineChanges;
}());
export { OrderLineChanges };
var Order = /** @class */ (function () {
    function Order(OrderID, CustomerID, CuratorID, SupplierID, OrderStateID, DeliveryTypeID, RealizeNum, Customer, Curator, OrderState, DebtBankFull, DebtBankOverdue, TransportAddress, TransportName, TransportPhone, RecieverAddress, RecieverName, RecieverPhone, Comment, IsBlock, IsSafeStorage, CanDelete, CreateEmptyOrder, GoodWillPrice, LoaderID, DriverID, DeliveryDate, ReservationDate, OrderLines) {
        this.OrderID = OrderID;
        this.CustomerID = CustomerID;
        this.CuratorID = CuratorID;
        this.SupplierID = SupplierID;
        this.OrderStateID = OrderStateID;
        this.DeliveryTypeID = DeliveryTypeID;
        this.RealizeNum = RealizeNum;
        this.Customer = Customer;
        this.Curator = Curator;
        this.OrderState = OrderState;
        this.DebtBankFull = DebtBankFull;
        this.DebtBankOverdue = DebtBankOverdue;
        this.TransportAddress = TransportAddress;
        this.TransportName = TransportName;
        this.TransportPhone = TransportPhone;
        this.RecieverAddress = RecieverAddress;
        this.RecieverName = RecieverName;
        this.RecieverPhone = RecieverPhone;
        this.Comment = Comment;
        this.IsBlock = IsBlock;
        this.IsSafeStorage = IsSafeStorage;
        this.CanDelete = CanDelete;
        this.CreateEmptyOrder = CreateEmptyOrder;
        this.GoodWillPrice = GoodWillPrice;
        this.LoaderID = LoaderID;
        this.DriverID = DriverID;
        this.DeliveryDate = DeliveryDate;
        this.ReservationDate = ReservationDate;
        this.OrderLines = OrderLines;
    }
    return Order;
}());
export { Order };
var OrderState = /** @class */ (function () {
    function OrderState(OrderStateID, Name) {
        this.OrderStateID = OrderStateID;
        this.Name = Name;
    }
    return OrderState;
}());
export { OrderState };
var OrderSearch = /** @class */ (function () {
    function OrderSearch(Code1C, CustomerName, OrderID, CustomerID, SupplierID, CuratorID, OrderStateID, DeliveryTypeID, PartnerStateID, StartDate, EndDate) {
        this.Code1C = Code1C;
        this.CustomerName = CustomerName;
        this.OrderID = OrderID;
        this.CustomerID = CustomerID;
        this.SupplierID = SupplierID;
        this.CuratorID = CuratorID;
        this.OrderStateID = OrderStateID;
        this.DeliveryTypeID = DeliveryTypeID;
        this.PartnerStateID = PartnerStateID;
        this.StartDate = StartDate;
        this.EndDate = EndDate;
    }
    return OrderSearch;
}());
export { OrderSearch };
var ShortOrder = /** @class */ (function () {
    function ShortOrder(OrderID, Code1C, CustomerName, ManagerName, CustomerState, PositionCount, Volume, Sum, OrderState, DeliveryType, IsSafeStorage, CanDelete, CreationDate, DevileryDate) {
        this.OrderID = OrderID;
        this.Code1C = Code1C;
        this.CustomerName = CustomerName;
        this.ManagerName = ManagerName;
        this.CustomerState = CustomerState;
        this.PositionCount = PositionCount;
        this.Volume = Volume;
        this.Sum = Sum;
        this.OrderState = OrderState;
        this.DeliveryType = DeliveryType;
        this.IsSafeStorage = IsSafeStorage;
        this.CanDelete = CanDelete;
        this.CreationDate = CreationDate;
        this.DevileryDate = DevileryDate;
    }
    return ShortOrder;
}());
export { ShortOrder };
var OrderResponse = /** @class */ (function () {
    function OrderResponse(OrderStatus, Details, Changes, Errors, OrderNum) {
        this.OrderStatus = OrderStatus;
        this.Details = Details;
        this.Changes = Changes;
        this.Errors = Errors;
        this.OrderNum = OrderNum;
    }
    return OrderResponse;
}());
export { OrderResponse };
var DeliveryOrder = /** @class */ (function () {
    function DeliveryOrder(OrderID, DeliveryTypeID, OrderStateID, DeliveryInfo, Name, Manager, DeliveryType, PayTypeName, RealizeNum, Status, OrderSum, OrderVolume, OrderWeight, EnableEdit, Cause, DriverID, AssemblyDate, CreationDate, DeliveryDate, LoadingDate) {
        this.OrderID = OrderID;
        this.DeliveryTypeID = DeliveryTypeID;
        this.OrderStateID = OrderStateID;
        this.DeliveryInfo = DeliveryInfo;
        this.Name = Name;
        this.Manager = Manager;
        this.DeliveryType = DeliveryType;
        this.PayTypeName = PayTypeName;
        this.RealizeNum = RealizeNum;
        this.Status = Status;
        this.OrderSum = OrderSum;
        this.OrderVolume = OrderVolume;
        this.OrderWeight = OrderWeight;
        this.EnableEdit = EnableEdit;
        this.Cause = Cause;
        this.DriverID = DriverID;
        this.AssemblyDate = AssemblyDate;
        this.CreationDate = CreationDate;
        this.DeliveryDate = DeliveryDate;
        this.LoadingDate = LoadingDate;
    }
    return DeliveryOrder;
}());
export { DeliveryOrder };
var DeliveryError = /** @class */ (function () {
    function DeliveryError(OrderID, Cause) {
        this.OrderID = OrderID;
        this.Cause = Cause;
    }
    return DeliveryError;
}());
export { DeliveryError };
var ReservesSearch = /** @class */ (function () {
    function ReservesSearch(Code, ProductID, BrandID, CategoryID, ProductStateID, InPrice, StartDate, EndDate) {
        this.Code = Code;
        this.ProductID = ProductID;
        this.BrandID = BrandID;
        this.CategoryID = CategoryID;
        this.ProductStateID = ProductStateID;
        this.InPrice = InPrice;
        this.StartDate = StartDate;
        this.EndDate = EndDate;
    }
    return ReservesSearch;
}());
export { ReservesSearch };
//# sourceMappingURL=orders.js.map