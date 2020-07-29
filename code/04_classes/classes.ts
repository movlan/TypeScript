class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log("dr dr dr dr");
  }
}

// vehicle.honk();

const car = new Car(4, "blue");

console.log(car);
// car.drive();
// car.honk();
