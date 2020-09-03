"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([100, 3, -5, 12, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
var characterCollection = new CharacterCollection_1.CharacterCollection("helloWorld");
characterCollection.sort();
console.log(characterCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
//# sourceMappingURL=index.js.map