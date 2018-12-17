var SalesReport = /** @class */ (function () {
    function SalesReport(PartnerID, StartDate, EndDate, SalesReportLines) {
        this.PartnerID = PartnerID;
        this.StartDate = StartDate;
        this.EndDate = EndDate;
        this.SalesReportLines = SalesReportLines;
    }
    return SalesReport;
}());
export { SalesReport };
var SalesReportLine = /** @class */ (function () {
    function SalesReportLine(Code, ProductCount, Price) {
        this.Code = Code;
        this.ProductCount = ProductCount;
        this.Price = Price;
    }
    return SalesReportLine;
}());
export { SalesReportLine };
var SalesReportResponse = /** @class */ (function () {
    function SalesReportResponse(OrderNum, NotExist, NotExistOnStore, RestErrors, PriceErrors) {
        this.OrderNum = OrderNum;
        this.NotExist = NotExist;
        this.NotExistOnStore = NotExistOnStore;
        this.RestErrors = RestErrors;
        this.PriceErrors = PriceErrors;
    }
    return SalesReportResponse;
}());
export { SalesReportResponse };
var RestError = /** @class */ (function () {
    function RestError(Code, OrderedCount, StoreCount) {
        this.Code = Code;
        this.OrderedCount = OrderedCount;
        this.StoreCount = StoreCount;
    }
    return RestError;
}());
export { RestError };
var PriceError = /** @class */ (function () {
    function PriceError(Code, Price) {
        this.Code = Code;
        this.Price = Price;
    }
    return PriceError;
}());
export { PriceError };
var ExistError = /** @class */ (function () {
    function ExistError(Code) {
        this.Code = Code;
    }
    return ExistError;
}());
export { ExistError };
//# sourceMappingURL=safestorage.js.map