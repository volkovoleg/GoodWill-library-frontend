export declare class ExcelService {
    constructor();
    private getData;
    private getTable;
    private codeCountParser;
    private codeCountPriceParser;
    private orderParser;
    private priceListParser;
    private supplierRestParser;
    private enteranceParser;
    parseSupplierRests(e: any): Promise<any[]>;
    parseOrder(e: any): Promise<any[]>;
    parseEnterance(e: any): Promise<any[]>;
    parsePriceList(e: any): Promise<any[]>;
}
