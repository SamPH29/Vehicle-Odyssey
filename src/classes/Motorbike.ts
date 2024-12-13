// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  wheels: Wheel[];

  // Create a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = []
  ) {
    // Call the constructor of the parent class, Vehicle
    super(vin, color, make, model, year, weight, topSpeed);
    
    // Ensure that the Motorbike has exactly 2 wheels
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
  }

  // Implement the wheelie method
  wheelie() {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override the printDetails method from the Vehicle class
  override printDetails() {
    super.printDetails(); // Call the parent class method
    console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.diameterSize} inch ${wheel.brand}`).join(', ')}`);
  }
}


// Export the Motorbike class as the default export
export default Motorbike;