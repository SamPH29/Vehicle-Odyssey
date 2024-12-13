import { describe, it, expect } from "vitest";
import Truck from "../src/classes/Truck.js";
import Car from "../src/classes/Car.js";
import Motorbike from "../src/classes/Motorbike.js";
import Wheel from "../src/classes/Wheel.js";
import Cli from "../src/classes/Cli.js";

describe("Vehicle Classes", () => {
  it("should create a truck with the correct properties", () => {
    const vin = Cli.generateVin();
    const truck = new Truck(vin, "red", "Ford", "F-150", 2021, 5000, 120, [], 10000);

    expect(truck.vin).toBe(vin);
    expect(truck.color).toBe("red");
    expect(truck.make).toBe("Ford");
    expect(truck.model).toBe("F-150");
    expect(truck.year).toBe(2021);
    expect(truck.weight).toBe(5000);
    expect(truck.topSpeed).toBe(120);
    expect(truck.towingCapacity).toBe(10000);
  });

  it("should create a car with the correct properties", () => {
    const vin = Cli.generateVin();
    const car = new Car(vin, "blue", "Toyota", "Camry", 2021, 3000, 130, []);

    expect(car.vin).toBe(vin);
    expect(car.color).toBe("blue");
    expect(car.make).toBe("Toyota");
    expect(car.model).toBe("Camry");
    expect(car.year).toBe(2021);
    expect(car.weight).toBe(3000);
    expect(car.topSpeed).toBe(130);
  });

  it("should create a motorbike with the correct properties", () => {
    const vin = Cli.generateVin();
    const motorbikeWheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
    const motorbike = new Motorbike(
      vin,
      "black",
      "Harley Davidson",
      "Sportster",
      2021,
      500,
      125,
      motorbikeWheels
    );

    expect(motorbike.vin).toBe(vin);
    expect(motorbike.color).toBe("black");
    expect(motorbike.make).toBe("Harley Davidson");
    expect(motorbike.model).toBe("Sportster");
    expect(motorbike.year).toBe(2021);
    expect(motorbike.weight).toBe(500);
    expect(motorbike.topSpeed).toBe(125);
    expect(motorbike.wheels.length).toBe(2);
    expect(motorbike.wheels[0].diameterSize).toBe(17);
    expect(motorbike.wheels[0].brand).toBe("Michelin");
  });
});