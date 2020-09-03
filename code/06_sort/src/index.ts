import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([100, 3, -5, 12, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterCollection = new CharacterCollection("helloWorld");
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();

linkedList.print();
