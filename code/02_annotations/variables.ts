let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let numbers: number[] = [1, 2, 3];

// Classes
class Car {}

var car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotation
// 1) Function that returns the "any" type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2)  Delayed initialization
//     When we declare a variable on one line
//     and initialize it later

let words: string[] = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3)  Whenever we have variable type connot be inferred correctly
let number = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < number.length; i++) {
  numberAboveZero = number[i];
}
