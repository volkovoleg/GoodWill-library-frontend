import * as XLSX from 'xlsx';
import { Injectable } from "@angular/core";

@Injectable()
export class ExcelService{
    constructor(){
        this.enteranceParser = this.enteranceParser.bind(this);
        this.priceListParser = this.priceListParser.bind(this);
        this.supplierRestParser = this.supplierRestParser.bind(this);
        this.orderParser = this.orderParser.bind(this);
    }

    private getData(e: any): string[][]{
        let binary = "";
        let bytes = new Uint8Array(e);
        for(let i = 0; i < bytes.byteLength; i++)
            binary += String.fromCharCode(bytes[i]);
            
        const wb: XLSX.WorkBook = XLSX.read(binary, {type: 'binary'});
        //считываем 1 лист 
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        //Заполняем массив считанными данными
        let data = <string[][]>XLSX.utils.sheet_to_json(ws, {header: 1});
        return data;
    }

    private getTable(e: any, parse: (data: string[][]) => any): Promise<any[]>{
        var promise = new Promise<any[]>((resolve, reject) =>
        {
            let result: any[] = [];
            //Подключаем FileReader
            const reader: FileReader = new FileReader();
            //reader.onload = onload(e, reader, col1, col2, startRow);
            reader.onload = (e: any) => {
                //Получаем массив строк из загруженных данных
                let data = this.getData(reader.result); 
                //Построчно считываем данные массива и заносим цены в выходной массив filePrices
                result = parse(data);
                resolve(result);
            };
            reader.readAsArrayBuffer(e.file);
        });
        return promise;
    }

    private codeCountParser(data: string[][], col1: number, col2: number, startRow: number){
        let result: any[] = [];
        for(let rowNum = startRow; rowNum < data.length; rowNum++)
        {
            let row = data[rowNum];
            if (row.length > 0) {
                //Количество штук к заказу у позиции должно быть больше нуля
                if (parseInt(row[col2]) > 0)
                {
                    result.push({Code: row[col1], Count: parseInt(row[col2])});
                }
            }
        }
        return result;
    }

    private codeCountPriceParser(data: string[][], codeColumn: number, countColumn: number, priceColumn: number, startRow: number){
        let result: any[] = [];
        for(let rowNum = startRow; rowNum < data.length; rowNum++)
        {
            let row = data[rowNum];

            if (parseInt(row[countColumn]) > 0)
            {
                let price = parseFloat(row[priceColumn]);
                result.push({Code: row[codeColumn], Count: parseInt(row[countColumn]), Price: isNaN(price) ? 0 : price})
            }
        }
        return result;
    }

    private orderParser(data: string[][]){
        let header = data[0][0];
        let startRow = 0;
        let codeColumn = 0; 
        let countColumn = 1;

        if (header.indexOf('GOODWILL ОСТАТКИ') !== -1) {
            startRow = 7;
            codeColumn = 1;
            countColumn = 7;
        }
        return this.codeCountParser(data, codeColumn, countColumn, startRow);
    }

    private priceListParser(data: string[][]){
        let codeColumn = 0, priceColumn = 1, moqColumn = 2, productionTimeColumn = 3, storeCountColumn = 4, startRow = 0;
        let result: any[] = [];
        for(let rowNum = startRow; rowNum < data.length; rowNum++){
            let row = data[rowNum];
            let price = parseFloat(row[priceColumn]);
            let moq = isNaN(parseInt(row[moqColumn])) ? 0 : parseInt(row[moqColumn]);
            let productionTime = isNaN(parseInt(row[productionTimeColumn])) ? 0 : parseInt(row[productionTimeColumn]);
            let storeCount = isNaN(parseInt(row[storeCountColumn])) ? 0 : parseInt(row[storeCountColumn]);
            result.push({Code: row[codeColumn], Price: price, Moq: moq, ProductionTime: productionTime, StoreCount: storeCount});
        }
        return result;
    }

    private supplierRestParser(data: string[][]){
        return this.codeCountParser(data, 0, 1, 0);
    }

    private enteranceParser(data: string[][]){
        return this.codeCountPriceParser(data, 0, 1, 2, 0);
    }

    public parseSupplierRests(e: any){
        return this.getTable(e, this.supplierRestParser);
    }

    public parseOrder(e: any){
        return this.getTable(e, this.orderParser);
    }

    public parseEnterance(e: any){
        return this.getTable(e, this.enteranceParser);
    }

    public parsePriceList(e: any){
        return this.getTable(e, this.priceListParser);
    }
}