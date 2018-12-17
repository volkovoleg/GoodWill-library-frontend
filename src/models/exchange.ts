export class BlockExchange{
    constructor(
        public IsBlocked: boolean,
        public UserID: number,
    ){}
}

export class Exchange{
    constructor(
        public ExchangeID: number,
        public SourseID: number,
        public ExchangeStateID: number,
        public CreationDate: Date,
        public ItemID: number,
        public UserID: number,
    ){}
}