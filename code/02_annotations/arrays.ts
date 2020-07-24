// we do not need to annotate arrays if we initialize it with values
const carMakers = ["ford", "toyota", "chevy"];

// we annotate arrays if we initialize it w/ empty array
const newStringArray: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push("100");

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// Flexible types
const importantDates = [new Date(), "2020-12-31"];
