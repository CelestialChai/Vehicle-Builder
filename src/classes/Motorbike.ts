// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';


class Motorbike extends Vehicle {

  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Constructor for the motorbike
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    //
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    if (wheels.length !== 2) {
      this.wheels = [
        new Wheel(17, "Default Brand"),
        new Wheel(17, "Default Brand")
      ];
    } else {
      this.wheels = wheels;
    }
  }

  //wheelie
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

   override printDetails(): void {
  super.printDetails();

    // details of the motorbike logged
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);

//printdetails for wheels
console.log(
  `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
);
console.log(
  `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
);
}
}
export default Motorbike;
