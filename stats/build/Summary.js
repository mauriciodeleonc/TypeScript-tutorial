"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
var HtmlReport_1 = require("./Reporters/HtmlReport");
var ConsoleReport_1 = require("./Reporters/ConsoleReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        var _this = this;
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
        this.buildAndPrintReport = function (matches) {
            var output = _this.analyzer.run(matches);
            _this.outputTarget.print(output);
        };
    }
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    Summary.winsAnalysisWithConsoleReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new ConsoleReport_1.ConsoleReport());
    };
    return Summary;
}());
exports.Summary = Summary;
