export declare class UserRole {
    UserRoleID: number;
    Name: string;
    Description: string;
    constructor(UserRoleID: number, Name: string, Description: string);
}
export declare class User {
    UserID: number;
    PartnerID: number;
    RoleID: number;
    Login: string;
    FirstName: string;
    LastName: string;
    MiddleName: string;
    Phone: string;
    Email: string;
    CreationDate: Date;
    FireDate: Date;
    IsActive: boolean;
    constructor(UserID: number, PartnerID: number, RoleID: number, Login: string, FirstName: string, LastName: string, MiddleName: string, Phone: string, Email: string, CreationDate: Date, FireDate: Date, IsActive: boolean);
    readonly FullName: string;
}
export declare class UserReplacement {
    UserReplacementID: number;
    UserID: number;
    AssistanteID: number;
    DateStart: Date;
    DateEnd: Date;
    constructor(UserReplacementID: number, UserID: number, AssistanteID: number, DateStart: Date, DateEnd: Date);
}
export declare class StoreEmployeeType {
    StoreEmployeeTypeID: number;
    Name: string;
    constructor(StoreEmployeeTypeID: number, Name: string);
}
export declare class StoreEmployee {
    StoreEmployeeID: number;
    TypeID: number;
    FirstName: string;
    LastName: string;
    MiddleName: string;
    Phone: string;
    CarNumber: string;
    IsActive: boolean;
    FullName?: string;
    constructor(StoreEmployeeID: number, TypeID: number, FirstName: string, LastName: string, MiddleName: string, Phone: string, CarNumber: string, IsActive: boolean, FullName?: string);
}
