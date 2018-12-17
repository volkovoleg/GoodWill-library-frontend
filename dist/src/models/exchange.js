var BlockExchange = /** @class */ (function () {
    function BlockExchange(IsBlocked, UserID) {
        this.IsBlocked = IsBlocked;
        this.UserID = UserID;
    }
    return BlockExchange;
}());
export { BlockExchange };
var Exchange = /** @class */ (function () {
    function Exchange(ExchangeID, SourseID, ExchangeStateID, CreationDate, ItemID, UserID) {
        this.ExchangeID = ExchangeID;
        this.SourseID = SourseID;
        this.ExchangeStateID = ExchangeStateID;
        this.CreationDate = CreationDate;
        this.ItemID = ItemID;
        this.UserID = UserID;
    }
    return Exchange;
}());
export { Exchange };
//# sourceMappingURL=exchange.js.map