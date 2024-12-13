// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties of the Wheel class using private access modifier
  private diameter: number;
  private tireBrand: string;

  // Constructor for the Wheel class
  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
    this.diameter = diameter;
    this.tireBrand = tireBrand;
  }

  // Getter method for the diameter property
  get diameterSize(): number {
    return this.diameter;
  }

  // Getter method for the tireBrand property
  get brand(): string {
    return this.tireBrand;
  }
}

// Export the Wheel class
export default Wheel;