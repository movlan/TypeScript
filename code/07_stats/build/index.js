"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var matches = fs
    .readFileSync("football.csv", {
    encoding: "utf-8",
})
    .split("\n")
    .map(function (row) {
    return row.split(",");
});
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === "Man United" && match[5] === "H") {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === "A") {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
//# sourceMappingURL=index.js.map