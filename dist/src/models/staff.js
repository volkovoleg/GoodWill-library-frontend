var UserRole = /** @class */ (function () {
    function UserRole(UserRoleID, Name, Description) {
        this.UserRoleID = UserRoleID;
        this.Name = Name;
        this.Description = Description;
    }
    return UserRole;
}());
export { UserRole };
var User = /** @class */ (function () {
    function User(UserID, PartnerID, RoleID, Login, FirstName, LastName, MiddleName, Phone, Email, CreationDate, FireDate, IsActive) {
        this.UserID = UserID;
        this.PartnerID = PartnerID;
        this.RoleID = RoleID;
        this.Login = Login;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.MiddleName = MiddleName;
        this.Phone = Phone;
        this.Email = Email;
        this.CreationDate = CreationDate;
        this.FireDate = FireDate;
        this.IsActive = IsActive;
    }
    Object.defineProperty(User.prototype, "FullName", {
        get: function () {
            return this.MiddleName + ' ' + this.FirstName + ' ' + this.LastName;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
export { User };
var UserReplacement = /** @class */ (function () {
    function UserReplacement(UserReplacementID, UserID, AssistanteID, DateStart, DateEnd) {
        this.UserReplacementID = UserReplacementID;
        this.UserID = UserID;
        this.AssistanteID = AssistanteID;
        this.DateStart = DateStart;
        this.DateEnd = DateEnd;
    }
    return UserReplacement;
}());
export { UserReplacement };
var StoreEmployeeType = /** @class */ (function () {
    function StoreEmployeeType(StoreEmployeeTypeID, Name) {
        this.StoreEmployeeTypeID = StoreEmployeeTypeID;
        this.Name = Name;
    }
    return StoreEmployeeType;
}());
export { StoreEmployeeType };
var StoreEmployee = /** @class */ (function () {
    function StoreEmployee(StoreEmployeeID, TypeID, FirstName, LastName, MiddleName, Phone, CarNumber, IsActive, FullName) {
        this.StoreEmployeeID = StoreEmployeeID;
        this.TypeID = TypeID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.MiddleName = MiddleName;
        this.Phone = Phone;
        this.CarNumber = CarNumber;
        this.IsActive = IsActive;
        this.FullName = FullName;
    }
    return StoreEmployee;
}());
export { StoreEmployee };
//# sourceMappingURL=staff.js.map