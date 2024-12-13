// Import the classes
import Truck from "../classes/Truck.js";
import Motorbike from "../classes/Motorbike.js";
import Car from "../classes/Car.js";
import Vehicle from "../classes/Vehicle.js"; // Ensure Vehicle is imported

// Define the interface
export default interface AbleToTow {
  tow(vehicle: Vehicle): void;
}