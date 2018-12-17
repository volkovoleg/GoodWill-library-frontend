export class Partner{
    constructor(
        public PartnerID: number,
        public CuratorID: number,
        public DeliveryTypeID: number,
        public PartnerStateID: number,
        public Name: string,
        public Code1C: string,
        public Code1CNew: string,
        public ConsigneeCode1C: string,
        public Republic: string,
        public Region: string,
        public Part: string,
        public Activity: string,
        public Specialisation: string,
        public Site: string,
        public IsShown: boolean,
        public IsBlock: boolean,
        public IsSafeStorage: boolean,
        public BlockTypeID: number,
        public TransportAddress: string,
        public TransportName: string,
        public TransportPhone: string,
        public RecieverAddress: string,
        public RecieverName: string,
        public RecieverPhone: string,
        public Comment: string,
        public ParentPartnerID?: number,
        public RestExportTypeID?:number
    ){}
}

export class PartnerCategory{
    constructor(public PartnerCategoryID: number,
            public ParentID: number,
            public BrandID: number,
            public Name: string, 
            public CriteriaSum: number,
            public Coefficient: number,
            public IsShown: boolean,
            public InPrice: boolean){}
}

export class PartnerAndCategory{
    constructor(
        public BrandID: number,
        public CategoryID: number
    ){}
}

export class ShortPartner{
    constructor(
        public PartnerID: number,
        public Name: string,
        public PartnerState: string,
        public City: string,
        public ManagerName: string,
        public IsShown: boolean,
        public IsSafeStorage: boolean,
        public PartnerCategoryName: string,
        public DebtBank: number,
        public DebtCash: number,
        public CreationDate: Date,
        public IsBlock: boolean,
        public Address: string,
        public Email: string,
        public Code1C: string,
        public Code1cNew: string
    ){}
}

export class BlockType{
    BlockTypeID: number;
    BlockType: string;
}