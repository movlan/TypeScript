//  Tuple - An array like structure where each
//          element represents some property of a record

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const drinkTuple: Drink = ["brown", true, 40];

// Tuples used rarely because it is hard to understand what values means
