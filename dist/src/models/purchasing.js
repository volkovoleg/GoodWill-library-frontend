var Supplier = /** @class */ (function () {
    function Supplier(SupplierID, TypeID, FirmID, DeliveryTime, PriceCoef, Name, Country, Code1C, IsShown) {
        this.SupplierID = SupplierID;
        this.TypeID = TypeID;
        this.FirmID = FirmID;
        this.DeliveryTime = DeliveryTime;
        this.PriceCoef = PriceCoef;
        this.Name = Name;
        this.Country = Country;
        this.Code1C = Code1C;
        this.IsShown = IsShown;
    }
    return Supplier;
}());
export { Supplier };
var PriceList = /** @class */ (function () {
    function PriceList(PriceListID, ProductID, SupplierID, Price, Moq, ProductionTime, StoreCount, Comment, SupplierProductName) {
        this.PriceListID = PriceListID;
        this.ProductID = ProductID;
        this.SupplierID = SupplierID;
        this.Price = Price;
        this.Moq = Moq;
        this.ProductionTime = ProductionTime;
        this.StoreCount = StoreCount;
        this.Comment = Comment;
        this.SupplierProductName = SupplierProductName;
    }
    return PriceList;
}());
export { PriceList };
var Delivery = /** @class */ (function () {
    function Delivery(DeliveryID, ProductID, SupplierID, ProductCount, DeliveryCount, CreationDate) {
        this.DeliveryID = DeliveryID;
        this.ProductID = ProductID;
        this.SupplierID = SupplierID;
        this.ProductCount = ProductCount;
        this.DeliveryCount = DeliveryCount;
        this.CreationDate = CreationDate;
    }
    return Delivery;
}());
export { Delivery };
var ManufactoringOrder = /** @class */ (function () {
    function ManufactoringOrder(ManufactoringOrderID, ProductGroupID, ProductID, SupplierID, ProductCount, ProduceCount, ProductionTime, Price, CreationDate, BuildDate) {
        this.ManufactoringOrderID = ManufactoringOrderID;
        this.ProductGroupID = ProductGroupID;
        this.ProductID = ProductID;
        this.SupplierID = SupplierID;
        this.ProductCount = ProductCount;
        this.ProduceCount = ProduceCount;
        this.ProductionTime = ProductionTime;
        this.Price = Price;
        this.CreationDate = CreationDate;
        this.BuildDate = BuildDate;
    }
    Object.defineProperty(ManufactoringOrder.prototype, "NotProduceCount", {
        get: function () {
            return this.ProductCount - this.ProduceCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManufactoringOrder.prototype, "OrderSum", {
        get: function () {
            return this.NotProduceCount * this.Price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManufactoringOrder.prototype, "DeliveryDate", {
        get: function () {
            var creationDate = new Date(this.CreationDate);
            var deliveryDate = new Date(creationDate.setDate(creationDate.getDate() + this.ProductionTime));
            return deliveryDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManufactoringOrder.prototype, "Delay", {
        get: function () {
            var creationDate = new Date(this.CreationDate);
            var deliveryDate = new Date(creationDate.setDate(creationDate.getDate() + this.ProductionTime));
            var currentDate = new Date();
            return Math.round((currentDate.getTime() - deliveryDate.getTime()) / 86400000);
        },
        enumerable: true,
        configurable: true
    });
    return ManufactoringOrder;
}());
export { ManufactoringOrder };
var ProductGroup = /** @class */ (function () {
    function ProductGroup(ProductGroupID, Name, PlanDays, StoreDays, ProductsCount, ExistCount, ExistPart) {
        this.ProductGroupID = ProductGroupID;
        this.Name = Name;
        this.PlanDays = PlanDays;
        this.StoreDays = StoreDays;
        this.ProductsCount = ProductsCount;
        this.ExistCount = ExistCount;
        this.ExistPart = ExistPart;
    }
    return ProductGroup;
}());
export { ProductGroup };
var ShortEnterance = /** @class */ (function () {
    function ShortEnterance(EnteranceID, EnteranceStateID, EnteranceTypeID, FirmID, SupplierID, Name, CreationDate, IsConfirm) {
        this.EnteranceID = EnteranceID;
        this.EnteranceStateID = EnteranceStateID;
        this.EnteranceTypeID = EnteranceTypeID;
        this.FirmID = FirmID;
        this.SupplierID = SupplierID;
        this.Name = Name;
        this.CreationDate = CreationDate;
        this.IsConfirm = IsConfirm;
    }
    return ShortEnterance;
}());
export { ShortEnterance };
var AdditionalCost = /** @class */ (function () {
    function AdditionalCost(EnteranceAdditionalCostID, Name, Usd, PriceRub) {
        this.EnteranceAdditionalCostID = EnteranceAdditionalCostID;
        this.Name = Name;
        this.Usd = Usd;
        this.PriceRub = PriceRub;
    }
    Object.defineProperty(AdditionalCost.prototype, "PriceUsd", {
        get: function () {
            return this.PriceRub / this.Usd;
        },
        enumerable: true,
        configurable: true
    });
    return AdditionalCost;
}());
export { AdditionalCost };
var EnteranceLine = /** @class */ (function () {
    function EnteranceLine(EnteranceLineID, EnteranceID, TypeID, ProductID, Code, ProductCount, StoreCount, PriceFob, PriceRub, PriceUsd, PriceRubOld, PriceUsdOld, AverageUsd, Margin, Usd, Check, PriceUsdInput) {
        this.EnteranceLineID = EnteranceLineID;
        this.EnteranceID = EnteranceID;
        this.TypeID = TypeID;
        this.ProductID = ProductID;
        this.Code = Code;
        this.ProductCount = ProductCount;
        this.StoreCount = StoreCount;
        this.PriceFob = PriceFob;
        this.PriceRub = PriceRub;
        this.PriceUsd = PriceUsd;
        this.PriceRubOld = PriceRubOld;
        this.PriceUsdOld = PriceUsdOld;
        this.AverageUsd = AverageUsd;
        this.Margin = Margin;
        this.Usd = Usd;
        this.Check = Check;
        this.PriceUsdInput = PriceUsdInput;
    }
    Object.defineProperty(EnteranceLine.prototype, "PriceFobUsd", {
        get: function () {
            var priceFobUsd = 0;
            if (this.TypeID === 1)
                priceFobUsd = this.PriceFob;
            else if (this.TypeID === 2)
                priceFobUsd = (this.PriceFob / this.Usd);
            return priceFobUsd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnteranceLine.prototype, "InputPriceUsd", {
        get: function () {
            return this.PriceFobUsd * this.Margin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnteranceLine.prototype, "InputPriceRub", {
        get: function () {
            return this.InputPriceUsd * this.Usd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnteranceLine.prototype, "Average", {
        get: function () {
            return ((this.ProductCount * this.InputPriceUsd +
                this.StoreCount * this.PriceUsdOld) / (this.ProductCount + this.StoreCount));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnteranceLine.prototype, "LotSumUsd", {
        get: function () {
            return this.PriceFobUsd * this.ProductCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnteranceLine.prototype, "LotSumRub", {
        get: function () {
            return this.PriceFobUsd * this.Usd * this.ProductCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnteranceLine.prototype, "LotSumUsdWithMargin", {
        get: function () {
            return this.InputPriceUsd * this.ProductCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnteranceLine.prototype, "LotSumRubWithMargin", {
        get: function () {
            return this.InputPriceRub * this.ProductCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EnteranceLine.prototype, "AveragePriceChange", {
        get: function () {
            return this.Average / this.PriceUsdOld - 1;
        },
        enumerable: true,
        configurable: true
    });
    return EnteranceLine;
}());
export { EnteranceLine };
var Enterance = /** @class */ (function () {
    function Enterance(EnteranceID, EnteranceTypeID, SupplierID, EnteranceStateID, Name, Usd, UsdAdditional, Margin, Gtd, CreationDate, EnteranceLines, AdditionalCosts) {
        this.EnteranceID = EnteranceID;
        this.EnteranceTypeID = EnteranceTypeID;
        this.SupplierID = SupplierID;
        this.EnteranceStateID = EnteranceStateID;
        this.Name = Name;
        this.Usd = Usd;
        this.UsdAdditional = UsdAdditional;
        this.Margin = Margin;
        this.Gtd = Gtd;
        this.CreationDate = CreationDate;
        this.EnteranceLines = EnteranceLines;
        this.AdditionalCosts = AdditionalCosts;
    }
    return Enterance;
}());
export { Enterance };
var EnteranceType = /** @class */ (function () {
    function EnteranceType(EnteranceTypeID, Name) {
        this.EnteranceTypeID = EnteranceTypeID;
        this.Name = Name;
    }
    return EnteranceType;
}());
export { EnteranceType };
var EnteranceResponce = /** @class */ (function () {
    function EnteranceResponce(EnteranceStatus, ErrorLines) {
        this.EnteranceStatus = EnteranceStatus;
        this.ErrorLines = ErrorLines;
    }
    return EnteranceResponce;
}());
export { EnteranceResponce };
var ReturnLine = /** @class */ (function () {
    function ReturnLine(ReturnLineID, ReturnID, ProductID, InputPrice, PriceUsd, ProductCount) {
        this.ReturnLineID = ReturnLineID;
        this.ReturnID = ReturnID;
        this.ProductID = ProductID;
        this.InputPrice = InputPrice;
        this.PriceUsd = PriceUsd;
        this.ProductCount = ProductCount;
    }
    return ReturnLine;
}());
export { ReturnLine };
var ReturnDomainModel = /** @class */ (function () {
    function ReturnDomainModel(ReturnID, PartnerID, CreationDate, Usd, Cause, Comment, ReturnLines) {
        this.ReturnID = ReturnID;
        this.PartnerID = PartnerID;
        this.CreationDate = CreationDate;
        this.Usd = Usd;
        this.Cause = Cause;
        this.Comment = Comment;
        this.ReturnLines = ReturnLines;
    }
    return ReturnDomainModel;
}());
export { ReturnDomainModel };
var DeffectDomainModel = /** @class */ (function () {
    function DeffectDomainModel(DeffectID, ProductID, SupplierID, ProductCount, PriceFob, CreationDate, Cause, SerialNumber, HideRest, Complete) {
        this.DeffectID = DeffectID;
        this.ProductID = ProductID;
        this.SupplierID = SupplierID;
        this.ProductCount = ProductCount;
        this.PriceFob = PriceFob;
        this.CreationDate = CreationDate;
        this.Cause = Cause;
        this.SerialNumber = SerialNumber;
        this.HideRest = HideRest;
        this.Complete = Complete;
    }
    return DeffectDomainModel;
}());
export { DeffectDomainModel };
var ShelfTime = /** @class */ (function () {
    function ShelfTime(ShelfTimeID, SupplierID, ProductGroupID, PlanDays, StoreDays) {
        this.ShelfTimeID = ShelfTimeID;
        this.SupplierID = SupplierID;
        this.ProductGroupID = ProductGroupID;
        this.PlanDays = PlanDays;
        this.StoreDays = StoreDays;
    }
    return ShelfTime;
}());
export { ShelfTime };
var OrderChange = /** @class */ (function () {
    function OrderChange(SupplierID, FullOrderedCount, SupplierOrderedCount, ProduceCountChange) {
        this.SupplierID = SupplierID;
        this.FullOrderedCount = FullOrderedCount;
        this.SupplierOrderedCount = SupplierOrderedCount;
        this.ProduceCountChange = ProduceCountChange;
    }
    return OrderChange;
}());
export { OrderChange };
var ProductPurchasePlan = /** @class */ (function () {
    function ProductPurchasePlan(PriceListID, ProductID, SupplierID, TypeID, Usd, DeliveryTime, Code, CodeForGroup, Comment, DeliveryCount, DeliveryInstCount, Demand, DemandMonth, FreeCount, FullDeliveryCount, FullDeliveryInstCount, FullOrderedCount, GroupID, Moq, OrderedCount, PlanDays, Price, PriceCoef, ProductionTime, Sales, SalesRub, StoreCount, StoreDays, SuppliersCount, Volume) {
        this.PriceListID = PriceListID;
        this.ProductID = ProductID;
        this.SupplierID = SupplierID;
        this.TypeID = TypeID;
        this.Usd = Usd;
        this.DeliveryTime = DeliveryTime;
        this.Code = Code;
        this.CodeForGroup = CodeForGroup;
        this.Comment = Comment;
        this.DeliveryCount = DeliveryCount;
        this.DeliveryInstCount = DeliveryInstCount;
        this.Demand = Demand;
        this.DemandMonth = DemandMonth;
        this.FreeCount = FreeCount;
        this.FullDeliveryCount = FullDeliveryCount;
        this.FullDeliveryInstCount = FullDeliveryInstCount;
        this.FullOrderedCount = FullOrderedCount;
        this.GroupID = GroupID;
        this.Moq = Moq;
        this.OrderedCount = OrderedCount;
        this.PlanDays = PlanDays;
        this.Price = Price;
        this.PriceCoef = PriceCoef;
        this.ProductionTime = ProductionTime;
        this.Sales = Sales;
        this.SalesRub = SalesRub;
        this.StoreCount = StoreCount;
        this.StoreDays = StoreDays;
        this.SuppliersCount = SuppliersCount;
        this.Volume = Volume;
    }
    Object.defineProperty(ProductPurchasePlan.prototype, "Stock", {
        get: function () {
            return this.Demand === 0 ? 0 : (this.FreeCount + this.DeliveryCount) / this.DemandMonth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductPurchasePlan.prototype, "NeedToOrder", {
        get: function () {
            return Math.ceil(this.Demand * (this.PlanDays + this.ProductionTime + this.DeliveryTime) - this.FreeCount - this.FullDeliveryCount - this.SuppliersCount - this.FullOrderedCount);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductPurchasePlan.prototype, "NeedToDelivery", {
        get: function () {
            var needForDelivery = Math.ceil(this.Demand * (this.StoreDays + this.DeliveryTime + this.ProductionTime) - this.FreeCount - this.FullDeliveryCount - this.FullDeliveryInstCount);
            return needForDelivery < this.StoreCount ? needForDelivery : this.StoreCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductPurchasePlan.prototype, "PriceFobUsd", {
        get: function () {
            return this.TypeID == 1 ? this.Price : this.Price / this.Usd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductPurchasePlan.prototype, "PriceFobRub", {
        get: function () {
            return this.PriceFobUsd * this.Usd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductPurchasePlan.prototype, "InputPriceUsd", {
        get: function () {
            return this.PriceFobUsd * this.PriceCoef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductPurchasePlan.prototype, "InputPriceRub", {
        get: function () {
            return this.InputPriceUsd * this.Usd;
        },
        enumerable: true,
        configurable: true
    });
    return ProductPurchasePlan;
}());
export { ProductPurchasePlan };
//# sourceMappingURL=purchasing.js.map