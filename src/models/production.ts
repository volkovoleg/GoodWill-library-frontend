export class Brand{
    constructor(public BrandID: number, public Name: string, public Description: string, public IsShown: boolean){}
}

export class Category{
    constructor(
        public CategoryID: number,
        public ParentID: number,
        public Name: string,
        public Description: string,
        public Code: string,
        public GtdNum: number
    ){}
}

export class ProductForm{
    constructor(public ProductFormID: number, public Name: string){}
}

export class ProductState{
    constructor(public ProductStateID: number, public Name: string){}
}

export class Product{
    constructor(
        public ProductID: number,
        public BrandID: number,
        public CategoryID: number,        
        public FormID: number,
        public ProductStateID: number,
        public Code: string,
        public Code1C: string,
        public Name: string,
        public Aplicability: string,
        public Analog: string,
        public ChangeGw: string,
        public Oem: string,
        public PackageCount: number,
        public Volume: number,
        public Weight: number,
        public AParam: number,
        public BParam: number,
        public BpParam: number,
        public CParam: number,
        public DParam: number,
        public EParam: number,
        public FParam: number,
        public GParam: number,
        public HParam: number,
        public NrParam: number,
        public IsShown: boolean,
        public Image: string,
        public Video: string,
        public Specification: string,
        public CreationDate: Date,
        public BarCode?: number
    ){}
}

export class ShortProduct{
    constructor(
        public ProductID: number,
        public Code: string,
        public BrandName: string,
        public CategoryName: string,
        public PackageCount: number,
        public Volume: number,
        public Weight: number,
        public Name: string,
        public Aplicability: string,
        public Oem: string,
        public FreeCount?: number,
        public Price?: number
    ){}
}

export class ProductSearch{
    constructor(
        public Code?: string,
        public BrandID?: number,
        public CategoryID?: number,
        public PartnerID?: number
    ){}
}

export class VenycleType{
    constructor(public VenycleTypeID: number, public Name: string, public IsShown: boolean){}
}

export class Manufactor{
    constructor(public ManufactorID: number, public VenycleTypeID: number, public Name: string, public IsShown: boolean){}
}

export class CarModel{
    constructor(public CarModelID: number, public ManufactorID: number, public Name: string, public IsShown: boolean){}
}

export class Motor{
    constructor(public MotorID: number, public CarModelID: number, public Name: string, public Engine: string, public IsShown: boolean){}
}

export class RegularMotor extends Motor{
    public ProductAndMotorID: number;
    public Manufactor: string;
    public CarModel: string;
}

export class ProductsAndMotor{
    constructor(public ProductAndMotorID: number, public ProductID: number, public MotorID: number, public Comment: string){}
}

export class OeBrand{
    constructor(public OeBrandID: number, public Name: string, public Description: string, public IsShown: boolean, public IsOriginal: boolean){}
}

export class OriginalElement{
    constructor(public OeID: number, public OeBrandID: number, public Name: string, public IsShown: boolean){}
}

export class ProductAndOe{
    constructor(public ProductAndOeID: number, public ProductID: number, public OeID: number){}
}

export class RegularOe{
    constructor(public OeID: number, public OeBrand: string, public Name: string){}
}

export class RegularProductAndOe{
    constructor(public ProductAndOeID: number, public Name: string, public OeBrand: string, public InPrice: boolean){}
}

export class ProductAnalog{
    constructor(public ProductAnalogID: number, public ProductID: number, public AnalogID: number){}
}

export class PrimaryAndSecondaryElement{
    constructor(public PrimaryID: number, public SecondaryID: number, public Comment: string){}
}