"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
var Sorter_1 = require("./Sorter");
var CharacterCollection = (function (_super) {
    __extends(CharacterCollection, _super);
    function CharacterCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(CharacterCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharacterCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    CharacterCollection.prototype.swap = function (leftIndex, rightIndex) {
        var charArr = this.data.split("");
        var leftHand = charArr[leftIndex];
        charArr[leftIndex] = charArr[rightIndex];
        charArr[rightIndex] = leftHand;
        this.data = charArr.join("");
    };
    return CharacterCollection;
}(Sorter_1.Sorter));
exports.CharacterCollection = CharacterCollection;
//# sourceMappingURL=CharacterCollection.js.map