import { PartnerCategory } from "../../models/index";
import { Service } from "../service";
import { HttpClient } from "@angular/common/http";
export declare class PriceService extends Service<PartnerCategory> {
    constructor(http: HttpClient);
}
