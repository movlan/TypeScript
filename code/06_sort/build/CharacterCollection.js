"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
var CharacterCollection = (function () {
    function CharacterCollection(data) {
        this.data = data;
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
}());
exports.CharacterCollection = CharacterCollection;
//# sourceMappingURL=CharacterCollection.js.map