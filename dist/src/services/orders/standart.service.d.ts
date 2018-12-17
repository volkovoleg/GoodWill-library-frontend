import { Firm } from "../../models/index";
import { Service } from "../service";
import { HttpClient } from "@angular/common/http";
export declare class FirmService extends Service<Firm> {
    constructor(http: HttpClient);
}
