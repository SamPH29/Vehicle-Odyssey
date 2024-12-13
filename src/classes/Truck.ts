// Import the necessary classes and interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extends Vehicle and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  towingCapacity: number;
  wheels: Wheel[];

  // Constructor for the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = [],
    towingCapacity: number = 10000 // Provide a default value for towingCapacity
  ) {
    // Call the constructor of the parent class (Vehicle)
    super(vin, color, make, model, year, weight, topSpeed);
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(17, "Default"), new Wheel(17, "Default"), new Wheel(17, "Default"), new Wheel(17, "Default")];
    this.towingCapacity = towingCapacity;
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Vehicle): void {
    console.log(`Towing vehicle ${vehicle.make} ${vehicle.model} with VIN ${vehicle.vin}`);
  }
}

export default Truck;