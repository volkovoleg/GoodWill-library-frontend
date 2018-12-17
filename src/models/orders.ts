export class DeliveryType{
    constructor(
        public DeliveryTypeID: number,
        public Name: string
    ){}
}

export class Firm{
    constructor(
        public FirmID: number,
        public Name: string,
        public Code1C: string,
        public PayTypeName: string,
        public IsShown: boolean
    ){}
}

export class OrderLine{
    constructor(
        public OrderLineID: number,
        public OrderID: number,
        public ProductID: number,
        public Code: string,
        public PackageCount: number,
        public ProductCount: number,
        public ChangeCount: number,
        public FreeCount: number,
        public Volume: number,
        public Weight: number,
        public Price: number
    ){}
}

export class OrderLineChanges{
    constructor(public Code: string, public OrderedCount: number, public FreeCount: number){}
}

export class Order{
    constructor(
        public OrderID: number,
        public CustomerID: number,
        public CuratorID: number,
        public SupplierID: number,
        public OrderStateID: number,
        public DeliveryTypeID: number,
        public RealizeNum: string,
        public Customer: string,
        public Curator: string,
        public OrderState: string,
        public DebtBankFull: number,
        public DebtBankOverdue: number,
        public TransportAddress: string,
        public TransportName: string,
        public TransportPhone: string,
        public RecieverAddress: string,
        public RecieverName: string,
        public RecieverPhone: string,
        public Comment: string,
        public IsBlock: boolean,
        public IsSafeStorage: boolean,
        public CanDelete: boolean,
        public CreateEmptyOrder: boolean,
        public GoodWillPrice: string,
        public LoaderID?: number,
        public DriverID?: number,
        public DeliveryDate?: Date,
        public ReservationDate?: Date,
        public OrderLines?: OrderLine[]
    ){}
}

export class OrderState{
    constructor(public OrderStateID: string, public Name: string){}
}

export class OrderSearch{
    constructor(
        public Code1C: string,
        public CustomerName: string,
        public OrderID?: number,
        public CustomerID?: number,
        public SupplierID?: number,
        public CuratorID?: number,
        public OrderStateID?: number,
        public DeliveryTypeID?: number,
        public PartnerStateID?: number,
        public StartDate?: Date,
        public EndDate?: Date
    ){}
}

export class ShortOrder{
    constructor(
        public OrderID: number,
        public Code1C: string,
        public CustomerName: string,
        public ManagerName: string,
        public CustomerState: string,
        public PositionCount: number,
        public Volume: number,
        public Sum: number,
        public OrderState: string,
        public DeliveryType: string,
        public IsSafeStorage: boolean,
        public CanDelete: boolean,
        public CreationDate: Date,
        public DevileryDate: Date
    ){}
}

export class OrderResponse{
    constructor(
        public OrderStatus: string, 
        public Details: string, 
        public Changes: OrderLineChanges[], 
        public Errors: string[], 
        public OrderNum?: number){}
}

export class DeliveryOrder{
    constructor(
        public OrderID: number, 
        public DeliveryTypeID: number,
        public OrderStateID: number,
        public DeliveryInfo: string,
        public Name: string,
        public Manager: string, 
        public DeliveryType: string, 
        public PayTypeName: string, 
        public RealizeNum: string, 
        public Status: string,
        public OrderSum: number,
        public OrderVolume: number,
        public OrderWeight: number,
        public EnableEdit: boolean,
        public Cause: string,
        public DriverID?: number,
        public AssemblyDate?: Date,
        public CreationDate?: Date, 
        public DeliveryDate?: Date, 
        public LoadingDate?: Date
    ){} 
}

export class DeliveryError{
    constructor(
        public OrderID: number, public Cause: string
    ){}
}

export class ReservesSearch{
    constructor(
        public Code: string, 
        public ProductID: number,
        public BrandID: number,
        public CategoryID: number,
        public ProductStateID: number,
        public InPrice: boolean,
        public StartDate: Date,
        public EndDate: Date
    ){} 
}