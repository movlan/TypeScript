import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";

const numbersCollection = new NumbersCollection([100, 3, -5, 12, 0]);
const characterCollection = new CharacterCollection("helloWorld");

const sortNumbers = new Sorter(numbersCollection);
const sortChars = new Sorter(characterCollection);

sortNumbers.sort();
sortChars.sort();

console.log(numbersCollection.data);
console.log(characterCollection.data);
