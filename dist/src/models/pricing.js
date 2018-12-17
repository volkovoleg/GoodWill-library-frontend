var PersonalPrice = /** @class */ (function () {
    function PersonalPrice(PersonalPriceID, PartnerID, ProductID, Price, StartDate, EndDate) {
        this.PersonalPriceID = PersonalPriceID;
        this.PartnerID = PartnerID;
        this.ProductID = ProductID;
        this.Price = Price;
        this.StartDate = StartDate;
        this.EndDate = EndDate;
    }
    return PersonalPrice;
}());
export { PersonalPrice };
var SpecialPrice = /** @class */ (function () {
    function SpecialPrice(SpecialPriceID, ProductID, Price, StartDate, EndDate) {
        this.SpecialPriceID = SpecialPriceID;
        this.ProductID = ProductID;
        this.Price = Price;
        this.StartDate = StartDate;
        this.EndDate = EndDate;
    }
    return SpecialPrice;
}());
export { SpecialPrice };
var EconomicItem = /** @class */ (function () {
    function EconomicItem(ProductID, Category, Code, StoreCount, FreeCount, PriceUsd, PriceTdOld, PriceTdNew, AverageSales, Supplier, Comment, UsdNew, UsdOld, Choi) {
        this.ProductID = ProductID;
        this.Category = Category;
        this.Code = Code;
        this.StoreCount = StoreCount;
        this.FreeCount = FreeCount;
        this.PriceUsd = PriceUsd;
        this.PriceTdOld = PriceTdOld;
        this.PriceTdNew = PriceTdNew;
        this.AverageSales = AverageSales;
        this.Supplier = Supplier;
        this.Comment = Comment;
        this.UsdNew = UsdNew;
        this.UsdOld = UsdOld;
        this.Choi = Choi;
    }
    Object.defineProperty(EconomicItem.prototype, "InputPriceRubOld", {
        get: function () {
            return Math.round(this.PriceUsd * this.UsdOld);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EconomicItem.prototype, "InputPriceRubNew", {
        get: function () {
            return Math.round(this.PriceUsd * this.UsdNew);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EconomicItem.prototype, "ProfitOld", {
        get: function () {
            return ((this.PriceTdOld / (this.PriceUsd * this.UsdOld)) - 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EconomicItem.prototype, "ProfitNew", {
        get: function () {
            return ((this.PriceTdNew / (this.PriceUsd * this.UsdNew)) - 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EconomicItem.prototype, "PriceChanges", {
        get: function () {
            return this.PriceTdNew / this.PriceTdOld - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EconomicItem.prototype, "PriceWithProfit", {
        get: function () {
            return ((15 / 100) + 1) * (this.PriceUsd * this.UsdNew);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EconomicItem.prototype, "ReservedCount", {
        get: function () {
            return this.StoreCount - this.FreeCount;
        },
        enumerable: true,
        configurable: true
    });
    return EconomicItem;
}());
export { EconomicItem };
//# sourceMappingURL=pricing.js.map