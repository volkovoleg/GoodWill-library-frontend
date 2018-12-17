var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { BaseService } from "../service-base";
import { AuthService } from "../auth/auth.service";
import { AppSettings } from "../appsetting";
import { HttpClient } from "@angular/common/http";
var BlockService = /** @class */ (function (_super) {
    __extends(BlockService, _super);
    function BlockService(http, authService) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.authService = authService;
        _this.url = AppSettings.API_ENDPOINT + "/SalesAPI/api/blockexchange";
        return _this;
    }
    //#region HttpGet
    BlockService.prototype.get = function () {
        return _super.prototype.getRequest.call(this, this.url);
    };
    BlockService.prototype.isBlocked = function () {
        return _super.prototype.getRequest.call(this, this.url + "/isBlock");
    };
    //#endregion
    //#region HttpPut
    BlockService.prototype.update = function (block) {
        return _super.prototype.put.call(this, block, this.url);
    };
    BlockService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, AuthService])
    ], BlockService);
    return BlockService;
}(BaseService));
export { BlockService };
//# sourceMappingURL=block.service.js.map