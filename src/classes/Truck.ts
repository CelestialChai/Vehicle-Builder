// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';


class Truck extends Vehicle implements AbleToTow {

  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor for the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Call the constructor of the vehicle parent class
    super();
   // Initialize properties of the truck
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Check if the wheels array has 4 elements, if not, create 4 new default Wheel objects
    if (wheels.length !== 4) {
      this.wheels = [
        new Wheel(18, "Default Brand"),
        new Wheel(18, "Default Brand"),
        new Wheel(18, "Default Brand"),
        new Wheel(18, "Default Brand")
      ];
    } else {
      this.wheels = wheels;
    }
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // Get the make and model of the vehicle
    const vehicleMakeModel = `${vehicle.make} ${vehicle.model}`;

    // Check if the vehicle's weight to the towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing the ${vehicleMakeModel}.`);
    } else {
      console.log(`The ${vehicleMakeModel} is too heavy for a tow.`);
    }
  }

  // Override the printDetails 
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Log the details specific to the Truck class
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);

    // Print details of the wheels
    this.wheels.forEach((wheel, index) => {
      console.log(
        `Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`
      );
    });
  }
}

// Export the Truck class as the default export
export default Truck;
