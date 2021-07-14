"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("./utils");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        var _this = this;
        this.reader = reader;
        this.matches = [];
        this.load = function () {
            _this.reader.read();
            _this.matches = _this.reader.data
                .map(function (row) {
                return [
                    utils_1.dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5],
                    row[6],
                ];
            });
        };
    }
    MatchReader.fromCsv = function (filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
