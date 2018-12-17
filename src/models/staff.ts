export class UserRole{
    constructor(public UserRoleID: number, public Name: string, public Description: string){}
}

export class User{
    constructor(
        public UserID: number, 
        public PartnerID: number,
        public RoleID: number,
        public Login: string,
        public FirstName: string,
        public LastName: string,
        public MiddleName: string,
        public Phone: string,
        public Email: string,
        public CreationDate: Date,
        public FireDate: Date,
        public IsActive: boolean
        ){}

        get FullName(): string{
            return this.MiddleName + ' ' + this.FirstName + ' ' + this.LastName;
        }
}

export class UserReplacement{
    constructor(
        public UserReplacementID: number,
        public UserID: number,
        public AssistanteID: number,
        public DateStart: Date,
        public DateEnd: Date
    ){}

}

export class StoreEmployeeType{
    constructor(
        public StoreEmployeeTypeID: number,
        public Name: string
    ){}
}

export class StoreEmployee{
    constructor(
        public StoreEmployeeID: number,
        public TypeID: number,
        public FirstName: string,
        public LastName: string,
        public MiddleName: string,
        public Phone: string,
        public CarNumber: string,
        public IsActive: boolean,
        public FullName?: string        
    ){}
}

