"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReports_1 = require("./reportTargets/HtmlReports");
var Summary = (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReports_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
//# sourceMappingURL=Summary.js.map