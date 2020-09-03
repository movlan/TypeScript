"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
var MatchResults;
(function (MatchResults) {
    MatchResults["HomeWin"] = "H";
    MatchResults["AwayWin"] = "A";
    MatchResults["Draw"] = "D";
})(MatchResults || (MatchResults = {}));
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
//# sourceMappingURL=index.js.map