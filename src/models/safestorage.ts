export class SalesReport{
    constructor(
        public PartnerID: number,
        public StartDate: Date,
        public EndDate: Date,
        public SalesReportLines: SalesReportLine[]
    ){}
}

export class SalesReportLine{
    constructor(
        public Code: string,
        public ProductCount: number,
        public Price: number
    ){}
}

export class SalesReportResponse{
    constructor(
        public OrderNum: number,
        public NotExist: ExistError[],
        public NotExistOnStore: ExistError[],
        public RestErrors: RestError[],
        public PriceErrors: PriceError[]
    ){}
}

export class RestError{
    constructor(
        public Code: string,
        public OrderedCount: number,
        public StoreCount: number
    ){}
}

export class PriceError{
    constructor(
        public Code: string,
        public Price: number
    ){}
}

export class ExistError{
    constructor(
        public Code: string
    ){}
}