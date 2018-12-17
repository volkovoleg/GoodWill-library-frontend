var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import * as XLSX from 'xlsx';
import { Injectable } from "@angular/core";
var ExcelService = /** @class */ (function () {
    function ExcelService() {
        this.enteranceParser = this.enteranceParser.bind(this);
        this.priceListParser = this.priceListParser.bind(this);
        this.supplierRestParser = this.supplierRestParser.bind(this);
        this.orderParser = this.orderParser.bind(this);
    }
    ExcelService.prototype.getData = function (e) {
        var binary = "";
        var bytes = new Uint8Array(e);
        for (var i = 0; i < bytes.byteLength; i++)
            binary += String.fromCharCode(bytes[i]);
        var wb = XLSX.read(binary, { type: 'binary' });
        //считываем 1 лист 
        var wsname = wb.SheetNames[0];
        var ws = wb.Sheets[wsname];
        //Заполняем массив считанными данными
        var data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        return data;
    };
    ExcelService.prototype.getTable = function (e, parse) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var result = [];
            //Подключаем FileReader
            var reader = new FileReader();
            //reader.onload = onload(e, reader, col1, col2, startRow);
            reader.onload = function (e) {
                //Получаем массив строк из загруженных данных
                var data = _this.getData(reader.result);
                //Построчно считываем данные массива и заносим цены в выходной массив filePrices
                result = parse(data);
                resolve(result);
            };
            reader.readAsArrayBuffer(e.file);
        });
        return promise;
    };
    ExcelService.prototype.codeCountParser = function (data, col1, col2, startRow) {
        var result = [];
        for (var rowNum = startRow; rowNum < data.length; rowNum++) {
            var row = data[rowNum];
            if (row.length > 0) {
                //Количество штук к заказу у позиции должно быть больше нуля
                if (parseInt(row[col2]) > 0) {
                    result.push({ Code: row[col1], Count: parseInt(row[col2]) });
                }
            }
        }
        return result;
    };
    ExcelService.prototype.codeCountPriceParser = function (data, codeColumn, countColumn, priceColumn, startRow) {
        var result = [];
        for (var rowNum = startRow; rowNum < data.length; rowNum++) {
            var row = data[rowNum];
            if (parseInt(row[countColumn]) > 0) {
                var price = parseFloat(row[priceColumn]);
                result.push({ Code: row[codeColumn], Count: parseInt(row[countColumn]), Price: isNaN(price) ? 0 : price });
            }
        }
        return result;
    };
    ExcelService.prototype.orderParser = function (data) {
        var header = data[0][0];
        var startRow = 0;
        var codeColumn = 0;
        var countColumn = 1;
        if (header.indexOf('GOODWILL ОСТАТКИ') !== -1) {
            startRow = 7;
            codeColumn = 1;
            countColumn = 7;
        }
        return this.codeCountParser(data, codeColumn, countColumn, startRow);
    };
    ExcelService.prototype.priceListParser = function (data) {
        var codeColumn = 0, priceColumn = 1, moqColumn = 2, productionTimeColumn = 3, storeCountColumn = 4, startRow = 0;
        var result = [];
        for (var rowNum = startRow; rowNum < data.length; rowNum++) {
            var row = data[rowNum];
            var price = parseFloat(row[priceColumn]);
            var moq = isNaN(parseInt(row[moqColumn])) ? 0 : parseInt(row[moqColumn]);
            var productionTime = isNaN(parseInt(row[productionTimeColumn])) ? 0 : parseInt(row[productionTimeColumn]);
            var storeCount = isNaN(parseInt(row[storeCountColumn])) ? 0 : parseInt(row[storeCountColumn]);
            result.push({ Code: row[codeColumn], Price: price, Moq: moq, ProductionTime: productionTime, StoreCount: storeCount });
        }
        return result;
    };
    ExcelService.prototype.supplierRestParser = function (data) {
        return this.codeCountParser(data, 0, 1, 0);
    };
    ExcelService.prototype.enteranceParser = function (data) {
        return this.codeCountPriceParser(data, 0, 1, 2, 0);
    };
    ExcelService.prototype.parseSupplierRests = function (e) {
        return this.getTable(e, this.supplierRestParser);
    };
    ExcelService.prototype.parseOrder = function (e) {
        return this.getTable(e, this.orderParser);
    };
    ExcelService.prototype.parseEnterance = function (e) {
        return this.getTable(e, this.enteranceParser);
    };
    ExcelService.prototype.parsePriceList = function (e) {
        return this.getTable(e, this.priceListParser);
    };
    ExcelService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());
export { ExcelService };
//# sourceMappingURL=excel.service.js.map