"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([100, 3, -5, 12, 0]);
var characterCollection = new CharacterCollection_1.CharacterCollection("helloWorld");
var sortNumbers = new Sorter_1.Sorter(numbersCollection);
var sortChars = new Sorter_1.Sorter(characterCollection);
sortNumbers.sort();
sortChars.sort();
console.log(numbersCollection.data);
console.log(characterCollection.data);
//# sourceMappingURL=index.js.map