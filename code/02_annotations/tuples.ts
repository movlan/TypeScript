//  Tuple - An array like structure where each
//          element represents some property of a record

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const drinkTuple: Drink = ["brown", true, 40];
