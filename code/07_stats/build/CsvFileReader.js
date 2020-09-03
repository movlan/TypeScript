"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs = require("fs");
var CsvFileReader = (function () {
    function CsvFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs
            .readFileSync(this.fileName, {
            encoding: "utf-8",
        })
            .split("\n")
            .map(function (row) {
            return row.split(",");
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
//# sourceMappingURL=CsvFileReader.js.map